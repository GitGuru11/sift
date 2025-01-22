import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Btn_Pink from "./button/Button_Pink";

const line = <svg width="256" height="361" objectFit="cover" viewBox="0 0 556 361" fill="none" xmlns="http://www.w3.org/2000/svg">

    <path d="M375.416 361H2.07578C0.929948 361 0 360.071 0 358.925C0 357.78 0.929948 356.851 2.07578 356.851H375.416C472.703 356.851 551.857 277.738 551.857 180.5C551.857 83.2624 472.703 4.14943 375.416 4.14943C278.128 4.14943 198.975 83.2624 198.975 180.5C198.975 181.645 198.045 182.575 196.899 182.575C195.753 182.575 194.823 181.645 194.823 180.5C194.823 132.284 213.605 86.9553 247.714 52.8637C281.823 18.772 327.175 0 375.407 0C423.64 0 469 18.772 503.109 52.8637C537.218 86.9553 556 132.284 556 180.5C556 228.716 537.218 274.045 503.109 308.136C469 342.228 423.648 361 375.407 361H375.416Z" fill="#FF3B84" />
</svg>

function ContentWithCta() {
    const [backgroundColor, setBackgroundColor] = useState('bg-indigo-50',);

    return (
			<section className="ContentWithCta bg-white md:bg-indigo-50 md:pt-[40px] no-padding-top md:overflow-hidden ">
				<div className="container">
					<div
						className={`${backgroundColor} z-10 relative md-up:rounded-[300px] md-up:py-10 md-up:pr-10 pl-24 md:pl-0 tablet:pl-20 wide-screen:pl-[150px] md-up:overflow-hidden`}
					>
						<div className="md-up:flex md-up:justify-between">
							<div className="text-wrap relative w-3/5 md:w-full pr-5 large-desktop:pr-10 wide-screen:pr-16 md:pr-0 md:pt-0 pt-10 pb-16 md:pb-[48px] md-up:flex md-up:justify-center flex-col">
								<h3 className="mb-4">
									<span>Start</span> your risk assessment now
								</h3>
								<p>
								AI-Powered Fraud Decisioning..
								</p>
								<ul className="ml-[26px] list-disc mt-[18px]">
									<li className="tracking-[1px]">
										<span>AI-Powered Fraud Decisioning..</span>
									</li>
									<li className="tracking-[1px]">
										<span>AI-Powered Fraud Decisioning..</span>
									</li>
								</ul>
								<div className="btn-wrap md-up:hidden md:mt-5">
									<Btn_Pink text="LEARN MORE" link="/" />
								</div>
							</div>
							<div className="w-[365px] laptop-landscape:w-[260px] desktop:w-[248px] tablet:w-[223px] md:w-[286px] wide-screen:w-[465px] md:m-auto relative self-end">
								<div className="p-10 desktop:p-5 tablet:p-5 sm:p-8 relative">
									<div className="absolute top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4 w-full h-full z-[2]">
										<div className="absolute w-full h-full border-[4px] border-t-pink border-r-pink border-b-pink border-l-transparent rounded-[50%] -rotate-[43deg] "></div>
										<div className="pink-circle absolute h-[4px] w-[96%] -left-[45%] bottom-0 bg-pink "></div>
									</div>
									<div className="relative">
										<Image
											src="/laptop.png"
											width={365}
											height={365}
											alt="laptop"
											className="relative z-10 w-full"
										/>
										<div className="absolute top-0 right-0 w-[164%] h-[calc(100%+80px)]">
											<Image
												src="/yellow-shadow.svg"
												width={285}
												height={410}
												alt="yellow-graphic"
												className="w-full h-full max-w-[unset]"
											/>
											<div className="btn-wrap absolute bottom-[40px] desktop:bottom-[60px] tablet:bottom-[60px] left-[-54px] laptop-landscape:left-[-70px] md:bottom-auto md:top-[-112px] md:left-[50%] desktop:left-[-62px] md:hidden">
												<Btn_Pink text="LEARN MORE" link="/" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			
		);
		            <style jsx>
									{`
										.content-with-cta .btn-wrap a.button {
											margin: 0;
										}
									`}
								</style>;
}

export default ContentWithCta
