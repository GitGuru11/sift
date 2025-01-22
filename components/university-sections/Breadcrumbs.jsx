import React from 'react'
import Link from 'next/link';
import { split } from 'postcss/lib/list';

export default function Breadcrumbs(props) {
   let data = props.data
   let sectionBg = props.sectionBg
    const breadcrumbsData = data.breadcrumbs
    var urlData = '';
    breadcrumbsData.map((data, index) => {
        urlData = data.url;
    })
    const temp = urlData ? urlData.split('/') : [];
    const middleTemp = temp.slice(3, -1);
   
    return (
        <div className="breadcrumbs bg-white relative">
            <div className="container">
                <ul className="absolute top-[39px] left-[20px] z-[99] lg:pt-[30px] flex">
                    {middleTemp.length > 0 ? 
                        <li className={`inline relative text-[16px] font-[400] leading-[24px] ${(sectionBg === 'bg-white' || sectionBg === 'bg-skyblue') || props?.data?.university ? 'text-black' : 'text-black'}  hover:text-pink transition-all delay-[0.3s] mr-[15px]`}>
                            <Link href="/">Home</Link>
                        </li> : ''
                    }
                    {
                    middleTemp.length > 0 ? 
                    middleTemp.map((data, index) => {
                            return (
                                <li key={index} className={`inline relative text-[16px] font-[400] leading-[24px] ${(sectionBg === 'bg-white' || sectionBg === 'bg-skyblue') || props?.data?.post ? 'text-black' : 'text-black'}  hover:text-pink transition-all delay-[0.3s] mr-[15px] ${index == 0|| index== (middleTemp?.length -1)? '' :'hidden'}`}>
                                        {
                                        (middleTemp.length - 1) === index ? 
                                            <span className={` capitalize elipsis text-pink`}>{data}</span> : <Link href={`/${data}`} className={` capitalize elipsis`}>{data}</Link>
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
