import React from 'react';
import FullWidthIntro from './FullWidthIntro';
import Black_ArrowBtn from './button/Black_arrowBtn';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import IntroWithCta from './IntroWithCta';
const permanentMarker = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
});

export default function AwardCards() {
	const cards = [
		{
			Image: '/awardImages/award_1.png',
			title: 'Award one',
			blurb:
				'AI-Powered Fraud Decisioning..',
			cta: [
				{
					text: 'Learn more',
					link: '/',
				},
			],
		},
		{
			Image: '/awardImages/award_2.svg',

			title: 'Award two',
			blurb:
				'AI-Powered Fraud Decisioning..',
			cta: [
				{
					text: 'Learn more',
					link: '/',
				},
			],
		},
		{
			Image: '/awardImages/award_3.png',
			title: 'Award three',
			blurb:
				'AI-Powered Fraud Decisioning..',
			cta: [
				{
					text: 'Learn more',
					link: '/',
				},
			],
		},
	];

	const intro = {
		PreNormalText: 'This is a headline about',
		HighLightedText: 'awards',
		bg: 'white',
		link: '/',
		cta: 'View More',
		blurb:'AI-Powered Fraud Decisioning..',
	};
	return (
		<section
			className="AwardCards bg-white award large-desktop:pt-[60px] relative laptop-landscape:pb-0 "
			id="awards"
		>
			<div className="container">
				{/* <FullWidthIntro {...intro} /> */}
				<IntroWithCta {...intro} />
				<div className="colthreeWrap flex flex-wrap w-[calc(100%+25px)] ml-[-12.5px]">
					{cards.map((data, index) => (
						<div
							key={index}
							className={`group relative colThree xl:last:mb-0 xl-up:w-[calc(33.33%-25px)] mx-[12.5px] pt-[40px] p-[32px] transition-all desktop:w-[calc(50%-25px)] tablet:w-[calc(50%-25px)] duration-[0.3s] mb-[24px] w-[calc(100%-25px)] rounded-[16px] overflow-hidden hover:shadow-black-shadow cursor-pointer`}
						>
							<Link aria-label="first link" href="/" className={`emptyLink`}>
								.
							</Link>
							<div className="award w-full max-w-[182px] max-h-[205px] mx-auto mb-[32px]">
								<Image
									className="w-full h-full scale-none group-hover:scale-[1.1] transition-all duration-[0.3s]"
									width={300}
									height={400}
									src={data.Image}
									alt="Award Image"
								/>
							</div>
							<h3 className="mb-[16px]">{data.title}</h3>
							<p className="mb-[20px] small_font">{data.blurb}</p>
							<div className="btnWrap">
								<Link
									className={`arrow_btn uppercase text-black relative transition-all duration-300 font-[700] leading-[1] pr-[26px] group-hover:text-pink ${permanentMarker.className} `}
									href={data.cta[0].link}
								>
									<span className="absolute top-1/2 -translate-y-1/2 right-0 w-[20px] overflow-hidden">
										<svg
											className="-ml-[5px] duration-300 group-hover:-ml-[1px]"
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="17"
											viewBox={`0 0 20 17`}
											fill="none"
										>
											<path
												d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z"
												fill="#FF3B84"
											/>
										</svg>
									</span>
									{data.cta[0].text}
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
