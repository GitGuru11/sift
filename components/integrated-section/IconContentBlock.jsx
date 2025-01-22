import React from 'react';
import IntroWithCta from './IntroWithCta';
import Image from 'next/image';
export default function IconContentBlock(props) {
    let data = props.items;
	return (
        <section id={data.id ? data.id : ''} className={`IconContentBlock overflow-hidden ${data.background} ${data.classes} ${data.padding}`}>
            {
				data?.background == 'custom' && (
					<div className="custom-bg-img absolute left-0 top-[0px] w-full h-full ">
						{data?.backgroundImage && data?.backgroundImage?.sourceUrl && <Image className="w-full h-full object-cover" src={data?.backgroundImage?.sourceUrl} alt={data?.backgroundImage?.altText} width="1200" height="1200" />}
					</div>
				)
			}
            <div className="container">
                <div className="colthreeWrap relative flex flex-wrap w-[calc(100%+48px)] tablet:w-[calc(100%+30px)] -ml-[24px] tablet:-ml-[15px] laptop-landscape:mt-0  wide-screen:mt-[20px] xl:mt-0 lg:mt-0 md:w-full md:mx-0 z-[10]">
                {data?.columns && data?.columns.map((data , index) => (
                    <div key={index} className={`colThree w-[calc(33.33%-48px)] text-white mx-[24px] pt-[16px] lg:pt-0 laptop-landscape:pt-[0] rounded-[20px] mb-[24px] md:last:mb-[0] tablet:mx-[15px] tablet:w-[calc(50%-30px)] md:w-full md:mx-0`}>
                        <div className="imgWrap mb-[8px] w-[60px] h-[50px]">
                            {data?.image && data?.image?.sourceUrl && <Image className='object-contain w-full h-full ' width={60} height={60} src={data?.image?.sourceUrl} alt={data?.image?.altText}/>}
                        </div>
                        <h4 className='mb-[16px]'>{data?.title}</h4>
                        <p>{data?.bodyWithoutEditor}</p>
                    </div>
                ))}
            </div>
            </div>
		</section>
	);
}