import React from 'react';
import IntroWithCta from './IntroWithCta';
import Image from 'next/image';
export default function colThreeStates() {
	const intro = {
		PreNormalText: '',
		HighLightedText: 'Results',
		normalText: 'AI-Powered Fraud Decisioning..',
		bg: 'black',
	};
	const cards = [
		{
			number: '5',
			count: 'x',
			blurb: 'AI-Powered Fraud Decisioning..',
		},
		{
			number: '7',
			count: '/10',
			blurb:
				'AI-Powered Fraud Decisioning..',
		},
		{
			number: '47',
			count: '%',
			blurb:
				'AI-Powered Fraud Decisioning..',
		},
	];
	return (
		<section className="ColThreeState bg-black -mt-[14px]" id="results">
			<div className="container">
				<div className="relative intro mb-[64px] laptop:mb-[40px] desktop:mb-[40px] xl:mb-[32px] items-end w-full z-10 laptop-landscape:mb-[40px]">
					<div className="w-[83%] mb-[25px] lg-up:pr-3 xl:mb-5 laptop-landscape:mb-[13px] text-white">
						<h2 className="">
							<span className=" __className_c2d5ee  text-oceanGreen">
								Results{' '}
							</span>
							AI-Powered Fraud Decisioning..
						</h2>
					</div>
				</div>
				<div className="colthreeWrap flex flex-wrap w-[calc(100%+28px)] ml-[-28px] mt-[78px] laptop:mt-[40px] laptop-landscape:mt-[40px] desktop:mt-[40px] lg:mt-[50px]">
					{cards.map((data, index) => (
						<div
							key={index}
							className={`colThree w-[calc(33.33%-56px)] text-white mx-[28px] lg:mb-[30px] tablet:w-[calc(50%-56px)] md:w-[calc(100%-56px)]`}
						>
							<div className="count">
								<span className="text-amber-400 h1 relative z-10">
									{data.number}
								</span>
								<span className="heading_48 text-amber-400 relative z-10">
									{data.count}
								</span>
							</div>
							<div className="text_wrap pt-[40px] lg:pt-[24px] mt-[16px] border-t-[1px] border-white">
								<h4>{data.blurb}</h4>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}