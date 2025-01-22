import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Black_arrowBtn from './button/Black_arrowBtn'
import ColFourCardStyle from '../styles/ColFourCard.module.css'

export default function ColFourCard() {

    const cardData = [
        {
            "id": "1",
            "image": "/EventDetail/kris-nagel.png",
            "authorDesignation": "Chief Executive Officer",
            "authorName": "Kris Nagel",
            "linkedIcon": "/EventDetail/linkedIcon.svg",
            "twitter": "/EventDetail/twitter.svg",
            "linkText": "Read bio",
            "link": "#",
            "linkedinLink": 'https://www.linkedin.com/company/getsift',
            "twitterLink": 'https://x.com/GetSift?s=20',
            "cta": 'Read bio',
        },
        {
            "id": "2",
            "image": "/EventDetail/jason_tran.png",
            "authorDesignation": "Founder & Executive Chairman",
            "authorName": "Jason Tan",
            "linkedIcon": "/EventDetail/linkedIcon.svg",
            "twitter": "/EventDetail/twitter.svg",
            "linkText": "Read bio",
            "link": "#",
            "linkedinLink": 'https://www.linkedin.com/company/getsift',
            "twitterLink": 'https://x.com/GetSift?s=20',
            "cta": 'Read bio',
        },
        {
            "id": "3",
            "image": "/EventDetail/eugene_sung.png",
            "authorDesignation": "Chief Financial Officer",
            "authorName": "Eu-Gene Sung",
            "linkedIcon": "/EventDetail/linkedIcon.svg",
            "twitter": "/EventDetail/twitter.svg",
            "linkText": "Read bio",
            "link": "#",
            "linkedinLink": 'https://www.linkedin.com/company/getsift',
            "twitterLink": 'https://x.com/GetSift?s=20',
            "cta": 'Read bio',
        },
        {
            "id": "4",
            "image": "/EventDetail/chris_jones.png",
            "authorDesignation": "Chief revenuw officer",
            "authorName": "Chris Jones",
            "linkedIcon": "/EventDetail/linkedIcon.svg",
            "twitter": "/EventDetail/twitter.svg",
            "linkText": "Read bio",
            "link": "#",
            "linkedinLink": 'https://www.linkedin.com/company/getsift',
            "twitterLink": 'https://x.com/GetSift?s=20',
            "cta": 'Read bio',
        }
    ]

  return (
        <section className={`${ColFourCardStyle.ColFourCard} relative padding-medium `}>
            <div className="bgImg absolute top-0 left-0 w-full h-full">
                <Image src='/EventDetail/bg-pattern.png' width={1324} height={708} alt="Pattern" />
            </div>
            <div className="container">
                <h3 className='text-white'>Featured speakers at the event</h3>
                <div className="cards-wrap flex flex-wrap w-[calc(100%+24px)] ml-[-12px] mt-[40px]">
                    {cardData.map((card, index) => {
                        return(
                            <div key={index} data-aos="fade-up" data-aos-delay="200" className={`group bg-black relative ${ColFourCardStyle.card} phablet:w-[calc(50%-24px)] sm:w-[calc(100%-24px)] phablet:mx-auto wide-screen:w-[calc(25%-24px)] xxl-up:w-[calc(25%-24px)] cursor-pointer tablet:w-[calc(50%-24px)] tablet-mid:w-[calc(50%-24px)] laptop-mid:w-[calc(33.33%-24px)] laptop:w-[calc(33.33%-24px)] w-[calc(25%-24px)] transition-all mx-[12px] duration-[0.3s] mb-[40px] lg:mb-[24px] border-[2px] border-white rounded-[16px] overflow-hidden shadow-none sm:last:mb-0 outline outline-transparent hover:shadow-white-shadow hover:outline-[1px] hover:outline-white`}>
                            
                                <div className="imgwrap relative h-[242px] md:h-[320px] sm:h-[250px] xxl-mid:h-[285px] xxl-mid-up:h-[415px] lg:hidden wide-screen:h-[370px] tablet-mid:h-[380px] laptop-mid:h-[290px] laptop:h-[340px] w-full overflow-hidden transition-all duration-[0.3s]">
                                    <Link className='emptyLink' href="/">.</Link>
                                    <Image
                                        className="w-full object-cover h-full scale-none group-hover:scale-[1.1] transition-all duration-[0.3s]"
                                        width={200}
                                        height={200}
                                        src={card.image}
                                        alt="card image"
                                    />
									</div>
                                <div className="content p-[32px] pb-[80px] h-full lg:pb-[60px]">
                                    <div className="text-white mb-[20px]">
                                        <h6 className=" uppercase mb-[8px] text-[14px] leading-[16.80px] tracking-[0.56px] pr-[20px]">
                                            {card.authorDesignation}
                                        </h6>
                                        <h4 className=" ">{card.authorName}</h4>
                                    </div>
                                    <div className={`${ColFourCardStyle.shareLinks} flex`}>
                                        <Link
                                            className={`mr-[24px]`}
                                            href={card.linkedinLink}
                                        >
                                            <svg
                                                width="24"
                                                height="25"
                                                viewBox="0 0 24 25"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M20.25 2.68555H3.75C3.35218 2.68555 2.97064 2.84358 2.68934 3.12489C2.40804 3.40619 2.25 3.78772 2.25 4.18555V20.6855C2.25 21.0834 2.40804 21.4649 2.68934 21.7462C2.97064 22.0275 3.35218 22.1855 3.75 22.1855H20.25C20.6478 22.1855 21.0294 22.0275 21.3107 21.7462C21.592 21.4649 21.75 21.0834 21.75 20.6855V4.18555C21.75 3.78772 21.592 3.40619 21.3107 3.12489C21.0294 2.84358 20.6478 2.68555 20.25 2.68555ZM20.25 20.6855H3.75V4.18555H20.25V20.6855ZM9 10.9355V16.9355C9 17.1345 8.92098 17.3252 8.78033 17.4659C8.63968 17.6065 8.44891 17.6855 8.25 17.6855C8.05109 17.6855 7.86032 17.6065 7.71967 17.4659C7.57902 17.3252 7.5 17.1345 7.5 16.9355V10.9355C7.5 10.7366 7.57902 10.5459 7.71967 10.4052C7.86032 10.2646 8.05109 10.1855 8.25 10.1855C8.44891 10.1855 8.63968 10.2646 8.78033 10.4052C8.92098 10.5459 9 10.7366 9 10.9355ZM17.25 13.5605V16.9355C17.25 17.1345 17.171 17.3252 17.0303 17.4659C16.8897 17.6065 16.6989 17.6855 16.5 17.6855C16.3011 17.6855 16.1103 17.6065 15.9697 17.4659C15.829 17.3252 15.75 17.1345 15.75 16.9355V13.5605C15.75 13.0633 15.5525 12.5864 15.2008 12.2347C14.8492 11.8831 14.3723 11.6855 13.875 11.6855C13.3777 11.6855 12.9008 11.8831 12.5492 12.2347C12.1975 12.5864 12 13.0633 12 13.5605V16.9355C12 17.1345 11.921 17.3252 11.7803 17.4659C11.6397 17.6065 11.4489 17.6855 11.25 17.6855C11.0511 17.6855 10.8603 17.6065 10.7197 17.4659C10.579 17.3252 10.5 17.1345 10.5 16.9355V10.9355C10.5009 10.7518 10.5693 10.5749 10.692 10.4382C10.8148 10.3015 10.9834 10.2146 11.166 10.1941C11.3485 10.1735 11.5323 10.2206 11.6824 10.3265C11.8325 10.4325 11.9385 10.5898 11.9803 10.7687C12.4877 10.4245 13.0792 10.225 13.6914 10.1917C14.3036 10.1583 14.9133 10.2923 15.455 10.5794C15.9968 10.8664 16.4501 11.2955 16.7664 11.8208C17.0826 12.346 17.2498 12.9475 17.25 13.5605ZM9.375 8.31055C9.375 8.53305 9.30902 8.75056 9.1854 8.93556C9.06179 9.12057 8.88609 9.26476 8.68052 9.34991C8.47495 9.43506 8.24875 9.45734 8.03052 9.41393C7.81229 9.37052 7.61184 9.26338 7.4545 9.10604C7.29717 8.94871 7.19002 8.74825 7.14662 8.53002C7.10321 8.3118 7.12549 8.08559 7.21064 7.88003C7.29578 7.67446 7.43998 7.49876 7.62498 7.37514C7.80999 7.25153 8.0275 7.18555 8.25 7.18555C8.54837 7.18555 8.83452 7.30407 9.0455 7.51505C9.25647 7.72603 9.375 8.01218 9.375 8.31055Z"
                                                    fill="white" />
                                            </svg>
                                            <span className="text-[0]">.</span>
                                        </Link>
                                        <Link href={card.twitterLink}>
                                            <svg
                                                width="24"
                                                height="25"
                                                viewBox="0 0 24 25"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M17.6074 3.43555H20.5975L14.065 11.0602L21.75 21.4355H15.7327L11.0197 15.1429L5.627 21.4355H2.63506L9.62227 13.2802L2.25 3.43555H8.42007L12.6802 9.18724L17.6074 3.43555ZM16.558 19.6079H18.2148L7.51978 5.16724H5.7418L16.558 19.6079Z"
                                                    fill="white"
                                                />
                                            </svg>
                                            <span className="text-[0]">.</span>
                                        </Link>
                                    </div>
                                    <div className="ctaWrap absolute bottom-[32px] left-[32px] cursor-pointer">
                                        <Link href="/"
                                            aria-label="first link"
                                            className={`group arrow_btn uppercase text-white relative inline-block transition-all tracking-[1.1px]  duration-300 font-[700] leading-[1] pr-[26px] group-hover:text-pink  z-[11]`}
                                        >
                                            <span className="absolute top-1/2 -translate-y-1/2 right-0 w-[20px] overflow-hidden">
                                                <svg
                                                    className="-ml-[5px] duration-300 group-hover:-ml-[1px]"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="17"
                                                    viewBox={`0 0 20 17`}
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z"
                                                        fill="#FF3B84"
                                                    />
                                                </svg>
                                            </span>
                                            {card.cta}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
  )
}
