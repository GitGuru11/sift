'use cllient';
import React from 'react';
import { Permanent_Marker } from 'next/font/google';
import Btn_Black from './button/Button_Black';
import Btn_Transparent from './button/Button_Transparent';
import Btn_Pink from './button/Button_Pink';
const permanentMarker = Permanent_Marker({
	subsets: ['latin'],
	weight: ['400'],
});

export default function IntroWithCta({
	PreNormalText,
	HighLightedText,
	normalText,
	bg,
	cta,
	cta2,
	link,
	blurb,
}) {
	return (
		<div className="intro mb-[40px] sm:mb-6 flex items-end justify-between lg:flex-wrap z-[20] relative">
			<div className={` wide-screen:w-[78%] w-[68%] desktop:w-[65%] lg:w-full xl-up:pr-3 lg:mb-[24px] pr-[15px] ${bg === 'black' ? 'text-white' : 'text-black'}`}>
				<h2>
					{PreNormalText ? PreNormalText : ''}
					{" "}
					{HighLightedText ? (
						<span
							className={`${permanentMarker.className}  ${bg === 'black' ? 'text-oceanGreen' : ''}`} >
							{HighLightedText}
						</span>
					) : (
						''
					)} {" "}
					{normalText}
				</h2>
				{blurb ? <p className={`mt-[24px] max-w-[634px] xxl-up:max-w-[100%]`}>{blurb}</p> : ''}
			</div>
			{cta2 ? (
				<div className="btn w-full xl-up:w-[32%] flex flex-wrap justify-end xl:w-auto xl:mt-[24px] xl:justify-start">
					<div className="cta">
						<Btn_Pink text={cta} link="/" />
					</div>
					<div className="cta">
						<Btn_Transparent text={cta2} link="/" />
					</div>
				</div>
			) : (
				<div className="btn xl-up:pl-[10px] xl:mt-0 xl-up:text-right">
					{bg === 'black' ? (
						<Btn_Transparent text={cta} link="/" />
					) : (
						<Btn_Black text={cta} link={link} />
					)}
				</div>
			)}
		</div>
	);
}
