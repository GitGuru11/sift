import React, { useState, useEffect, useRef } from 'react';
import IntroWithCta from './IntroWithCta';
import FullWidthIntro from './FullWidthIntro';
import Image from 'next/image';
import Slider from 'react-slick';
import Style from './../styles/about/leadershipCards.module.css';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Inter } from 'next/font/google';
const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
});
export default function LeadershipCard() {
	const data = [
		{
			title: 'Leadership',
			cards: [
				{
					image: '/leadershipCards/kris_nagel.png',
					authorName: 'Kris Nagel',
					authorDesignation: 'Chief Executive Officer',
					linkedin: '/leadershipCards/Linkedin.svg',
					linkedinLink: 'https://www.linkedin.com/company/getsift',
					twitter: '/leadershipCards/twitter.svg',
					twitterLink: 'https://x.com/GetSift?s=20',
					cta: 'Read bio',
					ctaLink: '/',
					discription:
						'AI-Powered Fraud Decisioning..',
				},
				{
					image: '/leadershipCards/jason_tran.png',
					authorName: 'Jason Tan',
					authorDesignation: 'Founder & Executive Chairman',
					linkedin: '/leadershipCards/Linkedin.svg',
					linkedinLink: 'https://www.linkedin.com/company/getsift',
					twitter: '/leadershipCards/twitter.svg',
					twitterLink: 'https://x.com/GetSift?s=20',
					cta: 'Read bio',
					ctaLink: '/',
					discription:
						'AI-Powered Fraud Decisioning..',
				},
				{
					image: '/leadershipCards/eugene_sung.png',
					authorName: 'Eu-Gene Sung',
					authorDesignation: 'Chief Financial Officer',
					linkedin: '/leadershipCards/Linkedin.svg',
					linkedinLink: 'https://www.linkedin.com/company/getsift',
					twitter: '/leadershipCards/twitter.svg',
					twitterLink: 'https://x.com/GetSift?s=20',
					cta: 'Read bio',
					ctaLink: '/',
					discription:
						'AI-Powered Fraud Decisioning..',
				},
				{
					image: '/leadershipCards/chris_jones.png',
					authorName: 'Chris Jones',
					authorDesignation: 'Chief revenuw officer',
					linkedin: '/leadershipCards/Linkedin.svg',
					linkedinLink: 'https://www.linkedin.com/company/getsift',
					twitter: '/leadershipCards/twitter.svg',
					twitterLink: 'https://x.com/GetSift?s=20',
					cta: 'Read bio',
					ctaLink: '/',
					discription:
						'AI-Powered Fraud Decisioning..',
				},
				{
					image: '/leadershipCards/neeraj_gupta.png',
					authorName: 'Neeraj Gupta',
					authorDesignation: 'Chief Technology Officer',
					linkedin: '/leadershipCards/Linkedin.svg',
					linkedinLink: 'https://www.linkedin.com/company/getsift',
					twitter: '/leadershipCards/twitter.svg',
					twitterLink: 'https://x.com/GetSift?s=20',
					cta: 'Read bio',
					ctaLink: '/',
					discription:
						'AI-Powered Fraud Decisioning..',
				},
				{
					image: '/leadershipCards/armen_najarian.png',
					authorName: 'Armen Najarian',
					authorDesignation: 'Chief Marketing Officer',
					linkedin: '/leadershipCards/Linkedin.svg',
					linkedinLink: 'https://www.linkedin.com/company/getsift',
					twitter: '/leadershipCards/twitter.svg',
					twitterLink: 'https://x.com/GetSift?s=20',
					cta: 'Read bio',
					ctaLink: '/',
					discription:
						'AI-Powered Fraud Decisioning..',
				},
				{
					image: '/leadershipCards/liz_kosinski.png',
					authorName: 'Liz Kosinski',
					authorDesignation: 'Chief People Officer',
					linkedin: '/leadershipCards/Linkedin.svg',
					linkedinLink: 'https://www.linkedin.com/company/getsift',
					twitter: '/leadershipCards/twitter.svg',
					twitterLink: 'https://x.com/GetSift?s=20',
					cta: 'Read bio',
					ctaLink: '/',
					discription:
						'AI-Powered Fraud Decisioning..',
				},
				{
					image: '/leadershipCards/eva_gutierrez.png',
					authorName: 'Eva Gutierrez',
					authorDesignation: 'General Counsel',
					linkedin: '/leadershipCards/Linkedin.svg',
					linkedinLink: 'https://www.linkedin.com/company/getsift',
					twitter: '/leadershipCards/twitter.svg',
					twitterLink: 'https://x.com/GetSift?s=20',
					cta: 'Read bio',
					ctaLink: '/',
					discription:
						'AI-Powered Fraud Decisioning..',
				},
				{
					image: '/leadershipCards/dave_scholtz.png',
					authorName: 'Dave Scholtz',
					authorDesignation: 'SVP, Global Partnerships',
					linkedin: '/leadershipCards/Linkedin.svg',
					linkedinLink: 'https://www.linkedin.com/company/getsift',
					twitter: '/leadershipCards/twitter.svg',
					twitterLink: 'https://x.com/GetSift?s=20',
					cta: 'Read bio',
					ctaLink: '/',
					discription:
						'AI-Powered Fraud Decisioning..',
				},
				{
					image: '/leadershipCards/raj_motwane.png',
					authorName: 'Raj Motwane',
					authorDesignation: 'SVP, Customer Experience & Success',
					linkedin: '/leadershipCards/Linkedin.svg',
					linkedinLink: 'https://www.linkedin.com/company/getsift',
					twitter: '/leadershipCards/twitter.svg',
					twitterLink: 'https://x.com/GetSift?s=20',
					cta: 'Read bio',
					ctaLink: '/',
					discription:
						'AI-Powered Fraud Decisioning..',
				},
			],
		},
		{
			title: 'Board of directors',
			cards: [
				{
					image: '/leadershipCards/jason_tran.png',
					authorName: 'Jason Tan',
					authorDesignation: 'Founder & Executive Chairman',
					linkedin: '/leadershipCards/Linkedin.svg',
					linkedinLink: 'https://www.linkedin.com/company/getsift',
					twitter: '/leadershipCards/twitter.svg',
					twitterLink: 'https://x.com/GetSift?s=20',
					cta: 'Read bio',
					ctaLink: '/',
					discription:
						'AI-Powered Fraud Decisioning..',
				},
				{
					image: '/leadershipCards/chris_jones.png',
					authorName: 'Chris Jones',
					authorDesignation: 'Chief revenuw officer',
					linkedin: '/leadershipCards/Linkedin.svg',
					linkedinLink: 'https://www.linkedin.com/company/getsift',
					twitter: '/leadershipCards/twitter.svg',
					twitterLink: 'https://x.com/GetSift?s=20',
					cta: 'Read bio',
					ctaLink: '/',
					discription:
						'AI-Powered Fraud Decisioning..',
				},
				{
					image: '/leadershipCards/kris_nagel.png',
					authorName: 'Kris Nagel',
					authorDesignation: 'Chief Executive Officer',
					linkedin: '/leadershipCards/Linkedin.svg',
					linkedinLink: 'https://www.linkedin.com/company/getsift',
					twitter: '/leadershipCards/twitter.svg',
					twitterLink: 'https://x.com/GetSift?s=20',
					cta: 'Read bio',
					ctaLink: '/',
					discription:
						'AI-Powered Fraud Decisioning..',
				},
				{
					image: '/leadershipCards/neeraj_gupta.png',
					authorName: 'Neeraj Gupta',
					authorDesignation: 'Chief Technology Officer',
					linkedin: '/leadershipCards/Linkedin.svg',
					linkedinLink: 'https://www.linkedin.com/company/getsift',
					twitter: '/leadershipCards/twitter.svg',
					twitterLink: 'https://x.com/GetSift?s=20',
					cta: 'Read bio',
					ctaLink: '/',
					discription:
						'AI-Powered Fraud Decisioning..',
				},
				{
					image: '/leadershipCards/armen_najarian.png',
					authorName: 'Armen Najarian',
					authorDesignation: 'Chief Marketing Officer',
					linkedin: '/leadershipCards/Linkedin.svg',
					linkedinLink: 'https://www.linkedin.com/company/getsift',
					twitter: '/leadershipCards/twitter.svg',
					twitterLink: 'https://x.com/GetSift?s=20',
					cta: 'Read bio',
					ctaLink: '/',
					discription:
						'AI-Powered Fraud Decisioning..',
				},
				{
					image: '/leadershipCards/liz_kosinski.png',
					authorName: 'Liz Kosinski',
					authorDesignation: 'Chief People Officer',
					linkedin: '/leadershipCards/Linkedin.svg',
					linkedinLink: 'https://www.linkedin.com/company/getsift',
					twitter: '/leadershipCards/twitter.svg',
					twitterLink: 'https://x.com/GetSift?s=20',
					cta: 'Read bio',
					ctaLink: '/',
					discription:
						'AI-Powered Fraud Decisioning..',
				},
				{
					image: '/leadershipCards/raj_motwane.png',
					authorName: 'Raj Motwane',
					authorDesignation: 'SVP, Customer Experience & Success',
					linkedin: '/leadershipCards/Linkedin.svg',
					linkedinLink: 'https://www.linkedin.com/company/getsift',
					twitter: '/leadershipCards/twitter.svg',
					twitterLink: 'https://x.com/GetSift?s=20',
					cta: 'Read bio',
					ctaLink: '/',
					discription:
						'AI-Powered Fraud Decisioning..',
				},
				{
					image: '/leadershipCards/eva_gutierrez.png',
					authorName: 'Eva Gutierrez',
					authorDesignation: 'General Counsel',
					linkedin: '/leadershipCards/Linkedin.svg',
					linkedinLink: 'https://www.linkedin.com/company/getsift',
					twitter: '/leadershipCards/twitter.svg',
					twitterLink: 'https://x.com/GetSift?s=20',
					cta: 'Read bio',
					ctaLink: '/',
					discription:
						'AI-Powered Fraud Decisioning..',
				},
				{
					image: '/leadershipCards/dave_scholtz.png',
					authorName: 'Dave Scholtz',
					authorDesignation: 'SVP, Global Partnerships',
					linkedin: '/leadershipCards/Linkedin.svg',
					linkedinLink: 'https://www.linkedin.com/company/getsift',
					twitter: '/leadershipCards/twitter.svg',
					twitterLink: 'https://x.com/GetSift?s=20',
					cta: 'Read bio',
					ctaLink: '/',
					discription:
						'AI-Powered Fraud Decisioning..',
				},
			],
		},
	];
	const [activeTab, setActiveTab] = useState(0);
	const [slider, setSlider] = useState();
	const [overlay, setOverlay] = useState(false);
	const scrollContainerRef = useRef(null);
	const slickSliderRef = useRef(null);

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
	const clickOverlay = (index) => {
		setOverlay((prevOverlay) => !prevOverlay);
		setSlider(index);
		// updateSlider(index);
	};
	const removeOverlay = () => {
		setOverlay((prevOverlay) => !prevOverlay);
	};
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	useEffect(() => {
		prevRef.current = document.querySelector(
			'.LeadershipCard .slick-initialized .slick-prev',
		);
		nextRef.current = document.querySelector(
			'.LeadershipCard .slick-initialized .slick-next',
		);
	}, [slider]);
	const handleNext = () => {
		if (nextRef.current) {
			nextRef.current.click();
		}
	};
	const handlePrev = () => {
		if (prevRef.current) {
			prevRef.current.click();
		}
	};
	const settings = {
		dots: false,
		centerMode: true,
		centerPadding: '367px',
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: slider,
		responsive: [
			{
				breakpoint: 2499,
				settings: {
					centerPadding: '200px',
				},
			},
			{
				breakpoint: 1600,
				settings: {
					centerPadding: '167px',
				},
			},
			{
				breakpoint: 1500,
				settings: {
					centerPadding: '100px',
				},
			},
			{
				breakpoint: 1200,
				settings: {
					centerPadding: '0',
				},
			},
		],
	};
	const intro = {
		PreNormalText: 'About leadership & board of ',
		HighLightedText: 'directors',
		bg: 'black',
		blurb:
			'AI-Powered Fraud Decisioning..',
	};
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
	return (
		<>
		<section className={`LeadershipCards bg-darkBlue h-full relative`} id="leadership">
				<div className="img-box absolute -bottom-[150px] right-0 w-[330px]  laptop:w-[275px] desktop:w-[275px] laptop-landscape:w-[245px!important] h-[585px] lg:hidden">
				{/* <Image
					src="/leadershipCards/pattern.png"
					className="z-[-1] relative"
					alt="bg-vector"
					width={500}
					height={500}
				/> */}
					<div className="pills_animate w-full h-full absolute bottom-0 right-0">
						<Image
							className="w-full"
							src="/pills_filled.svg"
							alt="pills_filled"
							width="1088"
							height="939"
						/>
					</div>
					<div className="stroke_animate absolute  w-full h-full bottom-0 right-0">
						<Image
							className="w-full"
							src="/pills_outline.svg"
							alt="pills_outline"
							width="1088"
							height="939"
						/>
					</div>
					<div className="dot_animate absolute  w-full h-full bottom-0 right-0">
						<Image
							className="w-full -mt-[35px]"
							src="/doted.svg"
							alt="doted"
							width="1088"
							height="939"
						/>
					</div>
			</div>
			<div className="container z-[2]">
				<FullWidthIntro {...intro} />
				<div className="wrap">
					<div className="links mb-[60px] lg:mb-[40px]">
							<div className={`text-center mx-auto sidesBorder`} data-aos="fade">
							<div
									className={`${Style.tab_nav_wrap} nav-wrap relative xl-up:flex xl-up:w-full xl:whitespace-nowrap xl:overflow-x-scroll sidesBorder z-10 `}
								ref={scrollContainerRef}
							>
								{data.map((data, index) => {
									return (
										<div
											className={`laptop-landscape:text-[12px] eyebrow-text text-center tab-nav text-white xl:text-[#677196] pt-[10px] sm:px-[20px] sm:w-[fit-content!important] sm:max-w-[unset!important] pl-[21px] pb-[20px] uppercase tracking-[2px] font-[700] xl:hover:text-white relative inline-block z-10 w-1/2 md:w-full md:max-w-[230px]  xl-up:hover:!opacity-[1] xl-up:opacity-[0.4] cursor-pointer text-[16px] wide-screen:text-[24px]  ${
												inter.className
											} ${index === activeTab ? Style.activeLink : ''}  ${
												activeTab === 0 ? Style.tabNav : ''
											} ${Style.tabNavLink} ${
												index === activeTab ? 'active-link' : ''
											}`}
											key={index}
											onClick={() => handleTabClick(index)}
										>
											<span>
											 {data.title}
											</span>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div className="cards-wrap flex flex-wrap w-[calc(100%+40px)] ml-[-20px]">
						{data[activeTab].cards.map((card, index) => {
							return (
								<div
									key={index}
									data-aos="fade-up"
									data-aos-delay="200"
									className="group bg-black relative card phablet:w-[calc(70%-40px)] sm:w-[calc(100%-40px)] phablet:mx-auto wide-screen:w-[calc(25%-40px)] xxl-up:w-[calc(25%-40px)] cursor-pointer tablet:w-[calc(50%-40px)] tablet-mid:w-[calc(50%-40px)] laptop-mid:w-[calc(33.33%-40px)] laptop:w-[calc(33.33%-40px)] w-[calc(25%-40px)] transition-all mx-[20px] duration-[0.3s] mb-[40px] lg:mb-[24px] border-[2px] border-white rounded-[16px] overflow-hidden shadow-none hover:shadow-white-shadow"
									onClick={() => clickOverlay(index)}
								>
									{/* <Link className='emptyLink' href="/"></Link> */}
									<div className="imgwrap h-[220px] md:h-[320px] sm:h-[250px] tablet:hidden md:hidden xxl-mid:h-[240px] xxl-mid-up:h-[370px]  wide-screen:h-[350px] tablet-mid:h-[360px] laptop-mid:h-[290px] laptop:h-[310px] w-full overflow-hidden transition-all duration-[0.3s]">
										<Image
											className="w-full object-cover  h-full scale-none group-hover:scale-[1.1] transition-all duration-[0.3s] "
											width={200}
											height={200}
											src={card.image}
											alt="card image"
										/>
									</div>
									<div className="content p-[32px] pb-[48px] h-full md:pb-[60px]">
										<div className="text-white mb-[20px]">
											<h6 className=" uppercase mb-[8px] text-[14px] leading-[16.80px] tracking-[0.56px] pr-[20px]">
												{card.authorDesignation}
											</h6>
											<h4 className=" ">{card.authorName}</h4>
										</div>
										<div className="shareLinks flex">
											<Link
												className={`mr-[24px] ${Style.logoWrap}`}
												href={card.linkedinLink}
											>
												<svg
													width="24"
													height="25"
													viewBox="0 0 24 25"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M20.25 2.68555H3.75C3.35218 2.68555 2.97064 2.84358 2.68934 3.12489C2.40804 3.40619 2.25 3.78772 2.25 4.18555V20.6855C2.25 21.0834 2.40804 21.4649 2.68934 21.7462C2.97064 22.0275 3.35218 22.1855 3.75 22.1855H20.25C20.6478 22.1855 21.0294 22.0275 21.3107 21.7462C21.592 21.4649 21.75 21.0834 21.75 20.6855V4.18555C21.75 3.78772 21.592 3.40619 21.3107 3.12489C21.0294 2.84358 20.6478 2.68555 20.25 2.68555ZM20.25 20.6855H3.75V4.18555H20.25V20.6855ZM9 10.9355V16.9355C9 17.1345 8.92098 17.3252 8.78033 17.4659C8.63968 17.6065 8.44891 17.6855 8.25 17.6855C8.05109 17.6855 7.86032 17.6065 7.71967 17.4659C7.57902 17.3252 7.5 17.1345 7.5 16.9355V10.9355C7.5 10.7366 7.57902 10.5459 7.71967 10.4052C7.86032 10.2646 8.05109 10.1855 8.25 10.1855C8.44891 10.1855 8.63968 10.2646 8.78033 10.4052C8.92098 10.5459 9 10.7366 9 10.9355ZM17.25 13.5605V16.9355C17.25 17.1345 17.171 17.3252 17.0303 17.4659C16.8897 17.6065 16.6989 17.6855 16.5 17.6855C16.3011 17.6855 16.1103 17.6065 15.9697 17.4659C15.829 17.3252 15.75 17.1345 15.75 16.9355V13.5605C15.75 13.0633 15.5525 12.5864 15.2008 12.2347C14.8492 11.8831 14.3723 11.6855 13.875 11.6855C13.3777 11.6855 12.9008 11.8831 12.5492 12.2347C12.1975 12.5864 12 13.0633 12 13.5605V16.9355C12 17.1345 11.921 17.3252 11.7803 17.4659C11.6397 17.6065 11.4489 17.6855 11.25 17.6855C11.0511 17.6855 10.8603 17.6065 10.7197 17.4659C10.579 17.3252 10.5 17.1345 10.5 16.9355V10.9355C10.5009 10.7518 10.5693 10.5749 10.692 10.4382C10.8148 10.3015 10.9834 10.2146 11.166 10.1941C11.3485 10.1735 11.5323 10.2206 11.6824 10.3265C11.8325 10.4325 11.9385 10.5898 11.9803 10.7687C12.4877 10.4245 13.0792 10.225 13.6914 10.1917C14.3036 10.1583 14.9133 10.2923 15.455 10.5794C15.9968 10.8664 16.4501 11.2955 16.7664 11.8208C17.0826 12.346 17.2498 12.9475 17.25 13.5605ZM9.375 8.31055C9.375 8.53305 9.30902 8.75056 9.1854 8.93556C9.06179 9.12057 8.88609 9.26476 8.68052 9.34991C8.47495 9.43506 8.24875 9.45734 8.03052 9.41393C7.81229 9.37052 7.61184 9.26338 7.4545 9.10604C7.29717 8.94871 7.19002 8.74825 7.14662 8.53002C7.10321 8.3118 7.12549 8.08559 7.21064 7.88003C7.29578 7.67446 7.43998 7.49876 7.62498 7.37514C7.80999 7.25153 8.0275 7.18555 8.25 7.18555C8.54837 7.18555 8.83452 7.30407 9.0455 7.51505C9.25647 7.72603 9.375 8.01218 9.375 8.31055Z"
														fill="white"
													/>
												</svg>
												<span className="text-[0]">.</span>
											</Link>
											<Link
												className={`${Style.logoWrap}`}
												href={card.twitterLink}
											>
												<svg
													width="24"
													height="25"
													viewBox="0 0 24 25"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M17.6074 3.43555H20.5975L14.065 11.0602L21.75 21.4355H15.7327L11.0197 15.1429L5.627 21.4355H2.63506L9.62227 13.2802L2.25 3.43555H8.42007L12.6802 9.18724L17.6074 3.43555ZM16.558 19.6079H18.2148L7.51978 5.16724H5.7418L16.558 19.6079Z"
														fill="white"
													/>
												</svg>
												<span className="text-[0]">.</span>
											</Link>
										</div>
										<div className="ctaWrap absolute bottom-[32px] left-[32px] cursor-pointer">
											<div
												aria-label="first link"
												className={`group arrow_btn uppercase text-white relative inline-block transition-all tracking-[1.1px]  duration-300 font-[700] leading-[1] pr-[26px] group-hover:text-pink  ${inter.className} z-[11]`}
											>
												<span className="absolute top-1/2 -translate-y-1/2 right-0 w-[20px] overflow-hidden">
													<svg
														className="-ml-[5px] duration-300 group-hover:-ml-[1px]"
														xmlns="http://www.w3.org/2000/svg"
														width="20"
														height="17"
														viewBox={`0 0 20 17`}
														fill="none"
													>
														<path
															d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z"
															fill="#FF3B84"
														/>
													</svg>
												</span>
												{card.cta}
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			
		</section>
		{overlay === true ? (
				<div
					className={`overlay LeadershipCard transition-all duration-300 xl-up:w-[calc(100%-276px)] desktop:w-[calc(100%-244px)] wide-nav-screen:max-w-[2500px] wide-nav-screen:mx-auto  fixed w-screen h-screen z-[9999] ${Style.overlay}`}
				>
					<div
						className={`${Style.overlaycardsWrap} relative top-[50%] tablet-landscape:top-0 md:top-0 lg:pb-[50px] pt-[70px]`}
					>
						<div
							className={`${Style.cross} w-[40px] h-[40px] cursor-pointer absolute right-[179px] top-[35px] xxl-up:right-[215px] lg:right-[15px] lg:top-[40px] wide-screen:right-[385px] ${Style.logoWrap} z-[9999]`}
							onClick={() => removeOverlay()}
						>
							<svg
								width="40"
								height="40"
								viewBox="0 0 40 40"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M26.8802 15.1879L22.0663 20L26.8802 24.8121C27.016 24.9479 27.1237 25.1091 27.1972 25.2865C27.2707 25.464 27.3085 25.6541 27.3085 25.8461C27.3085 26.0382 27.2707 26.2283 27.1972 26.4058C27.1237 26.5832 27.016 26.7444 26.8802 26.8802C26.7444 27.016 26.5832 27.1237 26.4058 27.1972C26.2284 27.2707 26.0382 27.3085 25.8462 27.3085C25.6541 27.3085 25.464 27.2707 25.2865 27.1972C25.1091 27.1237 24.9479 27.016 24.8121 26.8802L20 22.0662L15.1879 26.8802C15.0521 27.016 14.8909 27.1237 14.7135 27.1972C14.536 27.2707 14.3459 27.3085 14.1539 27.3085C13.9618 27.3085 13.7717 27.2707 13.5942 27.1972C13.4168 27.1237 13.2556 27.016 13.1198 26.8802C12.984 26.7444 12.8763 26.5832 12.8028 26.4058C12.7293 26.2283 12.6915 26.0382 12.6915 25.8461C12.6915 25.6541 12.7293 25.464 12.8028 25.2865C12.8763 25.1091 12.984 24.9479 13.1198 24.8121L17.9338 20L13.1198 15.1879C12.8456 14.9136 12.6915 14.5417 12.6915 14.1538C12.6915 13.766 12.8456 13.394 13.1198 13.1198C13.3941 12.8456 13.766 12.6915 14.1539 12.6915C14.5417 12.6915 14.9136 12.8456 15.1879 13.1198L20 17.9337L24.8121 13.1198C24.9479 12.984 25.1091 12.8763 25.2865 12.8028C25.464 12.7293 25.6541 12.6915 25.8462 12.6915C26.0382 12.6915 26.2284 12.7293 26.4058 12.8028C26.5832 12.8763 26.7444 12.984 26.8802 13.1198C27.016 13.2556 27.1237 13.4168 27.1972 13.5942C27.2707 13.7716 27.3085 13.9618 27.3085 14.1538C27.3085 14.3459 27.2707 14.536 27.1972 14.7135C27.1237 14.8909 27.016 15.0521 26.8802 15.1879ZM39 20C39 23.7578 37.8857 27.4313 35.7979 30.5558C33.7102 33.6804 30.7428 36.1156 27.271 37.5537C23.7992 38.9918 19.9789 39.368 16.2933 38.6349C12.6077 37.9018 9.22218 36.0922 6.56498 33.435C3.90778 30.7778 2.09821 27.3924 1.36509 23.7067C0.631969 20.0211 1.00823 16.2008 2.4463 12.729C3.88436 9.25722 6.31964 6.28982 9.44417 4.20208C12.5687 2.11433 16.2422 1 20 1C25.0375 1.00532 29.8671 3.00881 33.4292 6.57085C36.9912 10.1329 38.9947 14.9625 39 20ZM36.0769 20C36.0769 16.8203 35.134 13.712 33.3675 11.0681C31.6009 8.4243 29.09 6.36368 26.1524 5.14686C23.2147 3.93004 19.9822 3.61166 16.8636 4.23199C13.7449 4.85232 10.8803 6.3835 8.63191 8.6319C6.38351 10.8803 4.85233 13.7449 4.232 16.8635C3.61167 19.9822 3.93004 23.2147 5.14687 26.1524C6.36369 29.09 8.42431 31.6009 11.0681 33.3675C13.712 35.134 16.8203 36.0769 20 36.0769C24.2624 36.0721 28.3488 34.3767 31.3628 31.3628C34.3767 28.3488 36.0721 24.2624 36.0769 20Z"
									fill="white"
								/>
							</svg>
						</div>
						<Slider ref={slickSliderRef} {...settings}>
							{data[activeTab].cards.map((card, index) => {
								return (
									<div key={index} className="py-[10px] md:pb-0">
										<div
											className={`${Style.cardWrap} group xl:py-[20px] px-[70px] py-[40px] tablet-landscape:pb-[60px] xxl-up:min-h-[460px] bg-skyblue mx-[16px] flex md:flex-wrap relative card w-[calc(100%-28px)] h-full transition-all duration-[0.3s] my-[20px] border-[2px] border-white rounded-[16px] overflow-hidden`}
										>
											<div className="colTwo md:h-full w-[38%] xxl-up:w-fit pr-[14px] xxl-up:pb-[45px] md:w-full md:pr-0">
												<div className="imgwrap max-h-[312px] md:max-h-[200px] xxl-up:h-[400px] xxl-up:w-[400px] h-full w-full max-w-[297px] overflow-hidden rounded-[16px] mb-[20px] mx-auto">
													<Image
														className="w-full h-full object-cover "
														width={297}
														height={312}
														src={card.image}
														alt="card image"
													/>
												</div>
												<div className="shareLinks flex justify-center max-w-[297px] w-full mx-auto">
													<Link
														className={`mr-[32px] w-[30px] h-[30px] ${Style.logoWrap}`}
														href="/"
													>
														<svg
															width="30"
															height="30"
															viewBox="0 0 24 25"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M20.25 2.68555H3.75C3.35218 2.68555 2.97064 2.84358 2.68934 3.12489C2.40804 3.40619 2.25 3.78772 2.25 4.18555V20.6855C2.25 21.0834 2.40804 21.4649 2.68934 21.7462C2.97064 22.0275 3.35218 22.1855 3.75 22.1855H20.25C20.6478 22.1855 21.0294 22.0275 21.3107 21.7462C21.592 21.4649 21.75 21.0834 21.75 20.6855V4.18555C21.75 3.78772 21.592 3.40619 21.3107 3.12489C21.0294 2.84358 20.6478 2.68555 20.25 2.68555ZM20.25 20.6855H3.75V4.18555H20.25V20.6855ZM9 10.9355V16.9355C9 17.1345 8.92098 17.3252 8.78033 17.4659C8.63968 17.6065 8.44891 17.6855 8.25 17.6855C8.05109 17.6855 7.86032 17.6065 7.71967 17.4659C7.57902 17.3252 7.5 17.1345 7.5 16.9355V10.9355C7.5 10.7366 7.57902 10.5459 7.71967 10.4052C7.86032 10.2646 8.05109 10.1855 8.25 10.1855C8.44891 10.1855 8.63968 10.2646 8.78033 10.4052C8.92098 10.5459 9 10.7366 9 10.9355ZM17.25 13.5605V16.9355C17.25 17.1345 17.171 17.3252 17.0303 17.4659C16.8897 17.6065 16.6989 17.6855 16.5 17.6855C16.3011 17.6855 16.1103 17.6065 15.9697 17.4659C15.829 17.3252 15.75 17.1345 15.75 16.9355V13.5605C15.75 13.0633 15.5525 12.5864 15.2008 12.2347C14.8492 11.8831 14.3723 11.6855 13.875 11.6855C13.3777 11.6855 12.9008 11.8831 12.5492 12.2347C12.1975 12.5864 12 13.0633 12 13.5605V16.9355C12 17.1345 11.921 17.3252 11.7803 17.4659C11.6397 17.6065 11.4489 17.6855 11.25 17.6855C11.0511 17.6855 10.8603 17.6065 10.7197 17.4659C10.579 17.3252 10.5 17.1345 10.5 16.9355V10.9355C10.5009 10.7518 10.5693 10.5749 10.692 10.4382C10.8148 10.3015 10.9834 10.2146 11.166 10.1941C11.3485 10.1735 11.5323 10.2206 11.6824 10.3265C11.8325 10.4325 11.9385 10.5898 11.9803 10.7687C12.4877 10.4245 13.0792 10.225 13.6914 10.1917C14.3036 10.1583 14.9133 10.2923 15.455 10.5794C15.9968 10.8664 16.4501 11.2955 16.7664 11.8208C17.0826 12.346 17.2498 12.9475 17.25 13.5605ZM9.375 8.31055C9.375 8.53305 9.30902 8.75056 9.1854 8.93556C9.06179 9.12057 8.88609 9.26476 8.68052 9.34991C8.47495 9.43506 8.24875 9.45734 8.03052 9.41393C7.81229 9.37052 7.61184 9.26338 7.4545 9.10604C7.29717 8.94871 7.19002 8.74825 7.14662 8.53002C7.10321 8.3118 7.12549 8.08559 7.21064 7.88003C7.29578 7.67446 7.43998 7.49876 7.62498 7.37514C7.80999 7.25153 8.0275 7.18555 8.25 7.18555C8.54837 7.18555 8.83452 7.30407 9.0455 7.51505C9.25647 7.72603 9.375 8.01218 9.375 8.31055Z"
																fill="#000"
															/>
														</svg>
													</Link>
													<Link
														className={` w-[30px] h-[30px] ${Style.logoWrap}`}
														href="/"
													>
														<svg
															width="30"
															height="30"
															viewBox="0 0 24 25"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M17.6074 3.43555H20.5975L14.065 11.0602L21.75 21.4355H15.7327L11.0197 15.1429L5.627 21.4355H2.63506L9.62227 13.2802L2.25 3.43555H8.42007L12.6802 9.18724L17.6074 3.43555ZM16.558 19.6079H18.2148L7.51978 5.16724H5.7418L16.558 19.6079Z"
																fill="#000"
															/>
														</svg>
													</Link>
												</div>
											</div>
											<div className="colTwo w-[62%] xxl-up:w-fit pl-[10px] xxl-up:pl-[30px] md:w-full md:mt-[10px] md:pl-0">
												<div className="content pb-[80px] md:pb-0 h-full">
													<div className="text-black mb-[30px] md:mb-0 max-w-[95%] md:text-center">
														<h3 className=" mb-[4px]">{card.authorName}</h3>
														<span className=" text-[16px] mb-[8px] font-[700] uppercase tracking-[1.65px]">
															{card.authorDesignation}
														</span>
														<p className=" mt-[30px] xxl:text-[14px] md:mt-[10px]">
															{card.discription}
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</Slider>
						<div className="flex items-center justify-center mt-[0] ml-[8px] xxl:pb-[35px] z-[10]">
							<button
								className={` mr-[30px] ${Style.prevBtn}`}
								onClick={handlePrev}
							>
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M20.0001 1.00195C30.4767 1.00195 39 9.52543 39 20.002C39 30.4785 30.4767 39.002 20.0001 39.002C9.52346 39.002 1 30.4785 1 20.002C1 9.52543 9.52346 1.00195 20.0001 1.00195ZM20.0001 36.401C29.0425 36.401 36.399 29.0445 36.3992 20.002C36.3992 10.9596 29.0427 3.60307 20.0001 3.6029C10.9576 3.60307 3.60117 10.9596 3.60117 20.0022C3.60117 29.0443 10.9576 36.401 20.0001 36.401Z"
										fill="white"
									/>
									<path
										d="M17.4485 11.8642C17.9564 11.3565 18.7799 11.3567 19.2876 11.8642C19.7956 12.3723 19.7956 13.1955 19.2874 13.7036L14.29 18.7007L28.7614 18.7021C29.4797 18.7023 30.0618 19.2844 30.0618 20.0029C30.0616 20.7211 29.4795 21.303 28.7613 21.303L14.2893 21.3016L19.2879 26.2998C19.7958 26.8077 19.7958 27.6313 19.2879 28.139C19.0339 28.3929 18.7012 28.52 18.3682 28.52C18.0355 28.52 17.7027 28.3929 17.4487 28.1392L10.2302 20.921C9.98626 20.6772 9.84927 20.3466 9.84927 20.0015C9.84945 19.6565 9.98643 19.326 10.2304 19.0816L17.4485 11.8642Z"
										fill="white"
									/>
								</svg>
							</button>
							<button className={Style.nextBtn} onClick={handleNext}>
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M19.9999 1.00195C9.52328 1.00195 1 9.52543 1 20.002C1 30.4785 9.52328 39.002 19.9999 39.002C30.4765 39.002 39 30.4785 39 20.002C39 9.52543 30.4765 1.00195 19.9999 1.00195ZM19.9999 36.401C10.9575 36.401 3.60099 29.0445 3.60082 20.002C3.60082 10.9596 10.9573 3.60307 19.9999 3.6029C29.0424 3.60307 36.3988 10.9596 36.3988 20.0022C36.3988 29.0443 29.0424 36.401 19.9999 36.401Z"
										fill="white"
									/>
									<path
										d="M22.5515 11.8642C22.0436 11.3565 21.2201 11.3567 20.7124 11.8642C20.2044 12.3723 20.2044 13.1955 20.7126 13.7036L25.71 18.7007L11.2386 18.7021C10.5203 18.7023 9.93823 19.2844 9.93823 20.0029C9.9384 20.7211 10.5205 21.303 11.2387 21.303L25.7107 21.3016L20.7121 26.2998C20.2042 26.8077 20.2042 27.6313 20.7121 28.139C20.9661 28.3929 21.2988 28.52 21.6318 28.52C21.9645 28.52 22.2973 28.3929 22.5513 28.1392L29.7698 20.921C30.0137 20.6772 30.1507 20.3466 30.1507 20.0015C30.1506 19.6565 30.0136 19.326 29.7696 19.0816L22.5515 11.8642Z"
										fill="white"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			) : (
				''
			)}
		</>
	);
}
