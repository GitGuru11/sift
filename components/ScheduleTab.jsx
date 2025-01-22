import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import ArrowBtn from './button/Black_arrowBtn';
import Style from '../styles/schedulTab/scheduleTab.module.css';
import { Inter } from 'next/font/google';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800']
})
export default function ScheduleTab() {
    const [activeTab, setActiveTab] = useState(0);
	const scrollContainerRef = useRef(null);

	useEffect(() => {
		const centerActiveLink = () => {
			const container = scrollContainerRef.current;
			const activeLink = container.querySelector('.active-link');
			if (container && activeLink) {
				const containerWidth = container.clientWidth;
				const activeLinkWidth = activeLink.clientWidth;
				const targetScrollLeft =
					activeLink.offsetLeft - (containerWidth - activeLinkWidth) / 2;
				const frames = 60;
				let currentFrame = 0;
				const animateScroll = () => {
					const easing = easeInOutQuad(currentFrame / frames);
					container.scrollLeft =
						container.scrollLeft +
						(targetScrollLeft - container.scrollLeft) * easing;
					currentFrame += 1;
					if (currentFrame < frames) {
						requestAnimationFrame(animateScroll);
					}
				};
				animateScroll();
			}
		};
		const handleResize = () => {
			centerActiveLink();
		};
		const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
		centerActiveLink();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [activeTab]);

    
    const handleTabClick = (index) => {
		setActiveTab(index);
	};

    const tabs = [
        {
            id: "1",
            title: "All days",
            cardData: [
                {
                    date: "SUN, OCT 22",
                    time: "1:50 P.M. – 2:05 P.M.",
                    lavel: "DELFINO, LEVEL 4",
                    mainTitle: "KYC SOS: How Cybercriminals are Exploiting Your Business’s KYC Vulnerabilities",
                    description: "AI-Powered Fraud Decisioning..",
                    speaker: "Featured Speaker",
                    authorName: "Brittany Allen",
                },
                {
                    date: "SUN, OCT 22",
                    time: "6:00 P.M. – 10:00 P.M.",
                    image: "/scheduleTab/evnts.png",
                    mainTitle: "Money20/20 kickoff reception",
                    description: "AI-Powered Fraud Decisioning..",
                    btn: "reserve your spot"
                },
                {
                    date: "MON, OCT 23",
                    time: "8:30 P.M. – 11:30 P.M.",
                    mainTitle: "Rosina Cocktail Lounge happy hour co-hosted by Incode and TTEC",
                    description: "AI-Powered Fraud Decisioning..",
                    speaker: "Featured Speaker",
                    authorName: "Brittany Allen",
                }
            ],
        },
        {
            id: "2",
            title: "sunday, october 22",
            cardData: [
                {
                    date: "SUN, OCT 22",
                    time: "1:50 P.M. – 2:05 P.M.",
                    lavel: "DELFINO, LEVEL 4",
                    mainTitle: "AI-Powered Fraud Decisioning..",
                    description: "AI-Powered Fraud Decisioning..",
                    speaker: "Featured Speaker",
                    authorName: "Brittany Allen",
                },
                {
                    date: "SUN, OCT 22",
                    time: "6:00 P.M. – 10:00 P.M.",
                    image: "/scheduleTab/events.png",
                    lavel: "DELFINO, LEVEL 4",
                    image: "/scheduleTab/evnts.png",
                    mainTitle: "Money20/20 kickoff reception",
                    description: "AI-Powered Fraud Decisioning..",
                    btn: "reserve your spot"
                },
                {
                    date: "MON, OCT 23",
                    time: "8:30 P.M. – 11:30 P.M.",
                    lavel: "DELFINO, LEVEL 4",
                    mainTitle: "Rosina Cocktail Lounge happy hour co-hosted by Incode and TTEC",
                    description: "AI-Powered Fraud Decisioning..",
                    speaker: "Featured Speaker",
                    authorName: "Brittany Allen",
                }
            ],
        },
        {
            id: "3",
            title: "Monday, October 23",
            cardData: [
                {
                    date: "SUN, OCT 22",
                    time: "1:50 P.M. – 2:05 P.M.",
                    lavel: "DELFINO, LEVEL 4",
                    mainTitle: "KYC SOS: How Cybercriminals are Exploiting Your Business’s KYC Vulnerabilities 3",
                    description: "AI-Powered Fraud Decisioning..",
                    speaker: "Featured Speaker",
                    authorName: "Brittany Allen",
                },
                {
                    date: "SUN, OCT 22",
                    time: "6:00 P.M. – 10:00 P.M.",
                    lavel: "DELFINO, LEVEL 4",
                    image: "/scheduleTab/evnts.png",
                    mainTitle: "Money20/20 kickoff reception",
                    description: "AI-Powered Fraud Decisioning..",
                    btn: "reserve your spot"
                },
                {
                    date: "MON, OCT 23",
                    time: "8:30 P.M. – 11:30 P.M.",
                    lavel: "DELFINO, LEVEL 4",
                    mainTitle: "Rosina Cocktail Lounge happy hour co-hosted by Incode and TTEC",
                    description: "AI-Powered Fraud Decisioning..",
                    speaker: "Featured Speaker",
                    authorName: "Brittany Allen",
                }
            ],
        },
        {
            id: "4",
            title: "Tuesday, October 24",
            cardData: [
                {
                    date: "SUN, OCT 22",
                    time: "1:50 P.M. – 2:05 P.M.",
                    lavel: "DELFINO, LEVEL 4",
                    mainTitle: "AI-Powered Fraud Decisioning.. 4",
                    description: "AI-Powered Fraud Decisioning..",
                    speaker: "Featured Speaker",
                    authorName: "Brittany Allen",
                },
                {
                    date: "SUN, OCT 22",
                    time: "6:00 P.M. – 10:00 P.M.",
                    lavel: "DELFINO, LEVEL 4",
                    image: "/scheduleTab/evnts.png",
                    mainTitle: "Money20/20 kickoff reception",
                    description: "AI-Powered Fraud Decisioning..",
                    btn: "reserve your spot"
                },
                {
                    date: "MON, OCT 23",
                    time: "8:30 P.M. – 11:30 P.M.",
                    lavel: "DELFINO, LEVEL 4",
                    mainTitle: "Rosina Cocktail Lounge happy hour co-hosted by Incode and TTEC",
                    description: "AI-Powered Fraud Decisioning..",
                    speaker: "Featured Speaker",
                    authorName: "Brittany Allen",
                }
            ],
        },
    ]

  return (
      <section className={`${Style.scheduleTab} bg-white padding-medium-top tab-with-logo`}>
        <div className="container">
            <h3>Schedule of events</h3>
            <div className="tabsWrap mt-[36px] lg:mt-[10px]">
                <div className="links">
                    <div className={`text-center mx-auto sidesBorder`} data-aos="fade">
                        <div className={`nav-wrap relative ${Style.tab_nav_wrap} LinkBorder laptop-mid:text-left xl-up:flex xl-up:w-full xl:whitespace-nowrap xl:overflow-x-scroll sidesBorder pt-[20px] lg:pt-[0] z-10`} ref={scrollContainerRef}>
                            {
                                tabs.map((item, index) => {
                                    return (
                                        // <div key={index} className="mainLink text-black small_font font-[700] cursor-pointer mx-[48px]">
                                        //     <p>{item.title}</p>
                                        // </div>
                                        <div
                                            className={`eyebrow-text ${Style.tabLink} text-base desktop:text-xs wide-screen:text-2xl font-bold tab-nav text-black xl:text-[#677196] pt-[10px]  pl-[21px] pb-[20px] uppercase tracking-[2px] xl:hover:text-black relative inline-block z-10 w-full xl:w-fit xl:px-[20px] xl-up:hover:opacity-[1] xl-up:opacity-[0.4] "  xl-up:w-1/4 cursor-pointer ${
                                                index === activeTab ? Style.activeLink : ''
                                            }  ${activeTab === 0 ? Style.tabNav : ''} ${
                                                Style.tabNavLink
                                            } ${index === activeTab ? 'active-link' : ''}`}
                                            key={index}
                                            onClick={() => handleTabClick(index)}
                                        >
                                            <span>
                                            {item.title}
                                            </span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="tabContent relative mt-[40px]">
                        {/* {
                            tabs.map((item, index) => {
                                return ( */}
                                    <div  className="mainTabContent">
                                        {tabs[activeTab].cardData.map((cardVallue, i) => (     
                                            <div key={i} className={`group item mb-[24px] last:mb-[0] relative flex items-center rounded-[16px] overflow-hidden outline outline-[2px] outline-black  transition-all duration-[0.3s] shadow-none ${!cardVallue.speaker && " hover:outline-[3px]  hover:shadow-eventCards-shadow"}`}>
                                                <Link href='#' className='emptyLink'>.</Link>
                                                {cardVallue.image ? 
                                                    <div key={i} className={`imgWap h-[100%] w-[340px] lg:hidden lg:w-0 xxl-mid:w-[30%] xxl:w-[30%] xxl-mid-up:w-[25%] wide-screen:w-[30%] absolute left-0 top-0 overflow-hidden`}>
                                                        <Image className={`w-full h-full object-cover scale-none transition-all duration-[0.3s] ${!cardVallue.speaker && " group-hover:scale-[1.1]"}`} src={cardVallue.image}  alt='card Image' width={500} height={500} quality={25}/>
                                                    </div>
                                                : ''}
                                                <div className={`contentWrap p-[40px] xxl:p-[30px] text-left ${cardVallue.image && ' lg:w-[100%!important] w-[calc(100%-340px)] xxl:w-[calc(100%-30%)] xxl-mid:w-[calc(100%-30%)] xxl-mid-up:w-[calc(100%-25%)] wide-screen:w-[calc(100%-30%)] ml-auto'}`}>
                                                    <div className={`dateWrap flex flex-wrap text-blue mb-[8px] relative ${Style.cardsSchedule}`}>
                                                        <div className={`date pr-[10px] mr-[10px] border-blue relative ${Style.pipes}`}>
                                                            <span className={`text-[14px] font-[700] uppercase leading-[16px] ${inter.className}`}>{cardVallue.date}</span>
                                                        </div>
                                                        <div className={`time pr-[10px] mr-[10px] border-blue relative ${Style.pipes}`}>
                                                            <span className={`text-[14px] font-[700] uppercase leading-[16px] ${inter.className}`}>{cardVallue.time}</span>
                                                        </div>
                                                        {
                                                            cardVallue.lavel &&  <div className={`lavel relative ${Style.pipes}`}>
                                                                        <span className={`text-[14px] font-[700] uppercase leading-[16px] ${inter.className}`}>{cardVallue.lavel}</span>
                                                                    </div>
                                                        }
                                                      
                                                    </div>
                                                    <h4 className='mb-[15px]'>{cardVallue.mainTitle}</h4>
                                                    <p className='mb-[24px]'>{cardVallue.description}</p>
                                                    {
                                                        cardVallue.speaker ? 
                                                        <div className="autherWrap">
                                                            <p className='small_font xl-up:text-[16px] xl:text-[16px] !font-[600]'>Featured Speaker: <span>{cardVallue.authorName}</span></p>
                                                        </div> :  <div className="btn mt-[44px] xxl:mt-[30px]">
                                                                        <ArrowBtn text='reserve your spot' link='/' />
                                                                    </div>
                                                    }
                                                </div>
                                            </div>
                                         )) } 
                                    </div>
                            {/* //     )})
                            // } */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </section>
  )
}
