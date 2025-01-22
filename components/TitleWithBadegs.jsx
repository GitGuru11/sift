import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

const logos = [
	{
		img: '/digital_trust.svg',
	},
	{
		img: '/leader_fall.svg',
	},
	{
		img: '/leader_enterprise.svg',
	},
	{
		img: '/digital_trust.svg',
	},
];


function TitleWithBadegs() {
	return (
		<section className="title_with_badegs bg-black lg:bg-white lg-up:pt-0 padding-bottom-m lg:pb-[40px] z-20 relative"> 
			<div className="container">
				<div className="bg-white lg:items-start w-full min-h-[345px] lg:min-h-full desktop:min-h-[250px] laptop-landscape:min-h-[280px] xxl-up:py-[100px] wide-screen:py-[140px] wide-screen:pl-[146px] wide-screen:pr-[151px] wide-screen:rounded-[300px] rounded-[224px] lg:rounded-[0] px-[90px] desktop:px-[75px] lg:px-[0px]  justify-between items-center inline-flex md:block">
					<div className="w-[40%] laptop-landscape:w-[45%] md:w-full pl-[5px] flex-col justify-start items-start gap-1 inline-flex md:mb-[24px]">
						<div className="w-10 h-10 wide-screen:w-[71px] wide-screen:h-[71px]">
							<Image
								className="h-ful w-full object-contain"
								src="/G2_logo.png"
								alt="G2"
								width={40}
								height={40}
							/>
						</div>
						<h3>
							<span>#1</span> Leader in Digital Trust and Safety
						</h3>
					</div>
					<div className="w-[55%] xxl:max-w-[540px] xxl-up:w-[50%] md:max-w-full md:w-full md-up:pr-[8px] wide-screen:max-w-[872px] wide-screen:w-[60%]">
						<div className="flex flex-wrap md:w-full w-[calc(100%+20px)] wide-screen:w-[calc(100%+40px)] wide-screen:-mr-[20px] md:mr-0 -mr-[10px]">
							{logos.map((item, i) => {
								return (
									<Link
										href="/"
										aria-label="first link"
										className="m-w-[100px] lg:pr-0 pr-[17px] wide-screen:pr-[0] lg:w-[calc(50%-20px)] xl:my-[10px] relative wide-screen:mx-[20px] wide-screen:w-[calc(25%-40px)] w-[calc(25%-20px)] xl:h-[126px] mx-[10px] hover:scale-105 transition-all "
										key={i}
									>
										<Image
											className="mx-auto w-full h-full"
											src={item.img}
											alt="Q2"
											width={189}
											height={253}
										/>
									</Link>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default TitleWithBadegs
