import React from 'react'
import img1 from '@/app/image/feature/feature1.png'
import img2 from '@/app/image/feature/feature2.png'
import img3 from '@/app/image/feature/feature3.png'
import Image from 'next/image'
import key1 from '@/app/image/key/key1.png'
import key2 from '@/app/image/key/key2.png' 

const features = [
    {
        id: 1,
        image: img1,
        title: "Select many location",
        description: "Chooce your favorite location "
    },
    {
        id: 2,
        image: img2,
        title: "Schedule your trip",
        description: "Set the date you want"
    },
    {
        id: 3,
        image: img3,
        title: "Big discount",
        description: "Get discount for every servicesa"
    }
]

export default function KeyFeatures() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div>
                <h2 className='text-[#F411CF] font-bold text-2xl mb-3'>KEY FEATURES</h2>
                <h1 className='text-5xl font-bold mb-5'>We offer best services</h1>
                <p className='text-[#A8A8A8] text-xl'>Hey! Travelo there to help you find your dream holiday. <br /> Easy you just find where you want to go and buy the ticket.</p>
                <div>
                    {
                        features.map((f) => (
                            <div key={f.id} className='shadow-xl rounded-3xl p-5 w-[450px] flex items-center justify-center gap-10 h-40 mx-auto md:mx-0'>
                                <Image src={f.image} alt={f.title} className='w-18'/>
                                <div>
                                    <h2 className='text-2xl font-bold'>{f.title}</h2>
                                    <p>{f.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='relative'>
                <Image src={key1} alt='one' className='w-fit' />
                <Image src={key2} alt='two' className='absolute top-60 left-20 md:top-52 md:left-32 w-fit' />
            </div>
        </div>
    )
}
