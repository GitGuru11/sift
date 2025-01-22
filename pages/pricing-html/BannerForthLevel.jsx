import React, { useState } from 'react';
import Image from 'next/image';
// import Btn_Black from './button/Button_Black';
import Link from 'next/link';


const cards = [
    {
        logo: '/yellow-circle-wavy.svg',
        title: 'AI-Powered Fraud Decisioning..',
        blurb:
            'AI-Powered Fraud Decisioning..',
    },
    {
        logo: '/yellow-circle-wavy.svg',
        title: 'AI-Powered Fraud Decisioning..',
        blurb:
            'AI-Powered Fraud Decisioning..',
    },
    {
        logo: '/yellow-circle-wavy.svg',
        title: 'AI-Powered Fraud Decisioning..',
        blurb:
            'AI-Powered Fraud Decisioning..',
    },

];

export default function BannerForthLevel() {
    return (
        <>
            <div className="breadcrumbs bg-white relative tablet:pt-[70px] md:pt-[36px] ">
                <div className="container">
                    <ul className="absolute top-[44px] left-[20px] z-[99] sm:z-[9]">
                        <li className="inline relative text-[16px] font-[400] leading-[24px] text-white hover:text-pink transition-all delay-[0.3s] mr-[15px]">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="inline relative text-[16px] font-[700] leading-[24px] mr-[15px]">
                            <span className="text-pink">Pricing</span>
                        </li>
                    </ul>
                </div>
            </div>
            <section className='banner-forth-level banner bg-black md:pt-[80px] overflow-hidden padding-medium-bottom'>
                <div className="container">
                    <div className="intro laptop:mt-[70px] desktop:mt-[50px] xl-up:mt-[19px] laptop-landscape:mt-[70px] lg:mt-[40px]">
                        <h1 className='mb-[32px] lg:mb-[30px]'>Headline about pricing</h1>
                        <p>AI-Powered Fraud Decisioning.. </p>
                    </div>
                    <div className="colthreeWrap flex flex-wrap w-[calc(100%+28px)] tablet:w-[calc(100%+20px)] -ml-[14px] tablet:-ml-[10px]  mt-[47px] laptop-landscape:pt-0 wide-screen:mt-[80px] laptop:mt-[40px] xl-up:pt-[17px] desktop:mt-[40px] laptop-landscape:mt-[30px] tablet:mt-[30px] md:mt-[30px]  md:w-full md:mx-0">
                        {cards.map((data, index) => (
                            <div
                                key={index}
                                className={`colThree w-[calc(33.33%-28px)] text-white mx-[14px] pt-[16px] lg:pt-0 laptop-landscape:pt-[0]  lg:mb-[24px] tablet:mx-[10px] tablet:w-[calc(50%-20px)] md:w-full md:mx-0`}
                            >
                                <div className="imgWrap mb-[8px]">
                                    <Image width={40} height={40} src={data.logo} alt="logo" />
                                </div>
                                <h4 className="mb-[15px]">{data.title}</h4>
                                <p className='small_font max-w-[345px] wide-screen:max-w-[calc(100%-50px)]'>{data.blurb}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}