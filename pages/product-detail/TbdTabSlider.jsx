import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TabSliderStyle from '../../styles/solutions/tabSlider.module.css';
import Btn_Transparent from '../../components/button/Button_Transparent';
import Button_Pink from '../../components/button/Button_Pink';

export default function TabSlider () {

    const data = [
      {
        color: 
            {
                introClassName: "bg-skyblue",
                sliderClassName: "bg-white",
                cardClassName: "bg-white"
            },
        mainData: [
                {
                    id: "1",
                    title: "Industry one",
                    mainTitle: "Industry one AI-Powered Fraud Decisioning..",
                    description: "AI-Powered Fraud Decisioning...",
                    btn: "learn more",
                    link: "#",
                    icon: "laptop-fill.svg",
                    bigImage: "hand-with-mobile.png",
                    countNumber: "5x",
                    subTitle: "AI-Powered Fraud Decisioning.. ",
                    subDescription: "AI-Powered Fraud Decisioning..",
                    countNumberTwo: "70%",
                    subTitleTwo: "Commodo ullamcorper",
                    subDescriptionTwo: "AI-Powered Fraud Decisioning.."
                },
                {
                    id: "2",
                    title: "Industry two",
                    mainTitle: "Industry two AI-Powered Fraud Decisioning..",
                    description: "AI-Powered Fraud Decisioning...",
                    btn: "learn more",
                    link: "#",
                    icon: "handbag-fill.svg",
                    bigImage: "hand-with-mobile.png",
                    countNumber: "5x",
                    subTitle: "AI-Powered Fraud Decisioning.. ",
                    subDescription: "AI-Powered Fraud Decisioning..",
                    countNumberTwo: "70%",
                    subTitleTwo: "Commodo ullamcorper",
                    subDescriptionTwo: "AI-Powered Fraud Decisioning.."
                },
                {
                    id: "3",
                    title: "Industry three",
                    mainTitle: "Industry three AI-Powered Fraud Decisioning..",
                    description: "AI-Powered Fraud Decisioning...",
                    btn: "learn more",
                    link: "#",
                    icon: "brandy-fill.svg",
                    bigImage: "hand-with-mobile.png",
                    countNumber: "5x",
                    subTitle: "AI-Powered Fraud Decisioning.. ",
                    subDescription: "AI-Powered Fraud Decisioning..",
                    countNumberTwo: "70%",
                    subTitleTwo: "Commodo ullamcorper",
                    subDescriptionTwo: "AI-Powered Fraud Decisioning.."
                },
                {
                    id: "4",
                    title: "Industry four",
                    mainTitle: "Industry four AI-Powered Fraud Decisioning..",
                    description: "AI-Powered Fraud Decisioning...",
                    btn: "learn more",
                    link: "#",
                    icon: "buildings-fill.svg",
                    bigImage: "hand-with-mobile.png",
                    countNumber: "5x",
                    subTitle: "AI-Powered Fraud Decisioning.. ",
                    subDescription: "AI-Powered Fraud Decisioning..",
                    countNumberTwo: "70%",
                    subTitleTwo: "Commodo ullamcorper",
                    subDescriptionTwo: "AI-Powered Fraud Decisioning.."
                },
                {
                    id: "5",
                    title: "Industry five",
                    mainTitle: "Industry five AI-Powered Fraud Decisioning..",
                    description: "AI-Powered Fraud Decisioning...",
                    btn: "learn more",
                    link: "#",
                    icon: "car-fill-blue.svg",
                    bigImage: "hand-with-mobile.png",
                    countNumber: "5x",
                    subTitle: "AI-Powered Fraud Decisioning.. ",
                    subDescription: "AI-Powered Fraud Decisioning..",
                    countNumberTwo: "70%",
                    subTitleTwo: "Commodo ullamcorper",
                    subDescriptionTwo: "AI-Powered Fraud Decisioning.."
                },
                {
                    id: "6",
                    title: "Industry six",
                    mainTitle: "Industry six AI-Powered Fraud Decisioning..",
                    description: "AI-Powered Fraud Decisioning...",
                    btn: "learn more",
                    link: "#",
                    icon: "browsers-fill.svg",
                    bigImage: "hand-with-mobile.png",
                    countNumber: "5x",
                    subTitle: "AI-Powered Fraud Decisioning.. ",
                    subDescription: "AI-Powered Fraud Decisioning..",
                    countNumberTwo: "70%",
                    subTitleTwo: "Commodo ullamcorper",
                    subDescriptionTwo: "AI-Powered Fraud Decisioning.."
                },
                {
                    id: "7",
                    title: "Industry seven",
                    mainTitle: "Industry seven AI-Powered Fraud Decisioning..",
                    description: "AI-Powered Fraud Decisioning...",
                    btn: "learn more",
                    link: "#",
                    icon: "browsers-fill.svg",
                    bigImage: "hand-with-mobile.png",
                    countNumber: "5x",
                    subTitle: "AI-Powered Fraud Decisioning.. ",
                    subDescription: "AI-Powered Fraud Decisioning..",
                    countNumberTwo: "70%",
                    subTitleTwo: "Commodo ullamcorper",
                    subDescriptionTwo: "AI-Powered Fraud Decisioning.."
                },
            ] 
        },
    ]

    const tabDataTwo = data[0].mainData;
    const tabColor = data[0].color;


    const [isActiveTab, setActiveTab] = useState(0);
    const [winWidth, isWinWidth] = useState(0);
    const [isSlickSlider, setSlider] = useState(0);
    const [abc, setAbc] = useState(0);
    const slickSliderRef = useRef(null);

    const prevRef = useRef(null);
	const nextRef = useRef(null);

    const handleTabClick = (tabActiveCard) => {
        // var elements = document.querySelectorAll('.tabSlider .slick-slider .slick-list .slick-slide');
        setActiveTab(tabActiveCard)
        // setSlider(tabActiveCard)
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
        var slickDots = document.querySelectorAll('.tabSlider.tabsliderTwo .slick-slider .slick-dots li');
        var buttonIndex = document.querySelector('#industry .slick-slider button.slick-prev');
        var buttonNext = document.querySelector('#industry .slick-slider button.slick-next');
        slickDots.forEach(element => {
            console.log(element);
            element.addEventListener('click', function () {
                // console.log(this);
                var allCards = document.querySelectorAll('.tabSlider.tabsliderTwo .slick-slider .slick-slide .data');
                allCards.forEach(card => {
                    card.classList.remove('tabSlider_activeCard__IufoA');
                    card.classList.remove('tabSlider_activeCard__9v8k9');
                });
            });
        });

        if(buttonIndex) {
            buttonIndex.addEventListener('click', function () {
                var elements = document.querySelectorAll('#industry .slick-slider .slick-list .slick-slide');
            
                // Convert NodeList to an array
                var arrayFromNodeList = Array.from(elements);
                console
                // Find the index of the element with the class '.slick-current' in the array
                var currentIndex = arrayFromNodeList.indexOf(document.querySelector('#industry .slick-current'));
                console.log(currentIndex);
                if(currentIndex == -1) {
                    var currentIndexNew = currentIndex - 1;
                } else {
                    var currentIndexNew = currentIndex - 1;
                }
                
                handleTabClick(currentIndexNew);
            });
        }
        if (buttonNext) {
            buttonNext.addEventListener('click', function () {
                
                var elements = document.querySelectorAll('#industry .slick-slider .slick-list .slick-slide');
                // console.log(elements);
                // Convert NodeList to an array
                var arrayFromNodeList = Array.from(elements);
            
                // Find the index of the element with the class '.slick-current' in the array
                var currentIndex = arrayFromNodeList.indexOf(document.querySelector('#industry .slick-current'));
              
                var currentIndexNew = currentIndex + 1;
                handleTabClick(currentIndexNew);
            });
        }
       
       
    })

        return (
					<section
						className="tabSlider tabsliderTwo tabSliderBlueSky py-0"
						id="industry"
					>
						<div
							className={`${tabColor.introClassName} py-[140px] laptop-landscape:pt-[64px] laptop-landscape:pb-[125px] phablet:py-[100px] tablet:pt-[60px]  tablet:py-[100px] sm:pt-[60px] desktop:pt-[80px] desktop-mid:pt-[80px]`}
						>
							<div className="container">
								<h2 className="text-black">By industry</h2>
							</div>
						</div>
						<div
							className={`relative tab_slider_wrap ${tabColor.sliderClassName} p-0 laptop-landscape:pb-[64px] desktop-mid:h-[490px] laptop-landscape:h-[540px]`}
						>
							<div className="container">
								<div
									className="tab_slide_wrap pr-[20px] relative w-[calc(100%+38px)] ml-[-19px] laptop-landscape:pb-[-110px] laptop-landscape:top-[-110px] left-0 top-[-112px]  phablet:top-[-80px] tablet:top-[-90px] tablet:w-[calc(100%+20px)] tablet:ml-0 desktop-mid:w-[calc(100%+20px)] desktop-mid:ml-0"
									data-aos="fade-in"
									data-aos-delay="300"
								>
									{tabDataTwo.length > 6 ? (
										<Slider ref={slickSliderRef} {...settings}>
											{tabDataTwo.map((data, index) => {
												return (
													<div
														key={index}
														className={`${TabSliderStyle.card} ${
															tabColor.introClassName === 'bg-skyblue'
																? TabSliderStyle.blackBorder
																: ''
														}  data p-3 ${
															tabColor.sliderClassName
														} relative h-[160px] transition-all duration-300 desktop-mid:h-[140px] sm:h-[140px] ${
															TabSliderStyle.blackBorder
														} cursor-pointer lg-up:hover:shadow-black-shadow ${
															isActiveTab == index
																? TabSliderStyle.activeCard
																: ''
														} md:w-[20%]`}
														onClick={() => handleTabClick(index)}
													>
														<div className="item absolute top-0 left-0 w-full h-full flex flex-col p-[20px]">
															<div
																className={`${TabSliderStyle.icon_wrap} relative`}
															>
																<Image
																	src={`/tabSliderIcons/${data.icon}`}
																	alt=""
																	width={40}
																	height={40}
																/>
															</div>
															<h4 className="text-black mt-2 max-w-[100%] sm:max-w-[100%]">
																{data.title}
															</h4>
														</div>
													</div>
												);
											})}
										</Slider>
									) : (
										<div className="flex justify-start sm:block">
											{tabDataTwo.map((data, index) => {
												return (
													<div
														key={index}
														className={`${TabSliderStyle.card} p-3 ${
															tabColor.sliderClassName
														} relative w-[16.66%] ${
															TabSliderStyle.blackBorder
														} cursor-pointer transition-all duration-300 hover:shadow-black-shadow ${
															isActiveTab == index
																? TabSliderStyle.activeCard
																: ''
														} md:w-[20%]`}
														onClick={() => handleTabClick(index)}
													>
														<div className="icon_wrap relative">
															<Image
																src={`/tabSliderIcons/${data.icon}`}
																alt=""
																width={40}
																height={40}
															/>
														</div>
														<h4 className="text-black mt-2 max-w-[100%] sm:max-w-[100%]">
															{data.title}
														</h4>
													</div>
												);
											})}
										</div>
									)}
								</div>
								<div className="tab_content_wrap relative top-[-65px] desktop-mid:top-[-95px] md:top-[-90px] laptop-landscape:top-[-88px] phablet:top-[-20px] tablet:top-[-50px] sm:top-[-27px]">
									<div className="item flex sm:block">
										<div className="w-1/2 sm:w-full">
											<div className="content_with_cta relative">
												<h3 className="text-black">
													{tabDataTwo[isActiveTab].mainTitle}
												</h3>
												<p className="text-black mt-3">
													{tabDataTwo[isActiveTab].description}
												</p>
												<div className="cta mt-[22px] md:mt-[20px]">
                                                <Button_Pink text={tabDataTwo[isActiveTab].btn} link="/" />
												</div>
											</div>
										</div>
										{tabDataTwo[isActiveTab].countNumber ? (
											<div className="stattics_wrap relative w-1/2 xl-up:top-[-21px] sm:w-full  pl-[85px] tablet-mid:pl-[50px] tablet:pl-[20px] md:pl-0 md:mt-[20px] pt-0">
												<div className="col-two pl-[24px] border-s-2 border-black mb-5">
													<h2 className="text-blue">
														{tabDataTwo[isActiveTab].countNumber}
													</h2>
													<p className="text-black mt-2">
														{tabDataTwo[isActiveTab].subDescription}
													</p>
													<p className="small_font text-black">
														{tabDataTwo[isActiveTab].subDescription}
													</p>
												</div>
												<div className="col-two pl-[24px] border-s-2 border-black">
													<h2 className="text-blue">
														{tabDataTwo[isActiveTab].countNumberTwo}
													</h2>
													<p className="text-black mt-2">
														{tabDataTwo[isActiveTab].subTitleTwo}
													</p>
													<p className="small_font text-black">
														{tabDataTwo[isActiveTab].subDescriptionTwo}
													</p>
												</div>
											</div>
										) : (
											<div className="stattics_wrap relative w-1/2 top-[-21px] laptop-landscape:top-[0] pl-[85px] pt-0 sm:w-full">
												<div className="col-two pl-[22px] border-s-[1px] mb-[24px]">
                                                    <h2 className="text-blue">{tabData[isActiveTab].countNumber}<strong>{tabData[isActiveTab].suffix}</strong></h2>
                                                    <p className="text-white mt-0 font-bold">{tabData[isActiveTab].subTitle}</p>
                                                    <p className="small_font text-white mt-[4px]">{tabData[isActiveTab].subDescription}</p>
                                                </div>
                                                <div className="col-two pl-[22px] border-s-[1px] mt-[32px]">
                                                    <h2 className="text-blue">{tabData[isActiveTab].countNumberTwo}<strong>{tabData[isActiveTab].percentage}</strong></h2>
                                                    <p className="text-white mt-0 font-bold">{tabData[isActiveTab].subTitleTwo}</p>
                                                    <p className="small_font text-white mt-[3px]">{tabData[isActiveTab].subDescriptionTwo}</p>
                                                </div>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</section>
				);
    
}

