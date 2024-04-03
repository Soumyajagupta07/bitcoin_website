import React from 'react'
import Sponsored from './Sponsored'
import CustomizedButtons from './RightBodyHead'
import '../CSS/TopBodyHead.css'
// import '../CSS/Sponsored.css'

export default function TopBodyHead(){
  return (
    <div className='TopBodyHead'>
        <Sponsored/>
        <CustomizedButtons/>
    </div>
  )
}
