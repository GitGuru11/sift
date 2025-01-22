'use client';

import React from 'react';
import Image from 'next/image';
import Btn_Pink from './button/Button_Pink';

const ContentWithImage = () => {
	return (
		<section className="content-with-image  bg-black pb-0 overflow-x-clip laptop-landscape:pb-[30px]">
			<div className="container">
				<div className="flex flex-wrap items-center md:block">
					<div className="w-[43%] laptop-landscape:w-[48%] wide-screen:w-[45%] tablet:w-[50%] desktop:w-[50%] tablet-mid:w-[46%] md:w-full md:mb-[30px]  z-20">
						<h2 className="text-white">
							The <span className="text-emerald-300">Difference </span>Sift
							makes
						</h2>
						<p className="text-white font-normal mt-[24px] mb-[40px] laptop-landscape:pr-[10px]">
							AI-Powered Fraud Decisioning..
						</p>
						<div className="btn-wrapper">
							<Btn_Pink text="Start Your Risk Assessment Now" link="/" />
						</div>
					</div>

					<div className="w-[57%] laptop-landscape:w-[52%] wide-screen:w-[55%] tablet:w-[50%]  desktop:w-[50%] md:w-full z-10 min-h-[562px] tablet:min-h-[347px] laptop-landscape:min-h-[500px] desktop-laptop:min-h-[475px] md:min-h-[274px]">
						<div className="z-10 md:w-full w-full h-full absolute -right-[60px] lg:right-[21px] desktop:right-[0]">
							<div className="bg-graphic with-img absolute top-[20px] right-[30px] desktop:-right-[70px]  lg:right-[0] w-[870px]  desktop:w-[672px] h-[1000px] -z-[1]">
								<div
									className="absolute w-full h-full"
									data-aos="fade-up"
									data-aos-delay="300"
									data-aos-duration="1000"
								>
									<Image
										className="scale-x-[1.53] scale-y-[1.53] top-[181px] right-[175px] desktop:scale-[1.43] laptop:scale-[1.23]  laptop-landscape:scale-[1.2] lg:scale-[0.75] absolute desktop:top-[11.6%] desktop:right-[20%] laptop:top-[8.5%] laptop:right-[9.2%] laptop-landscape:top-[12.5%] lg:-top-[11.5%] lg:-right-[16.5%]"
										src="/background_blue_with_yellow_boreder.png"
										alt="graphic"
										width={1000}
										height={1000}
									/>
								</div>
								<Image
									className="mx-auto img z-10 absolute -top-[9px] max-w-[584px] right-[52px] xxl-up:right-[55px] xxl-up:-top-[7px] desktop:right-[70px] desktop:max-w-[415px] laptop:right-[70px] laptop:max-w-[450px] laptop-landscape:max-w-[450px] laptop:top-[32px]] laptop:top-[32px] lg:right-[22px] lg:top-[25px] lg:w-[31%] "
									src="/computer_man.png"
									alt="image"
									width={665}
									height={645}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);

};

export default ContentWithImage;
