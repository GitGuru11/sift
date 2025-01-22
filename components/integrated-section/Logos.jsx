import React, { useEffect } from 'react';
import Image from 'next/image';
import $ from "jquery";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Logos(props) {
	let data = props.items;
	useEffect(() => {
		var logolength = $(".logos .item").length;
		if (logolength < 9) {
			$(".logos").addClass("slick-stop");
		}
	})
	const settings = {
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 8000,
		arrows: false,
		pauseOnHover: false,
		cssEase: 'linear',
		ltr: true,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,

				}
			},
			{
				breakpoint: 595,
				settings: {
					slidesToShow: 2,

				}
			}
		]
	};
	return (
		<section id={data.id ? data.id : ''} className={`logos  overflow-hidden ${data.background} ${data.padding} ${data.classes}`}>
			{
				data?.background == 'custom' && (
					<div className="custom-bg-img absolute left-0 top-[0px] w-full h-full ">
						{data?.backgroundImage?.sourceUrl && <Image className="w-full h-full object-cover" src={data?.backgroundImage?.sourceUrl} alt={data?.backgroundImage?.altText} width="1200" height="1200" />}
					</div>
				)
			}
			<div className="container z-[11]">
				{data?.title && (
					<h3
						className="text-black"
						dangerouslySetInnerHTML={{ __html: data?.title }}
					/>
				)}
			</div>
			<div className='relative iconWrap z-[11]'>
				<div className="logo-outer relative mt-[34px] laptop-landscape:mt-[30px]">
					<Slider {...settings} >
					{data?.logos &&
						data?.logos.map((logo, i) => {
							return (
								<div className="item relative flex justify-center" key={i}>
									<div className="imgWrap w-[185px] h-[100px] mx-[20px] flex items-center">
									{logo?.icon && logo?.icon?.sourceUrl && (
											<Image className='rotateImg'
											src={logo?.icon?.sourceUrl}
											alt={logo?.icon?.altText || 'Placeholder'}
											width={162}
											height={100}
										/>
									)}
									</div>
								</div>
							);
						})}
					</Slider>
				</div>
			</div>
		</section>
	)
}
export default Logos;
