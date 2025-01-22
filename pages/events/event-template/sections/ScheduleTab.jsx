import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { useQuery } from '@apollo/client';
import Arrow_Btn from '../../../../components/button/Arrow_Btn';
import Style from '../../../../styles/schedulTab/scheduleTab.module.css';
import { Inter } from 'next/font/google';
import { GET_UPCOMMING_EVENT } from '../../../../graphql/upCommingEvent';
import moment from 'moment';
import DynamicButton from '../../../../components/global-components/Buttons';
const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800']
})
export default function ScheduleTab(props) {
    let excludeId = props?.currentId;
    const [tabDate, setTabDate] = useState('All');
    const [activeTab, setActiveTab] = useState();
	const scrollContainerRef = useRef(null);
    var date = moment();
    var currentDate = date.format('YYYY-MM-DD');
    const postObj = useQuery(GET_UPCOMMING_EVENT, {
		variables: { currentDate: currentDate, excludeId: excludeId},
	});
   
	let postData = [];
	if (postObj) {
		postData = postObj?.data?.events?.nodes || []; 
  	}
	if (postObj.loading) return <div className="detail-loader bg-white h-full w-full fixed left-0 right-0 z-[99]"></div>;
	if (postObj.error) return <p className='pt-[100px] text-center'>Error: something went wrong please wait or try again</p>;

    var groupData = postData.reduce((x, y) => {
        (x[y.eventbuilder.cardGridOptions.startDate] = x[y.eventbuilder.cardGridOptions.startDate] || []).push(y);
        return x;
    }, {});

    const groupPostData = Object.values(groupData);
    
    const handleTabClick = (val, index) => {
		setTabDate(val);
        setActiveTab(index)
	};
    

  return (
      <section className={`${Style.scheduleTab} bg-white padding-medium-top tab-with-logo`}>
        <div className="container">
            <h3>Schedule of events</h3>
            <div className="tabsWrap mt-[36px] lg:mt-[10px]">
                <div className="links">
                    <div className={`text-center mx-auto sidesBorder`} data-aos="fade">
                        <div className={`nav-wrap relative ${Style.tab_nav_wrap} LinkBorder laptop-mid:text-left xl-up:flex xl-up:w-full xl:whitespace-nowrap xl:overflow-x-scroll sidesBorder pt-[20px] lg:pt-[0] z-10`} ref={scrollContainerRef}>
                            <div className={`eyebrow-text ${Style.tabLink} ${Style.tabNav} ${tabDate === 'All' ? `${Style.activeLink} active-link` : '' }  text-base desktop:text-xs wide-screen:text-2xl font-bold tab-nav text-black xl:text-[#677196] pt-[10px]  pl-[21px] pb-[20px] uppercase tracking-[2px] xl:hover:text-black relative inline-block z-10 w-full 
                            xl:w-fit xl:px-[20px] xl-up:hover:opacity-[1] xl-up:opacity-[0.4] xl-up:w-1/4 cursor-pointer active-link`}
                            onClick={() => handleTabClick('All')}>
                                <span>ALL DAYS</span>
                            </div>
                            {groupPostData && groupPostData.slice(0,3).map((item, index) => {
                                const tabStartDate = item[0]?.eventbuilder?.cardGridOptions?.startDate || [];
                                let newDate = tabStartDate && moment(tabStartDate).format('dddd, MMMM DD');
                                    return (
                                        <div className={`eyebrow-text  text-base desktop:text-xs wide-screen:text-2xl font-bold tab-nav text-black xl:text-[#677196] pt-[10px]  pl-[21px] pb-[20px] uppercase tracking-[2px] xl:hover:text-black relative inline-block z-10 w-full xl:w-fit xl:px-[20px] xl-up:hover:opacity-[1] xl-up:opacity-[0.4] xl-up:w-1/4 cursor-pointer
                                        ${index === activeTab ? Style.activeLink : ''
                                            }  ${index === activeTab ? 'active-link' : ''}`}
                                            key={index} onClick={() => handleTabClick(tabStartDate, index)}>
                                            <span>{newDate}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="tabContent relative mt-[40px]">
                            <div  className="mainTabContent">
                                {groupPostData && groupPostData.map((posts, index) => {
                                    return (
                                        posts && posts.slice(0,3).map((item, i) => {
                                            console.log(item);
                                            const cardGridOptions = item?.eventbuilder?.cardGridOptions || [];
                                            const speakerData = item?.eventbuilder?.speakers?.speakers || [];
                                            let postStartDate = cardGridOptions?.startDate && moment(cardGridOptions?.startDate).format('ddd, MMM DD');
                                            let postEndDate = cardGridOptions?.endDate && moment(cardGridOptions?.endDate).format('ddd, MMM DD');
                                            return(  
                                                    <div key={i} className={` ${tabDate == 'All'? 'flex' : cardGridOptions?.startDate == tabDate ? 'flex' : 'hidden'} group item mb-[24px] last:mb-[0] relative flex items-center rounded-[16px] 
                                                    overflow-hidden outline outline-[2px] outline-black  transition-all duration-[0.3s] shadow-none ${!speakerData && " hover:outline-[3px]  hover:shadow-eventCards-shadow"}`}>
                                                        <Link href='#' className='emptyLink'>.</Link>
                                                        {cardGridOptions?.cardImage?.sourceUrl ? 
                                                            <div className={`imgWap h-[100%] w-[340px] lg:hidden lg:w-0 xxl-mid:w-[30%] xxl:w-[30%] xxl-mid-up:w-[25%] wide-screen:w-[30%] absolute left-0 top-0 overflow-hidden`}>
                                                                <Image className={`w-full h-full object-cover scale-none transition-all duration-[0.3s] `} 
                                                                src={cardGridOptions?.cardImage?.sourceUrl}  
                                                                alt={cardGridOptions?.cardImage?.altText } 
                                                                width={500} height={500} quality={25}/>
                                                            </div>
                                                        : cardGridOptions?.featuredEventImage?.sourceUrl ? 
                                                            <div key={i} className={`imgWap h-[100%] w-[340px] lg:hidden lg:w-0 xxl-mid:w-[30%] xxl:w-[30%] xxl-mid-up:w-[25%] wide-screen:w-[30%] absolute left-0 top-0 overflow-hidden`}>
                                                                <Image className={`w-full h-full object-cover scale-none transition-all duration-[0.3s] 
                                                                ${!item?.speakers?.speakers && " group-hover:scale-[1.1]"}`} 
                                                                src={cardGridOptions?.featuredEventImage?.sourceUrl}  
                                                                alt={cardGridOptions?.featuredEventImage?.altText} 
                                                                width={500} height={500} quality={25}/>
                                                            </div>
                                                        : ''}
                                                        <div className={`contentWrap p-[40px] xxl:p-[30px] text-left${cardGridOptions?.cardImage 
                                                            || cardGridOptions?.featuredEventImage 
                                                            ? ' lg:w-[100%!important] w-[calc(100%-340px)] xxl:w-[calc(100%-30%)] xxl-mid:w-[calc(100%-30%)] xxl-mid-up:w-[calc(100%-25%)] wide-screen:w-[calc(100%-30%)] ml-auto' : ' '}`}>
                                                            <div className={`dateWrap flex flex-wrap text-blue mb-[8px] relative ${Style.cardsSchedule}`}>
                                                                <div className={`date pr-[10px] mr-[10px] border-blue relative ${Style.pipes}`}>
                                                                    <span className={`text-[14px] font-[700] uppercase leading-[16px] ${inter.className}`}>
                                                                        {postStartDate}{postEndDate ? ' - ': ''}{postEndDate}
                                                                    </span>
                                                                </div>
                                                                <div className={`time pr-[10px] mr-[10px] border-blue relative ${Style.pipes}`}>
                                                                    <span className={`text-[14px] font-[700] uppercase leading-[16px] ${inter.className}`}>
                                                                        {cardGridOptions?.time}
                                                                    </span>
                                                                </div>
                                                                {cardGridOptions?.location &&  <div className={`lavel relative ${Style.pipes}`}>
                                                                    <span className={`text-[14px] font-[700] uppercase leading-[16px] ${inter.className}`}>
                                                                        {cardGridOptions?.location}
                                                                    </span>
                                                                </div>
                                                                }
                                                            </div>
                                                            <h4 className='mb-[15px]'>{item.title}</h4>
                                                            <p className='mb-[24px]'>{
                                                            cardGridOptions?.subheaderForLowerEventTiles ? 
                                                            cardGridOptions?.subheaderForLowerEventTiles 
                                                            : cardGridOptions?.subtitle}</p>
                                                            <DynamicButton cta={cardGridOptions?.cta} />
                                                                <div className="autherWrap">
                                                                    {speakerData.length > 0  && 
                                                                        <p className='small_font xl-up:text-[16px] xl:text-[16px] !font-[600]'>Featured Speaker:&nbsp;
                                                                            {speakerData.slice(0,3).map((item, i) => {
                                                                                return(
                                                                                    <>
                                                                                    <span>{item?.name}</span>
                                                                                        {speakerData.length > 1 && (speakerData.length-1) != i ? ', ' : ''}
                                                                                    </>
                                                                                )})
                                                                            }
                                                                        </p>
                                                                    }
                                                                </div> 
                                                                {/* {speakerData.length < 1 && <div className="btn mt-[44px] xxl:mt-[30px]">
                                                                    <Arrow_Btn text='reserve your spot' link='/test' />
                                                                </div>} */}
                                                            
                                                    </div>
                                                </div>
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
)}
