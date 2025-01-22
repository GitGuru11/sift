'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/hero-banner.module.css';
import Button_Transparent from '../button/Button_Transparent';
import DynamicButton from '../global-components/Buttons';
import { Permanent_Marker } from 'next/font/google';
import Link from 'next/link';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const permanentMarker = Permanent_Marker({
	subsets: ['latin'],
	weight: ['400'],
});

const HeroBanner = ({id, title, body, heroBackgroundImage, buttons, tabswrap, padding, background, classes,backgroundImage}) => {
	const [activeTab, setActiveTab] = useState(0);
	const tabs =
		tabswrap?.map((section) => ({
			tab_head: section?.tabtitle,
			tabData: section?.tabContent?.map((tabContent) => ({
				content_title: tabContent?.innerTabCategory,
				content: tabContent?.innerTabSubtitle,
				content_link: tabContent?.innerTabLink,
			})) || [],
		})) || [];
	const getSlidesToShow = () => {
		const activeTabData = tabs[activeTab]?.tabData || [];
		if (activeTabData.length > 3) {
			return 3;
		} else {
			return activeTabData.length;
		}
	};

	const settings = {
		arrows: false,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToScroll: 1,
		slidesToShow: getSlidesToShow(),
		appendDots: (dots) => (
			<div>
				<ul className={`${styles.btnDots}`}>{dots}</ul>
			</div>
		),
		customPaging: function (i) {
			return <button className={styles.slickDotButton} />;
		},
	};

	const responsiveSettings = [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 595,
			settings: {
				slidesToShow: 1,
			},
		},
	];

	Object.assign(settings, { responsive: responsiveSettings });

	useEffect(() => {
		const parallaxElements = document.querySelectorAll('.stroke_animate');
		const height = window.innerHeight;
		function handleScroll() {
			const scrollPos = window.scrollY;
			parallaxElements.forEach(function (element, index) {
				const parent = element.parentNode;
				const parentHeight = parent.getBoundingClientRect().height;
				const elementTop = element.getBoundingClientRect().top;
				const elementHeight =
					window.pageYOffset + element.getBoundingClientRect().top;
				element.style.top = `${(parentHeight - 100) / 100}px`;
				let translate;
				if (window.innerWidth < 767) {
					translate = elementTop / 16;
				} else {
					translate = (elementTop - 312) / 6;
				}

				if (elementHeight - height < scrollPos) {
					element.style.transform = `translate3d(0, ${translate}px, 0)`;
				}
			});
		}

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
	useEffect(() => {
		const parallaxElements = document.querySelectorAll('.dot_animate');
		const height = window.innerHeight;
		function handleScroll() {
			const scrollPos = window.scrollY;
			parallaxElements.forEach(function (element, index) {
				const parent = element.parentNode;
				const parentHeight = parent.getBoundingClientRect().height;
				const elementTop = element.getBoundingClientRect().top;
				const elementHeight =
					window.pageYOffset + element.getBoundingClientRect().top;
				element.style.top = `${(parentHeight - 100) / 100}px`;
				let translate;
				if (window.innerWidth < 767) {
					translate = elementTop / 16;
				} else {
					translate = (elementTop - 200) / 4.5;
				}

				if (elementHeight - height < scrollPos) {
					element.style.transform = `translate3d(0, ${translate}px, 0)`;
				}
			});
		}

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
	useEffect(() => {
		const parallaxElements = document.querySelectorAll('.pills_animate');
		const height = window.innerHeight;
		function handleScroll() {
			const scrollPos = window.scrollY;
			parallaxElements.forEach(function (element, index) {
				const parent = element.parentNode;
				const parentHeight = parent.getBoundingClientRect().height;
				const elementTop = element.getBoundingClientRect().top;
				const elementHeight =
					window.pageYOffset + element.getBoundingClientRect().top;
				element.style.top = `${(parentHeight - 100) / 100}px`;
				let translate;
				if (window.innerWidth < 767) {
					translate = elementTop / 16;
				} else {
					translate = (elementTop - 250) / 5.5;
				}

				if (elementHeight - height < scrollPos) {
					element.style.transform = `translate3d(0, ${translate}px, 0)`;
				}
			});
		}

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
	useEffect(() => {
		const boxes = document.querySelectorAll('.tab-wrap');

		for (const box of boxes) {
			box.addEventListener('click', function handleClick() {
				box.classList.add('active');
			});
		}
	});
	return (
		<section className={`${styles.hero_banner} banner HeroBanner svg-scale min-h bg-black pb-[64px] relative bg-gradient-to-b from-sky-950 to-black shadow wide-screen:pb-[160px] ${background} ${padding} ${classes}`}>
			{
				background == 'custom' && (
					<div className="custom-bg-img absolute left-0 top-[0px] w-full h-full ">
						{backgroundImage?.sourceUrl && <Image className="w-full h-full object-cover" src={backgroundImage?.sourceUrl} alt='custom-bg' width="1200" height="1200" />}
					</div>
				)
			}
			<div className="img-box h-[1088px] md:h-[888px] w-[75%] absolute right-0  md:-right-[60px] tablet:-right-[150px] desktop-mid:-right-[150px] top-[auto!important] -bottom-[300px] md:-bottom-[680px] tablet:-bottom-[500px] desktop:-bottom-[500px] laptop:-bottom-[400px]">
				<div className="pills_animate w-full h-full absolute bottom-0 right-0">
					<Image
						className="w-full"
						src="/banner_pills.png"
						alt="banner_pills"
						width="1088"
						height="939"
					/>
				</div>
				<div className="stroke_animate absolute  w-full h-full bottom-0 right-0">
					<Image
						className="w-full"
						src="/banner_stroke.png"
						alt="banner_stroke"
						width="1088"
						height="939"
					/>
				</div>
				<div className="dot_animate absolute  w-full h-full bottom-0 right-0">
					<Image
						className="w-full"
						src="/banner_dots.png"
						alt="banner_dots"
						width="1088"
						height="939"
					/>
				</div>
			</div>
			<div className="container">
				<div className="flex mt-[-24px]">
					<div className="max-w-[700px] lg:max-w-[549px] desktop-laptop:max-w-[550px] wide-screen:max-w-[1000px] laptop:mt-[50px] desktop:mt-[50px] laptop-landscape:mt-[70px] lg:mt-[70px] ">
						{title && (
							<h1
								className="text-white"
								dangerouslySetInnerHTML={{ __html: title }}
							/>
						)}
						{body && (
							<div
								className="max-w-[630px] wide-screen:max-w-[870px] wide-screen:my-[40px] my-[32px] xl:my-[24px] lg:my-[25px] laptop-landscape:my-[30px] laptop-landscape:max-w-[630px] text-white"
								dangerouslySetInnerHTML={{ __html: body }}
							/>
						)}
						<div className="btn-wrapper">
							<DynamicButton cta={buttons} />
						</div>
					</div>
				</div>
				<div
					className="promo_cards_with_tabs wide-screen:mt-[60px] mt-[112px] desktop:mt-[34px] laptop-landscape:mt-[68px] lg:mt-[30px]"
					data-aos="fade"
				>
					{tabs && tabs.length > 0 && (
						<>
							<ul className={`${styles.tab_list} tab-wrap`}>
								{tabs && tabs.map((tab, index) => (
									<li
										key={index}
										className={`${
											activeTab === index ? styles.active_tabs : ''
										} eyebrow-text tabs wide-screen:pl-[48px] wide-screen:pr-[26px] relative border-white border-opacity-40 uppercase nav_item text-white  laptop-landscape:pl-[30px] laptop-landscape:pr-[20px] pl-[16px] pb-[10px] pt-[0px]  pr-[11px] cursor-pointer hover:text-white transition-all text-base  wide-screen:text-2xl font-bold inline-block ${
											activeTab === index ? `active_tabs` : 'text-opacity-40'
										}`}
										onClick={() => setActiveTab(index)}
									>
										<h6>
											{tab?.tab_head}
										</h6>
									</li>
								))}
							</ul>
							<div className="tab_content">
								<div
									className={`${styles.SlideWarp} content relative`}
									data-aos="fade-up"
									data-aos-delay="300"
								>
									<Slider {...settings}>
										{tabs && tabs[activeTab].tabData && tabs[activeTab].tabData.map((tab, index) => {
											return (
												<div
													key={index}
													className={`${styles.tab_cards} wide-screen:p-[32px] bg-black rounded-[16px] laptop-landscape:p-[24px] text-white p-6 border-[2px] border-grey-600 outline outline-transparent outline-1 hover:outline-white hover:shadow-white-shadow transition-all cursor-pointer relative`}
												>
													{tab?.content_link && <Link
														href={tab?.content_link}
														aria-label="first link"
														className="absolute left-0 top-0 w-full h-full z-10"
													></Link>}
													<h6 className="fontInter !font-[700] small_font uppercase mb-4  leading-none wide-screen:mb-[30px]">
														{tab?.content_title}
													</h6>
													<h4 className="mb-[30px] xl:mb-[0] wide-screen:pr-[30px]">
														{tab?.content}
													</h4>
												</div>
											);
										})}
									</Slider>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</section>
	);
};

export default HeroBanner;
