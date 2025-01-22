import React from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../../components/Layout';
import Sticky from '../../components/Sticky';
import ColorLogoTab from '../../components/ColorLogoTab';
import BannerWithVideo from '../../components/BannerWithVideo';
import IntroWithLogo from '../../components/IntroWithLogo';
import FooterCta from '../../components/FooterCta';
import { Imprima } from 'next/font/google';
import IntroWithColors from '../../components/IntroWithColors';
import Typography from '../../components/Typography';
import Iconography from '../../components/Iconography';
import Visualizations from '../../components/Visualizations';

export default function BrandCenter() {
	const stickyData = [
		{
			id: "1",
			pageName: "BrandCenter",
			title: "Logos",
			url: "logos"
		},
		{
			id: "2",
			pageName: "BrandCenter",
			title: "Colors",
			url: "colors"
		},
		{
			id: "3",
			pageName: "BrandCenter",
			title: "Typography",
			url: "typography"
		},
		{
			id: "3",
			pageName: "BrandCenter",
			title: "Icons",
			url: "icons"
		},
		{
			id: "3",
			pageName: "BrandCenter",
			title: "Visualizations",
			url: "visualizations"
		}
	 ];

	return (
		<Layout>
      	    <NextSeo title="BrandCenter - Sift" description="Sift - BrandCenter" />
			<BannerWithVideo/>
			<Sticky data={stickyData} />
			<ColorLogoTab id="logos"/>
			<IntroWithLogo  id="IntroWithLogo"/>
			<IntroWithColors id="colors"/>
			<Typography id="typography"/>
			<Iconography id="icons"/>
			<Visualizations id="visualizations"/>
			<FooterCta />
		</Layout>
	);
}
