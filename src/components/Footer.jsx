import React from 'react'
import { Col, Container, Form, Row, Stack, Button } from 'react-bootstrap'
import { MdLocationOn, MdMailOutline, MdPhone } from 'react-icons/md'
import logo from "../assets/telserve_logo_alt.png"
function Footer() {
  return (
    <>
      <div className='bg-semidark p-3 mt-5'>
        <Container>
          <Stack className='justify-content-between flex-column flex-md-row' gap={2}>
            <div className='d-flex align-items-center'>
              <MdLocationOn className='text-primary display-5' />
              <Stack className='justify-content-evenly'>
                <div className="text text-white">19, Ajao Road, Ikeja</div>
                <div className="text text-primary">Visit Us</div>
              </Stack>
            </div>

            <div className='d-flex align-items-center'>
              <MdPhone className='text-primary display-5' />
              <Stack className='justify-content-evenly'>
                <div className="text text-white">091213213212, 08272332423</div>
                <div className="text text-primary">Call Us</div>
              </Stack>
            </div>


            <div className='d-flex align-items-center'>
              <MdMailOutline className='text-primary display-5' />
              <Stack className='justify-content-evenly'>
                <div className="text text-white">info@telservenet.com</div>
                <div className="text text-primary">Drop a mail</div>
              </Stack>
            </div>


          </Stack>
        </Container>
      </div>
      <div className='bg-dark py-5'>
        <Container className='py-5'>
          <Row>
            <Col md={3}>
              <Stack direction='horizontal' gap={1} className='align-items-center'>
                <img src={logo} className='nav-logo roll' />
                <div>
                  <h6 className="text-white fw-bold mt-3 mb-0">Telserve Networks</h6>
                  <p className="text-white text-sm">Company tagline</p>
                </div>
              </Stack>
              <div className="text-sm text-light">
                Ullamco velit tempor eu Lorem do cupidatat ex sit id consequat anim labore laborum.
              </div>
            </Col>
            <Col md={9} className='text-light pt-3 pt-md-0'>
              <Row >
                <Col sm={6} md={5}>
                  <h6 className='fw-bold'>Quick Links</h6>
                  <ul className='text quick-links'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Corporate Responsibility</li>
                  </ul>
                </Col>
                <Col sm={6} md={6}>
                  <h6 className='fw-bold'>Subscribe</h6>
                  <p className="text-sm text-light">
                    Ut quis nostrud officia nostrud sint ex eiusmod proident.
                  </p>
                  <Form.Control placeholder='email' />
                  <Button size='sm mt-2'>Sign Up</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="text-light text-sm container text-end">&copy;{new Date().getFullYear()} Telserve Networks, <br />
          made with ❤ by <a href='https://github.com/ajedamilola'>Aje Damilola</a></div>
      </div>
    </>
  )
}

export default Footer