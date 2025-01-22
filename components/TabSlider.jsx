import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TabSliderStyle from '../styles/solutions/tabSlider.module.css';
import Btn_Transparent from './button/Button_Transparent';
import Button_Black from './button/Button_Black';

export default function TabSlider ( {data , id} ) {
    const [currentActive , SetCurrentActive] = useState(0)
    const tabTitle = data[0].introTilte;
    const tabData = data[0].mainData;
    const tabColor = data[0].color;


    const [isActiveTab, setActiveTab] = useState(0);
    const [winWidth, isWinWidth] = useState(0);
    
    const slickSliderRef = useRef();
    const slickSliderRefTwo = useRef();
    const slickSliderRefThree = useRef();
    
    const [isSlickSlider, setSlider] = useState();
    const [abc, setAbc] = useState(0);
    const prevRef = useRef(null);
	const nextRef = useRef(null);

    useEffect(() => {
        setAbc(isSlickSlider);
	}, [isSlickSlider]);

    useEffect(() => { 
        // isWinWidth(window.innerWidth);
        const handleResize = ( ) => {
            isWinWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
         // Initial call to set window size
        handleResize();

        // Clean up event listener on component unmount
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    })
    const handleTabClick = (tabActiveCard) => {
        setActiveTab(tabActiveCard)
        console.log(window.width);
        if(winWidth < 991) {
            if (slickSliderRef.current) {
                slickSliderRef.current.slickGoTo(tabActiveCard);
            }
        }
    }  

    // State to keep track of the current slide index
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleAfterChange = (index) => {
        // Update the currentSlide state when the slide changes
        setCurrentSlide(index);
        // handleTabClick(index);
        if (slickSliderRef.current) {
            slickSliderRef.current.slickGoTo(index);
        }
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        // initialSlide: isSlickSlider,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  initialSlide: isSlickSlider,
                  arrows: true,
                  dots: false,
                 
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 3,
                  arrows: false,
                  dots: true,
                  initialSlide: isSlickSlider,
                  centerMode: true,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  arrows: false,
                  dots: true,
                  initialSlide: isSlickSlider,
                  centerMode: true,
                }
              }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      };

    useEffect(() => {
        var slickDots = document.querySelectorAll('.tabSlider .slick-slider .slick-dots li');
        // var buttonIndex = document.querySelectorAll('.tabSlider .slick-slider button.slick-prev');
        // var buttonNext = document.querySelectorAll('.tabSlider .slick-slider button.slick-next');
        var section = document.querySelectorAll('.tabSlider');
    
        slickDots.forEach(element => {
            // console.log(element);
            element.addEventListener('click', function () {
                // console.log(this);
                var allCards = document.querySelectorAll('.tabSlider .slick-slider .slick-slide .data');
                allCards.forEach(card => {
                    card.classList.remove('tabSlider_activeCard__IufoA');
                    card.classList.remove('tabSlider_activeCard__9v8k9');
                });
            });
        });
    })
   
    return (
        <section className={`tabSlider py-0 overflow-hidden ${tabColor.sectionClass} bg-white ${data.classes}`} id={tabTitle.sectionId}>
            <div className={`intro laptop-landscape:pt-[64px] laptop-landscape:pb-[125px] pt-[142px] pb-[140px] tablet:py-[100px] tablet:pt-[60px] phablet:py-[100px] sm:pt-[60px] desktop:pt-[80px] desktop-mid:pt-[80px]`}>
                <div className="container">
                    <h2>{tabTitle.title}</h2>
                </div>
            </div>
            <div className={`tab_slider_wrap`}>
                <div className="container">
                    <div className={`tabWithSlide`} data-aos="fade-in" data-aos-delay="300">
                        {
                           tabData.length > 6 ? 

                        <Slider ref={slickSliderRef}
                        {...settings} afterChange={handleAfterChange}>
                            {tabData.map((data, index) => {
                                return (
                                    <div key={index} className={`card blackBorder data p-3 w-[15%] mx-2 sm:w-[50%] md:w-[25%] tablet-mid:w-[25%] relative h-[160px] desktop-mid:h-[140px] transition-all sm:h-[140px] cursor-pointer ${isActiveTab == index ? 'activeCard' : ''} tablet:w-[20%]`}   onClick={() => handleTabClick(index)}>
                                        <div className="item absolute top-0 left-0 w-full h-full flex flex-col p-[20px]">
                                            <div className={`${TabSliderStyle.icon_wrap} relative`}>
                                                <Image src={`/tabSliderIcons/${data.icon}`} alt="" width={40} height={40} />
                                            </div>
                                            <h4 className={`mt-2 max-w-[100%] xxl-up:max-w-[100%]`}>{data.title}</h4>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider> :   
                             <div className="flex justify-start sm:block">
                                   {tabData.map((data, index) => {
                                        return (
                                            <div key={index} className={`card blackBorder data p-3 w-[15%] mx-2 sm:w-[50%] md:w-[25%] tablet-mid:w-[25%] relative h-[160px] desktop-mid:h-[140px] transition-all sm:h-[140px] cursor-pointer ${isActiveTab == index ? TabSliderStyle.activeCard : ''} tablet:w-[20%]`}  onClick={() => handleTabClick(index)}>
                                                <div className="item absolute top-0 left-0 w-full h-full flex flex-col p-[20px]">
                                                    <div className="icon_wrap relative">
                                                        <Image src={`/tabSliderIcons/${data.icon}`} alt="" width={40} height={40} />
                                                    </div>
                                                    <h4 className={` mt-2 max-w-[100%] xxl-up:max-w-[100%]`}>{data.title}</h4>
                                                </div>
                                            </div>
                                        )
                                    })}
                             </div>
                        }
                    </div>
                    <div className="tab_content_wrap relative top-[-67px] laptop-landscape:top-[-70px] phablet:top-[-20px] tablet:top-[-40px]">
                        <div className="item flex sm:block" >
                            <div className="w-1/2  sm:w-full">
                                <div className="content_with_cta relative">
                                    <h3>{tabData[isActiveTab].mainTitle}</h3>
                                    <p className={` mt-[15px]`}>{tabData[isActiveTab].description}</p>
                                    <div className="cta mt-[22px]">
                                        <Button_Black  text={tabData[isActiveTab].btn} link="/" />
                                    </div>
                                </div>
                            </div>
                            {tabData[isActiveTab].countNumber ? (
                                <div className="stattics_wrap relative w-1/2 laptop-landscape:top-[0] top-[-21px] sm:top-[25px] mx-2 sm:w-full pl-[85px] pt-0 sm:pl-[10px]">
                                    <div className="col-two pl-[22px] border-s-[1px] mb-[24px]">
                                        <h2 className="!text-yello">{tabData[isActiveTab].countNumber}<strong>{tabData[isActiveTab].suffix}</strong></h2>
                                        <p className="!text-white mt-0 font-bold">{tabData[isActiveTab].subTitle}</p>
                                        <p className="small_font text-white mt-[4px]">{tabData[isActiveTab].subDescription}</p>
                                    </div>
                                    <div className="col-two pl-[22px] border-s-[1px] mt-[32px]">
                                        <h2 className="text-yello">{tabData[isActiveTab].countNumberTwo}<strong>{tabData[isActiveTab].percentage}</strong></h2>
                                        <p className="text-white mt-0 font-bold">{tabData[isActiveTab].subTitleTwo}</p>
                                        <p className="small_font text-white mt-[3px]">{tabData[isActiveTab].subDescriptionTwo}</p>
                                    </div>
                                </div>
                                ) : tabData[isActiveTab].Resources ? (
                                    <div className="stattics_wrap relative w-1/2 laptop-landscape:top-[0] top-[-21px] sm:top-[25px] mx-2 sm:w-full pl-[85px] pt-0 sm:pl-[10px]">
                                    <p className="text-oceanGreen uppercase font-[600]"> Related Case Studies </p>
                                        <div className={`group relative wrap flex flex-wrap w-full mt-[28px] sm:mt-[20px]`} >
                                            <Link href="/" className="emptyLink"> .</Link>
                                            <div className="col-left w-[70%] mb-3">
                                                <h4 className={`relative text-white inline mt-[2px] ${arrow} group-hover:after:opacity-100 sm:after:opacity-100`} >{tabData[isActiveTab].subTitle}</h4>
                                                <p className="small_font text-white mt-[4px]">
                                                    {tabData[isActiveTab].subDescription}
                                                </p>
                                            </div>
                                            <div className="col-right  w-[30%] pl-[22px]  mb-3">
                                                <div className="img-wrap h-[90px]">
                                                    <Image
                                                        className="object-contain h-full"
                                                        src={tabData[isActiveTab].caseStudyImg}
                                                        alt="study"
                                                        width={150}
                                                        height={150}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group relative wrap flex flex-wrap w-full mt-[28px]  sm:mt-[20px]">
                                            <Link href="/" className="emptyLink"> .</Link>
                                            <div className="col-left w-[70%] mb-3">
                                                <h4 className={`relative text-white inline mt-[2px] ${arrow} group-hover:after:opacity-100 sm:after:opacity-100`} >
                                                    {tabData[isActiveTab].subTitle}
                                                </h4>
                                                <p className="small_font text-white mt-[4px]">
                                                    {tabData[isActiveTab].subDescription}
                                                </p>
                                            </div>
                                            <div className="col-right  w-[30%] pl-[22px]  mb-3">
                                                <div className="img-wrap h-[90px]">
                                                    <Image
                                                        className="object-contain h-full"
                                                        src={tabData[isActiveTab].caseStudyImg}
                                                        alt="study"
                                                        width={150}
                                                        height={150}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={`stattics_wrap`}>
                                        <div className={`img_wrap image-without-border`}>
                                            <Image
                                                src={`/tabSliderIcons/${tabData[isActiveTab].bigImage}`}
                                                alt=""
                                                // {tabTitle.id === 'one' ?  : tabTitle.id === 'two' ? '' : tabTitle.id === 'three' ? `${tabThree} ${tabColor.tabBgColor}` : ''}}
                                                width={594}
                                                height={490}
                                            />
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}