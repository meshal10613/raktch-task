"use client"

import Image from 'next/image'
import React from 'react'
import girl from '@/app/image/Travel/travel.png';
import CountUp from 'react-countup';

const cards = [
    {
        id: 1,
        title: "200",
        description: "Holiday Package"
    },
    {
        id: 2,
        title: "450",
        description: "RedDoorz"
    },
    {
        id: 3,
        title: "10",
        description: "Premium Airlines"
    },
    {
        id: 4,
        title: "1200",
        description: "Happy Customer"
    },
]


export default function TravelPoint() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10 md:my-20'>
            <div className=''>
                <Image src={girl} alt='travel' className='relative top-0 w-fit'/>
            </div>
            <div>
                <h2 className='text-[#F411CF] font-bold text-2xl mb-3'>TRAVEL POINT</h2>
                <h1 className='text-5xl font-bold mb-5'>We help you find your <br /> dream destination</h1>
                <p className='text-[#A8A8A8] text-xl'>Hey! Travelo there to help you find your dream holiday. <br /> Easy you just find where you want to go and buy the ticket.</p>
                <div className='flex items-center justify-baseline my-10'>
                    <div className='grid grid-cols-2 gap-10 w-fit mx-auto md:mx-0'>
                        {
                            cards.map((card) => (
                                <div key={card.id} className='border-2 border-[#A8A8A8] rounded-3xl w-40 h-40 flex flex-col items-center justify-center space-y-2'>
                                    <h2 className='text-4xl font-semibold text-[#872BFF]'><CountUp end={card.title} duration={5}/>+</h2>
                                    <p className='text-[#A8A8A8]'>{card.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
