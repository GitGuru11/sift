import React, { useState } from 'react';
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
		bannerMainTitle: "Headline about Sift Brand Guidelines",
		Blurb: "AI-Powered Fraud Decisioning..",
		cta: "download media kit",
		ctaLink: "/",
	},
	RightImg: '/BrandCenter/BannerImage.png',
	RightVideo: ''
}

const BannerWithVideo = () => {
	return (
		<>
			<div className="breadcrumbs bg-white relative">
				<div className="container">
					<ul className='absolute top-[39px] left-[20px] z-[99] lg:pt-[30px]'>
						<li className='inline relative text-[16px] font-[400] leading-[24px] text-white hover:text-pink transition-all delay-[0.3s] mr-[15px]'>
							<Link href="/">Home</Link>
						</li>
						<li className='inline relative text-[16px] font-[700] leading-[24px] mr-[15px]'>
							<span className='text-pink'>Platform</span>
						</li>
					</ul>
				</div>
			</div>
			<section className={`banner min-h bg-black pb-[64px] relative wide-screen:pb-[160px] laptop-landscape:min-h-[0] min-h-[700px] tablet:min-h-[550px] desktop:min-h-[550px] phablet:min-h-[420px] xs:min-h-[800px] sm:min-h-[800px] overflow-hidden`}>
				<div className="img-box absolute right-[70px] bottom-[3px] tablet:bottom-auto tablet:top-0 w-auto xxl-up:h-[576px] h-[576px] wide-screen:h-[820px] desktop:h-[430px] tablet:h-[440px] phablet:h-[410px] phablet:opacity-[0.5] sm:h-[360px]">
					{bannerData.RightImg && <Image
						className="w-auto h-full object-contain"
						src={bannerData.RightImg}
						alt="top"
						width="865"
						height="610"
					/>
					}
					{bannerData.RightVideo !== '' &&  <video width="640" height="360" controls>
						<source src={bannerData.RightVideo} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
					}
				</div>
				<div className="container">
					<div className="flex">
						<div className="max-w-[750px] tablet:max-w-[375px] desktop-mid:max-w-[375px] tablet-mid:max-w-[375px] laptop:max-w-[425px] lg:max-w-[549px] desktop-laptop:max-w-[550px] wide-screen:max-w-[1000px] laptop:mt-[50px] xl-up:pt-[17px] desktop:mt-[50px] laptop-landscape:mt-[70px] lg:mt-[70px] ">
							<h1 className="text-black">
                            {bannerData.leftContent.bannerMainTitle}
							</h1>
							<p className="max-w-[650px] wide-screen:max-w-[870px] wide-screen:my-[40px] my-[32px] xl-up:mt-[26px] xl:my-[24px] lg:my-[25px] desktop:max-w-[400px] laptop-landscape:my-[30px] laptop-landscape:max-w-[630px] text-black">
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

export default BannerWithVideo;