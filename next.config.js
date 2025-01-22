const path = require('path');

// Load the .env file for local development
// .env.development.local by default
require('dotenv').config({
	path: path.resolve(process.cwd(), '.env.development.local'),
});

if (
	process.env.WPGRAPHQL_URL === undefined &&
	process.env.PANTHEON_CMS_ENDPOINT === undefined
) {
	let message;
	if (process.env.NODE_ENV === 'development') {
		message = `No WPGRAPHQL_URL found.\nSee the README.md for information on setting this variable locally.`;
	} else if (process.env.NODE_ENV === 'production') {
		message = `No CMS Endpoint found.\nLink a CMS or set the WPGRAPHQL_URL environment variable in the settings tab in the dashboard\nIf your site does not require a backend to build, remove this check from the next.config.js.`;
	}
	throw new Error(message);
}

let backendUrl, imageDomain;
if (process.env.WPGRAPHQL_URL === undefined) {
	backendUrl = `https://${process.env.PANTHEON_CMS_ENDPOINT}/wp/graphql`;
	imageDomain = process.env.IMAGE_DOMAIN || process.env.PANTHEON_CMS_ENDPOINT;

	// populate WPGRAPHQL_URL as a fallback and for build scripts
	process.env.WPGRAPHQL_URL = `https://${process.env.PANTHEON_CMS_ENDPOINT}/wp/graphql`;
} else {
	backendUrl = process.env.WPGRAPHQL_URL;
	imageDomain =
		process.env.IMAGE_DOMAIN ||
		process.env.WPGRAPHQL_URL.replace(/\/wp\/graphql/, '').replace(
			/^https?:\/\//,
			'',
		);
}
// remove trailing slash if it exists
imageDomain = imageDomain.replace(/\/$/, '');

