import Image from 'next/image'
import React from 'react'
function IconWithContentGrid(props) {
    let data = props.items;
  return (
		<section id={data.id ? data.id : ''} className={`IconWithContentGrid bg-white desktop-mid:pt-0 tablet:pt-0 ${data.background} ${data.padding} ${data.classes}`}>
			<div className="container">
				<div className="card_wrap grid grid-cols-5 desktop:grid-cols-3 tablet:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-[40px] xs:gap-[20px]">
					{data?.columns && data?.columns.map((item, i) => {
						return (
							<div key={i}
								className={`cards relative bg-white rounded-[16px]`}
								data-aos="fade-up"
								data-aos-delay="500">
								{item?.image && item?.image?.sourceUrl && <div className="icon-wrap mb-[18px]">
									<Image src={item?.image?.sourceUrl} alt={item?.image?.altText} width={120} height={120} />
								</div> }
								{item?.title && <h4 className="mb-[9px]" dangerouslySetInnerHTML={{__html: item?.title}}></h4>}
								{item?.bodyWithoutEditor && <p className="small_font" dangerouslySetInnerHTML={{__html: item?.bodyWithoutEditor}}></p>}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
export default IconWithContentGrid
