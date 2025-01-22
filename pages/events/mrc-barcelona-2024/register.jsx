import React from 'react';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Layout from '../../../components/Layout';
import Btn_Pink from '../../../components/button/Button_Pink';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import styles from './index.module.css';
import MarketoForm from '../../../components/MarketoForm';
import Sponser from '../../../pages/resources/sections/Sponser';
import Presenters from '../Presenters';
import { useRouter } from 'next/router';

const inter = Inter({
	subsets: ['latin'],
	weight: ['700'],
});
export default function Index() {
	const bgColor = `bg-darkBlue`;
	const router = useRouter();
	const aliId = router.query?.aliId;
	useEffect(() => {
		const thankYouMessage = document.querySelector('.thankYouMessage');
		const formWrap = document.querySelector('.formWrap');
		if (aliId && aliId !== '') {
			formWrap.classList.add('hidden');
			thankYouMessage.classList.remove('hidden');
		} else {
			formWrap.classList.remove('hidden');
			thankYouMessage.classList.add('hidden');
		}
	}, [aliId]);
	// useEffect(() => {
	// 	if (typeof window !== 'undefined') {
	// 		const externalScript = document.createElement('script');
	// 		externalScript.src = '//pages.sift.com/js/forms2/js/forms2.min.js';
	// 		externalScript.async = true;
	// 		document.head.appendChild(externalScript);
	// 		externalScript.onload = () => {
	// 			const formScript = document.createElement('script');
	// 			formScript.innerHTML = `
	// 		  MktoForms2.loadForm("//pages.sift.com", "526-PCC-974", 1062);
	// 		`;
	// 			document.body.appendChild(formScript);
	// 		};
	// 		// Cleanup when the component unmounts
	// 		return () => {
	// 			document.head.removeChild(externalScript);
	// 		};
	// 	}
	// }, []);
	return (
		<Layout>
			<NextSeo
				title="MRC Barcelona 2024 - Sift"
				description="Join us in Barcelona, Spain for MRC April 22—24, 2024"
			/>
			<section
				className={`gatedResourceDetail pt-[80px] bg-[#fff] banner ${styles.gatedResourceDetail}`}
			>
				<div className="container">
					<span
						className="hidden"
						id={'marketo-program-id'}
						data-marketo-id="3520"
					></span>
					<div className="flex items-start flex-wrap lg-up:mt-[30px]">
						<div className="w-[522px] xxl-up:w-[50%] laptop:w-[48%] xl:w-[100%] xl:mt-[30px] lg:mt-[0!important]">
							<h1>MRC Barcelona 2024</h1>
							<div className={`event ${styles.event}`}>
								<ul>
									<li>
										<div>
											<Image
												src="/resources/location.svg"
												width={24}
												height={24}
												alt="Image"
											/>
											<p>Barcelona</p>
										</div>
									</li>
									<li>
										<div>
											<Image
												src="/resources/clock.svg"
												width={24}
												height={24}
												alt="Image"
											/>
											<p>9 a.m. CET</p>
										</div>
									</li>
									<li>
										<div>
											<Image
												src="/resources/calendar-check-fill.svg"
												width={24}
												height={24}
												alt="Image"
											/>
											<p>April 22 - 24, 2024</p>
										</div>
									</li>
								</ul>
							</div>
							<p>
								Join us at MRC Barcelona 2024, the pinnacle event for
								professionals in the payments and fraud prevention industry.
								Dive deep into cutting-edge keynotes, expert panels, and
								interactive networking sessions.
							</p>
							<h3>Top Reasons to Attend</h3>
							<p>
								<b>Next-level Networking</b>
							</p>
							<p>
								Interact with fraud experts from Sift, as well as payments peers
								and thought leaders from across the globe.
							</p>
							<p>
								<b>Industry Intelligence</b>
							</p>
							<p>
								Attend one-of-a-kind keynote speeches, panel discussions, and
								presentations by payments and fraud management experts.
							</p>
							<p>
								<b>Business Development</b>
							</p>
							<p>
								Workshops, seminars, and sessions at MRC Barcelona delve into
								new technologies, strategies, and best practices in eCommerce.
							</p>
							<Presenters />
						</div>

						<div
							className={`boxWrap  ${bgColor} absolute w-[551px] text-white right-0  lg:relative xl:relative xl:mt-[40px] lg:mt-[20px!important] desktop-laptop:w-[48%] desktop:w-[44%] xxl-up:w-[45%] xl:max-w-[620px] xl:w-[100%!important] ${styles.boxWrap}`}
						>
							<div
								className={`${styles.formWrap} min-h-[400px] relative pt-[40px] pb-[60px] pl-[62px] pr-[80px] xxl-up:w-full laptop:w-full desktop:p-[40px] xl:p-[36px] md:p-[25px!important] md:py-[30px!important]`}
							>
								<div className={`formWrap`}>
									<h3 className="!text-white">
										Meet our Team at MRC Barcelona
									</h3>
									<MarketoForm formId="1868" formData="" className="mktFrom" />
								</div>
								<div className={`thankYouMessage mt-[60px]`}>
									<h3 className="!text-white">
										Thank you, we will be in contact soon.
									</h3>
								</div>
								<div
									className={`${
										bgColor == 'bg-black mt-[20px] '
											? 'text-white mt-[20px] '
											: ' text-black '
									}`}
								></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}
