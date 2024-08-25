import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { LiaGiftSolid, LiaMoneyBillWaveSolid, LiaShippingFastSolid } from 'react-icons/lia'
import FeattureCard from './FeattureCard'

const data = [
    {
        title: "Free Shipping",
        icon: <LiaShippingFastSolid/>
    },
    {
        title: "Best Price Guaranteed",
        icon: <LiaMoneyBillWaveSolid/>
    },
    {
        title: "Free Shipping",
        icon: <LiaGiftSolid/>
    },
    {
        title: "Free Shipping",
        icon: <FiPhoneCall/>
    },
]

const FeatureSection = () => {
  return (
    <div className='container pt-16'>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {data.map(el => <FeattureCard key={el.title} title={el.title} icon={el.icon}/>)}
        </div>
        
    </div>
  )
}

export default FeatureSection