import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Btn_Pink from './button/Button_Pink';
import Button_Transparent from './button/Button_Transparent';
// import { Permanent_Marker } from 'next/font/google';
// const permanentMarker = Permanent_Marker({
// 	subsets: ['latin'],
// 	weight: ['400'],
// });
const bannerData = {
	leftContent:{
		bannerMainTitle: "Sift",
		HighlitedText: "Patents",
		Blurb: "Sift’s services leverage the features and functionality of different patents owned by Sift Science, Inc. as listed below. For more information about our services, please see our Terms of Service and our Digital Trust & Safety product suite.",
		cta: "Link to USPTO",
		ctaLink: "/",
	},
	RightImg: '/patents/pettern.png',
	RightVideo: ''
}


const BannerWithParallax = () => {
	useEffect(() => {
		const parallaxElements = document.querySelectorAll('.parallax_element');
		const height = window.innerHeight;
		function handleScroll() {
			const scrollPos = window.scrollY;
			parallaxElements.forEach(function (element, index) {
				const parent = element.parentNode;
				const parentHeight = parent.getBoundingClientRect().height;
				const elementTop = element.getBoundingClientRect().top;
				const elementHeight =
					window.pageYOffset + element.getBoundingClientRect().top;
				element.style.bottom = `${(parentHeight - 1900) / 100}px`;
				let translate;
				if (window.innerWidth < 1024) {
					translate = (elementTop + 100) / 16;
				} else {
					translate = (elementTop + 700) / 10;
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
			<div className="breadcrumbs bg-white relative">
				<div className="container">
					<ul className='absolute top-[39px] left-[20px] z-[99] lg:pt-[30px]'>
						<li className='inline relative text-[16px] font-[400] leading-[24px] text-white hover:text-pink transition-all delay-[0.3s] mr-[15px]'>
							<Link href="/">Home</Link>
						</li>
						<li className='inline relative text-[16px] font-[700] leading-[24px] mr-[15px]'>
							<span className='text-pink'>Solutions</span>
						</li>
					</ul>
				</div>
			</div>
			<section className={`BannerWithParallax banner laptop-landscape:min-h-[0!important] xl:min-h-[0!important] min-h bg-darkBlue pb-[64px] relative wide-screen:pb-[160px] min-h-[560px] tablet:min-h-[550px] md:min-h-[0] desktop:min-h-[550px]  overflow-hidden`}>
				<div className="parallax_element img-box absolute right-0 bottom-[-30px] wide-screen:bottom-[-40px] w-auto xxl-up:h-[565px] h-[510px] wide-screen:h-[820px] desktop:h-[380px] desktop:bottom-[-100px] tablet:h-[350px] phablet:h-[410px] sm:h-[360px] md:hidden">
					{bannerData.RightImg && <Image
						className="w-auto h-full object-contain"
						src={bannerData.RightImg}
						alt="top"
						width="865"
						height="610"
						quality={25}
					/>
					}
				</div>
				<div className="container">
					<div className="flex text-white">
						<div className="max-w-[650px] tablet:max-w-[375px] desktop-mid:max-w-[375px] tablet-mid:max-w-[375px] laptop:max-w-[425px] lg:max-w-[549px] desktop-laptop:max-w-[550px] wide-screen:max-w-[1000px] laptop:mt-[50px] xl-up:pt-[17px] desktop:mt-[50px] laptop-landscape:mt-[70px] lg:mt-[70px] ">
							<h1>
                            {bannerData.leftContent.bannerMainTitle} <span>{bannerData.leftContent.HighlitedText}</span>
							</h1>
							<p className="max-w-[650px] wide-screen:max-w-[870px] wide-screen:my-[40px] my-[32px] xl-up:mt-[26px] xl:my-[24px] lg:my-[25px] desktop:max-w-[400px] laptop-landscape:my-[30px] laptop-landscape:max-w-[630px] ">
                            {bannerData.leftContent.Blurb}
							</p>
							<div className="btn-wrapper">
								<Button_Transparent text={bannerData.leftContent.cta} link={bannerData.leftContent.ctaLink}/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
};

export default BannerWithParallax;