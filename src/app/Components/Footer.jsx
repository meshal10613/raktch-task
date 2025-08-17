import Link from "next/link";
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Footer() {
    return (
        <div className="flex flex-col px-5">
            <div className="flex items-center justify-between">
                <div className="space-y-3">
                    <Link href="/" className="flex gap-2">
                        <img src="/logo/Vector.png" alt="" />
                        <h2 className="text-3xl font-semibold">Travelo</h2>
                    </Link>
                    <p className="text-[#A8A8A8]">Don't just get there, get there in style.</p>
                </div>
                <div>
                    <h1 className="footer-title">Social</h1>
                    <div className="flex items-center gap-3">
                        <FaFacebook size={25} className="cursor-pointer" />
                        <FaGithub size={25} className="cursor-pointer" />
                        <FaLinkedin size={25} className="cursor-pointer" />
                    </div>
                </div>
                <form className="space-y-3">
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="w-80">
                    <label>Enter your email address</label>
                    <div className="join">
                        <input
                        type="text"
                        placeholder="username@site.com"
                        className="input input-bordered join-item" />
                        <button className="btn bg-[#872BFF] text-white join-item">Subscribe</button>
                    </div>
                    </fieldset>
                </form>
            </div>
            <div className="divider"></div>
            <p className="text-center">Copyright © {new Date().getFullYear()} - All right reserved by Travelo</p>
        </div>
    )
}
