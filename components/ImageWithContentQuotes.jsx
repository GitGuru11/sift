import React from 'react'
import Image from 'next/image'
import Black_Btn from './button/Button_Black'

function ImageWithContentQuotes() {
	return (
		<section className="image-with-content bg-white" id="how-it-works">
			<div className="container">
				<div className="wrapper flex-row-reverse flex flex-wrap w-[calc(100%+20px)]  items-center -ml-[10px] md:w-[100%] md:mx-0">
					<div className="col-two w-[calc(50%-20px)]  mx-[10px] md:w-[100%] md:mx-0 md:pb-[30px]">
						<div className="img-wrap pl-[76px] md:pl-0">
							<Image
								src="/solution_use_case_graphic.png"
								alt="img"
								width={700}
								height={700}
								quality={75}
							/>
						</div>
					</div>
					<div className="col-two w-[calc(50%-20px)]  mx-[10px] md:w-[100%] md:mx-0]">
						<div className="content_wrap">
							<h2 className="mb-[16px]">
								AI-Powered Fraud Decisioning..
							</h2>
							<p>
								AI-Powered Fraud Decisioning..
							</p>
							<div className="quotation-block pt-[35px] mt-[30px] md:pb-0 border-t-[1px] border-black">
								<div className="flex  ">
									<div className="w-[40px] h-[40px] lg:w-[32px] lg:h-[32px] relative">
										<Image
											className="w-full h-full object-cover"
											src="/logos/quotation-mark-blue.png"
											alt="top"
											width="40"
											height="40"
										/>
									</div>
									<div className="w-[calc(100%-40px)] lg:w-[calc(100%-32px)] pl-[16px] lg:pl-[8px] text-black">
										<h4>
											AI-Powered Fraud Decisioning..
										</h4>
									</div>
								</div>
								<div className="flex items-center pt-[16px] pl-[56px] lg:pl-[40px] lg:max-w-[340px]">
									<div className="w-[28%] lg:w-[60%] relative">
										<p className="text-black small_font font-bold">
											Connie Robertson
										</p>
										<p className="text-black small_font font-normal">
											CMO at Doordash
										</p>
									</div>
									<div className="max-[110px] pl-[24px]">
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

export default ImageWithContentQuotes
