import React from 'react'
import styles from '../../styles/footerCta.module.css'
import Image from 'next/image';
import DynamicButton from '../global-components/Buttons';
function FooterCta(props) {
	let data = props.items;
	return (
        
		<section id = {data.id ? data.id : ''} className={`${data.gatedComponent? 'GatedHide' : ''} footer-cta relative overflow-hidden xl-up:pt-[160px] !pb-[0]  wide-screen:pt-[240px] lg-up:pt-[125px] ${data.background} ${data.classes} ${data.padding}`}>
			<div className="container lg:p-0">
				<div className={`${styles.wrapper} relative flex flex-wrap  items-center rounded-tl-[24px] rounded-tr-[24px] lg:rounded-none justify-end bg-blue w-full  sm:flex-col-reverse`}>
					<div className={`${styles.col_left} w-full sm-up:w-[49%]  lg:mt-8 sm:pr-0 pr-[21px] wide-screen:pr-[110px]`}>
						<div className={`${styles.imageWrap} relative w-full tablet:w-auto lg:inline-block sm:max-w-[350px] max-w-[535px] sm:mb-[-10px]  xxl-up:max-w-[720px]`}>
                            {data?.image && data?.image?.sourceUrl &&
							<Image
								className={`${styles.img} w-full h-full tablet:w-auto lg:-mb-[6px] -mt-[104px] object-cover bottom-0 left-0  desktop:-mt-[88px] lg:mt-0 xxl-up:-mt-[138px] scale-y-[1.04]`}
								src={data?.image?.sourceUrl}
								alt={data?.image?.altText} 
								loading="lazy"
								width={300}
								height={300}
								quality={100}
							/>}
						</div>
					</div>

					<div className={`${styles.col_right}  w-full sm-up:w-[51%]  xl:py-3 lg:px-5 pr-5 xxl-up:py-[60px] lg:mb-3`}>
						   <div className={`lg:pt-[20px] lg-up:pt-[18px] lg-up:pl-[18px]`}>
							{data?.title && <h2 className={`text-white mb-[22px]`} dangerouslySetInnerHTML={{__html: data?.title}}/>}
                            {data?.body &&
							<div className={`text-white max-w-[450px]  mb-[37px] xl:my-[18px]  xxl-up:max-w-[550px] `}
							dangerouslySetInnerHTML={{__html: data?.body}}/>}
							<DynamicButton cta={data?.buttons} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FooterCta;