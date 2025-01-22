import React, { useEffect } from 'react';
import Image from 'next/image';
import DynamicButton from '../global-components/Buttons';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery"

export default function FooterCtaWithSlider (props) {
let data = props.items;
    const settings = {
        infinite:true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        arrows:false,
        pauseOnHover: false,
        cssEase: 'linear',
        // rtl: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                 
                }
            },
            {
                breakpoint: 595,
                settings: {
                  slidesToShow: 1,
                 
                }
            }
          ]
    };
    
    return (
        <>
        {data && <section id={data.id ? data.id : ''} className={`footerCtaWithSlider !pb-[0]  ${data.background} ${data.classes} ${data.padding}`}>
            <div>
                <div className="container">
                    {data?.title && <div className="contentWrap relative overflow-hidden bg-lowerBlue p-[64px] pb-[42px] rounded-tl-[24px] rounded-tr-[24px] text-center phablet:p-[30px] sm:p-[20px]">
                        <div className="intro">
                            {data?.title && <h2 className='!text-white' dangerouslySetInnerHTML={{ __html: data?.title }}></h2>}
                            {data?.body && <div className='text-white mt-[22px] mb-[40px]' dangerouslySetInnerHTML={{ __html: data?.body }}></div>}
                            <DynamicButton cta={data?.buttons} />
                        </div>
                        <div className="logoSlider relative mt-[34px] laptop-landscape:mt-[30px] ">
                        <Slider {...settings} >
                            {data?.logos && data?.logos.map((item, index) => {
                                return (
                                    <div className="item relative flex justify-center " key={index}>
                                        <div className="imgWrap w-[185px] desktop-mid:w-[150px] h-[100px] mx-[20px] flex items-center">
                                            {item?.logo && item?.logo?.sourceUrl && <Image src={`${item?.logo?.sourceUrl}`} alt={`${item?.logo?.altText}`} width={184} height={100} />}
                                        </div>
                                    </div>
                                )})
                                }
                           </Slider>
                        </div>
                    </div>}
                </div>
            </div>
        </section>}
        </>
    )
}
