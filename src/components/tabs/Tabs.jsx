import React from 'react'
import {motion} from 'framer-motion'
import { useState, useEffect } from 'react'
import './tabs.scss'
import './mobiletabs.scss'
import Paytab from '../paytab/Paytab';


const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <div
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <p>Monthly</p>
        </div>
        <div
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <p>Yearly</p>
        </div>
      </div><br />

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="locations">
          <motion.div className='paydiv' initial={{y: -50, x: -200}} whileInView={{ y: '0', x: 0 }} transition={{duration: 0.7, type: 'spring'}}>
            <Paytab 
              plan='Basic' 
              amount='9,000' 
              writeup='Home members' 
              check1='checkp'
              check2='checkp'
              check4='checkp checknot'
              cl='yellowpay'
              tcol='#d3d3d3'
              pcol='#ffa500'
              perc={25}
            /></motion.div>
            <motion.div className='paydiv' initial={{y: -50}} whileInView={{ y: '0' }} transition={{duration: 0.7, type: 'spring'}}>
              <Paytab 
              plan='Standard' 
              amount='19,000' 
              writeup='Office members' 
              check1='checkp'
              check2='checkp'
              check4='checkp checknot'
              cl='purplepay'
              tcol='#ffbf48'
              pcol='#000'
              perc={50}
            /></motion.div>
            <motion.div className='paydiv' initial={{y: 50, x: 200}} whileInView={{ y: '0', x: 0 }} transition={{duration: 0.7, type: 'spring'}}>
            <Paytab 
              plan='Pro' 
              amount='29,000' 
              writeup='Office members' 
              check1='checkp'
              check2='checkp'
              check4='checkp'
              cl='bluepay'
              tcol='#d3d3d3'
              pcol='#ffa500'
              perc={100}
            />
            </motion.div>
            
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="locations">
          <motion.div className='paydiv' initial={{y: -50, x: -200}} whileInView={{ y: '0', x: 0 }} transition={{duration: 0.7, type: 'spring'}}>
            <Paytab 
              plan='Basic' 
              amount='108,000' 
              writeup='Home members' 
              check1='checkp'
              check2='checkp'
              check4='checkp checknot'
              cl='yellowpay'
              tcol='#d3d3d3'
              pcol='#ffa500'
              perc={25}
            /></motion.div>
            <motion.div className='paydiv' initial={{y: 50}} whileInView={{ y: '0' }} transition={{duration: 0.7, type: 'spring'}}>
            <Paytab 
              plan='Standard' 
              amount='228,000' 
              writeup='Office members' 
              check1='checkp'
              check2='checkp'
              check4='checkp checknot'
              cl='purplepay'
              tcol='#ffbf48'
              pcol='#000'
              perc={50}
            /></motion.div>
            <motion.div className='paydiv' initial={{y: 50, x: 200}} whileInView={{ y: '0', x: 0 }} transition={{duration: 0.7, type: 'spring'}}>
            <Paytab 
              plan='Pro' 
              amount='348,000' 
              writeup='Office members' 
              check1='checkp'
              check2='checkp'
              check4='checkp'
              cl='bluepay'
              tcol='#d3d3d3'
              pcol='#ffa500'
              perc={100}
            /></motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Tabs