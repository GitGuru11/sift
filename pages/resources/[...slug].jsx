import React from 'react';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_RESOURCE_DETAIL_POST } from '../../graphql/resourcesDetailPages';
import NonGated from './nongated-resource';
import GatedResource from './gated-resources';
import Loader from '../../components/integrated-section/Loader';
import Custom404 from '../404';
import EventDetail from '../events/event-template/EventDetail';
import CaseStudy from './case-study';
import UniversitySinglePage from './university';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { parse } from 'url';
const inter = Inter({
	subsets: ['latin'],
	weight: ['700'],
});

const apolloClient = new ApolloClient({
	uri: 'https://media.sift.com/wp/graphql',
	cache: new InMemoryCache(),
});


export async function getServerSideProps({ params, req }) {
	const uriPath = params?.slug?.join('/') || '/';
	const protocol = req.headers['x-forwarded-proto'] || 'http';
	const host = req.headers.host;
	const parsedUrl = parse(req.url, true);
	const pathname = parsedUrl.pathname;
	const currentUrl = `${protocol}://${host}${pathname}`;

	const contentTypes = Object.freeze({
		ANALYST_REPORT: 'ANALYST_REPORT',
		DEMOS: 'DEMOS',
		EBOOK: 'EBOOK',
		INFOGRAPHIC: 'INFOGRAPHIC',
		ONEPAGER: 'ONEPAGER',
		PODCAST: 'PODCAST',
		VIDEO: 'VIDEO',
		WEBINAR: 'WEBINAR',
		EVENT: 'EVENT',
		CASE_STUDIES: 'CASE_STUDIES',
		UNIVERSITY: 'UNIVERSITY',
		INDEX_REPORT: 'INDEX_REPORT' 
	});
	function typeName(val) {
		var type = "";
		switch (val) {
			case "videos":
				type = contentTypes.VIDEO;
				break;
			case "analyst-reports":
				type = contentTypes.ANALYST_REPORT;
				break;
			case "demos":
				type = contentTypes.DEMOS;
				break;
			case "ebooks":
				type = contentTypes.EBOOK;
				break;
			case "inforgraphics":
				type = contentTypes.INFOGRAPHIC;
				break;
			case "onepagers":
				type = contentTypes.ONEPAGER;
				break;
			case "podcasts":
				type = contentTypes.PODCAST;
				break;
			case "webinars":
				type = contentTypes.WEBINAR;
				break;
			case "trust-and-safety-university":
				type = contentTypes.UNIVERSITY;
				break;
			case "case-studies":
				type = contentTypes.CASE_STUDIES;
				break;
			case "index-report":
				type = contentTypes.INDEX_REPORT;
				break;
			default:
				type = contentTypes;
		}
		return type;
	}
	try {
		const { data } = await apolloClient.query({
			query: GET_RESOURCE_DETAIL_POST,
			variables: { typeSlug: typeName(params?.slug[0]), path: params?.slug[0]=="trust-and-safety-university"?params?.slug[2]: params?.slug[1]},
			fetchPolicy: 'network-only',
		});
		if (!data || !data?.contentNodes?.nodes[0]) {
			return { notFound: true };
		}
		// Prepare SEO props based on fetched data
		const defaultImage = {
			url: 'https://sift.com/OG-default.jpg', // default image URL
			width: 800,
			height: 600,
			alt: 'Sift',
		};
		const defaultTitle = "Sift";
		const defaultDescription = "AI Platform for Identity-Centric Fraud | Sift";
		const seoProps = {
			title: data?.contentNodes?.nodes[0]?.seo?.title || defaultTitle,
			description: data?.contentNodes?.nodes[0]?.seo?.metaDesc || defaultDescription,
			canonical: currentUrl,
			openGraph: {
				url: currentUrl,
				title: data?.contentNodes?.nodes[0]?.seo?.title || defaultTitle,
				description: data?.contentNodes?.nodes[0]?.seo?.metaDesc || defaultDescription,
				images: data?.contentNodes?.nodes[0]?.seo.opengraphImage ? [{
					url: data?.contentNodes?.nodes[0]?.seo.opengraphImage.sourceUrl,
					width: data?.contentNodes?.nodes[0]?.seo.opengraphImage.mediaDetails.width,
					height: data?.contentNodes?.nodes[0]?.seo.opengraphImage.mediaDetails.height,
					alt: data?.contentNodes?.nodes[0]?.seo.title,
				}] : [defaultImage],
			},
		};

		return { props: { pageData: data, seoProps } };
	} catch (error) {
		console.error("GraphQL Error:", error);
		return { props: { error: error.message }, seoProps: {} };
	}
}

export default function Index({ pageData, seoProps, error }) {
	let postData = [];
	if (pageData) {
		postData = pageData?.contentNodes?.nodes[0];
	}
	// if (postObj.loading) return <div className="detail-loader bg-white h-full w-full fixed left-0 right-0 z-[99]"><Loader /></div>;
	// if (postObj.error) return <p className='pt-[100px] text-center'>Error: something went wrong please wait or try again</p>;
	return (
		<>
			<NextSeo {...seoProps} />
			<Head>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={seoProps.openGraph.title} />
				<meta name="twitter:description" content={seoProps.openGraph.description} />
				<meta name="twitter:image" content='/OG-twitter.jpg' />
				<meta name="twitter:site" content="https://twitter.com/GetSift" />
			</Head>
			<span className='hidden' id="marketo-program-id" data-marketo-id={postData?.__typename == "Event" ? postData?.eventbuilder?.marketoProgramId : postData?.resourcebuilder?.marketoProgramId}></span>
			{postData?.webinarPage?.others?.gatedAsset
				|| postData?.videoPage?.gatedAsset
				|| postData?.demoPage?.gatedAsset
				|| postData?.onepager?.gatedAsset
				|| postData?.ebook?.gatedAsset
				|| postData?.indexreport?.gatedAsset
				|| postData?.analystReportDetails?.gatedAsset
				|| postData?.podcast?.gatedAsset
				|| postData?.infographic?.gatedAsset
				?
				<GatedResource data={postData} />
				: postData?.__typename == 'CaseStudy'
				? <CaseStudy data={postData} />
				: postData?.__typename == 'University'
				? <UniversitySinglePage />
				: <NonGated data={postData} />
			}
		</>

	);
}
