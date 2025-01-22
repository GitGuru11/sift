import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import BannerWithResourceCard from '../styles/blog/bannerWithResource.module.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['700'],
});

const blogBannerData = [
  {
    id: "1",
    bannerMainTitleColor: "Explore",
    bannerMainTitle: "our blog",
    bannerCardsImage: "/filter/bannerImage.png",
    cardSubtile: "Digital trust & safety",
    descriotion: "Sift named a Leader in the 2023 Forrester Wave(TM) for Digital Fraud Management",
    auther_image: "auther-img.png",
    autherName: "McKenzie Gladney",
    autherDate: "Nov 15, 2023",
    autherTime: "6 min read",
    items: [
      {
        id: "1",
        itemImage: "boyWithGift.png",
        itemSubTitle: "account fraud",
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

export default function BannerBlog() {

  const blogDataItems = blogBannerData[0].items;
  // console.log(blogDataItems)

  return (

    <>
      <div className="breadcrumbs bg-white relative">
        <div className="container">
          <ul className='absolute top-[39px] left-[20px] z-[99]'>
            <li className='inline relative text-[16px] font-[400] leading-[24px] text-black hover:text-pink transition-all delay-[0.3s] mr-[15px]'>
              <Link href="/" className='text-white'>Home / </Link>
            </li>
            <li className='inline relative text-[16px] font-[700] leading-[24px] mr-[15px]'>
              <span className='text-pink'>Blog</span>
            </li>
          </ul>
        </div>
      </div>
      <section className={`banner bg-black relative  ${BannerWithResourceCard.bannerWithResource} ${BannerWithResourceCard.bgPattern} pb-[62px] pt-[88px]`}>
        <div className="container">
          <h2 className='text-white w-1/2 sm:w-full'> <span className="text-oceanGreen">{blogBannerData[0].bannerMainTitleColor}</span> {blogBannerData[0].bannerMainTitle} </h2>
          <div className="card-with-wrap flex flex-wrap w-[calc(100%+22px)] ml-[-11px] align-center mt-[40px] md:w-full md:ml-0">
            <div className="cards w-[calc(50%-16px)] mx-[8px] z-[9] md:w-full sm:mx-0">
              <div className="card relative border-white bg-black border max-w-[566px] rounded-[16px]  group overflow-hidden sm:h-full">
                <Link href="#" className='emptyLink'>.</Link>
                <div className="img-wrap max-w-[562px] h-[323px] desktop-mid:h-auto tablet:h-auto overflow-hidden sm:h-[192px]">
                  <Image src={`${blogBannerData[0].bannerCardsImage}`} className='transition-all duration-200 ease-in-out group-hover:scale-105' width={562} height={323} alt="banner-card" />
                </div>
                <div className="cardContent pt-[38px] pb-[43px] px-[42px] flex flex-wrap sm:p-[20px] sm:h-[220px]">
                  <div className="introContent">
                    <span className={`small_font mb-[10px] uppercase text-yello ${inter.className}`}>{blogBannerData[0].cardSubtile}</span>
                    <h4 className='text-white mt-[4px]'>{blogBannerData[0].descriotion}</h4>
                  </div>
                  <div className="auther flex w-full items-center mt-[78px] desktop-mid:mt-[30px] tablet:mt-[30px] sm:mt-[20px]">
                    <div className="w-[13%] tablet:w-[24%] desktop-mid:w-[24%] sm:w-[20%]">
                      <div className="img-wrap">
                        <Image src={`/bannerWithResourceCard/${blogBannerData[0].auther_image}`} alt="" width={56} height={56} />
                      </div>
                    </div>
                    <div className="w-full pl-[10px]">
                      <Link href="" className='text-white small_font'>
                        {blogBannerData[0].autherName}</Link>
                      <div className="date text-white flex pt-[6px]">
                        <p className='small_font'>{blogBannerData[0].autherDate}</p>
                        <p className='small_font pl-[16px]'>{blogBannerData[0].autherTime}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cards w-[calc(50%-22px)] mx-[11px] md:w-full md:mt-[20px] sm:mx-0">
              <div className="tiitle">
                <h3 className='text-white'>Editors Pick</h3>
                {blogDataItems.map((data, index) => (
                  <div key={index} className={`${BannerWithResourceCard.item} relative pt-[21px] pb-[29px] flex border-b-[1px] border-opacity-[0.5] cursor-pointer group sm:block`}>
                    <Link href="#" className='emptyLink'>.</Link>
                    <div className="w-1/3 sm:w-full">
                      <div className="imgWrap w-[160px] rounded-[16px] scale-100 transition-all duration-500 hover:scale-105 ease-in-out desktop-mid:w-[120px] tablet:w-[120px] sm:w-full">
                        <Image src={`/bannerWithResourceCard/${data.itemImage} `} className='rounded-16px transition-all duration-300 ease-in-out group-hover:scale-105 sm:mx-auto' alt="" width={160} height={180} />
                      </div>
                    </div>
                    <div className={`relative ${BannerWithResourceCard.itemContent} pl-[24px] pt-[4px] w-full desktop-mid:pt-0 tablet:pt-0 sm:pl-0 sm:mt-[20px]`}>
                      <span className={`text-yello small_font uppercase ${inter.className}`}>{data.itemSubTitle}</span>
                      <h4 className='relative text-white text-ellipsis h-[60px] xxl-up:h-[88px] mt-[5px] line-clamp-2 desktop-mid:h-[50px] tablet:h-[50px] sm:h-[45px]'>{data.itemTite}</h4>
                      <div className="btnWithDate flex items-center mt-[14px]">
                        <Link href="" className='text-white inline-block small_font font-bold decoration-2 underline decoration-solid decoration-white group-hover:text-pink group-hover:decoration-pink'>{data.itemAutherName}</Link>
                        <p className='text-white small_font pl-[15px]'>{data.itemAutherDate}</p>
                      </div>
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
