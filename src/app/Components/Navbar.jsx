"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { name: "Home", href: "/" },
        { name: "Tours", href: "/tours" },
        { name: "About Us", href: "/about" },
    ];

    return (
    <div className="navbar px-[1%] md:px-[5%] my-5 2xl:px-[7%]">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links.map((link) => (
                            <Link
                            key={link.href}
                            href={link.href}
                            className={`${
                                pathname === link.href
                                ? "text-[#872BFF] font-bold border-b-2 border-[#872BFF]"
                                : "text-black hover:text-[#872BFF]"
                            } mb-3`}
                            >
                            {link.name}
                            </Link>
                        ))}
                </ul>
            </div>
            <Link href="/" className="flex items-center justify-center gap-2">
                <img src="/logo/Vector.png" alt="" />
                <h2 className="text-3xl font-semibold">Travelo</h2>
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-5 text-base">
                {links.map((link) => (
                    <Link
                    key={link.href}
                    href={link.href}
                    className={`${
                        pathname === link.href
                        ? "text-[#872BFF] font-bold border-b-2 border-[#872BFF]"
                        : "text-black hover:text-[#872BFF]"
                    }`}
                    >
                    {link.name}
                    </Link>
                ))}
            </ul>
        </div>
        <div className="navbar-end">
            <Link href="/contact" className="bg-[#872BFF] text-white px-5 py-3 rounded-3xl" >Contact Us</Link>
        </div>
    </div>
    );
}

