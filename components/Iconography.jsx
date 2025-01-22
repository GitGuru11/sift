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

export default function Iconography({ id }) {
	const introDetail = {
		PreNormalText: 'Headline about iconography',
		bg: 'White',
		blurb:
			'AI-Powered Fraud Decisioning..',
	};
	const DisplayImage = [
		{
			url: '/BrandCenter/DigitalGoodsServices.svg',
			title: 'About Sift',
		},
		{
			url: '/BrandCenter/DigitalGoodsServices.svg',
			title: 'About',
		},
		{
			url: '/BrandCenter/DigitalGoodsServices.svg',
			title: 'All Industries',
		},
		{
			url: '/BrandCenter/DigitalGoodsServices.svg',
			title: 'Analyst Report',
		},
		{
			url: '/BrandCenter/DigitalGoodsServices.svg',
			title: 'Trust % Safety University',
		},
		{
			url: '/BrandCenter/DigitalGoodsServices.svg',
			title: 'Artwork 1',
		},
		{
			url: '/BrandCenter/DigitalGoodsServices.svg',
			title: 'blog',
		},
		{
			url: '/BrandCenter/DigitalGoodsServices.svg',
			title: 'Careers',
		},
		{
			url: '/BrandCenter/DigitalGoodsServices.svg',
			title: 'Challenge',
		},
		{
			url: '/BrandCenter/DigitalGoodsServices.svg',
			title: 'Webinar',
		},
		{
			url: '/BrandCenter/DigitalGoodsServices.svg',
			title: 'Customers',
		},
		{
			url: '/BrandCenter/DigitalGoodsServices.svg',
			title: 'Demos',
		},
		{
			url: '/BrandCenter/DigitalGoodsServices.svg',
			title: 'DT&S Platform',
		},
		{
			url: '/BrandCenter/DigitalGoodsServices.svg',
			title: 'E-book',
		},
		{
			url: '/BrandCenter/DigitalGoodsServices.svg',
			title: 'Partners',
		},
		{
			url: '/BrandCenter/DigitalGoodsServices.svg',
			title: 'News and Press',
		},
		{
			url: '/BrandCenter/DigitalGoodsServices.svg',
			title: 'One Pager',
		},
		{
			url: '/BrandCenter/DigitalGoodsServices.svg',
			title: 'Partner Program',
		},
	];
	const ValuesImage1 = [
		{
			url: '/BrandCenter/DigitalGoodsServices.svg',
			title: 'Courage Over Comfort',
		},
		{
			url: '/BrandCenter/DigitalGoodsServices.svg',
			title: 'Ever Better',
		},
		{
			url: '/BrandCenter/DigitalGoodsServices.svg',
			title: 'Get Sift done',
		},
		{
			url: '/BrandCenter/DigitalGoodsServices.svg',
			title: 'Start with the Customer',
		},
		{
			url: '/BrandCenter/DigitalGoodsServices.svg',
			title: 'Win as one Team',
		},
	];
	const GeneralImage = [
		{
			url: '/GeneralIcon/airplane-tilt-fill.svg',
		},
		{
			url: '/GeneralIcon/archive-box-fill.svg',
		},
		{
			url: '/GeneralIcon/bag-simple-fill.svg',
		},
		{
			url: '/GeneralIcon/bank-fill.svg',
		},
		{
			url: '/GeneralIcon/book-open-fill.svg',
		},
		{
			url: '/GeneralIcon/brandy-fill.svg',
		},
		{
			url: '/GeneralIcon/browsers-fill.svg',
		},
		{
			url: '/GeneralIcon/buildings-fill.svg',
		},
		{
			url: '/GeneralIcon/calendar-check-fill.svg',
		},
		{
			url: '/GeneralIcon/car-fill.svg',
		},
		{
			url: '/GeneralIcon/circle-wavy-check-fill.svg',
		},
		{
			url: '/GeneralIcon/circle-wavy-warning-fill.svg',
		},
		{
			url: '/GeneralIcon/cloud-fill.svg',
		},
		{
			url: '/GeneralIcon/currency-circle-dollar-fill.svg',
		},
		{
			url: '/GeneralIcon/file-code-fill.svg',
		},
		{
			url: '/GeneralIcon/file-search-fill.svg',
		},
		{
			url: '/GeneralIcon/files-fill.svg',
		},
		{
			url: '/GeneralIcon/gift-fill.svg',
		},
		{
			url: '/GeneralIcon/git-pull-request-fill.svg',
		},
		{
			url: '/GeneralIcon/globe-fill.svg',
		},
		{
			url: '/GeneralIcon/identification-card-fill.svg',
		},
		{
			url: '/GeneralIcon/laptop-fill.svg',
		},
		{
			url: '/GeneralIcon/lightbulb-filament-fill.svg',
		},
		{
			url: '/GeneralIcon/lock-key-fill.svg',
		},
		{
			url: '/GeneralIcon/shield-check-fill.svg',
		},
		{
			url: '/GeneralIcon/trophy-fill.svg',
		},
		{
			url: '/GeneralIcon/user-circle-fill.svg',
		},
		{
			url: '/GeneralIcon/user-switch-fill.svg',
		},
		{
			url: '/GeneralIcon/users-three-fill.svg',
		},
		{
			url: '/GeneralIcon/wine-fill.svg',
		},
		{
			url: '/GeneralIcon/handbag-fill.svg',
		},
		{
			url: '/GeneralIcon/handshake-fill.svg',
		},
		{
			url: '/GeneralIcon/headset-fill.svg',
		},
		{
			url: '/GeneralIcon/chart-bar-fill.svg',
		},
		{
			url: '/GeneralIcon/chats-fill.svg',
		},
		{
			url: '/GeneralIcon/clock.svg',
		},
		{
			url: '/GeneralIcon/location.svg',
		},
		{
			url: '/GeneralIcon/CheckCircle.svg',
		},
		{
			url: '/GeneralIcon/XCircle.svg',
		},
		{
			url: '/GeneralIcon/AcountDefense.svg',
		},
		{
			url: '/GeneralIcon/ContentIntegrity.svg',
		},
		{
			url: '/GeneralIcon/DisputeManagement.svg',
		},
		{
			url: '/GeneralIcon/PasswordlessAuthentication.svg',
		},
		{
			url: '/GeneralIcon/PaymentProtection.svg',
		},
		{
			url: '/GeneralIcon/PSD2.svg',
		},
		{
			url: '/GeneralIcon/SiftConnect.svg',
		},
		{
			url: '/GeneralIcon/SiftNewReleases.svg',
		},
	];

	return (
		<section className="Iconography bg-white pb-0" id={id}>
			<div className="container">
				<Intro {...introDetail} />
				<div className="wrap mb-[40px] laptop:mb-[20px] xl:mb-[10px]">
					<div className="intro pb-[24px] border-b-[1px] border-black mb-[56px] xl:mb-[30px]">
						<h3>Display</h3>
					</div>
					<div className="flex flex-wrap w-[calc(100%+24px)] -ml-[12px] xs:w-full xs:ml-0 mt-[56px] xl:mt-[30px]">
						{DisplayImage.map((image, index) => {
							return (
								<div
									key={index}
									className={` xl:mb-[20px] mb-[56px] w-[calc(20%-24px)] m-[12px] mt-0 rounded-[6px] overflow-hidden phablet:w-[calc(25%-24px)] sm:w-[calc(33.33%-24px)] xs:w-[calc(50%-24px)]`}
								>
									<div className="w-fit text-center mx-auto">
										<div className="wrap w-fit max-w-[130px] xl:w-full mx-auto">
											<Image
											className=' w-full h-full xl:mx-auto max-w-[80px] object-contain'
												src={image.url}
												width={150}
												height={150}
												alt="icon"
											/>
										</div>
										<p className="small_font mt-[10px]">{image.title}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className="wrap mb-[40px] laptop:mb-[20px] xl:mb-[10px]">
					<div className="intro pb-[24px] border-b-[1px] border-black mb-[56px] xl:mb-[30px]">
						<h3>Values</h3>
					</div>
					<div className="flex flex-wrap w-[calc(100%+24px)] -ml-[12px] xs:w-full xs:ml-0 mt-[56px] xl:mt-[30px]">
						{ValuesImage1.map((image, index) => {
							return (
								<div
									key={index}
									className={`text-center xl:mb-[20px] mb-[80px] w-[calc(20%-24px)] m-[12px] mt-0 rounded-[6px] overflow-hidden phablet:w-[calc(25%-24px)] sm:w-[calc(33.33%-24px)] xs:w-[calc(50%-24px)]`}
								>
									<div className="w-fit text-center mx-auto">
									<div className="wrap w-fit max-w-[130px] xl:w-full mx-auto">
											<Image
											className='w-full h-full xl:mx-auto max-w-[80px] object-contain'
												src={image.url}
												width={150}
												height={150}
												alt="icon"
											/>
										</div>
										<p className="small_font mt-[10px]">{image.title}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className="wrap mb-[40px] xl:mb-[20px]">
					<div className="intro pb-[24px] border-b-[1px] border-black mb-[56px] xl:mb-[30px]">
						<h3>General</h3>
					</div>
					<div className="flex flex-wrap w-[calc(100%+24px)] -ml-[12px] xs:w-full xs:ml-0 mt-[56px] xl:mt-[30px]">
						{GeneralImage.map((image, index) => {
							return (
								<div
									key={index}
									className={`w-[calc(10%-24px)] xl:mb-[20px] mb-[80px] m-[12px] mt-0 rounded-[6px] overflow-hidden phablet:w-[calc(20%-24px)] sm:w-[calc(25%-24px)] xs:w-[calc(33.33%-24px)]`}
								>
									<div className="wrap mx-auto w-fit">
										<Image src={image.url} width={40} height={40} alt="icon" />
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
