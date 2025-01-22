import React from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import Arrow_Btn from '../../components/button/ExternalLink_btn'
import BannerWithResourceCard from '../../styles/blog/bannerWithResource.module.css'
import NewsLanding from '../../components/NewsLanding'
import FooterCtaWithSlider from '../../components/FooterCtaWithSlider';


const blogBannerData = [
    {
      id: "1",
      bannerMainTitleColor: "Explore",
      bannerMainTitle: "our news",
      bannerCardsImage: "built-in.jpg",
      cardSubtile: "In the news  |  Oct 30, 2023",
      descriotion: "Is AI Really Supercharging the Fraud Economy?",
      auther_image: "auther-img.png",
      autherName: "McKenzie Gladney",
      autherDate: "Nov 15, 2023",
      autherTime: "6 min read",
      items: [
        {
          id: "1",
          itemImage: "boyWithGift.png",
          itemSubTitle: "In the news  |  Oct 30, 2023",
          itemTite: "AI-Powered Fraud Decisioning..",
          itemAutherName: "McKenzie Gladney",
          itemAutherDate: "Nov 15, 2023"
        },
        {
          id: "2",
          itemImage: "circleWithLaptop.png",
          itemSubTitle: "In the news  |  Oct 30, 2023",
          itemTite: "AI-Powered Fraud Decisioning..",
          itemAutherName: "McKenzie Gladney",
          itemAutherDate: "Nov 15, 2023"
        },

      ]
    }
  ]

const Banner = () => {
    const blogDataItems = blogBannerData[0].items;
    var seperatorLine = "after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 after:w-[2px] after:h-[20px] "
  
    return (
  
      <>
        <div className="breadcrumbs bg-white relative">
          <div className="container">
            <ul className='absolute top-[39px] left-[20px] sm:z-[9] z-[99] sm:top-[90px]  phablet:top-[90px] tablet:top-[90px]'>
              <li className="inline relative text-[16px] font-[400] leading-[24px] text-white hover:text-pink transition-all delay-[0.3s] mr-[15px]">
                <Link href="/">Home</Link>
              </li>
              <li className='inline relative text-[16px] font-[400] leading-[24px] text-white hover:text-pink transition-all delay-[0.3s] mr-[15px]'>
                <Link href="/newsroom-html">Newsroom</Link>
              </li>
              <li className='inline relative text-[16px] font-[700] leading-[24px] mr-[15px]'>
                <span className='text-pink'>News</span>
              </li>
            </ul>
          </div>
        </div>
        <section className={`bg-black banner relative  ${BannerWithResourceCard.bannerWithResource} ${BannerWithResourceCard.bgPatternSecond} padding-medium-bottom pt-[86px] lg:pt-[135px] overflow-hidden`}>
          <div className="container">
            <h1 className='text-white h2 sm:w-full'> <span className="text-oceanGreen">{blogBannerData[0].bannerMainTitleColor}</span> {blogBannerData[0].bannerMainTitle} </h1>
            <div className="card-with-wrap flex flex-wrap w-[calc(100%+16px)] ml-[-8px] align-center mt-[41px] md:mt-[30px] md:w-full md:ml-0">
              <div className={`cards  w-[calc(50%-16px)]  wide-screen:w-[calc(40%-16px)] mx-[8px] z-[9] md:w-full md:mx-0`}>
                <div className={`${BannerWithResourceCard.card} relative border-white bg-black border-[2px] max-w-[100%]  rounded-[16px]  group hover:outline hover:outline-1 hover:outline-white overflow-hidden hover:shadow-white-shadow sm:h-full`}>
                  <Link href="#" className='emptyLink'>.</Link>
                  <div className="img-wrap max-w-[100%] h-[220px] overflow-hidden sm:h-[192px]">
                    <Image src={`/bannerWithResourceCard/${blogBannerData[0].bannerCardsImage}`} className='transition-all w-full duration-200 object-cover h-full ease-in-out group-hover:scale-105' width={562} height={323} alt="banner-card" />
                  </div>
                  <div className="cardContent p-[37px] xl-up:pb-[38px] xl-up:pr-[35px] tablet:p-[25px] flex flex-wrap sm:p-[20px] ">
                    <div className="introContent">
                      <span className='text-yello laptop-landscape:text-[14px] fontInter text-[16px] tracking-[1px] xl:text-[14px] wide-screen:text-[18px] inline-block uppercase font-[700] mb-[5px]'>{blogBannerData[0].cardSubtile}</span>
                      {/* <span className={`relative ${BannerWithResourceCard.date} fontInter laptop-landscape:text-[14px] xl:text-[14px] wide-screen:text-[18px] text-yello tracking-[1px] uppercase text-[16px] inline-block font-[700] mb-[5px] ml-[7px] pl-[13px] ${seperatorLine} after:bg-yello`}>{blogBannerData[0].date}</span> */}
                      <h4 className='text-white'>{blogBannerData[0].descriotion}</h4>
                      <div className="btn mt-[23px]">
                        <Arrow_Btn text='READ MORE' link='/' color='white' />
                      </div>
                    </div>
  
                  </div>
                </div>
              </div>
              <div className="cards w-[calc(50%-16px)] wide-screen:w-[calc(60%-16px)] pl-[16px] wide-screen:pl-[16px] mx-[8px] md:w-full md:mt-[30px] md:mx-0 z-10">
                <div className="title lg-up:pl-[5px]">
                  <h3 className='text-white wide-screen:mb-[20px]'>Latest news</h3>
                  {blogDataItems.map((data, index) => (
                    <div key={index} className={`${BannerWithResourceCard.item}  relative pt-[18px] pb-[30px] md:py-[20px] mb-[11px] flex  last:border-0  cursor-pointer group`}>
                      <Link href="#" className='emptyLink'>.</Link>
  
                      <div className={`relative ${BannerWithResourceCard.hoverIcon}   w-full xl-up:pr-[10px]`}>
                        <div>
                          <span className='text-yello fontInter inline-block uppercase tracking-[0.5px] text-[14px] wide-screen:text-[18px] mb-[5px] font-[700]'>{data.itemSubTitle}</span>
                          {/* <span className={`relative ${seperatorLine} after:bg-yello fontInter text-yello tracking-[0.5px] inline-block uppercase text-[14px] wide-screen:text-[18px] mb-[5px] font-[700] ml-[10px] pl-[10px]`}>{data.date}</span> */}
                        </div>
  
                        <h4 className='relative text-white text-ellipsis h-[60px] inline w-full md:h-auto md:max-h-[60px] line-clamp-2 sm:h-[45px]'>{data.itemTite}</h4>
  
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  
    )
  }

export default function News() {
    return (
        <Layout>
            <NextSeo title="News" description="this is news page" />
            <Banner />  
            <NewsLanding />
            <FooterCtaWithSlider  bg='white'/>
        </Layout>
    );
  }