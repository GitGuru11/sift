'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Btn_Transparent from './button/Button_Transparent';
import styles from '../styles/VerticalTabWithContent.module.css';
import FullWidthIntro from './FullWidthIntro';
const Data = [
	{
		title: `Take the time you need`,
		src: '/',
		img: '/computer.png',
		content: {
			title: 'Take the time you need',
			blurb:
				'AI-Powered Fraud Decisioning..',
			links: [
				{
					link: 'AI-Powered Fraud Decisioning..',
				},
				{
					link: 'AI-Powered Fraud Decisioning..',
				},
				{
					link: 'AI-Powered Fraud Decisioning..',
				},
			],
		},
	},
	{
		title: 'Financial well-being',
		src: '/',
		img: '/computer.png',
		content: {
			title: 'Financial well-being',
			blurb:
				'AI-Powered Fraud Decisioning..',
			links: [
				{
					link: 'AI-Powered Fraud Decisioning..',
				},
				{
					link: 'AI-Powered Fraud Decisioning..',
				},
				{
					link: 'AI-Powered Fraud Decisioning..',
				},
			],
			cta: 'Learn more',
		},
	},
	{
		title: 'Physical well-being',
		src: '/',
		img: '/computer.png',
		content: {
			title: 'Physical well-being',
			blurb:
				'AI-Powered Fraud Decisioning..',
			links: [
				{
					link: 'AI-Powered Fraud Decisioning..',
				},
				{
					link: 'AI-Powered Fraud Decisioning..',
				},
				{
					link: 'AI-Powered Fraud Decisioning..',
				},
			],
			cta: 'Learn more',
		},
	},
	{
		title: 'Empowering your success',
		src: '/',
		img: '/computer.png',
		content: {
			title: 'Empowering your success',
			blurb:
				'AI-Powered Fraud Decisioning..',
			links: [
				{
					link: 'AI-Powered Fraud Decisioning..',
				},
				{
					link: 'AI-Powered Fraud Decisioning..',
				},
				{
					link: 'AI-Powered Fraud Decisioning..',
				},
			],
		},
	},
	{
		title: 'Benefit five',
		src: '/',
		img: '/computer.png',
		content: {
			title: 'Benefit five',
			blurb:
				'AI-Powered Fraud Decisioning..',
			links: [
				{
					link: 'AI-Powered Fraud Decisioning..',
				},
				{
					link: 'AI-Powered Fraud Decisioning..',
				},
				{
					link: 'AI-Powered Fraud Decisioning..',
				},
			],
			cta: 'Learn more',
		},
	},

];
export default function ImgTextTab() {
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
	const intro = {
		PreNormalText: 'Headline about our ',
		HighLightedText: ' benefits',
		PostNormalText: '',
		blurb:
			'AI-Powered Fraud Decisioning..',
	};

	return (
		<section
			className={`VerticalTabWithContent padding-top-m bg-black`}
			id="benefits"
		>
			<div className="container">
				<FullWidthIntro {...intro} />
				<div className="tab-wrap xl-up:flex xl-up:pt-[14px] relative">
					<div className="links xl-up:top-[22px] relative w-full max-w-[494px] xl:max-w-[100%]">
						<div
							className={`text-center xl-up:text-left mx-auto sidesBorder 
              				`}
						>
							<div
								className={`${
									styles.nav_wrap
								} nav-wrap relative  xl-up:w-full xl:whitespace-nowrap xl:overflow-x-scroll sidesBorder z-10 ${
									Data[activeTab].index !== ' ' ? 'LinkBorder ' : ''
								} `}
								ref={scrollContainerRef}
							>
								{Data.map((data, index) => (
									<div
										className={`eyebrow-text ${
											styles.tabs
										} text-base wide-screen:text-2xl font-bold tab-nav leading-tight text-white xl:text-[#677196] pt-[10px] xl:px-[20px] xs:px-[25px] pl-[24px] pb-[25px] xl:pb-[20px] xl-up:pb-[10px] xl-up:mb-[27px] uppercase tracking-wide xl:hover:text-white relative inline-block xl-up:block z-10 w-full xl:max-w-[fit-content] xl-up:hover:opacity-[1] xl-up:opacity-[0.4] "  cursor-pointer ${
											index === activeTab ? styles.activeLink : ''
										}  ${activeTab === 0 ? styles.tabNav : ''} ${
											styles.tabNavLink
										} ${index === activeTab ? 'active-link' : ''}`}
										key={index}
										onClick={() => handleTabClick(index)}
									>
										{data.title}
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="tab-content mt-[40px] relative z-10 laptop-landscape:mt-[5px] p-[40px] lg:px-[20px] lg:py-[30px] bg-blue rounded-3xl">
						<div className="content-wrap w-full text-white">
							<div className="icon-wrap mb-[16px]">
								<Image
									src="/join_our_mission.svg"
									alt="icon"
									width={64}
									height={64}
								/>
							</div>
							<h3 className="mb-[8px] mt-[10px] laptop-landscape:mt-0">
								{Data[activeTab].content.title}
							</h3>
							<p className="mb-[20px">{Data[activeTab].content.blurb}</p>
							<ul
								className={`${styles.list_wrap} ml-[20px] list-disc mt-[17px] [&>*:last-child]:mb-0`}
							>
								{Data[activeTab].content.links.map((link, index) => (
									<li
										key={index}
										className="tracking-[1px] text-lg font-normal leading-[27px] mb-[8px]"
									>
										<span>{link.link}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
