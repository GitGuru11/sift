import React, { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './index.module.css';
import Style from '../../../styles/presents/presents.module.css'
import MarketoForm from '../../../components/MarketoForm';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import moment from 'moment';
import Cookies from 'universal-cookie';
import ResourceSectionRenderer from '../sections/ResourceSectionRenderer';
import DynamicButton from '../../../components/global-components/Buttons';
import Layout from '../../../components/Layout';
const inter = Inter({
	subsets: ['latin'],
	weight: ['700'],
});

const cookies = new Cookies();
export default function GatedResource(props) {
	const postData = props.data;
	const seoValue = props?.data?.seo;
	const [showForm, setShowForm] = useState(!cookies.get('formSubmitted'));
	let postDate;
	if ((postData?.__typename == "IndexReport") && (postData?.indexreport?.others?.publishedDate)) {
		if (postData?.resourcebuilder?.date) {
			postDate = postData?.resourcebuilder?.date && moment(postData?.resourcebuilder?.date, 'MM/DD/YYYY').format('MMM DD, YYYY');
		} else {
			postDate = postData?.indexreport?.others?.publishedDate && moment(postData?.indexreport?.others?.publishedDate).format('MMM DD, YYYY');
		}
	} else if ((postData?.__typename == "Ebook") && (postData?.ebook?.others?.publishedDate)) {
		if (postData?.resourcebuilder?.date) {
			postDate = postData?.resourcebuilder?.date && moment(postData?.resourcebuilder?.date, 'MM/DD/YYYY').format('MMM DD, YYYY');
		} else {
			postDate = postData?.ebook?.others?.publishedDate && moment(postData?.ebook?.others?.publishedDate).format('MMM DD, YYYY');
		}
	} else if ((postData?.__typename == "Podcast") && (postData?.podcast?.others?.publishedDate)) {
		if (postData?.resourcebuilder?.date) {
			postDate = postData?.resourcebuilder?.date && moment(postData?.resourcebuilder?.date, 'MM/DD/YYYY').format('MMM DD, YYYY');
		} else {
			postDate = postData?.ebook?.others?.publishedDate && moment(postData?.ebook?.others?.publishedDate).format('MMM DD, YYYY');
		}
	} else {
		if (postData?.resourcebuilder?.date) {
			postDate = postData?.resourcebuilder?.date && moment(postData?.resourcebuilder?.date, 'MM/DD/YYYY').format('MMM DD, YYYY');
		} else {
			postDate = postData?.date && moment(postData?.date).format('MMM DD, YYYY');
		}
	}
	const resSections = postData?.resourcebuilder?.sections || [];
	const bgColor = `bg-darkBlue`;
	const router = useRouter();
	const pathname = usePathname();
	const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
	const currentUrl = `${origin}${pathname}`;
	const handleFormSubmit = () => {
		// console.log('form submitted');
		cookies.set('formSubmitted', true, { path: '/' });
		setShowForm(false);
	};
	return (
		<div className={`${postData?.resourcebuilder?.hideNavigation ? 'hideNavigation' : ''}`}>
			<Layout>
				<NextSeo title={`${seoValue?.title} - Sift`} description={`${seoValue?.metaDesc ? seoValue?.metaDesc : "AI Platform for Identity-Centric Fraud | Sift"}`}
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
				</Head>
				<section className={`gatedResourceDetail bg-white banner min-h-[1000px] lg:pt-[100px] ${styles.gatedResourceDetail}`}>
					<div className="container">
						<div className="flex items-start flex-wrap lg-up:mt-[30px]">
							<div className={`w-[522px] xxl-up:w-[50%]  laptop:w-[48%] xl:w-[100%] xl:mt-[30px] lg:mt-[0!important] ${styles.content}`}>
								{postData?.title && <h1 className='h2' dangerouslySetInnerHTML={{ __html: postData?.title }}></h1>}
								<div className={`event ${styles.event}`}>
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
										<li>
											<div>
												<Image src="/resources/calendar-check-fill.svg" width={24} height={24} alt="Image" />
												<p>{postDate}</p>
											</div>
										</li>
									</ul>
								</div>
								{/* Demo  Content demoPage */}
								<p dangerouslySetInnerHTML={{ __html: postData?.demoPage?.others?.galleryBlurb }}></p>
								<div className={`contentWithList p-0 ${styles.contentWithList}`}
									dangerouslySetInnerHTML={{ __html: postData?.demoPage?.others?.description }}></div>

								{/* Webinar Content webinarPage */}
								<p dangerouslySetInnerHTML={{ __html: postData?.webinarPage?.others?.galleryBlurb }}></p>
								<div className={`contentWithList p-0 ${styles.contentWithList}`}
									dangerouslySetInnerHTML={{ __html: postData?.webinarPage?.others?.assetDescription }}></div>
								{postData?.webinarPage?.others?.speakers && <div className={`presenters rounded-[16px] overflow-hidden sm:rounded-[30px] ${Style.presenters}`} >
									{postData?.webinarPage?.others?.speakers && <div>
										<Image
											src="/resources/Background.png"
											width={496}
											height={320}
											alt="Image" />
									</div>}
									<div>
										{postData?.webinarPage?.others?.speakers && postData?.webinarPage?.others?.speakers.map((item, i) => {
											return (
												<div key={i}>
													{item?.image?.sourceUrl && <div>
														<Image
															src={item?.image?.sourceUrl}
															width={123}
															height={123}
															alt={item?.image?.altText}
														/>
													</div>}
													<div>
														{item?.title && <h6 className='!text-white' dangerouslySetInnerHTML={{ __html: item.title }}></h6>}
													</div>
												</div>
											);
										})}
									</div>
								</div>}

								{/* Ebook Content ebook */}
								<p dangerouslySetInnerHTML={{ __html: postData?.ebook?.others?.blurb }}></p>
								{postData?.ebook?.others?.ebookCoverImage && postData?.ebook?.others?.ebookCoverImage.sourceUrl && <Image
									src={postData?.ebook?.others?.ebookCoverImage.sourceUrl}
									width={500}
									height={454}
									alt={postData?.ebook?.others?.ebookCoverImage.altText}
									className='my-[40px] rounded-[24px]'
								/>}
								<div className={`contentWithList p-0 ${styles.contentWithList}`}
									dangerouslySetInnerHTML={{ __html: postData?.ebook?.others?.descriptionBelowCtaButton }}></div>

								{/* IndexReport Content ebook */}
								<p dangerouslySetInnerHTML={{ __html: postData?.indexreport?.others?.blurb }}></p>
								{postData?.indexreport?.others?.coverImage && postData?.indexreport?.others?.coverImage.sourceUrl && <Image
									src={postData?.indexreport?.others?.coverImage.sourceUrl}
									width={500}
									height={454}
									alt={postData?.indexreport?.others?.coverImage.altText}
									className='my-[40px] rounded-[24px]'
								/>}
								<div className={`contentWithList p-0 ${styles.contentWithList}`}
									dangerouslySetInnerHTML={{ __html: postData?.indexreport?.others?.descriptionBelowCtaButton }}></div>


								{/* OnePager Content onepager */}
								<p dangerouslySetInnerHTML={{ __html: postData?.onepager?.others?.blurb }}></p>
								{postData?.onepager?.others?.coverImage && postData?.onepager?.others?.coverImage.sourceUrl &&
									<Image src={postData?.onepager?.others?.coverImage.sourceUrl}
										width={500}
										height={454}
										alt={postData?.onepager?.others?.coverImage.altText}
										className='my-[40px] rounded-[24px]'
									/>}
								<div className={`contentWithList p-0 ${styles.contentWithList}`}
									dangerouslySetInnerHTML={{ __html: postData?.onepager?.others?.assetDescription }}></div>

								{/* Podcast Content podcast */}
								<p dangerouslySetInnerHTML={{ __html: postData?.podcast?.others?.galleryBlurb }}></p>
								{postData?.podcast?.others?.podcastCoverimage && postData?.podcast?.others?.podcastCoverimage.sourceUrl
									&& <Image
										src={postData?.podcast?.others?.podcastCoverimage.sourceUrl}
										width={500}
										height={454}
										alt={postData?.podcast?.others?.podcastCoverimage.altText}
										className='my-[40px] rounded-[24px]'
									/>}
								<div className={`contentWithList p-0 ${styles.contentWithList}`}
									dangerouslySetInnerHTML={{ __html: postData?.podcast?.others?.podcastDescription }}>
								</div>

								{/* Video Content  videoPage */}
								<p dangerouslySetInnerHTML={{ __html: postData?.videoPage?.others?.blurb }}></p>
								<div className={`contentWithList p-0 ${styles.contentWithList}`}
									dangerouslySetInnerHTML={{ __html: postData?.videoPage?.others?.videoDescription }}>
								</div>

								{/* Analyst Report Content */}
								<p dangerouslySetInnerHTML={{ __html: postData?.analystReportDetails?.others?.galleryBlurb }}></p>
								{postData?.analystReportDetails?.others?.image &&
									postData?.analystReportDetails?.others?.image.sourceUrl && <Image
										src={postData?.analystReportDetails?.others?.image.sourceUrl}
										width={500}
										height={454}
										alt={postData?.analystReportDetails?.others?.image.altText}
										className='my-[40px] rounded-[24px]'
									/>}
								<div className={`contentWithList p-0 ${styles.contentWithList}`}
									dangerouslySetInnerHTML={{ __html: postData?.analystReportDetails?.others?.description }}></div>

								{/* New Blades */}
								{resSections.map((section, index) => (
									<ResourceSectionRenderer key={index} resType={postData.__typename} type={section.__typename} data={section} />
								))}
							</div>
							<div className={`boxWrap  ${bgColor} absolute w-[551px] text-white right-0  lg:relative xl:relative xl:mt-[40px] lg:mt-[20px!important] desktop-laptop:w-[48%] desktop:w-[44%] xxl-up:w-[45%] xl:max-w-[620px] xl:w-[100%!important] ${styles.boxWrap}`}>
								<div className={`${styles.formWrap} min-h-[400px] relative pt-[40px] pb-[60px] pl-[62px] pr-[80px] xxl-up:w-full laptop:w-full desktop:p-[40px] xl:p-[36px] md:p-[25px!important] md:py-[30px!important]`}>
									{showForm && (
										<div className={`formWrap`}>
											{postData?.resourcebuilder?.formInfo?.formHeading && <h3 className='!text-white'>
												{postData?.resourcebuilder?.formInfo?.formHeading}
											</h3>}
											{postData?.resourcebuilder?.formInfo?.subtitle && <p className='!text-white'>
												{postData?.resourcebuilder?.formInfo?.subtitle}
											</p>}
											{postData?.__typename == "Demos" ?
												postData?.resourcebuilder?.formInfo?.formId ?
													<MarketoForm formId={postData?.resourcebuilder?.formInfo?.formId} formData="" className="mktFrom" onSubmit={handleFormSubmit} />
													: <MarketoForm formId="1240" formData="" className="mktFrom" onSubmit={handleFormSubmit} />
												:
												postData?.__typename == "Webinar" ?
													postData?.resourcebuilder?.formInfo?.formId ?
														<MarketoForm formId={postData?.resourcebuilder?.formInfo?.formId} formData="" className="mktFrom" onSubmit={handleFormSubmit} />
														: <MarketoForm formId="1053" formData="" className="mktFrom" onSubmit={handleFormSubmit} />
													:
													postData?.__typename == "Ebook" ?
														postData?.resourcebuilder?.formInfo?.formId ?
															<MarketoForm formId={postData?.resourcebuilder?.formInfo?.formId} formData="" className="mktFrom" onSubmit={handleFormSubmit} />
															: <MarketoForm formId="1062" formData="" className="mktFrom" onSubmit={handleFormSubmit} />
														:
														postData?.__typename == "IndexReport" ?
														postData?.resourcebuilder?.formInfo?.formId ?
															<MarketoForm formId={postData?.resourcebuilder?.formInfo?.formId} formData="" className="mktFrom" onSubmit={handleFormSubmit} />
															: <MarketoForm formId="1062" formData="" className="mktFrom" onSubmit={handleFormSubmit} />
														:
														postData?.__typename == "Onepager" ?
															postData?.resourcebuilder?.formInfo?.formId ?
																<MarketoForm formId={postData?.resourcebuilder?.formInfo?.formId} formData="" className="mktFrom" onSubmit={handleFormSubmit} />
																: <MarketoForm formId="1062" formData="" className="mktFrom" onSubmit={handleFormSubmit} />
															:
															postData?.__typename == "Video" ?
																postData?.resourcebuilder?.formInfo?.formId ?
																	<MarketoForm formId={postData?.resourcebuilder?.formInfo?.formId} formData="" className="mktFrom" onSubmit={handleFormSubmit} />
																	: <MarketoForm formId="1062" formData="" className="mktFrom" onSubmit={handleFormSubmit} />
																:
																postData?.__typename == "Podcast" ?
																	postData?.resourcebuilder?.formInfo?.formId ?
																		<MarketoForm formId={postData?.resourcebuilder?.formInfo?.formId} formData="" className="mktFrom" onSubmit={handleFormSubmit} />
																		: <MarketoForm formId="1062" formData="" className="mktFrom" onSubmit={handleFormSubmit} />
																	:
																	postData?.__typename == "AnalystReport" ?
																		postData?.resourcebuilder?.formInfo?.formId ?
																			<MarketoForm formId={postData?.resourcebuilder?.formInfo?.formId} formData="" className="mktFrom" onSubmit={handleFormSubmit} />
																			: <MarketoForm formId="1062" formData="" className="mktFrom" onSubmit={handleFormSubmit} />
																		:
																		postData?.__typename == "Infographic" ?
																			postData?.resourcebuilder?.formInfo?.formId ?
																				<MarketoForm formId={postData?.resourcebuilder?.formInfo?.formId} formData="" className="mktFrom" onSubmit={handleFormSubmit} />
																				: <MarketoForm formId="1062" formData="" className="mktFrom" onSubmit={handleFormSubmit} />
																			: ''
											}
										</div>
									)}
									<div className={`thankYouMessage mt-[60px] md:mt-[0] ${showForm ? 'hidden' : ''}`}>
										<>
											<h4>{postData?.resourcebuilder?.formInfo?.thankYouMessage}</h4>
											<div className={`boxWrap ${bgColor} w-[100%] text-white right-0 ${styles.boxWrap}`}>
												{/* Podcast */}
												{postData?.podcast?.others?.podcastDirectLink &&
													<div className={`${bgColor == 'bg-black' ? 'text-white' : ' text-black'}`}>
														<DynamicButton catText='Watch Podcast' vimeoId={postData?.podcast?.others?.podcastDirectLink} linkUrl={postData?.podcast?.others?.podcastDirectLink} />
													</div>}
												{/* Videos */}

												<h3 className='text-white textWhite TextWhite' dangerouslySetInnerHTML={{ __html: postData?.videoPage?.others?.subhead }}></h3>
												{postData?.videoPage?.others?.vimeoCode && <div className='btnWrap'>
													<DynamicButton catText='Watch Video' vimeoId={postData?.videoPage?.others?.vimeoCode} linkUrl={`#`} />
												</div>}

												{/* Demo	 */}
												<h3 className='text-white textWhite TextWhite' dangerouslySetInnerHTML={{ __html: postData?.demoPage?.others?.subheader }}></h3>
												{postData?.demoPage?.others?.vimeoCodeForEmbed && <div className='btnWrap'>
													<DynamicButton ctaText='Watch Video' vimeoId={postData?.demoPage?.others?.vimeoCodeForEmbed} linkUrl={`#`} />
												</div>}

												{/* OnePager	 */}
												<h3 className='text-white textWhite TextWhite' dangerouslySetInnerHTML={{ __html: postData?.onepager?.others?.subtitle }}></h3>
												{postData?.onepager?.others?.cta && <div className={`${bgColor == 'bg-black' ? 'text-white' : ' text-black'}`}>
													<DynamicButton cta={postData?.onepager?.others?.cta} />
												</div>}

												{/* Ebook	 */}
												<h3 className='text-white textWhite TextWhite' dangerouslySetInnerHTML={{ __html: postData?.ebook?.others?.subtitle }}></h3>
												<p className='text-white textWhite TextWhite' dangerouslySetInnerHTML={{ __html: postData?.ebook?.others?.descriptionAboveCtaButton }}></p>
												{postData?.ebook?.others?.cta && <div className={`${bgColor == 'bg-black' ? 'text-white' : ' text-black'}`}>
													<DynamicButton cta={postData?.ebook?.others?.cta} />
												</div>}

												{/* IndexReport	 */}
												<h3 className='text-white textWhite TextWhite' dangerouslySetInnerHTML={{ __html: postData?.indexreport?.others?.subtitle }}></h3>
												<p className='text-white textWhite TextWhite' dangerouslySetInnerHTML={{ __html: postData?.indexreport?.others?.descriptionAboveCtaButton }}></p>
												{postData?.indexreport?.others?.cta && <div className={`${bgColor == 'bg-black' ? 'text-white' : ' text-black'}`}>
													<DynamicButton cta={postData?.indexreport?.others?.cta} />
												</div>}

												{/* Webinar */}
												<h3 className='text-white textWhite TextWhite' dangerouslySetInnerHTML={{ __html: postData?.webinarPage?.others?.subtitle }}></h3>
												{postData?.webinarPage?.others?.vimeoCode && <div className={`${bgColor == 'bg-black' ? 'text-white' : ' text-black'}`}>
													<DynamicButton ctaText={postData?.webinarPage?.others?.ctaText ? postData?.webinarPage?.others?.ctaText : 'Watch Now'}
														vimeoId={postData?.webinarPage?.others?.vimeoCode} linkUrl={`#`} />
												</div>}

												{/* Analyst Report Content */}

												<h3 className='text-white textWhite TextWhite' dangerouslySetInnerHTML={{ __html: postData?.analystReportDetails?.others?.subtitle }}></h3>
												{postData?.analystReportDetails?.others?.cta && <div className={`${bgColor == 'bg-black' ? 'text-white' : ' text-black'}`}>
													<DynamicButton cta={postData?.analystReportDetails?.others?.cta} />
												</div>}

											</div>
										</>
									</div>
									<div className={`${bgColor == 'bg-black mt-[20px] '
										? 'text-white mt-[20px] '
										: ' text-black '
										}`}>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</div>
	);
}
