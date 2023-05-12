import React, { useState } from 'react'
import './accordition.scss'
import visa from '../../pics/visa.png'
import mc from '../../pics/mastercard.png'
import Chose from '../chose/Chose'

const pay = [
    {
        choice: 'payment payplan',
        choices: 'payment selected payplan',
        type:'**** 4444', 
        cardtype:'Visa',
        src: visa,
    },
    {
        choice: 'payment payplan',
        choices: 'payment selected payplan',
        type:'**** 4444', 
        cardtype:'Mastercard',
        src: mc,
    }
]

const plan = [
    {
        choice: 'cplan payplan',
        choices: 'cplan selected payplan',
        type:'Basic',
        users: 'Home Users',
        amounty:'108,000',
        amountm: '9,000',
        deta:'show', 
        detai:'show', 
        detail:'hide',
    },
    {
        choice: 'cplan payplan',
        choices: 'cplan selected payplan',
        type:'Standard',
        users: 'Office Users',
        amounty:'228,000',
        amountm: '19,000',
        deta:'show', 
        detai:'show', 
        detail:'hide',
    },
    {
        choice: 'cplan payplan',
        choices: 'cplan selected payplan',
        type:'Pro',
        users: 'Office Users',
        amounty:'348,000',
        amountm: '29,000',
        deta:'show', 
        detai:'show', 
        detail:'show',
    }
]


const Accordition = ({name, dur, totalacc}) => {
    const [selected, setSelected] = useState(null)

    const toggle = (i) =>{
    //   if (selected === i){
    //     return setSelected(null)
    //   }
      setSelected(i)
    }
    return (
      <div className='acdiv'>
        {name === 'plan' ?

            plan.map((item, i)=>(
                <div className="item">
                    <div onClick={() => {toggle(i)}}>
                        <Chose choice={selected === i ? item.choices : item.choice} type={item.type} users={item.users} amount={dur === 'month' ? item.amountm : item.amounty} deta={item.deta} detais={item.detai} detail={item.detail} totalchose={totalacc}/>
                    </div>
                </div>
            ))
            :
            pay.map((item, i)=>(
                <div className="item">
                    <div onClick={() => toggle(i)}>
                        <Chose choice={selected === i ? item.choices : item.choice} type={item.type} cardtype={item.cardtype} src={item.src} />
                    </div>
                </div>
            ))
        }
        
      </div>
    )
}

export default Accordition