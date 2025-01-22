import React from 'react';
import Image from 'next/image';
import IntroWithCta from '../../components/IntroWithCta'

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

const intro = {
    PreNormalText: '',
    HighLightedText: '',
    normalText: 'Working with the biggest innovators and game changers',
    bg: 'black',
    cta: 'VIEW ALL INVESTERS',
    link: '/'
};

function Logos() {
	return (
		<section className="logos bg-black overflow-hidden ">
			<div className="container">
				<IntroWithCta {...intro} />
			</div>
			<div className='relative iconWrap z-[11]'>
				<div className="relative flex mt-10 laptop-landscape:mt-[30px] w-[fit-content] animate-[slideScroll_30s_linear_infinite] z-[11]">
					{logos.map((item, i) => {
						return (
							<div className="relative w-[162px] h-[100px] mx-[20px]" key={i}>
								<Image className='rotateImg ' src={item.image} alt={item.alt} width={162} height={100} />
							</div>
						);
					})}
				</div>
			</div>
		</section>
	)
}

export default Logos;
