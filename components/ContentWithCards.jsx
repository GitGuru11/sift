import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ArrowBtn from './button/Black_arrowBtn'
import Style from '../styles/platform/contentWithCard.module.css'

const ContentWithCardsData = [{
                title: 'Headline about our differentiators',
                blurb: 'AI-Powered Fraud Decisioning..'
            },
    {cards:[
        {
        imgpath: '/chats-fill.svg',
            heading: 'AI-Powered Fraud Decisioning..',
            subHeading: 'AI-Powered Fraud Decisioning..',
        ctaText: 'LEARN MORE',
        ctaLink:'/',
    },
    {
        imgpath: '/archive-box.svg',
        heading: 'AI-Powered Fraud Decisioning..',
        subHeading: 'AI-Powered Fraud Decisioning..',
        ctaText: 'LEARN MORE',
        ctaLink:'/',
    },
    {
        imgpath: '/lock-key.svg',
        heading: 'AI-Powered Fraud Decisioning..',
        subHeading: 'AI-Powered Fraud Decisioning..',
        ctaText: 'LEARN MORE',
        ctaLink:'/',
    },
    {
        imgpath: '/git-pull-request-fill.svg',
        heading: 'AI-Powered Fraud Decisioning..',
        subHeading: 'AI-Powered Fraud Decisioning..',
        ctaText: 'LEARN MORE',
        ctaLink:'/',
        }
    ]}
]

function ContentWithCards(props) {
    var sectionData = ContentWithCardsData
    // console.log(sectionData)
  return (
      <section className={`ContentWithCards ${props.bg== 'skyblue' ?'bg-skyblue' : 'bg-white'} overflow-hidden z-10`}>
          <div className="bg-pattern w-[543px] absolute bottom-0 left-0">
                <Image src='/bg-pattern.png' alt='pattern' width={560} height={560} />
            </div>
          <div className="container">
              <div className="wrapper flex flex-wrap w-[calc(100%+54px)] -ml-[27px] sm:w-full sm:ml-0">
                  <div className="col-left w-[calc(49%-54px)] mx-[27px] xl:w-full xl:mb-10 sm:w-full sm:mx-0">
                      <div className="content">
                          <h2>{ sectionData[0].title}</h2>
                          <p className='mt-[16px]'>{ sectionData[0].blurb}</p>
                      </div>
                  </div>
                  <div className="col-right w-[calc(51%-54px)] ml-[26px] mr-[28px] xl:w-full sm:w-full sm:mx-0">
                      <div className="card_wrap w-full grid gap-[24px] grid-cols-2 sm:grid-cols-1" data-aos="fade-up" data-aos-delay="500">
                          {
                              (sectionData[1].cards).map((item ,i) => {
                                  return (
                                      <div key={i} className={`${Style.card} relative bg-white p-[27px] rounded-[16px]`} >
                                          <Link className='emptyLink' href='/homepage'>.</Link>
                                        <div className="icon-wrap mb-[18px]">
                                            <Image src={item.imgpath } alt='icon' width={40} height={40} />
                                        </div>
                                          <h4 className='mb-[9px]'>{ item.heading}</h4>
                                          <p>{item.subHeading}</p>
                                          <div className="btn mt-[22px]">
                                           <ArrowBtn text="LEARN MORE" link="/"/>
                                          </div>
                                </div>
                                  )
                              })
                          }
                          
                      </div>
                  </div>
              </div>
          </div>
      
    </section>
  )
}

export default ContentWithCards
