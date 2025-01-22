
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Intro from './FullWidthIntro';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Permanent_Marker } from 'next/font/google';
const permanentMarker = Permanent_Marker({
	subsets: ['latin'],
	weight: ['400'],
});
const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
});

export default function Visualizations({ id }) {
	const introDetail = {
		PreNormalText: 'Headline about product visualizations',
		bg: 'black',
		blurb:
			'AI-Powered Fraud Decisioning..',
	};
    const ImageData = [
        {
            url: '/BrandCenter/DesktopImage.png'
        },
        {
            url: '/BrandCenter/Visualizations2.png'
        },
        {
            url: '/BrandCenter/Visualizations3.png'
        },
        {
            url: '/BrandCenter/Visualizations4.png'
        },
        {
            url: '/BrandCenter/Visualizations5.png'
        },
        {
            url: '/BrandCenter/Visualizations6.png'
        },
    ]

	return (
		<section className="Visualizations bg-black" id={id}>
			<div className="container">
				<Intro {...introDetail} />
				<div className="flex flex-wrap w-[calc(100%+24px)] -ml-[12px] xs:w-full xs:ml-0">
                    {
                        ImageData.map((image , index) => {
                            return <div key={index} className={`w-[calc(33.33%-24px)] m-[12px] rounded-[6px] overflow-hidden md:w-[calc(50%-24px)] xs:w-full`}>
                                <Image className='w-full h-full'
                                    src={image.url}
                                    width={400}
                                    height={400}
                                    alt="Image"
                                />
                            </div>
                        })
                    }
				  
				</div>
			</div>
		</section>
	);
}
