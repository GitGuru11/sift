import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import ArrowBtn from './button/Black_arrowBtn';
import FullWidthIntro from './FullWidthIntro';
import Style from '../styles/tabLocation/locationTab.module.css';
import { Inter } from 'next/font/google';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800']
})
export default function TabLocation() {
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
            title: "United states",
            cardData: [
                {
                    icon: "/tabLocation/unitedState.png",
                    title: "San Francisco",
                    address: "California, USA",
                    description: "3405 Piedmont Road NE Suite 110, San Francisco, CA 30305, USA",
                    number: "+353 190 146 54",
                    linkText: "View Map",
                },
                {
                    icon: "/tabLocation/unitedState.png",
                    title: "Salt Lake City",
                    address: "Utah, USA",
                    description: "3405 Piedmont Road NE Suite 110, San Francisco, CA 30305, USA",
                    number: "+353 190 146 54",
                    linkText: "View Map",
                },
                {
                    icon: "/tabLocation/unitedState.png",
                    title: "Seattle",
                    address: "Washington, USA",
                    description: "3405 Piedmont Road NE Suite 110, San Francisco, CA 30305, USA",
                    number: "+353 190 146 54",
                    linkText: "View Map",
                }
            ],
        },
        {
            id: "2",
            title: "EMEA",
            cardData: [
                {
                    icon: "/tabLocation/unitedState.png",
                    title: "San Francisco 2",
                    address: "California, USA",
                    description: "3405 Piedmont Road NE Suite 110, San Francisco, CA 30305, USA",
                    number: "+353 190 146 54",
                    linkText: "View Map",
                },
                {
                    icon: "/tabLocation/unitedState.png",
                    title: "Salt Lake City 2",
                    address: "Utah, USA",
                    description: "3405 Piedmont Road NE Suite 110, San Francisco, CA 30305, USA",
                    number: "+353 190 146 54",
                    linkText: "View Map",
                },
                {
                    icon: "/tabLocation/unitedState.png",
                    title: "Seattle 2",
                    address: "Washington, USA",
                    description: "3405 Piedmont Road NE Suite 110, San Francisco, CA 30305, USA",
                    number: "+353 190 146 54",
                    linkText: "View Map",
                }
            ],
        },
        {
            id: "3",
            title: "Asia Pacific",
            cardData: [
                {
                    icon: "/tabLocation/unitedState.png",
                    title: "San Francisco 3",
                    address: "California, USA",
                    description: "3405 Piedmont Road NE Suite 110, San Francisco, CA 30305, USA",
                    number: "+353 190 146 54",
                    linkText: "View Map",
                },
                {
                    icon: "/tabLocation/unitedState.png",
                    title: "Salt Lake City 3",
                    address: "Utah, USA",
                    description: "3405 Piedmont Road NE Suite 110, San Francisco, CA 30305, USA",
                    number: "+353 190 146 54",
                    linkText: "View Map",
                },
                {
                    icon: "/tabLocation/unitedState.png",
                    title: "Seattle 3",
                    address: "Washington, USA",
                    description: "3405 Piedmont Road NE Suite 110, San Francisco, CA 30305, USA",
                    number: "+353 190 146 54",
                    linkText: "View Map",
                }
            ],
        },
    ]
    const intro = {
		PreNormalText: 'Headline About Office Locations',
		bg: 'transparent',
		blurb:
			'AI-Powered Fraud Decisioning..',
	};

  return (
   <section className={`${Style.tabLocation} bg-skyblue tab-with-logo`}>
        <div className="container">
            <FullWidthIntro {...intro} />
            <div className="tabsWrap mt-[36px] md:mt-0">
                <div className="links">
                      <div className={`text-center mx-auto sidesBorder`} data-aos="fade">
                          <div className={`relative ${Style.tab_nav_wrap} nav-wrap LinkBorder xl:text-left xl-up:flex xl-up:w-full xl:whitespace-nowrap xl:overflow-x-scroll sidesBorder pt-[20px] md:pt-0 z-10`} ref={scrollContainerRef}>
                            {
                                tabs.map((item, index) => {
                                    return (
                                        <div
                                            className={`eyebrow-text text-base desktop:text-xs xl-up:!text-[24px] wide-screen:text-2xl font-[600] tab-nav text-black xl:text-[#677196] pt-[10px]  pl-[21px] pb-[20px] capatalization tracking-[2px] xl:hover:text-black relative inline-block z-10 w-full xl:w-fit xl:px-[20px] xl-up:hover:opacity-[1] xl-up:opacity-[0.4] "  xl-up:w-1/4 cursor-pointer ${
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
                        <div className="tabContent relative mt-[43px] md:mt-[20px]">
                        {/* {
                            tabs.map((item, index) => {
                                return ( */}
                                    <div  className="mainTabContent flex flex-wrap w-[calc(100%+30px)] ml-[-15px]">
                                        {tabs[activeTab].cardData.map((cardVallue, i) => (     
                                            <div key={i} className={`group bg-white item mb-[24px] md:last:mb-[0] w-[calc(33.33%-30px)] sm:w-full mx-[14px] phablet:w-[calc(50%-30px)] px-[40px] pt-[38px] pb-[33px] xl:p-[20px] relative items-center rounded-[16px] overflow-hidden outline outline-[2px] outline-black  transition-all duration-[0.3s] shadow-none ${!cardVallue.speaker && " hover:outline-[3px]  hover:shadow-eventCards-shadow"}`}>
                                                <Link href='#' className='emptyLink'>.</Link>
                                                
                                                <div className={`imgWap `}>
                                                    <Image  src={cardVallue.icon} className='md:w-[40px]' alt='card Image' width={54} height={40} quality={25}/>
                                                </div>
                                                <div className={`contentWrap text-left mt-[24px] md:mt-[14px]`}>
                                                    <h4 className='mb-[16px] md:mb-[10px]'>{cardVallue.title}</h4>
                                                    <p className='small_font xl:!text-[14px] laptop-landscape:text-[14px]'>{cardVallue.address}</p>
                                                    <p className='my-[24px] md:my-[10px] small_font xl:!text-[14px] laptop-landscape:text-[14px]'>{cardVallue.description}</p>
                                                    <Link href={`tel:${cardVallue.number}`} className='small_font xl:!text-[14px] laptop-landscape:text-[14px]'>{cardVallue.number}</Link>
                                                    <div className="btn mt-[32px] xxl:mt-[30px] md:!mt-[14px]">
                                                    <ArrowBtn text={cardVallue.linkText} link='/' />
                                                </div>
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
