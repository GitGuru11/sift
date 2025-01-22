import React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import {GET_RESOURCE_DETAIL_POST} from '../../graphql/resourcesDetailPages';
import Loader from '../../components/integrated-section/Loader';
import Custom404 from '../404';
import EventDetail from './event-template/EventDetail';

const inter = Inter({
	subsets: ['latin'],
	weight: ['700'],
});
export default function Index() {
	const router = useRouter();
	const [typeSlug, setTypeSlug] = useState();
	let uri = router.query.slug || [];
	const postObj = useQuery(GET_RESOURCE_DETAIL_POST, {
		variables: { typeSlug: 'EVENT', path: uri[0]},
	});
	let postData = [];
	let redirectUrl;
	if (postObj) {
		postData = postObj?.data?.contentNodes?.nodes[0]; 
		redirectUrl = postObj?.data?.contentNodes?.nodes[0]?.eventbuilder?.redirectUrl; 
  	}
	if(redirectUrl) {
		router.push(redirectUrl);
		return null;
	}
	if (postObj.loading && !redirectUrl) return <div className="detail-loader bg-white h-full w-full fixed left-0 right-0 z-[99]"><Loader/></div>;
	if (postObj.error) return <p className='pt-[100px] text-center'>Error: something went wrong please wait or try again</p>;

	  // Check if it's a 404 page
	  if (router.isFallback || router.is404 || !postObj.data) {
		return <Custom404 />;
	  }
	return (
		<>
		
			<span className='hidden' id="marketo-program-id" data-marketo-id={ postData?.__typename == "Event" ? postData?.eventbuilder?.marketoProgramId : postData?.resourcebuilder?.marketoProgramId}></span>
			<EventDetail data={postData}/>	
		</>
		
	);
}
