import React from "react"

import Layout from '../../components/Layout'
import ThreeColumnGrid from '../../components/ThreeColumnGrid';
import FooterCta from '../../components/FooterCta'
import ContentWithCards from "../../components/ContentWithCards";
import TbdContentWithCards from "../../components/TbdContentWithCards";
import PlatformBannerSecondLevel from '../../components/PlatformBannerSecondLevel'
import ImageAndContentWithScroll from '../../components/ImageAndContentWithScroll'
import FullWidthMedia from '../../components/Tbd-FullWidthMedia';
import ImageWithText from '../../components/ImageWithText';
import TbdImageWithText from'../../components/Tbd-ImageWithText'
// import ImgWithContentQuotesWithCta from'../../components/ImageWithContentWithCta'
import IconWithContentCards from'../../components/IconWithContentCards'
import TbdIntroWithTabGrid from'../../components/PlatformIntroWithTabGrid'
import TabLogo from '../../components/TabLogo'
import FullWidthImageAndContentCard from "../../components/FullWidthImageAndContentCard";
import TbdColThreeStats from '../../components/Tbd-ColThreeStats'
import QuoteCard from '../../components/QuoteCard'
import Sticky from '../../components/Sticky';
import TbdContentWithImage from '../../components/Tbd-ContentWithImage'
import TabSlider from "../../components/Tbd-PlatformTabSlider";



export default function Platform() {
	const stickyData = [
        {
            id: "1",
            pageName: "platform",
            title: "Overview",
            url: "use-case"
        },
        {
            id: "2",
            pageName: "platform",
            title: "products",
            url: "products"
        },
        {
            id: "3",
            pageName: "platform",
            title: "How It Works",
            url: "howItWorks"
        },
        {
            id: "4",
            pageName: "platform",
            title: "Pricing",
            url: "pricing"
        },
        {
            id: "5",
            pageName: "platform",
            title: "Innovations",
            url: "innovation"
        },
        {
            id: "6",
            pageName: "platform",
            title: "Patents",
            url: "patents"
        },
        {
            id: "7",
            pageName: "platform",
            title: "Integrations",
            url: "integrations"
        }
    ];
    return (
			<Layout>
				<PlatformBannerSecondLevel />
			    <Sticky data={stickyData}/>
				<TbdContentWithImage />
				<TbdColThreeStats bg="blue" />
				<ContentWithCards bg="skyblue" />
				<FullWidthMedia />

				<TabSlider />
				<ImageAndContentWithScroll  />
				<ImageWithText />
				<TbdColThreeStats bg="white" />
				<TbdIntroWithTabGrid />
				<QuoteCard />

				<TbdImageWithText page="platform1" reverse='false'/>
				<TbdImageWithText  page="platform3" reverse='true'/>
				<TbdImageWithText page="platform2" reverse='false'/>
				<IconWithContentCards />
				<FullWidthImageAndContentCard/>
                <TbdContentWithCards bg="white" />

				<TabLogo />
				<ThreeColumnGrid />
				<FooterCta />
			</Layout>
		);
  }