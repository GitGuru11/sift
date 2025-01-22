import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { NextSeo } from 'next-seo';
import { GET_PAGE_DATA } from '../graphql/queries';
import SectionRenderer from '../components/sections/SectionRenderer';
import Breadcrumbs from '../components/integrated-section/Breadcrumbs';
import CustomBreadcrumbs from '../components/integrated-section/CustomBreadcrumbs';
import Layout from '../components/Layout';
import Custom404 from './404';
import Head from 'next/head';
import { parse } from 'url';
const apolloClient = new ApolloClient({
  uri: 'https://media.sift.com/wp/graphql',
  cache: new InMemoryCache(),
});
// console.log('test');
// console.log(process);
export async function getServerSideProps({ params, req }) {
  const uriPath = params?.uri?.join('/') || '/';
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers.host;
  const parsedUrl = parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const currentUrl = `${protocol}://${host}${pathname}`;

  try {
    const { data } = await apolloClient.query({
      query: GET_PAGE_DATA,
      variables: { uri: uriPath },
     // fetchPolicy: 'network-only',
    });
    if (!data || !data.nodeByUri) {
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
      title: data.nodeByUri.seo.title || defaultTitle,
      description: data.nodeByUri.seo.metaDesc || defaultDescription,
      canonical: currentUrl,
      openGraph: {
        url: currentUrl,
        title: data.nodeByUri.seo.title,
        description: data.nodeByUri.seo.metaDesc,
        images: data.nodeByUri.seo.opengraphImage ? [{
          url: data.nodeByUri.seo.opengraphImage.sourceUrl,
          width: data.nodeByUri.seo.opengraphImage.mediaDetails.width,
          height: data.nodeByUri.seo.opengraphImage.mediaDetails.height,
          alt: data.nodeByUri.seo.title,
        }] : [defaultImage],
      },
    };

    return { props: { pageData: data, seoProps } };
  } catch (error) {
    console.error("GraphQL Error:", error);
    return { props: { error: error.message, seoProps: {} } };
  }
}

export default function PageComponent({ pageData, seoProps, error }) {
  if (error) return <p className='pt-[100px] text-center'>Error: something went wrong please wait or try again</p>;
  if (!pageData || !pageData.nodeByUri) return <Custom404 />;
  const sections = pageData.nodeByUri.pageBuilder?.sections || [];
  const sectionBg = sections[0]?.background || [];
  const customBreadcrumbsIndex = sections.findIndex(
    section => section.__typename === 'Page_Pagebuilder_Sections_Breadcrumbs'
  );
  const customBreadcrumbs = sections[customBreadcrumbsIndex] || [];
  return (
    <Layout>
      <NextSeo {...seoProps} />
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoProps.openGraph.title || defaultTitle } />
        <meta name="twitter:description" content={seoProps.openGraph.description || defaultDescription} />
        <meta name="twitter:image" content='/OG-twitter.jpg' />
        <meta name="twitter:site" content="https://twitter.com/GetSift" />
      </Head>
      <span className='hidden' id="marketo-program-id" data-marketo-id={`${pageData?.nodeByUri?.pageBuilder?.marketoProgramId}`}></span>
      {customBreadcrumbs ? (
        <CustomBreadcrumbs data={customBreadcrumbs} sectionBg={sectionBg} />
      ) : (
        <Breadcrumbs data={seoProps} sectionBg={sectionBg} />
      )}
      {sections.map((section, index) => (
        <SectionRenderer key={index} type={section.__typename} data={section} />
      ))}
    </Layout>
  );
}
