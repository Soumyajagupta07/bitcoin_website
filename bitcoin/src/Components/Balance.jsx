import React from 'react'
import '../CSS/Balance.css'

const Balance = () => {
  return (
    <div className='balance'>
        <p >Bitcoin Balance</p>
        <p className='balance_amount'><span>0.35146659</span> = $23,108.47</p>
    </div>
  )
}
export default Balance;