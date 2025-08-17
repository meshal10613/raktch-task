"use client"

import React, { use, useEffect, useState } from 'react'
import Swal from 'sweetalert2';

export default function TourDetailsPage({params}) {
    const {id} = use(params);
    const [tours, setTour] = useState([]);

    useEffect(() => {
        fetch("/tours.json") // ✅ fetch from public folder
        .then((res) => res.json())
        .then((data) => setTour(data));
    }, []);
    const tour = tours.find((t) => t.id == id);

    const handleBook = () => {
        Swal.fire({
            title: "Congratulations!",
            text: "wait for the upcoming updates",
            icon: "success",
            confirmButtonColor: "#872BFF"
        });
    }

    return (
        <div className='px-[1%] md:px-[5%] my-5 2xl:px-[7%]'>
            <div className='flex flex-col-reverse xl:flex-row gap-10 items-baseline xl:items-center justify-between mb-10'>
                <div className='flex-1'>
                    <h2 className='text-5xl font-bold mb-5'>{tour?.tour_name}</h2>
                    <div className='flex items-center gap-2 mb-5'>
                        {
                            tour?.tour_type.map((type, index) => (
                                <span key={index} className='badge badge-md text-base bg-[#872BFF] text-white rounded-3xl'>{type}</span>
                            ))
                        }
                    </div>
                    <div className='border border-[#A8A8A8] rounded-3xl p-5'>
                        <h2 className='font-bold text-2xl mb-2'>Overview</h2>
                        <p className='text-base text-[#A8A8A8]'>{tour?.overview}</p>
                    </div>
                    <div onClick={handleBook} className='btn btn-block mt-5 rounded-3xl bg-[#872BFF] text-white'>Book Now</div>
                </div>
                <div className='flex-1'>
                    <img src={tour?.image[0]} alt={tour?.tour_name} className='rounded-3xl h-[500px]'/>
                </div>
            </div>
            <div className='border border-[#A8A8A8] rounded-3xl p-5'>
                <h2 className='font-bold text-2xl mb-2'>What’s Included</h2>
                <ul className="list-disc ml-10 space-y-3 text-[#A8A8A8]">
                    {
                        tour?.whats_include.map((inc, index) => (
                            <li key={index}>{inc}</li>
                        ))
                    }
                </ul>
                <div className='divider'></div>
                <h2 className='font-bold text-2xl mb-2'>Additional Information</h2>
                <p className='text-[#A8A8A8] ml-10'>{tour?.additional_information}</p>
            </div>
        </div>
    )
}
