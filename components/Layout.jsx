// import { Footer, Header, PreviewRibbon } from '@pantheon-systems/nextjs-kit';
// import { PreviewRibbon } from '@pantheon-systems/nextjs-kit';
import React, { useState, useEffect } from 'react';
import styles from '../styles/layout.module.css';
import PreviewRibbon from './integrated-section/PreviewRibbon';
import Cookies from 'js-cookie';
import Header from './header/Header';
import navData from './header/navData.json';
import Footer from './footer/footer';
import footerData from './footer/footerData.json';
import VideoOverlay from './VideoOverlay';
import { Titillium_Web, Inter, Permanent_Marker } from 'next/font/google';
import { useQuery } from '@apollo/client';
import { GET_STATIC_BLOCK } from '../graphql/staticBlockQuery';
import FooterBlockCta from './case-study/FooterBlockCta';
import { GET_CASE_STUDY_CTA_BLOCK } from '../graphql/staticBlockQuery';
import { GET_PAGE_DATA } from '../graphql/queries';
import { NavProvider } from './contexts/NavContext';
import { useRouter } from "next/router";

const titilliumWeb = Titillium_Web({
	subsets: ['latin'],
	weight: ['400', '700', '900', '600'],
	display: 'swap',
});
const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '700', '900', '600'],
	display: 'swap',
});
const permanentMarker = Permanent_Marker({
	subsets: ['latin'],
	weight: ['400'],
	display: 'swap',
});

export default function Layout({ children, footerMenu, preview }) {
	// hide preview ribbon and adjist navigation position
	const router = useRouter();
	const urlArr = router.asPath.split("/");
	const [showRibbon, setShowRibbon] = useState(true);
	const [loading, setLoading] = useState(true);
	const [ribbonHeight, setRibbonHeight] = useState(0);
	const [renderHeader, setRenderHeader] = useState(false);

	const dataBar = useQuery(GET_PAGE_DATA, {
		variables: { uri: router.asPath== '/' ? 'homepage' :  router.asPath},
	});

	const showViolatorBar =  dataBar?.data?.nodeByUri?.pageBuilder?.showViolatorBar;

	const hideHeaderAndFooterURIList = ['/sift-for-checkout/'];
	const hideHeaderAndFooter = hideHeaderAndFooterURIList.includes(dataBar?.data?.nodeByUri?.uri);
	const headerFooterClass = hideHeaderAndFooter ? 'header-hide' : 'header-footer-visible';

	// Get Violator Bar Data

	const { load, error, data } = useQuery(GET_STATIC_BLOCK, {
		variables: { id: 22046 },
	});
	const blockData = data?.blockBy?.blocksection?.sections[0] || [];
	
	const dataCta = useQuery(GET_CASE_STUDY_CTA_BLOCK, {
		variables: { id: 25842 },
	});
  const blockCtaData = dataCta?.data?.blockBy?.blocksection?.sections[0] || [];


	// console.log(blockData);
	// Define handleResize outside of the useEffect
	const handleResize = () => {
		const ribbonElement = document.getElementById('previewRibbon');

		if (ribbonElement) {
			setRibbonHeight(ribbonElement.clientHeight);

			// Adjust marginTop based on showRibbon
			const marginTop = showRibbon ? `${ribbonElement.clientHeight}px` : '0';
			document.querySelector('main').style.marginTop = marginTop;
		}
	};
	useEffect(() => {
		document.body.classList.add(headerFooterClass);
			const ribbonElement = document.getElementById('previewRibbon');

		if (ribbonElement) {
			setRibbonHeight(ribbonElement.clientHeight);

			// Adjust marginTop based on showRibbon
			const marginTop = showRibbon ? `${ribbonElement.clientHeight}px` : '0';
			document.querySelector('main').style.marginTop = marginTop;
		}
	}, [dataBar]);

	// record initial referrer to submit to Marketo forms
	useEffect(() => {
		const siftReferrer = sessionStorage.getItem('siftReferrer');
		const actualReferrer = document.referrer;
		const params = new URLSearchParams(window.location.search);
		let utmSource;
		let utmMedium;
		let utmCampaign;

		for (const [key, value] of params.entries()) {
			switch (key) {
				case 'utm_source':
					utmSource = value;
					break;
				case 'utm_medium':
					utmMedium = value;
					break;
				case 'utm_campaign':
					utmCampaign = value;
					break;
			}
		}
		if (!siftReferrer) {
			if (actualReferrer === '') {
				sessionStorage.setItem('siftReferrer', '(direct)');
			} else {
				sessionStorage.setItem('siftReferrer', actualReferrer);
			}

			if (utmSource) {
				sessionStorage.setItem('siftUtmSource', utmSource);
			} else {
				utmSource = '';
			}

			if (utmMedium) {
				sessionStorage.setItem('siftUtmMedium', utmMedium);
			} else {
				utmMedium = '';
			}

			if (utmCampaign) {
				sessionStorage.setItem('siftUtmCampaign', utmCampaign);
			} else {
				utmCampaign = '';
			}
		}
	}, []);

	const handleRibbonToggle = () => {
		const newShowRibbon = !showRibbon;
		setShowRibbon(newShowRibbon);

		if (!newShowRibbon) {
			Cookies.set('previewRibbonClosed', 'true', { expires: 7 });
		}
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		const isRibbonClosed = Cookies.get('previewRibbonClosed');
		setLoading(false);
		setShowRibbon(!isRibbonClosed);

		setTimeout(() => {
			handleResize(true);
		}, 100);

		setTimeout(() => {
			setRenderHeader(true);
		}, 2500);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div
			className={`${styles.layout} ${titilliumWeb.className} flex flex-col bg-[#F5F3F5]`}
		>
			<style jsx global>{`
				p,
				li,
				a,
				.eyebrow-text {
					font-family: ${inter.style.fontFamily};
				}
				h1,
				h2,
				h3,
				h4,
				h5,
				h6 {
					font-family: ${titilliumWeb.style.fontFamily};
				}
				h1 span {
					font-family: ${permanentMarker.style.fontFamily};
				}
				h2 span {
					font-family: ${permanentMarker.style.fontFamily};
				}
				h3 span {
					font-family: ${permanentMarker.style.fontFamily};
				}
				h4 span {
					font-family: ${permanentMarker.style.fontFamily};
				}
				.TitleWithBody blockquote p {
					font-family: ${titilliumWeb.style.fontFamily};
				}
			`}</style>

			{!loading && showViolatorBar && (
				<PreviewRibbon
					item={blockData}
					visible={showRibbon}
					onHide={handleRibbonToggle}
				/>
			)}
			<NavProvider>
				
				<Header
					data={navData}
					ribbonVisible={showRibbon}
					ribbonHeight={ribbonHeight}
				/>
			</NavProvider>
			<main
				className={`mb-auto xl-up:w-[calc(100%-276px)] desktop:w-[calc(100%-244px)] lg-up:ml-auto wide-nav-screen:max-w-[2500px] wide-nav-screen:mx-auto`}
				style={
					showRibbon ? { marginTop: `${ribbonHeight}px` } : { marginTop: '0' }
				}
			>
				{children}
				{urlArr[1] && urlArr[1] == "resources" && urlArr[2] && urlArr[2] == "case-studies" ?
				<FooterBlockCta items={blockCtaData}/>: '' }
			</main>
			<div id="previewRibbon" className="duplicate-bar !hiiden"></div>
			<Footer data={footerData} />
			<VideoOverlay />
		</div>
	);
}
