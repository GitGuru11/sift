import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect } from 'react'
import ArrowBtn from '../../components/button/Black_arrowBtn'
import Style from '../../styles/platform/contentWithCard.module.css'

const ContentWithCardsData = [{
                title: 'Unlock resources from our media kit',
	blurb: 'AI-Powered Fraud Decisioning..'
            },
    {cards:[
        {
        imgpath: '/newsroom-sift.jpg',
        heading: 'Media kit & logos',
        subHeading: 'AI-Powered Fraud Decisioning..',
        ctaText: 'Download now',
        ctaLink:'/',
    },
    {
        imgpath: '/newsroom-sift.jpg',
        heading: 'Executive',
        subHeading: 'AI-Powered Fraud Decisioning..',
        ctaText: 'Download now',
        ctaLink:'/',
    },
    {
        imgpath: '/newsroom-sift.jpg',
        heading: 'Trust & safety architects',
        subHeading: 'AI-Powered Fraud Decisioning..',
        ctaText: 'Download now',
        ctaLink:'/',
    },
    {
        imgpath: '/newsroom-sift.jpg',
        heading: 'Console screenshots',
        subHeading: 'AI-Powered Fraud Decisioning..',
        ctaText: 'Download now',
        ctaLink:'/',
        }
    ]}
]



function ContentWithCards(props) {
    var sectionData = ContentWithCardsData
    
	useEffect(() => {
		const parallaxElements = document.querySelectorAll('.stroke_animate');
		const height = window.innerHeight;
		function handleScroll() {
			const scrollPos = window.scrollY;
			parallaxElements.forEach(function (element, index) {
				const parent = element.parentNode;
				const parentHeight = parent.getBoundingClientRect().height;
				const elementTop = element.getBoundingClientRect().top;
				const elementHeight =
					window.pageYOffset + element.getBoundingClientRect().top;
				element.style.top = `${(parentHeight - 100) / 100}px`;
				let translate;
				if (window.innerWidth < 767) {
					translate = elementTop / 16;
				} else {
					translate = (elementTop - 312) / 6;
				}

				if (elementHeight - height < scrollPos) {
					element.style.transform = `translate3d(0, ${translate}px, 0)`;
				}
			});
		}

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
	useEffect(() => {
		const parallaxElements = document.querySelectorAll('.dot_animate');
		const height = window.innerHeight;
		function handleScroll() {
			const scrollPos = window.scrollY;
			parallaxElements.forEach(function (element, index) {
				const parent = element.parentNode;
				const parentHeight = parent.getBoundingClientRect().height;
				const elementTop = element.getBoundingClientRect().top;
				const elementHeight =
					window.pageYOffset + element.getBoundingClientRect().top;
				element.style.top = `${(parentHeight - 100) / 100}px`;
				let translate;
				if (window.innerWidth < 767) {
					translate = elementTop / 16;
				} else {
					translate = (elementTop - 200) / 4;
				}

				if (elementHeight - height < scrollPos) {
					element.style.transform = `translate3d(0, ${translate}px, 0)`;
				}
			});
		}

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
	useEffect(() => {
		const parallaxElements = document.querySelectorAll('.pills_animate');
		const height = window.innerHeight;
		function handleScroll() {
			const scrollPos = window.scrollY;
			parallaxElements.forEach(function (element, index) {
				const parent = element.parentNode;
				const parentHeight = parent.getBoundingClientRect().height;
				const elementTop = element.getBoundingClientRect().top;
				const elementHeight =
					window.pageYOffset + element.getBoundingClientRect().top;
				element.style.top = `${(parentHeight - 100) / 100}px`;
				let translate;
				if (window.innerWidth < 767) {
					translate = elementTop / 16;
				} else {
					translate = (elementTop - 250) / 5.5;
				}

				if (elementHeight - height < scrollPos) {
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
        <section className={`content-with-cards ${props.bg == 'skyblue' ? 'bg-skyblue' : 'bg-white'} overflow-hidden z-[11]`} id='media-kit'>
            <div className="img-box w-[543px] h-[420px]  absolute bottom-0 left-0 pt-[150px]">
                {/* <Image src='/newsroom/parallex-pattern-two.png' alt='pattern' width={560} height={560} /> */}
            <div className="pills_animate w-full h-full absolute bottom-0 right-0">
				  <Image
					  className="w-full"
					  src="/pattern_4_outline.svg"
					  alt="banner_pills"
					  width="540"
					  height="800"
				  />
			  </div>
			  <div className="stroke_animate absolute  w-full h-full bottom-0 right-0">
				  <Image
					  className="w-full"
                        src="/pattern_4_pills.svg"
					  alt="banner_stroke"
					  width="540"
					  height="800"
				  />
			  </div>
			  <div className="dot_animate absolute  w-full h-full bottom-0 right-0">
				  <Image
					  className="w-full"
					  src="/pattern_4_dots.svg"
					  alt="banner_dots"
					  width="540"
					  height="800"
				  />
			  </div>
            </div>
            <div className="container">
                <div className="wrapper flex flex-wrap w-[calc(100%+54px)] -ml-[27px]">
                    <div className="col-left w-[calc(49%-54px)] mx-[27px] xl:w-full xl:mb-10">
                        <div className="content">
                            <h2>{sectionData[0].title}</h2>
                            <p className='mt-[16px]'>{sectionData[0].blurb}</p>
                        </div>
                    </div>
                    <div className="col-right w-[calc(51%-54px)] ml-[26px] mr-[28px] xl:w-full">
                        <div className="relative card_wrap w-full grid xl-up:mt-[-4px] gap-[20px] grid-cols-2 sm:grid-cols-1"  data-aos="fade-up" data-aos-delay="500">
                            {
                                (sectionData[1].cards).map((item, i) => {
                                    return (
                                        <div key={i} className={`${Style.card} relative bg-white  rounded-[16px] duration-300 overflow-hidden`}>
                                            <Link className='emptyLink' href='/homepage'>.</Link>
                                            <div className={`${Style.img_wrap} img-wrap h-[163px] wide-screen:h-[275px] overflow-hidden`} >
                                                <Image
                                                    src={item.imgpath}
                                                    alt='image'
                                                    className="w-full h-full object-cover duration-500 group-hover:scale-[1.05] transition-all"
                                                    height={200}
                                                    width={200}
                                                    quality={100}
                                                />
                                            </div>
                                            <div className="content-wrap  lg:pb-[60px]  desktop:pb-[70px] xl-up:pb-[73px] desktop:p-[26px] laptop-landscape:p-[32px] laptop-landscape:pb-[90px] laptop:pb-[85px]  p-[32px]  laptop:p-[25px] lg:p-6">
        
                                                <h4 className=" font-semibold mb-[8px]">{item.heading}</h4>
                                                <p>{item.subHeading }</p>
                                                <div className="btn-wrap mt-9 z-10 absolute bottom-[32px] lg:bottom-[20px] desktop:bottom-[20px]">
                                                    <ArrowBtn text={item.ctaText} link={item.ctaLink} />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                          
                        </div>
                    </div>
                </div>
            </div>
      
        </section>
    )
}

export default ContentWithCards
