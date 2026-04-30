import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import image1 from '../../../assets/banner/banner1.png'
import image2 from '../../../assets/banner/banner2.png'
import image3 from '../../../assets/banner/banner3.png'

const Banner = () => {
    return (
        <div className='mt-8'>
            <style>{`
             .swiper-button-next,
                .swiper-button-prev {
                    color: #CAEB66;
                }
            `}</style>
            <Swiper
                className="mySwiper "
                modules={[Navigation, Pagination, Autoplay, Mousewheel]}
                loop={true}
                navigation
                pagination={{ dynamicBullets: true }}
                autoplay={{ delay: 3000 }}
                mousewheel={true}
            >
                <SwiperSlide>
                    <div className="relative h-full">
                        <img
                            src={image1}
                            className="w-fit h-fit object-cover"
                        />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative h-full">
                        <img
                            src={image2}
                            className="w-fit h-fit object-cover"
                        />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative h-full">
                        <img
                            src={image3}
                            className="h-fit w-fit object-cover"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;