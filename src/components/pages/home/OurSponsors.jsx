import React from 'react';
import Marquee from 'react-fast-marquee';
import brand1 from '../../../assets/brands/amazon.png'
import brand2 from '../../../assets/brands/casio.png'
import brand3 from '../../../assets/brands/moonstar.png'
import brand4 from '../../../assets/brands/amazon_vector.png'
import brand5 from '../../../assets/brands/randstad.png'
import brand6 from '../../../assets/brands/start-people 1.png';
import brand7 from '../../../assets/brands/start.png';

const logos = [brand1,brand2,brand3,brand4,brand5,brand6,brand7]

const OurSponsors = () => {
    return (
        <div className=' my-24 '>
            <div>
                <h1 className='text-[#03373D] text-3xl font-bold text-center '>We've helped thousands of sales teams</h1>
            </div>
            <Marquee
            gradient
            pauseOnHover
            speed={80}
            >
                {
                    logos.map((logo,index)=><div key={ index} className='my-10 items-center flex mx-16'>
                        <img src={logo} alt="" className='h-6 object-center ' />
                    </div> )
                }
            </Marquee>
            <div className="mt-14 border-t border-dashed border-[#03373D70]"></div>
        </div>
    );
};

export default OurSponsors;