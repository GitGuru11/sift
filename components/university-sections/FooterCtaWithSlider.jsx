import React, { useRef } from "react";
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import { GET_SINGLE_POST_CTA } from '../../graphql/singlePostQuery';
import DynamicButton from '../global-components/Buttons';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function FooterCtaWithSlider () {
const { loading, error, data } = useQuery(GET_SINGLE_POST_CTA, {
        variables: { id: 3631},
});   
const blogcta = data?.blockBy?.blocksection?.sections[0] || [];
//let data = props.items;
    return (
        <section id={blogcta.id ? blogcta.id : ''} className={`footerCtaWithSlider no-padding ${blogcta.background} ${blogcta.classes} ${blogcta.padding}`}>
            <div>
                <div className="container">
                    <div className="contentWrap min-h-[500px] relative overflow-hidden bg-lowerBlue p-[64px] pb-[42px] rounded-tl-[24px] rounded-tr-[24px] text-center phablet:p-[30px] sm:p-[20px]">
                        <div className="intro">
                            {blogcta.title && <h2 className='!text-white' dangerouslySetInnerHTML={{ __html: blogcta.title }}></h2>}
                            {blogcta.body && <div className='text-white mt-[22px] mb-[40px]' dangerouslySetInnerHTML={{ __html: blogcta.body }}></div>}
                            <DynamicButton cta={blogcta.buttons} />
                        </div>
                        <div className="logoSlider flex mt-[34px] laptop-landscape:mt-[30px] w-[fit-content] animate-[slideScroll_30s_linear_infinite]">
                            {blogcta.logos && blogcta.logos.map((item, index) => {
                                return (
                                    <div className="item" key={index}>
                                        <div className="imgWrap w-[185px] h-[100px] mx-[20px]">
                                            {item.image && <Image className="object-contain h-full" src={`${item.image.sourceUrl}`} alt={`${item.image.altText}`} width={184} height={100} />}
                                        </div>
                                    </div>
                                )})
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
