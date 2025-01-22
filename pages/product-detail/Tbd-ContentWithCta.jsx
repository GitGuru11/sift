import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Video_btn from "../../components/button/VideoButton";

const line = <svg width="256" height="361" objectFit="cover" viewBox="0 0 556 361" fill="none" xmlns="http://www.w3.org/2000/svg">

	<path d="M375.416 361H2.07578C0.929948 361 0 360.071 0 358.925C0 357.78 0.929948 356.851 2.07578 356.851H375.416C472.703 356.851 551.857 277.738 551.857 180.5C551.857 83.2624 472.703 4.14943 375.416 4.14943C278.128 4.14943 198.975 83.2624 198.975 180.5C198.975 181.645 198.045 182.575 196.899 182.575C195.753 182.575 194.823 181.645 194.823 180.5C194.823 132.284 213.605 86.9553 247.714 52.8637C281.823 18.772 327.175 0 375.407 0C423.64 0 469 18.772 503.109 52.8637C537.218 86.9553 556 132.284 556 180.5C556 228.716 537.218 274.045 503.109 308.136C469 342.228 423.648 361 375.407 361H375.416Z" fill="#FF3B84" />
</svg>

function ContentWithCta() {
	const [backgroundColor, setBackgroundColor] = useState('bg-white');

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
					translate = (elementTop - 200) / 4;
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
	const bgWhite ="lg:after:content-[''] lg:after:absolute lg:after:w-[calc(100%+100px)] lg:after:h-full lg:after:bg-white   lg:after:bottom-0  lg:after:left-1/2 lg:after:-translate-x-1/2 lg:after:-z-10"

	return (
		<section className="content-with-cta lg:bg-white lg-up:bg-grad-second-black-to-blue  z-10 overflow-x-clip no-padding-top overflow-hidden">
			<div className="img-box absolute bottom-[80px] right-0 w-[330px] h-[400px] laptop:w-[275px] desktop:w-[225px] lg:w-[190px] laptop-landscape:w-[245px!important] lg:hidden">
				{/* <Image
					src="/bg-shapes.png"
					className="z-[-1] relative"
					alt="bg-vector"
					width={500}
					height={500}
				/> */}
				<div className="pills_animate w-full h-full absolute bottom-0 right-0">
					<Image
						className="w-full"
						src="/pills_filled.svg"
						alt="pills_filled"
						width="1088"
						height="939"
					/>
				</div>
				<div className="stroke_animate absolute  w-full h-full bottom-0 right-0">
					<Image
						className="w-full"
						src="/pills_outline.svg"
						alt="pills_outline"
						width="1088"
						height="939"
					/>
				</div>
				<div className="dot_animate absolute  w-full h-full bottom-0 right-0">
					<Image
						className="w-full -mt-[35px]"
						src="/doted.svg"
						alt="doted"
						width="1088"
						height="939"
					/>
				</div>
			</div>
			<div className="container">
				<div className={`relative ${backgroundColor}   lg-up:rounded-[300px] pr-[56px]  lg:pr-0 lg-up:overflow-hidden md:pt-[20px]`}>
					<div className="relative wrapper w-full  md-up:flex flex-wrap items-center z-10">
						<div className="col-left w-[42%] lg:w-full lg:mb-[10px] pr-[18px]">
							<div className="relative img-wrap w-full lg:max-w-[500px] lg:mx-auto xl-up:mt-[-5px]  xl-up:ml-[-4px]">
								{/* <div className="icon-wrap absolute top-[45%] left-[51%] -translate-x-[45%]  -translate-y-[50%]  w-[37px] h-[37px] z-10 cursor-pointer">
									<Image src='/button/play.svg' alt='video icon' width={37} height={37} quality={75}/>
								</div> */}
								<Image className='rounded-full object-contain' src='/productPage/mobile-video.png' alt='img' width={594} height={580} quality={75} />
							</div>
						</div>
						<div className="col-right w-[calc(58%-20px)] lg:w-full ml-[20px] lg:ml-0 xl-up:pl-[12px] xl-up:pt-[5px] md:pl-0">
							<div className="text-wrap relative pr-5 large-desktop:pr-10 wide-screen:pr-16 md:pr-0 lg:pt-0 desktop:py-[30px]  pb-0 tablet:pb-[20px] md-up:flex md-up:justify-center flex-col">
								<h3 className="mb-[40px] md:mb-[20px] tablet:mb-[25px] desktop:mb-[25px] max-w-[390px] xl-up:max-w-[520px] xxl-mid-up:max-w-[100%] wide-screen:max-w-[100%]">
									AI-Powered Fraud Decisioning..
								</h3>
								<p>
									AI-Powered Fraud Decisioning..
								</p>

								<div className="btn-wrap  mt-[40px]  md:mt-[20px] tablet:mt-[25px] desktop:mt-[25px]">
									<Video_btn text="LEARN MORE" link="/" videoPath='https://www.youtube.com/embed/NTZcKmgWmN0?si=6myFNKgSNHFOAptI?mute=1&autoplay=1'/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContentWithCta
