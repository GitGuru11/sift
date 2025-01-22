import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import Video_btn from '../../components/button/VideoButton';
import Black_btn from '../../components/button/Button_Black';
import FullWidthIntro from '../../components/FullWidthIntro';
import TbdContentWithImage from './TbdContentWithImage';
import TbdLogos from './TbdLogos';
import TbdIconContentBlock from './TbdIconContentBlock';
import TbdTabSlider from './TbdTabSlider';
import TbdIntroWithTab from './TbdIntroWithTab';
import ProductDetailSticky from '../../components/Sticky';
import TabLogo from '../../components/TabLogo';
import ThreeColumnGrid from '../../components/ThreeColumnGrid';
import TbdContentWithCta from './Tbd-ContentWithCta';
import FooterCta from '../../components/FooterCta';
import VerticalTab from '../../components/VerticalTab'

const ProductBanner = () => {
	return (
		<>
			<div className="breadcrumbs bg-white relative tablet:pt-[70px] md:pt-[36px] ">
				<div className="container">
					<ul className="absolute top-[44px] left-[20px] z-[999] sm:z-[9]">
						<li className="inline relative text-[16px] font-[400] leading-[24px] text-black hover:text-pink transition-all delay-[0.3s] mr-[15px]">
							<Link href="/homepage-html">Home</Link>
						</li>
						<li className="inline relative text-[16px] font-[400] leading-[24px] text-black hover:text-pink transition-all delay-[0.3s] mr-[15px]">
							<Link href="/platform-html">Platform</Link>
						</li>
						<li className="inline relative text-[16px] font-[700] leading-[24px] mr-[15px]">
							<span className="text-pink capitalize">products</span>
						</li>
					</ul>
				</div>
			</div>
			<section
				className={`banner min-h bg-white pb-[64px] relative wide-screen:pb-[160px] min-h-[700px] tablet:min-h-[550px] desktop:min-h-[550px] laptop-landscape:min-h-[550px] phablet:min-h-[760px] xs:min-h-[780px] sm:min-h-[812px] overflow-hidden`}
			>
				<div className="img-box absolute md:hidden right-0 bottom-[3px] tablet:bottom-auto tablet:top-0 desktop:bottom-auto laptop-landscape:bottom-auto laptop-landscape:top-0 desktop:top-0 w-auto xxl-up:h-[720px] laptop-landscape:!h-[500px] h-[701px] wide-screen:h-[820px] desktop:h-[430px] tablet:h-[440px] phablet:h-[410px] sm:h-[360px] xs:h-[310px]">
					<Image
						className="w-auto h-full object-contain"
						src="/productDetail-banner.png"
						alt="top"
						width="865"
						height="610"
					/>
				</div>
				<div className="smallDevice img-box md-up:hidden absolute right-0 bottom-[3px] tablet:bottom-auto tablet:top-0 desktop:bottom-auto laptop-landscape:bottom-auto laptop-landscape:top-0 desktop:top-0 w-auto xxl-up:h-[720px] laptop-landscape:!h-[500px] h-[701px] wide-screen:h-[820px] desktop:h-[430px] tablet:h-[440px] phablet:h-[410px] sm:h-[360px] xs:h-[310px]">
					<Image
						className="w-auto h-full object-contain"
						src="/productDetail-banner.png"
						alt="top"
						width="865"
						height="610"
					/>
				</div>
				<div className="container">
					<div className="flex">
						<div className="max-w-[650px] tablet:max-w-[375px] desktop-mid:max-w-[375px] tablet-mid:max-w-[375px] laptop:max-w-[425px] lg:max-w-[549px] desktop-laptop:max-w-[550px] wide-screen:max-w-[1000px] laptop:mt-[50px] xl-up:pt-[17px] desktop:mt-[50px] laptop-landscape:mt-[70px] lg:mt-[40px] ">
							<h1 className="text-black">
								Detect & prevent payment
								<span className={`text-black `}> fraud </span>
							</h1>
							<p className="max-w-[650px] wide-screen:max-w-[870px] wide-screen:my-[40px] my-[32px] xl-up:mt-[26px] xl:my-[24px] lg:my-[25px] desktop:max-w-[400px] laptop-landscape:my-[30px] laptop-landscape:max-w-[630px] text-black">
								AI-Powered Fraud Decisioning..
							</p>
							<div className="btn inline-block">
								<Video_btn text="VIEW DEMO" link="/" videoPath='https://www.youtube.com/embed/NTZcKmgWmN0?si=6myFNKgSNHFOAptI?mute=1&autoplay=1'/>
							</div>
							<div className="btn inline-block xl:block ml-[16px]  xl:ml-0 laptop-mid:ml-0 laptop-mid:mt-[16px] small-laptop:ml-0 small-laptop:mt-[16px]  xl:mt-[16px]">
								<Black_btn text="DOWNLOAD RESOURCE" link="/" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

const stickyData = [
	{
		id: "1",
		pageName: "product-detail",
		title: "Overview",
		url: "overview"
	},
	{
		id: "2",
		pageName: "product-detail",
		title: "Benefits",
		url: "benefits"
	},
	{
		id: "3",
		pageName: "product-detail",
		title: "capabilities",
		url: "capabilities"
	},
	{
		id: "4",
		pageName: "product-detail",
		title: "Use Cases",
		url: "use-cases"
	}
];

const intro = {
	PostNormalText: 'AI-Powered Fraud Decisioning..',
	HighLightedText: ' OVERVIEW',
	blurb:
		'AI-Powered Fraud Decisioning..',
	bg: 'white',
};

export default function Newsroom() {
	return (
		<Layout>
			<ProductBanner />
			<ProductDetailSticky data={stickyData } />
			<section className="relative bg-skyblue" id="overview">
				<div className="container">
					<FullWidthIntro {...intro} />
				</div>
			</section>
			<TbdContentWithImage />
			<TbdLogos />
			<TbdContentWithCta />
			<TbdIconContentBlock />
			<TbdTabSlider />
			<TbdIntroWithTab />
			<VerticalTab />
			<TabLogo />
			<ThreeColumnGrid />
			<FooterCta />

			{/* <NewsCards />
      <PressCards />
      <ContentWithCards />
      <ContentBlock /> */}
		</Layout>
	);
}
