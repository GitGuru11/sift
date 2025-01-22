import React from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';;
import styles from '../../styles/BannerWithForm.module.css' 
import MarketoForm from '../../components/MarketoForm';
import DynamicButton from '../global-components/Buttons';
import { useRouter } from 'next/router';
import DynamicLink from '../global-components/Links';

export default function BannerWithForm(props) {
	let data = props.items;
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
		<section id={data.id ? data.id : ''} className={`BannerWithForm  xl:pt-[80px] md:!pt-[100px] banner ${styles.gatedResourceDetail} ${data.background} ${data.padding} ${data.classes}`}>
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
				<div className={`${styles.container} container min-h-[1071px] h-full`}>
					<div className="flex items-start flex-wrap">
						<div className="w-[570px] desktop:w-[450px] z-10 xxl-up:w-[50%] mb-[60px] laptop:mb-[120px] laptop-mid:mb-[100px] wide-screen:mb-[220px] sm:mb-[30px] laptop-landscape:mb-[160px] laptop:w-[48%] tablet-mid:w-full xl:w-[100%] xl:!mt-[0]">
							{data?.title && <h1 dangerouslySetInnerHTML={{__html: data?.title}}></h1>}
							{data?.body && <div dangerouslySetInnerHTML={{__html: data?.body}}></div>}
							<div
								className="card_wrap w-full grid gap-[24px] xl:gap-[14px] tablet:mt-[30px] grid-cols-2 sm:grid-cols-1 mt-[61px] md:mt-[30px]"
								data-aos="fade-up"
								data-aos-delay="500"
							>
								{data?.cards && data?.cards.map((item, i) => {
									return (
										<div key={i} className={`${styles.card} relative bg-white pt-[32px] pb-[30px] pl-[28px] pr-[30px] xl:p-[20px] border-[1px] rounded-[16px] hover:shadow-black-shadow`}>
											{/* <Link className="emptyLink" href="/homepage">.</Link> */}
											<DynamicLink cta={item?.buttons} />
											{item?.icon && <div className="icon-wrapper mb-[16px] sm:mb-[10px]">
												<Image
													src={item?.icon?.sourceUrl}
													alt={item?.icon?.altText}
													width={40}
													height={40}
												/>
											</div>}
											{item?.title && <h4 className="mb-[9px]" dangerouslySetInnerHTML={{__html: item?.title}}></h4>}
											{item?.bodyWithoutEditor && <p className="xl-up:!text-[18px] mb-[50px] sm:!mb-[10px]" dangerouslySetInnerHTML={{__html: item?.bodyWithoutEditor}}></p>}
											<div className="btn mt-[50px] md:mt-[10px]">
												<DynamicButton cta={item?.buttons} />
											</div>
										</div>
									);
								})}
							</div>
						</div>
						{data?.form && <div className={`boxWrap ${bgColor} absolute w-[551px] text-white right-0 lg:relative tablet-mid:relative tablet-mid:w-full desktop-laptop:w-[48%] desktop:w-[44%] xxl-up:w-[45%] xl:w-[100%] ${styles.boxWrap}`}>
							<div className={`${styles.formWrap} min-h-[400px] relative pt-[40px] pb-[60px] pl-[62px] pr-[70px] xxl-up:w-full laptop:w-full desktop:p-[40px] xl:p-[36px]`}>
								<div className={`formWrap`}>
									{data?.form?.formHeading && <h3 className="!text-white" dangerouslySetInnerHTML={{__html: data?.form?.formHeading}}></h3> }
									{data?.form?.formId && <MarketoForm formId={data?.form?.formId} formData="" className="mktFrom" />}
								</div>
								<div className={`thankYouMessage mt-[60px]`}>
									<h2 className='!text-white'>Thank you, we will be in contact soon.</h2>
								</div>
								<div className={`${bgColor == 'bg-black mt-[20px] ' ? 'text-white mt-[20px] ': ' text-black '}`}></div>
							</div> 
						</div>}
					</div>
				</div>
			</section>
	);
}
