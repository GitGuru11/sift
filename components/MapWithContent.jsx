import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import Black_arrowBtn from './button/Black_arrowBtn';
import { Inter } from 'next/font/google';
const permanentMarker = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
});

const data = {
	title: 'Working from anywhere',
	blurb:
		'AI-Powered Fraud Decisioning..',
};
const arrow = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="14"
		height="8"
		viewBox="0 0 14 8"
		fill="none"
	>
		<path
			d="M13.6871 1.80909C14.1044 1.39531 14.1042 0.724429 13.6871 0.310796C13.2696 -0.103121 12.5931 -0.103121 12.1756 0.310937L8.06914 4.3823L8.068 4.38159C6.98501 5.30805 6.98501 5.30805 6.98501 5.30805C6.98501 5.30805 6.98501 5.30805 5.93063 4.38173L5.93177 4.38286L1.82446 0.310515C1.4071 -0.103261 0.730267 -0.103261 0.313052 0.310515C0.104445 0.517473 -3.15222e-07 0.788567 -3.03366e-07 1.0598C-2.91516e-07 1.3309 0.104445 1.60199 0.31291 1.80895L6.24454 7.68982C6.44488 7.88858 6.71661 8.00018 7.00017 8.00018C7.28373 8.00004 7.55532 7.88844 7.75609 7.68967L13.6871 1.80909Z"
			fill="black"
		/>
	</svg>
);

const options = ['Option1', 'Option2', 'Option3'];
function MapWithContent() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);

	const toggling = () => setIsOpen(!isOpen);

	const onOptionClicked = (value) => () => {
		setSelectedOption(value);
		setIsOpen(false);
	};
	return (
		<section
			className={`MapWithContent bg-white overflow-visible z-10 no-padding-bottom`}
			id="locations"
		>
			<div className="container">
				<div className="wrapper flex flex-wrap w-[calc(100%+20px)] xl:w-full py[140px] items-center xxl-up:justify-between -ml-[10px] xl:-ml-[0] md:w-[100%] md:mx-0">
					<div className="col-two w-[calc(41.5%-20px)] xl:w-[calc(100%)] laptop-mid:w-[calc(100%-20px)] small-desktop:w-[calc(29.5%-20px)] xl:ml-[0] ml-[10px] xl:mr-[0] mr-[3px] laptop-mid:mb-[40px] xl:mb-[40px] md:mb-[10px!important] md:w-[100%] md:mx-0 md:pb-[30px]">
						<div className="content_wrap">
							<h2 className="mb-[16px]">{data.title}</h2>
							<p>{data.blurb}</p>
						</div>
					</div>
					<div className="col-two w-[670px]  md:w-full lg:m-auto ml-[23px] mr-[3px] mid-wide-screen:mr-[40px] mid-wide-screen:scale-125 md:mx-0">
						<div className="img-wrap relative md:max-w-[280px] md:m-auto">
							<Image
								className="w-full"
								src="/updated-map.svg"
								alt="img"
								width={700}
								height={700}
								quality={75}
							/>
						</div>
					</div>
				</div>
				<div className="w-full job-portal pt-[50px]">
					<p className="text-black text-sm tracking-{0.040em} font-bold uppercase leading-[27px] mb-[2px]">
						view jobs by location
					</p>
					<iframe
						id="ashby_embed_iframe"
						src="https://jobs.ashbyhq.com/sift?embed=js"
						title="Ashby Job Board"
						width="100%"
						height="2106.140625"
						frameBorder="0"
						scrolling="no"
					></iframe>
				</div>
			</div>

			<Script id="my-script">
				{`
					$(".MapWithContent .img-wrap").hover(
						function autoAddClass(){
							var next = $(".active").removeClass("active").next();
							if(next.length) {
								$(next).removeClass('active');
							} else {
								$("#location1").removeClass("active");
							
							}
							setTimeout(autoAddClass);
						}
					);

					function autoAddClass(){
						var next = $(".active").removeClass("active").next();
						if(next.length) {
							$(next).addClass('active');
						} else {
							$("#location1").addClass("active");
						
						}
						setTimeout(autoAddClass, 1200);
					}
					autoAddClass();
			`}
			</Script>
			<script
				async
				src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
			></script>
		</section>
	);
}

export default MapWithContent;
