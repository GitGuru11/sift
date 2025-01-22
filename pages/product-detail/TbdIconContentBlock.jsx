import React from 'react';
import Intro from '../../components/FullWidthIntro';
import Image from 'next/image';
export default function LogoContentBlock() {
	const intro = {
		PreNormalText: 'Headline about product capabilities',
		bg: 'white',
		blurb:
			'AI-Powered Fraud Decisioning..',
	};
	const cards = [
		{
			logo: '/circle-wavy.svg',
			title: 'AI-Powered Fraud Decisioning..',
			blurb:
				'AI-Powered Fraud Decisioning..',
		},
		{
			logo: '/circle-wavy.svg',
			title: 'AI-Powered Fraud Decisioning..',
			blurb:
				'AI-Powered Fraud Decisioning..',
		},
		{
			logo: '/circle-wavy.svg',
			title: 'AI-Powered Fraud Decisioning..',
			blurb:
				'AI-Powered Fraud Decisioning..',
		},
		{
			logo: '/circle-wavy.svg',
			title: 'AI-Powered Fraud Decisioning..',
			blurb:
				'AI-Powered Fraud Decisioning..',
		},
		{
			logo: '/circle-wavy.svg',
			title: 'AI-Powered Fraud Decisioning..',
			blurb:
				'AI-Powered Fraud Decisioning..',
		},
		{
			logo: '/circle-wavy.svg',
			title: 'AI-Powered Fraud Decisioning..',
			blurb:
				'AI-Powered Fraud Decisioning..',
		},
	];
	return (
		<section
			className="LogoContentBlock bg-white overflow-hidden"
			id="capabilities"
		>
			<div className="container">
				<Intro {...intro} />
				<div className="colthreeWrap flex flex-wrap w-[calc(100%+48px)] tablet:w-[calc(100%+30px)] -ml-[24px] tablet:-ml-[15px] laptop-landscape:mt-0 mt-[60px] wide-screen:mt-[80px] xl:mt-0 lg:mt-0 md:w-full md:mx-0">
					{cards.map((data, index) => (
						<div
							key={index}
							className={`colThree w-[calc(33.33%-48px)] text-white mx-[24px] pt-[16px] lg:pt-0 laptop-landscape:pt-[0] rounded-[20px] mb-[24px] tablet:mx-[15px] tablet:w-[calc(50%-30px)] md:w-full md:mx-0`}
						>
							<div className="imgWrap mb-[8px]">
								<Image width={40} height={40} src={data.logo} alt="logo" />
							</div>
							<h4 className="mb-[16px]">{data.title}</h4>
							<p>{data.blurb}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
