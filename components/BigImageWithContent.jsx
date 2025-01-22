'use client';
import React from 'react';
import Image from 'next/image';
import Video_btn from './button/VideoButton';
import styles from '../styles/BigImageWithContent.module.css';

const BigImageWithContent = () => {
	return (
		<>
			<section
				className={`BigImageWithContent bg-black no-padding relative min-h-[682px] lg:min-h-[500px] wide-screen:min-h-[770px] overflow-hidden laptop-landscape:min-h-[520px]  desktop:min-h-[500px]`}
			>
				<div
					className={`${styles.img_box} absolute top-0 left-0 w-full h-full`}
				>
					<Image
						className="w-full h-full object-cover"
						src="/full_background_image.jpg"
						alt="full_background_image"
						width="1320"
						height="680"
					/>
				</div>
				<div className="container">
					<div className="flex relative lg:top-[70px] laptop-landscape:top-[80px] top-[120px] z-10">
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
							<h3 className="tabHeading">
								Est tation latine aliquip id, mea ad tale illud definitiones.
								Periculis omitur necessitus eum ad, pro eripuit minimum
								comprehensam stet prompta reformidans.”
							</h3>
							<div className="author mt-[24px] mb-[40px]">
								<h4 className="mb-[4px]">Jason Tan</h4>
								<span className="small_font text-white">
									Founder & Executive Chairman
								</span>
							</div>
							<div className="btn-wrapper">
								<Video_btn text="WATCH VIDEO" link="/" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BigImageWithContent;