import React from "react";
import DynamicButton from '../global-components/Buttons';


export default function FullWidthIntroWithCta(props) {
	let data = props.items;
	return (
		<section id={data.id ? data.id : ''} className={`${data.gatedComponent? 'GatedHide' : ''} FullWidthIntroWithCta relative fullWidthIntro ${data.background} ${data.padding} ${data.classes}`}>
			<div className="container">
				<div className="relative intro mb-[64px] xl:mb-[32px] w-full z-10 laptop-landscape:mb-[40px]">
					<div className="w-full mb-[25px] lg-up:pr-[20px] xl:mb-[24px] laptop-landscape:mb-[13px]">
						<h2 dangerouslySetInnerHTML={{__html: data?.title}}></h2>
					</div>
					{data?.classes && data?.classes.includes('custom-render-html-in-span') ?
						<span dangerouslySetInnerHTML={{__html: data?.bodyWithoutEditor}}></span> :
						<p className={` pr-[65px] md:p-0 laptop-landscape:pr-[98px]`} dangerouslySetInnerHTML={{__html: data?.bodyWithoutEditor}}></p>
						
					}
					<div className="mt-[38px] md:mt-[24px]">
						<DynamicButton cta={data?.buttons} />
					</div>
				</div>
			</div>
		</section>
	);
}