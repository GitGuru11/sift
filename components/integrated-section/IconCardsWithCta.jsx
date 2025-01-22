import Image from 'next/image';
import React, { useEffect } from 'react';
import DynamicButton from '../global-components/Buttons';
import Styles from '../../styles/platform/contentWithCard.module.css';
import DynamicLink from '../global-components/Links';
function IconCardsWithCta(props) {
	let data = props.items;
	return (
		<section id = {data.id ? data.id : ''}
			className={`IconCardsWithCta relative overflow-hidden into-with-four-cards ${data.background} ${data.classes} ${data.padding}`}>
			{
				data?.background == 'custom' && (
					<div className="custom-bg-img absolute left-0 top-[0px] w-full h-full ">
						{data?.backgroundImage && data?.backgroundImage?.sourceUrl && <Image className="w-full h-full object-cover" src={data?.backgroundImage?.sourceUrl} alt={data?.backgroundImage?.altText} width="1200" height="1200" />}
					</div>
				)
			}
			<div className="bg-pattern w-[543px] absolute bottom-0 left-0">
				<Image src="/bg-pattern.png" alt="pattern" width={560} height={560} />
			</div>
			<div className="container">
				<div className={` flex flex-wrap w-[calc(100%+24px)] ml-[-12px]  sm:mt-0 laptop-landscape:mt-[40px]`}
					data-aos="fade-up"
					data-aos-delay="500">
					{data?.cards && data?.cards.map((card, index) => (
						<div key={index} className={`${Styles.card} relative  w-[calc(25%-24px)] small-laptop:w-[calc(33.33%-24px)] small-laptop:mb-[20px] m-[12px] overflow-hidden border-none border rounded-[16px] desktop:w-[calc(50%-20px)] desktop:m-[10px] lg:m-[10px]  tablet:w-[calc(50%-24px)] phablet:w-[calc(50%-24px)] sm:w-full`}>
							<div className={`inner-card relative  flex flex-col duration-500 h-full bg-white overflow-hidden pt-[35px] tablet:px-[25px] tablet:pt-[25px] px-[30px] lg:pb-[50px] desktop:pb-[60px] xl-up:pb-[68px]`}>
								<DynamicLink cta={card?.buttons} />
								{card?.image && card?.image?.sourceUrl && <div className={`img-wrap w-[38px]  overflow-hidden mb-[22px] lg:mb-[15px]`}>
									<Image
										src={card?.image?.sourceUrl} alt={card?.image?.altText}
										className="w-full h-full object-contain duration-500"
										height={40}
										width={40}
										quality={100}
									/>
								</div>}
								{card?.heading && <span className="!text-yello eyebrow text-[14px] wide-screen:text-[18px] fontInter font-[700] inline-block uppercase mb-[6px]">
									{card?.heading}
								</span>}
								{card?.title && <h4 className=" font-semibold mb-[9px]">{card?.title}</h4>}
								{card?.bodyWithoutEditor && <p>{card?.bodyWithoutEditor}</p>}
								{!card?.bodyWithoutEditor && card?.blurb && <div dangerouslySetInnerHTML={{ __html: card?.blurb }}></div>}
								<div className="mt-9 z-10 absolute bottom-[28px] lg:bottom-[20px] desktop:bottom-[28px]">
								<DynamicButton cta={card?.buttons} />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default IconCardsWithCta;
