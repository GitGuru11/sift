import React from 'react'
import Image from 'next/image'
import DynamicButton from '../global-components/Buttons';

export default function FullWidthImageAndContentCard(props) {
    let data = props.items;
    return (
        <section id={data.id ? data.id : ''} className={`FullWidthImageAndContentCard ${data.background} ${data.classes} ${data.padding}`}>
            <div className="container">
                <div className="card rounded-[24px] overflow-hidden">
                    {data?.image && data?.image?.sourceUrl && <div className="imgWrap laptop-landscape:h-[400px] sm:h-[180px]">
                        <Image
                            width={1000}
                            height={1000}
                            className="w-full h-full object-cover"
                            src={data?.image?.sourceUrl}
                            alt={data?.image?.altText}
                        />
                    </div>}
                    <div className="flex flex-wrap pt-[65px] px-[48px] desktop-mid:px-[38px] laptop-landscape:py-[50px] bg-darkBlue md:flex-wrap md:px-8 md:py-10 pb-[72px] md:pb[20px] tablet:pb-[40px] desktop:pb-[60px]">
                        <div className=" w-[55%] desktop:w-full desktop:mb-[20px] md:w-full">
                            {data?.title && <h2 className='text-white' dangerouslySetInnerHTML={{ __html: data?.title }}></h2>}
                            {data?.bodyWithoutEditor && <p className='text-white mt-[16px]' dangerouslySetInnerHTML={{ __html: data?.bodyWithoutEditor }}></p>}
                            <div className="mt-[29px] md:mt-[24px]">
                                <DynamicButton cta={data?.buttons} />
                            </div>
                        </div>
                        {data?.rightColumn && <div className=" w-[45%] desktop:w-full  desktop:pl-0 desktop:pt-0 md:w-full pl-[61px] desktop-mid:pl-[10px] pt-[27px] sm:mt-[20px] phablet:mt-[20px] md:pl-0 md:pt-0">
                            {data?.rightColumn?.heading && <p className='small_font uppercase text-oceanGreen !font-[700]'
                                dangerouslySetInnerHTML={{ __html: data?.rightColumn?.heading }}></p>}
                            {data?.rightColumn?.body && <div className='list-wrap text-white' dangerouslySetInnerHTML={{ __html: data?.rightColumn?.body }}></div>}
                        </div>}
                    </div>
                </div>
            </div>
        </section>
    )
}
