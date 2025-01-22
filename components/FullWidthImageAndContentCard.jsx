import React from 'react'
import Image from 'next/image'
import Btn_Transparent from "./button/Button_Transparent";

export default function FullWidthCard() {
    const intro = {
		PreNormalText: 'Headline about platform ',
		HighLightedText: ' pricing',
		bg: 'black',
		blurb:
			'AI-Powered Fraud Decisioning..',
        cta: 'Optional CTA',
		link: '/',
	};
    
    const linkData = [
        {
            link: 'AI-Powered Fraud Decisioning..',
        },
        {
            link: 'AI-Powered Fraud Decisioning..',
        },
        {
            link: 'AI-Powered Fraud Decisioning..',
        },
        {
            link: 'AI-Powered Fraud Decisioning..',
        },
        {
            link: 'AI-Powered Fraud Decisioning..',
        },
        {
            link: 'AI-Powered Fraud Decisioning..',
        },
    ]
  return (
    <section className='FullWidthImageAndContentCard bg-[#fff] no-padding-bottom ' id='pricing'>
        <div className="container">
            <div className="card rounded-[24px] overflow-hidden">
            <div className="imgWrap laptop-landscape:h-[400px] sm:h-[180px]">
                <Image
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                    src="/platform_image.png"
                    alt="Tab Image"
                />
            </div>
            <div className="flex flex-wrap pt-[65px] px-[48px] desktop-mid:px-[38px] laptop-landscape:py-[50px] bg-darkBlue md:flex-wrap md:px-8 md:py-10 pb-[72px] md:pb[20px] tablet:pb-[40px] desktop:pb-[60px]">
                      <div className=" w-[55%] desktop:w-full desktop:mb-[20px] md:w-full">
                          <h2 className='text-white'>{intro.PreNormalText}<span className='text-oceanGreen'>{intro.HighLightedText}</span></h2>
                          <p className='text-white mt-[16px]'>{intro.blurb}</p>
                          <div className="mt-[29px] md:mt-[24px]">
                            <Btn_Transparent text={intro.cta} link={intro.link} />
                        </div>
                        </div>
                        <div className=" w-[45%] desktop:w-full  desktop:pl-0 desktop:pt-0 md:w-full pl-[61px] desktop-mid:pl-[10px] pt-[27px] sm:mt-[20px] phablet:mt-[20px] md:pl-0 md:pt-0">
                            <p className='small_font uppercase text-oceanGreen !font-[700]'>All capabilities are included:</p>
                            <ul className=" list pl-[20px] sm:pl-[20px] list-disc mt-[9px] desktop-mid:pl-[22px]">
                                {linkData.map((link, index) => (
                                    <li key={index} className="tracking-[1px] text-white mb-[2px]">
                                        <p className='xl-up:-ml-[5px] text-white'>{link.link}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
            </div>
          </div>
          <style jsx>{`
          .list li::marker{
            font-size:24px;
          }
        .
      `}</style>

    </section>
  )
}
