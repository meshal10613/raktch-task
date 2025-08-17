import React from 'react'
import Img1 from '@/app/image/service/H1.png'
import Img2 from '@/app/image/service/g2.png'
import Img3 from '@/app/image/service/g3.png'
import Image from 'next/image';

export default function Service() {
    const cards = [
        {
            id: 1,
            image: Img1,
            title: "All You Needs",
            description: "From flights, stays, to sights, just count on our complete products."
        },
        {
            id: 2,
            image: Img2,
            title: "Flexible Booking",
            description: "From flights, stays, to sights, just count on our complete products."
        },
        {
            id: 3,
            image: Img3,
            title: "Secure Payment",
            description: "From flights, stays, to sights, just count on our complete products."
        }
    ];

    return (
        <div className=''>
            <h2 className='text-[#F411CF] font-bold text-2xl mb-3'>SERVICES</h2>
            <h1 className='text-5xl font-bold mb-5'>Why book using Travelo</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 my-10 md:my-20'>
                {
                    cards.map((card) => (
                        <div key={card.id} className="card bg-base-100 w-88 mx-auto shadow-2xl rounded-2xl py-15">
                            <figure className="px-10 pt-10">
                                <Image src={card.image} alt={card.title}/>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-3xl font-semibold mb-5">{card.title}</h2>
                                <p className='text-[#A8A8A8] text-xl'>{card.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
