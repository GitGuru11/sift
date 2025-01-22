import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

function TitleWithBadges(props) {
	let data = props.items;
  return (
		<section id={data.id ? data.id : ''}
			className={`TitleWithBadges lg:pt-[64px!important] z-10 lg:bg-white ${data.background} ${data.padding} ${data.classes}`}>
		  {
				data?.background == 'custom' && (
					<div className="custom-bg-img absolute left-0 top-[0px] w-full h-full ">
						{data?.backgroundImage?.sourceUrl && <Image className="w-full h-full object-cover" src={data?.backgroundImage?.sourceUrl} alt={data?.backgroundImage?.altText} width="1200" height="1200" />}
					</div>
				)
			}
			<div className="container">
				<div className="bg-white lg:items-start w-full min-h-[345px] lg:min-h-full desktop:min-h-[250px] laptop-landscape:min-h-[280px] xxl-up:py-[100px] wide-screen:py-[140px] wide-screen:pl-[146px] wide-screen:pr-[151px] wide-screen:rounded-[300px] rounded-[224px] lg:rounded-[0] px-[90px] desktop:px-[75px] lg:px-[0px]  justify-between items-center inline-flex md:block">
					<div className="w-[40%] laptop-landscape:w-[45%] md:w-full pl-[5px] flex-col justify-start items-start gap-1 inline-flex md:mb-[24px]">
						{data?.icon && (
							<div className="w-10 h-10 wide-screen:w-[71px] wide-screen:h-[71px]">
								{data?.icon?.sourceUrl && <Image
									className="h-full w-full object-contain"
									src={data?.icon?.sourceUrl}
									alt={data?.icon?.altText}
									width={40}
									height={40}
								/>}
							</div>
						)}
						{data?.title && <h3 dangerouslySetInnerHTML={{ __html: data?.title }} />}
					</div>
					<div className="w-[55%] xxl:max-w-[540px] xxl-up:w-[50%] md:max-w-full md:w-full md-up:pr-[8px] wide-screen:max-w-[872px] wide-screen:w-[60%]">
					  <div className="flex flex-wrap items-center md:w-full w-[calc(100%+20px)] wide-screen:w-[calc(100%+40px)] wide-screen:-mr-[20px] md:mr-0 -mr-[10px]">
							{data?.images && data?.images.map((item, i) =>
								item?.link ? (
									<Link
										href={item?.link}
										aria-label={`link-${i + 1}`}
										className="m-w-[100px] lg:pr-0 pr-[17px] wide-screen:pr-[0] lg:w-[calc(50%-20px)] xl:my-[10px] relative wide-screen:mx-[20px] wide-screen:w-[calc(25%-40px)] w-[calc(25%-20px)] lg:h-[126px] mx-[10px] hover:scale-105 transition-all "
										key={i}>
										{item?.image && item?.image?.sourceUrl && (
											<Image
												className="mx-auto w-full lg:h-full lg:max-w-fit"
												src={item?.image?.sourceUrl}
												alt={`logo-${i + 1}`}
												width={189}
												height={253}
											/>
										)}
									</Link>
								) : (
									<div className="m-w-[100px] lg:pr-0 pr-[17px] wide-screen:pr-[0] lg:w-[calc(50%-20px)] xl:my-[10px] relative wide-screen:mx-[20px] wide-screen:w-[calc(25%-40px)] w-[calc(25%-20px)] lg:h-[126px] mx-[10px] hover:scale-105 transition-all "
										key={i}>
										{item?.image && item?.image?.sourceUrl && (
											<Image
												className="mx-auto w-full h-full xxl:max-w-fit"
												src={item?.image?.sourceUrl}
												alt={`logo-${i + 1}`}
												width={189}
												height={253}
											/>
										)}
									</div>
								),
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default TitleWithBadges;
