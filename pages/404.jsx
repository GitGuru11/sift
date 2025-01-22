import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
// import styles from './404.module.css';
// import BannerThirdLevel from '../components/BannerThirdLevel';
import { NextSeo } from 'next-seo';

export default function Custom404() {
	const [isHeight, setHeight] = useState(0)
	useEffect(() => {
		const footerEle = document.querySelector('footer');
		if(footerEle) {
			const footerHeight = footerEle.clientHeight;
			setHeight(footerHeight)
		}
	})
	const height = {
		minHeight: `calc(100vh - ${isHeight}px)`,
	};
	return (
		<Layout>
			<NextSeo
				title="404 Sift"
				description="404 Sift"
			/>
				<div className="breadcrumbs bg-white relative">
					<div className="container">
						<ul className="absolute top-[39px] left-[20px] sm:z-[9] z-[99] sm:top-[75px] phablet:top-[70px] tablet:top-[70px]">
							<li className="inline relative text-[16px] font-[400] leading-[24px] text-white hover:text-pink transition-all delay-[0.3s] mr-[15px]">
								<Link href="/">Home</Link>
							</li>
							<li className="inline relative text-[16px] font-[700] leading-[24px] mr-[15px]">
								<span className="text-pink">404</span>
							</li>
						</ul>
					</div>
				</div>
				<section className={`banner BannerThirdLevel relative bg-darkBlue min-h-[416px] pt-[152px] pb-[101px] laptop-landscape:pb-[125px] xl:flex xl:items-center laptop-landscape:pt-[75px] lg:pt-[50px] desktop:pt-[52px] desktop:min-h-[316px]`} style={height}>
					<div className="img-box absolute right-0 bottom-0 w-[601px] phablet:w-[350px] tablet:w-[380px] desktop:w-[410px] sm:w-[225px]">
						<Image
							className="w-full"
							src="/bannerThird-pattern.png"
							alt="top"
							width="401"
							height="361"
						/>
					</div>
					<div className="container">
						<div className="flex">
							<div className="max-w-[720px] lg:max-w-[549px] desktop-laptop:max-w-[550px] wide-screen:max-w-[1000px] laptop:mt-[50px] desktop:mt-[50px] laptop-landscape:mt-[70px] lg:mt-[70px] ">
								<h1 className="text-white">
									404
								</h1>
								<p className="max-w-[500px] wide-screen:max-w-[750px] wide-screen:mt-[40px] mt-[32px] xl:mt-[24px] lg:mt-[25px] laptop-landscape:mt-[30px] laptop-landscape:max-w-[601px] text-white">
								Every road has detours, let&apos;s get you back on track! Please reference our <Link href="/resources" className="underline hover:text-pink transition-colors">Resources</Link> or <Link href="/blog" className="underline hover:text-pink transition-colors">Blog</Link> as a start. For anything else, we&apos;d recommend our <Link href="/why-sift" className="underline hover:text-pink transition-colors">Why Sift</Link> page.
								</p>
								{/* <p className='text-white'>Sorry, try navigating back to our Homepage</p> */}
								<div className="btnWrap mt-[32px]">
									<Link
										href="/"
										aria-label="first link"
										className={`default-btn button inline-block font-bold mr-[16px] md:py-[9px] md:px-[20px] laptop-landscape:px-[20px] py-[16px] px-[24px] h-fit uppercase border-[3px] border-pink text-black rounded-full duration-700 hover:text-black`}
									>
										Go to homepage
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
		</Layout>
	);
}
