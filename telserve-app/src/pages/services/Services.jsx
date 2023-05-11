import React from 'react'
import './services.scss'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer'
import Servicecard from '../../components/servicecard/Servicecard'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import Company from '../../components/company/Company'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import int from '../../pics/internet.png'
import net from '../../pics/network.png'
import years from '../../pics/years.png'
import Testimonial from '../../components/testimonial/Testimonial'

const Services = () => {
  return (
    <div style={{backgroundColor: '#EBEBEB', overflow: 'hidden'}} id='head'>
        <Nav/>
        <div className="servicehead df">
            <div className="left">
                <motion.h1 initial={{y: -50, x: -200}} animate={{ y: '0', x: 0 }} transition={{duration: 2, type: 'spring'}}>Fast Internet. <br/> For Less. <br /> With Peace of Mind.</motion.h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam repellendus cumque perferendis hic perspiciatis impedit.</p>
                <Link to="/package" className="bluebtn">Offers</Link>
            </div>
            <motion.div initial={{y: -50}} animate={{ y: '0'}} transition={{duration: 1.5, type: 'tween'}} className="right"><img src={int} alt="" /></motion.div>
        </div>
        <div className="features">
            <div className="innerfeatures">
                <div className="title">
                    <h1>Our Service Features</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, hic saepe architecto eaque natus similique?</p>
                </div>
                <div className="featcards df">
                    <motion.div initial={{x: -100}} whileInView={{ x: 0 }} transition={{duration: 2, type: 'spring'}}><Servicecard clasn='servicecard' icon=<StarBorderRoundedIcon style={{color:'blue', fontSize:'2rem'}} /> title='Blazing Fast Speeds' para='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, hic saepe architecto eaque natus similique?' /></motion.div>
                    <div className="middle">
                        <Servicecard clasn='servicecard serve' icon=<StarBorderRoundedIcon style={{color:'blue', fontSize:'2rem'}} /> title='Blazing Fast Speeds' para='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, hic saepe architecto eaque natus similique?' />
                        <motion.div initial={{y: 100}} whileInView={{ y: '0' }} transition={{duration: 2, type: 'spring'}}><Servicecard clasn='servicecard' icon=<StarBorderRoundedIcon style={{color:'blue', fontSize:'2rem'}} /> title='Blazing Fast Speeds' para='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, hic saepe architecto eaque natus similique?' /></motion.div>
                    </div>
                    <motion.div initial={{x: 100}} whileInView={{ x: 0 }} transition={{duration: 2, type: 'spring'}}><Servicecard clasn='servicecard' icon=<StarBorderRoundedIcon style={{color:'blue', fontSize:'2rem'}} /> title='Blazing Fast Speeds' para='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, hic saepe architecto eaque natus similique?' /></motion.div>
                </div>
            </div>
        </div>
        <div className="best df">
            <div className="left">
                <h1>Internet Service Providers Since 2004</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis tenetur ducimus sit? Eum harum ad doloremque sit amet earum. 
                    <br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vero eligendi aspernatur sed blanditiis laborum pariatur quod tempora delectus, hic illo a. Quaerat rem earum quae officiis quam dolor fugit!
                </p>
            </div>
            <div className="right"><img src={years} alt="" /></div>
        </div>
        <div className="provide df">
            <div className="left"><img src={net} alt="" /></div>
            <div className="right">
                <h1>What We Provide</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad commodi cum saepe numquam obcaecati odit dicta reprehenderit, sapiente veniam consectetur.</p>
                <div className="providepara">
                    <motion.p initial={{x: -50}} whileInView={{ x: 0 }} transition={{ duration: 0.5, type: 'spring'}}><CheckBoxOutlinedIcon className='providecheck'/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, labore.</motion.p>
                    <motion.p initial={{x: -50}} whileInView={{ x: 0 }} transition={{ delay: 0.25, duration: 0.5, type: 'spring'}}><CheckBoxOutlinedIcon className='providecheck'/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, labore.</motion.p>
                    <motion.p initial={{x: -50}} whileInView={{ x: 0 }} transition={{ delay: 0.5, duration: 0.5, type: 'spring'}}><CheckBoxOutlinedIcon className='providecheck'/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, labore.</motion.p>
                    <motion.p initial={{x: -50}} whileInView={{ x: 0 }} transition={{ delay: 1, duration: 0.5, type: 'spring'}}><CheckBoxOutlinedIcon className='providecheck'/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, labore.</motion.p>
                </div>
                <Link to="/package" className="bluebtn">See Details</Link>
            </div>
        </div>
        <Company/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Services