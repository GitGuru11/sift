'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import DynamicButton from '../global-components/Buttons';
import Link from 'next/link';
import { useRouter } from 'next/router';

const BannerSecondLevel = (props) => {
	const { asPath } = useRouter();
	let data = props.items;
	const imgOnTop = 'img-box absolute md:hidden right-0 top-[0] xl:opacity-[0.7] w-full max-w-[545px] wide-screen:max-w-[690px]  tablet:bottom-auto tablet:top-0 desktop:bottom-auto laptop-landscape:bottom-auto laptop-landscape:top-0 desktop:top-0 w-auto laptop:h-full laptop-landscape:!h-[425px] h-[660px] wide-screen:h-[820px] desktop:h-[430px] tablet:h-[440px] phablet:h-[410px] sm:h-[360px] xs:h-[310px]';
	const imgOnBottom = 'img-box absolute right-0 bottom-[0px] xl:opacity-[0.7]  w-full max-w-[600px] wide-screen:max-w-[810px] xxl-up:h-[500px] laptop-landscape:h-[350px!important] h-[610px]  desktop-laptop:h-[500px] wide-screen:h-[680px] desktop:h-[310px] tablet:h-[370px] phablet:h-[320px] sm:h-[240px] xs:h-[192px]';
	return (
		<>
			<section id={data.id ? data.id : ''} className={`${data.gatedComponent? 'GatedHide' : ''} banner BannerSecondLevel relative min-h-0 md:min-h-[0!important] ${data?.imagePosition == 'imgOnTop' && 'desktop-mid:pb-[0!important] lg:pb-[0!important]'} overflow-hidden laptop-landscape:min-h-[440px!important] xl:min-h-[500px] desktop:min-h-[440px] ${data.background} ${data.classes} ${data.padding}`}>
				{data?.image && data?.image?.sourceUrl &&
					<div className={data.imagePosition == 'imgOnTop' ? imgOnTop : imgOnBottom}>
						<Image className="w-auto h-full object-cover float-right" src={`${data?.image?.sourceUrl}`} alt={`${data?.image?.altText}`} width="865" height="610" />
					</div>
				}
				{/* {data.mobileImage && data.mobileImage.sourceUrl &&
					<div className="img-box absolute right-0 bottom-[0px] w-auto xxl-up:h-[640px] laptop-landscape:h-[350px!important] h-[610px]  desktop-laptop:h-[500px] wide-screen:h-[820px] desktop:h-[310px] tablet:h-[370px] phablet:h-[320px] sm:h-[240px] xs:h-[192px]">
						<Image className="w-full h-full object-cover" src={`${data.mobileImage.sourceUrl}`} alt={`${data.mobileImage.altText}`} width="865" height="610" />
					</div>
				} */}
				<div className="container">
					<div className="flex">
						<div className="max-w-[620px] xs:mb-[120px] md:mb-[50px!important] xxl-up:max-w-[65%] lg:max-w-[549px] desktop-laptop:max-w-[550px] wide-screen:max-w-[1000px] laptop:mt-[50px] desktop:mt-[50px] desktop:mb-[50px] laptop-landscape:mt-[70px] lg:mt-[70px] lg:mb-[70px]"> 
							<h1 dangerouslySetInnerHTML={{ __html: data?.title }}></h1>
							<div className="max-w-[630px] xxl-up:max-w-[65%] wide-screen:max-w-[870px] wide-screen:my-[40px] my-[32px] xl:my-[24px] lg:my-[25px] laptop-landscape:my-[30px] laptop-landscape:max-w-[630px]" dangerouslySetInnerHTML={{ __html: data?.body }}></div>
							{data?.buttons && asPath != '/legal-and-compliance/cookie-preference-center' &&
								<div className="btn-wrapper flex flex-wrap">
									<DynamicButton cta={data?.buttons} />
								</div>
							}

							<div className="btn-wrapper flex flex-wrap">
								{asPath == '/legal-and-compliance/cookie-preference-center' ?
									<button id="ot-sdk-btn" class="ot-sdk-show-settings default-btn button button group uppercase">Cookie Settings</button> : ''}
							</div>

						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BannerSecondLevel;