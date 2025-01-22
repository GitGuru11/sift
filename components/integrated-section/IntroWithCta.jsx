'use cllient';
import React from 'react';
import Image from 'next/image';
import { Permanent_Marker } from 'next/font/google';
import DynamicButton from '../global-components/Buttons';
const permanentMarker = Permanent_Marker({
	subsets: ['latin'],
	weight: ['400'],
});

export default function IntroWithCta(props) {
	let data = props.items;
	return (
		<section id={data.id ? data.id : ''} className={`${data.gatedComponent? 'GatedHide' : ''} IntroWithCta ${data.background} ${data.padding} ${data.classes}`}>
			{
				data?.background == 'custom' && (
					<div className="custom-bg-img absolute left-0 top-[0px] w-full h-full ">
						{data?.backgroundImage?.sourceUrl && <Image className="w-full h-full object-cover" src={data?.backgroundImage?.sourceUrl} alt={data?.backgroundImage?.altText} width="1200" height="1200" />}
					</div>
				)
			}
			<div className="container">
				<div className="intro mb-[64px] md:mb-[20px] flex items-end justify-between lg:flex-wrap z-[20] relative">
					<div className={` wide-screen:w-[78%] w-[68%] desktop:w-[58%] lg:w-full xl-up:pr-3 lg:mb-[24px] pr-[15px]`}>
						{data?.title && <h2 dangerouslySetInnerHTML={{__html: data?.title}}></h2>}
						{data?.bodyWithoutEditor && <p className={`mt-[24px] max-w-[634px] xxl-up:max-w-[100%]`} dangerouslySetInnerHTML={{__html: data?.bodyWithoutEditor}}></p>}
					</div>
					<div className="btn w-full xl-up:w-[32%] flex flex-wrap justify-end xl:w-auto xl:mt-0 xl:justify-start">
						<div className="cta">
							<DynamicButton cta={data?.buttons} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
