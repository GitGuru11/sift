import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TabSliderStyle from '../../styles/solutions/tabSlider.module.css';
import DynamicButton from '../global-components/Buttons';
import DynamicLinks from "../global-components/Links";

export default function TabSlider (props) {
    let data = props.items;
    const [currentActive , SetCurrentActive] = useState(0)
    const [isActiveTab, setActiveTab] = useState(0);
    const [winWidth, isWinWidth] = useState(0);
    const slickSliderRef = useRef();

    const [isSlickSlider, setSlider] = useState();
    useEffect(() => { 
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
    }  

    // State to keep track of the current slide index
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleAfterChange = (index) => {
        // Update the currentSlide state when the slide changes
        setCurrentSlide(index);
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
        responsive: [
            {
                breakpoint: 1401,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  arrows: true,
                  dots: false,
                 
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  arrows: false,
                  dots: true,
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
          ]
      };

    const arrow = "after:content-[''] after:absolute after:w-[15px] after:h-[15px] after:top-[50%] after:translate-y-[-40%] after:right-[-20px] after:bg-[url('/bannerWithResourceCard/rightArrow.svg')] after:duration-300 after:bg-cover after:opacity-0";
   
    return (
        <section id={data.id ? data.id : ''} className={`tabSlider py-0 overflow-hidden ${data.gatedComponent? 'GatedHide' : ''} ${data.background} ${data.classes} ${data.padding}`} >
            {
				data?.background == 'custom' && (
					<div className="custom-bg-img absolute left-0 top-[0px] w-full h-full ">
						{data?.backgroundImage?.sourceUrl && <Image className="w-full h-full object-cover" src={data?.backgroundImage?.sourceUrl} alt={data?.backgroundImage?.altText} width="1200" height="1200" />}
					</div>
				)
			}
            <div className={`intro laptop-landscape:pt-[64px] laptop-landscape:pb-[125px] pt-[142px] pb-[140px] tablet:py-[100px] tablet:pt-[60px] phablet:py-[100px] sm:pt-[60px] desktop:pt-[80px] desktop-mid:pt-[80px]`}>
                {data?.heading && <div className="container">
                    <h2  dangerouslySetInnerHTML={{ __html: data?.heading }}></h2>
                </div>}
            </div>
            <div className={`tab_slider_wrap`}>
                <div className="container">
                    <div className={`tabWithSlide wide-screen:pl-[20px]`} data-aos="fade-in" data-aos-delay="300">
                        {
                          data?.tabs && data?.tabs.length > 5 ? 

                        <Slider ref={slickSliderRef}
                        {...settings} afterChange={handleAfterChange}>
                            {data?.tabs && data?.tabs.map((tab, index) => {
                                return (
                                    <div key={index} className={`card blackBorder data p-3 w-[15%] mx-2 sm:w-[50%] md:w-[25%] tablet-mid:w-[25%] relative h-[160px] desktop-mid:h-[140px] transition-all sm:h-[140px] cursor-pointer ${isActiveTab == index ? 'activeCard ' : ''} tablet:w-[20%]`}   onClick={() => handleTabClick(index)}>
                                        <div className="item absolute top-0 left-0 w-full h-full flex flex-col p-[20px] pb-0">
                                            {tab?.tabIcon && tab?.tabIcon?.sourceUrl &&<div className={`${TabSliderStyle.icon_wrap} relative`}>
                                                <Image src={tab?.tabIcon?.sourceUrl} alt={tab?.tabIcon?.altText} width={40} height={40} />
                                            </div>}
                                            {tab?.tabLabel != null ?(<h4 className={`mt-2 max-w-[100%] xxl-up:max-w-[100%] line-clamp-2`}>{tab?.tabLabel}</h4>):''}
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider> : data?.tabs && data?.tabs.length > 2 && winWidth < 767 ? 
                            <Slider ref={slickSliderRef}
                            {...settings} afterChange={handleAfterChange}>
                                {data?.tabs && data?.tabs.map((tab, index) => {
                                    return (
                                        <div key={index} className={`card blackBorder data p-3 w-[15%] mx-2 sm:w-[50%] md:w-[25%] tablet-mid:w-[25%] relative h-[160px] desktop-mid:h-[140px] transition-all sm:h-[140px] cursor-pointer ${isActiveTab == index ? 'activeCard ' : ''} tablet:w-[20%]`}   onClick={() => handleTabClick(index)}>
                                            <div className="item absolute top-0 left-0 w-full h-full flex flex-col p-[20px] pb-0">
                                                {tab?.tabIcon && tab?.tabIcon?.sourceUrl && <div className={`${TabSliderStyle.icon_wrap} relative`}>
                                                    <Image src={tab?.tabIcon?.sourceUrl} alt={tab?.tabIcon?.altText} width={40} height={40} />
                                                </div> }
                                                <h4 className={`mt-2 max-w-[100%] xxl-up:max-w-[100%]`}>{tab?.tabLabel}</h4>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Slider> :
                                <div className="flex justify-start sm:block">
                                   {data?.tabs && data?.tabs.map((tab, index) => {
                                        return (
                                            <div key={index} className={`card blackBorder data p-3 w-[15%] mx-2 sm:w-[50%] laptop:!m-[20px] md:w-[25%] mid-wide-screen:!ml-[10px] tablet-mid:w-[25%] relative h-[160px] desktop-mid:h-[140px] transition-all sm:h-[140px] cursor-pointer ${isActiveTab == index ? 'activeCard wide-screen:!scale-[1.1]' : ''} tablet:w-[20%]`}  onClick={() => handleTabClick(index)}>
                                                <div className="item absolute top-0 left-0 w-full h-full flex flex-col p-[20px] lg:p-[17px]">
                                                    {tab?.tabIcon && tab?.tabIcon?.sourceUrl &&<div className="icon_wrap relative">
                                                        <Image src={tab?.tabIcon?.sourceUrl} alt={tab?.tabIcon?.altText} width={40} height={40} />
                                                    </div> }
                                                    <h4 className={` mt-2 max-w-[100%] xxl-up:max-w-[100%] line-clamp-2`}>{tab?.tabLabel}</h4>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                        }
                    </div>
                    <div className="tab_content_wrap relative top-[-67px] laptop-landscape:top-[-70px] phablet:top-[-30px] tablet:top-[-40px] desktop-mid:top-[-100px] sm:top-[-110px]">
                        <div className="item flex sm:block" >
                            <div className="w-1/2 tabContent sm:w-full">
                                <div className="content_with_cta relative">
                                    {data?.tabs && <h3>{data?.tabs[isActiveTab]?.tabContent?.title}</h3> }
                                    {data?.tabs &&  <div className={` mt-[15px]`}  dangerouslySetInnerHTML={{ __html: data?.tabs[isActiveTab]?.tabContent?.body }} ></div> }
                                    {data?.tabs &&  <div className="cta mt-[22px]">
                                        <DynamicButton cta={data?.tabs[isActiveTab]?.tabContent?.buttons} />
                                    </div> }
                                </div>
                            </div>
                            



                            <div className="stattics_wrap relative w-1/2 laptop-landscape:top-[0] top-[-21px] sm:top-[25px] mx-2 sm:w-full pl-[85px] md:pl-0 pt-0 sm:pl-[10px]">
                            
                                    
                                        {data?.tabs && data?.tabs[isActiveTab]?.tabContent?.typeOfContent == 'statistics' ? (
                                            <>
                                            {data?.tabs[isActiveTab]?.tabContent?.statistics && data?.tabs[isActiveTab]?.tabContent?.statistics.map((res, index) => { 
                                                return(
                                              <div  key={index}  className="col-two pl-[22px] border-s-[1px] mb-[24px]">
                                                    <h2 className="!text-yello">{res?.number}<strong>{res?.symbol}</strong></h2>
                                                    <p className="!text-white mt-0 font-bold">{res?.title}</p>
                                                    <p className="small_font text-white mt-[4px]">{res?.body}</p>
                                                </div>
                                                )})}
                                            </>
                                        ) : data?.tabs && data?.tabs[isActiveTab]?.tabContent?.typeOfContent == 'resources' ? (
                                            <>
                                               <p className="text-oceanGreen uppercase font-[600]">{data?.tabs[isActiveTab]?.tabContent?.resources?.title}</p>
                                                {data?.tabs[isActiveTab]?.tabContent?.resources && data?.tabs[isActiveTab]?.tabContent?.resources?.resource.map((res, index) => { 
                                                return (
                                                <div  key={index}  className={`group relative wrap flex flex-wrap w-full mt-[28px] sm:mt-[20px]`} >
                                                    <DynamicLinks cta={res?.linkLinks} />
                                                    <div className="col-left w-[70%] mb-3">
                                                        <h4 className={`relative text-white inline mt-[2px] ${arrow} group-hover:after:opacity-100 sm:after:opacity-100`} >{res?.title}</h4>
                                                        <p className="small_font text-white mt-[4px]">
                                                            {res?.body}
                                                        </p>
                                                    </div>
                                                    <div className="col-right  w-[30%] pl-[22px]  mb-3">
                                                        <div className="img-wrap h-[90px]">
                                                        {res?.image && res?.image?.sourceUrl && (<Image
                                                                className="object-contain h-full"
                                                                src={res?.image?.sourceUrl}
                                                                alt={res?.image?.altText}
                                                                width={150}
                                                                height={150}
                                                            />
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>  )                                          
                                                })}
                                            </>
                                        ) : (                                              
                                                <div className={`img_wrap ${data?.tabs && data?.tabs[isActiveTab]?.tabContent?.typeOfImage}`}>
                                                {data?.tabs && data?.tabs[isActiveTab]?.tabContent.image?.sourceUrl && (<Image
                                                        src={data?.tabs[isActiveTab]?.tabContent?.image?.sourceUrl}
                                                        alt={data?.tabs[isActiveTab]?.tabContent?.image?.altText}
                                                        width={594}
                                                        height={490}
                                                    />
                                                )}
                                                </div>
                                        )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}