// // three Col Grid

import React, { useEffect } from 'react';
import Image from 'next/image';
import DynamicButton from '../../../components/global-components/Buttons';
import Style from "../../../styles/three-col-grid.module.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DynamicLinks from '../../../components/global-components/Links';
import { GET_RELATED_RESOURCE_POST } from '../../../graphql/getRelatedResources'
import { useQuery } from '@apollo/client';
import moment from 'moment';

function matchHeight(selector) {
    const elements = document.querySelectorAll(selector);
    const setEqualHeight = () => {
        elements.forEach(element => {
            element.style.height = 'auto';
        });
        const maxHeight = Math.max(...Array.from(elements).map(element => element.offsetHeight));
        elements.forEach(element => {
            element.style.height = `${maxHeight}px`;
        });
    };

    const handleResize = () => {
        if (window.innerWidth > 595) {
            setEqualHeight();
            setTimeout(() => {
                setEqualHeight();
            }, 100);
        } else {
            elements.forEach(element => {
                element.style.height = 'auto';
            });
        }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
}


const ReferenceCards = (props) => {
    const contentTypes = Object.freeze({
        ANALYST_REPORT: 'ANALYST_REPORT',
        DEMOS: 'DEMOS',
        EBOOK: 'EBOOK',
        INFOGRAPHIC: 'INFOGRAPHIC',
        ONEPAGER: 'ONEPAGER',
        PODCAST: 'PODCAST',
        VIDEO: 'VIDEO',
        WEBINAR: 'WEBINAR',
        CASE_STUDIES: 'CASE_STUDIES'
    });
    let fraudArr;
    if (props?.cat) {
        fraudArr = props?.cat.map(item => { return item.slug });
    }
    const postObj = useQuery(GET_RELATED_RESOURCE_POST, {
        variables: { typeSlug: contentTypes, fraudSlug: fraudArr, excludeId: props.excludeId },
    });
    let postData = [];
    if (postObj) {
        postData = postObj?.data?.contentNodes?.nodes;
    }

    const getSlidesToShow = () => {
        if (postData?.length > 3) {
            return 3;
        } else {
            return postData?.length;
        }
    };
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: getSlidesToShow(),
        adaptiveHeight: true,
        appendDots: (dots) => (
            <div>
                <ul className={`${Style.btnDots}`}>{dots}</ul>
            </div>
        ),
        customPaging: function (i) {
            return (
                <button className={Style.slickDotButton} />
            );
        },
    };

    const responsiveSettings = [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 595,
            settings: {
                slidesToShow: 1,
            },
        },
    ];

    Object.assign(settings, { responsive: responsiveSettings });

    // useEffect(() => {
    //     matchHeight(`.ThreeColumnGrid.${postData.background} .card-inner`);
    //     matchHeight(`.ThreeColumnGrid.${postData.background} .card-wrapper`);
    //     matchHeight(`.ThreeColumnGrid.${postData.background} .card-inner .content-wrap`);
    //     matchHeight(`.ThreeColumnGrid.${postData.background} .card-inner .bolg_details`);
    //     matchHeight(`.ThreeColumnGrid.${postData.background} .card-inner h4`);
    //     matchHeight(`.ThreeColumnGrid.${postData.background} .card-inner .btn-wrap`);
    //     console.log(document.querySelector(`.ThreeColumnGrid.${data.background}`))
    //     const handleResize = () => {
    //         matchHeight(`.ThreeColumnGrid.${postData.background} .card-inner`);
    //         matchHeight(`.ThreeColumnGrid.${postData.background} .card-wrapper`);
    //         matchHeight(`.ThreeColumnGrid.${postData.background} .card-inner .content-wrap`);
    //         matchHeight(`.ThreeColumnGrid.${postData.background} .card-inner .bolg_details`);
    //         matchHeight(`.ThreeColumnGrid.${postData.background} .card-inner h4`);
    //         matchHeight(`.ThreeColumnGrid.${postData.background} .card-inner .btn-wrap`);
    //     };

    //     window.addEventListener('resize', handleResize);
    //     window.addEventListener('orientationchange', handleResize);
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //         window.removeEventListener('orientationchange', handleResize);
    //     };
    // }, []);


    return (
        <section className={`ThreeColumnGrid md:pb-8 bg-black`}>
            {/* {
                data?.background == 'custom' && (
                    <div className="custom-bg-img absolute left-0 top-[0px] w-full h-full ">
                        <Image className="w-full h-full object-cover" src={data.backgroundImage?.sourceUrl} alt={data.backgroundImage?.altText} width="1200" height="1200" />
                    </div>
                )
            } */}
            <div className="container">
                {/* <div className={`${Style.SlideWarp} mt-[20px]  md:mt-0 w-[calc(100%+24px)] ml-[-12px] laptop-landscape:mt-[40px]`}>
                    <Slider {...settings}>
                        {postData && postData.map((item, index) => (
                            <div key={index} className={`${Style.col_three_item} card-wrapper data-aos-delay="300 transition-all duration-300 rounded-[18px] border-[2px] outline outline-transparent outline-1 hover:shadow-white-shadow border-white `}>
                                <div className={`${Style.col_three} card-inner relative flex flex-col duration-500 h-full ${item?.background == 'bg-skyblue' ? `bg-white` : ''} ${item?.background == 'bg-black' ? 'text-white' : ''} ${item?.classes?.includes('press-release') ? 'min-h-[398px] tablet:min-h-[290px] md:min-h-[160px] desktop:min-h-[310px] sm:min-h-[250px] laptop-landscape:min-h-[330px]' : ''} overflow-hidden rounded-[16px] group`}>
                                    <DynamicLinks cta={item?.infographic?.others?.cta.url} />
                                    {item?.onepager?.others?.coverImage && <div className={`${Style.img_wrap} img-wrap h-[200px] wide-screen:h-[275px] overflow-hidden`} >
                                        <Image
                                            src={item?.onepager?.others?.coverImage?.sourceUrl}
                                            alt={item?.onepager?.others?.coverImage?.altText}
                                            className="w-full h-full object-cover duration-500 group-hover:scale-[1.05] transition-all"
                                            height={200}
                                            width={200}
                                            quality={100}
                                        />
                                    </div>}
                                    <div className="content-wrap lg:pb-[70px] desktop:pb-[70px] xl-up:pb-[94px] desktop:p-[26px] laptop-landscape:p-[32px] laptop-landscape:pb-[90px] laptop:pb-[85px]  p-[40px] pr-[30px] laptop:p-[25px] lg:p-6">
                                        <div className="bolg_details mb-[6px] tracking-[2.4px] laptop-landscape:text-[12px]">
                                            <span className="fontInter inline-block uppercase font-bold tracking-[0.64px] text-white">
                                                {item?.__typename}
                                            </span>
                                            <span className="fontInter inline-block uppercase pl-3 ml-3 border-l-2 font-bold tracking-[0.64px] text-white border-white">
                                                {item?.date}
                                            </span>
                                        </div>
                                        <h4 className=" font-semibold mb-4">{item?.title}</h4>
                                        <div className="btn-wrap mt-5 z-10 absolute bottom-[40px] lg:bottom-[20px] desktop:bottom-[20px]">
                                            <DynamicButton cta={item?.infographic?.others?.cta.text} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div> */}
            </div>
        </section>
    );
};

export default ReferenceCards;
