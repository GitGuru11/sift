import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react';
import ArrowBtn from './button/Black_arrowBtn';
import Style from '../styles/platform/contentWithCard.module.css';

const ContentWithCardsData = [
	{
		title: 'Headline about other use cases',
		blurb:
			'AI-Powered Fraud Decisioning..',
	},
	{
		cards: [
			{
				imgpath: '',
				heading: 'Use case one',
				subHeading:
					'AI-Powered Fraud Decisioning..',
				ctaText: 'LEARN MORE',
				ctaLink: '/',
			},
			{
				imgpath: '',
				heading: 'Use case one',
				subHeading:
					'AI-Powered Fraud Decisioning..',
				ctaText: 'LEARN MORE',
				ctaLink: '/',
			},
			{
				imgpath: '',
				heading: 'Use case one',
				subHeading:
					'AI-Powered Fraud Decisioning..',
				ctaText: 'LEARN MORE',
				ctaLink: '/',
			},
			{
				imgpath: '',
				heading: 'Use case one',
				subHeading:
					'AI-Powered Fraud Decisioning..',
				ctaText: 'LEARN MORE',
				ctaLink: '/',
			},
		],
	},
];

function ContentWithCards() {
    var sectionData = ContentWithCardsData
    // console.log(sectionData)
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
					translate = (elementTop - 200) / 3.5;
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
	  <section className="content-with-cards bg-white z-10 overflow-hidden">
			<div className="img-box bg-graphic absolute bottom-0 h-[350px] left-0 w-[540px]  laptop:w-[500px] desktop:w-[500px] laptop-landscape:w-[480px!important] wide-screen:top-[140px!important] lg:hidden">
				{/* <Image
					src="/backround_content_with_card_shapes.png"
					className="relative"
					alt="bg-vector"
					width={565}
					height={336}
				/> */}
			  <div className="pills_animate w-full h-full absolute bottom-0 right-0">
				  <Image
					  className="w-full"
					  src="/pattern_2_outline.svg"
					  alt="banner_pills"
					  width="540"
					  height="800"
				  />
			  </div>
			  <div className="stroke_animate absolute  w-full h-full bottom-0 right-0">
				  <Image
					  className="w-full"
					  src="/pattern_2_pills.svg"
					  alt="banner_stroke"
					  width="540"
					  height="800"
				  />
			  </div>
			  <div className="dot_animate absolute  w-full h-full bottom-0 right-0">
				  <Image
					  className="w-full"
					  src="/pattern_2_dots.svg"
					  alt="banner_dots"
					  width="540"
					  height="800"
				  />
			  </div>
			</div>
			<div className="container">
				<div className="wrapper flex flex-wrap w-[calc(100%+46px)] -ml-[27px] lg:w-[100%] lg:mx-0 desktop:w-[100%] desktop:mx-0">
					<div className="col-left w-[calc(49%-54px)] mx-[27px] lg:w-[100%] lg:mx-0 lg:pb-[30px] desktop:w-[100%] desktop:mx-0 desktop:pb-[30px]">
						<div className="content">
							<h2>{sectionData[0].title}</h2>
							<p className="mt-[16px] w-[88%]">{sectionData[0].blurb}</p>
						</div>
					</div>
					<div
						className="col-right w-[calc(51%-54px)] ml-[26px] mr-[28px] lg:w-[100%] lg:mx-0 desktop:w-[100%] desktop:mx-0"
						data-aos="fade-up"
						data-aos-delay="300"
					>
						<div className="card_wrap w-full grid gap-[24px] grid-cols-2 md:grid-cols-1">
							{sectionData[1].cards.map((item, i) => {
								return (
									<div
										key={i}
										className={`${Style.card} relative bg-white p-[32px]  border-black rounded-[16px]`}
									>
										<Link className="emptyLink" href="/homepage">
											.
										</Link>
										{/* <div className="icon-wrap mb-[18px]">
                                            <Image src={item.imgpath } alt='icon' width={40} height={40} />
                                        </div> */}
										<h4 className="mb-[9px]">{item.heading}</h4>
										<p>{item.subHeading}</p>
										<div className="btn mt-[22px]">
											<ArrowBtn text={item.ctaText} link="/" />
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContentWithCards
