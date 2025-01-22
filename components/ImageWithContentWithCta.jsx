import React from 'react'
import Image from 'next/image'
import Black_Btn from './button/Button_Black'

function ImgWithContentQuotesWithCta() {
	return (
		<section className="image-with-content bg-white" id='integrations'>
			<div className="container">
				<div className="wrapper flex-row-reverse flex flex-wrap w-[calc(100%+20px)] items-center -ml-[10px] ">
					<div className="col-two w-[calc(48%-20px)] md:w-full mx-[10px]">
						<div className="img-wrap xl-up:pl-[56px]  md:max-w-[470px] md:mb-[20px] laptop-landscape:max-w-[550px]  xl-up:pb-[44px]">
							<Image
								src="/professional-services.png"
								alt="img"
								width={700}
								height={700}
								quality={75}
							/>
						</div>
					</div>
					<div className="col-two w-[calc(52%-20px)] md:w-full mx-[10px]">
						<div className="content_wrap">
							<h2 className="mb-[16px]">
                            Headline about professional services
							</h2>
							<p>
								AI-Powered Fraud Decisioning..
                            </p>
                            <div className="btn mt-[31px]">
                                <Black_Btn link='/' text='LEARN MORE'/>
                            </div>
							<div className="quotation-block pt-[40px] mt-[30px] pb-[40px] sm:pt-[20px] sm:mt-[20px] border-t-[1px] border-black">
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
										<h4>
											Est tation latine aliquip id, mea ad tale illud
											definitiones. Periculis omitur necessitus eum .”
										</h4>
									</div>
								</div>
								<div className="flex items-center pt-[18px] pl-[56px] sm:pl-0" >
									<div className="w-[28%] desktop:w-[50%] lg:w-[50%]  sm:w-[50%] relative">
										<p className="text-black small_font font-bold">
											Connie Robertson
										</p>
										<p className="text-black small_font font-normal">
											CMO at Doordash
										</p>
									</div>
									<div className="max-[110px] pl-[40px] sm:pl-0">
										<Image
											src="/logos/doordash.svg"
											alt="top"
											width="187"
											height="23"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ImgWithContentQuotesWithCta
