import React from 'react';
import Rocket from '../../../assets/services-icon/Rocket.webp'
import Globe2 from '../../../assets/services-icon/Globe2.webp'
import Boxes from '../../../assets/services-icon/Boxes.webp'
import Wallet from '../../../assets/services-icon/Wallet.webp'
import Building2 from '../../../assets/services-icon/Building2.webp'
import Undo2 from '../../../assets/services-icon/Undo2.webp'

const services = [
  {
    title: "Express & Standard Delivery",
    description: "We deliver parcels within 24–72 hours in major cities. Fast-track option in Dhaka: 4–6 hours pick-up to drop-off.",
    icon: Rocket
  },
  {
    title: "Nationwide Delivery",
    description: "Doorstep delivery across Bangladesh within 48–72 hours — every district covered.",
    icon: Globe2
  },
  {
    title: "Fulfillment Solution",
    description: "End-to-end inventory, order processing, packaging, and post-sale support for your business.",
    icon: Boxes
  },
  {
    title: "Cash on Home Delivery",
    description: "100% cash on delivery anywhere in Bangladesh — safe and secure payment on arrival.",
    icon: Wallet
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description: "Custom logistics contracts with warehouse & inventory support for businesses of all sizes.",
    icon: Building2
  },
  {
    title: "Parcel Return",
    description: "Easy return and exchange support through our reverse logistics service for online buyers.",
    icon: Undo2
  }
];

const OurServices = () => {
    return (
        <div className='bg-[#03373D] px-28 py-24 rounded-3xl mt-24'>
            <div className='text-center space-y-3'>
                <p className='text-white text-4xl font-extrabold  ' >Our Services</p>
                <p className='text-white/80 text-base font-medium  '>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className='grid grid-cols-3 gap-6 mt-8 '>
                {
                    services.map((services,index)=><div key={index} className='border rounded-2xl text-center space-y-4 bg-white/95 hover:bg-[#CAEB66] transition-all duration-300 px-6 py-9 '>
                        <div className='w-max mx-auto '>
                            <img className='w-20 h-20 p-4 bg-linear-to-b from-[#EEEDFC] to-[#EEEDFC10] rounded-full ' src={services.icon} alt={services.title} />
                        </div>
                        <h1 className='text-[#03373D] font-bold text-2xl '>{services.title} </h1>
                        <p className='text-base text-[#606060] font-bold'>{services.description} </p>
                    </div> )
                }
            </div>
        </div>
    );
};

export default OurServices;