import React from 'react';
import Image from 'next/image';
import DynamicButton from '../global-components/Buttons';
export default function BorderImageWithText(props) {
	let data = props.items;
	return (
		<section id={data.id ? data.id : ''} className={`BorderImageWithText min-h pb-[64px] relative wide-screen:pb-[160px] tablet-mid:min-h-[380px] laptop-mid:min-h-[500px] laptop-landscape:min-h-[480px!important] laptop:min-h-[500px] tablet:min-h-[470px] phablet:min-h-[650px] sm:min-h-[600px] xs:min-h-[745px] xxl-up:min-h-[600px] min-h-[570px] overflow-hidden md:mt-0 pt-0 ${data.background} ${data.classes} ${data.padding}`}>
			{
				data?.background == 'custom' && (
					<div className="custom-bg-img absolute left-0 top-[0px] w-full h-full ">
						{data?.backgroundImage && data?.backgroundImage?.sourceUrl && <Image className="w-auto h-full object-cover" src={data?.backgroundImage?.sourceUrl} alt={data?.backgroundImage?.altText} width="1200" height="1200" />}
					</div>
				)
			}
			<div className="img-box absolute right-[77px] -bottom-[3px] w-auto xxl-up:h-[600px] laptop-landscape:h-[430px!important] laptop:right-[40px] laptop:h-[460px] laptop-mid:h-[430px] h-[585px] xxl-up:right-[78px] wide-screen:right-[258px] wide-screen:h-[760px] tablet-mid:h-[330px] tablet-mid:right-[30px] tablet:right-[30px] tablet:h-[380px] phablet:h-[410px] sm:h-[322px] xs:h-[280px] xs:right-0 xs:left-[-50px]">
				{data?.image && data?.image?.sourceUrl && <Image className="w-full h-full object-cover xs:object-contain" src={`${data?.image?.sourceUrl}`} alt={`${data?.image?.altText}`} width="865" height="610" />}
			</div>
			<div className="container">
				<div className="w-[50%] flex md:w-full ">
					<div className=" md:mt-[0!important] max-w-[620px] xxl-up:max-w-[100%] lg:max-w-[549px] desktop-laptop:max-w-[550px] wide-screen:max-w-[1000px] laptop:mt-[50px] desktop:mt-[50px] laptop-landscape:mt-[70px] lg:mt-[70px] ">
						<div className="relative intro mb-[45px] xl:mb-[32px] tablet-mid:mb-0 items-end w-full z-10 laptop-landscape:mb-[40px] mt-[20px] xl:mt-[20px] xxl-up:mt-[20px]">
							<div className={`w-full mb-[20px] xl:mb-[24px] lg:mb-[16px!important] laptop-landscape:mb-[13px] `}>
								<h2 className="text-black ">{data?.title}</h2>
							</div>
							<div className={` md:p-0 laptop-landscape:pr-[98px] text-black xxl-up:pr-[70px]`} dangerouslySetInnerHTML={{ __html: data?.body }}></div>
							<div className="mt-[30px] md:mt-[24px]">
								<DynamicButton cta={data?.buttons} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
