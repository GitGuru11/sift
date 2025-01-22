import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Style from "../../styles/logo-nav-tab.module.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DynamicButton from "../global-components/Buttons";

export default function QuoteSlider(props) {
	let data = props.items;
        const settings = {
					dots: false,
					arrows: true,
					infinite: false,
					speed: 500,
					slidesToShow: 1,
					slidesToScroll: 1,
				};
    return (
			<section id={data.id ? data.id : ''}  className={`QuoteSlider overflow-hidden ${data.background} ${data.padding} ${data.classes}`}>
				<div className="container">
					<div className="tab-wrap pt-[15px] lg:px-[5px] desktop-laptop:px-[20px]">
						<Slider {...settings}>
							{data?.slides && data?.slides.map((item, index) => {
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
												{item?.quote && <span className="!text-black block tabHeading font-[600] mt-4 mb-[25px]" dangerouslySetInnerHTML={{ __html: item?.quote }}></span>}
												{item?.authorName && <span className="h4 block text-black mb-[3px] fontInter" dangerouslySetInnerHTML={{ __html: item?.authorName }}></span>}
												{item?.authorDesignation && <span className="text-black text-[18px]" dangerouslySetInnerHTML={{ __html: item?.authorDesignation }}></span>}
												{item?.authorCompany && <span className="text-black text-[18px]" dangerouslySetInnerHTML={{ __html: item?.authorCompany }}></span>}
												<div className="btn-wrap text-black block mt-[35px]">
													<DynamicButton cta={item?.buttons} />
												</div>
											</div>
											<div className={`ImageWrap w-[51%] sm-up:bg-pink lg:w-full mx-auto ${Style.imgWrap}`}>
												<div className={`relative h-[458px] sm:h-[250px] sm:bg-pink laptop-landscape:h-[360px] wide-screen:h-[604px] translate-y-[-50%] top-2/4`}>
													{item?.logo && <div className="absolute w-[275px] xl:w-[220px] h-auto top-[52%] left-[48%] -translate-x-1/2 -translate-y-1/2 z-[1] ml-[5px]">
                                        				{item?.logo?.sourceUrl && <Image src={`${item?.logo?.sourceUrl}`} alt={`${item?.logo?.altText}`} width={350} height={150} />}
                                    				</div>}
                                    				{item?.image && <div className={` absolute object-cover h-full ${Style.bgImgWrap}`}>
                                        				{item?.image?.sourceUrl && <Image className={`w-full h-full object-contain`} width={632} height={453} src={`${item?.image?.sourceUrl}`} alt={`${item?.image?.altText}`} quality={75} />}
                                    				</div>}
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
