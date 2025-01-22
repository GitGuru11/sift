import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Arrow_Btn from './button/Arrow_Btn';
// import Arrow_Btn from 'button/Arrow_Btn';
import BannerWithResourceCard from '../styles/blog/bannerWithResource.module.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['700'],
});

const blogBannerData = [
  {
    id: "1",
    bannerMainTitleColor: "Explore",
    bannerMainTitle: "our events",
    bannerCardsImage: "events-banner.png",
    cardSubtile: "event type",
    descriotion: "SiGMA Europe",
    auther_image: "auther-img.png",
    autherName: "McKenzie Gladney",
    autherDate: "Nov 15, 2023",
    autherTime: "6 min read",
    items: [
      {
        id: "1",
        itemImage: "boyWithGift.png",
        itemSubTitle: "Event type",
        itemTite: "AI-Powered Fraud Decisioning..",
        itemAutherName: "McKenzie Gladney",
        itemAutherDate: "Nov 15, 2023"
      },
      {
        id: "2",
        itemImage: "circleWithLaptop.png",
        itemSubTitle: "Event type",
        itemTite: "AI-Powered Fraud Decisioning..",
        itemAutherName: "McKenzie Gladney",
        itemAutherDate: "Nov 15, 2023"
      },
      {
        id: "3",
        itemImage: "pattern.png",
        itemSubTitle: "Event type",
        itemTite: "AI-Powered Fraud Decisioning..",
        itemAutherName: "McKenzie Gladney",
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
          <ul className='absolute top-[45px] left-[20px] sm:z-[9] z-[99] sm:top-[75px] phablet:top-[70px] tablet:top-[60px]'>
            <li className='inline relative text-[16px] font-[400] leading-[24px] text-white hover:text-pink transition-all delay-[0.3s] mr-[15px]'>
              <Link href="/">Home</Link>
            </li>
            <li className='inline relative text-[16px] font-[700] leading-[24px] mr-[15px]'>
              <span className='text-pink'>Events</span>
            </li>
          </ul>
        </div>
      </div>
      <section className={`banner bg-darkBlue relative  ${BannerWithResourceCard.bannerWithResource} ${BannerWithResourceCard.bgPattern} pb-[40px] pt-[93px] sm:pt-[110px] lg:pb-[30px] tablet:pb-[30px] desktop-mid:pb-[30px] `}>
        <div className="container">
          <h1 className='text-white w-1/2 desktop-laptop:w-full sm:w-full h2 tablet:w-full phablet:w-full desktop-mid:w-full wide-screen:w-full'> <span className="text-oceanGreen !font-[400]">{blogBannerData[0].bannerMainTitleColor}</span> {blogBannerData[0].bannerMainTitle} </h1>
          <div className="card-with-wrap flex flex-wrap w-[calc(100%+22px)] ml-[-11px] align-center mt-[40px] lg:mt-[20px] md:w-full md:ml-0 ">
            <div className="cards w-[calc(50%-24px)] wide-screen:w-[calc(40%-20px)] mr-[12px] z-[9] md:w-full sm:mx-0">
              <div className="card relative border-white bg-black border-[2px] max-w-[566px] laptop:max-w-[100%] xxl-up:max-w-full xxl-up:h-auto rounded-[16px] outline-0 transition-all duration-200 ease-in-out group hover:outline hover:outline-1 hover:outline-white  overflow-hidden sm:h-full hover:shadow-white-shadow">
                {/* <Link href="#" className='emptyLink'>.</Link> */}
                <div className="img-wrap max-w-full h-[294px] wide-screen:max-w-full wide-screen:h-auto desktop:h-full laptop:max-w-[100%] laptop:h-full desktop-mid:h-auto tablet:h-auto overflow-hidden sm:h-auto">
                  <Link className="emptyLink" href="#">.</Link>
                  <Image src={`/bannerWithResourceCard/${blogBannerData[0].bannerCardsImage}`} className='transition-all duration-200 ease-in-out xxl-up:w-full wide-screen:w-full laptop:w-full group-hover:scale-105 xl-up:h-full' width={562} height={323} alt="banner-card" />
                </div>
                <div className="cardContent pt-[37px] pb-[38px] px-[42px] desktop:p-[20px] lg:p-[20px] sm:p-[20px] sm:h-[220px]">
                  <div className="introContent">
                    <span className={`mb-[10px] xl:!text-[14px] xl-up:text-[14px] laptop-landscape:text-[14px] uppercase text-yello ${inter.className}`}>{blogBannerData[0].cardSubtile}</span>
                    <Link href="#"> <h4 className='text-white'>{blogBannerData[0].descriotion}</h4></Link>
                  </div>
                  <div className="location-with-date mt-[24px]">
                    <div className="icon_with_location flex mb-[8px]">
                      <div className="w-[24px]">
                        <Image src="/bannerWithResourceCard/location.svg" width={24} height={24} alt="Location" />
                      </div>
                      <div className="text pl-[7px]">
                        <p className='small_font text-white'>Malta</p>
                      </div>
                    </div>
                    <div className="icon_with_location flex">
                      <div className="w-[24px]">
                        <Image src="/bannerWithResourceCard/calendar-check-fill.svg" width={24} height={24} alt="Location" />
                      </div>
                      <div className="text pl-[7px]">
                        <p className='small_font text-white'>Nov 13-17, 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="btn mt-[20px]">
                    {/* <Arrow_Btn text='REGISTER NOW' redirection='/'  /> */}
                    {/* <span className='upercase text-white text-[16px] laptop:text-[14px]'>REGISTER NOW</span> */}
                      <Link aria-label="first link" className="group arrow_btn uppercase text-white relative  transition-all tracking-[1.1px]  duration-300 font-[700] leading-[1] pr-[26px] group-hover:text-pink  z-[11]" href="/">REGISTER NOW<span className="absolute top-[auto] bottom-[-8px] -translate-y-1/2 right-0 w-[20px] overflow-hidden"><svg className="-ml-[5px] duration-300 group-hover:-ml-[1px]" xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84"></path></svg></span></Link>
                  </div>

                </div>
              </div>
            </div>
            <div className="cards relative w-[calc(50%-36px)] wide-screen:w-[calc(60%-40px)] wide-screen:mx-[20px] mx-[18px] md:w-full md:mt-[30px] sm:mx-0">
              <div className="tiitle">
                <h3 className='text-white mb-[9px]'>Upcoming events</h3>
                {blogDataItems.map((data, index) => (
                  <div key={index} className={`${BannerWithResourceCard.item} relative pt-[13px] pl-[1px] pb-[28px] wide-screen:pb-[12px] md:pb-[15px] md:pt-[8px] tablet:py-[10px] desktop:pb-[15px] desktop:pt-[8px] flex last:border-b-[0px] cursor-pointer group sm:block`}>
                    <Link href="#" className='emptyLink'>.</Link>
                    {/* <div className="w-1/3 sm:w-full">
                          <div className="imgWrap w-[160px] rounded-[16px] scale-100 transition-all duration-500 hover:scale-105 ease-in-out tablet-mid:w-[120px] desktop-mid:w-[120px] tablet:w-[120px] sm:w-full">
                            <Image src={`/bannerWithResourceCard/${data.itemImage} `} className='rounded-[16px] transition-all duration-300 ease-in-out group-hover:scale-105 sm:mx-auto' alt="" width={160} height={180} />
                          </div>
                        </div> */}
                    <div className={`relative ${BannerWithResourceCard.itemContent} pt-[4px] w-full desktop-mid:pt-0 tablet:pt-0 sm:pl-0 sm:mt-[0px]`}>
                      <span className={`text-yello text-[14px] wide-screen:text-[18px] inline-block w-full uppercase mb-[6px] ${inter.className}`}>{data.itemSubTitle}</span>
                      {/* <h4 className='relative text-white text-ellipsis h-[60px] inline-block w-full desktop:h-[50px] laptop:h-[50px] xxl-up:h-[88px] mt-[0px] line-clamp-2 desktop-mid:h-[50px] tablet:h-[50px] sm:h-[45px]'>{data.itemTite}</h4> */}
                      <div className="headerWrap h-[60px] lg:h-[50px] xxl-mid:[60px] xxl-mid:pr-[120px] wide-screen:h-[80px] overflow-hidden text-ellipsis line-clamp-2 tablet:pr-[20px] laptop-landscape:pr-[20px] ">
                        <h4 className='relative text-white  inline w-full desktop:h-[50px] laptop:h-[50px] xxl-up:h-[88px] mt-[0px] desktop-mid:h-[50px] tablet:h-[50px] sm:h-[45px]'>{data.itemTite}</h4>
                      </div>
                     <div className="btnWithDate flex items-center mt-[14px] desktop:mt-[0]">
                        {/* <Link href="" className='text-white inline-block small_font font-bold decoration-2 underline decoration-solid decoration-white group-hover:text-pink group-hover:decoration-pink'>{data.itemAutherName}</Link> */}
                        <p className='text-white small_font pr-[10px] border-r-[1px] border-white'>Virtual</p>
                        <p className='text-white small_font pl-[12px]'>{data.itemAutherDate}</p>
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
