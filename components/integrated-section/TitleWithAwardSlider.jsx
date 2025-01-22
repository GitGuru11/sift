'use client';
import React from 'react';
import Image from 'next/image';
import { Permanent_Marker } from 'next/font/google';
const permanentMarker = Permanent_Marker({
	subsets: ['latin'],
	weight: ['400'],
});
const TitleWithAwardSlider = (props) => {
	let data = props.items;
	return (
		<section  id={data.id ? data.id : ''} className={`AwardWithHeading relative ${data.background} ${data.classes} ${data.padding}`}>
			<div className="container">
				<div className="flex items-center border-t border-black pt-[80px] md:pt-[40px] md:block">
					<div className="max-w-[200px] pr-[28px] md:max-w-[100%] md:mb-[20px]">
					{data?.title && <h4 dangerouslySetInnerHTML={{ __html: data?.title }}></h4>}
					</div>
					<div className="w-[calc(100%-200px)] md:w-full overflow-hidden iconWrap">
						<div className="flex animate-[slideScroll_30s_linear_infinite]">
							{data?.slider && data?.slider.map((item, i) => {
								return (
										<div className="w-[122px] h-[161px] md:w-[100px] md:h-[139px] mx-[40px]" key={i}>
											{item?.image && item?.image?.sourceUrl && <Image
												className="rotateImg max-w-[inherit] md:max-w-[fit-content] h-[inherit]"
												src={item?.image?.sourceUrl}
												alt={item?.image?.altText}
												width={122}
												height={161} 
											/>}
										</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TitleWithAwardSlider;
