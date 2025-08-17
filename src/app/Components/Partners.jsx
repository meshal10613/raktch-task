import React from 'react'
import Image from 'next/image'
import P1 from '@/app/image/Airbnb.png'
import P2 from '@/app/image/Booking.png'
import P3 from '@/app/image/tiket.com.png'
import P4 from '@/app/image/Traveloka.png'
import P5 from '@/app/image/Tripadvisor.png'

export default function Partners() {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 my-30'>
            <Image src={P1} alt="" className='mx-auto'/>
            <Image src={P2} alt="" className='mx-auto'/>
            <Image src={P3} alt="" className='mx-auto'/>
            <Image src={P4} alt="" className='mx-auto'/>
            <Image src={P5} alt="" className='col-span-2 md:col-span-1 mx-auto' />
        </div>
    )
}