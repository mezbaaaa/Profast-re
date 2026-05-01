import { Building2, MapPin, Truck, Wallet } from 'lucide-react';
import React from 'react';

const services = [
  {
    title: "Booking Pick & Drop",
    description: "Fast and hassle-free pickup and drop for all your parcels — anywhere, anytime.",
    icon: Truck
  },
  {
    title: "Cash On Delivery",
    description: "Convenient cash collection on delivery — making transactions smoother for everyone.",
    icon: Wallet
  },
  {
    title: "Delivery Hub",
    description: "A reliable hub for organizing and managing all your deliveries efficiently.",
    icon: MapPin
  },
  {
    title: "Booking SME & Corporate",
    description: "Tailored delivery solutions for small businesses and corporate logistics needs.",
    icon: Building2
  }
];

const HowItWork = () => {
    return (
        <div className='mt-8 mx-auto w-[1300px]'>
            <div>
                <p className='text-[#03373D] text-3xl font-bold '>How it Works</p>
            </div>
            <div className='my-4 flex gap-6'>
                {
                  services.map((services)=>{
                    const Icon= services.icon;
                  return(
                    <div key={services.title} className='border px-7 py-5 rounded-xl bg-white/70 border-gray-500/60 '>
                      <Icon className='w-9 h-9 '></Icon>
                      <p className='text-xl text-[#03373D] font-bold my-4 '>{services.title} </p>
                      <p className='text-base font-medium '>{services.description} </p>
                    </div>
                  )
                  })
                }
            </div>
        </div>
    );
};

export default HowItWork;