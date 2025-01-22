import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import FullWidthIntro from './FullWidthIntro'
import Arrow_btn from './button/Black_arrowBtn'
import Style from '../styles/schedulTab/scheduleTab.module.css';

const tabData = [
    {
        tabNav: 'Global Data Network',
        tabContent: '/verticalTab/laptop-image.png',
        accordionData: {
            blurb: '1AI-Powered Fraud Decisioning..',
            cta: 'LEARN MORE',
            ctaLink:'/'
        }
    },
    {
        tabNav: 'AI and Machine Learning',
        tabContent: '/computer.png',
        accordionData: {
            blurb: '2AI-Powered Fraud Decisioning..',
            cta: 'LEARN MORE',
            ctaLink:'/'
        }
    },
    {
        tabNav: 'Analytics',
        tabContent: '/platform-tab.png',
        accordionData: {
            blurb: '4AI-Powered Fraud Decisioning..',
            cta: 'LEARN MORE',
            ctaLink:'/'
        }
    },
    {
        tabNav: 'Sifters Community',
        tabContent: '/computer.png',
        accordionData: {
            blurb: 'AI-Powered Fraud Decisioning..',
            cta: 'LEARN MORE',
            ctaLink:'/'
        }
    }
]

const intro = {
    HighLightedText: 'Explore',
    PostNormalText: 'the Sift Platform',
    blurb:'AI-Powered Fraud Decisioning..',
    bg: 'white',
    pinkCta: 'OPTIONAL',
    link:'/'
}

