'use client';
import React from 'react';
import Image from 'next/image';
import DynamicButton from '../global-components/Buttons';
import Style from '../../styles/about/leadershipCards.module.css';
import { Inter } from 'next/font/google';
const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
});

import { useState, useRef, useEffect } from 'react';

export default function TimelineSlider(props) {
	let data = props.items;
	const [activeTab, setActiveTab] = useState(0);
	const [winWidth, isWinWidth] = useState(0);
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

	useEffect(() => {
		const handleResize = () => {
			isWinWidth(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	const handleTabClick = (index) => {
		setActiveTab(index);
	};
	return (
		<section id={data.id ? data.id : ''} className={`TimelineSlider bg-grad-second-black-to-blue pb-0 ${data.background} ${data.padding} ${data.classes}`} >
			{
				data?.background == 'custom' && (
					<div className="custom-bg-img absolute left-0 top-[0px] w-full h-full ">
						{data?.backgroundImage?.sourceUrl && <Image className="w-full h-full object-cover" src={data?.backgroundImage?.sourceUrl} alt={data?.backgroundImage?.altText} width="1200" height="1200" />}
					</div>
				)
			}
			<div className="container">
				<div className="wrap flex desktop:flex-wrap lg:flex-wrap">
					<div className="col-two w-1/2 pr-[20px] desktop:w-full lg:w-full md:pr-0">
						<div className="relative intro mb-[45px] xl:mb-[32px] items-end w-full z-10 laptop-landscape:mb-[40px]">
							<div className={`w-full mb-[25px] xl:mb-[24px] laptop-landscape:mb-[13px] `}>
								<h2 className="text-white">{data?.heading}</h2>
							</div>
							{data?.body && <div className={`small_font pr-[60px] md:p-0 laptop-landscape:pr-[98px] text-white`} dangerouslySetInnerHTML={{ __html: data?.body }}></div>}
							<div className="mt-[38px] md:mt-[24px] laptop-landscape:mt-[16px]">
								<DynamicButton cta={data?.buttons} />
							</div>
						</div>
						<div className={`tabWrap flex desktop:flex-wrap lg:flex-wrap`}>
							<div className={`${winWidth > 1279 ? ' ' : Style.tab_nav_wrap
								} desktop:mb-[32px] lg:mb-[24px] pt-[10px]  ${winWidth > 1279
									? 'col-two w-[40%]  lg:w-full lg:flex desktop-laptop:w-fit'
									: ' w-full relative xl-up:flex xl-up:w-full xl:whitespace-nowrap xl:overflow-x-scroll sidesBorder z-10'
								}`}
								ref={scrollContainerRef}
							>
								{data?.slides && data?.slides.map((date, index) => {
									return (
										<React.Fragment key={index}>
											{winWidth > 1279 ? (
												<div className={`date lg:w-[25%] lg:p-[10px] lg:text-center w-fit py-[10px] px-[26px] border-[3px] rounded-[60px] cursor-pointer text-white hover:text-pink transition-all delay-[0.3s] ${index === activeTab
														? 'border-pink'
														: 'border-transparent'
														}  ${index === activeTab ? 'active-link' : ''}`}
													onClick={() => handleTabClick(index)}
												>
													<h4>{date?.year}</h4>
												</div>
											) : (
												<div
													className={`laptop-landscape:text-[12px] desktop:w-[35%] tablet:w-[28%] text-center tab-nav text-white hover:text-pink  transition-all delay-[0.3s] pt-[10px]  pl-[21px] pb-[20px] uppercase tracking-[2px] font-[700]  relative inline-block z-10 w-1/2 md:w-full sm:px-0 sm:max-w-[130px] phablet:max-w-[200px] xl-up:hover:opacity-[1] xl-up:opacity-[0.4] cursor-pointer text-[16px] wide-screen:text-[24px] ${index === activeTab ? Style.activeLink : ''
														}  ${activeTab === 0 ? Style.tabNav : ''} ${Style.tabNavLink
														} ${index === activeTab ? 'active-link' : ''}`}
													key={index}
													onClick={() => handleTabClick(index)}
												>
													<span>
														{date?.year}
													</span>
												</div>
											)}
										</React.Fragment>
									);
								})}
							</div>
							<div className="col-two w-[60%] lg:w-full pl-[23px] desktop:pl-0 lg:pl-[0] desktop:w-full">
								{data?.slides && data?.slides.map((data, index) => {
									return (
										<div key={index}>
											{index === activeTab && (
												<div className="wrap">
													<h2 className="text-white mb-[24px] xl-up:mb-[56px] laptop-landscape:my-[16px!important] lg:mb-[16px] h1">
														{data?.year}
													</h2>
													<span className={`text-oceanGreen mb-[16px] inline-block text-[14px] uppercase font-[700] ${inter.className}`}>
														{data?.slideTitleTitle}
													</span>
													<div className="text-white xxl:text-[16px]" dangerouslySetInnerHTML={{ __html: data?.bodyWithoutEditor }}></div>
												</div>
											)}
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div className="col-two w-1/2 lg:w-full desktop:w-full sm:max-w-[500px] sm:mx-auto desktop:mt-[24px] lg:mt-[24px]">
						<div className={`imgWrap w-auto h-full desktop-laptop:h-[654px] laptop-landscape:h-[560px!important] wide-screen:h-[830px] xxl-up:h-[700px] rounded-[16px] overflow-hidden sm:h-[320px] phablet:h-[420px] tablet:h-[500px] desktop:h-[550px]`}>
							{data?.slides[0]?.image?.sourceUrl && (
							<>
								{data?.slides && data?.slides.map((data, index) => {
									return (
										<div key={index}>
											{index === activeTab && (
												<Image
													src={data?.image?.sourceUrl}
													width={1000}
													height={1000}
													alt={data?.image?.altText}
													className="w-full h-full object-cover"
												/>
											)}
										</div>
									);
								})}
							</>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
