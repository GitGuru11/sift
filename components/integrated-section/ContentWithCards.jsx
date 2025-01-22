import Image from 'next/image';
import React, { useEffect } from 'react';
import Style from '../../styles/platform/contentWithCard.module.css';
import DynamicButton from '../global-components/Buttons';
import DynamicLinks from '../global-components/Links';
function ContentWithCards(props) {
	let data = props.items;
	useEffect(() => {
		const parallaxElements = document.querySelectorAll('.stroke_animate');
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
					translate = (elementTop - 312) / 6;
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
		const parallaxElements = document.querySelectorAll('.dot_animate');
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
					translate = (elementTop - 200) / 3.5;
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
		const parallaxElements = document.querySelectorAll('.pills_animate');
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
					translate = (elementTop - 250) / 5.5;
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
		<section
			id={data.id ? data.id : ''}
			className={`ContentWithCards z-[11] ${data.background} ${data.classes} ${data.padding} relative overflow-hidden`}
		>
			{
				data?.background == 'custom' && (
					<div className="custom-bg-img absolute left-0 top-[0px] w-full h-full ">
						{data?.backgroundImage && data?.backgroundImage?.sourceUrl && <Image className="w-full h-full object-cover" src={data?.backgroundImage?.sourceUrl} alt={data?.backgroundImage?.altText} width="1200" height="1200" />}
					</div>
				)
			}
			<div className="img-box bg-graphic absolute bottom-0 left-0 w-[540px] h-[350px] laptop:-mt-[150px] laptop:w-[400px] desktop:w-[300px] laptop-landscape:w-[480px!important] wide-screen:top-[140px!important] lg:hidden">
				{/* <Image
					src="/backround_content_with_card_shapes.png"
					className="relative"
					alt="bg-vector"
					width={565}
					height={336}
				/> */}
				<div className="pills_animate w-full h-full absolute bottom-0 right-0">
					<Image
						className="w-full"
						src="/pattern_2_outline.svg"
						alt="banner_pills"
						width="540"
						height="800"
					/>
				</div>
				<div className="stroke_animate absolute  w-full h-full bottom-0 right-0">
					<Image
						className="w-full"
						src="/pattern_2_pills.svg"
						alt="banner_stroke"
						width="540"
						height="800"
					/>
				</div>
				<div className="dot_animate absolute  w-full h-full bottom-0 right-0">
					<Image
						className="w-full"
						src="/pattern_2_dots.svg"
						alt="banner_dots"
						width="540"
						height="800"
					/>
				</div>
			</div>
			<div className="container">
				<div className="wrapper flex flex-wrap w-[calc(100%+54px)] -ml-[27px] lg:w-full lg:ml-0">
					<div className="col-left w-[calc(49%-54px)] mx-[27px] xl:w-full desktop:mb-10 lg:mb-[20px] md:w-full md:mx-0">
						<div className="content">
							<h2>{data?.title}</h2>
							<div
								className="mt-[16px]"
								dangerouslySetInnerHTML={{ __html: data?.body }}
							/>
						</div>
					</div>
					<div className="col-right w-[calc(51%-54px)] ml-[26px] mr-[28px] xl:w-full md:w-full md:mx-0">
						<div
							className="card_wrap w-full grid gap-[24px] grid-cols-2 sm:grid-cols-1"
							data-aos="fade-up"
							data-aos-delay="500">
							{data?.classes?.includes("withImage") ? (
									data?.cards && data?.cards.map((item, i) => {
										return (
											<div key={i} className={`${Style.card} relative bg-white  rounded-[16px] duration-300 overflow-hidden`}>
												<DynamicLinks cta={item?.buttons} />
												{item?.image && item?.image?.sourceUrl && (
													<div className={`${Style.img_wrap} img-wrap h-[163px] wide-screen:h-[275px] overflow-hidden`} >
														<Image
															src={`${item?.image?.sourceUrl}`}
															alt={`${item?.image?.altText}`}
															className="w-full h-full object-cover duration-500 group-hover:scale-[1.05] transition-all"
															height={200}
															width={200}
															quality={100}
														/>
													</div>
												)}
												<div className="content-wrap  lg:pb-[60px]  desktop:pb-[60px] xl-up:pb-[73px] desktop:p-[20px] laptop-landscape:p-[32px] laptop-landscape:pb-[90px] laptop:pb-[85px]  p-[32px]  laptop:p-[25px] lg:p-[15px]">
				
													<h4 className="mb-[9px]">{item?.title}</h4>
													<p
														dangerouslySetInnerHTML={{
															__html: item?.bodyWithoutEditor,
														}}
													/>
													<div className="btn absolute left-[27px] md:left-auto bottom-[27px]">
														<DynamicButton cta={item?.buttons} />
													</div>
												</div>
											</div>
										)
									})
									
								) : (
									data?.cards && data?.cards.map((data, index) => {
										return (
											<div
												key={index}
												className={`${Style.card} relative bg-white p-[27px] pb-[100px] rounded-[16px]`}
											>
												<DynamicLinks cta={data?.buttons} />
												{data?.image && data?.image?.sourceUrl && (
													<div className="icon-wrap mb-[18px]">
														<Image
															src={`${data?.image?.sourceUrl}`}
															alt={`${data?.image?.altText}`}
															width={40}
															height={40}
														/>
													</div>
												)}
												<h4 className="mb-[9px]">{data?.title}</h4>
												<p
													dangerouslySetInnerHTML={{
														__html: data?.bodyWithoutEditor,
													}}
												/>
												<div className="btn absolute left-[27px] md:left-auto bottom-[27px]">
													<DynamicButton cta={data?.buttons} />
												</div>
											</div>
										);
									})
								)
							}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContentWithCards;
