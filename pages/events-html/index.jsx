import React from 'react'
import Layout from '../../components/Layout';
import TbdBannerWithResourceCard from  '../../components/TbdBannerWithResourceCard';
import EventFilter from '../../components/EventFilter';
import FooterCtaWithSlider from '../../components/FooterCtaWithSlider';
export default function Events() {
  return (
    <Layout>
    <TbdBannerWithResourceCard />  
    <EventFilter />
    <FooterCtaWithSlider  bg='white'/>
  </Layout>
  )
}
