import React from "react"
import Layout from '../../components/Layout'
import ThreeCardColumn from './ThreeCardColumn'
import ThreeCardStrips from './ThreeCardStrips'
import Accordion from './Accordion'
import Banner from './BannerForthLevel'
import AwardWithHeading from './AwardWithHeading'
import TbdTabLogo from './Tbd-TabLogo'
import { NextSeo } from "next-seo"

export default function Pricing() {
    return (
      <Layout>
        <NextSeo title='Pricing'/>
        <Banner />
        <ThreeCardColumn />
        <ThreeCardStrips />
        <TbdTabLogo />
        <AwardWithHeading />
        <Accordion />
      </Layout>
    )
  }