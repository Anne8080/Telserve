import React from 'react'
import './circlebar.scss'

// Import react-circular-progressbar module and styles
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider.tsx";
import 'react-circular-progressbar/dist/styles.css'

const Circlebar = ({perc, ratio, pcol, tcol}) => {
  return (
    <div>
        <AnimatedProgressProvider
            valueStart={0}
            valueEnd= {perc}
            duration={1.4}
            easingFunction={easeQuadInOut}
            styles={{
                innerWidth: 100,
                innerHeight: 100
            }}
        >
        
            {value => {
            const roundedValue = Math.round(value);
            return (
            
                <CircularProgressbarWithChildren 
                  value={value}
                  circleRatio={ratio}
                  /* This is important to include, because if you're fully managing the
                animation yourself, you'll want to disable the CSS animation. */
                  styles={
                    buildStyles({ 
                      pathTransition: "none",
                      rotation: 0.5 + (1 - ratio) / 2,
                      pathColor: pcol,
                      trailColor: tcol
                    })
                  }
                >
                  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                  <div className='bardets'>
                    <strong>{roundedValue}</strong><br/><span>Mbps</span>
                  </div>
                </CircularProgressbarWithChildren>

          );
        }}
      </AnimatedProgressProvider>
    </div>
  )
}

export default Circlebar