import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Style from "../styles/logo-nav-tab.module.css";
import Slider from 'react-slick';
import Intro from './FullWidthIntro';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Video_btn from './button/VideoButton';
const Data = [
	{
		quotationsImg: '/logos/quotation-mark.svg',
		title:
			'Ad tale illud definitiones. Periculis omitur necessitus eum ad, pro eripuit minimum comprehensam stet prompta reformidans.”',
		authername: 'Connie Robertson',
		occupation: 'Manager of Performance and Support',
		image: '/girl2.png',
		cta: 'watch video',
		link: '/',
	},
	{
		quotationsImg: '/logos/quotation-mark.svg',
		title:
			'Ad tale illud definitiones. Periculis omitur necessitus eum ad, pro eripuit minimum comprehensam stet prompta reformidans.”',
		authername: 'Gabriel Le Roux',
		occupation: 'CMO at Primer',
		image: '/girl1.png',
		cta: 'watch video',
		link: '/',
	},
	{
		quotationsImg: '/logos/quotation-mark.svg',
		title:
			'Ad tale illud definitiones. Periculis omitur necessitus eum ad, pro eripuit minimum comprehensam stet prompta reformidans.”',
		authername: 'Gabriel Le Roux',
		occupation: 'CMO at Primer',
		image: '/girl2.png',
		cta: 'watch video',
		link: '/',
	},
];
    const intro = {
			PreNormalText: 'Headline about employee testimonials',
			blurb: '',
		};
export default function QuoteWithImageSlider() {
        const settings = {
					dots: false,
					arrows: true,
					infinite: false,
					speed: 500,
					slidesToShow: 1,
					slidesToScroll: 1,
				};
    return (
			<section className={`QuoteWithImageSlider bg-skyblue pb-[80px] md:pb-[40px]`} id="testimonials">
				<div className="container">
					<Intro {...intro} />
					<div className="tab-wrap pt-[15px] lg:px-[20px] desktop-laptop:px-[20px]">
						<Slider {...settings}>
							{Data.map((data, index) => {
								return (
									<div className="tab-content " key={index}>
										<div className="flex flex-wrap rounded-[24px] overflow-hidden">
											<div className="content-wrap w-[49%] lg:w-full text-white bg-yello py-[48px] laptop-landscape:pb-[30px] px-[41px] xl-up:pr-[53px] lg:p-[25px]">
												<div className="quotation laptop-landscape:w-[40px] laptop-landscape:h-[40px] w-[64px] h-[64px] lg:w-[40px] lg:h-[40px]">
													<Image
														className="w-full h-full lg:w-[40px] lg:h-[40px]"
														width={64}
														height={64}
														alt="quotationsImg"
														src="/logos/quotation-mark.svg"
													/>
												</div>
												<span className="!text-black block tabHeading font-[600] mt-4 mb-[25px]">
													{data.title}
												</span>

												<span className="h4 block text-black mb-[3px] fontInter">
													{data.authername}
												</span>
												<span className="text-black text-[18px]">
													{data.occupation}
												</span>
												<div className="btn-wrap text-black block mt-[35px]">
													<Video_btn text={data.cta} link={data.link} />
												</div>
											</div>
											<div
												className={`w-[51%] sm-up:bg-pink lg:w-full mx-auto ${Style.imgWrap}`}
											>
												<div
													className={`relative h-[458px] sm:h-[250px] sm:bg-pink laptop-landscape:h-[360px] wide-screen:h-[604px] translate-y-[-50%] top-2/4`}
												>
													<div
														className={` absolute object-cover h-full ${Style.bgImgWrap}`}
													>
														<Image
															className={`w-full h-full object-contain`}
															width={632}
															height={453}
															alt="image"
															src={data.image}
															quality={75}
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</Slider>
					</div>
				</div>
			</section>
		);
}
