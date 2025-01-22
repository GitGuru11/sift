import React from 'react';
import Image from 'next/image';
import Btn_Black from './button/Button_Black';

const logos = [
	{
		image: '/doordash.png',
		alt: 'doordash',
	},
	{
		image: '/nikon.png',
		alt: 'nikon',
	},
	{
		image: '/remitly.png',
		alt: 'remitly',
	},
	{
		image: '/swan.png',
		alt: 'swan',
	},
	{
		image: '/taptap.png',
		alt: 'taptap',
	},
	{
		image: '/yelp.png',
		alt: 'yelp',
	},
	{
		image: '/doordash.png',
		alt: 'doordash',
	},
	{
		image: '/nikon.png',
		alt: 'nikon',
	},
	{
		image: '/remitly.png',
		alt: 'remitly',
	},
	{
		image: '/swan.png',
		alt: 'swan',
	},
	{
		image: '/taptap.png',
		alt: 'taptap',
	},
	{
		image: '/yelp.png',
		alt: 'yelp',
	},
	{
		image: '/nikon.png',
		alt: 'nikon',
	},
	{
		image: '/remitly.png',
		alt: 'remitly',
	},
];

function Logos() {
	return (
		<section className="logos bg-indigo-50 overflow-hidden padding-100">
			<div className="container">
				<div className="intro mb-[40px] sm:mb-6 flex items-end justify-between lg:flex-wrap z-[20] relative">
					<div
						className={` wide-screen:w-[78%] w-[68%] desktop:w-[65%] lg:w-full xl-up:pr-3 lg:mb-[24px] pr-[15px] text-black`}
					>
						<h3 className="text-black">
							Working with the biggest innovators and game changers
						</h3>
					</div>
					<div className="btn w-full xl-up:w-[32%] flex flex-wrap justify-end xl:w-auto xl:mt-[24px] xl:justify-start">
						<Btn_Black text="view all investors" link="/" />
					</div>
				</div>
			</div>
			<div className='relative iconWrap z-[11]'>
				<div className="flex mt-10 laptop-landscape:mt-[30px] w-[fit-content] animate-[slideScroll_30s_linear_infinite]">
					{logos.map((item, i) => {
						return (
							<div className="w-[162px] h-[100px] mx-[20px]" key={i}>
								<Image className='rotateImg' src={item.image} alt={item.alt} width={162} height={100} />
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Logos;
