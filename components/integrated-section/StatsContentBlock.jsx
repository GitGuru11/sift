import React from 'react';
import Image from 'next/image';
export default function StatsContentBlock(props) {
	let data = props.items;
	return (
		<section id={data.id ? data.id : ''} className={`StatsContentBlock -mt-[14px] ${data.gatedComponent? 'GatedHide' : ''}  ${data.background} ${data.padding} ${data.classes}`}>
			{
				data?.background == 'custom' && (
					<div className="custom-bg-img absolute left-0 top-[0px] w-full h-full ">
						{data?.backgroundImage?.sourceUrl && <Image className="w-full h-full object-cover" src={data?.backgroundImage?.sourceUrl} alt={data?.backgroundImage?.altText} width="1200" height="1200" />}
					</div>
				)
			}
			<div className="container">
				<div className="relative intro mb-[40px] xl:mb-[32px] items-end w-full z-10">
					<div className="w-[83%] mb-[25px] lg-up:pr-3 xl:mb-5 laptop-landscape:mb-[13px] text-white">
						{data?.heading && <h3 className={`${data.classes?.includes('sift-for-checkout-stats-block') ? 'xl-up:text-[60px]' : 'xl-up:text-[32px]'}`}  dangerouslySetInnerHTML={{__html: data?.heading}}></h3>}
					</div>
				</div>
				<div className="colthreeWrap flex flex-wrap w-[calc(100%+28px)] ml-[-28px]">
					{data?.columns && data?.columns.map((col, index) => (
						<div key={index} className={`colThree w-[calc(33.33%-56px)] text-white mx-[28px] lg:mb-[30px] tablet:w-[calc(50%-56px)] md:w-[calc(100%-56px)]`}>
							<div className="count">
								{col?.number &&<span className="text-amber-400 h1 relative z-10">
									{col?.number}
								</span> }
								{col?.symbol && <span className="heading_48 text-amber-400 relative z-10">
									{col?.symbol}
								</span>}
							</div>
							<div className="text_wrap pt-[40px] lg:pt-[24px] mt-[16px] border-t-[1px] border-white">
								{col?.title && <h4 dangerouslySetInnerHTML={{__html: col?.title}}></h4>}
								{col?.bodyWithoutEditor && <div dangerouslySetInnerHTML={{__html: col?.bodyWithoutEditor}} className='xl-up:text-[16px] mt-[8px]'></div>}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}