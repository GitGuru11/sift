import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useRef, useState, useMemo} from 'react'
import ArrowBtn from './button/Black_arrowBtn'
import Style from '../styles/platform/contentWithCard.module.css'


const ContentWithCardsData = [{
                title: 'Headline about our innovations',
                blurb: 'AI-Powered Fraud Decisioning..'
            },
    {cards:[
        {
        imgpath: '/logos/file-arrow-down-fill.svg',
        heading: 'AI-Powered Fraud Decisioning..',
        subHeading: 'AI-Powered Fraud Decisioning..',
        ctaText: 'LEARN MORE',
        ctaLink:'/',
    },
    {
        imgpath: '/logos/file-arrow-down-fill.svg',
        heading: 'AI-Powered Fraud Decisioning..',
        subHeading: 'AI-Powered Fraud Decisioning..',
        ctaText: 'LEARN MORE',
        ctaLink:'/',
    },
    {
        imgpath: '/logos/file-arrow-down-fill.svg',
        heading: 'AI-Powered Fraud Decisioning..',
        subHeading: 'AI-Powered Fraud Decisioning..',
        ctaText: 'LEARN MORE',
        ctaLink:'/',
    },
    {
        imgpath: '/logos/file-arrow-down-fill.svg',
        heading: 'AI-Powered Fraud Decisioning..',
        subHeading: 'AI-Powered Fraud Decisioning..',
        ctaText: 'LEARN MORE',
        ctaLink:'/',
        }
    ]}
]

function ContentWithCards(props) {
    var sectionData = ContentWithCardsData

    const ref1 = useRef(null);
    const [view, setView] = useState(false)

    const handleIntersection = (entries) => {
        if (entries[0].isIntersecting == true) {
            setTimeout(() => {
                setView(true)
            }, 300)
        }
    };
    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
          root: null,
          threshold: 0.5,
        });
    
        observer.observe(ref1.current)
        return () => {
          observer.disconnect();
        };
    });

   
  return (
      <section className={`tbd-content-with-cards-2  relative ${props.bg== 'skyblue' ?'bg-skyblue' : 'bg-white'}  overflow-hidden`} id='innovation'>
          <div className="bg-pattern w-[543px] absolute bottom-0 left-0">
                <Image src='/bg-pattern-2.png' alt='pattern' width={560} height={560} />
            </div>
          <div className="container">
              <div className="wrapper h-full flex flex-wrap w-[calc(100%+54px)] -ml-[27px]">
                  <div className="col-left w-[calc(49%-54px)] mx-[27px] xl:w-full xl:mb-10">
                      <div className="content">
                          <h2>{ sectionData[0].title}</h2>
                          <p className='mt-[16px]'>{ sectionData[0].blurb}</p>
                      </div>
                  </div>
                  <div ref={ref1} className={`relative col-right w-[calc(51%-54px)] ml-[26px] mr-[28px] xl:w-full ${view?'aos-init aos-animate':''}`} data-aos="fade-up"  data-aos-offset="-400">
                      
                      <div className="card_wrap w-full grid gap-[24px] grid-cols-2 sm:grid-cols-1" >
                          {
                              (sectionData[1].cards).map((item ,i) => {
                                  return (
                                      <div key={i} className={`${Style.card} relative bg-white p-[27px] rounded-[16px]`} >
                                          <Link className='emptyLink' href='/homepage'>.</Link>
                                        {/* <div className="icon-wrap mb-[18px]">
                                            <Image src={item.imgpath } alt='icon' width={40} height={40} />
                                        </div> */}
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
