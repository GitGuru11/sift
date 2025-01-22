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
const BannerWithQuotesBlock = () => {
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
			className={`banner banner_with_cards min-h bg-white pb-[64px] relative wide-screen:pb-[160px] min-h-[700px] desktop-mid:min-h-[650px] lg:min-h-[600px]`}
		>
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
						<div className="btn-wrapper inline-block  mr-5 xl:mb-2">
							<Btn_Pink text="Speak to an Expert" link="/" />
						</div>
						<div className="btn-wrapper inline-block">
							<Btn_Black text="download resource" link="/" />
						</div>
					</div>
					<div className="w-[50%] relative">
						<div className="w-full img-box absolute right-[4px] bottom-0">
							<Image
								className="w-full h-full object-cover"
								src="/banner_graphic.png"
								alt="top"
								width="865"
								height="610"
							/>
						</div>
						<div className="rating_block absolute amber-400 p-[24px] right-[0px] bottom-[0px]">
							<div className="w-[32px] h-[32px] relative">
								<Image
									className="w-full  object-cover"
									src="/logos/quotation-mark.svg"
									alt="top"
									width="32"
									height="32"
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
					</div>
				</div>
			</div>
		</section>
	);
};

export default BannerWithQuotesBlock;
