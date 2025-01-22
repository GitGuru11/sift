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

export default function Typography({ id }) {
	const introDetail = {
		PreNormalText: 'Headline about typography',
		bg: 'White',
		blurb:
			'AI-Powered Fraud Decisioning..',
	};

	return (
		<section className="Typography bg-skyblue" id={id}>
			<div className="container">
				<Intro {...introDetail} />
				<div className="wrap sm:mb-[20px] mb-[80px] xl:mb-[30px]">
					<div className="intro pb-[24px] border-b-[1px] border-black mb-[56px] xl:mb-[30px]">
						<span
							className={`text-lowerBlue text-[14px] inline-block font-[700] mb-[8px] uppercase ${inter.className}`}
						>
							sift primary font
						</span>
						<h3 className='mb-[8px]'>Inter</h3>
						<p>
							AI-Powered Fraud Decisioning..
						</p>
					</div>
					<div className="flex mt-[56px] sm:flex-wrap xl:mt-[30px]">
						<div className="w-[47%] sm:w-full phablet:w-[45%] tablet:w-[35%] tablet-mid:w-[35%]">
							<div className="mb-[40px] lg:mb-[16px]">
								<h4>Subtitle</h4>
								<span
									className={`text-[16px] mt-[10px] inline-block font-[400] leading-[24px] text-black ${inter.className} opacity-[.5]`}
								>
									24 / Regular / 0% / 150%
								</span>
							</div>
							<div className="mb-[40px] lg:mb-[16px]">
								<p>Body Large</p>
								<span
									className={`text-[16px] mt-[10px] inline-block font-[400] leading-[24px] text-black ${inter.className} opacity-[.5]`}
								>
									18 / Regular / 0% / 150%
								</span>
							</div>
							<div className="mb-[40px] lg:mb-[16px]">
								<p className={`text-[16px]`}>Body Medium</p>
								<span
									className={`text-[16px] mt-[10px] inline-block font-[400] leading-[24px] text-black ${inter.className} opacity-[.5]`}
								>
									16 / Regular / 0% / 150%
								</span>
							</div>
							<div className="mb-[40px] lg:mb-[16px]">
								<p className={`text-[14px]`}>Body Default</p>
								<span
									className={`text-[16px] mt-[10px] inline-block font-[400] leading-[24px] text-black ${inter.className} opacity-[.5]`}
								>
									14 / Regular / 0% / 150%
								</span>
							</div>
							<div className="mb-[40px] lg:mb-[16px]">
								<h6
									className={`small_font font-[700!important] uppercase ${inter.className}`}
								>
									Body Default
								</h6>
								<span
									className={`text-[16px] mt-[10px] inline-block font-[400] leading-[24px] text-black ${inter.className} opacity-[.5]`}
								>
									16 / Bold / 4% / 150%
								</span>
							</div>
							<div className="lg:mb-[16px]">
								<h6
									className={`text-[14px] font-[700!important] uppercase ${inter.className}`}
								>
									Caption Large
								</h6>
								<span
									className={`text-[16px] mt-[10px] inline-block font-[400] leading-[24px] text-black ${inter.className} opacity-[.5]`}
								>
									16 / Bold / 4% / 120%
								</span>
							</div>
						</div>
                        <div className="w-[53%] sm:w-full phablet:pl-[20px] phablet:w-[55%] tablet:w-[65%] tablet-mid:w-[65%]">
							<div className="p-[20px] lg:p-[15px] border-[1px] border-black rounded-[16px] overflow-hidden">
								<div className="bg-blue text-white py-[72px] px-[40px] md:p-[30px] rounded-[16px] overflow-hidden">
									<p className={` leading-[24px] mb-[24px]`}>
										Built with a single, intuitive console, Sift’s end-to-end
										solution eliminates the need for disconnected tools,
										single-purpose software, and incomplete insights that drain
										operational resources.
									</p>
									<p className=" leading-[24px]">
										The Sift Digital Trust & Safety Platform does what other
										fraud tools cant,{' '}
										<Link href={`/`} className={` underline`}>
											patented technology{' '}
										</Link>{' '}
										delivers connected data, adaptability, and intelligent
										automation to every aspect of risk operations.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
                <div className="wrap sm:mb-[20px] mb-[80px] xl:mb-[30px]">
					<div className="intro pb-[24px] border-b-[1px] border-black mb-[56px] xl:mb-[30px]">
						<span
							className={`text-lowerBlue text-[14px] inline-block mb-[8px] font-[700] uppercase ${inter.className}`}
						>
							Display font
						</span>
						<h3 className='mb-[8px]'>Titillium Web</h3>
						<p>
							AI-Powered Fraud Decisioning..
						</p>
					</div>
					<div className="flex mt-[56px] sm:flex-wrap xl:mt-[30px]">
						<div className="w-[47%] sm:w-full phablet:w-[45%] tablet:w-[35%] tablet-mid:w-[35%]">
							<div className="mb-[40px] lg:mb-[16px]">
								<h1>Heading 1</h1>
								<span
									className={`text-[16px] mt-[10px] inline-block font-[400] leading-[24px] text-black ${inter.className} opacity-[.5]`}
								>
								88 / Bold / 0% / 110%
								</span>
							</div>
							<div className="mb-[40px] lg:mb-[16px]">
								<h2>Heading 2</h2>
								<span
									className={`text-[16px] mt-[10px] inline-block font-[400] leading-[24px] text-black ${inter.className} opacity-[.5]`}
								>
									64 / Bold / 0% / 115%
								</span>
							</div>
							<div className="mb-[40px] lg:mb-[16px]">
								<h3>Heading 3</h3>
								<span
									className={`text-[16px] mt-[10px] inline-block font-[400] leading-[24px] text-black ${inter.className} opacity-[.5]`}
								>
									40 / Bold / 0% / 120%
								</span>
							</div>
							<div className="lg:mb-[16px]">
								<h4>Heading 4</h4>
								<span
									className={`text-[16px] mt-[10px] inline-block font-[400] leading-[24px] text-black ${inter.className} opacity-[.5]`}
								>
									24 / Semibold / 0% / 120%
								</span>
							</div>
						</div>
                        <div className="w-[53%] sm:w-full phablet:pl-[20px] phablet:w-[55%] tablet:w-[65%] tablet-mid:w-[65%]">
							<div className="p-[20px] lg:p-[15px] border-[1px] border-black rounded-[16px] overflow-hidden">
								<div className="bg-oceanGreen text-black py-[72px] px-[40px] md:p-[30px] rounded-[16px] overflow-hidden">
									<h1>Sift Trust and Safety Platform</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
                <div className="wrap">
					<div className="intro pb-[24px] border-b-[1px] border-black mb-[56px] xl:mb-[30px]">
						<span
							className={`text-lowerBlue text-[14px] inline-block mb-[8px] font-[700] uppercase ${inter.className}`}
						>
							Display font
						</span>
						<h3 className='mb-[8px]'>Titillium Web</h3>
						<p>
							AI-Powered Fraud Decisioning..
						</p>
					</div>
					<div className="flex mt-[56px] sm:flex-wrap xl:mt-[30px]">
						<div className="w-[47%] sm:w-full phablet:w-[45%] tablet:w-[35%] tablet-mid:w-[35%]">
							<div className="mb-[40px] lg:mb-[16px]">
								<h1 className={` ${permanentMarker.className}`}>Heading 1</h1>
								<span
									className={`text-[16px] font-[400] mt-[10px] inline-block  leading-[24px] text-black ${inter.className} opacity-[.5]`}
								>
								88 / Bold / 0% / 110%
								</span>
							</div>
							<div className="mb-[40px] lg:mb-[16px]">
								<h2 className={` ${permanentMarker.className}`}>Heading 2</h2>
								<span
									className={`text-[16px] font-[400] mt-[10px] inline-block leading-[24px] text-black ${inter.className} opacity-[.5]`}
								>
									64 / Bold / 0% / 115%
								</span>
							</div>
							<div className="mb-[40px] lg:mb-[16px]">
								<h3 className={` ${permanentMarker.className}`}>Heading 3</h3>
								<span
									className={`text-[16px] font-[400] mt-[10px] inline-block leading-[24px] text-black ${inter.className} opacity-[.5]`}
								>
									40 / Bold / 0% / 120%
								</span>
							</div>
						</div>
                        <div className="w-[53%] sm:w-full phablet:pl-[20px] phablet:w-[55%] tablet:w-[65%] tablet-mid:w-[65%]">
							<div className="p-[20px] lg:p-[15px] border-[1px] border-black rounded-[16px] overflow-hidden">
								<div className="bg-black text-white py-[72px] px-[40px] md:p-[30px] rounded-[16px] overflow-hidden">
									<h1>Sift can help you <span className={`text-oceanGreen `}>grow</span> safely</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
