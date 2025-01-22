import React from "react"
import { NextSeo } from 'next-seo';
import Layout from '../../components/Layout'
import BannerWithParallax from "../../components/BannerWithParallax"
import FullWidthMedia from "../../components/FullWidthMedia"
import PatentTable from "../../components/PatentTable"
import Trademarks from "../../components/Trademarks"
export default function Patents() {
 
  const FullWidthMediaBg = `white`
  const FullWidthMediaIntro = {
    PreNormalText: 'AI-Powered Fraud Decisioning..',
		bg: 'white',
		blurb:
			'AI-Powered Fraud Decisioning..',
	};
    return (
      <Layout>
        <NextSeo title="Patents - Sift" description="Sift - Patents" />
        <BannerWithParallax/>
        <FullWidthMedia intro={FullWidthMediaIntro} bg={FullWidthMediaBg}/>
        <PatentTable/>
        <Trademarks/>
      </Layout>
    )
  }