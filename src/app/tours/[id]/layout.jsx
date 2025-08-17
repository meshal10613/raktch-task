import React from 'react'

export async function generateMetadata() {
    return {
        title: "Travelo | Tour",
        description: "This is the tour page",
    };
};


export default function TourLayout({children}) {
    return (
        <div>
            {children}
        </div>
    )
}
