import React from 'react'
import Link from 'next/link';

export default function Breadcrumbs(props) {
   let data = props.data
   let sectionBg = props.sectionBg
    const breadcrumbsData = data?.breadcrumbs
    return (
        <div className="breadcrumbs bg-white relative">
            <div className="container">
                <ul className="absolute top-[39px] left-[20px] z-[99] lg:pt-[30px] flex">
                    {
                    data?.title != 'Contact Us - Sift' ? 
                    breadcrumbsData && breadcrumbsData.map((data, index) => {
                        const baseUrl = data.url;
                        const url = new URL(baseUrl);
                        const text = data.text;
                        const BreadText = text.replace(/&#(\d+);|&([a-z]+);/gi, function(match, dec, name) {
                            if (dec) {
                              return String.fromCharCode(dec);
                            } else {
                              return {
                                'amp': '&',
                                'lt': '<',
                                'gt': '>',
                                'quot': '"',
                                'apos': "'",
                                'nbsp': ' '
                              }[name];
                            }
                          });
                            return (
                                <li key={index} className={`inline relative text-[16px] font-[400] leading-[24px] ${(sectionBg === 'bg-white' || sectionBg  === 'bg-[#fff]' || sectionBg  === 'transparent' || sectionBg === 'bg-skyblue') || props?.data?.post ? 'text-black' : 'text-white'}  hover:text-pink transition-all delay-[0.3s] mr-[15px]`}>
                                        {
                                        (breadcrumbsData.length - 1) === index ? 
                                            <span className={` capitalize text-pink elipsis sm:text-[14px]`} dangerouslySetInnerHTML={{ __html: data?.text }}></span> : 
                                            <Link href={`${url.pathname}`} className={` capitalize ${url.pathname === '/' ? '' : 'middle-elipsis'} sm:text-[14px]`}>{url.pathname === 'data.url' ? 'Home' : BreadText}</Link>
                                        }
                                </li> 
                            )
                        })  : ''
                    }
                </ul>
            </div>
        </div>
    )
}
