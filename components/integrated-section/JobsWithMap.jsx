import React, { useState } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
const permanentMarker = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
});

function JobsWithMap(props) {
	let data = props.items;
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);
	const toggling = () => setIsOpen(!isOpen);
	const onOptionClicked = (value) => () => {
		setSelectedOption(value);
		setIsOpen(false);
	};
	return (
		<section
			id={data.id ? data.id : ''}
			className={`JobsWithMap MapWithContent bg-white overflow-visible z-10 ${data.background} ${data.padding} ${data.classes}`}
		>
			<div className="container">
				<div className="wrapper flex flex-wrap w-[calc(100%+20px)] xl:w-full py[140px] items-center xxl-up:justify-between -ml-[10px] xl:-ml-[0] md:w-[100%] md:mx-0">
					<div className="col-two w-[calc(41.5%-20px)] xl:w-[calc(100%)] laptop-mid:w-[calc(100%-20px)] small-desktop:w-[calc(29.5%-20px)] xl:ml-[0] ml-[10px] xl:mr-[0] mr-[3px] laptop-mid:mb-[40px] xl:mb-[40px] md:mb-[10px!important] md:w-[100%] md:mx-0 md:pb-[30px]">
						<div className="content_wrap">
							{data?.title && (
								<h2
									className="mb-[16px]"
									dangerouslySetInnerHTML={{ __html: data?.title }}
								></h2>
							)}
							{data?.body && (
								<div dangerouslySetInnerHTML={{ __html: data?.body }}></div>
							)}
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
				<div className="w-full job-portal">
					{/* <p className="text-black text-sm tracking-{0.040em} font-bold uppercase leading-[27px] mb-[2px]">
						view jobs by location
					</p> */}
					{data?.jobsScript && (
						<iframe
							id="ashby_embed_iframe"
							src={data?.jobsScript}
							title="Ashby Job Board"
							width="100%"
							frameBorder="0"
							className="h-[610px] overflow-y-auto"
						></iframe>
					)}
				</div>
			</div>
		</section>
	);
}
export default JobsWithMap;
