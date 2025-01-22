import React, { useEffect } from "react";
import Image from 'next/image'
import BtnTransparent from '../../components/button/Button_Transparent'
import Style from '../../styles/ThreeCardColumn.module.css'

const stripsData = [
    {
        heading: 'Add-Ons',
        blurb: 'AI-Powered Fraud Decisioning..',
        bg: 'blue',
        listOne: '<li>AI-Powered Fraud Decisioning..</li> <li>AI-Powered Fraud Decisioning.. </li> <li>AI-Powered Fraud Decisioning..</li> ',
        listtwo: '<li>AI-Powered Fraud Decisioning..</li> <li>AI-Powered Fraud Decisioning.. </li> <li>AI-Powered Fraud Decisioning..</li> '
    },
    {
        heading: 'Professional Services',
        blurb: 'AI-Powered Fraud Decisioning..',
        bg: 'black',
        ctaText: 'LEARN MORE',
        ctaLink: '/',
        listOne: '<li>AI-Powered Fraud Decisioning.. </li> <li>AI-Powered Fraud Decisioning..</li><li>AI-Powered Fraud Decisioning..</li> <li>Set incidunt purus amet neque</li>',
        listtwo: '<li>AI-Powered Fraud Decisioning..</li><li>AI-Powered Fraud Decisioning.. </li> <li>AI-Powered Fraud Decisioning..</li> <li>Set incidunt purus amet neque</li>'

    },
    {
        heading: 'Standalone Options',
        blurb: 'AI-Powered Fraud Decisioning..',
        bg: 'black',
        listOne: '<li>AI-Powered Fraud Decisioning.. </li> <li>AI-Powered Fraud Decisioning..</li> ',
        listtwo: '<li>AI-Powered Fraud Decisioning..</li> <li>AI-Powered Fraud Decisioning.. </li> '

    }
]
export default function ThreeCardStrips() {
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
        <section className="three-card-strips relative overflow-hidden">
            <div className="bg-white absolute w-full h-full left-0 top-0"></div>
                <div className="bg-pattern pt-[100px] parallax_element absolute bottom-[-10px] right-0 w-[600px] h-[700px]">
                    <Image src='/pricingPage/parallex-pattern.png' alt='pattern' width={800} height={900} />
                </div>
                <div className="container">
                    {
                        stripsData.map((item, i) => {
                            return (
                                <div key={i} className={`wrapper flex flex-wrap items-center w-[100%]  md:w-[100%] md:ml-0 pt-[49px] pr-[32px] pb-[55px] mb-[24px] last:mb-0 pl-[29px] ${item.bg == 'blue' ? 'bg-darkBlue' : 'bg-black'} rounded-[24px]`}>
                                    <div className="col-three w-[calc(40%-24px)] xl:w-[calc(100%-24px)] xl:mb-[20px] md:w-[100%] md:mx-0 mx-[12px] ">
                                        <h3 className="text-white">{item.heading}</h3>
                                        <p className="text-white mt-[16px]">{item.blurb}</p>
                                        {item.ctaText ? (<div className="btn mt-[32px] lg:mt-[20px]"><BtnTransparent text={item.ctaText} link={item.ctaLink} /></div>) : ''}
                                    </div>

                                    <div className="col-three w-[calc(30%-24px)] pl-[12px] desktop:w-[calc(50%-24px)] tablet:w-[calc(50%-24px)] md:w-[100%] md:mb-[20px]  md:mx-0  text-white mx-[12px] ">
                                        <ul className={`${Style.greenTick} xl-up:pt-[5px]`} dangerouslySetInnerHTML={{ __html: item.listOne }} />
                                    </div>
                                    <div className="col-three text-white w-[calc(30%-24px)] pl-[12px] desktop:w-[calc(50%-24px)] tablet:w-[calc(50%-24px)] md:w-[100%] md:mx-0  mx-[12px] ">
                                        <ul className={`${Style.greenTick}`} dangerouslySetInnerHTML={{ __html: item.listtwo }} />
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            
            
        </section>
    )
}