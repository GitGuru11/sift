import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DynamicButton from '../global-components/Buttons';

export default function AwardCards(props) {
	let data = props.items;
	return (
		<section id={data.id ? data.id : ''} className={`AwardCards award relative laptop-landscape:pb-0 ${data.background} ${data.classes} ${data.padding}`} >
			{
				data?.background == 'custom' && (
					<div className="custom-bg-img absolute left-0 top-[0px] w-full h-full ">
						{data?.backgroundImage && data?.backgroundImage?.sourceUrl && <Image className="w-full h-full object-cover" src={data?.backgroundImage?.sourceUrl} alt={data?.backgroundImage?.altText} width="1200" height="1200" />}
					</div>
				)
			}
			<div className="container">
				<div className="colthreeWrap flex flex-wrap w-[calc(100%+25px)] ml-[-12.5px] no-padding-top">
					{data?.cards && data?.cards.map((data, index) => (

						<div key={index} className={`group relative colThree md-up:pb-[70px] xl:last:mb-0 xl-up:w-[calc(33.33%-25px)] mx-[12.5px] pt-[40px] p-[32px] transition-all desktop:w-[calc(50%-25px)] tablet:w-[calc(50%-25px)] duration-[0.3s] mb-[24px] w-[calc(100%-25px)] rounded-[16px] overflow-hidden hover:shadow-black-shadow cursor-pointer`} >
							{data?.buttons && data?.buttons.map((val, index) => {
								return (
									<>
										{val?.url && <Link key={index} aria-label="first link" href={`${val?.url }`} className={`emptyLink`}></Link>}
									</>
								)
							})
							}
							<div className="award w-full max-w-[182px] h-[205px] mx-auto mb-[32px]">
								{data?.image && data?.image?.sourceUrl && <Image
									className="w-full h-full object-contain group-hover:scale-[1.1] transition-all duration-[0.3s]"
									width={300}
									height={400}
									src={data?.image?.sourceUrl} alt={data?.image?.altText}
								/>}
							</div>
							<div className="content">
								{data?.title && <h3 className="mb-[16px]">{data?.title}</h3>}
								<p className="mb-[20px] small_font">{data?.bodyWithoutEditor}</p>
							</div>
								<div className="btnWrap md-up:absolute md-up:bottom-[32px] ">
									<DynamicButton cta={data?.buttons} />
								</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
