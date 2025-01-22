import Image from 'next/image';
import React, { useEffect } from 'react';
import DynamicLinks from '../global-components/Links';

function OverviewWithStats(props) {
	let data;
	data = props.items;
	return (
		<section id={data.id ? data.id : ''}
			className={`OverviewWithStats bg-skyblue wide-screen:pb-[350px] ${data?.background} ${data?.classes} ${data?.padding}`}>
			{
				data?.background == 'custom' && (
					<div className="custom-bg-img absolute left-0 top-[0px] w-full h-full ">
						{data?.backgroundImage?.sourceUrl && <Image className="w-full h-full object-cover" src={data?.backgroundImage?.sourceUrl} alt={data?.backgroundImage?.altText} width="1200" height="1200" />}
					</div>
				)
			}
			<div className="bg-graphic absolute bottom-0 left-0 w-[540px]  laptop:w-[300px] xl:w-[300px] laptop-landscape:w-[480px!important] md:hidden">
				<Image
					src="/background_shapes.png"
					className="relative"
					alt="bg-vector"
					width={565}
					height={336}
				/>
			</div>
			<div className="container">
				<div className="wrapper flex flex-wrap w-[calc(100%+46px)] -ml-[27px] md:w-[100%] mx-[27px] md:mx-0">
					<div className="col-left w-[calc(49%-54px)] xxl-up:min-h-[450px] md:w-[100%] mx-[27px] md:mx-0 md:pb-[30px]">
						<div className="content md-up:pb-[200px] wide-screen:pb-0 xxl-up:max-w-[80%]">
							{data?.heading &&<p class="small_font text-[#2E69FF]"><strong>{data?.heading}</strong></p>}
							{data?.title && <h2>
								{data?.title}
							</h2>}
						</div>
					</div>
					<div className="col-right w-[calc(51%-54px)] ml-[26px] mr-[28px] md:w-[100%] md:mx-0 pr-[1px]">
						{/* {data?.heading &&<p className="small_font text-[#2E69FF]"><strong>{data?.heading}</strong></p>} */}
						{data?.body && <div dangerouslySetInnerHTML={{ __html: data?.body }} />}
						<div className="card_wrap pt-[64px] md:pt-[40px] w-full grid gap-[24px] grid-cols-2">
							{data?.states && data?.states.map((data, index) => {
								return (
									<div key={index} className={`text-white`}>
										<div className="count">
											{ data?.symbol ? (<span className="heading_48  text-[#2E69FF]  relative z-10">
												{data?.symbol}
											</span>): ''}
											
											{ data?.number ? (<span className="h1 text-[#2E69FF]  relative z-10">
												{data?.number}
											</span>): ''}
										</div>
										{(data?.title || data?.description) ? (<div className="text_wrap pt-[32px] mt-[16px] border-t-[1px] border-black">
											<h4 className="mb-[6px] tracking-[-0.004em] text-black">
												{data?.title}
											</h4>
											<span className="opacity-80 text-black small_font tracking-[0em!important] relative">
												<DynamicLinks cta={data?.links} />
													{data?.description}
											</span>
										</div>) : ''}
										
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
export default OverviewWithStats
