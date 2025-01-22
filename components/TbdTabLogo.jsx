"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Btn_Transparent from "./button/Button_Transparent";
import Btn_Black from './button/Button_Black';
import Style from "../styles/logo-nav-tab.module.css";
import IntroWithCta from "./IntroWithCta"
import Black_ArrowBtn from "./button/Black_arrowBtn";
import Black_TextBtn from "./button/Button_BlackText";
const Data = [
	{
		logo: '/logos/doordash.svg',
		src: '/',
		img: '/tab-image.svg',
		content: {
			quotationsImg: '/logos/quotation-mark-blue.png',
			title:
				'AI-Powered Fraud Decisioning..”',
			name: 'Connie Robertson',
			occupation: 'CMO at Swan Bitcoin',
			cta: 'Read customer story',
			defualtCta: 'defualt',
		},
		imgWithContent: {
			img: '/girl_yellow.png',
			count: [
				{
					num: '+85',
					discription: 'AI-Powered Fraud Decisioning..',
				},
				{
					num: '5x',
					discription: 'AI-Powered Fraud Decisioning..',
				},
			],
		},
	},
	{
		logo: '/logos/yelp.svg',
		src: '/',
		img: '/tab-image.svg',
		content: {
			quotationsImg: '/logos/quotation-mark-blue.png',
			title:
				' 2AI-Powered Fraud Decisioning..”',
			name: 'Connie Robertson',
			occupation: 'CMO at Swan Bitcoin',
			cta: 'Read customer story',
			defualtCta: 'defualt',
		},
		imgWithContent: {
			img: '/dummy-img.png',

			count: [
				{
					num: '+85',
					discription: 'AI-Powered Fraud Decisioning..',
				},
				{
					num: '5x',
					discription: 'AI-Powered Fraud Decisioning..',
				},
			],
		},
	},
	{
		logo: '/logos/hellofresh.svg',
		src: '/',
		img: '/tab-image.svg',
		content: {
			quotationsImg: '/logos/quotation-mark-blue.png',
			title:
				'3AI-Powered Fraud Decisioning..”',
			name: 'Connie Robertson',
			occupation: 'CMO at Swan Bitcoin',
			cta: 'Read customer story',
			defualtCta: 'defualt',
		},
		imgWithContent: {
			img: '/girl_yellow.png',

			count: [
				{
					num: '+85',
					discription: 'AI-Powered Fraud Decisioning..',
				},
				{
					num: '5x',
					discription: 'AI-Powered Fraud Decisioning..',
				},
			],
		},
	},
	{
		logo: '/logos/nikon.svg',
		src: '/',
		img: '/tab-image.svg',
		content: {
			quotationsImg: '/logos/quotation-mark-blue.png',
			title:
				'AI-Powered Fraud Decisioning..”',
			name: 'Connie Robertson',
			occupation: 'CMO at Swan Bitcoin',
			cta: 'Read customer story',
			defualtCta: 'defualt',
		},
		imgWithContent: {
			img: '/dummy-img.png',
			count: [
				{
					num: '+85',
					discription: 'AI-Powered Fraud Decisioning..',
				},
				{
					num: '5x',
					discription: 'AI-Powered Fraud Decisioning..',
				},
			],
		},
	},
];
export default function LogoNavTab() {
  const [activeTab, setActiveTab] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const centerActiveLink = () => {
      const container = scrollContainerRef.current;
      const activeLink = container.querySelector('.active-link');
      if (container && activeLink) {
        const containerWidth = container.clientWidth;
        const activeLinkWidth = activeLink.clientWidth;
        const targetScrollLeft = activeLink.offsetLeft - (containerWidth - activeLinkWidth) / 2;
        const frames = 60;
        let currentFrame = 0;
        const animateScroll = () => {
          const easing = easeInOutQuad(currentFrame / frames);
          container.scrollLeft =
            container.scrollLeft + (targetScrollLeft - container.scrollLeft) * easing;

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
    const easeInOutQuad = t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
    centerActiveLink();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [activeTab]);

  const handleTabClick = index => {
    setActiveTab(index);
  };


  const intro = {
    HighLightedText: "Our Impact",
    normalText: "on customers success across industries ",
    bg: 'white',
    link: '/',
    cta: 'View all customer stories'
  }

  return (
		<section
		  className={`TabLogo tab-with-logo bg-skyblue img-text-tab ${Style.imgTextTab} ${Style.logoTab}`}
			id="successes"
		>
			<div className="container">
				<IntroWithCta {...intro} />
				<div className="tab-wrap lg:mt-0 mt-[82px]  laptop-landscape:mt-[60px]">
					<div className="links">
						<div className={`text-center mx-auto  sidesBorder`} data-aos="fade">
							<div
								className={`${
									Style.tab_nav_wrap
								} nav-wrap relative lg-up:flex lg-up:w-full lg:whitespace-nowrap lg:overflow-x-scroll sidesBorder z-10 ${
									Data[activeTab].index !== ' ' ? 'LinkBorder ' : ''
								} `}
								ref={scrollContainerRef}
							>
								{Data.map((data, index) => (
									<div
										className={`tab-nav ${
											Style.group
										} eyebrow-text text-white relative inline-block z-10 w-full tablet:max-w-[244px] md:max-w-[160px] lg-up:hover:opacity-[1] lg-up:opacity-[0.4] lg-up:w-1/4 cursor-pointer text-[16px] px-[8px] laptop-landscape:pb-[18px] pb-[27px] ${
											index === activeTab ? Style.activeLink : ''
										}  ${activeTab === 0 ? Style.tabNav : ''} ${
											Style.tabNavLink
										} ${index === activeTab ? 'active-link' : ''}`}
										key={index}
										onClick={() => handleTabClick(index)}
									>
										<div
											className={`lg:opacity-[0.4] lg:group-hover:opacity-[1] mx-auto ${Style.logoWrap}`}
										>
											<Image
												className={Style.logo}
												width={220}
												height={500}
												src={data.logo}
												alt="logo"
											/>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="tab-content mt-[40px] laptop-landscape:mt-[30px]">
						<div className="flex flex-wrap rounded-[24px] overflow-hidden">
							<div className="content-wrap w-[49%] lg:w-full  bg-white py-[48px] laptop-landscape:pb-[30px] px-[41px] lg:p-[25px]">
								<div className="quotation laptop-landscape:w-[40px] laptop-landscape:h-[40px] w-[64px] h-[64px]">
									<Image
										className="w-full h-full"
										width={64}
										height={64}
										alt="quotationsImg"
										src={Data[activeTab].content.quotationsImg}
									/>
								</div>
								<h3 className="text-black tabHeading font-[600] mt-4 mb-[25px]">
									{Data[activeTab].content.title}
								</h3>
								<h4 className=" text-black mb-[3px]">
									{Data[activeTab].content.name}
								</h4>
								<span className="text-black text-[18px]">
									{Data[activeTab].content.occupation}
								</span>
								<div className="div lg-up:mt-[37px] flex items-center flex-wrap">
									<div className="mt-5 inline-block mr-4 md:min-w-[230px]">
										<Btn_Black text={Data[activeTab].content.cta} link="/" />
									</div>
									<div className="mt-5 inline-block">
										<Black_ArrowBtn
											text={Data[activeTab].content.defualtCta}
											link="/"
										/>
									</div>
								</div>
							</div>
							<div
								className={`w-[51%] bg-amber-400 lg:w-full mx-auto ${Style.imgWrap}`}
							>
								<div
									className={`relative h-[400px] sm:h-[190px]  laptop-landscape:h-[360px] wide-screen:h-[604px]`}
								>
									<div className="absolute w-[300px] xl:w-[220px] h-auto top-[57%] left-[46%] -translate-x-1/2 -translate-y-1/2 z-[1] ml-[5px]">
										<Image
											src="/doordash2.png"
											alt="doordash"
											width={350}
											height={150}
										/>
									</div>
									<div
										className={` absolute object-cover h-full ${Style.bgImgWrap}`}
									>
										<Image
											className={`w-full h-full object-contain`}
											width={632}
											height={453}
											alt="image"
											src={Data[activeTab].imgWithContent.img}
											quality={75}
										/>
									</div>
								</div>
								<div
									className={`bg-darkBlue laptop-landscape:h-[calc(100%-360px)] h-[calc(100%-400px)] wide-screen:h-[calc(100%-604px)] ${Style.counter}`}
								>
									<div className="flex pl-[40px] md:px-8 md:gap-7 justify-between sm:bg-darkBlue">
										{Data[activeTab].imgWithContent.count.map((data, index) => (
											<div
												key={index}
												className="py-[21px] lg-up:pr-[21px] sm:w-full w-1/2 countWithText pd:pr-0 pd:w-full pd:mb-[10px] pd:last-of-type:mb-[0]"
											>
												<h2 className="text-yello wide-screen:text-[115px] mb-[4px]">
													{data.num}
												</h2>
												<p className="text-white">{data.discription}</p>
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
