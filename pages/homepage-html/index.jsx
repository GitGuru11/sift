import { setOutgoingHeaders } from '@pantheon-systems/wordpress-kit';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

import Layout from '../../components/Layout';
// import { getFooterMenu } from '../../lib/Menus';
import HeroBanner from '../../components/HeroBanner';
import Logos from '../../components/Logos';
import ContentWithImage from '../../components/ContentWithImage';
import CardWithGrid from '../../components/CardWithGrid';
import TitleWithBadegs from '../../components/TitleWithBadegs';
import IntroWithTabsGrid from '../../components/IntroWithTabsGrid';
import ThreeColumnGrid from '../../components/ThreeColumnGrid';
import ContentWithCta from '../../components/ContentWithCta';
import FooterCta from '../../components/FooterCta';
import TabLogo from '../../components/TabLogo';
import ColThreeGrid from '../../components/ColThreeGrid';
import TbdContentWithImage from '../../components/TbdContentWithImage';
import FormPopup from '../../components/FormPopup';  

//footerMenu={menuItems}
export default function ExamplesPageTemplate({ menuItems }) {
	return (
		<Layout>
			<NextSeo title="Homepage - Sift" description="Sift - Homepage" />
			<HeroBanner />
			<Logos />
			<ContentWithImage />
			<CardWithGrid />
			<TitleWithBadegs />
			<TbdContentWithImage />
			<ColThreeGrid />
			<IntroWithTabsGrid />
			<ContentWithCta />
			<TabLogo />
			<ThreeColumnGrid />
			<FormPopup />
			<FooterCta />
		</Layout>
	);
}

// export async function getServerSideProps({ res }) {
// 	const { menuItems, menuItemHeaders } = await getFooterMenu();

// 	setOutgoingHeaders({ headers: [menuItemHeaders], res });

// 	return {
// 		props: {
// 			menuItems,
// 		},
// 	};
// }
