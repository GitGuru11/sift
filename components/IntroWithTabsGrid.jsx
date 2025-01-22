'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Btn_Transparent from './button/Button_Transparent';
import Style from '../styles/logo-nav-tab.module.css';
import FullWidthIntro from './FullWidthIntro';
const Data = [
	{
		title: `Use Case one`,
		src: '/',
		img: '/computer.png',
		content: {
			title: 'Ullamcorper quam nec risus vel cursus nec',
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
		title: 'Use Case Two ',
		src: '/',
		img: '/computer.png',
		content: {
			title: 'Two quam nec risus vel cursus nec',
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
		title: 'Use Case three',
		src: '/',
		img: '/computer.png',
		content: {
			title: 'three quam nec risus vel cursus nec',
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
		title: 'Use Case Four ',
		src: '/',
		img: '/computer.png',
		content: {
			title: 'Four quam nec risus vel cursus nec',
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
		title: 'Use Case Five',
		src: '/',
		img: '/computer.png',
		content: {
			title: 'Five quam nec risus vel cursus nec',
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
		title: 'Use Case six',
		src: '/',
		img: '/computer.png',
		content: {
			title: 'six quam nec risus vel cursus nec',
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
		PreNormalText: 'The problems we',
		HighLightedText: ' Solve',
		PostNormalText: 'for',
		blurb:
			'AI-Powered Fraud Decisioning..',
		cta: 'view all solutions',
		bg: 'black',
		link: '/',
	};

	return (
		<section
			className={`padding-top-m intro-with-tabgrid bg-darkBlue img-text-tab ${Style.imgTextTab} ${Style.imgTextTabNav}`}
		>
			<div className="container">
				<FullWidthIntro {...intro} />
				<div className="tab-wrap relative z-10">
					<div className="links">
						<div
							className={`text-center mx-auto sidesBorder 
              `}
						data-aos="fade">
							<div
								className={`${
									Style.tab_nav_wrap
								} nav-wrap relative xl-up:flex xl-up:w-full xl:whitespace-nowrap xl:overflow-x-scroll sidesBorder z-10 ${
									Data[activeTab].index !== ' ' ? 'LinkBorder ' : ''
								} `}
								ref={scrollContainerRef}
							>
								{Data.map((data, index) => (
									<div
										className={`eyebrow-text text-base wide-screen:text-2xl font-bold tab-nav text-white xl:text-[#677196] pt-[10px]  pl-[21px] pb-[20px] uppercase tracking-[2px] xl:hover:text-white relative inline-block z-10 w-full xl:max-w-[194px] xl-up:hover:opacity-[1] xl-up:opacity-[0.4] xl-up:w-1/6 cursor-pointer ${
											index === activeTab ? Style.activeLink : ''
										}  ${activeTab === 0 ? Style.tabNav : ''} ${
											Style.tabNavLink
										} ${index === activeTab ? 'active-link' : ''}`}
										key={index}
										onClick={() => handleTabClick(index)}
									>
										<span>
										  {data.title}
										</span>
									
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="tab-content mt-[40px] relative z-10 laptop-landscape:mt-[5px]">
						<div className="flex flex-wrap items-center justify-between">
							<div
								className={`w-full wide-screen:max-w-[910px] wide-screen:mx-0 wide-screen:pr-0 laptop-landscape:max-w-[600px] xl:max-w-[550px] max-w-[632px] xl:mx-auto xl-up:w-3/5 desktop:w-1/2 lg:pr-0 desktop:pr-7 mb-4 laptop-landscape:w-[635px] laptop-landscape:h-[auto] ${Style.imgWrap}`}
							>
								<Image
									className=" w-full h-full"
									width={632}
									height={453}
									alt="image"
									src={Data[activeTab].img}
									quality={75}
								/>
							</div>
							<div className="content-wrap w-full large-desktop:w-2/5 xxl-up:w-[45%] desktop:w-1/2 text-white mt-[10px]">
								<h3 className="mb-[25px] mt-[10px] laptop-landscape:mt-0">
									{Data[activeTab].content.title}
								</h3>
								<p className="mb-[20px">{Data[activeTab].content.blurb}</p>
								<ul className=" ml-[26px] list-disc mt-[18px]">
									{Data[activeTab].content.links.map((link, index) => (
										<li key={index} className="tracking-[1px]">
											<span>{link.link}</span>
										</li>
									))}
								</ul>
								<div className="mt-[32px]">
									<Btn_Transparent
										text={Data[activeTab].content.cta}
										link={Data[activeTab].src}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
