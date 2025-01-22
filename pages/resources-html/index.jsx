import React from 'react';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import Layout from '../../components/Layout';
import ResourcesFilter from '../../components/ResourcesFilter';
import FooterCtaWithSlider from '../../components/FooterCtaWithSlider';
import Link from 'next/link';
import Arrow_Btn from '../../components/button/Arrow_Btn';
import Image from 'next/image';
import BannerWithResourceCard from '../../styles/blog/bannerWithResource.module.css';
import { Inter } from 'next/font/google';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
});
const blogBannerData = [
	{
		id: '1',
		bannerMainTitleColor: 'Explore',
		bannerMainTitle: 'our resources',
		bannerCardsImage: '/resources/banner-image.png',
		cardSubtile: 'content type',
		descriotion:
			'AI-Powered Fraud Decisioning..',
		auther_image: 'auther-img.png',
		autherName: 'McKenzie Gladney',
		autherDate: 'Nov 15, 2023',
		autherTime: '6 min read',
		items: [
			{
				id: '1',
				itemImage: 'boyWithGift.png',
				itemSubTitle: 'content type',
				itemTite:
					'AI-Powered Fraud Decisioning..',
				itemAutherName: 'McKenzie Gladne',
				itemAutherDate: 'Nov 15, 2023',
			},
			{
				id: '2',
				itemImage: 'circleWithLaptop.png',
				itemSubTitle: 'content type',
				itemTite:
					'AI-Powered Fraud Decisioning..',
				itemAutherName: 'McKenzie Gladne',
				itemAutherDate: 'Nov 15, 2023',
			},
		],
	},
];

const Banner = () => {
	const blogDataItems = blogBannerData[0].items;
	return (
		<>
			<div className="breadcrumbs bg-white relative">
				<div className="container">
					<ul className="absolute top-[39px] left-[20px] sm:z-[9] z-[99] sm:top-[75px]  phablet:top-[70px] tablet:top-[80px]">
						<li className="inline relative text-[16px] font-[400] leading-[24px] text-white hover:text-pink transition-all delay-[0.3s] mr-[15px]">
							<Link href="/">Home</Link>
						</li>
						<li className="inline relative text-[16px] font-[700] leading-[24px] mr-[15px]">
							<span className="text-pink">Resources</span>
						</li>
					</ul>
				</div>
			</div>
			<section className={`banner BannerWtihResourcescards bg-darkBlue relative  ${BannerWithResourceCard.bannerWithResource} ${BannerWithResourceCard.ResourcebgPattern} xl-up:pb-[60px] pt-[86px] overflow-hidden lg:pt-[120px]`}>
				<div className="container">
					<h1 className="text-white h2 sm:w-full">
						{' '}
						<span className="text-oceanGreen">
							{blogBannerData[0].bannerMainTitleColor}
						</span>{' '}
						{blogBannerData[0].bannerMainTitle}{' '}
					</h1>
					<div className="card-with-wrap flex flex-wrap w-[calc(100%+16px)] ml-[-8px] align-center xl:mt-[30px] mt-[40px] md:w-full md:ml-0 z-[9] relative">
						<div
							className={`cards ${BannerWithResourceCard.wideOne} laptop:w-[calc(40%-16px)] w-[calc(50%-16px)]  mx-[8px] pr-[16px] md:pr-0 md:w-full md:mx-0`}
						>
							<div className={`card ${BannerWithResourceCard.featureCard} group relative border-white bg-black border-[2px] transition-all duration-[0.3s] laptop:max-w-[900px] rounded-[16px] group hover:outline hover:outline-[1px] hover:outline-white overflow-hidden sm:h-full shadow-none hover:shadow-white-shadow`}>
								<Link href="/" className="emptyLink">
									.
								</Link>
								<div className="img-wrap  laptop:max-w-[900px] xxl-up:h-[200px] h-[200px] xl:h-[200px] laptop-landscape:h-[200px] overflow-hidden sm:h-[192px]">
									<Image
										src={`${blogBannerData[0].bannerCardsImage}`}
										className="transition-all duration-200 object-cover w-full h-full ease-in-out group-hover:scale-105"
										width={562}
										height={323}
										alt="banner-card"
									/>
								</div>
								<div className="cardContent p-[40px] xl:p-[30px] laptop-landscape:p-[25px] tablet:p-[25px] flex flex-wrap sm:p-[20px] ">
									<div className="introContent">
										<p className={`text-yello text-[14px] xl:text-[14px] wide-screen:text-[18px] mb-[5px] font-[700!important] uppercase ${inter.className}`}>
											{blogBannerData[0].cardSubtile}
										</p>
										<h4 className="text-white text-ellipsis h-[25px] wide-screen:h-[44px] line-clamp-1 relative">
											{blogBannerData[0].descriotion}
										</h4>
										<div className="btn mt-[23px]">
											<Arrow_Btn text='READ MORE' redirection='/'/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							className={`cards ${BannerWithResourceCard.wideTwo} w-[calc(50%-16px)] laptop:w-[calc(60%-16px)] mx-[8px] md:w-full md:mt-[30px] md:mx-0`}
						>
							<div className="title lg-up:pl-[5px]">
								<h3 className="text-white">Trending</h3>
								{blogDataItems.map((data, index) => (
									<div
										key={index}
										className={`${BannerWithResourceCard.item} relative py-[20px] last:pb-0  md:py-[20px] xl:py-[14px] laptop-landscape:py-[14px] xl-up:mb-[14px] flex  last:border-0  cursor-pointer group`}
									>
										<Link href="#" className="emptyLink">
											.
										</Link>
										<div
											className={`relative ${BannerWithResourceCard.itemContent} w-full xl-up:pr-[10px]`}
										>
											<p
												className={`text-yello uppercase xl:text-[14px] wide-screen:text-[18px] text-[14px] mb-[5px] font-[700!important] ${inter.className}`}
											>
												{data.itemSubTitle}
											</p>
											<h4 className="relative text-white text-ellipsis h-[60px] inline w-full md:h-auto md:max-h-[60px] line-clamp-2 sm:h-[45px]">
												{data.itemTite}
											</h4>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default function Index() {
	return (
		<Layout>
			<NextSeo title="Resources - Sift" description="Sift - Resources" />
			<Banner />
			<ResourcesFilter />
			<FooterCtaWithSlider bg="white" />
		</Layout>
	);
}
