import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Intro from './FullWidthIntro';
import { Inter } from 'next/font/google';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800']
})

export default function IntroWithColors({ id }) {
	const introDetail = {
		PreNormalText: 'Headline about color usage',
		bg: 'White',
		blurb:
			'AI-Powered Fraud Decisioning..',
	};

	const ColorsData = [
		{
			heading: 'Primary',
			colors: [
				{
					color: 'blue',
					colorName: 'Sift Blue',
					hex: 'HEX',
					hexCode: '#2E69FF',
					rgb: 'RGB',
					rgbCode: '46 105 255',
					cmyk: 'CMYK',
					cmykCode: '82 59 0 0',
				},
				{
					color: 'black',
					colorName: 'Black',
					hex: 'HEX',
					hexCode: '#000000',
					rgb: 'RGB',
					rgbCode: '0 0 0',
					cmyk: 'CMYK',
					cmykCode: '0 0 0 100',
				},
				{
					color: 'white',
					colorName: 'White',
					hex: 'HEX',
					hexCode: '#FFFFFF',
					rgb: 'RGB',
					rgbCode: '255 255 255',
					cmyk: 'CMYK',
					cmykCode: '0 0 0 0',
				},
				{
					color: 'navy',
					colorName: 'Sift Navy',
					hex: 'HEX',
					hexCode: '#00124D',
					rgb: 'RGB',
					rgbCode: '0 18 77',
					cmyk: 'CMYK',
					cmykCode: '100 77 0 70',
				},
			],
		},
		{
			heading: 'Secondary',
			colors: [
				{
					color: 'pink',
					colorName: 'Sift Pink',
					hex: 'HEX',
					hexCode: '#FF3B84',
					rgb: 'RGB',
					rgbCode: '255 59 132',
					cmyk: 'CMYK',
					cmykCode: '0 77 87 0',
				},
				{
					color: 'gold',
					colorName: 'Sift Gold',
					hex: 'HEX',
					hexCode: '#FFCA36',
					rgb: 'RGB',
					rgbCode: '255 202 54',
					cmyk: 'CMYK',
					cmykCode: '0 21 79 0',
				},
				{
					color: 'teal',
					colorName: 'Sift Teal',
					hex: 'HEX',
					hexCode: '#79F7C6',
					rgb: 'RGB',
					rgbCode: '121 247 198',
					cmyk: 'CMYK',
					cmykCode: '51 0 20 3',
				},
				{
					color: 'light-blue',
					colorName: 'Light Blue',
					hex: 'HEX',
					hexCode: '#EAF0FF',
					rgb: 'RGB',
					rgbCode: '234 240 255',
					cmyk: 'CMYK',
					cmykCode: '8 6 0 0',
				},
				{
					color: 'light-gray',
					colorName: 'Light Gray',
					hex: 'HEX',
					hexCode: '#F5F3F5',
					rgb: 'RGB',
					rgbCode: '245 243 245',
					cmyk: 'CMYK',
					cmykCode: '0 1 0 4',
				},
			],
		},
	];
	return (
		<section className="IntroWithColors bg-white" id={id}>
			<div className="container">
				<Intro {...introDetail} />
				{ColorsData.map((data, index) => {
					return (
						<div key={index} className="wrap mb-[56px] last:mb-0">
							<div className="intro pb-[24px] border-b-[1px] border-black mb-[35px] xl:mb-[30px]">
								<h3> {data.heading} </h3>
							</div>
                            <div className="flex w-full flex-wrap">
                                {data.colors.map((data, index) => (
                                    <div key={index} className='w-[33.33%] tablet-mid:w-[50%] tablet:w-[50%] phablet:w-[50%] sm:w-[50%] xs:w-full my-[20px]'>
                                        <div className="flex ">
                                            <div
                                                className={`w-[120px] h-[120px] rounded-full phablet:w-[95px] phablet:h-[95px] sm:h-[60px] sm:w-[60px] xs:h-[85px] xs:w-[85px] ${
                                                    data.hexCode === '#2E69FF' && 'bg-blue'
                                                } ${data.hexCode === '#000000' && 'bg-black'} ${
                                                    data.hexCode === '#FFFFFF' && 'bg-white'
                                                } ${
                                                    data.hexCode === '#FFFFFF' && ' border-[1px] border-black'
                                                }  ${data.hexCode === '#00124D' && 'bg-darkBlue'}
                                                ${data.hexCode === '#FF3B84' && 'bg-pink'}
                                                ${data.hexCode === '#FFCA36' && 'bg-yello'} 
                                                ${data.hexCode === '#79F7C6' && 'bg-oceanGreen'} 
                                                ${data.hexCode === '#EAF0FF' && 'bg-skyblue'}
                                                ${data.hexCode === '#F5F3F5' && 'bg-lightGray'} 
												mr-[16px]`}
                                            ></div>
											<div>
												<h4>{data.colorName}</h4>
												<div className="flex mt-[8px]">
												   <h6 className='text-[16px] mr-[4px]'>{data.hex}</h6><span className={`text-[16px] font-[400] leading-[24px] ${inter.className}`}>{data.hexCode}</span>
												</div>
												<div className="flex">
												   <h6 className='text-[16px] mr-[4px]'>{data.rgb}</h6><span className={`text-[16px] font-[400] leading-[24px] ${inter.className}`}>{data.rgbCode}</span>
												</div>
												<div className="flex">
												   <h6 className='text-[16px] mr-[4px]'>{data.cmyk}</h6><span className={`text-[16px] font-[400] leading-[24px] ${inter.className}`}>{data.cmykCode}</span>
												</div>
											</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