const injectedOptions = {};
if (process.env.PANTHEON_UPLOAD_PATH) {
	injectedOptions['basePath'] = process.env.PANTHEON_UPLOAD_PATH;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
	...(injectedOptions && injectedOptions),
	reactStrictMode: true,
	env: {
		backendUrl: backendUrl,
		imageUrl: `https://${imageDomain}`,
	},
	
	images: {
		domains: [
			imageDomain,
			'dev-sift.pantheonsite.io',
			'live-sift.pantheonsite.io',
			'secure.gravatar.com',
			'media.sift.com'
		],
	},
	output: 'standalone',
	transpilePackages: ['@pantheon-systems/nextjs-kit'],

	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
	webpack: (config, { isServer }) => {
		// Add .jsx extension to the list of extensions webpack resolves
		config.resolve.extensions.push('.jsx');

		return config;
	},

	async redirects() {
		return [
			// Redirect rules for Digital Trust Safety Index to Index Reports
			{
				source: '/resources/ebooks/q4-2022-digital-trust-safety-index-the-rising-risk-of-online-disputes',
				destination: '/resources/index-reports/digital-trust-index-chargeback-fraud-2022',
				permanent: true,
			},
			{
				source: '/resources/ebooks/q3-2023-digital-trust-safety-index-account-takeover-data-consumer-insights-and-emerging-trends',
				destination: '/resources/index-reports/digital-trust-index-account-takeover-fraud-2023',
				permanent: true,
			},
			{
				source: '/trust',
				destination: '/legal-and-compliance',
				permanent: true,
			},
			{
				source: '/aup',
				destination: '/legal-and-compliance/aup',
				permanent: true,
			},
			{
				source: '/program-dgs-demo',
				destination: '/program-internet-software-demo',
				permanent: true,
			},
			{
				source: '/solutions/digital-goods-services',
				destination: '/solutions/internet-software',
				permanent: true,
			},
			{
				source: '/resources/onepagers/adapting-to-frauds-new-normal-digital-goods-services',
				destination: '/resources/onepagers/sift-for-internet-software-services',
				permanent: true,
			  },			  
			{
				source: '/resources/ebooks/digital-trust-safety-index-a-rapidly-changing-fraud-landscape',
				destination: '/resources/index-reports/digital-trust-index-payment-fraud-2020',
				permanent: true,
			  },
			  {
				source: '/resources/ebooks/digital-trust-safety-index-content-abuse-and-fraud-economy',
				destination: '/resources/index-reports/digital-trust-index-spam-scams-2020',
				permanent: true,
			  },
			  {
				source: '/resources/ebooks/digital-trust-safety-index-account-takeover-fraud-burden-business',
				destination: '/resources/index-reports/digital-trust-index-account-takeover-fraud-2020',
				permanent: true,
			  },
			  {
				source: '/resources/ebooks/digital-trust-safety-index-holiday-fraud-shifting-ecommerce',
				destination: '/resources/index-reports/digital-trust-index-seasonal-fraud-2020',
				permanent: true,
			  },
			  {
				source: '/resources/ebooks/digital-trust-safety-index-fraud-economy',
				destination: '/resources/index-reports/digital-trust-index-payment-fraud-2021',
				permanent: true,
			  },
			  {
				source: '/resources/ebooks/q2-2021-digital-trust-safety-index-spam-scams-fraud-economy',
				destination: '/resources/index-reports/digital-trust-index-spam-scams-2021',
				permanent: true,
			  },
			  {
				source: '/resources/ebooks/q3-2021-digital-trust-safety-index-battling-new-breed-account-takeover',
				destination: '/resources/index-reports/digital-trust-index-account-takeover-fraud-2021',
				permanent: true,
			  },
			  {
				source: '/resources/ebooks/q4-2021-digital-trust-safety-index-digital-fraud-and-disputes',
				destination: '/resources/index-reports/digital-trust-index-seasonal-fraud-2021',
				permanent: true,
			  },
			  {
				source: '/resources/ebooks/q1-2022-digital-trust-safety-index-payment-fraud',
				destination: '/resources/index-reports/digital-trust-index-payment-fraud-2022',
				permanent: true,
			  },
			  {
				source: '/resources/ebooks/q2-2022-digital-trust-safety-index-content-fraud',
				destination: '/resources/index-reports/digital-trust-index-spam-scams-2022',
				permanent: true,
			  },
			  {
				source: '/resources/ebooks/q3-2022-digital-trust-safety-index-account-takeover-data-trends-and-insights',
				destination: '/resources/index-reports/digital-trust-index-account-takeover-fraud-2022',
				permanent: true,
			  },
			  {
				source: '/resources/ebooks/q1-2023-digital-trust-safety-index-payment-fraud',
				destination: '/resources/index-reports/digital-trust-index-payment-fraud-2023',
				permanent: true,
			  },
			  {
				source: '/resources/ebooks/q2-2023-digital-trust-safety-index-ai-and-automation',
				destination: '/resources/index-reports/digital-trust-index-ai-fraud-2023',
				permanent: true,
			  },
			  {
				source: '/resources/ebooks/q4-2023-digital-trust-safety-index-dispute-data-consumer-insights-and-emerging-trends',
				destination: '/resources/index-reports/digital-trust-index-chargeback-fraud-2023',
				permanent: true,
			  },
			  {
				source: '/resources/ebooks/q1-2024-index-report-payment-fraud',
				destination: '/resources/index-reports/digital-trust-index-payment-fraud-2024',
				permanent: true,
			  },
			  {
				source: '/resources/ebooks/q2-2024-digital-trust-index-ai-fraud',
				destination: '/resources/index-reports/digital-trust-index-ai-fraud-2024',
				permanent: true,
			  },
			  {
				source: '/resources/index-reports/account-takeover-q3-2024',
				destination: '/resources/index-reports/digital-trust-index-account-takeover-fraud-2024',
				permanent: true,
			  },			
			  // End of redirect rules for Digital Trust Safety Index to Index Reports  
			{
				source: '/products/account-defense',
				destination: '/platform/account-defense',
				permanent: true,
			},
			{
				source: '/events/the-ai-fraud-frontier-how-fraudsters-and-fraud-fighters-have-adopted-ai-technology',
				destination: '/resources/webinars/the-ai-fraud-frontier-how-fraudsters-and-fraud-fighters-have-adopted-ai-technology',
				permanent: true,
			},
			{
				source: '/events/the-c-suite-imperative-why-executives-must-prioritize-online-fraud-prevention-as-a-growth-lever',
				destination: '/resources/webinars/the-c-suite-imperative-why-executives-must-prioritize-online-fraud-prevention-as-a-growth-lever',
				permanent: true,
			},
			{
				source: '/events/the-c-suite-imperative-why-executives-must-prioritize-online-fraud-prevention-as-a-growth-lever/register',
				destination: '/resources/webinars/the-c-suite-imperative-why-executives-must-prioritize-online-fraud-prevention-as-a-growth-lever',
				permanent: true,
			},
			{
				source: '/resources/ebooks/gartner-emerging-tech-impact-radar-online-fraud-detection-and-prevention',
				destination: '/resources/ebooks/gartner-emerging-tech-security-cyber-fraud-fusion-is-the-future-of-online-fraud-detection',
				permanent: true,
			},
			{
				source: '/resources/ebooks/gartner-emerging-tech-security-cyber-fraud-fusion-is-the-future-of-online-fraud-detection',
				destination: '/resources',
				permanent: true,
			},
			{
				source: '/solutions/business-operations',
				destination: '/solutions/it-operations',
				permanent: true,
			},
			{
				source: '/platform/integrations',
				destination: '/platform',
				permanent: true,
			},
			{
				source: '/developers',
				destination: 'https://developers.sift.com/',
				permanent: true,
			},
			{
				source: '/fibr',
				destination: '/fibr-fraud-industry-benchmarking-resource',
				permanent: true,
			},
			{
				source: '/FIBR',
				destination: '/fibr-fraud-industry-benchmarking-resource',
				permanent: true,
			},
			//  {
			//  	source: '/resources?type=CASE_STUDIES',
			// 	destination: '/resources/case-studies',
			//  	permanent: true,
		 	// },
			{
				source: '/fraud-center/fibr-fraud-industry-benchmarking-resource',
				destination: '/fibr-fraud-industry-benchmarking-resource',
				permanent: true,
			},
			{
				source: '/fraud/prevention',
				destination: '/platform',
				permanent: true,
			},
			{
				source: '/fraud-center/fraud-industry-benchmarking-resource',
				destination: '/fibr-fraud-industry-benchmarking-resource',
				permanent: true,
			},
			{
				source: '/developers/overview',
				destination: 'https://developers.sift.com/',
				permanent: true,
			},
			{
				source: '/developers/docs/:slug*',
				destination: 'https://developers.sift.com/docs/:slug*',
				permanent: true,
			},
			{
				source: '/resources/plugins/:slug*',
				destination: 'https://developers.sift.com/plugins/:slug*',
				permanent: true,
			},
			{
				source: '/resources/guides/:slug*',
				destination: 'https://developers.sift.com/guides/:slug*',
				permanent: true,
			},
			{
				source: '/resources/tutorials/:slug*',
				destination: 'https://developers.sift.com/tutorials/:slug*',
				permanent: true,
			},
			{
				source:
					'/developers/docs/curl/apis-overview/core-topics/error-reference',
				destination:
					'https://developers.sift.com/docs/curl/apis-overview/core-topics/error-reference',
				permanent: true,
			},
			{
				source: '/about',
				destination: '/company',
				permanent: true,
			},
			{
				source: '/resources/case-studies/case-studies',
				destination: '/resources/case-studies',
				permanent: true,
			},
			{
				source: '/resources/case-studies/sift-chargeback-luxury-retailer',
				destination:
					'/resources/onepager/sift-chargeback-how-a-luxury-retailer-reduced-98-of-emv-related-disputes',
				permanent: true,
			},
			{
				source: '/resources/case-studies/sift-chargeback-major-airline',
				destination:
					'/resources/onepager/sift-chargeback-how-a-major-airline-stopped-33-of-initiated-disputes-in-under-90-days',
				permanent: true,
			},
			{
				source: '/resources/case-studies/hellofresh-case-study',
				destination: '/resources/case-studies',
				permanent: true,
			},
			{
				source: '/lp/igaming-demo',
				destination: '/program-igaming-demo',
				permanent: true,
			},
			{
				source: '/kount-alternatives',
				destination: '/program-kount-alternatives',
				permanent: true,
			},
			{
				source: '/kount-demo',
				destination: '/program-kount-demo',
				permanent: true,
			},
			{
				source: '/lp/kount-upgrade-demo',
				destination: '/program-kount-alternatives',
				permanent: true,
			},
			{
				source: '/products',
				destination: '/platform',
				permanent: true,
			},
			{
				source: '/index-reports/2023/dts-report-ungated',
				destination: '/index-reports-disputes-q4-2023',
				permanent: true,
			},
			{
				source: '/digital-trust-and-safety-assessment',
				destination: '/risk-assessment',
				permanent: true,
			},
			{
				source: '/releases',
				destination: '/new-releases',
				permanent: true,
			},
			{
				source: '/partners',
				destination: '/partnerships',
				permanent: true,
			},
			{
				source: '/kount-alternatives',
				destination: '/program-kount-alternatives',
				permanent: true,
			},
			{
				source: '/resources/news-and-press-resources/media-kit',
				destination: '/brand-center',
				permanent: true,
			},
			{
				source:
					'/resources/ebooks/2023-forrester-wave-digital-fraud-management-report',
				destination:
					'/resources/ebook/forrester-wave-digital-fraud-management-report',
				permanent: true,
			},
			{
				source:
					'/resources/ebook/2023-forrester-wave-digital-fraud-management-report',
				destination:
					'/resources/ebook/forrester-wave-digital-fraud-management-report',
				permanent: true,
			},
			{
				source: '/insult-monitor',
				destination: '/',
				permanent: true,
			},
			{
				source: '/case-studies/seoclerks',
				destination: '/resources/case-studies/seoclerks',
				permanent: true,
			},
			{
				source: '//fibr-fraud-industry-benchmarking-resource',
				destination: '/fibr-fraud-industry-benchmarking-resource',
				permanent: true,
			},
			{
				source: '//fraud-center/fraud-industry-benchmarking-resource',
				destination: '/fibr-fraud-industry-benchmarking-resource',
				permanent: true,
			},
			{
				source: '//fraud-industry-benchmarking-resource',
				destination: '/fibr-fraud-industry-benchmarking-resource',
				permanent: true,
			},
			{
				source: '/sift-edu/fraud-basics/all-about-chargebacks',
				destination:
					'/resources/trust-and-safety-university/fraud-basics/all-about-chargebacks',
				permanent: true,
			},
			{
				source: '/sift-edu/chargebacks',
				destination: '/trust-safety-university?topic=chargebacks',
				permanent: true,
			},
			
			{
				source: '/sift-edu/chargebacks/american-express-reason-codes',
				destination: '/resources/trust-and-safety-university/chargebacks/chargebacks-american-express-reason-codes',
				permanent: true,
			},
			{
				source: '/sift-edu/chargebacks/average-chargeback-rates',
				destination:
					'/resources/trust-and-safety-university/chargebacks/average-chargeback-rates',
				permanent: true,
			},
			{
				source: '/sift-edu/chargebacks/chargeback-accounting-dispute-recording',
				destination:
					'/resources/trust-and-safety-university/chargebacks/chargeback-accounting-dispute-recording',
				permanent: true,
			},
			{
				source: '/sift-edu/chargebacks/chargeback-arbitration',
				destination:
					'/resources/trust-and-safety-university/chargebacks/chargeback-arbitration',
				permanent: true,
			},
			{
				source: '/sift-edu/chargebacks/chargeback-reason-codes',
				destination:
					'/resources/trust-and-safety-university/chargebacks/chargeback-reason-codes',
				permanent: true,
			},
			{
				source: '/sift-edu/chargebacks/fraud-filters',
				destination:
					'/resources/trust-and-safety-university/chargebacks/fraud-filters',
				permanent: true,
			},
			{
				source: '/sift-edu/chargebacks/mastercard-reason-codes',
				destination:
					'/resources/trust-and-safety-university/chargebacks/mastercard-reason-codes',
				permanent: true,
			},
			{
				source: '/sift-edu/chargebacks/visa-reason-codes',
				destination: '/resources/sift-edu/chargebacks/visa-reason-codes',
				permanent: true,
			},
			{
				source: '/sift-edu/fraud-and-risk',
				destination: '/trust-safety-university?topic=fraud-basics',
				permanent: true,
			},
			{
				source: '/sift-edu/fraud-basics/auth-billing-cycle',
				destination:
					'/resources/trust-and-safety-university/fraud-basics/auth-billing-cycle',
				permanent: true,
			},
			{
				source: '/sift-edu/fraud-basics/auth-billing-dispute-cycle',
				destination:
					'/resources/trust-and-safety-university/fraud-basics/auth-billing-dispute-cycle',
				permanent: true,
			},
			{
				source: '/sift-edu/fraud-basics/fraud-insights',
				destination:
					'/resources/trust-and-safety-university/fraud-basics/fraud-insights-terms',
				permanent: true,
			},
			{
				source: '/sift-edu/fraud-basics/fraud-insights-terms',
				destination:
					'/resources/trust-and-safety-university/fraud-basics/impact-of-fraud',
				permanent: true,
			},
			{
				source: '/sift-edu/fraud-basics/impact-of-fraud',
				destination:
					'/resources/trust-and-safety-university/fraud-basics/impact-of-fraud',
				permanent: true,
			},
			{
				source: '/sift-edu/fraud-basics/where-does-fraud-come-from',
				destination:
					'/resources/trust-and-safety-university/fraud-basics/where-does-fraud-come-from',
				permanent: true,
			},
			{
				source: '/sift-edu/fraud-operations',
				destination: '/trust-safety-university?topic=prevent-fraud',
				permanent: true,
			},
			{
				source: '/sift-edu/prevent-fraud/avs-cvv2',
				destination:
					'/resources/trust-and-safety-university/prevent-fraud/avs-cvv2',
				permanent: true,
			},
			{
				source: '/sift-edu/prevent-fraud/basics-manual-review',
				destination:
					'/resources/trust-and-safety-university/prevent-fraud/basics-manual-review',
				permanent: true,
			},
			{
				source: '/sift-edu/prevent-fraud/best-chargeback-response',
				destination:
					'/resources/trust-and-safety-university/prevent-fraud/best-chargeback-response',
				permanent: true,
			},
			{
				source: '/sift-edu/prevent-fraud/build-review-team',
				destination:
					'/resources/trust-and-safety-university/prevent-fraud/build-review-team',
				permanent: true,
			},
			{
				source: '/sift-edu/prevent-fraud/chargeback-response-template',
				destination:
					'/resources/trust-and-safety-university/prevent-fraud/chargeback-response-template',
				permanent: true,
			},
			{
				source: '/sift-edu/prevent-fraud/contact-card-holders',
				destination:
					'/resources/trust-and-safety-university/prevent-fraud/contact-card-holders',
				permanent: true,
			},
			{
				source: '/sift-edu/prevent-fraud/deal-with-account-takeovers',
				destination:
					'/resources/trust-and-safety-university/prevent-fraud/deal-with-account-takeovers',
				permanent: true,
			},
			{
				source: '/sift-edu/prevent-fraud/device-ip-analysis',
				destination:
					'/resources/trust-and-safety-university/prevent-fraud/device-ip-analysis',
				permanent: true,
			},
			{
				source: '/sift-edu/prevent-fraud/fraud-detection-solutions',
				destination:
					'/resources/trust-and-safety-university/prevent-fraud/fraud-detection-solutions',
				permanent: true,
			},
			{
				source: '/sift-edu/prevent-fraud/signs-fraud-shipping',
				destination:
					'/resources/trust-and-safety-university/prevent-fraud/signs-fraud-shipping',
				permanent: true,
			},
			{
				source: '/sift-edu/prevent-fraud/velocity-detection',
				destination:
					'/resources/trust-and-safety-university/prevent-fraud/velocity-detection',
				permanent: true,
			},
			{
				source: '/sift-edu/prevent-fraud/when-to-reject-held-orders',
				destination:
					'/resources/trust-and-safety-university/prevent-fraud/when-to-reject-held-orders',
				permanent: true,
			},
			{
				source: '/sift-edu/signals-tools-and-solutions',
				destination:
					'/resources/trust-and-safety-university/signals-tools-and-solutions',
				permanent: true,
			},
			{
				source: '/sift-edu/payments',
				destination: '/trust-safety-university?pid=1',
				permanent: true,
			},
			{
				source:
					'/resources/ebook/2022-gartner-market-guide-for-online-fraud-detection ',
				destination:
					'/resources/ebook/gartner-emerging-tech-impact-radar-online-fraud-detection-and-prevention',
				permanent: true,
			},
			{
				source:
					'/resources/trust-and-safety-university/chargebacks/american-express-reason-codes',
				destination:
					'/resources/trust-and-safety-university/chargebacks/chargebacks-american-express-reason-codes',
				permanent: true,
			},
			{
				source:
					'/fight-friendly-fraud-chargebacks',
				destination:
					'/blog/fight-friendly-fraud-chargebacks',
				permanent: true,
			},
			{
				source:
					'/products/digital-trust-safety-platform',
				destination:
					'/platform',
				permanent: true,
			},
			{
				source:
					'/mrc-spring-2021-top-takeaways-from-trust-and-safety-experts',
				destination:
					'/blog/mrc-spring-2021-top-takeaways-from-trust-and-safety-experts',
				permanent: true,
			},
			{
				source:
					'/online-dating-fraud-infographic',
				destination:
					'/blog/online-dating-fraud-infographic',
				permanent: true,
			},
			{
				source:
					'/trust-and-safety-university',
				destination:
					'/trust-safety-university',
				permanent: true,
			},
			{
				source:
					'/homepage/index-report-cta-circle',
				destination:
					'/',
				permanent: true,
			},
			{
				source:
					'/case-studies',
				destination:
					'/resources?type=CASE-STUDIES',
				permanent: true,
			},
			{
				source:
					'/confessions-fraud-analyst-pt-2',
				destination:
					'/blog/confessions-fraud-analyst-pt-2',
				permanent: true,
			},
			{
				source:
					'/getting-buy-in-trust-and-safety',
				destination:
					'/blog/getting-buy-in-trust-and-safety',
				permanent: true,
			},
			{
				source:
					'/products/keyless',
				destination:
					'/platform/account-defense',
				permanent: true,
			},
			{
				source:
					'/sift-science-now-privacy-shield-certified',
				destination:
					'/blog/sift-science-now-privacy-shield-certified',
				permanent: true,
			},
			{
				source:
					'/service-privacy',
				destination:
					'/legal-and-compliance/service-privacy-notice',
				permanent: true,
			},
			{
				source:
					'/content-abuse-overview',
				destination:
					'/blog/content-abuse-overview',
				permanent: true,
			},
			{
				source:
					'/navigating-the-evolving-alternative-payments-ecosystem',
				destination:
					'/blog/navigating-the-evolving-alternative-payments-ecosystem',
				permanent: true,
			},
			{
				source:
					'/meet-jason-pillar-people-ops',
				destination:
					'/blog/meet-jason-pillar-people-ops',
				permanent: true,
			},
			{
				source:
					'/industries/retail',
				destination:
					'/solutions/ecommerce',
				permanent: true,
			},
			{
				source:
					'/account-takeover-infographic',
				destination:
					'/blog/account-takeover-infographic',
				permanent: true,
			},
			{
				source:
					'/jason-tan-ceo-sift-science-interview',
				destination:
					'/blog/jason-tan-ceo-sift-science-interview',
				permanent: true,
			},
			{
				source:
					'/interactive-agency-fight-fraud',
				destination:
					'/blog/interactive-agency-fight-fraud',
				permanent: true,
			},
			{
				source:
					'/where-does-fraud-go-from-here-how-coronavirus',
				destination:
					'/blog/where-does-fraud-go-from-here-how-coronavirus',
				permanent: true,
			},
			{
				source:
					'/visa-mastercard-chargebacks-what-to-know-now',
				destination:
					'/blog/visa-mastercard-chargebacks-what-to-know-now',
				permanent: true,
			},
			{
				source:
					'/sift-science-series-d',
				destination:
					'/blog/sift-science-series-d',
				permanent: true,
			},
			{
				source:
					'/news-roundup-422-ransomware-on-the-rise-phone-security-flaws-revealed-more',
				destination:
					'/blog/news-roundup-422-ransomware-on-the-rise-phone-security-flaws-revealed-more',
				permanent: true,
			},
			{
				source:
					'/bay-area-fraud-fighters-forum',
				destination:
					'/blog/bay-area-fraud-fighters-forum',
				permanent: true,
			},
			{
				source:
					'/talking-growth-and-digital-trust-safety-mrc-2019',
				destination:
					'/blog/talking-growth-and-digital-trust-safety-mrc-2019',
				permanent: true,
			},
			{
				source:
					'/fraud-fighting-strategy-ebook',
				destination:
					'/blog/fraud-fighting-strategy-ebook',
				permanent: true,
			},
			{
				source:
					'/meet-sameer-business-development-representative',
				destination:
					'/blog/meet-sameer-business-development-representative',
				permanent: true,
			},
			{
				source:
					'/meet-vera-superhero-software-engineering',
				destination:
					'/blog/meet-vera-superhero-software-engineering',
				permanent: true,
			},
			{
				source:
					'/podcast-payroll-fraud',
				destination:
					'/blog/podcast-payroll-fraud',
				permanent: true,
			},
			{
				source:
					'/news-roundup-410-amazon-marketplace-users-hacked-possible-gamestop-breach',
				destination:
					'/blog/news-roundup-410-amazon-marketplace-users-hacked-possible-gamestop-breach',
				permanent: true,
			},
			{
				source:
					'/fraud-fighters-forum',
				destination:
					'/blog/fraud-fighters-forum',
				permanent: true,
			},
			{
				source:
					'/siftie-spotlight-bret-blount-director-communications',
				destination:
					'/blog/siftie-spotlight-bret-blount-director-communications',
				permanent: true,
			},
			{
				source:
					'/meet-janice-engineering',
				destination:
					'/blog/meet-janice-engineering',
				permanent: true,
			},
			{
				source:
					'/fraud-news-challenge-6-19-2017',
				destination:
					'/blog/fraud-news-challenge-6-19-2017',
				permanent: true,
			},
			{
				source:
					'/assessment',
				destination:
					'/risk-assessment',
				permanent: true,
			},
			{
				source:
					'/how-do-account-takeover-ato-attacks-bypass-multi-factor-authentication-mfa',
				destination:
					'/blog/how-do-account-takeover-ato-attacks-bypass-multi-factor-authentication-mfa',
				permanent: true,
			},
			{
				source:
					'/10-fraud-myths',
				destination:
					'/blog/10-fraud-myths',
				permanent: true,
			},
			{
				source:
					'/travel-fraud-report',
				destination:
					'/blog/travel-fraud-report',
				permanent: true,
			},
			{
				source:
					'/fraud-analyst-quiz',
				destination:
					'/blog/fraud-analyst-quiz',
				permanent: true,
			},
			{
				source:
					'/docs/tutorials/integration',
				destination:
					'https://developers.sift.com/tutorials',
				permanent: true,
			},

			{
				source:
					'/online-fraud-virtual-events',
				destination:
					'/events',
				permanent: true,
			},
			{
				source:
					'/docs/tutorials/integration',
				destination:
					'https://developers.sift.com/tutorials',
				permanent: true,
			},
			{
				source:
					'/how-merchants-can-fight-and-win-friendly-fraud-disputes',
				destination:
					'/blog/how-merchants-can-fight-and-win-friendly-fraud-disputes',
				permanent: true,
			},
			{
				source:
					'/solutions/businessoperations_solutions_teaser',
				destination:
					'/solutions',
				permanent: true,
			},
			{
				source:
					'/homepage/case-study-paulas-choice',
				destination:
					'/resources/case-studies/paulas-choice-case-study',
				permanent: true,
			},
			{
				source:
					'/homepage/case-study-poshmark',
				destination:
					'/resources/case-studies/poshmark',
				permanent: true,
			},
			{
				source:
					'/solutions/digital-goods-services/box-logo-color2x',
				destination:
					'/solutions/digital-goods-services',
				permanent: true,
			},
			{
				source:
					'/solutions/digital-goods-services/shutterstock-logo-color2x',
				destination:
					'/solutions/digital-goods-services',
				permanent: true,
			},
			{
				source:
					'/case-studies/paulas-choice-case-study',
				destination:
					'/resources/case-studies/paulas-choice-case-study',
				permanent: true,
			},
			{
				source:
					'/about/sift-tab-2',
				destination:
					'/company',
				permanent: true,
			},
			{
				source:
					'/index-reports-payment-fraud-q1-2024-media/ra-ts-quotev3',
				destination:
					'/index-reports-payment-fraud-q1-2024-media',
				permanent: true,
			},
			{
				source:
					'/index-reports-payment-fraud-q1-2024-media/q1-2024-index-hero-banner-image',
				destination:
					'/index-reports-payment-fraud-q1-2024-media',
				permanent: true,
			},
			{
				source:
					'/solutions/ecommerce/ecommerce_solutions_teaser-2',
				destination:
					'/solutions/ecommerce/',
				permanent: true,
			},
			{
				source:
					'/fintech-trends-startups',
				destination:
					'/blog/fintech-trends-startups',
				permanent: true,
			},
			{
				source:
					'/how-we-built-it',
				destination:
					'/blog/how-we-built-it',
				permanent: true,
			},
			{
				source:
					'/index-reports-payment-fraud-q1-2024-media/index_payment_scroll_genz4',
				destination:
					'/index-reports-payment-fraud-q1-2024-media',
				permanent: true,
			},
			{
				source:
					'/3-fraud-lessons-learned-from-star-wars',
				destination:
					'/blog/3-fraud-lessons-learned-from-star-wars',
				permanent: true,
			},
			{
				source:
					'/solutions/it_solutions_teaser-2',
				destination:
					'/solutions/information-security',
				permanent: true,
			},
			{
				source:
					'/meet-katherine-superstar-solutions-engineering',
				destination:
					'/blog/meet-katherine-superstar-solutions-engineering',
				permanent: true,
			},
			{
				source:
					'/meet-matt-foundation-front-desk',
				destination:
					'/blog/meet-matt-foundation-front-desk',
				permanent: true,
			},
			{
				source:
					'/sift-science-seattle-office',
				destination:
					'/blog',
				permanent: true,
			},
			{
				source:
					'/digital-trust-safety-roundup-nfts-and-content-abuse',
				destination:
					'/blog/digital-trust-safety-roundup-nfts-and-content-abuse',
				permanent: true,
			},
			{
				source:
					'/index-reports-payment-fraud-q1-2024-media/index_payment_scroll_genz1',
				destination:
					'/index-reports-payment-fraud-q1-2024-media',
				permanent: true,
			},
			{
				source:
					'/index-reports-payment-fraud-q1-2024-media/index_merchant',
				destination:
					'/index-reports-payment-fraud-q1-2024-media',
				permanent: true,
			},
			{
				source:
					'/tackling-the-fraud-economy-with-sifts-fraud-intelligence-center',
				destination:
					'/blog/tackling-the-fraud-economy-with-sifts-fraud-intelligence-center',
				permanent: true,
			},
			{
				source:
					'/digital-trust-and-safety-now',
				destination:
					'/',
				permanent: true,
			},
			{
				source:
					'/trust-and-safety-ground-up/',
				destination:
					'/blog/trust-and-safety-ground-up',
				permanent: true,
			},
			{
				source:
					'/3743-2',
				destination:
					'/',
				permanent: true,
			},
			{
				source:
					'/fraud-prevention-for-qsrs-securing-customer-loyalty-with-digital-trust-safety',
				destination:
					'/blog/fraud-prevention-for-qsrs-securing-customer-loyalty-with-digital-trust-safety',
				permanent: true,
			},
			{
				source:
					'/planning-q4-holiday-fraud-rush',
				destination:
					'/blog/planning-q4-holiday-fraud-rush',
				permanent: true,
			},
			{
				source:
					'/podcast-trust-safety-account-takeover-ato',
				destination:
					'/blog/podcast-trust-safety-account-takeover-ato',
				permanent: true,
			},
			{
				source:
					'/how-ksl-maintains-customer-trust',
				destination:
					'/blog/how-ksl-maintains-customer-trust',
				permanent: true,
			},
			{
				source:
					'/index-reports-payment-fraud-q1-2024-media/index_payment_scroll_genz2',
				destination:
					'/index-reports-payment-fraud-q1-2024-media',
				permanent: true,
			},
			{
				source:
					'/index-reports-payment-fraud-q1-2024-media/digitalwallets',
				destination:
					'/index-reports-payment-fraud-q1-2024-media',
				permanent: true,
			},
			{
				source:
					'/the-era-of-ai-powered-risk-decisioning/sift-platform-wheel-2',
				destination:
					'/blog/the-era-of-ai-powered-risk-decisioning',
				permanent: true,
			},
			{
				source:
					'/digital-gift-cards-fast-gift-giving-even-faster-fraud',
				destination:
					'/blog/digital-gift-cards-fast-gift-giving-even-faster-fraud',
				permanent: true,
			},
			{
				source:
					'/resources/guides/magento',
				destination:
					'/resources/webinar/sift-and-magento-taking-a-digital-trust-safety-approach-to-grow-your-e-commerce-business',
				permanent: true,
			},
			{
				source:
					'/resources/guides/shopify',
				destination:
					'/resources',
				permanent: true,
			},
			{
				source:
					'/trust-and-safety-the-scars-of-scaling',
				destination:
					'/blog/trust-and-safety-the-scars-of-scaling',
				permanent: true,
			},
			{
				source:
					'/tos.html',
				destination:
					'/',
				permanent: true,
			},
			{
				source:
					'/announcing-sift-science-fight-fraud-with-large-scale-machine-learning',
				destination:
					'/blog/announcing-sift-science-fight-fraud-with-large-scale-machine-learning',
				permanent: true,
			},
			{
				source:
					'/resources/guides/sass',
				destination:
					'/resources',
				permanent: true,
			},
			{
				source:
					'/resources/tutorials/integration-guide.html',
				destination:
					'https://developers.sift.com/guides',
				permanent: true,
			},
			{
				source:
					'/articles/getting-started.html',
				destination:
					'https://support.sift.com/hc/en-us/sections/202160438-Getting-Started',
				permanent: true,
			},
			{
				source:
					'/docs/anonymous-users',
				destination:
					'https://developers.sift.com/docs/curl/events-api/anonymous-events',
				permanent: true,
			},
			{
				source:
					'/blog/2016/fraudsters-create-fake-accounts/feed',
				destination:
					'/blog/fraudsters-create-fake-accounts',
				permanent: true,
			},
			{
				source:
					'/blog/2014/5-worst-internet-scams-of-all-time',
				destination:
					'/blog/5-worst-internet-scams-of-all-time',
				permanent: true,
			},
			{
				source:
					'/sift-edu/includes/_chargebacks-toc',
				destination:
					'/resources/trust-and-safety-university/fraud-basics/all-about-chargebacks',
				permanent: true,
			},
			{
				source:
					'/legal',
				destination:
					'/legal-and-compliance',
				permanent: true,
			},
			{
				source:
					'/sift-edu',
				destination:
					'/trust-safety-university',
				permanent: true,
			},
			{
				source:
					'/archive/fall-2019-release',
				destination:
					'/new-releases',
				permanent: true,
			},
			{
				source:
					'/archive/fall-2021-release',
				destination:
					'/new-releases',
				permanent: true,
			},
			{
				source:
					'/archive/spring-2020-release',
				destination:
					'/new-releases',
				permanent: true,
			},
			{
				source:
					'/archive/spring-2021-release',
				destination:
					'/new-releases',
				permanent: true,
			},
			{
				source:
					'/work-with-us',
				destination:
					'/careers',
				permanent: true,
			},
			{
				source:
					'/careers/people_group-2',
				destination:
					'/careers',
				permanent: true,
			},
			{
				source:
					'/console/api-keys',
				destination:
					'https://support.sift.com/hc/en-us/articles/202282246-Finding-your-REST-and-JavaScript-API-keys',
				permanent: true,
			},
			{
				source:
					'/report-digital-trust-safety-index-account-takeover-fraud-and-the-growing-burden-on-business',
				destination:
					'/blog/report-digital-trust-safety-index-account-takeover-fraud-and-the-growing-burden-on-business',
				permanent: true,
			},
			{
				source:
					'/device-fingerprinting.',
				destination:
					'https://developers.sift.com/tutorials/device-fingerprinting-api',
				permanent: true,
			},
			{
				source:
					'/sift-edu',
				destination:
					'/trust-safety-university',
				permanent: true,
			},
			{
				source:
					'/products/promo-abuse',
				destination:
					'/solutions/policy-abuse',
				permanent: true,
			},
			{
				source:
					'/product/index.html',
				destination:
					'/solutions',
				permanent: true,
			},
			{
				source:
					'/insights/business',
				destination:
					'/blog/announcing-sift-insights',
				permanent: true,
			},
			{
				source:
					'/site-privacy',
				destination:
					'/legal-and-compliance/service-privacy-notice',
				permanent: true,
			},
			{
				source:
					'/digital-trust-and-safety-journey/_campaign_partials/group_2',
				destination:
					'/why-sift',
				permanent: true,
			},
			{
				source:
					'/plan-small-businesses-ecommerce-fraud',
				destination:
					'/blog/plan-small-businesses-ecommerce-fraud',
				permanent: true,
			},
			{
				source:
					'/console/settings',
				destination:
					'/hc/en-us/articles/360019939274-Setting-User-Roles-Permissions',
				permanent: true,
			},
			{
				source:
					'/how-fintech-fights-fraud',
				destination:
					'/solutions/fintech',
				permanent: true,
			},
			{
				source:
					'/industries/psp',
				destination:
					'/partner-ecosystem/payment-service-providers',
				permanent: true,
			},
			{
				source:
					'/docs/tutorials/sending-historical-data',
				destination:
					'/tutorials/sending-historical-data',
				permanent: true,
			},
			{
				source:
					'/archive/fall-2022-release',
				destination:
					'/new-releases',
				permanent: true,
			},
			{
				source:
					'/fraud-management',
				destination:
					'/blog/how-to-find-the-right-fraud-prevention-solution-for-your-business',
				permanent: true,
			},
			{
				source:
					'/online-fraud-virutal-events',
				destination:
					'/events',
				permanent: true,
			},
			{
				source:
					'/brand-center/wordmark-2',
				destination:
					'/brand-center',
				permanent: true,
			},
			{
				source:
					'/image/legal/Sift_Services_End_User_022823.pdf',
				destination:
					'/legal-and-compliance/tos',
				permanent: true,
			},
			{
				source:
					'/resources/plugins/partnership-api-libraries',
				destination:
					'/docs/curl/apis-overview',
				permanent: true,
			},
			{
				source:
					'/dynamic-friction/graph-2',
				destination:
					'/dynamic-friction',
				permanent: true,
			},
			{
				source:
					'/fake-reviews-are-a-fast-growing-fraud-concern',
				destination:
					'/blog/fake-reviews-are-a-fast-growing-fraud-concern',
				permanent: true,
			},
			{
				source:
					'/online-fraud-virtual-events',
				destination:
					'/events',
				permanent: true,
			},
			{
				source:
					'/product/index',
				destination:
					'/platform',
				permanent: true,
			},
			{
				source:
					'/resources/2016/gray-areas-fraud-review',
				destination:
					'/blog/gray-areas-fraud-review',
				permanent: true,
			},
			{
				source:
					'/resources/cookie-policy/cookie-policy',
				destination:
					'/cookie-policy',
				permanent: true,
			},
			{
				source:
					'/resources/console/api-keys',
				destination:
					'/docs/curl/apis-overview/core-topics/client-libraries',
				permanent: true,
			},
			{
				source:
					'/resources/wp-content/sift_hellofresh_casestudy.pdf',
				destination:
					'/resources?type=CASE-STUDIES',
				permanent: true,
			},
			{
				source:
					'/resources/tutorials',
				destination:
					'https://developers.sift.com/tutorials',
				permanent: true,
			},
			{
				source:
					'/resources/wp-content/sift_studypool_casestudy.pdf',
				destination:
					'/resources/case-studies/studypool-case-study',
				permanent: true,
			},
			{
				source:
					'/resources/2016/sift-science-fraud-fighting-trends-2016-report',
				destination:
					'/blog/sift-science-fraud-fighting-trends-2016-report',
				permanent: true,
			},
			{
				source:
					'/resources/5-worst-internet-scams-of-all-time',
				destination:
					'/blog/5-worst-internet-scams-of-all-time',
				permanent: true,
			},
			{
				source:
					'/resources/wp-content/sift_getmyboat_casestudy.pdf',
				destination:
					'/resources/case-studies/getmyboat-case-study',
				permanent: true,
			},
			{
				source:
					'/resources/blog/prevent-ecommerce-fraud-frugally',
				destination:
					'/blog/prevent-ecommerce-fraud-frugally',
				permanent: true,
			},
			{
				source:
					'/resources/2017/meet-laura-superhero-support',
				destination:
					'/blog/meet-laura-superhero-support',
				permanent: true,
			},
			{
				source:
					'/careers/inc-2',
				destination:
					'/careers',
				permanent: true,
			},
			{
				source:
					'/digital-trust-and-safety-journey',
				destination:
					'/why-sift',
				permanent: true,
			},
			{
				source:
					'/resources/tutori',
				destination:
					'/resources',
				permanent: true,
			},
			{
				source:
					'/resources/resources/e-wallets',
				destination:
					'https://developers.sift.com/guides/e-wallets',
				permanent: true,
			},
			{
				source:
					'/resources/sift-edu/chargebacks',
				destination:
					'/trust-safety-university?topic=chargebacks&pid=1',
				permanent: true,
			},
			{
				source:
					'/case-studies/taptap-send-case-study',
				destination:
					'/resources/case-studies/taptap-send-case-study',
				permanent: true,
			},
			{
				source:
					'/case-studies/coffee-meets-bagel-case-study',
				destination:
					'/resources/case-studies/coffee-meets-bagel-case-study',
				permanent: true,
			},
			{
				source:
					'/resources/2014/behind-the-signal-doral-fl',
				destination:
					'/blog/behind-the-signal-doral-fl',
				permanent: true,
			},
			{
				source:
					'/resources/2017/sift-science-summer-interns',
				destination:
					'/blog/sift-science-summer-interns',
				permanent: true,
			},
			{
				source:
					'/resources/2017/online-ticketing-fraud',
				destination:
					'/blog/online-ticketing-fraud',
				permanent: true,
			},
			{
				source:
					'/resources/2016/social-engineering',
				destination:
					'/blog/social-engineering',
				permanent: true,
			},
			{
				source:
					'/resources/2018/siftie-spotlight-madison-majerle-account-manager',
				destination:
					'/blog/siftie-spotlight-madison-majerle-account-manager',
				permanent: true,
			},
			{
				source:
					'/resources/seven-habits-of-highly-fraudulent-users',
				destination:
					'/blog/seven-habits-of-highly-fraudulent-users',
				permanent: true,
			},
			{
				source:
					'/resources/2017/takeaways-trust-safety-summit',
				destination:
					'/blog/takeaways-trust-safety-summit',
				permanent: true,
			},
			{
				source:
					'/resources/case-studies/carousell-case-study',
				destination:
					'/resources/case-studies/carousell',
				permanent: true,
			},
			{
				source:
					'/resources/2016/interview-adam-fern-square-lsq',
				destination:
					'/blog/interview-adam-fern-square-lsq',
				permanent: true,
			},
			{
				source:
					'/resources/2016/interview-adam-fern-square-lsq',
				destination:
					'/blog/interview-adam-fern-square-lsq',
				permanent: true,
			},
			{
				source:
					'/resources/developers/overview',
				destination:
					'https://developers.sift.com',
				permanent: true,
			},
			{
				source:
					'/resources/resources/partnership-api-libraries',
				destination:
					'https://developers.sift.com/docs/curl/partner-api/overview',
				permanent: true,
			},
			{
				source:
					'/resources/resources/content-abuse',
				destination:
					'https://developers.sift.com/guides/content-abuse ',
				permanent: true,
			},
			{
				source:
					'/resources/resources/general-guide',
				destination:
					'https://developers.sift.com/guides/general-guide',
				permanent: true,
			},
			{
				source:
					'/resources/resources/marketplaces',
				destination:
					'https://developers.sift.com/guides/marketplaces',
				permanent: true,
			},
			{
				source:
					'/resources/resources/payment-gateway',
				destination:
					'https://developers.sift.com/guides/payment-gateway',
				permanent: true,
			},
			{
				source:
					'/resources/resources/remittance',
				destination:
					'https://developers.sift.com/guides/remittance',
				permanent: true,
			},
			{
				source:
					'/resources/resources/salesforce',
				destination:
					'https://developers.sift.com/guides/salesforce',
				permanent: true,
			},
			{
				source:
					'/resources/resources/ticketing-and-events',
				destination:
					'https://developers.sift.com/guides/ticketing-and-events',
				permanent: true,
			},
			{
				source:
					'/resources/guides/travel-booking',
				destination:
					'https://developers.sift.com/guides/travel',
				permanent: true,
			},
			{
				source:
					'/contact-sales',
				destination:
					'/contact-us',
				permanent: true,
			},
			{
				source:
					'/online-fraud-virtual-events',
				destination:
					'/events',
				permanent: true,
			},
			{
				source:
					'/resources/tutorials',
				destination:
					'https://developers.sift.com/tutorials',
				permanent: true,
			},
			{
				source:
					'/resources/2018/announcing-sift-insights',
				destination:
					'/blog/announcing-sift-insights',
				permanent: true,
			},
			{
				source:
					'/resources/resources/add-an-abuse-type',
				destination:
					'https://developers.sift.com/tutorials/add-an-abuse-type',
				permanent: true,
			},
			{
				source:
					'/resources/resources/custom-events-and-fields',
				destination:
					'https://developers.sift.com/tutorials/custom-events-and-fields',
				permanent: true,
			},
			{
				source:
					'/resources/resources/decisions',
				destination:
					'https://developers.sift.com/tutorials/decisions',
				permanent: true,
			},
			{
				source:
					'/resources/resources/sending-historical-data',
				destination:
					'https://developers.sift.com/tutorials/sending-historical-data ',
				permanent: true,
			},
			{
				source:
					'/css/fonts/AcuminPro/acuminpro-regular.woff',
				destination:
					'/',
				permanent: true,
			},
			{
				source:
					'/resources/resources/workflows',
				destination:
					'https://developers.sift.com/tutorials/workflows',
				permanent: true,
			},
			{
				source:
					'/css/inline_fall_2020.css',
				destination:
					'/',
				permanent: true,
			},
			{
				source:
					'/resources/insult-monitor/insult-monitor',
				destination:
					'/',
				permanent: true,
			},
			{
				source:
					'/resources/2017/10-things-need-know-digital-natives',
				destination:
					'/blog/10-things-need-know-digital-natives',
				permanent: true,
			},
			{
				source:
					'/resources/2017/10-things-need-know-digital-natives',
				destination:
					'/blog/10-things-need-know-digital-natives',
				permanent: true,
			},
			{
				source:
					'/resources/2018/10-fraud-myths',
				destination:
					'/blog/10-fraud-myths',
				permanent: true,
			},
			{
				source:
					'/resources/five-ecommerce-fraud-facts',
				destination:
					'/blog/five-ecommerce-fraud-facts',
				permanent: true,
			},
			{
				source:
					'/resources/fraud-management/fraud-management',
				destination:
					'/blog/fraud-management/fraud-management',
				permanent: true,
			},
			{
				source:
					'/resources/2016/fraud-payment-stats-2016',
				destination:
					'/blog/fraud-payment-stats-2016',
				permanent: true,
			},
			{
				source:
					'/resources/2016/fraud-united-states-rankings',
				destination:
					'/blog/fraud-united-states-rankings',
				permanent: true,
			},
			{
				source:
					'/resources/global-e-commerce-fraud',
				destination:
					'/blog/global-e-commerce-fraud',
				permanent: true,
			},
			{
				source:
					'/resources/2016/get-ready-for-mini-lists',
				destination:
					'/blog/get-ready-for-mini-lists',
				permanent: true,
			},
			{
				source:
					'/resources/trust-and-safety-university',
				destination:
					'/trust-safety-university',
				permanent: true,
			},
			{
				source:
					'/resources/2016/get-ready-for-mini-lists',
				destination:
					'/blog/get-ready-for-mini-lists',
				permanent: true,
			},
			{
				source:
					'/resources/2015/10-warning-signs-of-ecommerce-fraud',
				destination:
					'/blog/10-warning-signs-of-ecommerce-fraud',
				permanent: true,
			},
			{
				source:
					'/resources/2015/10-warning-signs-of-ecommerce-fraud-part-3-whats-the-rush',
				destination:
					'/blog/10-warning-signs-of-ecommerce-fraud-part-3-whats-the-rush',
				permanent: true,
			},
			{
				source:
					'/resources/2015/5-things-we-cant-predict-and-one-thing-we-can',
				destination:
					'/blog/5-things-we-cant-predict-and-one-thing-we-can',
				permanent: true,
			},
			{
				source:
					'/resources/2016/how-to-use-webhook-notifications',
				destination:
					'/blog/how-to-use-webhook-notifications',
				permanent: true,
			},
			{
				source:
					'/resources/2015/10-warning-signs-of-ecommerce-fraud-part-3-whats-the-rush',
				destination:
					'/blog/10-warning-signs-of-ecommerce-fraud-part-3-whats-the-rush',
				permanent: true,
			},
			{
				source:
					'/resources/2015/10-warning-signs-of-ecommerce-fraud',
				destination:
					'/blog/10-warning-signs-of-ecommerce-fraud-part-3-whats-the-rush',
				permanent: true,
			},
			{
				source:
					'/resources/2014/5-worst-internet-scams-of-all-time',
				destination:
					'/blog/5-worst-internet-scams-of-all-time',
				permanent: true,
			},
			{
				source:
					'/resources/2016/16-things-fraud-analysts-will-understand',
				destination:
					'/blog/16-things-fraud-analysts-will-understand',
				permanent: true,
			},
			{
				source:
					'/resources/2017/5-ways-blockchain-will-make-payments-more-secure',
				destination:
					'/blog/5-ways-blockchain-will-make-payments-more-secure',
				permanent: true,
			},
			{
				source:
					'/resources/2017/account-takeover-protect-business-emerging-threat',
				destination:
					'/blog/account-takeover-protect-business-emerging-threat',
				permanent: true,
			},
			{
				source:
					'/resources/2017/5-ways-blockchain-will-make-payments-more-secure',
				destination:
					'/blog/5-ways-blockchain-will-make-payments-more-secure',
				permanent: true,
			},
			{
				source:
					'/resources/2018/3570',
				destination:
					'/blog/3570',
				permanent: true,
			},
			{
				source:
					'/resources/2017/account-takeover-protect-business-emerging-threat',
				destination:
					'/blog/account-takeover-protect-business-emerging-threat',
				permanent: true,
			},
			{
				source:
					'/resources/2015/5-things-we-cant-predict-and-one-thing-we-can',
				destination:
					'/blog/5-things-we-cant-predict-and-one-thing-we-can',
				permanent: true,
			},
			{
				source:
					'/resources/2014/5-worst-internet-scams-of-all-time',
				destination:
					'/blog/5-worst-internet-scams-of-all-time',
				permanent: true,
			},
			{
				source:
					'/resources/2018/announcing-sift-insights',
				destination:
					'/blog/announcing-sift-insights',
				permanent: true,
			},
			{
				source:
					'/resources/2018/botpocalypse-spammy-content-and-phony-engagement-make-up-the-new-face-of-social-media',
				destination:
					'/blog/botpocalypse-spammy-content-and-phony-engagement-make-up-the-new-face-of-social-media',
				permanent: true,
			},
			{
				source:
					'/resources/2016/challenge-catching-fraudsters',
				destination:
					'/blog/challenge-catching-fraudsters',
				permanent: true,
			},
			{
				source:
					'/resources/2018/chargebacks-merchants-mistakes',
				destination:
					'/blog/chargebacks-merchants-mistakes',
				permanent: true,
			},
			{
				source:
					'/resources/2016/concurrency-and-at-least-once-semantics-with-the-new-kafka-consumer',
				destination:
					'/blog/concurrency-and-at-least-once-semantics-with-the-new-kafka-consumer',
				permanent: true,
			},
			{
				source:
					'/resources/announcing-sift-science-fight-fraud-with-large-scale-machine-learning',
				destination:
					'/blog/announcing-sift-science-fight-fraud-with-large-scale-machine-learning',
				permanent: true,
			},
			{
				source:
					'/resources/2016/cybercriminals-apologize-3d-secure-wont-be-mandatory-in-australia-more',
				destination:
					'/blog/cybercriminals-apologize-3d-secure-wont-be-mandatory-in-australia-more',
				permanent: true,
			},
			{
				source:
					'/resources/2018/day-life-bdr-sift-science',
				destination:
					'/blog/day-life-bdr-sift-science',
				permanent: true,
			},
			{
				source:
					'/resources/2018/day-life-bdr-sift-science',
				destination:
					'/blog/day-life-bdr-sift-science',
				permanent: true,
			},
			{
				source:
					'/resources/2018/3570',
				destination:
					'/blog/3570',
				permanent: true,
			},
			{
				source:
					'/resources/2016/concurrency-and-at-least-once-semantics-with-the-new-kafka-consumer',
				destination:
					'/blog/concurrency-and-at-least-once-semantics-with-the-new-kafka-consumer',
				permanent: true,
			},
			{
				source:
					'/resources/2015/sift-science-candidate-faqs-culture-edition',
				destination:
					'/blog/sift-science-candidate-faqs-culture-edition',
				permanent: true,
			},
			{
				source:
					'/resources/2018/sift-science-mrc-vegas-2018',
				destination:
					'/blog/sift-science-mrc-vegas-2018',
				permanent: true,
			},
			{
				source:
					'/resources/2016/sift-science-raises-30m-new-funding',
				destination:
					'/blog/sift-science-raises-30m-new-funding',
				permanent: true,
			},
			{
				source:
					'/resources/announcing-sift-science-fight-fraud-with-large-scale-machine-learning',
				destination:
					'/blog/announcing-sift-science-fight-fraud-with-large-scale-machine-learning',
				permanent: true,
			},
			{
				source:
					'/resources/2017/announcing-smart-collaboration-queues-better-way-manual-review',
				destination:
					'/blog/announcing-smart-collaboration-queues-better-way-manual-review',
				permanent: true,
			},
			{
				source:
					'/resources/2017/introducing-digital-trust-platform',
				destination:
					'/blog/introducing-digital-trust-platform',
				permanent: true,
			},
			{
				source:
					'/resources/blog/introducing-workflow-simulation',
				destination:
					'/blog/introducing-workflow-simulation',
				permanent: true,
			},
			{
				source:
					'/resources/2017/learnings-mrc-conference-fabulous-las-vegas',
				destination:
					'/blog/learnings-mrc-conference-fabulous-las-vegas',
				permanent: true,
			},
			{
				source:
					'/resources/2017/legal-loophole-scammers-fraud',
				destination:
					'/blog/legal-loophole-scammers-fraud',
				permanent: true,
			},
			{
				source:
					'/resources/2016/marketplace-success-tips',
				destination:
					'/blog/marketplace-success-tips',
				permanent: true,
			},
			{
				source:
					'/resources/2017/meet-janice-engineering',
				destination:
					'/blog/meet-janice-engineering',
				permanent: true,
			},
			{
				source:
					'/resources/2017/meet-jason-pillar-people-ops',
				destination:
					'/blog/meet-jason-pillar-people-ops ',
				permanent: true,
			},
			{
				source:
					'/resources/2017/meet-keren-superstar-software',
				destination:
					'/blog/meet-keren-superstar-software',
				permanent: true,
			},
			{
				source:
					'/resources/2017/meet-laura-superhero-support',
				destination:
					'/blog/meet-laura-superhero-support/ ',
				permanent: true,
			},
			{
				source:
					'/resources/2017/meet-matt-foundation-front-desk',
				destination:
					'/blog/meet-matt-foundation-front-desk',
				permanent: true,
			},
			{
				source:
					'/resources/2017/meet-sarah-captain-content-marketing',
				destination:
					'/blog/meet-sarah-captain-content-marketing',
				permanent: true,
			},
			{
				source:
					'/resources/2017/meet-scott-whiz-web-development',
				destination:
					'/blog/meet-scott-whiz-web-development',
				permanent: true,
			},
			{
				source:
					'/resources/2015/more-analytics-smarter-decision-making',
				destination:
					'/blog/more-analytics-smarter-decision-making',
				permanent: true,
			},
			{
				source:
					'/resources/2015/feature-spotlight-the-hidden-clues-in-an-email-address',
				destination:
					'/blog/feature-spotlight-the-hidden-clues-in-an-email-address',
				permanent: true,
			},
			{
				source:
					'/resources/2018/handling-suspicious-logins',
				destination:
					'/blog/handling-suspicious-logins',
				permanent: true,
			},
			{
				source:
					'/resources/2015/how-opentable-makes-real-time-transactions-less-risky',
				destination:
					'/blog/how-opentable-makes-real-time-transactions-less-risky',
				permanent: true,
			},
			{
				source:
					'/blog/how-opentable-makes-real-time-transactions-less-risky',
				destination:
					'/resources/videos/opentable-testimonial',
				permanent: true,
			},
			{
				source:
					'/resources/2016/how-seoclerks-fights-chargebacks-money-laundering-account-abuse-and-friendly-fraud',
				destination:
					'/blog/how-seoclerks-fights-chargebacks-money-laundering-account-abuse-and-friendly-fraud/',
				permanent: true,
			},
			{
				source:
					'/resources/2018/peer-to-peer-payments-sending-money-to-friends-and-fraudsters-is-easier-than-ever',
				destination:
					'/blog/peer-to-peer-payments-sending-money-to-friends-and-fraudsters-is-easier-than-ever',
				permanent: true,
			},
			{
				source:
					'/resources/2018/peer-to-peer-payments-sending-money-to-friends-and-fraudsters-is-easier-than-ever',
				destination:
					'/blog/peer-to-peer-payments-sending-money-to-friends-and-fraudsters-is-easier-than-ever',
				permanent: true,
			},
			{
				source:
					'/resources/2018/podcast-interview-sift-science-cto-fred-sadaghiani',
				destination:
					'/blog/podcast-interview-sift-science-cto-fred-sadaghiani',
				permanent: true,
			},
			{
				source:
					'/resources/2015/real-time-payouts-with-entropay',
				destination:
					'/blog/real-time-payouts-with-entropay',
				permanent: true,
			},
			{
				source:
					'/resources/2016/how-seoclerks-fights-chargebacks-money-laundering-account-abuse-and-friendly-fraud',
				destination:
					'/blog/how-seoclerks-fights-chargebacks-money-laundering-account-abuse-and-friendly-fraud',
				permanent: true,
			},
			{
				source:
					'/resources/2018/handling-suspicious-logins',
				destination:
					'/blog/handling-suspicious-logins',
				permanent: true,
			},
			{
				source:
					'/resources/2014/how-did-my-credit-card-info-get-stolen',
				destination:
					'/blog/how-did-my-credit-card-info-get-stolen',
				permanent: true,
			},
			{
				source:
					'/resources/behind-the-signal-doral-fl',
				destination:
					'/blog/behind-the-signal-doral-fl',
				permanent: true,
			},
			{
				source:
					'/resources/2017/sift-science-summer-interns',
				destination:
					'/blog/sift-science-summer-interns',
				permanent: true,
			},
			{
				source:
					'/resources/2018/siftie-spotlight-dandrew-cruda-senior-marketing-manager-demand-generation',
				destination:
					'/blog/siftie-spotlight-dandrew-cruda-senior-marketing-manager-demand-generation',
				permanent: true,
			},
			{
				source:
					'/resources/2018/siftie-spotlight-freda-kreitzer-specialist',
				destination:
					'/blog/siftie-spotlight-freda-kreitzer-specialist',
				permanent: true,
			},
			{
				source:
					'/resources/2018/siftie-spotlight-kyle-kwon-support-engineer',
				destination:
					'/blog/siftie-spotlight-kyle-kwon-support-engineer',
				permanent: true,
			},
			{
				source:
					'/resources/2018/siftie-spotlight-madison-majerle-account-manager',
				destination:
					'/blog/siftie-spotlight-madison-majerle-account-manager',
				permanent: true,
			},
			{
				source:
					'/resources/2019/siftie-spotlight-maya-meyers-front-desk-ambassador',
				destination:
					'/blog/siftie-spotlight-maya-meyers-front-desk-ambassador',
				permanent: true,
			},
			{
				source:
					'/resources/careers/careers',
				destination:
					'/careers',
				permanent: true,
			},
			{
				source:
					'/resources/2017/watch-out-phony-donation-sites',
				destination:
					'/blog/watch-out-phony-donation-sites',
				permanent: true,
			},
			{
				source:
					'/resources/industries/psp',
				destination:
					'/solutions/fintech',
				permanent: true,
			},
			{
				source:
					'/resources/what-is-machine-learning-intro',
				destination:
					'/blog/what-is-machine-learning-intro',
				permanent: true,
			},
			{
				source:
					'/resources/work-with-us/work-with-us',
				destination:
					'/careers',
				permanent: true,
			},
			{
				source:
					'/resources/2015/the-first-rule-in-fighting-fraud-rules-dont-work',
				destination:
					'/blog/the-first-rule-in-fighting-fraud-rules-dont-work/',
				permanent: true,
			},
			{
				source:
					'/resources/2014/three-ways-gamers-cheat-in-online-poker',
				destination:
					'/blog/three-ways-gamers-cheat-in-online-poker',
				permanent: true,
			},
			{
				source:
					'/resources/archive/fall-2021-release',
				destination:
					'/new-releases',
				permanent: true,
			},
			{
				source:
					'/resources/events/events',
				destination:
					'/events',
				permanent: true,
			},
			{
				source:
					'/resources/archive/summer-2019-release',
				destination:
					'/new-releases',
				permanent: true,
			},
			{
				source:
					'/resources/case-studies/zirtue-logo-color-2',
				destination:
					'/resources/case-studies/zirtue',
				permanent: true,
			},
			{
				source:
					'/resources/ebook/machine-learning-future-fraud-fighting-travel-industry',
				destination:
					'/resources/ebook/machine-learning-fraud-travel-industry',
				permanent: true,
			},
			{
				source:
					'/resources/magento/magento',
				destination:
					'/resources/webinar/sift-and-magento-taking-a-digital-trust-safety-approach-to-grow-your-e-commerce-business',
				permanent: true,
			},
			{
				source:
					'/resources/2015/the-first-rule-in-fighting-fraud-rules-dont-work',
				destination:
					'/news/generative-ai-is-democratizing-fraud-what-can-companies-and-their-consumers-do-to-prevent-being-scammed',
				permanent: true,
			},
			{
				source:
					'/resources/news-and-press-resources/1',
				destination:
					'/newsroom',
				permanent: true,
			},
			{
				source:
					'/resources/products/dispute-management',
				destination:
					'/products/dispute-management',
				permanent: true,
			},
			{
				source:
					'/resources/connect/connect',
				destination:
					'/partner-ecosystem',
				permanent: true,
			},
			{
				source:
					'/resources/case-studies/1000',
				destination:
					'/resources?type=CASE-STUDIES',
				permanent: true,
			},
			{
				source:
					'/resources/global',
				destination:
					'/resources',
				permanent: true,
			},
			{
				source:
					'/resources/case-studies/atom-tickets/footercta-1-280x300',
				destination:
					'/resources/case-studies/atom-tickets',
				permanent: true,
			},
			{
				source:
					'/resources/wp-content/sift_cmb_casestudy.pdf',
				destination:
					'/resources/case-studies/coffee-meets-bagel-case-study',
				permanent: true,
			},
			{
				source:
					'/resources/podcast/machine-learning-fraud-trust-safety',
				destination:
					'/resources?type=PODCAST',
				permanent: true,
			},
			{
				source:
					'/resources/trust/trust',
				destination:
					'/resources',
				permanent: true,
			},
			{
				source:
					'/resources/video',
				destination:
					'/resources',
				permanent: true,
			},
			{
				source:
					'/service-privacy',
				destination:
					'/legal-and-compliance/website-privacy-notice',
				permanent: true,
			},
			{
				source:
					'/connect',
				destination:
					'/platform',
				permanent: true,
			},
			{
				source:
					'/products/digital-trust-safety-platform',
				destination:
					'/platform',
				permanent: true,
			},
			{
				source:
					'/resources/products/dispute-management',
				destination:
					'/platform/dispute-management',
				permanent: true,
			},
			{
				source:
					'/resources/2017/announcing-smart-collaboration-queues-better-way-manual-review',
				destination:
					'/blog/announcing-smart-collaboration-queues-better-way-manual-review',
				permanent: true,
			},
			{
				source:
					'/js/homepage_fall_2020.js',
				destination:
					'/',
				permanent: true,
			},
			{
				source:
					'/digital-trust-and-safety-now',
				destination:
					'/',
				permanent: true,
			},
			{
				source:
					'/resources/webinar',
				destination:
					'/resources/webinars',
				permanent: true,
			},
			{
				source:
					'/how-fintech-fights-fraud',
				destination:
					'/solutions/fintech',
				permanent: true,
			},
			{
				source: '/press-release/:slug*',
				destination: '/company/press',
				permanent: true,
			},
			{
				source: '/news/:slug*',
				destination: '/company/in-the-news',
				permanent: true,
			},
			{
				source: '/resources/resources/events-api',
				destination: '/resources/events-api#complex-fields-payment',
				permanent: true,
			},
			{
				source: '/resources/resources/events-api#complex-fields-payment',
				destination: '/resources/events-api#complex-fields-payment',
				permanent: true,
			},
			{	source: '/resources/event/:slug*',
				destination: '/events/:slug*',
				permanent: true,
			},
			{	source: '/resources/demos/demos',
				destination: '/resources?type=DEMOS',
				permanent: true,
			},
			{
				source: '/resources/2017/announcing-support-ios-11-android-o',
				destination: '/resources',
				permanent: true,
			},
			{
				source: '/dynamic-friction',
				destination: '/platform',
				permanent: true,
			},
			{
				source: '/dynamic-friction',
				destination: '/platform',
				permanent: true,
			},
			{
				source: '/case-studies/doordash',
				destination: 'https://pages.sift.com/rs/526-PCC-974/images/Sift_CaseStudy_Uphold_062823.pdf',
				permanent: true,
			},
			{
				source: '/case-studies/uphold-case-study',
				destination: 'https://pages.sift.com/rs/526-PCC-974/images/Sift_CaseStudy_Uphold_062823.pdf',
				permanent: true,
			},
			{
				source: '/ebook/q1-2023-digital-trust-safety-index-payment-fraud',
				destination: 'https://pages.sift.com/rs/526-PCC-974/images/Q1-2023-Digital-Trust-and-Safety-Index_Payment-fraud.pdf',
				permanent: true,
			},
			{
				source: '/ebook/q4-2022-digital-trust-safety-index-the-rising-risk-of-online-disputes',
				destination: '/blog/the-rising-risk-of-online-disputes',
				permanent: true,
			},
			{
				source: '/fibr-fraud-industry-benchmarking-resources',
				destination: '/fibr-fraud-industry-benchmarking-resource',
				permanent: true,
			},
			{
				source: '/fraud-center/fraud-schemes',
				destination: '/fraud-center',
				permanent: true,
			},
			{
				source: '/industries',
				destination: '/solutions',
				permanent: true,
			},
			{
				source: '/news-and-press-resources',
				destination: '/newsroom',
				permanent: true,
			},
			{
				source: '/onepager/sift-payment-protection-proactively-prevent-payment-fraud',
				destination: '/platform/payment-protection',
				permanent: true,
			},
			{
				source: '/products/sift-connect',
				destination: '/fibr-fraud-industry-benchmarking-resource',
				permanent: true,
			},
			{
				source: '/solutions/chargeback-frauds',
				destination: '/solutions/chargeback-fraud',
				permanent: true,
			},
			{
				source: '/solutions/executive',
				destination: '/solutions/executives',
				permanent: true,
			},
			{
				source: '/solutions/fake-account-creation',
				destination: '/solutions/account-creation',
				permanent: true,
			},
			{
				source: '/what-is-the-democratization-of-fraud',
				destination: '/blog/what-is-the-democratization-of-fraud',
				permanent: true,
			},
			{
				source: '/what-you-need-to-know-about-the-visa-compelling-evidence-3-0-update',
				destination: '/blog/what-you-need-to-know-about-the-visa-compelling-evidence-3-0-update',
				permanent: true,
			},
			{	source: '/resources/demo/:slug*',
				destination: '/resources/demos/:slug*',
				permanent: true,
			},
			{	source: '/resources/ebook/:slug*',
				destination: '/resources/ebooks/:slug*',
				permanent: true,
			},
			{	source: '/resources/webinar/:slug*',
				destination: '/resources/webinars/:slug*',
				permanent: true,
			},
			{	source: '/resources/video/:slug*',
				destination: '/resources/videos/:slug*',
				permanent: true,
			},
			{	source: '/resources/podcast/:slug*',
				destination: '/resources/podcasts/:slug*',
				permanent: true,
			},
			{	source: '/resources/onepager/:slug*',
				destination: '/resources/onepagers/:slug*',
				permanent: true,
			},
			{	source: '/resources/infographic/:slug*',
				destination: '/resources/infographics/:slug*',
				permanent: true,
			},
			{	source: '/resources/analyst-report/:slug*',
				destination: '/resources/analyst-reports/:slug*',
				permanent: true,
			},
			{
				source: '/homepage',
				destination: '/',
				permanent: true,
			},
			{
				source: '/intellectual-property',
				destination: '/legal-and-compliance/intellectual-property',
				permanent: true,
			},
			{
				source: '/solution/ato',
				destination: '/solutions/ato',
				permanent: true,
			},
			{
				source: '/products/payment-protection',
				destination: '/platform/payment-protection',
				permanent: true,
			},
			{
				source: '/industries/igaming',
				destination: '/solutions/igaming',
				permanent: true,
			},
			{
				source: '/industries/fintech',
				destination: '/solutions/fintech',
				permanent: true,
			},
			{
				source: '/products/content-integrity',
				destination: '/platform/content-integrity',
				permanent: true,
			},
			{
				source: '/products/dispute-management',
				destination: '/platform/dispute-management',
				permanent: true,
			},
			{
				source: '/cookie-preference-center',
				destination: '/legal-and-compliance/cookie-preference-center',
				permanent: true,
			},
			{
				source: '/tos',
				destination: '/legal-and-compliance/tos',
				permanent: true,
			},
			{
				source: '/contact-support',
				destination: 'https://console.sift.com/login',
				permanent: true,
			},
			{
				source: '/events/mrc-barcelona-2024',
				destination: '/events',
				permanent: true,
			},
			{
				source: '/events/mrc-barcelona-2024/register',
				destination: '/events',
				permanent: true,
			},
			{
				source: '/fibr-fraud-industry-benchmarking-resource-ato',
				destination: '/fibr-fraud-industry-benchmarking-resource',
				permanent: true,
			},
			{
				source: '/money-movement',
				destination: '/solutions/money-movement',
				permanent: true,
			},
			{
				source: '/food-delivery',
				destination: '/solutions/food-delivery',
				permanent: true,
			},
			{
				source: '/blog/2021/ask-me-anything-4-core-strategies-to-reduce-and-win-disputes',
				destination: '/blog/ask-me-anything-4-core-strategies-to-reduce-and-win-disputes',
				permanent: true,
			},
			{
				source: '/blog/2021/telegram-fraud-scheme',
				destination: '/blog/telegram-fraud-scheme',
				permanent: true,
			},
			{
				source: '/blog/3570',
				destination: '/blog',
				permanent: true,
			},
			{
				source: '/account-creation',
				destination: '/solutions/account-creation',
				permanent: true,
			},
			{
				source: '/ato',
				destination: '/solutions/ato',
				permanent: true,
			},
			{
				source: '/payment-fraud',
				destination: '/solutions/payment-fraud',
				permanent: true,
			},
			{
				source: '/chargeback-fraud',
				destination: '/solutions/chargeback-fraud',
				permanent: true,
			},
			{
				source: '/policy-abuse',
				destination: '/solutions/policy-abuse',
				permanent: true,
			},
			{
				source: '/content-scams',
				destination: '/solutions/content-scams',
				permanent: true,
			},
			{
				source: '/digital-goods-services',
				destination: '/solutions/digital-goods-services',
				permanent: true,
			},
			{
				source: '/travel-transportation',
				destination: '/solutions/travel-transportation',
				permanent: true,
			},
			{
				source: '/marketplaces',
				destination: '/solutions/marketplaces',
				permanent: true,
			},
			{
				source: '/trust-fraud-operations',
				destination: '/solutions/trust-fraud-operations',
				permanent: true,
			},
			{
				source: '/product-management',
				destination: '/solutions/product-management',
				permanent: true,
			},
			{
				source: '/business-operations',
				destination: '/solutions/business-operations',
				permanent: true,
			},
			{
				source: '/information-security',
				destination: '/solutions/information-security',
				permanent: true,
			},
			{
				source: '/executives',
				destination: '/solutions/executives',
				permanent: true,
			},
			{
				source: '/executives',
				destination: '/solutions/cfo',
				permanent: true,
			},
			{
				source: '/solutions/executives',
				destination: '/solutions/cfo',
				permanent: true,
			},
			{
				source: '/getting-started-with-sift',
				destination: '/platform',
				permanent: true,
			},
			{
				source: '/solution/ecommerce',
				destination: '/solutions/ecommerce',
				permanent: true,
			},
			{
				source: '/solution/account-creation',
				destination: '/solutions/account-creation',
				permanent: true,
			},
			{
				source: '/solution/payment-fraud',
				destination: '/solutions/payment-fraud',
				permanent: true,
			},
			{
				source: '/solution/money-movement',
				destination: '/solutions/money-movement',
				permanent: true,
			},
			{
				source: '/solution/chargeback-fraud',
				destination: '/solutions/chargeback-fraud',
				permanent: true,
			},
			{
				source: '/solution/policy-abuse',
				destination: '/solutions/policy-abuse',
				permanent: true,
			},
			{
				source: '/solution/content-scams',
				destination: '/solutions/content-scams',
				permanent: true,
			},
			{
				source: '/solution/digital-goods-services',
				destination: '/solutions/digital-goods-services',
				permanent: true,
			},
			{
				source: '/solution/fintech',
				destination: '/solutions/fintech',
				permanent: true,
			},
			{
				source: '/solution/igaming',
				destination: '/solutions/igaming',
				permanent: true,
			},
			{
				source: '/solution/travel-transportation',
				destination: '/solutions/travel-transportation',
				permanent: true,
			},
			{
				source: '/solution/marketplaces',
				destination: '/solutions/marketplaces',
				permanent: true,
			},
			{
				source: '/solution/food-delivery',
				destination: '/solutions/food-delivery',
				permanent: true,
			},
			{
				source: '/solution/trust-fraud-operations',
				destination: '/solutions/trust-fraud-operations',
				permanent: true,
			},
			{
				source: '/solution/product-management',
				destination: '/solutions/product-management',
				permanent: true,
			},
			{
				source: '/solution/business-operations',
				destination: '/solutions/business-operations',
				permanent: true,
			},
			{
				source: '/solution/information-security',
				destination: '/solutions/information-security',
				permanent: true,
			},
			{
				source: '/solution/cfo',
				destination: '/solutions/cfo',
				permanent: true,
			},
			{
				source: '/new-releases',
				destination: '/platform/new-releases',
				permanent: true,
			},
			{
				source: '/newsroom',
				destination: '/company/newsroom',
				permanent: true,
			},
			{
				source: '/new-releases',
				destination: '/platform/new-releases',
				permanent: true,
			},
			{
				source: '/partner-ecosystem/indentity-verification-proofing',
				destination: '/partner-ecosystem/identity-verification-proofing',
				permanent: true,
			},
			{	source: '/solution/:slug*',
				destination: '/solutions/:slug*',
				permanent: true,
			},
			{
				source: '/console/developer/api-keys',
				destination: 'https://developers.sift.com/docs/curl/apis-overview',
				permanent: true,
			},
			{
				source: '/legal-and-compliance/data-request',
				destination: '/data-request',
				permanent: true,
			},
			{
				source: '/docs',
				destination: 'https://developers.sift.com/docs/curl/apis-overview',
				permanent: true,
			},
			{
				source: '/supplemental-us-state-law-privacy',
				destination: '/legal-and-compliance/supplemental-us-state-law-privacy',
				permanent: true,
			},
			{
				source: '/legal-and-compliance/website-privacy-notice-previous-dec-2022',
				destination: '/website-privacy-notice-previous-dec-2022',
				permanent: true,
			},
			{
				source: '/sift.com/brand-center',
				destination: '/brand-center',
				permanent: true,
			},
			{
				source: '/sift.com/patents',
				destination: '/patents',
				permanent: true,
			},
			{
				source: '/app/uploads/2015/02/10.png',
				destination: 'https://media.sift.com/app/uploads/2015/02/10.png',
				permanent: true,
			},
			{
				source: '/legal-and-compliance/legal-and-compliance/website-privacy-notice',
				destination: '/legal-and-compliance/website-privacy-notice',
				permanent: true,
			},
			{
				source: '/legal-and-compliance/legal-and-compliance/service-privacy-notice',
				destination: '/legal-and-compliance/service-privacy-notice',
				permanent: true,
			},
			{
				source: '/legal-and-compliance/webiste-service-notice',
				destination: '/legal-and-compliance/website-privacy-notice',
				permanent: true,
			},
			{
				source: '/app/uploads/2022/05/Workflows-best-practices-Waterfall-Logic-copy.jpeg',
				destination: 'https://media.sift.com/app/uploads/2022/05/Workflows-best-practices-Waterfall-Logic-copy.jpeg',
				permanent: true,
			},
			{
				source: '/app/uploads/2022/05/Workflows-best-practices-Waterfall-Logic.jpeg',
				destination: 'https://media.sift.com/app/uploads/2022/05/Workflows-best-practices-Waterfall-Logic.jpeg',
				permanent: true,
			},
			{
				source: '/app/uploads/2022/05/Workflows-best-practices-Score-Thresholds.jpeg',
				destination: 'https://media.sift.com/app/uploads/2022/05/Workflows-best-practices-Score-Thresholds.jpeg',
				permanent: true,
			},
			{
				source: '/app/uploads/2022/05/Workflows-best-practices-Reporting.jpeg',
				destination: 'https://media.sift.com/app/uploads/2022/05/Workflows-best-practices-Reporting.jpeg',
				permanent: true,
			},
			{
				source: '/products/digital-trust-safety-suite',
				destination: '/index-reports-account-takeover-fraud-q3-2024',
				permanent: true,
			},
			{
				source: '/app/uploads/2022/09/Sift_How-to-combact-promo-abuse_091422Thumbnail-cover-Image-1454x1044-2-copy-edited.jpeg',
				destination: 'https://media.sift.com/app/uploads/2022/09/Sift_How-to-combact-promo-abuse_091422Thumbnail-cover-Image-1454x1044-2-copy-edited.jpeg',
				permanent: true,
			},
			{
				source: '/app/uploads/2022/09/Sift_Network-screenshot_image-1.jpeg',
				destination: 'https://media.sift.com/app/uploads/2022/09/Sift_Network-screenshot_image-1.jpeg',
				permanent: true,
			},
			{
				source: '/resources',
				has: [
					{
						type: 'query',
						key: 'type',
						value: 'CASE-STUDIES'
					}
				],
				destination: '/resources/case-studies',
				permanent: true,
			},
			{
				source: '/resources',
				has: [
					{
						type: 'query',
						key: 'type',
						value: 'CASE_STUDIES'
					}
				],
				destination: '/resources/case-studies',
				permanent: false,
			}
		];
	},
		
			// Adding policies:
			async headers() {
				return [
					{
						source: '/',
						headers: [
							{
							  key: 'X-Frame-Options',
							  value: 'SAMEORIGIN',
							},
							{
							  key: 'Content-Security-Policy',
							  value:
								"default-src 'self' https://lottie.host/ wss://ws.qualified.com/ https://google.com/ https://www.googleadservices.com/ https://epsilon.6sense.com/ https://stats.g.doubleclick.net/ https://adservice.google.com/ https://ws.zoominfo.com/ https://media.sift.com/ https://live-sift.pantheonsite.io/ https://ipv6.6sc.co/ https://epsilon-globalaccelerator.6sense.com/ https://c.6sc.co/ https://www.redditstatic.com/ https://conversions-config.reddit.com/ https://pixel-config.reddit.com/ http://526-pcc-974.mktoresp.com https://px.ads.linkedin.com/ https://analytics.google.com/ https://cdn.cookielaw.org/ https://geolocation.onetrust.com/cookieconsentpub/; img-src 'self' blob: data: https://pages.sift.com/ https://www.googletagmanager.com https://web.archive.org/ https://px4.ads.linkedin.com https://attr.ml-api.io/ https://i.vimeocdn.com/ https://secure.adnxs.com/ https://t.co/ https://analytics.twitter.com/ https://cdn.bizibly.com/ https://s.ml-attr.com/ https://pixel.mintigo.com/ https://live-sift.pantheonsite.io/ https://media.sift.com/ https://www.linkedin.com/ https://cdn.bizible.com/ https://bat.bing.com/ https://b.6sc.co/ https://www.google.co.in/ https://www.google.com/ https://alb.reddit.com/ https://px.ads.linkedin.com/ https://cdn.cookielaw.org/; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.jsdelivr.net/ https://cdnjs.cloudflare.com/ https://player.vimeo.com/ https://unpkg.com/@lottiefiles/ https://js.qualified.com/ https://d3js.org/ https://jobs.ashbyhq.com/ https://www.googleadservices.com/ https://pages.sift.com/ https://googleads.g.doubleclick.net/ https://static.ads-twitter.com/ https://cdn.bizible.com/ https://cdn.cookielaw.org/ https://www.googletagmanager.com/ https://munchkin.marketo.net/ https://j.6sc.co/ https://bat.bing.com/ https://snap.licdn.com/ https://www.redditstatic.com/ https://ws.zoominfo.com/ https://connect.facebook.net/ https://px.ads.linkedin.com/; style-src 'self' 'unsafe-inline' https://pages.sift.com/ https://fonts.googleapis.com/; font-src 'self' https://fonts.gstatic.com/; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors  https://td.doubleclick.net/; upgrade-insecure-requests; frame-src 'self' https://e.infogram.com/ https://w.soundcloud.com/ https://app.qualified.com/ https://player.vimeo.com/ https://jobs.ashbyhq.com/ https://pages.sift.com/ https://td.doubleclick.net/; media-src 'self' https://media.sift.com https://download-video.akamaized.net/ https://player.vimeo.com/; ",
							},
							{
							  key: 'X-Content-Type-Options',
							  value: 'nosniff',
							},
							{
							  key: 'Permissions-Policy',
							  value: 'camera=(); battery=(self); geolocation=(); microphone=()',
							},
							{
							  key: 'Referrer-Policy',
							  value: 'no-referrer-when-downgrade',
							},
							{
								key: 'Strict-Transport-Security',
								value: 'max-age=31536000;',
							}
						],
					  },
					  {
						source: '/(.*)',
						headers: [
						  {
							key: 'X-Frame-Options',
							value: 'SAMEORIGIN',
						  },
						  {
							key: 'Content-Security-Policy',
							value:
							  "default-src 'self' https://lottie.host/ wss://ws.qualified.com/ https://google.com/ https://www.googleadservices.com/ https://epsilon.6sense.com/ https://stats.g.doubleclick.net/ https://adservice.google.com/ https://ws.zoominfo.com/ https://live-sift.pantheonsite.io/ https://media.sift.com/ https://ipv6.6sc.co/ https://epsilon-globalaccelerator.6sense.com/ https://c.6sc.co/ https://www.redditstatic.com/ https://conversions-config.reddit.com/ https://pixel-config.reddit.com/ http://526-pcc-974.mktoresp.com https://px.ads.linkedin.com/ https://analytics.google.com/ https://cdn.cookielaw.org/ https://geolocation.onetrust.com/cookieconsentpub/; img-src 'self' blob: data: https://pages.sift.com/ https://www.googletagmanager.com https://px4.ads.linkedin.com https://web.archive.org/ https://i.vimeocdn.com/ https://attr.ml-api.io/ https://secure.adnxs.com/ https://t.co/ https://analytics.twitter.com/ https://cdn.bizibly.com/ https://s.ml-attr.com/ https://pixel.mintigo.com/ https://live-sift.pantheonsite.io/ https://media.sift.com/ https://www.linkedin.com/ https://cdn.bizible.com/ https://bat.bing.com/ https://b.6sc.co/ https://www.google.co.in/ https://www.google.com/ https://alb.reddit.com/ https://px.ads.linkedin.com/ https://cdn.cookielaw.org/; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.jsdelivr.net/ https://cdnjs.cloudflare.com/ https://player.vimeo.com/ https://unpkg.com/@lottiefiles/ https://js.qualified.com/ https://d3js.org/ https://jobs.ashbyhq.com/ https://www.googleadservices.com/ https://pages.sift.com/ https://googleads.g.doubleclick.net/ https://static.ads-twitter.com/ https://cdn.bizible.com/ https://cdn.cookielaw.org/ https://www.googletagmanager.com/ https://munchkin.marketo.net/ https://j.6sc.co/ https://bat.bing.com/ https://snap.licdn.com/ https://www.redditstatic.com/ https://ws.zoominfo.com/ https://connect.facebook.net/ https://px.ads.linkedin.com/; style-src 'self' 'unsafe-inline' https://pages.sift.com/ https://fonts.googleapis.com/; font-src 'self' https://fonts.gstatic.com/; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors  https://td.doubleclick.net/; upgrade-insecure-requests; frame-src 'self' https://e.infogram.com/ https://w.soundcloud.com/ https://app.qualified.com/ https://player.vimeo.com/ https://jobs.ashbyhq.com/ https://pages.sift.com/ https://td.doubleclick.net/; media-src 'self' https://media.sift.com/ https://download-video.akamaized.net/ https://player.vimeo.com/;",
						  },
						  {
							key: 'X-Content-Type-Options',
							value: 'nosniff',
						  },
						  {
							key: 'Permissions-Policy',
							value: 'camera=(); battery=(self); geolocation=(); microphone=()',
						  },
						  {
							key: 'Referrer-Policy',
							value: 'no-referrer-when-downgrade',
						  },
						  {
							  key: 'Strict-Transport-Security',
							  value: 'max-age=31536000;',
						  }
						],
					  },
				  ];
			  },

};

module.exports = nextConfig;