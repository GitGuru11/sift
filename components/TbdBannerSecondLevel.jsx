import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Btn_Pink from './button/Button_Pink';
import { Permanent_Marker } from 'next/font/google';
const permanentMarker = Permanent_Marker({
	subsets: ['latin'],
	weight: ['400'],
});
const PlatformBannerSecondLevel = () => {
	return (
		<>
			<div className="breadcrumbs bg-white relative tablet:pt-[70px] md:pt-[50px] ">
				<div className="container">
					<ul className="absolute top-[44px] left-[20px] z-[999] lg:z-[9]">
						<li className="inline relative text-[16px] font-[400] leading-[24px] text-black hover:text-pink transition-all delay-[0.3s] mr-[15px]">
							<Link href="/">Home</Link>
						</li>
						<li className="inline relative text-[16px] font-[700] leading-[24px] mr-[15px]">
							<span className="text-pink">Careers</span>
						</li>
					</ul>
				</div>
			</div>
			<section
				className={`banner BannerSecondLevel min-h bg-white pb-[64px] relative wide-screen:pb-[160px] min-h-[700px] laptop-landscape:min-h-[600px] tablet:min-h-[550px] desktop:min-h-[550px] phablet:min-h-[760px] xs:min-h-[800px] sm:min-h-[800px] overflow-hidden`}
			>
				<div className="img-box absolute right-0 bottom-[3px]  laptop-landscape:top-0 laptop-landscape:bottom-auto tablet:bottom-auto tablet:top-0 desktop:bottom-auto desktop:top-0 w-auto xxl-up:h-[720px] h-[701px] laptop-landscape:h-[540px] wide-screen:h-[820px] desktop:h-[430px] tablet:h-[440px] phablet:h-[410px] sm:h-[360px]">
					<Image
						className="w-auto h-full object-contain"
						src="/Sift_career_banner_image.png"
						alt="Sift_career_banner_image"
						width="865"
						height="610"
					/>
				</div>
				<div className="container">
					<div className="flex">
						<div className="max-w-[650px] tablet:max-w-[375px] desktop-mid:max-w-[375px] tablet-mid:max-w-[375px] laptop:max-w-[425px] lg:max-w-[549px] desktop-laptop:max-w-[550px] wide-screen:max-w-[1000px] laptop:mt-[50px] xl-up:pt-[17px] desktop:mt-[50px] laptop-landscape:mt-[70px] tablet:mt-[70px] md:mt-[45px]">
							<h1 className="text-black">
								About life &
								<span className={`text-black ${permanentMarker.className}`}>
									{' '}
									opportunities{' '}
								</span>{' '}
								at Sift
							</h1>
							<p className="max-w-[650px] wide-screen:max-w-[870px] wide-screen:my-[40px] my-[32px] xl-up:mt-[26px] xl:my-[24px] lg:my-[25px] desktop:max-w-[400px] laptop-landscape:my-[30px] laptop-landscape:max-w-[630px] text-black">
								AI-Powered Fraud Decisioning..
							</p>
							<div className="btn-wrapper">
								<Btn_Pink text="view open positions" link="/" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PlatformBannerSecondLevel;