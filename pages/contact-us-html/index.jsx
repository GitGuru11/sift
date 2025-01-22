import React from 'react';
import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.css';
import MarketoForm from '../../components/MarketoForm';
import Btn_Pink from '../../components/button/Button_Pink';
import ArrowBtn from '../../components/button/Black_arrowBtn';
import TabLocation from '../../components/TabLocation';
import { useRouter } from 'next/router';
const ContentWithCardsData = [
	{
		title: 'Headline about our differentiators',
		blurb:
			'AI-Powered Fraud Decisioning..',
	},
	{
		cards: [
			{
				imgpath: '/chats-fill.svg',
				heading: 'Talk to An Expert',
				subHeading:
					'AI-Powered Fraud Decisioning..',
				ctaText: 'LEARN MORE',
				ctaLink: '/',
			},
			{
				imgpath: '/archive-box.svg',
				heading: 'Help & Support',
				subHeading:
					'AI-Powered Fraud Decisioning..',
				ctaText: 'LEARN MORE',
				ctaLink: '/',
			},
			{
				imgpath: '/lock-key.svg',
				heading: 'Media Inquiries',
				subHeading:
					'AI-Powered Fraud Decisioning..',
				ctaText: 'press@sift.com',
				ctaLink: '/',
			},
			{
				imgpath: '/git-pull-request-fill.svg',
				heading: 'Investors',
				subHeading:
					'AI-Powered Fraud Decisioning..',
				ctaText: 'lorem@sift.com',
				ctaLink: '/',
			},
		],
	},
];
export default function ContactUs() {
	const bgColor = `bg-darkBlue`;
	var sectionData = ContentWithCardsData;
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

	useEffect(() => {
		document.body.className = 'contact-form'
		return () => {
			document.body.className = ''
		}
	}, [])

	return (
		<Layout>
			<NextSeo title="GatedResource - Sift" description="Sift -Contact Us " />
			<section className={`pt-[100px] xl:pt-[80px] banner bg-[#fff] ${styles.gatedResourceDetail}`}>
				<div className="bg-white !absolute top-0 left-0 w-full h-full"></div>
				<div
					className={`${styles.parallax_element} parallax_element img-box absolute left-0 top-[auto!important] -bottom-[100px] lg:-bottom-[90px] xxl-up:-bottom-[100px] w-[75%]`}
				>
					<Image
						className="w-full"
						src="/requestForm/full-shapes.png"
						alt="top"
						width="1088"
						height="939"
					/>
				</div>
				<div className={`${styles.container} container`}>
					<div className="flex items-start flex-wrap">
						<div className="w-[570px] desktop:w-[450px] z-10 xxl-up:w-[50%] mb-[60px] laptop:mb-[120px] laptop-mid:mb-[100px] laptop-small:mb-[140px] wide-screen:mb-[220px] sm:mb-[30px] laptop-landscape:mb-[160px] laptop:w-[48%] desktop-mid:w-full laptop-small:w-[420px] xl:w-[100%] xl:!mt-[0]">
							<h1>Headline About Getting in Touch With Sift</h1>
							{/* <div className={`event ${styles.event}`}> */}
							<p>
								AI-Powered Fraud Decisioning..
								<Link href="tel:1 (408) 123-4567">1 (408) 123-4567</Link>.
							</p>
							{/* <div className={`${styles.textWrap}`}>
									
								</div> */}
							<div
								className="card_wrap w-full grid gap-[24px] xl:gap-[14px] tablet:mt-[30px] grid-cols-2 sm:grid-cols-1 mt-[61px] md:mt-[30px]"
								data-aos="fade-up"
								data-aos-delay="500"
							>
								{sectionData[1].cards.map((item, i) => {
									return (
										<div
											key={i}
											className={`${styles.card} relative bg-white pt-[32px] pb-[30px] pl-[28px] pr-[30px] xl:p-[20px] border-[1px] rounded-[16px] hover:shadow-black-shadow`}
										>
											<Link className="emptyLink" href="/homepage">
												.
											</Link>
											<div className="icon-wrapper mb-[16px] sm:mb-[10px]">
												<Image
													src={item.imgpath}
													alt="icon"
													width={40}
													height={40}
												/>
											</div>
											<h4 className="mb-[9px]">{item.heading}</h4>
											<p className="xl-up:!text-[18px] mb-[50px] sm:!mb-[10px]">
												{item.subHeading}
											</p>
											<div className="btn mt-[50px] md:mt-[10px]">
												<ArrowBtn text={item.ctaText} link="/" />
											</div>
										</div>
									);
								})}
							</div>
						</div>
						<div
							className={`boxWrap  ${bgColor} absolute w-[551px] text-white right-0 lg:relative desktop-mid:relative desktop-mid:w-full desktop-laptop:w-[48%] desktop:w-[44%] xxl-up:w-[45%] xl:w-[100%] ${styles.boxWrap}`}
						>
							<div
								className={`${styles.formWrap} min-h-[400px] relative pt-[40px] pb-[60px] pl-[62px] pr-[70px] xxl-up:w-full laptop:w-full desktop:p-[40px] xl:p-[36px]`}
							>

								<div className={`formWrap`}>
									<h3 className="!text-white">
										Complete this quick form AI-Powered Fraud Decisioning...
									</h3>
									<MarketoForm formId="1058" formData="" className="mktFrom" />
								</div>
								<div className={`thankYouMessage mt-[60px]`}>
									<h2 className='!text-white'>Thank you, we will be in contact soon.</h2>
								</div>

								<div
									className={`${bgColor == 'bg-black mt-[20px] '
										? 'text-white mt-[20px] '
										: ' text-black '
										}`}
								>
									{/* <Btn_Pink text="submit" link="/" /> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<TabLocation />
		</Layout>
	);
}
