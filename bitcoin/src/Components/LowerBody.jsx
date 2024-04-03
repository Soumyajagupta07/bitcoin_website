import React from 'react'
import '../CSS/LowerBody.css';
import LowBodyHead from './LowBodyHead';

const LowerBody = () => {
  return (
    <div className='lowerBody'>
        <LowBodyHead/>
        <h2>Summary</h2>
        <div className='content'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quidem sapiente animi odit quasi nemo dolorem. Numquam deserunt neque non atque, deleniti, fuga asperiores inventore consectetur facere eos ipsam unde.
            </p>

            <div>
                <p>Total Receive</p><br />
                <b>15654676.05157364 BTC</b><br />
                <p>$1040261050965.09</p><br /><br />
                <p>Transactors</p>
                <b>1,191,642</b>
            </div>
            <div>
            <p>Total Sent</p><br />
            <b>15654675.70010705 BTC</b>
            <p>$1040261027609.96</p>

            </div>
            <div>
                <p>Total Volume</p><br />
                <b>31309351.751680687 BTC</b>
                <p>$2080522078575.06</p>
            </div>

        </div>

    </div>
  )
}
export default LowerBody;