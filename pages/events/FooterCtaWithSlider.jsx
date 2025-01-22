import React, { useRef } from "react";
import Image from 'next/image';
import Link from 'next/link';
import Btn_White from '../../components/button/Button_White';
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
                            <h2 className='!text-white'>Dare to <span className='!font-[400]'>grow</span>differently.</h2>
                            <div className='text-white mt-[22px] mb-[40px]'>
                                <p>Flip the switch on fraud-fueled fear. Make risk work for your business <br/>and scale securely into new markets with Sift’s AI-powered platform.</p></div>
                            <Btn_White text="See Sift in action" link="/demo" />
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
