import React, { useState } from 'react';
import Image from 'next/image';
export default function BannerWithColumns(props) {
	let data = props.items;
    return (
        <>
            <section id={data.id ? data.id : ''} className={`banner-forth-level banner bg-black md:pt-[80px] overflow-hidden padding-medium-bottom ${data.background} ${data.classes} ${data.padding}`}>
                <div className="container">
                    <div className="intro laptop:mt-[70px] desktop:mt-[50px] xl-up:mt-[19px] laptop-landscape:mt-[70px] lg:mt-[40px]">
                        {data?.title && <h1 className='mb-[32px] lg:mb-[30px]' dangerouslySetInnerHTML={{ __html: data?.title }}></h1>}
                        {data?.bodyWithoutEditor && <div dangerouslySetInnerHTML={{ __html: data?.bodyWithoutEditor }}></div>}
                    </div>
                    <div className="colthreeWrap flex flex-wrap w-[calc(100%+28px)] tablet:w-[calc(100%+20px)] -ml-[14px] tablet:-ml-[10px]  mt-[47px] laptop-landscape:pt-0 wide-screen:mt-[80px] laptop:mt-[40px] xl-up:pt-[17px] desktop:mt-[40px] laptop-landscape:mt-[30px] tablet:mt-[30px] md:mt-[30px]  md:w-full md:mx-0">
                        {data?.columns && data?.columns.map((item, index) => (
                            <div key={index} className={`colThree w-[calc(33.33%-28px)] text-white mx-[14px] pt-[16px] lg:pt-0 laptop-landscape:pt-[0]  lg:mb-[24px] tablet:mx-[10px] tablet:w-[calc(50%-20px)] md:w-full md:mx-0`}>
                                {item?.icon && <div className="imgWrap mb-[8px]">
                                    <Image width={40} height={40} src={item?.icon?.sourceUrl} alt={item?.icon?.altText} />
                                </div>}
                                {item?.title && <h4 className="mb-[15px]" dangerouslySetInnerHTML={{ __html: item?.title }}></h4>}
                                {item?.bodyWithoutEditor && <p className='small_font max-w-[345px] wide-screen:max-w-[calc(100%-50px)]' dangerouslySetInnerHTML={{ __html: item?.bodyWithoutEditor }}></p>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}