"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Style from "../../styles/logo-nav-tab.module.css";
import DynamicButton from "../global-components/Buttons";

export default function TabWithLogo(props) {
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
		<section
			id={data.id ? data.id : ''}
			className={`TabWithLogo tab-with-logo img-text-tab ${Style.imgTextTab} ${Style.logoTab} ${data.background} ${data.padding} ${data.classes}`}
		>
			{data?.background == 'custom' && (
				<div className="custom-bg-img absolute left-0 top-[0px] w-full h-full ">
					{data?.backgroundImage?.sourceUrl && <Image
						className="w-full h-full object-cover"
						src={data?.backgroundImage?.sourceUrl}
						alt={data?.backgroundImage?.altText}
						width="1200"
						height="1200"
					/>}
				</div>
			)}
			<div className="container">
				<div className="tab-wrap lg:pt-0">
					<div className="links">
						<div className={`text-center mx-auto  sidesBorder`} data-aos="fade">
							<div
								className={`${Style.tab_nav_wrap
									} nav-wrap relative lg-up:flex lg-up:w-full lg:whitespace-nowrap lg:overflow-x-scroll sidesBorder z-10 ${data?.tabs && data?.tabs[activeTab]?.index !== ' ' ? 'LinkBorder ' : ''
									} `}
								ref={scrollContainerRef}
							>
								{data?.tabs && data?.tabs.map((tab, index) => (
									<div
										className={`tab-nav ${Style.group
											} text-white eyebrow-text relative inline-block z-10 w-full tablet:max-w-[244px] md:max-w-[160px] lg-up:hover:opacity-[1!important] lg-up:opacity-[0.4] lg-up:w-1/4 cursor-pointer text-[16px] px-[8px] laptop-landscape:pb-[18px] pb-[27px] ${index === activeTab ? Style.activeLink : ''
											}  ${activeTab === 0 ? Style.tabNav : ''} ${Style.tabNavLink
											} ${index === activeTab ? 'active-link' : ''}`}
										key={index}
										onClick={() => handleTabClick(index)}
									>
										<div className={`lg:opacity-[0.4] lg:group-hover:opacity-[1] mx-auto ${Style.logoWrap}`}>
											{tab?.tabLogo?.sourceUrl && <Image
												className={Style.logo}
												width={220}
												height={500}
												src={tab?.tabLogo?.sourceUrl}
												alt={tab?.tabLogo?.altText}
											/>}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="tab-content mt-[40px] laptop-landscape:mt-[30px]">
						<div className="flex flex-wrap rounded-[24px] overflow-hidden">
							<div className="content-wrap w-[49%] lg:w-full text-white bg-yello py-[48px] laptop-landscape:pb-[30px] px-[41px] lg:p-[25px]">
								<div className="quotation laptop-landscape:w-[40px] laptop-landscape:h-[40px] w-[64px] h-[64px] lg:w-[40px] lg:h-[40px]">
									
								</div>
								{data?.tabs && <h3
									className="text-black tabHeading font-[600] mt-4 mb-[25px]"
									dangerouslySetInnerHTML={{
										__html: data?.tabs[activeTab]?.quote,
									}}
								/>}
								{data?.tabs && <h4 className=" text-black mb-[0px]">
									{data?.tabs[activeTab]?.authorName}
								</h4>}
								<span className="text-black text-[18px]">
									{data?.tabs && <span className="mr-[5px]">{data?.tabs[activeTab]?.authorDesignation}</span>}
									{data?.tabs && <span>{data?.tabs[activeTab]?.authorCompany}</span>}
								</span>
								<div
									className={`${Style.btnWrap} text-black lg-up:mt-[37px] flex items-center flex-wrap`}
								>
									<div className="mt-5 inline-block">
										{data?.tabs && data?.tabs[activeTab]?.buttons &&
											data?.tabs[activeTab]?.buttons.length > 0 && (
												<DynamicButton cta={data?.tabs[activeTab]?.buttons} />
											)}
									</div>
								</div>
							</div>
							<div className={`ImageWrap w-[51%] sm-up:bg-pink lg:w-full mx-auto ${Style.imgWrap}`}>
								<div className={`relative h-[400px] sm:h-[190px] sm:bg-pink laptop-landscape:h-[360px] wide-screen:h-[604px]`}>
									<div className="absolute w-[300px] xl:w-[220px] h-auto top-[57%] left-[46%] -translate-x-1/2 -translate-y-1/2 z-[1] ml-[5px]">
										{data?.tabs && data?.tabs[activeTab]?.logo?.sourceUrl ? (<Image
											src={data?.tabs[activeTab]?.logo?.sourceUrl}
											alt={data?.tabs[activeTab]?.logo?.altText}
											width={350}
											height={150}
										/>):""}
									</div>
									<div className={` absolute object-cover h-full ${Style.bgImgWrap}`}>
										{data?.tabs && data?.tabs[activeTab]?.image?.sourceUrl && <Image
											className={`w-full h-full object-contain`}
											width={632}
											height={453}
											alt={data?.tabs[activeTab]?.image?.altText}
											src={data?.tabs[activeTab]?.image?.sourceUrl}
											quality={75}
										/>}
									</div>
								</div>
								<div className={`bg-darkBlue laptop-landscape:h-[calc(100%-360px)] h-[calc(100%-400px)] wide-screen:h-[calc(100%-604px)] ${Style.counter}`}>
									<div className="flex pl-[40px] xl:pl-[20px] md:px-8 xl-up:justify-between sm:flex-wrap sm:gap-[0!important] sm:bg-darkBlue ">
										{data?.tabs && data?.tabs[activeTab]?.statistics && data?.tabs[activeTab]?.statistics.map((stats, index) => (
											<div key={index}
												className="py-[21px] xl-up:pr-[30px] xl-up:inline-table wide-screen:pb-[40px] xl:w-fit xl:pr-[30px] sm:w-[100%!important] w-1/2 sm:p-[0!important]  sm:first:mt-[20px] sm:mb-[20px] countWithText pd:pr-0 pd:w-full pd:mb-[10px] pd:last-of-type:mb-[0]">
												<h2 className="text-yello wide-screen:text-[105px] xs:text-[30px] mb-[4px]">
													{stats?.startNumber}
												</h2>
												<p className="text-white">{stats?.title}</p>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}