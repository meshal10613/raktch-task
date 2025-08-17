"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";

export default function ToursPage() {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch("/tours.json") // ✅ fetch from public folder
        .then((res) => res.json())
        .then((data) => setTours(data));
    }, []);
    return (
        <div className='px-[1%] md:px-[5%] my-5 2xl:px-[7%]'>
            <h2 className='text-[#F411CF] font-bold text-2xl mb-3'>Tours</h2>
            <p className='text-[#A8A8A8] text-xl'>Explore experiences, spas, tours and more</p>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 my-10'>
                {
                    tours.map((tour) => (
                        <div key={tour.id} className="card bg-base-100 w-96 mx-auto shadow-sm">
                            <figure>
                                <img
                                src={tour?.image[0]}
                                alt="Shoes" className='w-full h-56' />
                            </figure>
                            <div className="card-body gap-0">
                                <div className='text-base text-[#A8A8A8] flex items-center gap-1 mb-3'><MdOutlineLocationOn />{tour?.location}</div>
                                <Link href={`/tours/${tour.id}`} className="card-title hover:underline mb-1 cursor-pointer">{tour?.tour_name}</Link>
                                <div className='flex items-center gap-2 mb-2'>
                                    {
                                        tour.tour_type.map((type, index) => (
                                            <span key={index} className='badge badge-md text-base bg-[#872BFF] text-white rounded-3xl'>{type}</span>
                                        ))
                                    }
                                </div>
                                <div className="divider my-0 mb-2"></div>
                                <div className='flex items-center justify-between'>
                                    <h2 className='text-xl'>From <span className='font-semibold'>${tour?.price}</span></h2>
                                    <h2 className='text-base flex items-center gap-1'><IoTimeOutline />{tour?.duration}</h2>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
