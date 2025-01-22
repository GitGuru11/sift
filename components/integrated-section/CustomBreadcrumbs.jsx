import React from 'react'
import Link from 'next/link';
import { logDOM } from '@testing-library/react';

export default function Breadcrumbs(props) {
   const data = props.data
   var breadcrumbsData;
	if(data) {
		breadcrumbsData = data.items;
	}
    return (
        <div className="breadcrumbs bg-white relative">
            <div className="container">
                <ul className="absolute top-[39px] left-[20px] z-[99] lg:pt-[30px] flex">
					{
						breadcrumbsData && breadcrumbsData.length > 0 ? 
						<li className={`inline relative text-[16px] font-[400] leading-[24px] ${(props.sectionBg  === 'bg-white' || props.sectionBg  === 'bg-[#fff]' || props.sectionBg  === 'transparent' || props.sectionBg  === 'bg-skyblue') ? 'text-black' : 'text-white'}  hover:text-pink transition-all delay-[0.3s] mr-[15px]`}>
							<Link href="/" className='sm:text-[14px]'>Home</Link>
						</li> : ''
					}
                    {
                    (breadcrumbsData && breadcrumbsData.length > 0 ) ? 
                    breadcrumbsData.map((data, index) => {
                            return (
                                <li key={index} className={`inline relative text-[16px] font-[400] leading-[24px] ${(props.sectionBg === 'bg-white' || props.sectionBg  === 'bg-[#fff]' || props.sectionBg  === 'transparent' || props.sectionBg === 'bg-skyblue') ? 'text-black' : 'text-white'}  hover:text-pink transition-all delay-[0.3s] mr-[15px]`}>
                                        {
                                        (breadcrumbsData.length - 1) === index ? 
                                            <span className={` capitalize text-pink middle-elipsis sm:text-[14px]`} dangerouslySetInnerHTML={{ __html: data?.label }}></span> : <Link href={`${data?.url}`} className={` capitalize sm:text-[14px]`}>{data?.label}</Link>
                                        }
                                </li> 
                            )
                        }) : ''
                    }
                </ul>
            </div>
        </div>
    )
}
