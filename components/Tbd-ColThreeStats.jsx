import React from 'react';
import IntroWithCta from './IntroWithCta';
import Image from 'next/image';
import Styles from '../styles/platform/colThreeStats.module.css'

export default function ColThreeStates(props) {
	const intro = {
		PreNormalText: '',
		HighLightedText: 'Results',
		normalText: 'AI-Powered Fraud Decisioning..',
		bg: 'black',
	};
	const cards = [
        {
            number: '60',
            count: '%',
            heading:'AI-Powered Fraud Decisioning..',
			blurb:'AI-Powered Fraud Decisioning..',
			
		},
		{
			number: '7',
            count: '/10',
            heading:'AI-Powered Fraud Decisioning..',
			blurb:
				'AI-Powered Fraud Decisioning..',
		},
		{
			number: '5',
            count: 'x',
            heading:'AI-Powered Fraud Decisioning..',
			blurb: 'AI-Powered Fraud Decisioning..',
		},
	];
	return (
		<section
			className={`ColThreeStates bg-darkBlue  ${
				props.bg == 'blue' ? `${Styles.col_three_stats}` : `${Styles.white_bg}`
			} no-padding-top laptop-landscape:pt-[30px]`}
			id=""
		>
			<div className="container">
				<div className="relative intro mb-[40px] xl:mb-[32px] items-end w-full z-10">
					<div className="w-[83%] mb-[25px] lg-up:pr-3 xl:mb-5 laptop-landscape:mb-[13px] text-white">
						<h3
							className={` ${
								props.bg == 'blue' ? `text-white` : `text-black`
							} xl-up:text-[32px]`}
						>
							Subhead about the benefits:
						</h3>
					</div>
				</div>
				<div className="colthreeWrap relative flex flex-wrap  w-[calc(100%+24px)] ml-[-12px] z-[11]">
					{cards.map((data, index) => (
						<div
							key={index}
							className={`colThree w-[calc(33.33%-24px)] text-white mx-[12px] mb-[24px] tablet:w-[calc(50%-24px)] md:w-[calc(100%-24px)]`}
						>
							<div className="count">
								<span className="text-yello h1 relative z-10">
									{data.number}
								</span>
								<span className="heading_48 text-yello relative z-10">
									{data.count}
								</span>
							</div>
							<div
								className={`relative text_wrap pt-[40px] mt-[15px] after:content-[''] after:absolute  after:w-[96%] after:top-0 after:left-0 after:h-[1px]  ${
									props.bg == 'blue' ? `after:bg-white` : 'after:bg-black'
								}`}
							>
								<h4 className="mb-[9px]">{data.heading}</h4>
								<p className="xl-up:text-[16px]">{data.blurb}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}