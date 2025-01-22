'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import DynamicButton from '../global-components/Buttons';
import DynamicLinks from '../global-components/Links';
import moment from 'moment';
import BannerWithResourceCard from '../../styles/blog/bannerWithResource.module.css'

const BannerLargeCardWithList = (props) => {
  let data = props.items;
  let newDate  = '';
  newDate = data?.cardData?.date && moment(data?.cardData?.date).format('MMM DD, YYYY')
  var seperatorLine = "after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 after:w-[2px] after:h-[20px] "
  return (
    <>
      <section id={data.id ? data.id : ''} className={`BannerLargeCardWithList ${BannerWithResourceCard.bgPatternSecond} ${data.background} ${data.classes} ${data.padding} bg-black banner relative pt-[86px] lg:pt-[135px] overflow-hidden`}>
        <div className="container">
          {data?.title && <h1 className='text-white h2 sm:w-full' dangerouslySetInnerHTML={{ __html: data?.title }}></h1>}
          <div className="card-with-wrap flex flex-wrap w-[calc(100%+16px)] ml-[-8px] align-center mt-[41px] md:mt-[30px] md:w-full md:ml-0">
            {data?.cardData &&
              <div className={`cards  w-[calc(50%-16px)]  wide-screen:w-[calc(40%-16px)] mx-[8px] z-[9] md:w-full md:mx-0`}>
                <div className={`relative border-white bg-black border-[2px] max-w-[100%]  rounded-[16px]  group hover:outline hover:outline-1 hover:outline-white overflow-hidden hover:shadow-white-shadow sm:h-full`}>
                  <DynamicLinks cta={data?.cardData?.buttons} />
                  {data?.cardData?.image && data?.cardData?.image?.sourceUrl && <div className="img-wrap max-w-[100%] h-[220px] overflow-hidden sm:h-[192px]">
                    <Image src={data?.cardData?.image?.sourceUrl}
                      className='transition-all w-full duration-200 object-cover h-full ease-in-out group-hover:scale-105'
                      width={562} height={323}
                      alt={data?.cardData?.image?.altText} />
                  </div>}
                  <div className="cardContent p-[37px] xl-up:pb-[38px] xl-up:pr-[35px] tablet:p-[25px] flex flex-wrap sm:p-[20px] ">
                    <div className="introContent w-full">
                      {data?.cardData?.heading && <span className='text-yello laptop-landscape:text-[14px] fontInter text-[16px] tracking-[1px] xl:text-[14px] wide-screen:text-[18px] inline-block uppercase font-[700] mb-[5px]'
                        dangerouslySetInnerHTML={{ __html: data?.cardData?.heading }}></span>}
                     
                      {newDate && <span className={`relative fontInter laptop-landscape:text-[14px] xl:text-[14px] wide-screen:text-[18px] text-yello tracking-[1px] uppercase text-[16px] inline-block font-[700] mb-[5px] ml-[7px] pl-[13px] ${seperatorLine} after:bg-yello`}>
                        {newDate}
                      </span>}
                      {data?.cardData?.title && <h4 className='text-white' dangerouslySetInnerHTML={{ __html: data?.cardData?.title }}></h4>}
                        <div className="location-with-date mt-[24px]">
                            {data?.cardData?.location && 
                            <div className="icon_with_location flex mb-[8px]">
                              <div className="w-[24px]">
                                <Image src="/bannerWithResourceCard/location.svg" width={24} height={24} alt="Location" />
                              </div>
                              <div className="text pl-[7px]">
                                <p className='small_font text-white'>{data?.cardData.location}</p>
                              </div>
                            </div>}
                            {data?.cardData?.time &&
                            <div className="icon_with_location flex">
                              <div className="w-[24px]">
                                <Image src="/bannerWithResourceCard/calendar-check-fill.svg" width={24} height={24} alt="Location" />
                              </div>
                              <div className="text pl-[7px]">
                                <p className='small_font text-white'>{data?.cardData?.time}</p>
                              </div>
                            </div>}
                        </div>
                      <div className="btn mt-[23px]">
                        <DynamicButton cta={data?.cardData?.buttons} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>}
            <div className="cards w-[calc(50%-16px)] wide-screen:w-[calc(60%-16px)] pl-[16px] wide-screen:pl-[16px] mx-[8px] md:w-full md:mt-[30px] md:mx-0 z-10">
              <div className="title lg-up:pl-[5px]">
                {data?.postsRows?.title && <h3 className='text-white wide-screen:mb-[20px]' dangerouslySetInnerHTML={{ __html: data?.postsRows?.title }}></h3>}
                {data?.postsRows && data?.postsRows?.posts.map((item, index) => {
                  let postDate = item?.date && moment(item?.date).format('MMM DD, YYYY');
                  return (
                    <div key={index} className={`relative pt-[18px] pb-[30px] md:py-[20px] mb-[11px] phablet:pr-[20px] flex  after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-white after:opacity-[0.5] last:after:hidden cursor-pointer group ${item.ctaButtons && item.ctaButtons[0].target ==true?'outer-link':'internal-link' }`} >
                      <DynamicLinks cta={item?.ctaButtons} />
                      <div className={`relative w-full xl-up:pr-[10px]`}>
                        <div>
                          {item?.heading && <span className='text-yello fontInter inline-block uppercase tracking-[0.5px] text-[14px] wide-screen:text-[18px] mb-[5px] font-[700]'
                            dangerouslySetInnerHTML={{ __html: item?.heading }}></span>}
                          {postDate && <span className={`relative ${seperatorLine} after:bg-yello fontInter text-yello tracking-[0.5px] inline-block uppercase text-[14px] wide-screen:text-[18px] mb-[5px] font-[700] ml-[10px] pl-[10px]`}>
                            {postDate}
                          </span>}
                        </div>
                        {item?.title && <h4 className='relative text-white text-ellipsis h-[60px] inline w-full md:h-auto md:max-h-[60px] line-clamp-2 sm:h-[45px]'
                          dangerouslySetInnerHTML={{ __html: item?.title }}>
                        </h4>}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default BannerLargeCardWithList;
