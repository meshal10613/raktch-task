import React from 'react'

export const metadata = {
    title: "Travelo | Tours",
    description: "Tours page",
    icons: {
        icon: "/logo/Vector.png", // your logo or favicon path
    },
};

export default function ToursLayout({children}) {
    return (
        <div>{children}</div>
    )
}
