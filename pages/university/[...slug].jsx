
import React, { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import Image from 'next/image'
import { GET_SINGLE_UNIVERSITY } from '../../graphql/singleUniversityQuery';
import UniversitySectionRenderer from '../../components/university-sections/UniversitySectionRenderer';
import Layout from '../../components/Layout';
import Custom404 from '../404';
import BlogDetailStyle from '../../styles/blog/blogDetail.module.css'
import RightBarSticky from '../../components/university-sections/RightBarSticky';
import FooterCtaWithSlider from '../../components/university-sections/FooterCtaWithSlider';
import Breadcrumbs from '../../components/university-sections/Breadcrumbs';
// import moment from 'moment';

// Using URI for fetching the data
function UniversityDetail() {
  const router = useRouter();
  const uri = router.query.slug || [];
  const nestedPath = uri.join('/');
  const { loading, error, data } = useQuery(GET_SINGLE_UNIVERSITY, {
    variables: { slug: nestedPath },
  });
  // Check if it's a 404 page
  if (router.isFallback || router.is404) {
    return <Custom404 />;
  }

  if (loading) return <p className='pt-[100px] text-center'>Loading...</p>;
  if (error) return <p className='pt-[100px] text-center'>Error: something went wrong please wait or try again</p>;


  const universitySections = data?.university?.universitySections?.sections || [];
  const universitySubTitle = data?.university?.universitySections?.subtitle || '';
  const seoValue = data?.university?.seo || [];
  const sectionBg = data?.university?.universitySections?.sections[0]?.background || [];
  if (!data.university) {
    return <Custom404 />;
  }
  return (
    <>
      <NextSeo title={seoValue && seoValue.title} description={seoValue && seoValue.metaDesc} />
      {data && data.university && <>
        <Breadcrumbs data={seoValue} sectionBg={sectionBg} />
        <section className={`${BlogDetailStyle.bannerBlogDetail} banner bg-white padding-medium-bottom`}>
          <div className="container">
            <div>
              {data && data.university && <h1 dangerouslySetInnerHTML={{ __html: data.university.title }} ></h1>}
              {data && data.university && universitySubTitle && <p dangerouslySetInnerHTML={{ __html: universitySubTitle}}></p>}
            </div>
          </div>
        </section>
        <section className={`${BlogDetailStyle.blogDetail} blogDetail bg-[#fff] float-left w-full`} id="blogDetail">
          <div className="container">
            <div className='relative w-full md:!flex'>
              {data.university && <RightBarSticky items={data.university.link} />}
              <div>
                {data.university && data.university.featuredImage && <section className='blogFetaureImage FullWidthImage p-0'>
                  <Image src={data.university.featuredImage.node.sourceUrl} width={668} height={400} alt={data.university.featuredImage.node.altText} />
                </section>}
                {/* {data?.post && data?.post?.content && <p dangerouslySetInnerHTML={{ __html: blogContent }}></p>} */}
                {universitySections.map((section, index) => (
                  <UniversitySectionRenderer key={index} type={section.__typename} data={section} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
      }
    </>
  );
}

// Wrap SinglePost with Layout
export default function SinglePage() {
  return (
    <Layout>
      <UniversityDetail />
      <FooterCtaWithSlider  />
    </Layout>
  );
}