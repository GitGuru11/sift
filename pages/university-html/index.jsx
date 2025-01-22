
import React from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import UniversityFilter from '../../components/UniversityFilter'
import IntroWithFourCards from '../../components/IntroWithFourCards';
import FooterCtaWithSlider from '../../components/FooterCtaWithSlider';
import Arrow_Btn from '../../components/button/Arrow_Btn'
import BannerWithResourceCard from '../../styles/blog/bannerWithResource.module.css'

const blogBannerData = [
  {
    id: "1",
    bannerMainTitle: "Trust & Safety University",
    bannerCardsImage: "bannerCards.png",
    cardSubtile: "TOPIC TAG",
    descriotion: "AI-Powered Fraud Decisioning..",
    auther_image: "auther-img.png",
    autherName: "McKenzie Gladney",
    autherDate: "Nov 15, 2023",
    autherTime: "6 min read",
    items: [
      {
        id: "1",
        itemImage: "boyWithGift.png",
        itemSubTitle: "TOPIC TAG",
        itemTite: "AI-Powered Fraud Decisioning..",
        itemAutherName: "McKenzie Gladne",
        itemAutherDate: "Nov 15, 2023"
      },
      {
        id: "2",
        itemImage: "circleWithLaptop.png",
        itemSubTitle: "payment fraud",
        itemTite: "AI-Powered Fraud Decisioning..",
        itemAutherName: "McKenzie Gladne",
        itemAutherDate: "Nov 15, 2023"
      },
      {
        id: "3",
        itemImage: "pattern.png",
        itemSubTitle: "chargebacks",
        itemTite: "AI-Powered Fraud Decisioning..",
        itemAutherName: "McKenzie Gladne",
        itemAutherDate: "Nov 15, 2023"
      },
    ]
  }
]

const BannerWtihResourcescards = () => {
  const blogDataItems = blogBannerData[0].items;
  return (

    <>
      <div className="breadcrumbs bg-white relative">
        <div className="container">
          <ul className='absolute top-[39px] left-[20px] sm:z-[9] z-[99] sm:top-[90px]  phablet:top-[90px] tablet:top-[90px]'>
            <li className='inline relative text-[16px] font-[400] after:text-white leading-[24px] text-black hover:text-pink transition-all delay-[0.3s] mr-[15px]'>
              <Link href="/" className='text-white hover:text-pink'>Home</Link>
            </li>
            <li className='inline relative text-[16px] font-[700] leading-[24px] mr-[15px]'>
              <span className='text-pink'>Trust & Safety University</span>
            </li>
          </ul>
        </div>
      </div>
      <section className={`BannerWtihResourcescards banner bg-darkBlue relative  ${BannerWithResourceCard.bannerWithResource}  padding-medium-bottom pt-[86px] overflow-hidden lg:pt-[135px]`}>
        <div className="container">
          <h1 className='text-white h2 sm:w-full'> <span className="text-oceanGreen">{blogBannerData[0].bannerMainTitleColor}</span> {blogBannerData[0].bannerMainTitle} </h1>
          <div className="card-with-wrap flex flex-wrap w-[calc(100%+16px)] ml-[-8px] align-center mt-[41px] md:mt-[20px] md:w-full md:ml-0">
            <div className={`cards ${BannerWithResourceCard.wideOne}  w-[calc(50%-16px)]   mx-[8px] z-[9] md:w-full md:mx-0`}>
              <div className={`card ${BannerWithResourceCard.featureCard} relative border-white bg-black border-[2px] max-w-[100%] wide-screen:max-w-[100%] rounded-[16px]  group hover:outline hover:outline-1 hover:outline-white hover:shadow-white-shadow duration-300 overflow-hidden sm:h-full`}>
                <Link href="#" className='emptyLink'>.</Link>
                <div className="img-wrap max-w-[100%] h-[260px] wide-screen:max-w-[100%] wide-screen:h-[300px] overflow-hidden sm:h-[192px]">
                  <Image src={`/t&s-banner.png`} className='transition-all w-full wide-screen:w-full duration-200 object-cover h-full ease-in-out group-hover:scale-105' width={562} height={323} alt="banner-card" />
                </div>
                <div className="cardContent p-[40px] xl-up:pb-[38px] tablet:p-[25px] flex flex-wrap md:p-[20px] ">
                  <div className="introContent">
                    <p className='text-yello text-[16px] wide-screen:text-[18px] laptop-landscape:!text-[14px] md:!text-[14px] font-[700] mb-[5px]'>{blogBannerData[0].cardSubtile}</p>
                    <h4 className='text-white'>{blogBannerData[0].descriotion}</h4>
                    <div className="btn mt-[23px]">
                      <Arrow_Btn text='READ MORE' redirection='/' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`cards ${BannerWithResourceCard.wideTwo}  lg-up:pl-[16px] tablet:pl-[10px] w-[calc(50%-16px)] mx-[8px] md:w-full md:mt-[20px] md:mx-0`}>
              <div className="title lg-up:pl-[5px]">
                <h3 className='text-white md:mb-[20px]'>Trending</h3>
                {blogDataItems.map((data, index) => (
                  <div key={index} className={`${BannerWithResourceCard.item}  relative pt-[19px] pb-[30px] md:py-[20px] last:pb-0 last:mb-0 mb-[14px] flex  last:border-0 md:pt-0 cursor-pointer group`}>
                    <Link href="#" className='emptyLink'>.</Link>

                    <div className={`relative ${BannerWithResourceCard.itemContent}   w-full xl-up:pr-[10px]`}>
                      <p className='text-yello uppercase text-[14px] mb-[5px] font-[700] wide-screen:text-[18px]'>{data.itemSubTitle}</p>
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

export default function Index() {
  return (
    <Layout>
      <BannerWtihResourcescards />
      <IntroWithFourCards />
      <UniversityFilter />
      <FooterCtaWithSlider bg="white" />
    </Layout>
  );
}
