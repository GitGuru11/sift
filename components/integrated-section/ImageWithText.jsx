import React from 'react';
import Image from 'next/image';
import DynamicButton from '../global-components/Buttons';
const ColTwoCard = (val) => {
    let items = val.data;
    return (
        <>
            {items?.rows &&
                items?.rows.map((row, i) => {
                    return (
                        <div key={i} className={`${row?.imagePosition == 'left' ? '' : 'flex-row-reverse '} wrapper flex flex-wrap w-[calc(100%+20px)] items-center -ml-[10px] `}>
                            <div className="col-two w-[calc(50%-20px)] desktop:w-[calc(50%-20px)] xxl-mid-up:w-[calc(45%-20px)] wide-screen:w-[calc(45%-20px)] sm:w-full lg:mb-[20px] mx-[10px] c-down:w-full c-down:max-w-[500px]">
                                {row?.image?.sourceUrl && (
                                    <div className={`${row.imagePosition == 'left' ? 'lg-up:pr-[38px]' : 'lg-up:pl-[38px] ml-auto'} img-wrap lg:max-w-[500px] sm:max-w-[330px!important] sm:mx-auto  laptop-landscape:max-w-[500px] md:max-w-[500px]  c-down:pt-0`}>
                                        <Image className=" rounded-[16px]" src={row?.image?.sourceUrl} alt={row?.image?.altText} width={700} height={700} quality={75} />
                                    </div>
                                )}
                            </div>
                            <div className="col-two w-[calc(50%-20px)] desktop:w-[calc(50%-20px)] xxl-mid-up:w-[calc(55%-20px)] wide-screen:w-[calc(55%-20px)] sm:w-full mx-[10px] c-down:w-full c-down:mt-10">
                                <div className="content_wrap lg:pl-0 desktop:pl-0 c-down:pl-0">
                                    <h2 className='mb-[24px] lg:mb-[15px]'>{row?.title}</h2>
                                    <div dangerouslySetInnerHTML={{__html: row?.body}}></div>
                                    <div className="btn mt-[24px] lg:mt-[15px] inline-block mr-[15px] tablet:mb-[10px] desktop-mid:mb-[10px]">
                                        <DynamicButton cta={row?.buttons} />
                                    </div>
                                    {row?.quoteRow && row?.quoteRow?.quote && (
                                        <div className="quotation-block pt-[40px] mt-[24px] lg:mt-[20px] sm:pt-[20px] border-t-[1px] border-black">
                                            <div className="flex sm:flex-wrap ">
                                                <div className="w-[40px] h-[40px] relative">
                                                    <Image
                                                        className="w-full h-full object-cover"
                                                        src="/logos/quotation-mark-blue.png"
                                                        alt="top"
                                                        width="40"
                                                        height="40"
                                                    />
                                                </div>
                                                <div className="w-[calc(100%-40px)] sm:w-full sm:pl-0 sm:mt-[10px] pl-[16px] text-black">
                                                    <h4 dangerouslySetInnerHTML={{__html: row?.quoteRow?.quote}}></h4>
                                                </div>
                                            </div>
                                            <div className="flex items-center pt-[18px] pl-[56px] sm:pl-0">
                                                <div className="w-[28%] desktop:w-[60%] lg:w-[50%]  sm:w-[50%] relative">
                                                    <p className="text-black small_font font-bold" dangerouslySetInnerHTML={{__html: row?.quoteRow?.authorName}}></p>
                                                    <p className="text-black small_font font-normal" dangerouslySetInnerHTML={{__html: row?.quoteRow?.designation}}></p>
                                                </div>
                                                <div className="max-[110px] pl-[40px] sm:pl-0">
                                                    {row?.quoteRow?.logo?.sourceUrl && (
                                                        <Image
                                                            src={row?.quoteRow?.logo?.sourceUrl} alt={row?.quoteRow?.logo?.altText}
                                                            width="187"
                                                            height="23"
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
        </>
    )
}

function ImageWithText(props) {
    let dataArr = props.items;
    return (
        <section id={dataArr.id ? dataArr.id : ''} className={`${dataArr.gatedComponent? 'GatedHide' : ''} ImageWithText bg-white ${dataArr.background} ${dataArr.classes} ${dataArr.padding}`} >
            {
				dataArr?.background == 'custom' && (
					<div className="custom-bg-img absolute left-0 top-[0px] w-full h-full ">
						{dataArr?.backgroundImage?.sourceUrl && <Image className="w-full h-full object-cover" src={dataArr?.backgroundImage?.sourceUrl} alt={dataArr?.backgroundImage?.altText} width="1200" height="1200" />}
					</div>
				)
			}
            <div className="container">
                <ColTwoCard data={dataArr} />
            </div>
        </section>
    );
}



export default ImageWithText
