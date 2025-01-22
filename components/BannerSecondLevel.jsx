'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Btn_Black from './button/Button_Black';
import { Permanent_Marker } from 'next/font/google';
import Link from 'next/link';
const permanentMarker = Permanent_Marker({
	subsets: ['latin'],
	weight: ['400'],
});
const BannerSecondLevel = () => {
	return (
		<>
			<div className="breadcrumbs bg-white relative">
				<div className="container">
					<ul className="absolute top-[39px] left-[20px] z-[99] lg:pt-[30px]">
						<li className="inline relative text-[16px] font-[400] leading-[24px] text-black hover:text-pink transition-all delay-[0.3s] mr-[15px]">
							<Link href="/">Home</Link>
						</li>
						<li className="inline relative text-[16px] font-[700] leading-[24px] mr-[15px]">
							<span className="text-pink">About Us</span>
						</li>
					</ul>
				</div>
			</div>
			<section
				className={`banner BannerSecondLevel min-h bg-white  pb-[64px] relative wide-screen:pb-[160px] min-h-[700px] overflow-hidden laptop-landscape:min-h-[520px] xl:min-h-[600px] desktop:min-h-[500px]`}
			>
				<div className="img-box absolute right-0 bottom-[0px] w-auto xxl-up:h-[640px] laptop-landscape:h-[350px!important] h-[610px]  desktop-laptop:h-[500px] wide-screen:h-[820px] desktop:h-[310px] tablet:h-[370px] phablet:h-[320px] sm:h-[240px] xs:h-[192px]">
					<Image
						className="w-full h-full object-cover"
						src="/secondLevalBanner.png"
						alt="top"
						width="865"
						height="610"
					/>
				</div>
				<div className="container">
					<div className="flex">
						<div className="max-w-[620px] xs:mb-[120px] xxl-up:max-w-[65%] lg:max-w-[549px] desktop-laptop:max-w-[550px] wide-screen:max-w-[1000px] laptop:mt-[50px] desktop:mt-[50px] laptop-landscape:mt-[70px] lg:mt-[70px] ">
							<h1 className="text-black">
								Sift helps companies{' '}
								<span className={`text-black ${permanentMarker.className}`}>
									{' '}
									grow{' '}
								</span>{' '}
								securely
							</h1>
							<p className="max-w-[630px] xxl-up:max-w-[65%] wide-screen:max-w-[870px] wide-screen:my-[40px] my-[32px] xl:my-[24px] lg:my-[25px] laptop-landscape:my-[30px] laptop-landscape:max-w-[630px] text-black">
								AI-Powered Fraud Decisioning..
							</p>
							<div className="btn-wrapper">
								<Btn_Black text="view open positions" link="/" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BannerSecondLevel;