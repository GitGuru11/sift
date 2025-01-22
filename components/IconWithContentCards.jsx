import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Intro from './FullWidthIntro';
import Arrow_Btn from './button/Black_arrowBtn';
import Style from '../styles/three-col-grid.module.css';
import Styles from '../styles/platform/contentWithCard.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const introDetail = {
	PreNormalText: 'Headline about our products',
	bg: 'white',
	blurb:
		'AI-Powered Fraud Decisioning..',
};

const items = [
	{
		icon: '/card.svg',
		title: 'Payment Protection',
		postType: 'BLOG POST',
		date: 'FEB 23 2023',
		content:
			'AI-Powered Fraud Decisioning..',
		link: '/item1',
		linktext: 'LEARN MORE',
	},
	{
		icon: '/card.svg',
		title: 'Content Integrity',
		postType: 'WHITEPAPER',
		date: 'FEB 23 2023',
		content:
			'AI-Powered Fraud Decisioning..',
		link: '/item2',
		linktext: 'LEARN MORE',
	},
	{
		icon: '/card.svg',
		title: 'Account Defense',
		postType: 'BLOG',
		date: 'FEB 23 2023',
		content:
			'AI-Powered Fraud Decisioning..',
		link: '/item3',
		linktext: 'LEARN MORE',
	},
	{
		icon: '/card.svg',
		title: 'Dispute Management',
		postType: 'BLOG',
		date: 'FEB 23 2023',
		content:
			'AI-Powered Fraud Decisioning..',
		link: '/item3',
		linktext: 'LEARN MORE',
	},
];

const FourColumnGrid = ({
	icon,
	title,
	content,
	postType,
	date,
	link,
	linktext,
}) => {
	// function matchHeight(selector) {
	// 	const elements = document.querySelectorAll(selector);

	// 	const setEqualHeight = () => {
	// 		elements.forEach((element) => {
	// 			element.style.height = 'auto';
	// 		});

	// 		const maxHeight = Math.max(
	// 			...Array.from(elements).map((element) => element.offsetHeight),
	// 		);

	// 		elements.forEach((element) => {
	// 			element.style.height = `${maxHeight}px`;
	// 		});
	// 	};

	// 	const handleResize = () => {
	// 		if (window.innerWidth > 595) {
	// 			setEqualHeight();
	// 		} else {
	// 			elements.forEach((element) => {
	// 				element.style.height = 'auto';
	// 			});
	// 		}
	// 	};

	// 	handleResize();
	// 	window.addEventListener('resize', handleResize);
	// }

	// useEffect(() => {
	// 	setTimeout(() => {
	// 	matchHeight('.inner-card');
	// 	matchHeight('.inner-card .img-wrap');
	// 	matchHeight('.inner-card h4');
	// 	matchHeight('.inner-card p');
	// 	}, 300);

	// 	const handleResize = () => {
	// 		matchHeight('.inner-card ');
	// 		matchHeight('.inner-card .img-wrap');
	// 		matchHeight('.inner-card h4');
	// 		matchHeight('.inner-card p');
	// 	};
	// 	window.addEventListener('resize', handleResize);
	// 	window.addEventListener('orientationchange', handleResize);
	// 	return () => {
	// 		window.removeEventListener('resize', handleResize);
	// 		window.removeEventListener('orientationchange', handleResize);
	// 	};
	// });
	return (
		<div
			className={`inner-card relative  flex flex-col duration-500 h-full bg-white overflow-hidden pt-[35px] tablet:px-[25px] tablet:pt-[25px] px-[30px] lg:pb-[50px] desktop:pb-[60px] xl-up:pb-[68px]`}
		>
			<div className={`img-wrap w-[38px]  overflow-hidden mb-[22px] lg:mb-[15px]`}>
				<Image
					src={icon}
					alt={title}
					className="w-full h-full object-contain duration-500"
					height={40}
					width={40}
					quality={100}
				/>
			</div>

			<h4 className=" font-semibold mb-[9px]">{title}</h4>
			<p>{content}</p>
			<div className="mt-9 z-10 absolute bottom-[28px] lg:bottom-[20px] desktop:bottom-[28px]">
				<Arrow_Btn text={linktext} link={link} />
			</div>
		</div>
	);
};

function IconCardsWithCta() {
	const getSlidesToShow = () => {
		if (items.length > 4) {
			return 4;
		} else {
			return items.length;
		}
	};

	const settings = {
		arrows: false,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToScroll: 1,
		slidesToShow: 4,
		adaptiveHeight: true,
		appendDots: (dots) => (
			<div>
				<ul className={`${Style.btnDots}`}>{dots}</ul>
			</div>
		),
		customPaging: function (i) {
			return <button className={Style.slickDotButton} />;
		},
	};

	const responsiveSettings = [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 3,
			},
		},
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
	return (
		<section
			className="IconCardsWithCta relative overflow-hidden into-with-four-cards bg-skyblue"
			id="products"
		>
			<div className="bg-pattern w-[543px] absolute bottom-0 left-0">
				<Image src="/bg-pattern.png" alt="pattern" width={560} height={560} />
			</div>
			<div className="container">
				<Intro {...introDetail} />
				<div
					className={` flex flex-wrap w-[calc(100%+24px)] ml-[-12px]  sm:mt-0 laptop-landscape:mt-[40px]`}
					data-aos="fade-up"
					data-aos-delay="500"
				>
					{items.map((item, index) => (
						<div
							key={index}
							className={`${Styles.card} relative  w-[calc(25%-24px)] small-laptop:w-[calc(33.33%-24px)] small-laptop:mb-[20px] mx-[12px] overflow-hidden border-none border rounded-[16px] desktop:w-[calc(50%-20px)] desktop:mx-[10px] xl:mb-[20px] sm:mb-0 tablet:w-[calc(50%-24px)] phablet:w-[calc(50%-24px)] sm:w-full`}
						>
							<FourColumnGrid {...item} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default IconCardsWithCta;
