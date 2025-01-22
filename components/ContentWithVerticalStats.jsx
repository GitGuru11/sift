import React from 'react'
import Image from 'next/image'
import Black_Btn from './button/Button_Black'

function ContentWithVerticalStats() {
	return (
		<section className="ContentWithVerticalStats bg-white">
			<div className="container">
				<div className="wrapper flex-row-reverse flex flex-wrap w-[calc(100%+20px)] items-center -ml-[10px] md:w-[100%] md:mx-0">
					<div className="col-two w-[calc(50%-20px)] mx-[10px] md:w-[100%] md:mx-0 md:pb-[30px]">
						<div className="card_wrap w-full grid gap-[40px] pl-[76px] md:pl-0">
							<div className="mb-[24px pl-[24px] border-l-[1px] border-black">
								<div className="count">
									<span className="h2 text-[#2E69FF] relative z-10 leading-[0.9!important]">
										5
									</span>
									<span className="heading_44  text-[#2E69FF]  relative z-10">
										x
									</span>
								</div>
								<div className="text_wrap  mt-[10px]">
									<p className="mb-[4px] text-black font-bold">
										AI-Powered Fraud Decisioning..
									</p>
									<p className="opacity-80 mb-0 text-black small_font tracking-[0em!important]">
										AI-Powered Fraud Decisioning..
									</p>
								</div>
							</div>
							<div className="mb-[24px pl-[24px] border-l-[1px] border-black">
								<div className="count">
									<span className="h2 text-[#2E69FF]  relative z-10 leading-[0.9!important]">
										70
									</span>
									<span className="heading_44  text-[#2E69FF]  relative z-10">
										%
									</span>
								</div>
								<div className="text_wrap  mt-[10px]">
									<p className="mb-[4px] text-black font-bold">
										Commodo ullamcorper
									</p>
									<p className="opacity-80 mb-0 text-black small_font tracking-[0em!important]">
										AI-Powered Fraud Decisioning..
									</p>
								</div>
							</div>
							<div className="mb-[24px pl-[24px] border-l-[1px] border-black">
								<div className="count">
									<span className="h2 text-[#2E69FF]  relative z-10 leading-[0.9!important]">
										25
									</span>
									<span className="heading_44  text-[#2E69FF]  relative z-10">
										%
									</span>
								</div>
								<div className="text_wrap  mt-[10px]">
									<p className="mb-[4px] text-black font-bold">
										AI-Powered Fraud Decisioning..
									</p>
									<p className="opacity-80 mb-0 text-black small_font tracking-[0em!important]">
										AI-Powered Fraud Decisioning..
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-two w-[calc(50%-20px)] mx-[10px] md:w-[100%] md:mx-0]">
						<div className="content_wrap">
							<h2 className="mb-[16px]">
								AI-Powered Fraud Decisioning..
							</h2>
							<p className="mb-[16px]">
								AI-Powered Fraud Decisioning..
							</p>
							<p>
								AI-Powered Fraud Decisioning..
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContentWithVerticalStats
