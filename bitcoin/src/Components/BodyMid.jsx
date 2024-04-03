import Logo from "./Logo";
import BodyMidInfo from "./BodyMidInfo";
import '../CSS/BodyMid.css';
import Usd from "./Usd";
import Balance from "./Balance";
import cryptoImg from "../image/crypto_img.jpeg";
// import React from 'react'

const BodyMid = () => {
  return (
    <>
    <div className="BodyMid">
        <div className="info">
        <Logo/>
        <BodyMidInfo/>
        </div>
        <Usd/>
    </div>
    <div className="bodyMidBalance"><Balance/></div>
    <div className="cryptoImg"><img src={cryptoImg} alt="" srcset="" /></div>
    </>

  )
}
export default BodyMid;