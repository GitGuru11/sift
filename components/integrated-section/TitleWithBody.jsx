import { useEffect } from 'react';
import React from 'react'
import DynamicButton from '../global-components/Buttons';

function TitleWithBody(props) {
    let data = props.items;
	useEffect(() => {
    }, []); 
  return (
	<section id={data.id ? data.id : ''} className={`TitleWithBody lg:pt-[100px] relative ${data.gatedComponent? 'GatedHide' : ''} ${data?.background} ${data?.padding} ${data?.classes}`}>
		<div className="container">
		{data?.rows && data?.rows.map((item, index) => {
                                return (
			<div key={index} className="relative mb-[64px] xl:mb-[32px] w-full z-10 laptop-landscape:mb-[40px]">
				{item?.heading &&<p className="small_font text-[#2E69FF]"><strong>{item?.heading}</strong></p>}
				{item?.title && <div className="w-full mb-[25px] lg-up:pr-[20px] xl:mb-[24px] laptop-landscape:mb-[13px]">
					<h2 dangerouslySetInnerHTML={{__html: item?.title}}></h2>
				</div> }
				{item?.body && <div className={` pr-[65px] md:p-0 laptop-landscape:pr-[98px]`} dangerouslySetInnerHTML={{__html: item?.body}}></div> }
				<div className="mt-[38px] md:mt-[24px]">
					<DynamicButton cta={item?.buttons} />
				</div>
			</div>
			  )})
			}
		</div>
</section>
	);
}
export default TitleWithBody
