import React from 'react'
import Image from 'next/image';
export default function ContentBlocks(props) {
    let data = props.items;
    const bgClass = data?.background;
    return (
        <section id={data.id ? data.id : ''} className={`ContentBlocks ${data.background} ${data.classes} ${data.padding}`}>
            {
				data?.background == 'custom' && (
					<div className="custom-bg-img absolute left-0 top-[0px] w-full h-full ">
						{data?.backgroundImage && data?.backgroundImage?.sourceUrl && <Image className="w-full h-full object-cover" src={data?.backgroundImage?.sourceUrl} alt={data?.backgroundImage?.altText} width="1200" height="1200" />}
					</div>
				)
			}
            <div className="container">
                <div className="colthreeWrap flex flex-wrap w-[calc(100%+25px)] ml-[-12.5px] ">
                    {data?.columns && data?.columns.map((data, index) => (
                        <div key={index} className={` colThree w-[calc(33.33%-25px)] mx-[12.5px] border-t-[1px] ${bgClass === 'bg-skyblue' || bgClass === 'bg-white'?'border-black':'border-white'} pt-[16px] tablet:w-[calc(50%-25px)] lg:mb-[24px]  md:w-[calc(100%-25px)]`}>
                            <h4 className='mb-[24px]'>{data?.title}</h4>
                            <div className='xxl:text-[16px]' dangerouslySetInnerHTML={{ __html: data?.body }}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
