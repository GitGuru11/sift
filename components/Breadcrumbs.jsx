import React from 'react'
import Link from 'next/link';

export default function Breadcrumbs() {
    return (
        <div className="breadcrumbs bg-white relative">
            <div className="container">
                <ul className="absolute top-[39px] left-[20px] z-[99] lg:pt-[30px]">
                    <li className="inline relative text-[16px] font-[400] leading-[24px] text-black hover:text-pink transition-all delay-[0.3s] mr-[15px]">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="inline relative text-[16px] font-[700] leading-[24px] mr-[15px]">
                        <span className="text-pink">About Us</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
