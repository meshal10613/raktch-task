import Link from 'next/link'
import React from 'react'

export default function Banner() {
    return (
        <div className='flex flex-col md:flex-row items-center gap-10 md:gap-0 justify-between my-10 md:my-20'>
            <div className='space-y-10 my-10'>
                <h2 className='text-7xl font-bold'>From <br /> Southeast Asia <br /> <span className='text-[#F411CF]'>to the World.</span></h2>
                <p className='text-[#A8A8A8] text-xl'>Stay updated with travel tips, recommendations, and latest promos.</p>
                <Link href="/contact" className="bg-[#872BFF] text-white px-8 py-4 rounded-3xl text-base" >Get Started</Link>
            </div>
            <div className='flex gap-10 max-w-3xl relative'>
                <div className='flex flex-col gap-6'>
                    <img src='/banner/banner-1.png' alt="" className='w-fit relative top-10' />
                    <img src='/banner/banner-3.png' alt="" className='w-fit relative top-10' />
                    
                </div>
                <div className='flex flex-col gap-6'>
                    <img src='/banner/banner-2.png' alt="banner-1" className='w-fit' />
                    <img src='/banner/banner-4.png' alt="" className='w-fit' />
                </div>
                <img src="/banner/location.png" alt="" className='w-fit absolute -bottom-13 right-1/3 transform -translate-x-1/2' />
                <img src="/banner/Plane.png" alt="" className='w-fit absolute -top-8 left-1/2 transform -translate-x-1/2' />
            </div>
        </div>
    )
}
