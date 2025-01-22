import React from "react";
import { Permanent_Marker } from 'next/font/google'
import Btn_Transparent from "./button/Button_Transparent";
import Btn_Black from "./button/Button_Black";
import Pink_btn from "./button/Button_Pink";
const permanentMarker = Permanent_Marker({ subsets: ['latin'],weight:['400'] })

export default function FullWidthIntro({PreNormalText,HighLightedText,PostNormalText,bg,blurb,cta,link,blackCta,pinkCta}) {
  return (
		<div className="relative intro mb-[64px] xl:mb-[32px] w-full z-10 laptop-landscape:mb-[40px]">
			<div
				className={`w-full mb-[25px] lg-up:pr-[20px] xl:mb-[24px] laptop-landscape:mb-[13px] ${
					bg === 'black' ? 'text-white' : 'text-black'
				}`}
			>
				<h2 className="">
					{PreNormalText}
					<span
						className={` ${permanentMarker.className}  ${
							bg === 'black' ? 'text-oceanGreen' : 'text-black'
						}`}
					>
						{HighLightedText}
					</span>{' '}
					{PostNormalText}
				</h2>
			</div>
			<p className={` pr-[65px] md:p-0 laptop-landscape:pr-[98px] ${
					bg === 'black' ? 'text-white' : 'text-black'
				}`}>
				{blurb}
			</p>
			{cta ? <div className="mt-[38px] md:mt-[24px]">
				<Btn_Transparent text={cta} link={link} />
			</div> : ''
			}
			{blackCta ? <div className="mt-[38px] md:mt-[24px]">
				<Btn_Black text={blackCta} link={link} />
			</div> : ''
		   }
		  {pinkCta ? <div className="mt-[38px] md:mt-[24px]">
				<Pink_btn text={pinkCta} link={link} />
			</div> : ''
			}
			
		</div>
	);
}