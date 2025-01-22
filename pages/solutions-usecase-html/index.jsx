import React from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../../components/Layout';
import BannerWithCards from '../../components/BannerWithCards';
import Sticky from '../../components/Sticky';
import OverviewWithStats from '../../components/OverviewWithStats';
import TbdTtwoContentwithImage from '../../components/TbdTtwoContentwithImage';
import ColThreeStates from '../../components/ColThreeStates';
import ImageWithContentQuotes from '../../components/ImageWithContentQuotes';
import ImageWithContent from '../../components/ImageWithContent';
import ContentWithVerticalStats from '../../components/ContentWithVerticalStats';
import TbdtwoContentWithCards from '../../components/TbdtwoContentWithCards';
import TbdTabLogo from '../../components/TbdTabLogo';
import TbdContentWithCta from '../../components/TbdContentWithCta';
import ThreeColumnGrid from '../../components/ThreeColumnGrid';
import FooterCta from '../../components/FooterCta';

export default function SolutionsUsecase() {
	const stickyData = [
		{
			id: '1',
			pageName: 'solutions',
			title: 'Challenge',
			url: 'challenge',
		},
		{
			id: '2',
			pageName: 'solutions',
			title: 'Solution',
			url: 'solution',
		},
		{
			id: '3',
			pageName: 'solutions',
			title: 'Results',
			url: 'results',
		},
		{
			id: '4',
			pageName: 'solutions',
			title: 'How it works',
			url: 'how-it-works',
		},
		{
			id: '5',
			pageName: 'solutions',
			title: 'Successes',
			url: 'successes',
		},
	];
	
	return (
		<Layout>
			<NextSeo title="Homepage - Sift" description="Sift - Homepage" />
			<BannerWithCards />
			<Sticky data={stickyData}/>
			<OverviewWithStats />
			<TbdTtwoContentwithImage />
			<ColThreeStates />
			<ImageWithContentQuotes />
			<ImageWithContent page="usecase" />
			<ContentWithVerticalStats />
			<TbdTabLogo />
			<TbdtwoContentWithCards />
			<TbdContentWithCta />
			<ThreeColumnGrid />
			<FooterCta />
		</Layout>
	);
}
