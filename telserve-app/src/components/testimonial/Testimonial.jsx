import React, { Component } from 'react'
import './testimonial.scss'
import Testimony from '../testimony/Testimony'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// function SampleNextArrow(props) {
//     const { className, style } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", color: "red" }}
//       />
//     );
//   }
  
//   function SamplePrevArrow(props) {
//     const { className, style } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "green" }}
//       />
//     );
//   }

const slides =[
    {
        pic: '',
        word: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quia deleniti ex! Error architecto laboriosam mollitia, accusamus nam nostrum. Mollitia sunt praesentium repudiandae laborum magnam itaque et fugiat beatae rem.',
        name: 'Ella Henderson'
    },
    {
        pic: '',
        word: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quia deleniti ex! Error architecto laboriosam mollitia, accusamus nam nostrum. Mollitia sunt praesentium repudiandae laborum magnam itaque et fugiat beatae rem.',
        name: 'Mark Zuckerberg'
    },
    {
        pic: '',
        word: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quia deleniti ex! Error architecto laboriosam mollitia, accusamus nam nostrum. Mollitia sunt praesentium repudiandae laborum magnam itaque et fugiat beatae rem.',
        name: 'Mr. Charles'
    },
    {
        pic: '',
        word: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quia deleniti ex! Error architecto laboriosam mollitia, accusamus nam nostrum. Mollitia sunt praesentium repudiandae laborum magnam itaque et fugiat beatae rem.',
        name: 'Daniel Anya'
    }
]

var settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
};

const Testimonial = () => {
  return (
    <div className='testimonial'>
        <h1>Our Customer Feedback</h1>
        <div className="innertest">
            <Slider {...settings} className="testdiv">
                <div>
                    <Testimony pic={slides[0].pic} word={slides[0].word} name={slides[0].name}/>
                </div>
                <div>
                    <Testimony pic={slides[1].pic} word={slides[1].word} name={slides[1].name} cls='o'/>
                </div>
                <div>
                    <Testimony pic={slides[2].pic} word={slides[2].word} name={slides[2].name}/>
                </div>
                <div>
                    <Testimony pic={slides[3].pic} word={slides[3].word} name={slides[3].name} cls='o'/>
                </div>
            </Slider>
        </div>
        {

        }
    </div>
  )
}

export default Testimonial