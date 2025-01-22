'use client';
import React from 'react';
import Image from 'next/image';
import FullWidthIntro from './FullWidthIntro';
import Btn_Transparent from './button/Button_Transparent';
import Style from './../styles/about/leadershipCards.module.css';
import { Inter } from 'next/font/google';
const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
});

import { useState, useRef, useEffect } from 'react';

export default function TimelineSlider() {
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
	const intro = {
		PreNormalText: 'History Headline',
		blurb:
			'AI-Powered Fraud Decisioning..',
		cta: 'Optional CTA',
		bg: 'black',
		link: '/',
	};
	const tabData = [
		{
			date: '2015',
			highLightedText: '2015 AI-Powered Fraud Decisioning..',
			blurb: ' 2015 AI-Powered Fraud Decisioning..',
			image: '/IntroWithTab/sift-tab.png',
		},
		{
			date: '2018',
			highLightedText: ' 2018 AI-Powered Fraud Decisioning..',
			blurb: ' 2018 AI-Powered Fraud Decisioning..',
			image: '/IntroWithTab/tab-image.png',
		},
		{
			date: '2020',
			highLightedText: ' 2020 AI-Powered Fraud Decisioning..',
			blurb: ' 2020 AI-Powered Fraud Decisioning..',
			image: '/IntroWithTab/sift-tab.png',
		},
		{
			date: '2022',
			highLightedText: 'AI-Powered Fraud Decisioning..',
			blurb: 'AI-Powered Fraud Decisioning..',
			image: '/IntroWithTab/sift-tab.png',
		},
	];
	return (
		<section
			className="TimelineSlider bg-grad-second-black-to-blue pb-0"
			id="our-history"
		>
			<div className="container">
				<div className="wrap flex desktop:flex-wrap lg:flex-wrap">
					<div className="col-two w-1/2 pr-[20px] desktop:w-full lg:w-full md:pr-0">
						<div className="relative intro mb-[45px] xl:mb-[32px] items-end w-full z-10 laptop-landscape:mb-[40px]">
							<div
								className={`w-full mb-[25px] xl:mb-[24px] laptop-landscape:mb-[13px] `}
							>
								<h2 className="text-white">History Headline</h2>
							</div>
							<p
								className={`small_font pr-[60px] md:p-0 laptop-landscape:pr-[98px] text-white`}
							>
								AI-Powered Fraud Decisioning..
							</p>
							<div className="mt-[38px] md:mt-[24px] laptop-landscape:mt-[16px]">
								<Btn_Transparent text="Optional CTA" link="/" />
							</div>
						</div>
						<div className={`tabWrap flex desktop:flex-wrap lg:flex-wrap`}>
							<div
								className={`${
									winWidth > 1279 ? ' ' : Style.tab_nav_wrap
								} desktop:mb-[32px] lg:mb-[24px] pt-[10px]  ${
									winWidth > 1279
										? 'col-two w-[40%]  lg:w-full lg:flex desktop-laptop:w-fit'
										: ' w-full relative xl-up:flex xl-up:w-full xl:whitespace-nowrap xl:overflow-x-scroll sidesBorder z-10'
								}`}
								ref={scrollContainerRef}
							>
								{tabData.map((date, index) => {
									return (
										<>
											{winWidth > 1279 ? (
												<div
													key={index}
													className={`date lg:w-[25%] lg:p-[10px] lg:text-center w-fit py-[10px] px-[26px] border-[3px] rounded-[60px] cursor-pointer text-white hover:text-pink transition-all delay-[0.3s] ${
														index === activeTab
															? 'border-pink'
															: 'border-transparent'
													}  ${index === activeTab ? 'active-link' : ''}`}
													onClick={() => handleTabClick(index)}
												>
													<h4 className="">{date.date}</h4>
												</div>
											) : (
												<div
													className={`laptop-landscape:text-[12px] desktop:w-[35%] tablet:w-[28%] text-center tab-nav text-white hover:text-pink  transition-all delay-[0.3s] pt-[10px]  pl-[21px] pb-[20px] uppercase tracking-[2px] font-[700]  relative inline-block z-10 w-1/2 md:w-full sm:px-0 sm:max-w-[130px] phablet:max-w-[200px] xl-up:hover:opacity-[1] xl-up:opacity-[0.4] cursor-pointer text-[16px] wide-screen:text-[24px] ${
														index === activeTab ? Style.activeLink : ''
													}  ${activeTab === 0 ? Style.tabNav : ''} ${
														Style.tabNavLink
													} ${index === activeTab ? 'active-link' : ''}`}
													key={index}
													onClick={() => handleTabClick(index)}
												>
													<span>
													  {date.date}
													</span>
												</div>
											)}
										</>
									);
								})}
							</div>
							<div className="col-two w-[60%] lg:w-full pl-[23px] desktop:pl-0 lg:pl-[0] desktop:w-full">
								<div className="wrap">
									<h2 className="text-white mb-[24px] xl-up:mb-[56px] laptop-landscape:my-[16px!important] lg:mb-[16px] h1">
										{tabData[activeTab].date}
									</h2>
									<span
										className={`text-oceanGreen mb-[16px] inline-block text-[14px] uppercase font-[700] ${inter.className}`}
									>
										{tabData[activeTab].highLightedText}
									</span>
									<p className="text-white xxl:text-[16px]">
										{tabData[activeTab].blurb}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-two w-1/2 lg:w-full desktop:w-full sm:max-w-[500px] sm:mx-auto desktop:mt-[24px] lg:mt-[24px]">
						<div
							className={`imgWrap w-auto h-full desktop-laptop:h-[654px] laptop-landscape:h-[560px!important] wide-screen:h-[830px] xxl-up:h-[700px] rounded-[16px] overflow-hidden sm:h-[320px] phablet:h-[420px] tablet:h-[500px] desktop:h-[550px]`}
						>
							<Image
								width={1000}
								height={1000}
								className="w-full h-full object-cover"
								src={tabData[activeTab].image}
								alt="Tab Image"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
