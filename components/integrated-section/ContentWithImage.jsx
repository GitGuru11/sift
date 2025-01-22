'use client';

import React from 'react';
import Image from 'next/image';
// import Button_Pink from '../button/Button_Pink';
import DynamicButton from '../global-components/Buttons';

const ContentWithImage = (props) => {
	let data = props.items;
	return (
		<section id={data.id ? data.id : ''} className={`${data.gatedComponent? 'GatedHide' : ''} ${data.imagePosition == 'right' ? '' : 'flex-row-reverse'} ContentWithImage pb-0 overflow-x-clip laptop-landscape:pb-[30px] ${data.background} ${data.padding} ${data.classes} lg:pt-[70px]`}>
			
			{
				data?.background == 'custom' && (
					<div className="custom-bg-img absolute left-0 top-[0px] w-full h-full ">
						{data?.backgroundImage && data?.backgroundImage?.sourceUrl && <Image className="w-full h-full object-cover" src={data?.backgroundImage?.sourceUrl} alt={data?.backgroundImage?.altText} width="1200" height="1200" />}
					</div>
				)
			}
			<div className="container">
				<div className="flex flex-wrap items-center md:block row-reverse xl-up:mt-[80px]">
					<div className="w-2/5 w-[43%] laptop-landscape:w-[48%] wide-screen:w-[45%] tablet:w-[47%] tablet-mid:w-[46%] md:w-full mb-[30px] sm:mb-[50px] z-20">
						{data?.title && (
							<h2
								className="text-white  mb-[24px] md:mb-[15px]"
								dangerouslySetInnerHTML={{ __html: data?.title }}
							/>
						)}
						{data?.body && (
							<div className="text-wrap text-white font-normal mb-[40px] laptop-landscape:pr-[10px]" dangerouslySetInnerHTML={{ __html: data?.body }}></div>
						)}
						<div className="btn-wrapper">
							<DynamicButton cta={data?.buttons} />
						</div>
					</div>

					<div className="w-3/5 w-[57%] col-right laptop-landscape:w-[52%] wide-screen:w-[55%] tablet:w-[53%] tablet-mid:w-[53%] md:w-full z-10 min-h-[562px] tablet:min-h-[375px] laptop-landscape:min-h-[500px] desktop-laptop:min-h-[475px] md:min-h-[300px]">
						<div className="z-10 md:w-full w-full h-full absolute -right-[60px] lg:right-[21px] desktop:right-[0]">
							<div className="bg-graphic with-img absolute top-[20px] right-[30px] desktop:-right-[70px]  lg:right-[0] w-[870px]  desktop:w-[672px] h-[1000px] -z-[1]">
								<div
									className="absolute w-full h-full"
									data-aos="fade-up"
									data-aos-delay="300"
									data-aos-duration="1000"
								>
									<Image
										className="scale-x-[1.53] scale-y-[1.53] top-[181px] right-[175px] desktop:scale-[1.43] laptop:scale-[1.23]  laptop-landscape:scale-[1.2] lg:scale-[0.75] absolute desktop:top-[11.6%] desktop:right-[20%] laptop:top-[8.5%] laptop:right-[9.2%] laptop-landscape:top-[12.5%] lg:-top-[11.5%] lg:-right-[16.5%] md:!-right-[15%]"
										src="/background_blue_with_yellow_boreder.png"
										alt="graphic"
										width={1000}
										height={1000}
									/>
								</div>
								{data?.image && data?.image?.sourceUrl && (
									<Image
										className={`mx-auto img z-10 back_img absolute -top-[9px] max-w-[584px] right-[52px] xxl-up:right-[55px] xxl-up:-top-[7px] desktop:right-[70px] desktop:max-w-[415px]  ${data.imagePosition == 'right' ? '' : 'desktop-mid:!max-w-[370px]'} laptop:right-[70px] laptop:max-w-[450px] laptop-landscape:max-w-[450px] laptop:top-[32px]] laptop:top-[32px] lg:right-[22px] lg:top-[25px] lg:w-[31%] `}
										src={data?.image?.sourceUrl}
										alt={data?.image?.altText}
										width={665}
										height={645}
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContentWithImage;
