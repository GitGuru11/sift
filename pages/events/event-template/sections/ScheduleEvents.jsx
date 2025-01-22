import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import Style from '../../../../styles/schedulTab/scheduleTab.module.css';
import { Inter } from 'next/font/google';
import moment from 'moment';
import DynamicButton from '../../../../components/global-components/Buttons';
import DynamicLinks from '../../../../components/global-components/Links';
const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800']
})
export default function ScheduleEvents(props) {
    let items = props;
    const [tabDate, setTabDate] = useState('All');
    const [activeTab, setActiveTab] = useState(0);
    const scrollContainerRef = useRef(null);
    const handleTabClick = (val) => {
        setTabDate(val);
        setActiveTab(val)
    };
    return (
        <section className={`${Style.scheduleTab} bg-white padding-medium-top tab-with-logo`}>
            <div className="container">
                {items?.data?.heading && <h3>{items?.data?.heading}</h3>}
                <div className="tabsWrap mt-[36px] lg:mt-[10px]">
                    <div className="links">
                        <div className={`text-center mx-auto sidesBorder`} data-aos="fade">
                            <div className={`nav-wrap relative ${Style.tab_nav_wrap} LinkBorder laptop-mid:text-left xl-up:flex xl-up:w-full xl:whitespace-nowrap xl:overflow-x-scroll sidesBorder pt-[20px] lg:pt-[0] z-10`} ref={scrollContainerRef}>
                                {items?.data?.tabs && items?.data?.tabs.map((item, index) => {
                                    return (
                                        <div className={`eyebrow-text ${Style.tabLink} ${Style.tabNav} text-base desktop:text-xs wide-screen:text-2xl font-bold tab-nav text-black xl:text-[#677196] pt-[10px]  pl-[21px] pb-[20px] uppercase tracking-[2px] xl:hover:text-black relative inline-block z-10 w-full xl:w-fit xl:px-[20px] xl-up:hover:opacity-[1] xl-up:opacity-[0.4] xl-up:w-1/4 cursor-pointer
                                        ${index === activeTab ? Style.activeLink : ''
                                            }  ${index === activeTab ? 'active-link' : ''}`}
                                            key={index} onClick={() => handleTabClick( index)}>
                                            <span>{item?.tabLabel}</span>
                                        </div>
                                    )
                                })
                                }
                            </div>
                            <div className="tabContent relative mt-[40px]">
                                <div className="mainTabContent">
                                    {items?.data?.tabs && items?.data?.tabs.map((items, index) => {
                                        return (
                                            activeTab ===  index  &&  items?.rows && items?.rows?.map((item, i) => {
                                                let postDate = item?.date && moment(item?.date, 'DD/MM/YYYY').format('MMM DD, YYYY');
                                                return (
                                                    <>
                                                    {(item?.title || item?.image?.sourceUrl || postDate || item?.time) &&
                                                    
                                                    <div key={i} className={` group item mb-[24px] last:mb-[0] relative flex items-center rounded-[16px] 
                                                    overflow-hidden outline outline-[2px] outline-black  transition-all duration-[0.3s] shadow-none`}>
                                                        <DynamicLinks cta={item?.buttons} />
                                                        {item?.image && item?.image?.sourceUrl &&
                                                            <div className={`imgWap h-[100%] w-[340px] lg:hidden lg:w-0 xxl-mid:w-[30%] xxl:w-[30%] xxl-mid-up:w-[25%] wide-screen:w-[30%] absolute left-0 top-0 overflow-hidden`}>
                                                                <Image className={`w-full h-full object-cover scale-none transition-all duration-[0.3s] `}
                                                                    src={item?.image?.sourceUrl}
                                                                    alt={item?.image?.altText}
                                                                    width={500} height={500} quality={25} />
                                                            </div>
                                                        }
                                                        <div className={`contentWrap p-[40px] xxl:p-[30px] text-left${item?.image?.sourceUrl ? ' lg:w-[100%!important] w-[calc(100%-340px)] xxl:w-[calc(100%-30%)] xxl-mid:w-[calc(100%-30%)] xxl-mid-up:w-[calc(100%-25%)] wide-screen:w-[calc(100%-30%)] ml-auto' : ' '}`}>
                                                            <div className={`dateWrap flex flex-wrap text-blue mb-[8px] relative ${Style.cardsSchedule}`}>
                                                                <div className={`date pr-[10px] mr-[10px] border-blue relative ${Style.pipes}`}>
                                                                    <span className={`text-[14px] font-[700] uppercase leading-[16px] ${inter.className}`}>
                                                                        {postDate}
                                                                    </span>
                                                                </div>
                                                                <div className={`time pr-[10px] mr-[10px] border-blue relative ${Style.pipes}`}>
                                                                    <span className={`text-[14px] font-[700] uppercase leading-[16px] ${inter.className}`}>
                                                                        {item?.time}
                                                                    </span>
                                                                </div>
                                                                {item?.location && <div className={`lavel relative ${Style.pipes}`}>
                                                                    <span className={`text-[14px] font-[700] uppercase leading-[16px] ${inter.className}`}>
                                                                        {item?.location}
                                                                    </span>
                                                                </div>
                                                                }
                                                            </div>
                                                            {item?.title && <h4 className='mb-[15px]'>{item?.title}</h4>}
                                                            {item?.body && <p className='mb-[24px]'>{item?.body}</p>}
                                                            {item?.speaker?.speakers && <div className="autherWrap">
                                                                    <p className='small_font xl-up:text-[16px] xl:text-[16px] !font-[600]'>{item?.speaker?.heading}&nbsp;
                                                                        {item?.speaker && item?.speaker?.speakers && item?.speaker?.speakers.map((val, i) => {
                                                                            return(
                                                                                <span key={i}>
                                                                                    {val?.speakerName && <span>{val?.speakerName}</span>}
                                                                                    {item?.speaker?.speakers.length > 1 && (item?.speaker?.speakers.length-1) != i ? ', ' : ''}
                                                                                </span>
                                                                            )})
                                                                        }
                                                                    </p>
                                                                </div>}
                                                                {item?.buttons && <div className="btn mt-[44px] xxl:mt-[30px]">
                                                                    <DynamicButton cta={item?.buttons} />
                                                                </div>} 
                                                        </div>
                                                    </div> }
                                                    </>
                                                )
                                            })
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
