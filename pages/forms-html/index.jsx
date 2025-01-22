import React from "react"
import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../../components/Layout'
import Link from "next/link"
import Image from "next/image"
import styles from './index.module.css';
import MarketoForm from '../../components/MarketoForm';
import Btn_Pink from '../../components/button/Button_Pink';
import { useRouter } from 'next/router';
export default function Forms() {
	const bgColor = `bg-darkBlue`;
	const router = useRouter();
	const aliId = router.query?.aliId;
	useEffect(() => {
		// Add class in footer
		const footerElement = document.querySelector('.footer');
		if (footerElement) {
			footerElement.classList.add('z-[1]')
		}

		//This is thankyou popup
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

	useEffect(() => {
		document.body.className = 'forms-html'
		return () => {
			document.body.className = ''
		}
	}, [])

	useEffect(() => {
		const parallaxElements = document.querySelectorAll('.parallax_element');
		const height = window.innerHeight;
		function handleScroll() {
			const scrollPos = window.scrollY;
			parallaxElements.forEach(function (element, index) {
				const parent = element.parentNode;
				const parentHeight = parent.getBoundingClientRect().height;
				const elementTop = element.getBoundingClientRect().top;
				const elementHeight =
					window.pageYOffset + element.getBoundingClientRect().top;
				element.style.top = `${(parentHeight - 100) / 100}px`;
				let translate;
				if (window.innerWidth < 767) {
					translate = elementTop / 16;
				} else {
					translate = (elementTop - 700) / 10;
				}

				if (elementHeight - height < scrollPos) {
					element.style.transform = `translate3d(0, ${translate}px, 0)`;
				}
			});
		}

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	return (
		<Layout>
			<NextSeo title="GatedResource - Sift" description="Sift - Form Html" />
			<section
				className={`gatedResourceDetail banner bg-[#fff] pt-[100px] xl:pt-[80px] ${styles.gatedResourceDetail}`}
			>
				{/* <div className="bg-white !absolute top-0 left-0 w-full h-full"></div> */}
				<div className="container">
					<div className="flex items-start flex-wrap">
						<div className="w-[570px] desktop:w-[450px] xxl-up:w-[50%] laptop:w-[48%] laptop-landscape:mb-[40px] desktop-mid:w-full laptop-small:w-[400px] xl:w-[100%] xl:!mt-[0]">
							<h1>Headline About Requesting a Demo</h1>
							{/* <div className={`event ${styles.event}`}> */}
							<p>AI-Powered Fraud Decisioning.. </p>
							<div className={`${styles.textWrap}`}>
								<p>Talk to our team today to:</p>
								<ul className="relative !block">
									<li>
										<p>Achieve <Link href="#" className="text-blue">up to 285% ROI</Link></p>
									</li>
									<li>
										<p>Increase user acceptance rates <Link href="#" className="text-blue"> up to 99%</Link></p>
									</li>
									<li>
										<p>Drop time spent on manual review  <Link href="#" className="text-blue"> up to 80%</Link></p>
									</li>
								</ul>
							</div>
							{/* </div> */}
							<Image
								src="/requestForm/laptop.png"
								className="bg-black rounded-[24px]"
								width={496}
								height={320}
								alt="Image"
							/>
							<div className={` sponsors p-0 ${styles.sponsors}`}>
								<h3>Trusted by the worlds leading companies</h3>
								<div>
									<div>
										<Link href="/" className="inline-block">
											<Image
												src="/requestForm/toyota.svg"
												width={120}
												height={40}
												alt="Image"
											/>{' '}
										</Link>
									</div>
									<div className="text-right sm:text-left">
										<Link href="/" className="inline-block">
											<Image
												src="/requestForm/slack.svg"
												width={160}
												height={29}
												alt="Image"
											/>{' '}
										</Link>
									</div>
									<div className="text-right sm:text-left">
										<Link href="/" className="inline-block">
											<Image
												src="/requestForm/amazon.svg"
												width={160}
												height={29}
												alt="Image"
											/>{' '}
										</Link>
									</div>
									<div>
										<Link href="/" className="inline-block">
											<Image
												src="/requestForm/google.svg"
												width={160}
												height={29}
												alt="Image"
											/>{' '}
										</Link>
									</div>
									<div className="text-right sm:text-left">
										<Link href="/" className="inline-block">
											<Image
												src="/requestForm/caderSinai.svg"
												width={160}
												height={29}
												alt="Image"
											/>{' '}
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div
							className={`boxWrap  ${bgColor} absolute w-[551px] text-white right-0 z-[1] lg:relative desktop-mid:relative desktop-mid:w-full lg:!mt-[0] desktop-mid:mt-[40px] desktop-laptop:w-[48%] desktop:w-[44%] xxl-up:w-[45%] xl:w-[100%] ${styles.boxWrap}`}
						>
							<div className={`${styles.formWrap} min-h-[400px] relative pt-[40px] pb-[60px] pl-[62px] pr-[80px] xxl-up:w-full laptop:w-full desktop:p-[40px] xl:p-[36px] md:px-[25px!important] md:py-[30px!important]`}>

								<div className={`formWrap`}>
									<h3 className='!text-white'>
										AI-Powered Fraud Decisioning..
									</h3>
									<MarketoForm formId="1058" formData="" className="mktFrom" />
								</div>
								<div className={`thankYouMessage mt-[60px]`}>
									<h2 className='!text-white'>Thank you, we will be in contact soon.</h2>
								</div>

								<div
									className={`${bgColor == 'bg-black mt-[20px] ' ? 'text-white mt-[20px] ' : ' text-black '
										}`}
								>
									{/* <Btn_Pink text="submit" link="/" /> */}
								</div>
							</div>

						</div>
					</div>
				</div>
				<div
					className={`${styles.parallax_element} parallax_element img-box absolute right-0 top-[auto!important] -bottom-[100px] lg:-bottom-[90px] xxl-up:-bottom-[100px] w-[35%]`}
				>
					<Image
						className="w-full"
						src="/requestForm/full-shapes.png"
						alt="top"
						width="620"
						height="339"
					/>
				</div>
			</section>
		</Layout>
	)
}