import React, { useState } from 'react'
import './subscribe.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Card, Col, Container, FormControl, FormFloating, FormSelect, Row, Stack, } from 'react-bootstrap';
import Nav from '../../components/nav/Nav'
import data from "../places/data.json"
import axios from 'axios';
const fom = new Intl.NumberFormat("en-US")
const format = (n) => "₦" + fom.format(n);
const Subscribe = () => {
  const { id } = useParams()
  let plan = {}
  //first find in lagos before abuja
  plan = data.lagos.find(p => p.id === id) || data.abuja.find(p => p.id === id) || data.lagosEnt.find(p => p.id === id);
  const [form, setForm] = useState({ name: "", email: "", plan: plan.name, address: "", phone: "", type: "shared" })
  const [sending, setSending] = useState(false)
  const navigate = useNavigate()
  return (
    <div className='subscribe'>
      <Nav />
      <Container>
        <h1>Subscription For {plan.name}</h1>
        <br />
        <Row className='g-3'>
          <Col md={7}>
            <Card className='text-start shadow border-0'>
              <Card.Body>
                <h3>{plan.name}</h3>
                <div className="text-sm text-muted pb-3">Plan Name</div>
                <h3>{format(plan.price)}</h3>
                <div className="text-sm text-muted pb-3">Monthly Cost </div>
                <Stack direction='horizontal' className='justify-content-start'>
                  {(plan.enterprise && form.type === "shared") && <div className="text-sm text-muted pe-2">*Starts At </div>}
                  <h3>{form.type === 'shared' ? format(plan.setup) : <a href='tel:08105162231'>Contact Sales</a>}</h3>
                </Stack>
                <div className="text-sm text-muted pb-3">Setup Costs</div>
              </Card.Body>
            </Card>
            <Card className='text-start shadow border-0 mt-4'>
              <Card.Body>
                <h3>{form.type==="shared" ? format(plan.price + (plan.setup || 0) + (0.075 * (plan.price + (plan.setup || 0)))) : <a href='tel:08105162231'>Contact Sales</a>}</h3>
                <div className="text-sm text-muted pb-3">Total Payment for Installation (VAT Inclusive {!plan.setup && " and Setup Costs Excluded"})</div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <form onSubmit={e => {
              e.preventDefault()
              setSending(true)
              const formData = new FormData();
              Object.keys(form).forEach(k => formData.append(k, form[k]))
              axios.post("https://preview.telservenet.com/send-mail.php", formData).then((d) => {
                if (d.data.sent) {
                  // alert("Request Sent Successfully You will be contacted soon a member of our sales department")
                  navigate("/successful")
                } else {
                  alert("Sorry Unable to send request, please try again alter or contact us, Thank you")
                }
              }).catch(err => {
                alert("Unable to connect with servers at this time try again later")
                console.log(err);
              }).finally(() => {
                setSending(false)
              })

              // axios.get("https://jsonplaceholder.typicode.com/posts/")
            }}>
              <h4 className='text-start'>Send Request</h4>
              <Stack gap={2}>
                <FormFloating>
                  <FormControl placeholder='name' required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  <label htmlFor="">Customer Name</label>
                </FormFloating>
                {
                  plan.enterprise && <FormFloating>
                    <FormSelect value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
                      <option value='shared'>Shared</option>
                      <option value='dedicated'>Dedicated</option>
                    </FormSelect>
                    <label htmlFor="">Subscription Type</label>
                  </FormFloating>
                }

                <FormFloating>
                  <textarea placeholder='name' required className='form-control' style={{ height: 100 }} value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
                  <label htmlFor="">Installation Address</label>
                </FormFloating>
                <FormFloating>
                  <FormControl placeholder='name' type='email' value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  <label htmlFor="">Email</label>
                </FormFloating>
                <FormFloating>
                  <FormControl placeholder='name' required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  <label htmlFor="">Phone Number</label>
                </FormFloating>
                <Button type='submit' disabled={sending}>{sending ? "Please Wait...." : "Enquire"}</Button>
              </Stack>
            </form>
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default Subscribe