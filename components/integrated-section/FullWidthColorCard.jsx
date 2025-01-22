import React, { useEffect } from "react";
import Image from 'next/image'
import Style from '../../styles/ThreeCardColumn.module.css'
import DynamicButton from "../global-components/Buttons";
export default function FullWidthColorCard(props) {
	let data = props.items;
    useEffect(() => {
		const parallaxElements = document.querySelectorAll('.parallax_element');
		const height = window.innerHeight
		function handleScroll() {
			const scrollPos = window.scrollY
			parallaxElements.forEach(function (element, index) {
				const parent = (element.parentNode)
				const parentHeight = parent.getBoundingClientRect().height
				const elementTop = element.getBoundingClientRect().top
				const elementHeight = window.pageYOffset + element.getBoundingClientRect().top
				element.style.top = `${(parentHeight )/2}px`
				let translate
				if (window.innerWidth < 767) {
					translate = elementTop / 16
				} else {
					translate = (elementTop - 700) / 9
				}

				if ((elementHeight - height) < (scrollPos)) {
					element.style.transform = `translate3d(0, ${translate}px, 0)`;
				}
			});
		}

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
    return (
        <section id={data.id ? data.id : ''} className={`FullWidthColorCard relative overflow-hidden ${data.background} ${data.padding} ${data.classes}`}>
            <div className="bg-white absolute w-full h-full left-0 top-0"></div>
                <div className="bg-pattern pt-[100px] parallax_element absolute bottom-[-10px] right-0 w-[600px] h-[700px]">
                    <Image src='/pricingPage/parallex-pattern.png' alt='pattern' width={800} height={900} />
                </div>
                <div className="container">
                    {
                        data?.cards && data?.cards.map((item, i) => {
                            return (
                                <div key={i} className={`wrapper flex flex-wrap items-center w-[100%]  md:w-[100%] md:ml-0 pt-[49px] pr-[32px] pb-[55px] mb-[24px] last:mb-0 pl-[29px] rounded-[24px] ${item.cardColor}`}>
                                    <div className="col-three w-[calc(40%-24px)] laptop:w-[calc(28%-24px)] xl:w-[calc(100%-24px)] xl:mb-[20px] md:w-[100%] md:mx-0 mx-[12px] ">
                                        {item?.title && <h3 className="text-white" dangerouslySetInnerHTML={{ __html: item?.title }}></h3> }
                                        {item?.body && <div className="text-white mt-[16px]" dangerouslySetInnerHTML={{ __html: item?.body }}></div> }
                                        <div className={`${item?.buttons != null && "btn mt-[32px] lg:mt-[20px]"}`}>
                                            <DynamicButton cta={item?.buttons} />
                                        </div>
                                    </div>
                                    <div className="col-three w-[calc(60%-24px)] laptop:w-[calc(72%-24px)] pl-[12px] desktop:w-[calc(100%-24px)] tablet:w-[calc(100%-24px)] md:w-[100%] md:pl-[0] md:mb-[20px] md:mx-0 text-white mx-[12px]">
                                        <ul className={`${Style.greenTick} xl-up:pt-[5px] flex flex-wrap`}>
                                        {item?.rows && item?.rows.map((row, i) => {
                                                return (
                                                    <div key={i} className="sm-up:pr-[24px]">
                                                        {row?.body && <ul dangerouslySetInnerHTML={{ __html: row?.body }}></ul>}
                                                    </div>
                                                )}
                                            )
                                            }
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
        </section>
    )
}