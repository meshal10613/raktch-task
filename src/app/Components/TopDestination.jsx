import Link from 'next/link'
import React from 'react'
import { SlArrowRight } from "react-icons/sl";

export default function TopDestination() {
    return (
        <div>
            <h2 className='text-[#F411CF] font-bold text-2xl mb-3'>TOP DESTINATION</h2>
            <h1 className='text-5xl font-bold mb-5'>Explore top destination</h1>
            <div>

            </div>
            <Link href="/services" className='flex items-center justify-center gap-1 text-[#872BFF] bg-[#F9F4FF] text-base btn w-[110px] rounded-3xl border-none mx-auto my-10 py-1'>See All <SlArrowRight /></Link>
        </div>
    )
}
