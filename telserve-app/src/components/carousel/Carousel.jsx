import { useState } from "react";
import React from "react";
import './carousel.scss'
import './mobilecaro.scss'
import { Avatar, backdropClasses } from '@mui/material'
import {motion} from 'framer-motion'
// import './mobiletest.scss'
import {Link} from 'react-router-dom'
import Circlebar from "../circlebar/Circlebar";

const dotStyle = {
  margin: "0 10px",
  cursor: "pointer",
};

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? isLastSlide : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  

  return (
    <div className='sliderStyles'>
      <div className="df" style={{position: 'relative'}} >
          {/* style={{backgroundImage: `url(${slides[currentIndex].url})`}} */}
        <div className="float df" id={slides[currentIndex].color} >
            <div className="leftcaroul">
              <motion.h1 initial={{y: -50, x: -200}} animate={{ y: '0', x: 0 }} transition={{duration: 2, type: 'spring'}} key={currentIndex} className="title">{slides[currentIndex].title}</motion.h1>
              <Link to='/subscribe' className="bluebtn msg">{slides[currentIndex].message}</Link>
            </div>
            <div className="rightcaroul">
              <Link to='/help'>
                <motion.div initial={{y: 50, x: 200}} animate={{ y: '0', x: 0 }} transition={{duration: 1, type: 'tween'}} key={currentIndex} className="aimsg df">
                    <Avatar
                      alt="pp"
                      sx={{ width: 30, height: 30 }}
                    />
                    <p className="sayhi">Send a Message!</p>
                </motion.div>  
              </Link>
              <motion.div initial={{y: 50}} animate={{ y: '0'}} transition={{duration: 1, type: 'tween'}} key={currentIndex} className="circlefloat">
                <h3>Up to</h3>
                <Circlebar perc={50} ratio={0.8} pcol='#0000ff' tcol='#d3d3d3'/>
              </motion.div>
            </div>
        </div>
              {currentIndex === 0 ? 
                <div className="blank mleft left"  >
                    {/* ❱ */}
                    ❰
                </div>
              :
                <div onClick={goToPrevious} className='skipArrowStyle'>
                    {/* ❱ */}
                    ❰
                </div>
              }
              {currentIndex === 4 ? 
                <div className='blank right'>
                    ❱
                </div>
              :
                <div onClick={goToNext} className='rightArrowStyles'>
                    ❱
                </div>
              }
        </div>
      <div className='dotsContainerStyles'>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex} 
            onClick={() => goToSlide(slideIndex)}
            className={currentIndex === slideIndex? "dot active" : "dot"}
          >
            {/* ●  */}
          </div>
        ))}
      </div>
    
      
    </div>
  );
};

export default Carousel;