export default function VerticalTab() {

    const [active, setActive] = useState(3)
    // const [width, SetWidth] = useState(window.innerWidth)
    
    function clickHandler(index) {
        setActive(index)
    }
    //desktop down 
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
    }, [active]);
    
    useEffect(() => {
        
    })

    
    

    const line = "after:content-[''] after:absolute after:w-[calc(100%+4px)] after:h-[26px] lg:after:bg-transparent after:bg-transparent after:border-b-[3px]  after:border-black after:opacity-[0.4] after:bottom-0  after:-left-[4px] after:duration-300 lg:z-10"
    const curveLine = "after:content-[''] after:absolute after:w-[calc(100%+26px)] after:h-[26px] after:!left-[-26px]  lg:after:bg-transparent after:bg-transparent after:border-b-[3px] after:border-l-[3px] after:rounded-bl-[24px] after:border-pink after:opacity-[0.4] after:bottom-0  after:duration-300 lg:z-10"
    const lineTwo = "after:content-[''] after:absolute after:w-[calc(100%+4px)] after:h-full   after:border-t-[3px]  after:border-black after:opacity-[0.4] after:top-[-3px]  after:left-[0px] after:z-10"
    return (
        <section className={`vertical-tab ${Style.scheduleTab} relative bg-white`}>
            <div className="container">
                <FullWidthIntro {...intro} />
                <div className="wrapper flex flex-wrap items-center w-full ">
                    <div className="col-left w-[43%] xl-up:ml-[-1px]  xl:w-[100%]  lg-up:overflow-hidden">
                        <div className='pl-[26px] xl:hidden lg:overflow-x-scroll lg:border-b-[3px] lg:border-lightGrey lg:mb-[20px]'>
                            {tabData.map((item, i) => {
                                return (
                                    <div key={i} className="nav-wrap mb-[28px] lg:mb-0  ">
                                        <div className={`group pb-[7px] lg:text-center block relative last:mb-0 w-fit lg:inline-block lg:mr-[15px] cursor-pointer ${line} ${i == active ? `${curveLine}  w-full after:!w-[calc(100%+25px)] lg:after:!w-full after:bg-pink lg:after:bg-pink after:opacity-[1]` : ''}`} onClick={() => clickHandler(i)}>
                                            <span className={`font_small min-w-[246px] inline-block text-black uppercase tracking-[0.6px] opacity-[0.4] fontInter font-[700] duration-200 group-hover:text-black group-hover:opacity-[1] ${i == active ? ' text-pink opacity-[1]' : ''}`}>{item.tabNav}</span>
                                        </div>
                                        <div className={`accContent p-0 h-0 overflow-hidden  rounded-b-[16px] transition-[max-height] ease-in-out duration-300 bg-lightGray ${i == active ? 'h-full max-h-[600px] p-[24px] xl-up:pt-[22px] xl-up:pb-[32px]' : 'h-0 p-0'}`}>
                                            <p className='xl-up:text-[16px]'>{item.accordionData.blurb}</p>
                                            <div className="wrapper  mt-[21px] mb-[14px] flex flex-wrap  w-full xl-up:pr-[16px]">
                                                <div className="col-four w-[25%] m">
                                                    <div className="icon-wrap w-full max-w-[45px] mb-[11px] xl-up:ml-[4px]">
                                                        <Image src="/verticalTab/PSPs.png" alt="psp" width={50} height={50} />
                                                    </div>
                                                    <span className='text-[14px] inline-block fontInter tracking-[0.6px] leading-[1.3]'>AI-Powered Fraud Decisioning..</span>

                                                </div>
                                                <div className="col-four w-[25%]">
                                                    <div className="icon-wrap w-full max-w-[45px] mb-[12px]">
                                                        <Image src="/verticalTab/PSPs.png" alt="psp" width={50} height={50} />
                                                    </div>
                                                    <span className='text-[14px] inline-block fontInter tracking-[0.6px] leading-[1.3]'>AI-Powered Fraud Decisioning..</span>
                                                </div>
                                                <div className="col-four w-[25%]">
                                                    <div className="icon-wrap w-full max-w-[45px]  mb-[12px]">
                                                        <Image src="/verticalTab/PSPs.png" alt="psp" width={50} height={50} />
                                                    </div>
                                                    <span className='text-[14px] inline-block fontInter tracking-[0.6px] leading-[1.3]'>AI-Powered Fraud Decisioning..</span>
                                                </div>
                                                <div className="col-four w-[25%]">
                                                    <div className="icon-wrap w-full max-w-[45px]  mb-[12px]">
                                                        <Image src="/verticalTab/PSPs.png" alt="psp" width={50} height={50} />
                                                    </div>
                                                    <span className='text-[14px] inline-block fontInter tracking-[0.6px] leading-[1.3]'>AI-Powered Fraud Decisioning..</span>
                                                </div>
                                            </div>
                                            <ul className='pl-[20px] list-disc'>
                                                <li className='wide-screen:mb-[5px]'><span className='text-[14px] wide-screen:text-[18px]  inline-block fontInter tracking-[0.6px] leading-[1]'>AI-Powered Fraud Decisioning..</span></li>
                                                <li className='wide-screen:mb-[5px]'><span className='text-[14px] wide-screen:text-[18px]  inline-block fontInter tracking-[0.6px] leading-[1]'>AI-Powered Fraud Decisioning..</span></li>
                                                <li className='wide-screen:mb-[5px]'><span className='text-[14px] wide-screen:text-[18px]  inline-block fontInter tracking-[0.6px] leading-[1]'>AI-Powered Fraud Decisioning..</span></li>
                                            </ul>
                                            <div className="btn-wrap mt-[14px]">
                                            <Arrow_btn
                                                text={item.accordionData.cta}
                                                link={item.accordionData.ctaLink} 
                                                textColor='black'
                                            />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={`relative xl-up:hidden ${Style.scrollBar}  w-full xl:whitespace-nowrap xl:overflow-x-scroll sidesBorder pt-[20px] z-10`} ref={scrollContainerRef}>
                            {
                                tabData.map((item, index) => {
                                    return (
                                        <div
                                            className={`eyebrow-text text-base desktop:text-xs desktop:min-w-[229px] desktop:text-center  wide-screen:text-2xl font-bold tab-nav text-black xl:text-[#677196] pt-[10px]  pl-[21px] pb-[20px] uppercase tracking-[2px] xl:hover:text-black relative inline-block  z-10 w-full xl:w-fit xl:px-[20px] before:!border-b-[#000] before:!opacity-[0.6] cursor-pointer ${
                                                index === active ? Style.activeLink : ''
                                            }  ${active === 0 ? Style.tabNav : ''} ${
                                                Style.tabNavLink
                                            } ${index === active ? 'active-link' : ''}`}
                                            key={index}
                                            onClick={() => clickHandler(index)}
                                        >
                                             <span className={`font_small inline-block text-black uppercase tracking-[0.6px] opacity-[0.4] fontInter font-[700] hover:text-pink hover:opacity-[1] ${index == active ? ' text-pink opacity-[1]' : ''}`}>{item.tabNav}</span>
                                           
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={`accContent relative  xl-up:hidden  rounded-b-[16px] transition-all ease-in-out delay-150 bg-lightGray 'h-[auto] p-[24px] xl-up:pt-[22px]`}>
                            <p className='xl-up:text-[16px]'>{tabData[active].accordionData.blurb}</p>
                            <div className="wrapper  mt-[21px] mb-[14px] flex flex-wrap  w-full">
                                <div className="col-four w-[25%] m">
                                    <div className="icon-wrap w-full max-w-[45px] mb-[12px]">
                                        <Image src="/verticalTab/PSPs.png" alt="psp" width={50} height={50} />
                                    </div>
                                    <span className='text-[14px] inline-block fontInter tracking-[0.6px] leading-[1.3]'>AI-Powered Fraud Decisioning..</span>

                                </div>
                                <div className="col-four w-[25%]">
                                    <div className="icon-wrap w-full max-w-[45px] mb-[12px]">
                                        <Image src="/verticalTab/PSPs.png" alt="psp" width={50} height={50} />
                                    </div>
                                    <span className='text-[14px] inline-block fontInter tracking-[0.6px] leading-[1.3]'>AI-Powered Fraud Decisioning..</span>
                                </div>
                                <div className="col-four w-[25%]">
                                    <div className="icon-wrap w-full max-w-[45px]  mb-[12px]">
                                        <Image src="/verticalTab/PSPs.png" alt="psp" width={50} height={50} />
                                    </div>
                                    <span className='text-[14px] inline-block fontInter tracking-[0.6px] leading-[1.3]'>AI-Powered Fraud Decisioning..</span>
                                </div>
                                <div className="col-four w-[25%]">
                                    <div className="icon-wrap w-full max-w-[45px]  mb-[12px]">
                                        <Image src="/verticalTab/PSPs.png" alt="psp" width={50} height={50} />
                                    </div>
                                    <span className='text-[14px] inline-block fontInter tracking-[0.6px] leading-[1.3]'>AI-Powered Fraud Decisioning..</span>
                                </div>
                            </div>
                            <ul className='pl-[20px] list-disc'>
                                <li><span className='text-[14px] inline-block fontInter tracking-[0.6px] leading-[1]'>AI-Powered Fraud Decisioning..</span></li>
                                <li><span className='text-[14px] inline-block fontInter tracking-[0.6px] leading-[1]'>AI-Powered Fraud Decisioning..</span></li>
                                <li><span className='text-[14px] inline-block fontInter tracking-[0.6px] leading-[1]'>AI-Powered Fraud Decisioning..</span></li>
                            </ul>
                            <div className="btn-wrap mt-[24px]">
                            <Arrow_btn
										text={tabData[active].accordionData.cta}
										link={tabData[active].accordionData.ctaLink}
										textColor='black'
									/>
                            </div>
                        </div>
                      
                    </div>
                    <div className="col-right w-[calc(57%-20px)]  xl:w-[100%]  ml-[20px] lg:ml-0">
                        <div className="img-wrap w-full max-w-[605px] wide-screen:max-w-[740px] xl:max-w-[500px] ml-auto xl:mx-auto xl-up:mt-[-91px] xl-up:mr-[-21px]">
                            <Image src={tabData[active].tabContent} alt='contentImage' width={800} height={800} quality={75} />
                        </div>
                    </div>
                </div>
            </div>
      
        </section>
    )
}

