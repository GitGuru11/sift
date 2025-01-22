// ColThreeGrid.jsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Arrow_Btn from '../button/Arrow_Btn';
const ColThreeGrid = (props) => {
 let data = props.items;
  return (
		<section id={data.id ? data.id : ''} className={`${data.gatedComponent? 'GatedHide' : ''} xl-up:pt-[64px] xl-up:pb-[64px] ColThreeGrid relative wide-screen:pt-[100px] laptop-landscape:py-0 ${data.background} ${data.padding} ${data.classes}`}>
		  {
				data?.background == 'custom' && (
					<div className="custom-bg-img absolute left-0 top-[0px] w-full h-full ">
						{data?.backgroundImage && data?.backgroundImage?.sourceUrl && <Image className="w-full h-full object-cover" src={data?.backgroundImage?.sourceUrl} alt={data?.backgroundImage?.altText} width="1200" height="1200" />}
					</div>
				)
			}
			<div className="container">
				<div className={`relative flex wide-screen:gap-9 gap-6 desktop:gap-4 z-10 flex-wrap`}>
					{data?.cards && data?.cards.map((card, index) => (
						<div
							key={index}
							className={`card relative overflow-hidden bg-black border-[2px] border-white rounded-[10px]  gap-x-5  first-card border-transparent  wide-screen:basis-[calc(33.33%-24px)] basis-[calc(33.33%-16px)] desktop:basis-[calc(33%-12px)]  lg:basis-full hover:shadow-white-shadow hover:border-white outline outline-transparent outline-1 hover:outline-white transition-all  duration-500`}
						>
							<div className="flex pt-[20px] h-full laptop-landscape:pt-[10px] wide-screen:gap-6 gap-4 desktop:gap-4 tablet:gap-7">
								{card?.links && card?.links[0]?.url && (
									<Link
										href={card?.links[0]?.url}
										aria-label="first link"
										className="absolute left-0 top-0 w-full h-full z-10"
									></Link>
								)}
								<div className="shrink-0 grow-0">
									<div className="wide-screen:w-[130px] w-[80px] desktop:w-[64px] lg:w-[70px] lg:max-h-64 relative ">
										<Image
											className="w-full h-full"
											src="/yellow-bg-stats.svg"
											alt="yellow graphic"
											width={200}
											height={200}
										/>
										{card?.number && (
											<span className="text-black font-bold leading-none absolute top-[10%] left-[50%] translate-x-[-45%] wide-screen:text-6xl text-[40px] xl:text-[27px] sm:text-[24px] ">
												{card?.number}
											</span>
										)}
									</div>
								</div>
								<div className="pt-[10px] laptop-landscape:pt-[5px] pb-8 pr-3 basis-[70%]">
									{card?.title && <h4 className="text-white">{card?.title}</h4>}
									{card?.body && (
										<div
											className="text-white mt-[7px]"
											dangerouslySetInnerHTML={{ __html: card?.body }}
										/>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ColThreeGrid;
