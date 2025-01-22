import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import DynamicButton from '../global-components/Buttons';

const line = <svg width="256" height="361" objectFit="cover" viewBox="0 0 556 361" fill="none" xmlns="http://www.w3.org/2000/svg">

	<path d="M375.416 361H2.07578C0.929948 361 0 360.071 0 358.925C0 357.78 0.929948 356.851 2.07578 356.851H375.416C472.703 356.851 551.857 277.738 551.857 180.5C551.857 83.2624 472.703 4.14943 375.416 4.14943C278.128 4.14943 198.975 83.2624 198.975 180.5C198.975 181.645 198.045 182.575 196.899 182.575C195.753 182.575 194.823 181.645 194.823 180.5C194.823 132.284 213.605 86.9553 247.714 52.8637C281.823 18.772 327.175 0 375.407 0C423.64 0 469 18.772 503.109 52.8637C537.218 86.9553 556 132.284 556 180.5C556 228.716 537.218 274.045 503.109 308.136C469 342.228 423.648 361 375.407 361H375.416Z" fill="#FF3B84" />
</svg>

function ContentWithCta(props) {
	let data = props.items;
	// const [backgroundColor, setBackgroundColor] = useState('md-up:bg-white md:bg-[#F5F3F5]');

	useEffect(() => {
		const parallaxElements = document.querySelectorAll('.parallax_element');
		const height = window.innerHeight
		function handleScroll() {
			const scrollPos = window.scrollY
			parallaxElements.forEach(function (element, index) {
				const parent = (element.parentNode)
				const parentHeight = parent.getBoundingClientRect().height
				const elementTop = element.getBoundingClientRect().top
				const elementHeight = window.pageYOffset + element.getBoundingClientRect().top
				element.style.top = `${(parentHeight - 100) / 100}px`
				let translate
				if (window.innerWidth < 767) {
					translate = elementTop / 16
				} else {
					translate = (elementTop - 700) / 10
				}

				if ((elementHeight - height) < (scrollPos)) {
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
		<section id={data.id ? data.id : ''}  className= {`ContentWithCta BorderImageWithText md-up:pt-0 z-10 md:overflow-hidden content-with-cta pb-[60px] ${data.background} ${data.classes} ${data.padding}`}>
			
			{/* <div className="parallax_element bg-graphic absolute bottom-[80px] right-0 w-[330px]  laptop:w-[275px] desktop:w-[275px] laptop-landscape:w-[245px!important] h-full lg:hidden">
				<Image
					src="/bg-shapes.png"
					className="z-[-1] relative"
					alt="bg-vector"
					width={500}
					height={500}
				/>
			</div> */}
			{/* <div className="container"> */}
				<div className={` md-up:rounded-[300px] bg-[#F5F3F5] md-up:py-10 md-up:pr-10 pl-24 md:pl-0 tablet:pl-20 wide-screen:pl-[150px] md-up:overflow-hidden`} data-aos="fade-up">
					<div className="md-up:flex md-up:justify-between">
						<div className="text-wrap relative w-3/5 md:w-full pr-5 large-desktop:pr-10 wide-screen:pr-16 md:pr-0 md:!p-[20px] md:pt-0 pt-10 pb-16 md:pb-[48px] md-up:flex md-up:justify-center flex-col">
							
							{data.heading && <span className='uppercase text-[14px] font-[700]'>{data.heading}</span>}
							{data.title && <h4 className="mb-4 !mt-0" dangerouslySetInnerHTML={{ __html: data.title}}></h4>}
							{data.body && <div dangerouslySetInnerHTML={{ __html: data.body}}></div>}

							<div className="btn-wrap md-up:hidden md:mt-5">
								<DynamicButton cta={data.buttons} />
							</div>
						</div>
						<div className="CtaWithPattern w-[365px] max-w-[280px]  desktop:w-[240px] tablet:w-[238px] md:w-[265px] wide-screen:w-[465px] md:m-auto relative self-end">
							<div className="p-10 desktop:p-5 tablet:p-5 md:p-8 relative">
								<div className="absolute top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4 w-full h-full z-[2]">
									<div className="absolute w-full h-full  border-l-transparent rounded-[50%] -rotate-[43deg] ">
										<svg className="w-full h-full">
											<circle cx="50%" cy="50%" r="75" />
										</svg>
									</div>
								<div className="pink-circle absolute h-[4px] xxl-up:h-[4px]  md:h-[3px]  tablet:h-[3px] desktop:h-[3px] laptop-landscape:h-[3.5px!important]  wide-screen:h-[4px] right-[50%] bottom-0 md:bottom-[15px] bg-pink "></div>
								</div>
								<div className="relative laptopImage w-[198px]">
									{ data.image && <Image
										src={data.image.sourceUrl} alt={data.image.altText}
										width={365}
										height={365}
										className="relative z-10 w-full"
									/> }
									<div className="absolute yellowShadow top-0 right-0 w-[164%] h-[calc(100%+80px)]">
										<Image
											src="/yellow-shadow.svg"
											width={285}
											height={410}
											alt="yellow-graphic"
											className="w-full h-full max-w-[unset]"
										/>
									<div className="btn-wrap absolute bottom-[40px] z-[99] desktop:bottom-[60px] tablet:bottom-[60px] left-[-65px] laptop-landscape:left-[-70px] md:bottom-auto md:top-[-112px] md:left-[50%] desktop:left-[-62px] wide-screen:left-[-145px] md:hidden">
											<DynamicButton cta={data.buttons} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/* </div> */}
		</section>
	);
}

export default ContentWithCta
