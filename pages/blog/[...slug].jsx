// pages/[...slug].js
import React, { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image'
import { GET_SINGLE_POST } from '../../graphql/singlePostQuery';
import BlogSectionRenderer from '../../components/blog-sections/BlogSectionRenderer';
import Layout from '../../components/Layout';
import Custom404 from '../404';
import BlogDetailStyle from '../../styles/blog/blogDetail.module.css'
import RightBarSticky from '../../components/blog-sections/RightBarSticky';
import BlogForm from '../../components/blog-sections/BlogForm';
import Topic from '../../components/blog-sections/Topic';
import Cards from '../../components/blog-sections/Cards';
import FooterCtaWithSlider from '../../components/blog-sections/FooterCtaWithSlider';
import Breadcrumbs from '../../components/blog-sections/Breadcrumbs';
import moment from 'moment';
import Loader from '../../components/integrated-section/Loader';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { Suspense } from 'react';
import { parse } from 'url';
import $ from 'jquery';

function createApolloClient() {
  return new ApolloClient({
    uri: 'https://media.sift.com/wp/graphql',
    ssrMode: typeof window === 'undefined', // True for SSR, false for client-side
    cache: new InMemoryCache(),
  });
}

export async function getServerSideProps({ params, req }) {
  const apolloClient = createApolloClient();
  const nestedPath = params.slug ? params.slug.join('/') : '';

  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers.host;
  // const currentUrl = `${protocol}://${host}${req.url}`;

  const parsedUrl = parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const currentUrl = `${protocol}://${host}${pathname}`;

  try {
    const { data } = await apolloClient.query({
      query: GET_SINGLE_POST,
      variables: { slug: nestedPath },
    });

    if (!data.post) {
      return { notFound: true };
    }

    return {
      props: {
        post: data.post,
        currentUrl
      },
    };
  } catch (error) {
    console.error("Error fetching post data:", error);
    return { props: { error: error.message } };
  }
}

function BlogDetail({post, currentUrl }) {
  if (!post) {
    // The loading state and error
    return <Loader />; // loading 
  }

  const newDate = moment(post.date).format('MMM DD, YYYY');
  const categories = post.categories ? post.categories.nodes : [];
  const tags = post.tags ? post.tags : [];
  const categories_id = categories.map(cat => cat.termTaxonomyId);
  // const seoValue = post?.seo || {}; // initialize seoValue as an empty object
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  // const pathName = typeof window !== 'undefined' ? window.location.pathname : '';
 

  return (
    <>
     <NextSeo
        title={post.seo.title}
        description={post.seo.metaDesc || post.seo.title}
        canonical={currentUrl}
        openGraph={{
          type: 'website',
          siteName: 'Sift',
          url: `${currentUrl}`,
          title: post.seo.title,
          description: post.seo.metaDesc || post.seo.title,
          images: [
            {
              url: post?.featuredImage?.node?.sourceUrl || `https://sift.com/OG-default.jpg`,
              width: 800,
              height: 600,
              alt: post.seo.title,
            }
          ],
        }}
        twitter={{
          site: '@GetSift',
          cardType: 'summary_large_image',
          image: post?.featuredImage?.node?.sourceUrl || `https://sift.com/OG-twitter.jpg`,
        }}
      />

      {post && <>
        <Breadcrumbs data={post.seo} sectionBg={post.seo.background} />
        <Suspense fallback={<div>Loading...</div>}>
        <section className={`${BlogDetailStyle.bannerBlogDetail} banner bg-white padding-medium-bottom`}>
          <div className="container">
            <div>
              <ul>
              {categories && categories.map((cat, index) => {
                return (
                  <li key={index} className='mb-[5px] ml-[5px]'>
                    <Link href={`/blog?category=${cat.slug}`}>
                      {cat.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
            {post && <h1 dangerouslySetInnerHTML={{ __html: post.title }}></h1>}
            {post && post.blogSubTitle && <p dangerouslySetInnerHTML={{ __html: post.blogSubTitle}}></p>}
            <div>
              {post.author && post.author.node.avatar && post.author.node.avatar.url &&
                <Image src={post.author.node.avatar.url} width={56} height={56} alt={post.author.node.name} />
              }
              <div>
                  <Link href={{pathname: '/blog', query: { author: post.author.node.name }}}>
                    {post.author.node.firstName ? post.author.node.firstName : ''} 
                    &nbsp;
                    {post.author.node.lastName ? post.author.node.lastName : ''}
                  </Link>
                  <div>
                  <p>{newDate}</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
        <section className={`${BlogDetailStyle.blogDetail} blogDetail bg-[#fff] float-left w-full`} id="blogDetail">
          <div className="container">
            <div className='relative w-full md:!flex'>
              {post && <RightBarSticky items={post.link} />}
              <div>
                {post && post.featuredImage && <section className='blogFetaureImage FullWidthImage p-0 mb-[64px]'>
                  <Image src={post.featuredImage.node.sourceUrl} width={668} height={400} alt={post.featuredImage.node.altText} />
                </section>}
                {post?.content && <article className='oldBlogPost' dangerouslySetInnerHTML={{ __html: post.content }}></article>}
                {post && post.blogSections && post.blogSections.sections.map((section, index) => (
                  <BlogSectionRenderer key={index} type={section.__typename} data={section} />
                ))}
              </div>
              <div>
                {post &&
                  <>
                    <Topic items = {tags}/>
                    <Cards items={categories_id} />
                  </>
                }
              </div>
            </div>
          </div>
        </section>
        </Suspense>
      </>
      }
    </>
  );
}
export default function SinglePage({ post, currentUrl }) {
      useEffect(() => {
        $('.oldBlogPost .wp-block-image, .oldBlogPost p').each(function() {
                var img_right = $(this).find('.alignright').length;
                var img_left = $(this).find('.alignleft').length;
                var img_center = $(this).find('.aligncenter').length;
                if (img_right === 1) {
                    $(this).addClass('alignright');
                }
                if (img_left === 1) {
                    $(this).addClass('alignleft');
                }
                if (img_center === 1) {
                    $(this).addClass('aligncenter');
                }
            });
            $('.oldBlogPost p span').each(function() { 
                var img_right = $(this).find('.alignright').length;
                var img_left = $(this).find('.alignleft').length;
                var img_center = $(this).find('.aligncenter').length;
                if (img_right === 1) {
                    $(this).removeClass('alignright');
                    $(this).parent().addClass('alignrightimg');
                }
                if (img_left === 1) {
                    $(this).removeClass('alignleft');
                  $(this).parent().addClass('alignleftimg');
                }
                if (img_center === 1) {
                  $(this).addClass('aligncenter');
                }
            });

        // var iframe_length = $(".oldBlogPost .infogram-embed iframe").length;
        // if (iframe_length === 0) {
        //   $('.oldBlogPost p #infographic').addClass('infographic');
        // }
      }, []);
  if (!post) return <Loader />;
  return (

    <Layout>
       <BlogDetail post={post} currentUrl={currentUrl}  />
      <FooterCtaWithSlider />
    </Layout>
  );
}
