import React from 'react';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Image from 'next/image';
import styles from './index.module.css';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import Style from '../../../styles/presents/presents.module.css';
import nonGatedStyle from '../nongated-resource/index.module.css';
import ReferenceCards from '../sections/ReferenceCards';
import FileViewer from '../../../pages/pdf-viewer/components/Viewer';
import DynamicButton from '../../../components/global-components/Buttons';
import ResourceSectionRenderer from '../sections/ResourceSectionRenderer';
import moment from 'moment';
import Custom404 from '../../404';
import Layout from '../../../components/Layout';
export default function NonGated(props) {
	const postData = props.data;
	// const seoValue = props?.data?.seo;
	const resSections = postData?.resourcebuilder?.sections || [];
	const bgColor = `bg-darkBlue`;
	let postDate = '';
	if ((postData?.__typename == "Ebook") && (postData?.ebook?.others?.publishedDate)) {
		if (postData?.resourcebuilder?.date) {
			postDate = postData?.resourcebuilder?.date && moment(postData?.resourcebuilder?.date, 'MM/DD/YYYY').format('MMM DD, YYYY');
		} else {
			postDate = postData?.ebook?.others?.publishedDate && moment(postData?.ebook?.others?.publishedDate, 'MM/DD/YYYY').format('MMM DD, YYYY');
		}
	} else if ((postData?.__typename == "IndexReport") && (postData?.indexreport?.others?.publishedDate)) {
		if (postData?.resourcebuilder?.date) {
			postDate = postData?.resourcebuilder?.date && moment(postData?.resourcebuilder?.date, 'MM/DD/YYYY').format('MMM DD, YYYY');
		} else {
			postDate = postData?.indexreport?.others?.publishedDate && moment(postData?.indexreport?.others?.publishedDate, 'MM/DD/YYYY').format('MMM DD, YYYY');
		}
	} else if ((postData?.__typename == "{Podcast}") && (postData?.podcast?.others?.publishedDate)) {
		if (postData?.resourcebuilder?.date) {
			postDate = postData?.resourcebuilder?.date && moment(postData?.resourcebuilder?.date, 'MM/DD/YYYY').format('MMM DD, YYYY');
		} else {
			postDate = postData?.podcast?.others?.publishedDate && moment(postData?.podcast?.others?.publishedDate).format('MMM DD, YYYY');
		}
	} else {
		if (postData?.resourcebuilder?.date) {
			postDate = postData?.resourcebuilder?.date && moment(postData?.resourcebuilder?.date, 'MM/DD/YYYY').format('MMM DD, YYYY');
		} else {
			postDate = postData?.date && moment(postData?.date).format('MMM DD, YYYY');
		}
	}
	const router = useRouter();
	//const currentUrl = window.location.href;

	const pathname = usePathname();
	const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
	const currentUrl = `${origin}${pathname}`;
	// Check if it's a 404 page
	// if (router.isFallback || router.is404 || !postData) {
	// 	return <Custom404 />;
	// }

	return (
		<div className={`${postData?.resourcebuilder?.hideNavigation ? 'hideNavigation' : ''}`}>
			<Layout>
				{/* <NextSeo title={`${seoValue?.title} - Sift`} description={`${seoValue?.metaDesc ? seoValue?.metaDesc : "AI Platform for Identity-Centric Fraud | Sift"}`}
					canonical={currentUrl}
					openGraph={{
						type: 'website',
						siteName: 'Sift',
						url: currentUrl,
						title: seoValue?.title,
						description: seoValue?.metaDesc ? seoValue?.metaDesc : "AI Platform for Identity-Centric Fraud | Sift",
						images: [
							{
								url: seoValue?.opengraphImage?.sourceUrl ? seoValue?.opengraphImage?.sourceUrl : 'https://sift.com/OG-default.jpg',
								width: 800,
								height: 600,
								alt: seoValue?.title,
							}
						],
					}} />
				<Head>
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:title" content={seoValue?.title} />
					<meta name="twitter:description" content={seoValue?.metaDesc ? seoValue?.metaDesc : "AI Platform for Identity-Centric Fraud | Sift"} />
					<meta name="twitter:image" content={seoValue?.opengraphImage?.sourceUrl ? seoValue?.opengraphImage?.sourceUrl : "https://sift.com/OG-twitter.jpg"} />
					<meta name="twitter:site" content="https://twitter.com/GetSift" />
				</Head> */}
				<div className={`resourceDatailIntro banner bg-white pt-[100px] pb-[64px] lg:pb-[40px] ${styles.resourceDatailIntro}`}>
					<div className="container">
						<h1 dangerouslySetInnerHTML={{ __html: postData?.title }}></h1>
						<div className={`event ${styles.event} mt-[30px]`}>
							<ul>
								{postData?.resourcebuilder?.location && <li>
									<div>
										<Image
											src="/resources/location.svg"
											width={24}
											height={24}
											alt="Image"
										/>
										<p>{postData?.resourcebuilder?.location}</p>
									</div>
								</li>}
								{postData?.resourcebuilder?.time && <li>
									<div>
										<Image
											src="/resources/clock.svg"
											width={24}
											height={24}
											alt="Image"
										/>
										<p>{postData?.resourcebuilder?.time}</p>
									</div>
								</li>}
								{postDate && <li>
									<div>
										<Image src="/resources/calendar-check-fill.svg" width={24} height={24} alt="Image" />
										<p>{postDate}</p>
									</div>
								</li>}
								<li>
									<p>{postData?.podcast?.others?.episodeNumber}</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<section className={`NonGatedResource bg-[#fff] resourceDetail pt-0 ${styles.resourceDetail} overflow-x-clip`}>
					<div className="container">
						<div>
							<div className="w-[499px] xxl-up:w-[50%] pr-[60px] lg:pr-[0] laptop:w-[48%] xl:w-[100%] xl:mt-[30px]">

								{/* Podcast Content */}

								{postData?.podcast?.others?.galleryBlurb &&
									<p dangerouslySetInnerHTML={{ __html: postData?.podcast?.others?.galleryBlurb }}></p>}
								{postData?.podcast?.others?.podcastCoverimage && postData?.podcast?.others?.podcastCoverimage.sourceUrl && <Image
									src={postData?.podcast?.others?.podcastCoverimage.sourceUrl}
									width={500}
									height={454}
									alt={postData?.podcast?.others?.podcastCoverimage.altText}
									className='my-[40px] rounded-[24px]'
								/>}
								{postData?.podcast?.others?.podcastDescription && <div className={`contentWithList p-0 ${styles.contentWithList}`}
									dangerouslySetInnerHTML={{ __html: postData?.podcast?.others?.podcastDescription }}>
								</div>}
								<br />
								{postData?.podcast?.others?.podcastEmbedCode && <div className='podcast-video'
									dangerouslySetInnerHTML={{ __html: postData?.podcast?.others?.podcastEmbedCode }}>
								</div>}

								{/* Demos Resource */}
								{postData?.demoPage?.others?.galleryBlurb && <p dangerouslySetInnerHTML={{ __html: postData?.demoPage?.others?.galleryBlurb }}></p>}
								{postData?.demoPage?.others?.description && <div className={`contentWithList p-0 ${styles.contentWithList}`}
									dangerouslySetInnerHTML={{ __html: postData?.demoPage?.others?.description }}>
								</div>}


								{/* Ebooks Content */}
								{postData?.ebook?.others?.blurb && <p dangerouslySetInnerHTML={{ __html: postData?.ebook?.others?.blurb }}></p>}
								{postData?.ebook?.others?.ebookCoverImage && postData?.ebook?.others?.ebookCoverImage.sourceUrl &&
									<Image src={postData?.ebook?.others?.ebookCoverImage.sourceUrl}
										width={500}
										height={454}
										alt={postData?.ebook?.others?.ebookCoverImage.altText}
										className='my-[40px] rounded-[24px]'
									/>}
								{postData?.ebook?.others?.descriptionBelowCtaButton && <div className={`contentWithList p-0 ${nonGatedStyle.contentWithList}`}
									dangerouslySetInnerHTML={{ __html: postData?.ebook?.others?.descriptionBelowCtaButton }}>
								</div>}

								{/* IndexReport Content */}
								{postData?.indexreport?.others?.blurb && <p dangerouslySetInnerHTML={{ __html: postData?.indexreport?.others?.blurb }}></p>}
								{postData?.indexreport?.others?.coverImage && postData?.indexreport?.others?.coverImage.sourceUrl &&
									<Image src={postData?.indexreport?.others?.coverImage.sourceUrl}
										width={500}
										height={454}
										alt={postData?.indexreport?.others?.coverImage.altText}
										className='my-[40px] rounded-[24px]'
									/>}
								{postData?.indexreport?.others?.descriptionBelowCtaButton && <div className={`contentWithList p-0 ${nonGatedStyle.contentWithList}`}
									dangerouslySetInnerHTML={{ __html: postData?.indexreport?.others?.descriptionBelowCtaButton }}>
								</div>}	

								{/* OnePager Content */}
								{postData?.onepager?.others?.blurb && <p dangerouslySetInnerHTML={{ __html: postData?.onepager?.others?.blurb }}></p>}
								{postData?.onepager?.others?.coverImage && postData?.onepager?.others?.coverImage.sourceUrl &&
									<Image src={postData?.onepager?.others?.coverImage.sourceUrl}
										width={500}
										height={454}
										alt={postData?.onepager?.others?.coverImage.altText}
										className='my-[40px] rounded-[24px]'
									/>}
								{postData?.onepager?.others?.assetDescription && <div className={`contentWithList p-0 ${nonGatedStyle.contentWithList}`}
									dangerouslySetInnerHTML={{ __html: postData?.onepager?.others?.assetDescription }}>
								</div>}


								{/* Video Content */}
								{postData?.videoPage?.others?.blurb && <p>{postData?.videoPage?.others?.blurb}</p>}
								{postData?.videoPage?.others?.videoDescription && <div className={`contentWithList p-0 ${nonGatedStyle.contentWithList}`}
									dangerouslySetInnerHTML={{ __html: postData?.videoPage?.others?.videoDescription }}>
								</div>}

								{/* Webinar Content */}
								{postData?.webinarPage?.others?.galleryBlurb && <p dangerouslySetInnerHTML={{ __html: postData?.webinarPage?.others?.galleryBlurb }}></p>}
								{postData?.webinarPage?.others?.assetDescription && <div className={`contentWithList p-0 ${nonGatedStyle.contentWithList}`}
									dangerouslySetInnerHTML={{ __html: postData?.webinarPage?.others?.assetDescription }}>
								</div>}

								{postData?.webinarPage?.others?.speakers && <div className={`presenters rounded-[16px] overflow-hidden sm:rounded-[30px] ${Style.presenters}`} >
									{postData?.webinarPage?.others?.speakers && <div>
										<Image
											src="/resources/Background.png"
											width={496}
											height={320}
											alt="Image"
											className='rounded-[24px]' />
									</div>}
									<div>
										{postData?.webinarPage?.others?.speakers && postData?.webinarPage?.others?.speakers.map((item, i) => {
											return (
												<div key={i}>
													{item?.image?.sourceUrl && <div>
														<Image
															src={item?.image?.sourceUrl}
															width={123}
															height={140}
															alt={item?.image?.altText}
														/>
													</div>}
													<div>
														{item?.title && <h6 dangerouslySetInnerHTML={{ __html: item.title }}></h6>}
													</div>
												</div>
											);
										})}
									</div>
								</div>}

								{/* Analyst Report Content */}
								{postData?.analystReportDetails?.others?.galleryBlurb &&
									<p dangerouslySetInnerHTML={{ __html: postData?.analystReportDetails?.others?.galleryBlurb }}></p>}
								{postData?.analystReportDetails?.others?.image && postData?.analystReportDetails?.others?.image.sourceUrl &&
									<Image src={postData?.analystReportDetails?.others?.image.sourceUrl}
										width={500}
										height={454}
										alt={postData?.analystReportDetails?.others?.image.altText}
										className='my-[40px]'
									/>}
								{postData?.analystReportDetails?.others?.description &&
									<div className={`contentWithList p-0 ${nonGatedStyle.contentWithList}`}
										dangerouslySetInnerHTML={{ __html: postData?.analystReportDetails?.others?.description }}>
									</div>}

								{/* New Blades */}
								{resSections.map((section, index) => (
									<ResourceSectionRenderer key={index} resType={postData.__typename} type={section.__typename} data={section} />
								))}
							</div>

							<div className="top-[120px] right-0 xxl-up:w-[50%] w-[50%] laptop:w-[48%] desktop:p-[40px] xl:relative xl:w-[100%] xl:order-[-1] xl:top-0 xl:p-[0!important]">

								{/* Podcast Content */}

								{postData?.podcast?.others?.podcastTranscript || postData?.podcast?.others?.podcastDirectLink ?
									<div className={`boxWrap py-[64px] pl-[80px] pr-[30px] ${bgColor} w-[100%] text-white right-0  xl:p-[30px]  ${styles.boxWrap}`}>
										{postData?.podcast?.others?.podcastDirectLink &&
											<div className={`${bgColor == 'bg-black' ? 'text-white' : ' text-black'}`}>
												<DynamicButton ctaText='Watch Podcast' vimeoId={postData?.podcast?.others?.podcastDirectLink} linkUrl={postData?.podcast?.others?.podcastDirectLink} />
											</div>}
									</div> : ''}

								{/* Demo Content */}

								{postData?.demoPage?.others?.subheader || postData?.demoPage?.others?.vimeoCodeForEmbed ?
									<div className={`boxWrap py-[64px] pl-[80px] pr-[30px] ${bgColor} w-[100%] text-white right-0  xl:p-[30px]  ${styles.boxWrap}`}>
										<h3 className='!text-white' dangerouslySetInnerHTML={{ __html: postData?.demoPage?.others?.subheader }}></h3>
										{postData?.demoPage?.others?.vimeoCodeForEmbed}
										{postData?.demoPage?.others?.vimeoCodeForEmbed &&
											<div className={`${bgColor == 'bg-black' ? 'text-white' : ' text-black'}`}>
												<DynamicButton ctaText={`Watch Video`} vimeoId={postData?.demoPage?.others?.vimeoCodeForEmbed} linkUrl={`#`} />
											</div>}
									</div> : ''}

								{/* Ebook Content */}
								{postData?.ebook?.others?.subtitle || postData?.ebook?.others?.descriptionAboveCtaButton || postData?.ebook?.others?.cta ?
									<div className={`boxWrap py-[64px] pl-[80px] pr-[30px] ${bgColor} w-[100%] text-white right-0  xl:p-[30px]  ${nonGatedStyle.boxWrap}`}>
										<h3 className='!text-white' dangerouslySetInnerHTML={{ __html: postData?.ebook?.others?.subtitle }}></h3>
										<p className='!text-white' dangerouslySetInnerHTML={{ __html: postData?.ebook?.others?.descriptionAboveCtaButton }}></p>
										<div className={`${bgColor == 'bg-black' ? 'text-white' : ' text-black'}`}>
											<DynamicButton cta={postData?.ebook?.others?.cta} />
										</div>
									</div> : ''}

								{/* IndexReport Content */}
								{postData?.indexreport?.others?.subtitle || postData?.indexreport?.others?.descriptionAboveCtaButton || postData?.indexreport?.others?.cta ?
									<div className={`boxWrap py-[64px] pl-[80px] pr-[30px] ${bgColor} w-[100%] text-white right-0  xl:p-[30px]  ${nonGatedStyle.boxWrap}`}>
										<h3 className='!text-white' dangerouslySetInnerHTML={{ __html: postData?.indexreport?.others?.subtitle }}></h3>
										<p className='!text-white' dangerouslySetInnerHTML={{ __html: postData?.indexreport?.others?.descriptionAboveCtaButton }}></p>
										<div className={`${bgColor == 'bg-black' ? 'text-white' : ' text-black'}`}>
											<DynamicButton cta={postData?.indexreport?.others?.cta} />
										</div>
									</div> : ''}

								{/* onepager Content */}
								{postData?.onepager?.others?.subtitle || postData?.onepager?.others?.cta ?
									<div className={`boxWrap py-[64px] pl-[80px] pr-[30px] ${bgColor} w-[100%] text-white right-0  xl:p-[30px]  ${nonGatedStyle.boxWrap}`}>
										<h3 className='!text-white' dangerouslySetInnerHTML={{ __html: postData?.onepager?.others?.subtitle }}></h3>
										<div className={`${bgColor == 'bg-black' ? 'text-white' : ' text-black'}`}>
											<DynamicButton cta={postData?.onepager?.others?.cta} />
										</div>
									</div> : ''}

								{/* Video Content */}

								{postData?.videoPage?.others?.subhead || postData?.videoPage?.others?.vimeoCode ?
									<div className={`boxWrap py-[64px] pl-[80px] pr-[30px] ${bgColor} w-[100%] text-white right-0  xl:p-[30px]  ${nonGatedStyle.boxWrap}`}>
										<h3 className='!text-white' dangerouslySetInnerHTML={{ __html: postData?.videoPage?.others?.subhead }}></h3>
										<div className='btnWrap'>
											<DynamicButton ctaText={`Watch Video`} vimeoId={postData?.videoPage?.others?.vimeoCode} linkUrl={`#`} />
										</div>
									</div>
									: ''}

								{/* Webinar Content */}

								{postData?.webinarPage?.others?.subtitle || postData?.webinarPage?.others?.vimeoCode ?
									<div className={`boxWrap py-[64px] pl-[80px] pr-[30px] ${bgColor} w-[100%] text-white right-0  xl:p-[30px]  ${nonGatedStyle.boxWrap}`}>
										<h3 className='!text-white' dangerouslySetInnerHTML={{ __html: postData?.webinarPage?.others?.subtitle }}></h3>
										<div className='btnWrap'>
											<DynamicButton ctaText={postData?.webinarPage?.others?.ctaText ? postData?.webinarPage?.others?.ctaText : 'Watch Now'}
												vimeoId={postData?.webinarPage?.others?.vimeoCode} linkUrl={`#`} />
										</div>
									</div>
									: ''}

								{/* Analyst Report Content */}

								{postData?.analystReportDetails?.others?.subtitle || postData?.analystReportDetails?.others?.cta ?
									<div className={`boxWrap py-[64px] pl-[80px] pr-[30px] ${bgColor} w-[100%] text-white right-0  xl:p-[30px]  ${nonGatedStyle.boxWrap}`}>
										<h3 className='!text-white' dangerouslySetInnerHTML={{ __html: postData?.analystReportDetails?.others?.subtitle }}></h3>
										<div className='btnWrap'>
											<DynamicButton cta={postData?.analystReportDetails?.others?.cta} />
										</div>
									</div>
									: ''}
							</div>
						</div>
					</div>
				</section>
				{postData?.resourcebuilder?.pdfAsste?.sourceUrl && <FileViewer pdfUrl={postData?.resourcebuilder?.pdfAsste?.sourceUrl} />}
				{/* <ReferenceCards type={postData?.__typename} cat={postData?.fraudTypes?.nodes} excludeId={postData?.databaseId} /> */}
			</Layout>
		</div>
	);
}
