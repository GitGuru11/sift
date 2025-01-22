import React, {useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import DynamicButton from '../global-components/Buttons';

export default function BannerThirdLevel(props) {
	let data = props.items;
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
				element.style.bottom = `${(parentHeight - 1900) / 100}px`;
				let translate;
				if (window.innerWidth < 1024) {
					translate = (elementTop + 100) / 16;
				} else {
					translate = (elementTop + 700) / 10;
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
		<>
			<section className={` banner BannerThirdLevel relative min-h-[416px] pt-[152px] pb-[101px] laptop-landscape:pb-[125px] laptop-landscape:pt-[75px] lg:pt-[50px] desktop:pt-[52px] desktop:min-h-[316px] ${data.background} ${data.classes} ${data.padding}`}>
			{
				data?.background == 'custom' && (
					<div className="custom-bg-img absolute left-0 top-[0px] w-full h-full ">
						{data.backgroundImage?.sourceUrl && <Image className="w-full h-full object-cover" src={data?.backgroundImage?.sourceUrl} alt={data?.backgroundImage?.altText} width="1200" height="1200" />}
					</div>
				)
			}
				{!data?.imagevideo && data?.image && data?.image?.sourceUrl &&
					<div className="parallax_element img-box absolute right-0 bottom-[-30px] wide-screen:bottom-[-40px] w-auto xxl-up:h-[565px] h-[510px] wide-screen:h-[720px] desktop:h-[380px] desktop:bottom-[-100px] tablet:h-[350px] phablet:h-[410px] sm:h-[360px] md:hidden">
						<Image
								className={`${data?.image?.width && data?.image?.height ? '' : 'w-auto h-full'} object-contain`}
							src={`${data?.image?.sourceUrl}`} alt={`${data?.image?.altText}`}
							width={`${data?.image?.width ? data.image.width : '865'}`}
							height={`${data?.image?.height ? data.image.height : '610'}`}
						/>
					</div> }
					{data?.imagevideo &&  data?.video && data?.video?.mediaItemUrl && 
					<div className="img-box absolute right-0 bottom-[-30px] wide-screen:bottom-[-40px] w-auto xxl-up:h-[565px] h-[510px] wide-screen:h-[720px] desktop:h-[380px] desktop:bottom-[-100px] tablet:h-[350px] phablet:h-[410px] sm:h-[360px] md:hidden">
						<video autoPlay playsInline loop muted width="420" height="540">
							<source src={data?.video?.mediaItemUrl} type="video/mp4" />
						</video>
					</div>}
				<div className={`container ${data?.fixedWidth ? 'banner-third-level-content-container' : ''}`}>
					<div className="flex">
						<div className="z-10 max-w-[667px] lg:max-w-[549px] desktop-laptop:max-w-[550px] wide-screen:max-w-[1000px] laptop:mt-[50px] desktop:mt-[50px] laptop-landscape:mt-[70px] lg:mt-[70px] ">
							{data?.logo && 
								<div className='!pb-[30px]'>
									<Image
										src={`${data?.logo?.sourceUrl}`} 
										width="136"
										height="67"
										/>
								</div>
							}

							{data?.heading && <p className="text-white mb-[10px] font-bold">{data?.heading}</p>}
							<h1 className="text-white" dangerouslySetInnerHTML={{ __html: data?.title }}></h1>
							<div className="max-w-[900px] wide-screen:max-w-[870px] wide-screen:my-[40px] my-[32px] xl:my-[24px] lg:my-[25px] laptop-landscape:my-[30px] laptop-landscape:max-w-[601px] text-white" dangerouslySetInnerHTML={{ __html: data?.body }}></div>
							{data?.buttons &&
								<div className="btn-wrapper">
									<DynamicButton cta={data?.buttons} />
								</div>
							}
						</div>
					</div>
				</div>
			</section>
		</>
		
	);
}