import React, {useState} from 'react'
import './selectplan.scss'
import Accordition from '../accordition/Accordition'


const Selectplan = ({totalselct}) => {
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
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="">
            <Accordition name='plan' dur='month' totalacc={totalselct} />
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="">
            <Accordition name='plan' dur='year' totalacc={totalselct}/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Selectplan