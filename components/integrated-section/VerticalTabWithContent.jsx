'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../../styles/VerticalTabWithContent.module.css';
export default function VerticalTabWithContent(props) {
	let data = props.items;
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
	return (
		<section id={data.id ? data.id : ''} className={`${data.gatedComponent? 'GatedHide' : ''} VerticalTabWithContent padding-top-m bg-black top-[-1px] ${data.background} ${data.padding} ${data.classes}`}>
			<div className="container">
				<div className="tab-wrap xl-up:flex relative">
					<div className="links xl-up:top-[22px] relative w-full max-w-[494px] xl:max-w-[100%]">
						<div className={`text-center xl-up:text-left mx-auto sidesBorder `}>
							<div
								className={`${
									styles.nav_wrap
								} nav-wrap relative  xl-up:w-full xl:whitespace-nowrap xl:overflow-x-scroll sidesBorder z-10 ${
									data.tabs[activeTab].index !== ' ' ? 'LinkBorder ' : ''
								} `}
								ref={scrollContainerRef}>
								{data?.tabs && data?.tabs.map((item, index) => (
									<div
										className={`eyebrow-text ${
											styles.tabs
										} xl: text-base wide-screen:text-2xl font-bold tab-nav leading-tight text-white xl:text-[#677196] pt-[10px] xl:px-[20px] xs:px-[25px] pl-[24px] pb-[25px] xl:pb-[20px] xl-up:pb-[10px] xl-up:mb-[27px] uppercase tracking-wide xl:hover:text-white relative inline-block xl-up:block z-10 w-fit xl:max-w-[fit-content] xl-up:hover:opacity-[1] xl-up:opacity-[0.4]  cursor-pointer ${
											index === activeTab ? styles.activeLink : ''
										}  ${activeTab === 0 ? styles.tabNav : ''} ${
											styles.tabNavLink
										} ${index === activeTab ? 'active-link w-full' : ''}`}
										key={index}
										onClick={() => handleTabClick(index)}>
									 <span className='xl-up:w-[300px] inline-block'>{item?.tabLabel}</span>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="tab-content xl:mt-[40px] relative z-10 p-[40px] lg:px-[20px] lg:py-[30px] bg-blue rounded-3xl">
						<div className="content-wrap w-full text-white">
							{data?.tabs && data?.tabs[activeTab]?.icon && data?.tabs[activeTab]?.icon?.sourceUrl &&
							 <div className="icon-wrap mb-[16px]">
								<Image
									src={data?.tabs[activeTab]?.icon?.sourceUrl}
									alt={data?.tabs[activeTab]?.icon?.altText}
									width={64}
									height={64}
								/>
							</div> }
							{data?.tabs[activeTab]?.title && <h3 className="mb-[8px] mt-[10px] laptop-landscape:mt-0" dangerouslySetInnerHTML={{ __html: data?.tabs[activeTab]?.title }}></h3> }
							{data?.tabs[activeTab]?.body && <div className="mb-[20px" dangerouslySetInnerHTML={{ __html: data?.tabs[activeTab]?.body }}></div>}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
