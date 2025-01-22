import React from 'react';
import Image from 'next/image';

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
				<h3 className="text-black">
					Working with the biggest innovators and game changers
				</h3>
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
