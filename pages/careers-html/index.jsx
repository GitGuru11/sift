import React from "react"
import { NextSeo } from 'next-seo';
import Layout from '../../components/Layout'
import TbdBannerSecondLevel from '../../components/TbdBannerSecondLevel'
import Sticky from '../../components/Sticky';
import IconWithGrid from '../../components/IconWithGrid';
import TbdImageWithContent from '../../components/TbdImageWithContent';
import BigImageWithContent from '../../components/BigImageWithContent';
import VerticalTabWithContent from '../../components/VerticalTabWithContent';
import QuoteWithImageSlider from '../../components/QuoteWithImageSlider';
import AwardWithHeading from '../../components/AwardWithHeading';
import MapWithContent from '../../components/MapWithContent';
import TbdFooterCta from '../../components/TbdFooterCta';

export default function Careers() {
    const stickyData = [
			{
				id: '1',
				pageName: 'solutions',
				title: 'Life at Sift',
				url: 'life-at-sift',
			},
			{
				id: '2',
				pageName: 'solutions',
				title: 'Benefits',
				url: 'benefits',
			},
			{
				id: '3',
				pageName: 'solutions',
				title: 'Testimonials',
				url: 'testimonials',
			},
      {
				id: '3',
				pageName: 'solutions',
				title: 'Locations',
				url: 'locations',
			},
      {
				id: '3',
				pageName: 'solutions',
				title: 'Open positions',
				url: 'open-positions',
			},
		];
    return (
			<Layout>
				<NextSeo title="Careers - Sift" description="Sift - Careers" />
				<TbdBannerSecondLevel />
				<Sticky data={stickyData} />
				<IconWithGrid />
				<BigImageWithContent />
				<VerticalTabWithContent />
				<TbdImageWithContent page="career" />
				<QuoteWithImageSlider />
				<AwardWithHeading />
				<MapWithContent />
				<TbdFooterCta />
			</Layout>
		);
  }