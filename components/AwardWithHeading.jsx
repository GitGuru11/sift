'use client';
import React from 'react';
import Image from 'next/image';
import Btn_Black from './button/Button_Black';
import Btn_Pink from './button/Button_Pink';
import { Permanent_Marker } from 'next/font/google';
import Link from 'next/link';
const permanentMarker = Permanent_Marker({
	subsets: ['latin'],
	weight: ['400'],
});
const logos = [
	{
		image: '/award_one.png',
		alt: 'award_one',
	},
	{
		image: '/award_two.png',
		alt: 'award_two',
	},
	{
		image: '/award_three.png',
		alt: 'award_three',
	},
	{
		image: '/award_four.png',
		alt: 'award_four',
	},
	{
		image: '/award_five.png',
		alt: 'award_five',
	},
	{
		image: '/award_one.png',
		alt: 'award_one',
	},
	{
		image: '/award_two.png',
		alt: 'award_two',
	},
	{
		image: '/award_three.png',
		alt: 'award_three',
	},
	{
		image: '/award_four.png',
		alt: 'award_four',
	},
	{
		image: '/award_five.png',
		alt: 'award_five',
	},
	{
		image: '/award_one.png',
		alt: 'award_one',
	},
	{
		image: '/award_two.png',
		alt: 'award_two',
	},
	{
		image: '/award_three.png',
		alt: 'award_three',
	},
	{
		image: '/award_four.png',
		alt: 'award_four',
	},
	{
		image: '/award_five.png',
		alt: 'award_five',
	},
];
const AwardWithHeading = () => {
	const cardData = [
		{
			number: '80%',
			title: 'AI-Powered Fraud Decisioning..',
		},
		{
			number: '24%',
			title: 'AI-Powered Fraud Decisioning..',
		},
		{
			number: '55%',
			title: 'AI-Powered Fraud Decisioning..',
		},
	];
	return (
		<section className={`AwardWithHeading bg-skyblue relative no-padding-top`}>
			<div className="container">
				<div className="flex items-center border-t border-black pt-[80px] md:pt-[40px] md:block">
					<div className="max-w-[200px] pr-[28px] md:max-w-[100%] md:mb-[20px]">
						<h4>Headline about our awards</h4>
					</div>
					<div className="w-[calc(100%-200px)] md:w-full overflow-hidden iconWrap">
						<div className="flex animate-[slideScroll_30s_linear_infinite]">
							{logos.map((item, i) => {
								return (
									<div className="w-[122px] h-[161px] md:w-[100px] md:h-[139px] mx-[40px]" key={i}>
										<Image
											className="rotateImg max-w-[inherit] md:max-w-[fit-content] h-[inherit]"
											src={item.image}
											alt={item.alt}
											width={122}
											height={161}
										/>
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

export default AwardWithHeading;
