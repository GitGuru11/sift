'use client';

import React from 'react';
import Image from 'next/image';
import Btn_Pink from './button/Button_Pink';

const PlatformContentWithImage = () => {
    var layout = '2'

	return (
		<section className="content-with-image   bg-darkBlue  overflow-x-clip laptop-landscape:!pb-[20px] xxl-up:py-[140px]">
			<div className="container">
				<div className={`flex flex-wrap items-center md:block ${layout == '2'?'flex-row-reverse':''}`}>
                <div className={`w-[42%] ${layout == '2'?'pl-[18px] mb-[26px]':'mb-[60px]'} wide-screen:w-[50%] md:w-full md:pl-0  z-20`}>
						<h2 className="text-white">
							Sift Trust and Safety{' '}
							<span className=" text-oceanGreen">Platform </span>
						</h2>
                        <p className={`text-white font-normal leading-[27px] ${layout == '2'?'mt-[16px]':'mt-[24px]'} mb-[40px] lg-up:pr-8`}>
							AI-Powered Fraud Decisioning..
						</p>
						{/* <div className="inline-block mr-5 xl:mb-2">
							<Btn_Transparent text="PLATFORM OVERVIEW" link="/" />
						</div> */}
						{/* <div className="btn-wrapper inline-block">
							<Btn_Pink text="EXPLORING PRICING" link="/" />
						</div> */}
					</div>

					<div className="w-[58%] relative wide-screen:w-[50%] md:w-full z-10 min-h-[562px] laptop-landscape:min-h-[430px] tablet:min-h-[375px] desktop:min-h-[375px] laptop:min-h-[375px] md:min-h-[300px]">
						<div className={`z-10 md:w-full w-full h-full absolute ${layout == '2'?'right-0':'-right-[60px] '} sm:right-0 phablet:right-[35px] desktop:right-[0] laptop:right-[0]`}>
							<div className="bg-graphic absolute top-[5px] right-[30px] wide-screen:top-[75px] wide-screen:right-[85px] desktop:right-[0] lg:right-[0] w-[1062px] h-[1000px] -z-[1]">
								<div className='absolute w-full h-full'  data-aos="fade-up"
									data-aos-delay="500">
								<Image
                                        className={`scale-x-[1.6] scale-y-[1.6] w-full object-cover desktop-laptop:scale-x-[1.2] desktop-laptop:scale-y-[1.2]  wide-screen:w-[95%] wide-screen:top-[71%] wide-screen:right-[51.2%] wide-screen:scale-x-[2.2] wide-screen:scale-y-[2.2] laptop-landscape:scale-x-[1.2] laptop-landscape:scale-y-[1.2] lg:scale-x-[0.75] laptop-landscape:w-[100%] lg:scale-y-[0.75] absolute ${layout == '2'?'top-[44%] right-[33%]':'top-[42%] right-[31%]'} laptop-landscape:top-[112px] laptop-landscape:right-[134px] desktop-laptop:top-[108px] tablet-mid:top-[118px] desktop-laptop:right-[110px]  tablet:-top-[17.5%] md:-top-[23%] tablet:-right-[11.5%] phablet:-right-[11.5%] sm:-right-[14%]`}
									src="/shape_large_blue.png"
									alt="graphic"
									width={1000}
									height={1000}
								/>
								</div>
								<Image
									className={`mx-auto z-10 wide-screen:-top-[154px] wide-screen:right-0 sm:right-0 wide-screen:w-[700px] absolute ${layout == '2'?'-top-[3px] right-[71px]':'-top-[24px] right-[45px]'} tablet:top-[40px] md:top-[-14px] desktop-laptop:right-[45px] desktop:w-[39%] laptop:w-[39%] tablet-mid:w-[37%] laptop-landscape:w-[39%] tablet:right-[26px] phablet:right-[26px] lg:w-[275px]`}
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

export default PlatformContentWithImage;
