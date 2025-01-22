import React from 'react'
import IntroWithCta from './IntroWithCta'
import Image from 'next/image';
export default function Trademarks() {
  const intro = {
		PreNormalText: 'Trademarks',
		bg: 'black',
		link: '/',
		cta: 'Link to USPTO',
		blurb:'Sift Science Inc. (“Sift”) uses the terms and/or logos (“Sift Trademarks”) below as active trademarks in branding its products and services. The Sift brand is an important symbol of our mission to help everyone trust the Internet. We have registered or applied for registration of these trademarks in the United States and other countries around the world.',
	};
  const data = [
    {
      title: 'Wordmark: Sift',
      imgUrl: '/Trademarks/sift.svg',
    },
    {
      title: 'Logos',
      imgUrl: '/Trademarks/full-color-logo.svg',
    },
    {
      imgUrl: '/Trademarks/logo.svg',
    },
  ]
  return (
    <section className='Trademarks bg-black'>
        <div className="container">
          <IntroWithCta {...intro}/>
          <div className="flex flex-wrap w-[calc(100%+24px)] -ml-[12px] pt-[20px]">
            {
              data.map((data , index) => (
                <div key={index} className={` w-[calc(33.33%-24px)] phablet:w-[calc(50%-24px)] sm:w-[calc(50%-24px)] xs:w-[calc(100%-24px)] mx-[12px] items-baseline md:mb-[20px]`}>
                    <div className={`md-up:h-[61px] ${data.title && ' h-[40px]'}`}>
                      {data.title && <h4>{data.title}</h4>}
                      
                    </div>
                    <div className="wrap w-full p-[20px] min-h-[192px] xxl-mid-up:min-h-[250px] wide-screen:min-h-[250px] bg-white rounded-[16px] overflow-hidden flex items-center justify-center">
                      <div className="wrap xl:w-[190px] xl:h-[80px] xs:w-[200px] xs:h-[100px]">
                        <Image
                          className="w-auto xl:w-full h-full object-cover xl:object-contain"
                          src={data.imgUrl}
                          alt="top"
                          width="500"
                          height="500"
                          quality={25}
                        />
                      </div>
                    </div>
                </div>
              ))
            }
          </div>
        </div>
    </section>
  )
}
