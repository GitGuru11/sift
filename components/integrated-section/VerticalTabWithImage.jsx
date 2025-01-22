import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import DynamicButton from '../global-components/Buttons';
import Style from '../../styles/schedulTab/scheduleTab.module.css';

export default function VerticalTabWithImage(props) {
    let data = props.items;
    const [active, setActive] = useState(0)
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


    const line = "after:content-[''] after:absolute after:w-[calc(100%+4px)] after:h-[26px] lg:after:bg-transparent after:bg-transparent after:border-b-[3px]  after:border-black after:opacity-[0.4] after:bottom-0  after:-left-[4px] after:duration-300 lg:z-10"
    const curveLine = "after:content-[''] after:absolute after:w-[calc(100%+26px)] after:h-[26px] after:!left-[-26px]  lg:after:bg-transparent after:bg-transparent after:border-b-[3px] after:border-l-[3px] after:rounded-bl-[24px] after:border-pink after:opacity-[0.4] after:bottom-0  after:duration-300 lg:z-10"
    const lineTwo = "after:content-[''] after:absolute after:w-[calc(100%+4px)] after:h-full   after:border-t-[3px]  after:border-black after:opacity-[0.4] after:top-[-3px]  after:left-[0px] after:z-10"
    return (
        <section id={data.id ? data.id : ''}  className={`vertical-tab ${Style.scheduleTab} relative ${data.background} ${data.padding} ${data.classes}`}>
            <div className="container">
                <div className="wrapper flex flex-wrap items-center w-full ">
                    <div className="col-left w-[43%] xl-up:ml-[-1px]  xl:w-[100%]  lg-up:overflow-hidden">
                        <div className='pl-[26px] xl:hidden lg:overflow-x-scroll lg:border-b-[3px] lg:border-lightGrey lg:mb-[20px]'>
                            {data && data?.tabs && data?.tabs.map((item, i) => {
                                return (
                                    <div key={i} className="nav-wrap mb-[28px] lg:mb-0  ">
                                        {item?.tabLabel && (<div className={`group pb-[7px] lg:text-center block relative last:mb-0 w-fit lg:inline-block lg:mr-[15px] cursor-pointer ${line} ${i == active ? `${curveLine}  w-full after:!w-[calc(100%+25px)] lg:after:!w-full after:bg-pink lg:after:bg-pink after:opacity-[1]` : ''}`} onClick={() => clickHandler(i)}>
                                            <span className={`font_small min-w-[246px] inline-block text-black uppercase tracking-[0.6px] opacity-[0.4] fontInter font-[700] duration-200 group-hover:text-black group-hover:opacity-[1] ${i == active ? ' text-pink opacity-[1]' : ''}`}>
                                                {item?.tabLabel}
                                            </span>
                                        </div>)}
                                        <div className={`accContent p-0 h-0 overflow-hidden  rounded-b-[16px] transition-[max-height] ease-in-out duration-300 bg-lightGray ${i == active ? 'h-full max-h-[600px] p-[24px] xl-up:pt-[22px] xl-up:pb-[32px]' : 'h-0 p-0'}`}>
                                            {item?.tabContent?.bodyWithoutEditor &&
                                                (<div className='xl-up:text-[16px]' dangerouslySetInnerHTML={{ __html: item?.tabContent?.bodyWithoutEditor }}></div>)}
                                            <div className="wrapper  mt-[21px] mb-[14px] flex flex-wrap  w-full xl-up:pr-[16px]">
                                                {item?.tabContent?.columns && item?.tabContent?.columns.map((col, i) => {
                                                    return (<div className="col-four w-[25%] m" key={i}>
                                                        <div className="icon-wrap w-full max-w-[45px] mb-[11px] xl-up:ml-[4px]">
                                                            {col?.icon && col?.icon?.sourceUrl && <Image src={col?.icon?.sourceUrl}
                                                                alt={col?.icon?.altText}
                                                                width={50} height={50} />}
                                                        </div>
                                                        {col?.title && <span className='text-[14px] inline-block fontInter tracking-[0.6px] leading-[1.3]' dangerouslySetInnerHTML={{ __html: col?.title }}></span>}
                                                    </div>)
                                                })}
                                            </div>
                                            {item?.tabContent?.bodyWithoutEditor &&
                                                (<div className={`${Style.list_wrap}`} dangerouslySetInnerHTML={{ __html: item?.tabContent?.body }}></div>)}
                                            <div className="btn-wrap mt-[14px]">
                                                <DynamicButton cta={item?.tabContent?.buttons} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Code for samll devices*/}

                        <div className={`relative xl-up:hidden ${Style.scrollBar}  w-full xl:whitespace-nowrap xl:overflow-x-scroll sidesBorder pt-[20px] z-10`} ref={scrollContainerRef}>
                            {data && data?.tabs && data?.tabs.map((item, index) => {
                                    return (
                                        <div key={index} className={`eyebrow-text text-base desktop:text-xs desktop:min-w-[229px] desktop:text-center  wide-screen:text-2xl font-bold tab-nav text-black xl:text-[#677196] pt-[10px]  pl-[21px] pb-[20px] uppercase tracking-[2px] xl:hover:text-black relative inline-block  z-10 w-full xl:w-fit xl:px-[20px] before:!border-b-[#000] before:!opacity-[0.6] cursor-pointer ${
                                                index === active ? Style.activeLink : ''
                                            }  ${active === 0 ? Style.tabNav : ''} ${
                                                Style.tabNavLink
                                            } ${index === active ? 'active-link' : ''}`}
                                            onClick={() => clickHandler(index)}
                                        >
                                            <span className={`font_small inline-block text-black uppercase tracking-[0.6px] opacity-[0.4] fontInter font-[700] hover:text-pink hover:opacity-[1] ${index == active ? ' text-pink opacity-[1]' : ''}`}>
                                                {item?.tabLabel}
                                            </span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={`accContent relative  xl-up:hidden  rounded-b-[16px] transition-all ease-in-out delay-150 bg-lightGray 'h-[auto] p-[24px] xl-up:pt-[22px]`}>
                            {data?.tabs[active]?.tabContent?.bodyWithoutEditor && <p className='xl-up:text-[16px]' dangerouslySetInnerHTML={{ __html: data?.tabs[active]?.tabContent?.bodyWithoutEditor}}></p>}
                            <div className="wrapper  mt-[21px] mb-[14px] flex flex-wrap  w-full">
                            {data?.tabs[active]?.tabContent?.columns && data?.tabs[active]?.tabContent?.columns.map((col, i) => {
                                return(<div key={i} className="col-four w-[25%] m">
                                    <div className="icon-wrap w-full max-w-[45px] mb-[12px]">
                                        {col?.icon && col?.icon?.sourceUrl && <Image src={col?.icon?.sourceUrl}
										                        alt={col?.icon?.altText}  width={50} height={50} />}
                                    </div>
                                    {col?.title && <span className='text-[14px] inline-block fontInter tracking-[0.6px] leading-[1.3]' dangerouslySetInnerHTML={{ __html: col?.title}}></span>}
                                </div>)
                            })}
                            </div>
                            {data?.tabs[active]?.tabContent?.body && 
                            (<div dangerouslySetInnerHTML={{ __html: data?.tabs[active]?.tabContent?.body}}></div>)}
                            <div className="btn-wrap mt-[24px]">
                                <DynamicButton cta={data?.tabs[active]?.tabContent?.buttons}/>
                            </div>
                        </div>
                    </div>

                    <div className="col-right xl:mt-[20px] w-[calc(57%-20px)]  xl:w-[100%]  ml-[20px] lg:ml-0">
                        {data?.tabs[active]?.image && 
                            <div className="img-wrap w-full max-w-[605px] wide-screen:max-w-[740px] xl:max-w-[500px] ml-auto xl:mx-auto ">
                                {data?.tabs[active]?.image?.sourceUrl && <Image src={data?.tabs[active]?.image?.sourceUrl} alt={data?.tabs[active]?.image?.altText}  width={800} height={800} quality={75} />}
                            </div>}
                    </div>
                </div>
            </div>
        </section>
    )
}

