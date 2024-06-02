// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import bgimg1 from '../assets/images/carousel1.jpg'
import bgimg2 from '../assets/images/carousel2.jpg'
import bgimg3 from '../assets/images/carousel3.jpg'
import Slide2 from './Slide2'

export default function Carousel2() {
    return (
        <div className='container px-6 py-10 mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <Slide2
                        image={bgimg1}
                        text='EveryDay Your Help Saves More Pets'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide2
                        image={bgimg2}
                        text='Help Us In a Great Cause'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide2
                        image={bgimg3}
                        text='Help Save More Pets EveryDay'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
