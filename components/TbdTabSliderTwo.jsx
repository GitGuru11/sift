import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import TabSliderStyle from '../styles/solutions/tabSlider.module.css';
import TabSliderStyle from '../styles/solutions/tabSlider.module.css';
import Btn_Transparent from './button/Button_Transparent';

export default function TabSlider () {

    const data = [
      {
        color: 
        {
            bgColor: "bg-darkBlue",
            tabBgColor: "bg-black",
            cardBgColor: "bg-black",
            titleColor: "text-white"
        },
        mainData: [
                {
                    id: "1",
                    title: "Role one",
                    mainTitle: "Role one AI-Powered Fraud Decisioning..",
                    description: "AI-Powered Fraud Decisioning..",
                    btn: "learn more",
                    link: "#",
                    icon: "user-circle-fill.svg",
                    bigImage: "gift-with-girl.png"
                },
                {
                    id: "2",
                    title: "Role two",
                    mainTitle: "Role two AI-Powered Fraud Decisioning..",
                    description: "AI-Powered Fraud Decisioning..",
                    btn: "learn more",
                    link: "#",
                    icon: "bag-simple-fill.svg",
                    bigImage: "gift-with-girl.png"
                },
                {
                    id: "3",
                    title: "Role three",
                    mainTitle: "Role three AI-Powered Fraud Decisioning..",
                    description: "AI-Powered Fraud Decisioning..",
                    btn: "learn more",
                    link: "#",
                    icon: "bank-fill.svg",
                    bigImage: "gift-with-girl.png"
                },
                {
                    id: "4",
                    title: "Role four",
                    mainTitle: "Role four AI-Powered Fraud Decisioning..",
                    description: "AI-Powered Fraud Decisioning..",
                    btn: "learn more",
                    link: "#",
                    icon: "car-fill-color.svg",
                    bigImage: "gift-with-girl.png"
                },
                {
                    id: "5",
                    title: "Role one",
                    mainTitle: "Role one AI-Powered Fraud Decisioning..",
                    description: "AI-Powered Fraud Decisioning..",
                    btn: "learn more",
                    link: "#",
                    icon: "user-circle-fill.svg",
                    bigImage: "gift-with-girl.png"
                },
                {
                    id: "6",
                    title: "Role two",
                    mainTitle: "Role two AI-Powered Fraud Decisioning..",
                    description: "AI-Powered Fraud Decisioning..",
                    btn: "learn more",
                    link: "#",
                    icon: "bag-simple-fill.svg",
                    bigImage: "gift-with-girl.png"
                },
                {
                    id: "7",
                    title: "Role three",
                    mainTitle: "Role three AI-Powered Fraud Decisioning..",
                    description: "AI-Powered Fraud Decisioning..",
                    btn: "learn more",
                    link: "#",
                    icon: "bank-fill.svg",
                    bigImage: "gift-with-girl.png"
                },
                {
                    id: "8",
                    title: "Role four",
                    mainTitle: "Role four AI-Powered Fraud Decisioning..",
                    description: "AI-Powered Fraud Decisioning..",
                    btn: "learn more",
                    link: "#",
                    icon: "car-fill-color.svg",
                    bigImage: "gift-with-girl.png"
                },
            ] 
        },
    ]

    const tabData = data[0].mainData;
    const tabColor = data[0].color;


    const [isActiveTab, setActiveTab] = useState(0);
    const [winWidth, isWinWidth] = useState(0);
    const slickSliderRef = useRef(null);
    const [isSlickSlider, setSlider] = useState(0);
    const [abc, setAbc] = useState(0);

    

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
    
    const handleTabClick = tabActiveCard => {
        setActiveTab(tabActiveCard)
        setSlider(tabActiveCard)
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
        var buttonIndex = document.querySelector('.tabSlider .slick-slider button.slick-prev');
        // console.log(slickDots.length);
        slickDots.forEach(element => {
            element.addEventListener('click', function () {
                // console.log(this);
                var allCards = document.querySelectorAll('.tabSlider .slick-slider .slick-slide .data');
                console.log(allCards);
                allCards.forEach(card => {
                    card.classList.remove('tabSlider_activeCard__IufoA');
                });
            });
        });
        // buttonIndex.addEventListener('click', function () {
        //     // Get NodeList of elements with the specified selector
        //     var elements = document.querySelectorAll('.tabSlider .slick-slider .slick-list .slick-slide');
        
        //     // Convert NodeList to an array
        //     var arrayFromNodeList = Array.from(elements);
        
        //     // Find the index of the element with the class '.slick-current' in the array
        //     var currentIndex = arrayFromNodeList.indexOf(document.querySelector('.slick-current'));
        //     handleTabClick(currentIndex - 1);
        //     // console.log('Index of .slick-current:', currentIndex);
        // });

    })

    return (
        <section className="tabSlider py-0" id="role">
            <div className={`${tabColor.bgColor} laptop-landscape:pt-[64px] laptop-landscape:pb-[125px] pt-[142px] pb-[140px] tablet:py-[100px] tablet:pt-[60px] phablet:py-[100px] sm:pt-[60px] desktop:pt-[80px] desktop-mid:pt-[80px]`}>
                <div className="container">
                    <h2 className="text-white">By role</h2>
                </div>
            </div>
            <div className={`relative tab_slider_wrap ${tabColor.tabBgColor} pb-0 h-[638px] laptop-landscape:pb-[64px] tablet:h-[520px]  laptop-landscape:h-[620px] desktop:h-[548px] desktop-mid:h-[490px] laptop-mid:h-[520px] laptop:h-[550px] md:h-[720px]`} >
                <div className="container">
                    <div className="tab_slide_wrap pr-[20px] w-[calc(100%+38px)] ml-[-19px] relative pt-10 left-0 top-[-125px] tablet:w-[calc(100%+20px)] tablet:ml-0 laptop-landscape:top-[-128px] h-[250px] desktop-mid:w-[calc(100%+20px)] desktop-mid:ml-0" data-aos="fade-in" data-aos-delay="300">
                        {
                           tabData.length > 6 ?  
                        
                        <Slider ref={slickSliderRef} {...settings} afterChange={handleAfterChange}>
                            {tabData.map((data, index) => {
                                return (
                                    <div key={index} className={` ${tabColor.tabBgColor === 'bg-white' ? TabSliderStyle.blackBorder : ''} ${TabSliderStyle.card} data p-3 ${tabColor.cardBgColor} w-[15%] mx-2 sm:w-[50%] md:w-[25%] tablet-mid:w-[25%] relative h-[160px] desktop-mid:h-[140px] transition-all sm:h-[140px] cursor-pointer hover:shadow-white-shadow ${isActiveTab == index ? TabSliderStyle.activeCard : ''} tablet:w-[20%]`} onClick={() => handleTabClick(index)}>
                                        <div className="item absolute top-0 left-0 w-full h-full flex flex-col p-[20px]">
                                            <div className={`${TabSliderStyle.icon_wrap} relative`}>
                                                <Image src={`/tabSliderIcons/${data.icon}`} alt="" width={40} height={40} />
                                            </div>
                                            <h4 className={`${tabColor.tabBgColor === 'bg-white' ? 'text-black' : 'text-white'} mt-2 max-w-[100%] xxl-up:max-w-[100%]`}>{data.title}</h4>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider> :  tabData.length > 2 && winWidth < 595 ? 

                                        <Slider ref={slickSliderRef} {...settings}>
                                        {tabData.map((data, index) => {
                                            return (
                                                <div key={index} className={` ${tabColor.tabBgColor === 'bg-white' ? TabSliderStyle.blackBorder : ''} ${TabSliderStyle.card} data p-3 ${tabColor.cardBgColor} w-[15%] mx-2 sm:w-[50%] md:w-[25%] tablet-mid:w-[25%] relative h-[160px] desktop-mid:h-[140px] transition-all sm:h-[140px] cursor-pointer hover:shadow-white-shadow ${isActiveTab == index ? TabSliderStyle.activeCard : ''} tablet:w-[20%]`} onClick={() => handleTabClick(index)}>
                                                    <div className="item absolute top-0 left-0 w-full h-full flex flex-col p-[20px]">
                                                        <div className={`${TabSliderStyle.icon_wrap} relative`}>
                                                            <Image src={`/tabSliderIcons/${data.icon}`} alt="" width={40} height={40} />
                                                        </div>
                                                        <h4 className={`${tabColor.tabBgColor === 'bg-white' ? 'text-black' : 'text-white'} mt-2 max-w-[100%] xxl-up:max-w-[100%]`}>{data.title}</h4>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        </Slider> :

                                    <div className="flex justify-start sm:flex-wrap">
                                        {tabData.map((data, index) => {
                                            return (
                                                <div key={index} className={` ${tabColor.tabBgColor === 'bg-white' ? TabSliderStyle.blackBorder : ''} ${TabSliderStyle.card} data p-3 ${tabColor.cardBgColor} w-[15%] mx-2 sm:w-[50%] md:w-[25%] tablet-mid:w-[25%] relative h-[160px] desktop-mid:h-[140px] transition-all sm:h-[140px] cursor-pointer hover:shadow-white-shadow ${isActiveTab == index ? TabSliderStyle.activeCard : ''} tablet:w-[20%]`} onClick={() => handleTabClick(index)}>
                                                    <div className="item absolute top-0 left-0 w-full h-full flex flex-col p-[20px]">
                                                        <div className="icon_wrap relative">
                                                            <Image src={`/tabSliderIcons/${data.icon}`} alt="" width={40} height={40} />
                                                        </div>
                                                        <h4 className="text-white mt-2">{data.title}</h4>
                                                    </div>
                                                    
                                                </div>
                                            )
                                        })}
                                    </div>
                        }
                    </div>
                    <div className="tab_content_wrap relative phablet:pb-[0px] top-[-80px] desktop-mid:top-[-115px] laptop-landscape:top-[-97px] tablet:pb-[0px] desktop-mid:pb-[30px] md:top-[-100px]"> 
                        <div className="item flex w-[calc(100%+20px)] ml-[-10px] md:w-full md:ml-[0] phablet:block sm:block">
                            <div className="w-1/2 p-[0] mx-2 relative top-[0] md:top-[0] phablet:w-full sm:w-full">
                                <div className="content_with_cta relative">
                                    <h3 className="text-white">{tabData[isActiveTab].mainTitle}</h3>
                                    <p className="text-white mt-2">{tabData[isActiveTab].description}</p>
                                    <div className="cta mt-[22px]">
                                        <Btn_Transparent text={tabData[isActiveTab].btn} link="/" />
                                    </div>
                                </div>
                            </div>
                            {
                            tabData[isActiveTab].countNumber ? 
                                <div className="stattics_wrap w-1/2 p-2 mx-2 phablet:w-full sm:w-full">
                                    <div className="col-two pl-3 border-s-2 mb-5">
                                        <h2 className="text-yello">{tabData[isActiveTab].countNumber}</h2>
                                        <p className="text-white mt-2">{tabData[isActiveTab].subDescription}</p>
                                        <p className="small_font text-white">{tabData[isActiveTab].subDescription}</p>
                                    </div>
                                    <div className="col-two pl-2 border-s-2">
                                        <h2 className="text-yello">{tabData[isActiveTab].countNumberTwo}</h2>
                                        <p className="text-white mt-2">{tabData[isActiveTab].subTitleTwo}</p>
                                        <p className="small_font text-white">{tabData[isActiveTab].subDescriptionTwo}</p>
                                    </div>
                                </div> : 
                                    <div className="stattics_wrap w-1/2 mx-2 phablet:w-full sm:w-full">
                                        <div className="img_wrap phablet:max-w-[500px] relative tablet:bottom-[-60px] laptop-mid:!bottom-[-30px] desktop:bottom-[-60px]">
                                            <Image src={`/tabSliderIcons/${tabData[isActiveTab].bigImage}`} alt="" width={594}  height={490}/>
                                        </div>
                                    </div>
                                }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}