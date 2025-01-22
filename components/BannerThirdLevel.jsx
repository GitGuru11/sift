import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BannerThirdLevel() {
	return (
		<>
			<div className="breadcrumbs bg-white relative">
				<div className="container">
					<ul className="absolute top-[39px] left-[20px] sm:z-[9] z-[99] sm:top-[75px] phablet:top-[70px] tablet:top-[70px]">
						<li className="inline relative text-[16px] font-[400] leading-[24px] text-white hover:text-pink transition-all delay-[0.3s] mr-[15px]">
							<Link href="/">Home</Link>
						</li>
						<li className="inline relative text-[16px] font-[700] leading-[24px] mr-[15px]">
							<span className="text-pink">Solutions</span>
						</li>
					</ul>
				</div>
			</div>
			<section className="banner BannerThirdLevel relative bg-darkBlue min-h-[416px] pt-[152px] pb-[101px] laptop-landscape:pb-[125px] laptop-landscape:pt-[75px] lg:pt-[50px] desktop:pt-[52px] desktop:min-h-[316px]">
				<div className="img-box absolute right-0 bottom-0 w-[601px] phablet:w-[350px] tablet:w-[380px] desktop:w-[410px] sm:w-[225px]">
					<Image
						className="w-full"
						src="/bannerThird-pattern.png"
						alt="top"
						width="401"
						height="361"
					/>
				</div>
				<div className="container">
					<div className="flex">
						<div className="max-w-[667px] lg:max-w-[549px] desktop-laptop:max-w-[550px] wide-screen:max-w-[1000px] laptop:mt-[50px] desktop:mt-[50px] laptop-landscape:mt-[70px] lg:mt-[70px] ">
							<h1 className="text-white">
								Sift <span className="text-oceanGreen"> solutions</span>
							</h1>
							<p className="max-w-[900px] wide-screen:max-w-[870px] wide-screen:my-[40px] my-[32px] xl:my-[24px] lg:my-[25px] laptop-landscape:my-[30px] laptop-landscape:max-w-[601px] text-white">
								AI-Powered Fraud Decisioning..
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
