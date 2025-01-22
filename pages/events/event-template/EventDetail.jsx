import React, { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google';
import { useQuery } from '@apollo/client';
import Btn_pink from '../../../components/button/Button_Pink'
import ScheduleTab from './sections/ScheduleTab';
import FooterCtaWithSlider from './sections/FooterCtaWithSlider';
import EventDetailStyle from '../../../styles/event/eventBannerDetail.module.css'
import { useRouter } from 'next/router';
import EventSectionRenderer from './sections/EventSectionRenderer';
import Layout from '../../../components/Layout';
import RightBarSticky from './sections/RightBarSticky';
import { GET_LATEST_BLOG_POST } from '../../../graphql/LatestBlogPosts';
import EventLeadershipCard from './sections/EventLeaderShipCards';
import { usePathname } from 'next/navigation';
import EventRegistration from './sections/EventRegistration';
import ScheduleEvents from './sections/ScheduleEvents';
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
})

function EventDetail(props) {
  const postData = props.data;
  const seoValue = props?.data?.seo;
  const eventSections = postData?.eventbuilder?.sectionsEvent || [];
  const eventLeadershipData = postData?.eventbuilder?.speakers || [];
  const relatedPosts = postData?.eventbuilder?.relatedPosts || [];
  const scheduleOfEvents = postData?.eventbuilder?.scheduleOfEvents || [];
  const registrationData = postData?.eventsregistrationsections || [];
  const [isHeight, setHeight] = useState(0);
  const [isScrolled, setIsScrolled] = useState(true);
  const [ribbonHeight, setRibbonHeight] = useState(0);
  const [abc, setAbc] = useState(0);
  const [winWidth, isWinWidth] = useState(0);
  let currentId = postData?.databaseId;
  const latestPosts = useQuery(GET_LATEST_BLOG_POST);
  let latestPostObj = latestPosts?.data?.posts?.nodes || [];
	const pathname = usePathname();
	const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
	const currentUrl = `${origin}${pathname}`;
  const router = useRouter();
  let uri = router.query.slug || [];

  useEffect(() => {
    const ribbonElement = document.getElementById('previewRibbon');
    if (ribbonElement) {
      //get ribbon height
      setRibbonHeight(document.getElementById('previewRibbon').clientHeight);
      setAbc(document.getElementById('previewRibbon'));
    }
    //get Header Height
    const headerElement = document.getElementById('header'); // Replace with your actual header ID

    if (headerElement) {
      const headerHeight = headerElement.clientHeight;
      setHeight(headerHeight);
    }
  }, []);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleNavScroll = () => {
      const currentScrollTop = window.scrollY;
      const isScrolledDown = currentScrollTop < lastScrollTop;

      setIsScrolled(isScrolledDown);
      lastScrollTop = currentScrollTop;
    };

    setTimeout(() => {
      window.addEventListener('scroll', handleNavScroll);
    }, 500);

    return () => {
      window.removeEventListener('scroll', handleNavScroll);
    };
  }, []);
  // if(window.width > 991) {
  const height = {
    top: `${isHeight + ribbonHeight}px`,
  };

  useEffect(() => {
    // isWinWidth(window.innerWidth);
    const handleResize = () => {
      isWinWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    // Initial call to set window size
    handleResize();

  }, [])

  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      className='sm:w-[10px]'
    >
      <path
        d="M13.6871 1.80909C14.1044 1.39531 14.1042 0.724429 13.6871 0.310796C13.2696 -0.103121 12.5931 -0.103121 12.1756 0.310937L8.06914 4.3823L8.068 4.38159C6.98501 5.30805 6.98501 5.30805 6.98501 5.30805C6.98501 5.30805 6.98501 5.30805 5.93063 4.38173L5.93177 4.38286L1.82446 0.310515C1.4071 -0.103261 0.730267 -0.103261 0.313052 0.310515C0.104445 0.517473 -3.15222e-07 0.788567 -3.03366e-07 1.0598C-2.91516e-07 1.3309 0.104445 1.60199 0.31291 1.80895L6.24454 7.68982C6.44488 7.88858 6.71661 8.00018 7.00017 8.00018C7.28373 8.00004 7.55532 7.88844 7.75609 7.68967L13.6871 1.80909Z"
        fill="black"
      />
    </svg>
  );
  return (
    <div className={`${postData?.eventbuilder?.hideNavigation ? 'hideNavigation' : ''}`}>
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
        <>
          {uri.length < 2 && uri[1] != "register" ?
            <>
              <section className={`${EventDetailStyle.eventBannerDetail} relative flex flex-wrap`}>
                <div className="container">
                  <div className='laptop:w-[45%] w-[50%] xl:w-[50%] relative lg:!w-full xxl-up:w-[60%] wide-screen:w-[80%]'>
                    <Link href={`/events?event_type=${postData?.eventTypes?.nodes[0]?.slug}`}>
                      <span className={` ${inter.className}`}>{postData?.eventTypes?.nodes[0]?.name}</span>
                    </Link>
                    {postData?.title && <h3>{postData?.title}</h3>}
                    <div>
                      {postData?.eventbuilder?.cardGridOptions?.location && <div>
                        <Image src={'/EventDetail/location.svg'} alt='' width={24} height={24} />
                        <span className={` small_font font-[700!important] ${inter.className}`}>{postData?.eventbuilder?.cardGridOptions?.location}</span>
                      </div>}
                      {postData?.eventbuilder?.cardGridOptions?.time && <div>
                        <Image src={'/EventDetail/clock.svg'} alt='' width={24} height={24} />
                        <span className={` small_font font-[700!important] ${inter.className}`}>{postData?.eventbuilder?.cardGridOptions?.time}</span>
                      </div>}
                      {postData?.eventbuilder?.cardGridOptions?.date && <div>
                        <Image src={'/EventDetail/calendar-check-fill.svg'} alt='' width={24} height={24} />
                        <span className={` small_font font-[700!important] ${inter.className}`}>{postData?.eventbuilder?.cardGridOptions?.date}</span>
                      </div>}
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: postData?.eventbuilder?.cardGridOptions?.subtitle }}></p>
                    <Btn_pink text="Reserve your spot" className="relative right-0" link={`${currentUrl}/register`} />
                  </div>
                </div>
                {postData?.eventbuilder?.cardGridOptions?.featuredEventImage?.sourceUrl ?
                  <div className="absolute top-[50%] xl:transform-none xl:top-auto laptop-mid:max-w-[450px] laptop-small:max-w-[400px] desktop-mid:max-w-[350px] phablet:max-w-[450px] sm:max-w-[300px] sm:mx-auto xl:ml-auto xl:mt-0 lg:!mt-[30px] mt-[30px] xl:h-auto lg:relative right-0 -translate-y-[50%] h-[380px] w-[550px] laptop:w-[49%]">
                    {postData?.eventbuilder?.cardGridOptions?.featuredEventImage?.sourceUrl &&
                      <Image src={postData?.eventbuilder?.cardGridOptions?.featuredEventImage?.sourceUrl} className='w-full h-full sm:rounded-[16px]'
                        alt={postData?.eventbuilder?.cardGridOptions?.featuredEventImage?.altText} width={550} height={380} quality={25} />}
                  </div> :
                  <div className="absolute top-[50%] xl:transform-none xl:top-auto laptop-mid:max-w-[450px] laptop-small:max-w-[400px] desktop-mid:max-w-[350px] phablet:max-w-[450px] sm:max-w-[300px] sm:mx-auto xl:ml-auto xl:mt-0 lg:!mt-[30px] mt-[30px] xl:h-auto lg:relative right-0 -translate-y-[50%] h-[380px] w-[550px] laptop:w-[49%]">
                    {postData?.eventbuilder?.cardGridOptions?.cardImage?.sourceUrl &&
                      <Image src={postData?.eventbuilder?.cardGridOptions?.cardImage?.sourceUrl} className='w-full h-full sm:rounded-[16px]'
                        alt={postData?.eventbuilder?.cardGridOptions?.cardImage?.altText} width={550} height={380} quality={25} />}
                  </div>
                }
              </section>
              <section className={`${EventDetailStyle.eventDetail}`}>
                <div className="container">
                  <div>
                    {postData && <RightBarSticky items={postData.uri} />}
                    <div>
                      {postData?.eventbuilder?.cardGridOptions?.subheaderForLowerEventTiles &&
                        <p dangerouslySetInnerHTML={{ __html: postData?.eventbuilder?.cardGridOptions?.subheaderForLowerEventTiles }}></p>}

                      {eventSections.map((section, index) => (
                        <EventSectionRenderer key={index} type={section.__typename} data={section} />
                      ))}

                    </div>
                    {!postData?.eventbuilder?.hideRelatedPosts? <div>
                      <div>
                        <p className={`small_font font-[700!important] border-t-[1px] desktop-laptop:text-[16px] xl-[14px] laptop-landscape:text-[16px] pt-[16px] lg:!text-[16px] border-black `}>
                          {relatedPosts?.title ? relatedPosts?.title :'You may also like'}
                        </p>
                        {relatedPosts?.posts && relatedPosts?.posts.map((item, i) => {
                          return (
                            <article key={i} className="relative hover:outline-[1px] p-[24px!important] outline outline-[2px] transition-all delay-200 rounded-[16px] border-black md-up:shadow-none md-up:hover:shadow-eventCards-shadow">
                              <Link href={item.link} className='emptyLink'>.</Link>
                              {item?.heading && <p className='text-blue text-[14px] font-[700] uppercase'>{item?.heading}</p>}
                              <h4>{item.title}</h4>
                            </article>
                          )
                        })}
                      </div> 
                    </div> : ''}
                  </div> 
                </div>
              </section>
              <EventLeadershipCard items={eventLeadershipData} />
              {/* {!postData?.eventbuilder?.hideScheduleOfEvents ? <ScheduleTab currentId={currentId} /> : ''} */}
              {!postData?.eventbuilder?.hideScheduleOfEvents ? <ScheduleEvents data={scheduleOfEvents} /> : ''}
              <FooterCtaWithSlider bg='white' />
            </>
            : <EventRegistration data={postData} />
          }
        </>
      </Layout>
    </div>
  )
}

export default EventDetail;
