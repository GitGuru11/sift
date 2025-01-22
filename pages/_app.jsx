import '../styles/globals.css';
import '../styles/buttons.css';

// import '@pantheon-systems/nextjs-kit/style.css';
import { NextSeo } from 'next-seo';
import Script from 'next/script'
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../lib/apollo';
import { useQuery } from '@apollo/client';
import { GET_PAGE_DATA } from '../graphql/queries';
import { useEffect } from 'react';
import { initAOS } from '../pages/api/aos.js';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { useRouter } from 'next/router'; // Import the useRouter hook

import { GTMHeadScript, GTMBodyScript } from '../components/Gtm';
import Head from 'next/head';

if (process.env.NODE_ENV !== "production") {  // Adds messages only in a dev environment
	loadDevMessages();
	loadErrorMessages();
}

function MyApp({ Component, pageProps, uri }) {
	const router = useRouter();
	

	useEffect(() => {
		initAOS(); // Initialize AOS when the app mounts on the client side
	}, []);

	useEffect(() => {
		var overlayBtn = document.querySelectorAll(".video-overlay")
		var overlaycross = document.querySelector(".overlay-cross")
		overlayBtn.forEach((element) => {
			element.addEventListener("click", () => {
				var overlaySection = document.querySelector("#overlay")
				overlaySection.classList.remove("hide")

			})
		})
		if (overlaycross) {
			overlaycross.addEventListener("click", () => {
				var overlaySection = document.querySelector("#overlay")
				overlaySection.classList.add("hide")
			})
		}
	});
	useEffect(() => {
		for (var c = document.getElementsByTagName("a"),
			a = 0;
			a < c.length; a++) {
			var b = c[a];
			b.getAttribute("href") && !b.hostname.includes(location.hostname) && (b.target = "_blank")
		}
	})
	const { loading, error, data } = useQuery(GET_PAGE_DATA, {
		variables: { uri: uri },
		client: apolloClient,
	});
	const seoValue = data?.pageBy?.seo || [];
	let currentUrl = 'https://sift.com' + router.asPath;

	return <ApolloProvider client={apolloClient} >
			<>
				<Head>
		            <GTMHeadScript />
		        </Head>
		        <GTMBodyScript />
			</>
			<Component {...pageProps} />
		</ApolloProvider>;
}

export default MyApp;
