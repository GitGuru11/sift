import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import Style from '../../styles/tabLocation/locationTab.module.css';
import { Inter } from 'next/font/google';
import DynamicButton from '../global-components/Buttons';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800']
})
export default function LocationTab(props) {
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
		<section className={`${Style.tabLocation} bg-skyblue ${data.background} ${data.padding} ${data.classes} tab-with-logo`}>
			<div className="container">
				<div className="tabsWrap mt-[36px] md:mt-0">
					<div className="links">
						<div className={`text-center mx-auto sidesBorder`} data-aos="fade">
							<div className={`relative ${Style.tab_nav_wrap} nav-wrap LinkBorder md:text-left md-up:flex md-up:w-full md:whitespace-nowrap md:overflow-x-scroll sidesBorder pt-[20px] md:pt-0 z-10`} ref={scrollContainerRef}>
								{
									data?.tabs && data?.tabs.map((item, index) => {
										return (
											<div
												className={`eyebrow-text text-base desktop:text-xs md-up:!text-[24px] wide-screen:text-2xl font-[600] tab-nav text-black md:text-[#677196] pt-[10px]  pl-[21px] pb-[20px] capatalization tracking-[2px] md:hover:text-black relative inline-block z-10 w-full md:w-fit md:px-[20px] md-up:hover:opacity-[1] md-up:opacity-[0.4] "  md-up:w-1/4 cursor-pointer ${index === activeTab ? Style.activeLink : ''
													}  ${activeTab === 0 ? Style.tabNav : ''} ${Style.tabNavLink
													} ${index === activeTab ? 'active-link' : ''}`}
												key={index}
												onClick={() => handleTabClick(index)}
											>
												{item?.tabTitle && <span dangerouslySetInnerHTML={{__html: item?.tabTitle}}></span>}
											</div>
										)
									})
								}
							</div>
							<div className="tabContent relative mt-[43px] md:mt-[20px]">
								<div className="mainTabContent flex flex-wrap w-[calc(100%+30px)] ml-[-15px]">
									{data?.tabs[activeTab]?.cards && data?.tabs[activeTab]?.cards.map((val, i) => (
										<div key={i} className={`group bg-white item mb-[24px] md:last:mb-[0] w-[calc(33.33%-30px)] sm:w-full mx-[14px] phablet:w-[calc(50%-30px)] px-[40px] pt-[38px] pb-[33px] xl:p-[20px] relative items-center rounded-[16px] overflow-hidden outline outline-[2px] outline-black  transition-all duration-[0.3s] shadow-none `}>
											<Link href='#' className='emptyLink'>.</Link>
											{val?.countryFlag && val?.countryFlag?.sourceUrl && <div className={`imgWap `}>
												<Image src={val?.countryFlag?.sourceUrl} className='md:w-[40px]' alt={val?.countryFlag?.altText} width={54} height={40} quality={25} />
											</div> }
											<div className={`contentWrap text-left mt-[24px] md:mt-[14px]`}>
												{val?.city && <h4 className='mb-[16px] md:mb-[10px]' dangerouslySetInnerHTML={{__html: val?.city}}></h4>}
												{val?.country && <p className='small_font xl:!text-[14px] laptop-landscape:text-[14px]' dangerouslySetInnerHTML={{__html: val?.country}}></p>}
												{val?.address && <p className='my-[24px] md:my-[10px] small_font xl:!text-[14px] laptop-landscape:text-[14px]' dangerouslySetInnerHTML={{__html: val?.address}}></p>}
												{val?.contactNumber && <Link href={`tel:${val?.contactNumber}`} className='small_font xl:!text-[14px] laptop-landscape:text-[14px]' dangerouslySetInnerHTML={{__html: val?.contactNumber}}></Link>}
												<div className="btn mt-[32px] xxl:mt-[30px] md:!mt-[14px]">
														<DynamicButton cta={val?.mapCtaButtons} />
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
