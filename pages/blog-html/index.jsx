import React from 'react';
import Layout from '../../components/Layout';
import BannerWithResourceCard from  '../../components/BannerWithResourceCard';
import BlogFilter from '../../components/BlogFilter';
import FooterCtaWithSlider from '../../components/FooterCtaWithSlider';

export default function Index() {
  return (
    <Layout>
      <BannerWithResourceCard />  
      <BlogFilter />
      <FooterCtaWithSlider  bg='white'/>
    </Layout>
  )
}
