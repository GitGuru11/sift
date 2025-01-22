import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Intro from './FullWidthIntro';
import Arrow_Btn from './button/Arrow_Btn';
import Style from '../styles/three-col-grid.module.css';
import Styles from '../styles/platform/contentWithCard.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const introDetail = {
	PreNormalText: 'Headline about Fraud & Risk',
	bg: 'black',
	blurb:
		'AI-Powered Fraud Decisioning..',
};

const items = [
	{
		subText: 'chapter one',
		icon: '/card.svg',
		title: 'Sources of online fraud',
		postType: 'BLOG POST',
		date: 'FEB 23 2023',
		content: 'AI-Powered Fraud Decisioning..',
		link: '/item1',
		linktext: 'begin chapter',
	},
	{
		subText: 'chapter two',
		icon: '/card.svg',
		title: 'Impact of fraud',
		postType: 'WHITEPAPER',
		date: 'FEB 23 2023',
		content: 'AI-Powered Fraud Decisioning..',
		link: '/item2',
		linktext: 'begin chapter',
	},
	{
		subText: 'chapter three',
		icon: '/card.svg',
		title: 'Signs of fraud in shipping',
		postType: 'BLOG',
		date: 'FEB 23 2023',
		content: 'AI-Powered Fraud Decisioning..',
		link: '/item3',
		linktext: 'begin chapter',
	},
	{
		subText: 'chapter four',
		icon: '/card.svg',
		title: 'Dispute Management',
		postType: 'BLOG',
		date: 'FEB 23 2023',
		content: 'AI-Powered Fraud Decisioning..',
		link: '/item3',
		linktext: 'begin chapter',
	},
];

const FourColumnGrid = ({
	subText,
	icon,
	title,
	content,
	postType,
	date,
	link,
	linktext,
}) => {
	function matchHeight(selector) {
		const elements = document.querySelectorAll(selector);

		const setEqualHeight = () => {
			elements.forEach((element) => {
				element.style.height = 'auto';
			});

			const maxHeight = Math.max(
				...Array.from(elements).map((element) => element.offsetHeight),
			);

			elements.forEach((element) => {
				element.style.height = `${maxHeight}px`;
			});
		};

		const handleResize = () => {
			if (window.innerWidth > 595) {
				setEqualHeight();
			} else {
				elements.forEach((element) => {
					element.style.height = 'auto';
				});
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);
	}

	useEffect(() => {
		setTimeout(() => {
			matchHeight('.inner-card');
			matchHeight('.inner-card p');
			}, 300);
		matchHeight('.card-iner');
		const handleResize = () => {
			matchHeight('.inner-card');
			matchHeight('.inner-card p');
		};
		window.addEventListener('resize', handleResize);
		window.addEventListener('orientationchange', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('orientationchange', handleResize);
		};
	});
	return (
		<div
			className={`bg-black  inner-card relative   flex flex-col duration-500 h-full overflow-hidden rounded-[16px] pt-[27px] px-[30px] lg:pb-[50px] desktop:pb-[60px] xl-up:pb-[92px]`}
		>
			<Link href="/" className="emptyLink">
				.
			</Link>
			<span className="!text-yello text-[14px] wide-screen:text-[18px] fontInter font-[700] inline-block uppercase mb-[6px]">
				{subText}
			</span>
			<h4 className=" font-semibold mb-[9px]">{title}</h4>
			<p>{content}</p>
			<div className="mt-9 z-10 absolute bottom-[28px]  lg:bottom-[20px] desktop:bottom-[28px]">
				<Arrow_Btn text={linktext} redirection={link} />
			</div>
		</div>
	);
};

function IntroWithFourCards() {
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
			className={`Intro-with-four-cards relative overflow-hidden into-with-four-cards bg-black ${Style.bg_black} padding-medium`}
			id="products"
		>
			<div className="bg-pattern w-[543px] absolute bottom-0 left-0">
				<Image
					src="/pattern-col-four-card.png"
					alt="pattern"
					width={560}
					height={560}
				/>
			</div>
			<div className="container">
				<Intro {...introDetail} />
				{/* <div className="wrapper flex flex-wrap w-[calc(100%+24px)] -ml-[12px] xl-up:mt-[80px] z-10"> */}
				<div
					className={`${Style.col_four} ${Style.ColFourCard} w-[calc(100%+24px)] ml-[-10px] mt-[60px] sm:mt-0 laptop-landscape:mt-[40px]`}
				>
					<Slider {...settings}>
						{items.map((item, index) => (
							<div
								key={index}
								className={`${Styles.card} relative  w-[calc(25%)] transition-all  duration-300 border-[2px] hover:outline hover:outline-2 hover:!shadow-white-shadow hover:outline-white rounded-[16px] desktop:w-[calc(50%-24px)] xl:mb-5 sm:mb-0 tablet:w-[calc(50%-24px)] phablet:w-[calc(50%-24px)] sm:w-full`}
								data-aos="fade-up"
								data-aos-delay="500"
							>
								<FourColumnGrid {...item} />
							</div>
						))}
					</Slider>
				</div>
				{/* </div> */}
			</div>
		</section>
	);
}

export default IntroWithFourCards;
