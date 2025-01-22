import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import ArrowBtn from '../../components/button/Black_arrowBtn';
import Style from './scheduleTab.module.css';
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
            cardData: [
                {
                    date: "Mon–Weds, April 22-24",
                    mainTitle: "Meet us at booth #305",
                    image: "/MRC-Barcelona-2024-Booth-IMG.jpg",
                    description: "Our team will be on the floor ready to chat! Pre-book a demo meeting for a firsthand look at how our solutions can revolutionize digital risk decisioning and fraud ops at your company, and claim your €150 value-incentive.",
                    btn: "Book time with us"
                },
                {
                    date: "April 22",
                    time: "7:30 - 9:30 p.m.",
                    lavel: "Purobeach Barcelona",
                    image: "/MRC-Barcelona-2024-Networking-Dinner-IMG.jpg",
                    mainTitle: "Networking Tapas & Drinks reception",
                    description: "Relax and connect with fellow conference attendees at our networking dinner reception during MRC Barcelona. Enjoy drinks and tapas in a laid-back setting, making the most of your conference experience.",
                    btn: "Save your spot"
                },
                {
                    date: "April 22",
                    time: "2:00 - 5:00 p.m.",
                    lavel: "Room 120/121",
                    image: "/MRC-Barcelona-2024-Fraud-201-Workshop-IMG.jpg",
                    mainTitle: "Fraud 201 Workshop",
                    description: "Join Brittany Allen as she presents the latest information and best practices on topics covering fraud trends, fraud lifecycle and risk management, in this 3-hour workshop.",
                    btn: "Register your interest"
                }
            ],
        }
    ]

  return (
      <section className={`${Style.scheduleTab} bg-white padding-medium-top tab-with-logo`}>
        <div className="container">
            <h3>Sift at MRC Barcelona agenda</h3>
            <div className="tabsWrap mt-[36px] lg:mt-[10px]">
                <div className="links">
                    <div className={`text-center mx-auto sidesBorder`} data-aos="fade">
                        <div className={`nav-wrap relative ${Style.tab_nav_wrap} LinkBorder laptop-mid:text-left xl-up:w-full xl:whitespace-nowrap xl:overflow-x-scroll sidesBorder pt-[20px] lg:pt-[0] z-10 hide`} ref={scrollContainerRef}>
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
                                                <Link href='/events/mrc-barcelona-2024/register' className='emptyLink'>.</Link>
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
                                                                        <ArrowBtn text={cardVallue.btn} link='/events/mrc-barcelona-2024/register' />
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
