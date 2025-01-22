'use client';
import React from 'react';
import Image from 'next/image';
import Btn_Black from './button/Button_Black';
import Btn_Pink from './button/Button_Pink';
import { Permanent_Marker } from 'next/font/google';
import Link from 'next/link';
const permanentMarker = Permanent_Marker({
	subsets: ['latin'],
	weight: ['400'],
});
const logos = [
	{
		image: '/doordash.png',
		alt: 'doordash',
	},
	{
		image: '/nikon.png',
		alt: 'nikon',
	},
	{
		image: '/remitly.png',
		alt: 'remitly',
	},
	{
		image: '/swan.png',
		alt: 'swan',
	},
	{
		image: '/taptap.png',
		alt: 'taptap',
	},
	{
		image: '/yelp.png',
		alt: 'yelp',
	},
	{
		image: '/doordash.png',
		alt: 'doordash',
	},
	{
		image: '/nikon.png',
		alt: 'nikon',
	},
	{
		image: '/remitly.png',
		alt: 'remitly',
	},
	{
		image: '/swan.png',
		alt: 'swan',
	},
	{
		image: '/taptap.png',
		alt: 'taptap',
	},
	{
		image: '/yelp.png',
		alt: 'yelp',
	},
	{
		image: '/nikon.png',
		alt: 'nikon',
	},
	{
		image: '/remitly.png',
		alt: 'remitly',
	},
];
const BannerWithCards = () => {
	const cardData = [
		{
			number: '80%',
			title: 'AI-Powered Fraud Decisioning..',
		},
		{
			number: '24%',
			title: 'AI-Powered Fraud Decisioning..',
		},
		{
			number: '55%',
			title: 'AI-Powered Fraud Decisioning..',
		},
	];
	return (
		<section
			className={`banner banner_with_cards with_logos min-h bg-white pb-[64px] relative wide-screen:pb-[160px] min-h-[700px] desktop-mid:min-h-[650px] lg:min-h-[600px]`}
		>
			<div className="img-box absolute right-[4px] bottom-0 w-[890px] h-[630px] desktop-mid:w-[600px] desktop-mid:h-[350px] xl:w-[665px] xl:h-[410px]">
				<Image
					className="w-full h-full object-cover"
					src="/banner_background_blue_circle.png"
					alt="top"
					width="865"
					height="610"
				/>
			</div>
			<div className="container">
				<ul className="breadcrumbs flex absolute -top-[88px] laptop-landscape:-top-[-20px] desktop-laptop:-top-[20px] md:-top-[45px] tablet:top-0 z-30 [&>*:last-child>a]:pointer-events-none">
					<li>
						<Link href="/" aria-label="first link">
							<span className="text-black hover:text-pink text-base">Home</span>
						</Link>
						<span className="mx-[5px]">/</span>
					</li>
					<li>
						<Link href="/" aria-label="first link">
							<span className="text-black hover:text-pink text-base">
								Solutions
							</span>
						</Link>
						<span className="mx-[5px]">/</span>
					</li>
					<li>
						<Link href="/" aria-label="first link">
							<span className="text-pink hover:text-pink text-base font-bold">
								Use Case One
							</span>
						</Link>
						<span className="mx-[5px]"></span>
					</li>
				</ul>
				<div className="flex justify-between md:block -mt-[7px]">
					<div className="max-w-[668px] md:max-w-[100%] md:pr-0 tablet:max-w-[549px] desktop-laptop:max-w-[550px] wide-screen:max-w-[1000px] laptop:mt-[50px] desktop:mt-[50px] tablet:pr-[40px] desktop:pr-[40px] laptop-landscape:mt-[70px] lg:mt-[70px] ">
						<h1 className="text-black">
							Headline about{' '}
							<span className={` ${permanentMarker.className}`}>Use case </span>
							one
						</h1>
						<p className="wide-screen:max-w-[870px] wide-screen:my-[40px] mt-[29px] mb-[22px] xl:my-[24px] lg:my-[25px] laptop-landscape:my-[30px] laptop-landscape:max-w-[630px] text-black">
							AI-Powered Fraud Decisioning..
						</p>
						<div className="flex rating_block pt-[23px] mt-[23px] pb-[40px] border-t-[1px] border-black">
							<div className="w-[170px] h-[33px] relative">
								<Image
									className="w-full  object-cover"
									src="/rating.svg"
									alt="top"
									width="157"
									height="33"
								/>
							</div>
							<div className="w-[80%] pl-[8px] text-black">
								<p className="small_font font-bold tracking-[0em!important]">
									“Est tation latine aliquip id, mea ad tale illud definitiones.
									Periculis omitur necessitus eum ad,eripuit minimum stet
									prompta reformidans.”
								</p>
							</div>
						</div>
						<div className="btn-wrapper inline-block  mr-5 xl:mb-2">
							<Btn_Pink text="Speak to an Expert" link="/" />
						</div>
						<div className="btn-wrapper inline-block">
							<Btn_Black text="download resource" link="/" />
						</div>
					</div>
					<div className="h-full min-w-[372px] md:min-w-[100%] tablet:min-w-[272px] desktop:min-w-[272px] w-[24.4%] xl:mt-[50px] laptop-landscape:mt-[50px] -mt-[8px] [&>*:last-child]:mb-0">
						{cardData.map((item, i) => {
							return (
								<div
									key={i}
									className={`card min-h-[140px] xl:min-h-[98px] laptop-landscape:min-h-[98px] my-[24px] overflow-hidden bg-white w-full border-[1px] border-black rounded-[10px] pl-2 flex flex-wrap text-black transition-all relative`}
								>
									{/* <Link
										href="/"
										aria-label="first link"
										className="absolute left-0 top-0 w-full h-full z-10"
									></Link> */}
									<div className="w-3/12 pt-[14px] xl:w-[58px]">
										<div className="relative w-[94px] h-[94px] xl:w-[58px] laptop-landscape:h-[58px] laptop-landscape:w-[58px] wide-screen:h-[123px] wide-screen:w-[123px] xl:h-[58px] bg-amber-400 rounded-full my-auto text-right">
											<div className="absolute top-0 -left-2 h-[150px]">
												<Image
													src="/shadow-yellow-banner.svg"
													width={200}
													height={200}
													alt="shadow-yellow"
												/>
											</div>
											<h3 className="text-black absolute left-1/2 top-[45%] -translate-y-2/4 -translate-x-2/4  inline">
												{' '}
												{item.number}
											</h3>
										</div>
									</div>
									<div className="pl-[24px] pr-[16px] xl:px-[10px] py-[40px] xl:py-[26px] w-9/12 wide-screen:pl-[45px] laptop-landscape:py-[23px] wide-screen:py-[24px]">
										<h4 className="font-semibold ">{item.title}</h4>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				<div className="flex items-center mt-[93px]">
					<div className="max-w-[200px] pr-[28px]">
						<h4>Headline about customer logos</h4>
					</div>
					<div className="w-[calc(100%-200px)] overflow-hidden">
						<div className="flex animate-[slideScroll_30s_linear_infinite]">
							{logos.map((item, i) => {
								return (
									<div className="w-[162px] h-[100px] mx-[20px]" key={i}>
										<Image
											className="max-w-[inherit]"
											src={item.image}
											alt={item.alt}
											width={162}
											height={100}
										/>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BannerWithCards;
