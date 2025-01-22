import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Styles from '../../styles/blog/bannerWithResource.module.css'
import moment from 'moment';

const inter = Inter({
	subsets: ['latin'],
	weight: ['700'],
});

export default function BannerWithResourceCard(props) {
  let data = props.items;
  let laregCardDate, smallCardDate = '';
  let largeCard = data?.largeCard;
  laregCardDate = largeCard?.date && moment(largeCard?.date).format('MMM DD, YYYY');
  let smallCards = data?.posts;
  return (
      <>
        <section id={data.id ? data.id : ''} className={`BannerWithResourceCard BannerWithPostsCard banner relative ${Styles.bannerWithResource} ${Styles.bgPattern} pb-[62px] pt-[93px] md:pb-[30px] lg:pb-[30px] desktop-mid:pb-[30px] ${data.background} ${data.classes} ${data.padding}`}>
            <div className="container">
              {data?.title && <h1 className='text-white w-1/2 desktop-laptop:w-full sm:w-full h2 lg:w-full phablet:w-full desktop-mid:w-full' dangerouslySetInnerHTML={{ __html: data.title }}></h1> }
              <div className="card-with-wrap flex flex-wrap w-[calc(100%+22px)] lg:w-full ml-[0] desktop-mid:w-full desktop-mid:ml-[0] lg:block desktop-mid:block align-center mt-[39px] lg:mt-[20px] md:w-full md:ml-0 ">
                {largeCard && <div className="cards w-[calc(50%-44px)] wide-screen:w-[calc(40%-20px)] wide-screen:ml-[-10px] mr-[21px] z-[9] lg:w-full desktop-mid:mx-0 desktop-mid:w-full lg:m-0 md:w-full sm:mx-0">
                  <div className="card relative border-white bg-black border-[2px] desktop-mid:flex tablet:flex phablet:flex sm:block max-w-[566px] laptop:max-w-[100%] lg:max-w-full desktop-mid:max-w-full xxl-up:max-w-full rounded-[16px] outline-0 transition-all duration-200 ease-in-out group hover:outline hover:outline-1 hover:outline-white  overflow-hidden sm:h-full hover:shadow-white-shadow">
                    <div className="img-wrap relative max-w-full h-[323px] desktop:h-auto wide-screen:max-w-full wide-screen:h-auto desktop-mid:h-auto lg:h-auto overflow-hidden laptop:max-w-[100%] laptop:h-full sm:h-auto">
                      {largeCard?.sourceUrl && <Link className="emptyLink" href={largeCard?.sourceUrl?.url}>.</Link>}
                      <Image src={largeCard?.image?.sourceUrl} alt={largeCard?.image?.altText} className='transition-all duration-200 ease-in-out xxl-up:w-full laptop:w-full lg:h-full desktop-mid:h-full sm:h-auto group-hover:scale-105' width={562} height={323} />
                    </div>
                    <div className="cardContent pt-[38px] pb-[41px] px-[42px] desktop:p-[20px] lg:p-[20px] flex flex-wrap sm:p-[20px] sm:h-[220px]">
                      <div className="introContent">
                        <span className={`small_font mb-[10px] laptop-landscape:text-[14px] xl-up:!text-[14px] wide-screen:text-[16px] xl:text-[14px] uppercase text-yello ${inter.className}` }>
                          {largeCard?.heading}
                        </span>
                      {largeCard?.sourceUrl &&<Link href={largeCard?.sourceUrl?.url}> 
                          <h4 className='text-white mt-[6px]'>
                            {largeCard?.title}
                            </h4>
                        </Link>}
                      </div>
                      <div className="auther flex w-full items-center mt-[79px] md:mt-[40px] desktop:mt-[54px] desktop-mid:mt-[30px] tablet:mt-[30px] sm:!mt-[20px]">
                        <div className="w-[13%] tablet:w-[24%] desktop-mid:w-[24%] sm:w-[20%]">
                          <div className="img-wrap">
                            <Image src={largeCard?.authorInfo?.authorImage?.sourceUrl} alt={largeCard?.authorInfo?.authorImage?.altText} width={56} height={56} className='rounded-[50%]' />
                          </div>
                        </div>
                        <div className="w-full pl-[8px]">
                          <span className={`text-white small_font decoration-2 mb-[4px] laptop-landscape:text-[14px] !font-[700] underline ${inter.className} hover:text-pink hover:decoration-pink`} > 
                            {largeCard?.authorInfo?.authorName}</span>
                          <div className="date text-white flex pt-[0px]">
                            <p className='small_font'>{laregCardDate}</p> 
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                }
                <div className="cards relative w-[calc(50%-22px)] wide-screen:w-[calc(60%-40px)] wide-screen:mx-[20px] mx-[11px] lg:w-full lg:m-0 desktop-mid:w-full desktop-mid:mx-[0] desktop-mid:mt-[20px] lg:mt-[40px] md:w-full sm:mx-0">
                  <div className="tiitle">
                    <h3 className='text-white'>{data?.smallCardHeading}</h3>
                    {smallCards && smallCards.map((item, index) => {
                      smallCardDate = item?.date && moment(item?.date).format('MMM DD, YYYY');
                        return (
                          <div key={index} className={`${Styles.item} relative pt-[22px] pb-[28px] tablet:pt-[14px] tablet:pb-[20px] desktop:pt-[14px] desktop:pb-[20px] desktop:items-center flex tablet:items-center xxl-up:items-center  last:border-b-[0px] cursor-pointer group sm:block`}>
                            {item?.sourceUrl && <Link href={item?.sourceUrl?.url} className='emptyLink'>.</Link>}
                            <div className="w-1/3 sm:w-full">
                              <div className="imgWrap w-[160px] h-[140px] relative overflow-hidden rounded-[16px] scale-100 transition-all duration-500 lg:w-full wide-screen:w-full hover:scale-105 ease-in-out desktop:w-[130px] tablet-mid:w-[100px] tablet:w-full desktop-mid:!w-[150px]">
                                {item?.sourceUrl && <Link href={item?.sourceUrl?.url} className='emptyLink'>.</Link>}
                                <Image src={item?.image?.sourceUrl} alt={item?.image?.altText}  className='rounded-[16px] h-full object-cover transition-all duration-300 ease-in-out wide-screen:w-full desktop-mid:w-full group-hover:scale-105' width={160} height={180} />
                              </div>
                            </div>
                            <div className={`relative ${Styles.itemContent} pl-[24px] pt-[4px] w-full lg:w-full xxl-up:pl-[32px] laptop:pl-[15px] laptop:pt-[0] desktop-mid:pt-0 desktop:pl-[12px] xl:pt-[0] tablet:pt-0 sm:pl-0 sm:mt-[20px]`}>
                              <span className={`text-yello text-[14px] inline-block w-full uppercase mb-[7px] md:mb-[2px] wide-screen:text-[18px] desktop:mb-[10px] tablet:mb-[10px] sm:mb-[2px] ${inter.className}`}>
                                {item?.heading}
                              </span>
                              <h4 className={`relative text-white inline ${Styles.textEllipses} w-full desktop:h-[50px] lg:my-[20px] laptop:h-[50px] xxl-up:h-[88px] mt-[0px] desktop-mid:h-[50px] tablet:h-[50px] sm:h-[45px]`}>
                                {item?.title}
                              </h4>
                              <div className="btnWithDate flex items-center mt-[14px] tablet:mt-[5px] laptop:mt-[5px] xl:mt-[5px] z-[99]">
                                <span className={`text-white inline-block small_font font-bold ${inter.className} decoration-2 underline decoration-solid decoration-white hover:text-pink hover:decoration-pink`}>
                                  {item?.authorInfo?.authorName}
                                </span>
                                <p className='text-white small_font pl-[6px]'>{smallCardDate}</p>
                                {item?.time && <p className='text-white small_font pl-[12px]'>{item?.time}</p>}
                              </div>
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
}
