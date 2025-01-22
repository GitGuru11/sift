import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

const logos = [
	{
		img: '/logos/built-in.png',
	},
	{
		img: '/logos/built-in.png',
	},
	{
		img: '/logos/built-in.png',
	},
	{
		img: '/logos/syber-security.png',
	},
    {
		img: '/logos/syber-security.png',
	},
	{
		img: '/logos/built-in.png',
	},
	{
		img: '/logos/built-in.png',
	},
	{
		img: '/logos/built-in.png',
	},
	{
		img: '/logos/syber-security.png',
	},
    {
		img: '/logos/syber-security.png',
	},
	{
		img: '/logos/built-in.png',
	},
	{
		img: '/logos/built-in.png',
	},
	{
		img: '/logos/built-in.png',
	},
	{
		img: '/logos/syber-security.png',
	},
    {
		img: '/logos/syber-security.png',
	},
];


function AwardWithHeading() {
	return (
		<>
			<section className="award-with-heading bg-skyblue padding-medium-top   padding-bottom-m lg:pb-[40px] z-20 relative overflow-hidden">
				<div className="container">
					<div className="flex flex-wrap items-center w-full pt-[80px] desktop:pt-[60px] lg:pt-[40px] border-t-[1px] border-black">
						<div className="w-[20%] lg:w-full lg:mb-[30px]">
						
							<h4 className='pr-[60px] xl-up:pb-[10px]'>
								Headline about our awards
							</h4>
						</div>
						<div className="w-[80%] lg:w-full overflow-hidden">
							<div className='iconWrap'>
								<div className=" flex  justify-between w-[fit-content]  animate-[slideScroll_30s_linear_infinite] ">
									{
										logos.map((logo, i) => {
											return (
												<div key={i} className="award-logo  w-[123px] desktop:w-[90px] lg:w-[90px] mr-[80px] lg:mr-[50px]">
													<Image className='rotateImg object-cover ' src={logo.img} alt='award' width={125} height={125} />
												</div>
											)
										})
									}
								</div>
							</div>
                     
						</div>
					</div>
				</div>
			</section>
			
		</>
	);
}

export default AwardWithHeading
