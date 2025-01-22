import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react';
// import ArrowBtn from './button/BlackArrowBtn'

const OverviewWithStatsData = [
	{
		title: 'AI-Powered Fraud Decisioning..',
		blurb:
			'AI-Powered Fraud Decisioning..',
	},
	{
		states: [
			{
				character: '$',
				number: '5.5',
				blurb: 'Current value of the global fintech industry*',
				source: '*Source: Allied Market Research',
			},
			{
				character: '$',
				number: '1.9',
				blurb: 'Lost due to cryptocurrency crime in 2020*',
				source: '*Source: CypherTrace',
			},
		],
	},
];

function OverviewWithStats() {
	var sectionData = OverviewWithStatsData;
    // console.log(sectionData)
	return (
		<section
			className="OverviewWithStats bg-skyblue wide-screen:pb-[350px]"
			id="challenge"
		>
			<div className="bg-graphic absolute bottom-0 left-0 w-[540px]  laptop:w-[300px] xl:w-[300px] laptop-landscape:w-[480px!important] md:hidden">
				<Image
					src="/background_shapes.png"
					className="relative"
					alt="bg-vector"
					width={565}
					height={336}
				/>
			</div>
			<div className="container">
				<div className="wrapper flex flex-wrap w-[calc(100%+46px)] -ml-[27px] md:w-[100%] mx-[27px] md:mx-0">
					<div className="col-left w-[calc(49%-54px)] xxl-up:min-h-[450px] md:w-[100%] mx-[27px] md:mx-0 md:pb-[30px]">
						<div className="content md-up:pb-[200px] wide-screen:pb-0 xxl-up:max-w-[80%]">
							<h2>{sectionData[0].title}</h2>
						</div>
					</div>
					<div className="col-right w-[calc(51%-54px)] ml-[26px] mr-[28px] md:w-[100%] md:mx-0 pr-[1px]">
						<p>{sectionData[0].blurb}</p>
						<div className="card_wrap pt-[64px] md:pt-[40px] w-full grid gap-[24px] grid-cols-2">
							{sectionData[1].states.map((item, index) => {
								return (
									<div key={index} className={`text-white`}>
										<div className="count">
											<span className="heading_48  text-[#2E69FF]  relative z-10">
												{item.character}
											</span>
											<span className="h1 text-[#2E69FF]  relative z-10">
												{item.number}
											</span>
										</div>
										<div className="text_wrap pt-[32px] mt-[16px] border-t-[1px] border-black">
											<h4 className="mb-[6px] tracking-[-0.004em] text-black">
												{item.blurb}
											</h4>
											<span className="opacity-80 text-black small_font tracking-[0em!important]">
												{item.source}
											</span>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default OverviewWithStats
