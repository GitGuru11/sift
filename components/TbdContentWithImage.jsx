'use client';

import React from 'react';
import Image from 'next/image';
import Btn_Pink from './button/Button_Pink';
import Btn_Transparent from './button/Button_Transparent';

const TbdContentWithImage = () => {
	return (
		<section className="content-with-image bg-grad-black-to-blue overflow-x-clip overflow-visible wide-screen:pt-[280px] pb-0 wide-screen:pb-[160px]">
			<div className="container">
				<div className="flex flex-wrap items-center md:block">
					<div className="w-[43%] wide-screen:w-[50%] md:w-full tablet:w-[50%] desktop:w-[50%] md:mb-[60px] z-20">
						<h2 className="text-white">
							Sift Trust and Safety{' '}
							<span className=" text-oceanGreen">Platform </span>
						</h2>
						<p className="text-white font-normal leading-[27px] mt-[24px] mb-[40px] lg-up:pr-8">
							AI-Powered Fraud Decisioning..
						</p>
						<div className="inline-block  xl:mb-2">
							<Btn_Transparent text="PLATFORM OVERVIEW" link="/" />
						</div>
						<div className="btn-wrapper inline-block">
							<Btn_Pink text="EXPLORING PRICING" link="/" />
						</div>
					</div>
					<div className="w-[57%] wide-screen:w-[50%] md:w-full tablet:w-[50%] desktop:w-[50%] z-10 min-h-[562px] tablet:min-h-[375px] laptop-landscape:min-h-[394px] desktop:min-h-[394px] laptop:min-h-[390px] md:min-h-[276px]">
						<div className="z-10 md:w-full w-full h-full absolute -right-[60px] lg:right-[0] desktop:right-[0] laptop:right-[0]">
							<div className="bg-graphic absolute top-[5px] right-[30px] desktop:right-[0] lg:right-[0] w-[1062px] h-[1000px] -z-[1]">
								<div
									className="absolute w-full h-full"
									data-aos="fade-up"
									data-aos-delay="500"
									data-aos-duration="1000"
								>
									<Image
										className="scale-x-[1.6] scale-y-[1.6] w-full object-cover desktop-laptop:scale-x-[1.2] desktop-laptop:scale-y-[1.2] wide-screen:top-[75%] wide-screen:right-[55.2%] wide-screen:scale-x-[2.2] wide-screen:scale-y-[2.2] laptop-landscape:scale-x-[1.2] laptop-landscape:scale-y-[1.2] lg:scale-x-[0.75] laptop-landscape:w-[100%] lg:scale-y-[0.75] absolute top-[42%] right-[31%] laptop-landscape:top-[108px] laptop-landscape:right-[120px] desktop-laptop:top-[108px] desktop-laptop:right-[88px]  tablet:-top-[17.5%] md:-top-[23%] lg:-right-[11.5%]"
										src="/shape_large_blue.png"
										alt="graphic"
										width={1000}
										height={1000}
									/>
								</div>
								<Image
									className="mx-auto z-10  wide-screen:-top-[154px] wide-screen:right-0 wide-screen:w-[800px] absolute -top-[24px] tablet:top-[40px] md:top-[-14px] right-[45px] desktop-laptop:right-[15px] desktop:w-[39%] laptop:w-[39%] laptop-landscape:w-[39%] lg:right-[26px] lg:w-[275px]"
									src="/circular-tabs.png"
									alt="image"
									width={575}
									height={565}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TbdContentWithImage;
