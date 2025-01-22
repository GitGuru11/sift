import React, { useRef } from "react";
import Image from 'next/image';
import Link from 'next/link';
import Btn_White from './button/Button_White';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function FooterCtaWithSlider (props) {

    const slickSliderRef = useRef();

    const logoImage = [
        {
            image: "doordarsh.svg",
            alt: "doordarsh"
        },
        {
            image: "nikon-black-logo.svg",
            alt: "Nikon"
        },
        {
            image: "remitly-color-logo.svg",
            alt: "Remitly"
        },
        {
            image: "swan-color-logo.svg",
            alt: "Swan"
        },
        {
            image: "yelp-color-logo.svg",
            alt: "Yelp"
        },
        {
            image: "taptap-send-color-logo.svg",
            alt: "Taptap"
        },
        {
            image: "doordarsh.svg",
            alt: "doordarsh"
        },
        {
            image: "nikon-black-logo.svg",
            alt: "Nikon"
        },
        {
            image: "remitly-color-logo.svg",
            alt: "Remitly"
        },
        {
            image: "swan-color-logo.svg",
            alt: "Swan"
        },
        {
            image: "yelp-color-logo.svg",
            alt: "Yelp"
        },
        {
            image: "taptap-send-color-logo.svg",
            alt: "Taptap"
        },
        {
            image: "doordarsh.svg",
            alt: "doordarsh"
        },
        {
            image: "nikon-black-logo.svg",
            alt: "Nikon"
        },
        {
            image: "remitly-color-logo.svg",
            alt: "Remitly"
        },
        {
            image: "swan-color-logo.svg",
            alt: "Swan"
        },
        {
            image: "yelp-color-logo.svg",
            alt: "Yelp"
        },
        {
            image: "taptap-send-color-logo.svg",
            alt: "Taptap"
        },

    ]

    return (
        <section className={`footerCtaWithSlider no-padding `}>
            <div className={`${props.bg == 'white'?'bg-white':'bg-black'}`}>
                <div className="container">
                    <div className="contentWrap relative overflow-hidden bg-lowerBlue p-[64px] pb-[42px] rounded-tl-[24px] rounded-tr-[24px] text-center phablet:p-[30px] sm:p-[20px]">
                        <div className="intro">
                            <h2 className='!text-white'>Take the <span className='!font-[400]'>next step</span></h2>
                            <p className='text-white mt-[22px] mb-[40px]'>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit.</p>
                            <Btn_White text="talk to an expert" link="/" />
                        </div>
                        <div className="logoSlider flex mt-[34px] laptop-landscape:mt-[30px] w-[fit-content] animate-[slideScroll_30s_linear_infinite]">
                            {logoImage.map((item, index) => {
                                return (
                                    <div className="item" key={index}>
                                        <div className="imgWrap w-[185px] h-[100px] mx-[20px]">
                                            <Image src={`/footerCtaWithSlider/${item.image}`} alt={item.alt} width={184} height={100} />
                                        </div>
                                    </div>
                                )})
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
