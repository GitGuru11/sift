import React, { useEffect, useState,useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TabSliderStyle from '../styles/solutions/tabSlider.module.css';
import Btn_Transparent from './button/Button_Transparent';

// const caseStydy = () => {
//     return (
//         <div className="wrap flex flex-wrap w-full">
//             <div className="col-left w-[75%] pl-[22px] border-s-2 mb-3">
//                 <p className="text-white mt-[2px]">{tabData[isActiveTab].subTitle}</p>
//                 <p className="small_font text-white mt-[4px]">{tabData[isActiveTab].subDescription}</p>
//             </div>
//             <div className="col-right  w-[25%] pl-[22px] border-s-2 mb-3">
//                 <Image src='' alt="study"/>
//             </div>
//         </div>
//     )
// }

export default function TabSlider() {

    const data = [
        {
            color:
            {
                introClassName: "bg-black",
                sliderClassName: "bg-grad-third-black-to-blue",
                cardClassName: "bg-black"
            },
            mainData: [
                {
                    id: "1",
                    title: "Payment service providers",
                    mainTitle: "Industry two AI-Powered Fraud Decisioning..",
                    description: "AI-Powered Fraud Decisioning..",
                    btn: "learn more",
                    link: "#",
                    icon: "download-icon.png",
                    countNumber: "5x",
                    subTitle: "Case Study Headline ",
                    subDescription: "AI-Powered Fraud Decisioning..",
                    countNumberTwo: "70%",
                    caseStudyImg: '/case_study.png',
                    subTitleTwo: "AI-Powered Fraud Decisioning..",
                    subDescriptionTwo: "AI-Powered Fraud Decisioning.."
                },
                {
                    id: "2",
                    title: "Industry two",
                    mainTitle: "Industry two AI-Powered Fraud Decisioning..",
                    description: "2AI-Powered Fraud Decisioning..",
                    btn: "learn more",
                    link: "#",
                    icon: "chart-icon.png",
                    countNumber: "5x",
                    subTitle: "Case Study Headline  ",
                    subDescription: "AI-Powered Fraud Decisioning..",
                    countNumberTwo: "70%",
                    caseStudyImg: '/case_study.png',
                    subTitleTwo: "AI-Powered Fraud Decisioning..",
                    subDescriptionTwo: "AI-Powered Fraud Decisioning.."
                },
                {
                    id: "3",
                    title: "Industry three",
                    mainTitle: "Use case three AI-Powered Fraud Decisioning..",
                    description: "AI-Powered Fraud Decisioning..",
                    btn: "learn more",
                    link: "#",
                    icon: "chats-fill.png",
                    countNumber: "5x",
                    subTitle: "AI-Powered Fraud Decisioning.. ",
                    subDescription: "AI-Powered Fraud Decisioning..",
                    countNumberTwo: "70%",
                    caseStudyImg: '/case-study.png',
                    subTitleTwo: "AI-Powered Fraud Decisioning..",
                    subDescriptionTwo: "AI-Powered Fraud Decisioning.."
                },
                {
                    id: "4",
                    title: "Industry four",
                    mainTitle: "Use case four AI-Powered Fraud Decisioning..",
                    description: "AI-Powered Fraud Decisioning..",
                    btn: "learn more",
                    link: "#",
                    icon: "fill-search.png",
                    countNumber: "5x",
                    subTitle: "AI-Powered Fraud Decisioning.. ",
                    subDescription: "AI-Powered Fraud Decisioning..",
                    countNumberTwo: "70%",
                    caseStudyImg: '/case-study.png',
                    subTitleTwo: "AI-Powered Fraud Decisioning..",
                    subDescriptionTwo: "AI-Powered Fraud Decisioning.."
                },
                {
                    id: "5",
                    title: "Industry five",
                    mainTitle: "Use case five AI-Powered Fraud Decisioning..",
                    description: "AI-Powered Fraud Decisioning..",
                    btn: "learn more",
                    link: "#",
                    icon: "fill-search.png",
                    countNumber: "5x",
                    subTitle: "AI-Powered Fraud Decisioning.. ",
                    subDescription: "AI-Powered Fraud Decisioning..",
                    countNumberTwo: "70%",
                    caseStudyImg: '/case-study.png',
                    subTitleTwo: "AI-Powered Fraud Decisioning..",
                    subDescriptionTwo: "AI-Powered Fraud Decisioning.."
                },
                {
                    id: "6",
                    title: "Industry six",
                    mainTitle: "Use case six AI-Powered Fraud Decisioning..",
                    description: "AI-Powered Fraud Decisioning..",
                    btn: "learn more",
                    link: "#",
                    icon: "lightbulb-filament-fill.png",
                    countNumber: "5x",
                    subTitle: "AI-Powered Fraud Decisioning.. ",
                    subDescription: "AI-Powered Fraud Decisioning..",
                    countNumberTwo: "70%",
                    caseStudyImg: '/case-study.png',
                    subTitleTwo: "AI-Powered Fraud Decisioning..",
                    subDescriptionTwo: "AI-Powered Fraud Decisioning.."
                },
                {
                    id: "7",
                    title: "Use case seven",
                    mainTitle: "Use case seven AI-Powered Fraud Decisioning..",
                    description: "AI-Powered Fraud Decisioning..",
                    btn: "learn more",
                    link: "#",
                    icon: "lightbulb-filament-fill.png",
                    countNumber: "5x",
                    subTitle: "AI-Powered Fraud Decisioning.. ",
                    subDescription: "AI-Powered Fraud Decisioning..",
                    countNumberTwo: "70%",
                    caseStudyImg: '/case-study.png',
                    subTitleTwo: "AI-Powered Fraud Decisioning..",
                    subDescriptionTwo: "AI-Powered Fraud Decisioning.."
                },
            ]
        },
    ]

    
    const tabData = data[0].mainData;
    const tabColor = data[0].color;


    const [isActiveTab, setActiveTab] = useState(0);
    const [winWidth, isWinWidth] = useState(0);
    const slickSliderRef = useRef(null);
    const [isSlickSlider, setSlider] = useState();
    const [abc, setAbc] = useState(0);
    const prevRef = useRef(null);
	const nextRef = useRef(null);

    const handleTabClick = (tabActiveCard) => {
        
        // if(window.width < 991) {


            var elements = document.querySelectorAll('.tabSlider .slick-slider .slick-list .slick-slide');
            setActiveTab(tabActiveCard)
            if (slickSliderRef.current) {
                slickSliderRef.current.slickGoTo(tabActiveCard);
            }
    }   
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
        var buttonIndex = document.querySelector('.tabSlider .slick-slider button.slick-prev');
        var buttonNext = document.querySelector('.tabSlider .slick-slider button.slick-next');
        slickDots.forEach(element => {
            console.log(element);
            element.addEventListener('click', function () {
                // console.log(this);
                var allCards = document.querySelectorAll('.tabSlider .slick-slider .slick-slide .data');
                allCards.forEach(card => {
                    card.classList.remove('tabSlider_activeCard__IufoA');
                    card.classList.remove('tabSlider_activeCard__9v8k9');
                });
            });
        });

        if(buttonIndex) {
            buttonIndex.addEventListener('click', function () {
                var elements = document.querySelectorAll('.tabSlider .slick-slider .slick-list .slick-slide');
            
                // Convert NodeList to an array
                var arrayFromNodeList = Array.from(elements);
            
                // Find the index of the element with the class '.slick-current' in the array
                var currentIndex = arrayFromNodeList.indexOf(document.querySelector('.slick-current'));
                handleTabClick(currentIndex - 1);
            });
        }
        if (buttonNext) {
            buttonNext.addEventListener('click', function () {
                var elements = document.querySelectorAll('.tabSlider .slick-slider .slick-list .slick-slide');
            
                // Convert NodeList to an array
                var arrayFromNodeList = Array.from(elements);
            
                // Find the index of the element with the class '.slick-current' in the array
                var currentIndex = arrayFromNodeList.indexOf(document.querySelector('.slick-current'));
                handleTabClick(currentIndex + 1);
            });
        }
       
       
    })


    const arrow = "after:content-[''] after:absolute after:w-[15px] after:h-[15px] after:top-[50%] after:translate-y-[-40%] after:right-[-20px] after:bg-[url('/bannerWithResourceCard/rightArrow.svg')] after:duration-300 after:bg-cover after:opacity-0"
    return (
        <>
        <section className="tabSlider py-0" id="use-case">
        <div className={`${tabColor.introClassName} laptop-landscape:pt-[64px] laptop-landscape:pb-[125px] pt-[142px] pb-[140px] tablet:py-[100px] tablet:pt-[60px] phablet:py-[100px] sm:pt-[60px] desktop:pt-[80px] desktop-mid:pt-[80px]`}>
            <div className="container">
                <h2 className="text-white">By use cases</h2>
            </div>
        </div>
        <div className={`relative tab_slider_wrap ${tabColor.sliderClassName} p-0 laptop-landscape:pb-[64px] laptop-landscape:h-[492px]`}>
            <div className="container">
                <div className="tab_slide_wrap relative pr-[20px] w-[calc(100%+38px)] ml-[-19px] pt-2 left-0 top-[-127px] h-[230px] phablet:top-[-80px] tablet:top-[-90px] tablet:w-[calc(100%+20px)] tablet:ml-0 desktop-mid:w-[calc(100%+20px)] desktop-mid:ml-0" data-aos="fade-in" data-aos-delay="300">
                    {
                       tabData.length > 6 ?  
                    
                    <Slider ref={slickSliderRef} {...settings}>
                        {tabData.map((data, index) => {
                            return (
                                <div key={index} className={`${TabSliderStyle.card} data p-3 ${tabColor.cardClassName} w-[15%] mx-2 sm:w-[50%] md:w-[25%] tablet-mid:w-[25%] relative h-[170px] desktop-mid:h-[140px] transition-all sm:h-[140px] cursor-pointer hover:shadow-white-shadow ${isActiveTab == index ? TabSliderStyle.activeCard : ''} tablet:w-[20%]`}   onClick={() => handleTabClick(index)}>
                                    <div className="item absolute top-0 left-0 w-full h-full flex flex-col p-[20px]">
                                        <div className={`${TabSliderStyle.icon_wrap} relative`}>
                                            <Image src={`/tabSliderIcons/${data.icon}`} alt="" width={40} height={40} />
                                        </div>
                                        <h4 className="text-white mt-2 max-w-[100%] xxl-up:max-w-[100%]">{data.title}</h4>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider> :   
                         <div className="flex justify-start sm:block">
                               {tabData.map((data, index) => {
                                    return (
                                        <div key={index} className={`${TabSliderStyle.card} data p-3 ${tabColor.sliderClassName} w-[15%] mx-2 sm:w-[50%] md:w-[25%] tablet-mid:w-[25%] relative h-[160px] desktop-mid:h-[140px] transition-all sm:h-[140px] cursor-pointer hover:shadow-white-shadow ${isActiveTab == index ? TabSliderStyle.activeCard : ''} tablet:w-[20%]`}  onClick={() => handleTabClick(index)}>
                                            <div className="item absolute top-0 left-0 w-full h-full flex flex-col p-[20px]">
                                                <div className="icon_wrap relative">
                                                    <Image src={`/tabSliderIcons/${data.icon}`} alt="" width={40} height={40} />
                                                </div>
                                                <h4 className="text-white mt-2 max-w-[100%] xxl-up:max-w-[100%]">{data.title}</h4>
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
                                <h3 className="text-white">{tabData[isActiveTab].mainTitle}</h3>
                                <p className="text-white mt-[15px]">{tabData[isActiveTab].description}</p>
                                <div className="cta mt-[22px]">
                                    <Btn_Transparent text={tabData[isActiveTab].btn} link="/" />
                                </div>
                            </div>
                        </div>
                        <div className="stattics_wrap relative w-1/2 laptop-landscape:top-[0] top-[-21px] sm:top-[25px] mx-2 sm:w-full pl-[85px] pt-0 sm:pl-[10px]">
                            <p className="text-oceanGreen uppercase font-[600]">
										Related Case Studies
									</p>
									<div
										className={`group relative wrap flex flex-wrap w-full mt-[28px] sm:mt-[20px]`}
									>
										<Link href="/" className="emptyLink">
											.
										</Link>
										<div className="col-left w-[70%] mb-3">
											<h4
												className={`relative text-white inline mt-[2px] ${arrow} group-hover:after:opacity-100 sm:after:opacity-100`}
											>
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
									<div className="group relative wrap flex flex-wrap w-full mt-[28px]  sm:mt-[20px]">
										<Link href="/" className="emptyLink">
											.
										</Link>
										<div className="col-left w-[70%] mb-3">
											<h4
												className={`relative text-white inline mt-[2px] ${arrow} group-hover:after:opacity-100 sm:after:opacity-100`}
											>
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
                    </div>
                </div>
            </div>
        </div>
    </section>
			
        </>
		);

}

