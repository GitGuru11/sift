import React from 'react';
import Image from 'next/image';
export default function Trademarks(props) {
let data = props.items;
  return (
    <section id={data.id ? data.id : ''} className={`Trademarks bg-black ${data.background} ${data.padding} ${data.classes}`}>
        <div className="container">
          <div className="flex flex-wrap w-[calc(100%+24px)] -ml-[12px] pt-[20px]">
            {
              data?.cards && data?.cards.map((item , index) => (
                <div key={index} className={` w-[calc(33.33%-24px)] phablet:w-[calc(50%-24px)] sm:w-[calc(50%-24px)] xs:w-[calc(100%-24px)] mx-[12px] items-baseline md:mb-[20px]`}>
                    <div className={`md-up:h-[61px] ${item?.title && ' h-[40px]'}`}>
                      {item?.title && <h4>{item?.title}</h4>}
                    </div>
                    <div className="wrap w-full p-[20px] min-h-[192px] xxl-mid-up:min-h-[250px] wide-screen:min-h-[250px] bg-white rounded-[16px] overflow-hidden flex items-center justify-center">
                      <div className="wrap w-[210px] h-[100px] lg:w-[150px] lg:h-[75px] xl:w-[120px] xl:h-[80px] xs:w-[200px] xs:h-[100px]">
                        {item?.logo && item?.logo?.sourceUrl && <Image
                          className="w-auto xl:w-full h-full mx-auto xl:object-contain"
                          src={item?.logo?.sourceUrl}
                          alt={item?.logo?.altText}
                          width="210"
                          height="100"
                          quality={25}
                        />}
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
