"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from 'next/link'
import React from 'react'

export default function Banner() {
    return (
        // <div className='flex flex-col md:flex-row items-center gap-10 md:gap-0 justify-between my-10 md:my-20'>
        //     <div className='space-y-10 my-10'>
        //         <h2 className='text-7xl font-bold'>From <br /> Southeast Asia <br /> <span className='text-[#F411CF]'>to the World.</span></h2>
        //         <p className='text-[#A8A8A8] text-xl'>Stay updated with travel tips, recommendations, and latest promos.</p>
        //         <Link href="/contact" className="bg-[#872BFF] text-white px-8 py-4 rounded-3xl text-base" >Get Started</Link>
        //     </div>
        //     <div className='flex gap-10 max-w-3xl relative'>
        //         <div className='flex flex-col gap-6'>
        //             <img src='/banner/banner-1.png' alt="" className='w-fit relative top-10' />
        //             <img src='/banner/banner-3.png' alt="" className='w-fit relative top-10' />
                    
        //         </div>
        //         <div className='flex flex-col gap-6'>
        //             <img src='/banner/banner-2.png' alt="banner-1" className='w-fit' />
        //             <img src='/banner/banner-4.png' alt="" className='w-fit' />
        //         </div>
        //         <img src="/banner/location.png" alt="" className='w-fit absolute -bottom-13 right-1/3 transform -translate-x-1/2' />
        //         <img src="/banner/Plane.png" alt="" className='w-fit absolute -top-8 left-1/2 transform -translate-x-1/2' />
        //     </div>
        // </div>
        <div className="w-full mx-auto my-10">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="shadow-lg"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                <img
                    src="https://i.ibb.co.com/vvhwyqdC/5327.webp"
                    alt="Nature"
                    className="w-full h-[60vh] object-cover"
                />
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                <img
                    src="https://i.ibb.co.com/Z6bV5bxM/nepal-everest-base-camp-everest-travel-photo-20190128094442660-main-image.jpg"
                    alt="Travel"
                    className="w-full h-[60vh] object-cover"
                />
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                <img
                    src="https://i.ibb.co.com/hkqxL2q/home-main.png"
                    alt="Beach"
                    className="w-full h-[60vh] object-cover"
                />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
