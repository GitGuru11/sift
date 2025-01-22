'use client';
import React from 'react';
import Image from 'next/image';
import DynamicButton from '../global-components/Buttons';
import styles from '../../styles/BigImageWithContent.module.css';

const FullWidthQuoteWithImage = (props) => {
	let data = props.items;
	return (
		<>
			<section id={data.id ? data.id : ''} className={`${data.gatedComponent? 'GatedHide' : ''} BigImageWithContent bg-black no-padding relative min-h-[682px] lg:min-h-[500px] wide-screen:min-h-[770px] overflow-hidden laptop-landscape:min-h-[520px]  desktop:min-h-[500px] ${data.background} ${data.classes} ${data.padding}`}>
				<div className={`${styles.img_box} absolute top-0 left-0 w-full h-full image-box`}>
					{data?.image && data?.image?.sourceUrl && <Image
						className="w-full h-full object-cover"
						src={data?.image?.sourceUrl} alt={data?.image?.altText}
						width="1320"
						height="680"
					/> }
				</div>
				<div className="container">
					<div className="flex relative lg:top-[70px] desktop-mid:top-[70px] laptop-landscape:top-[80px] top-[120px] z-10">
						<div className="max-w-[469px] xs:mb-[120px] xxl-up:max-w-[45%] lg:max-w-[549px] desktop-laptop:max-w-[550px] wide-screen:max-w-[1000px]">
							<div className="quotation mb-[16px] laptop-landscape:w-[40px] laptop-landscape:h-[40px] w-[64px] h-[64px] lg:w-[40px] lg:h-[40px]">
								<Image
									className="w-full h-full lg:w-[40px] lg:h-[40px]"
									width={64}
									height={64}
									alt="quotationsImg"
									src="/Quotation_mark.png"
								/>
							</div>
							{data?.quote && <h3 className="tabHeading" dangerouslySetInnerHTML={{ __html: data?.quote }}></h3>}
							<div className="author mt-[24px] mb-[40px]">
								{data?.authorName && <h4 className="mb-[4px]" dangerouslySetInnerHTML={{ __html: data?.authorName }}></h4> }
								{data?.authorDesignation && <span className="small_font text-white" dangerouslySetInnerHTML={{ __html: data?.authorDesignation }}></span> }
							</div>
							<div className="btn-wrapper">
								<DynamicButton cta={data?.buttons} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default FullWidthQuoteWithImage;