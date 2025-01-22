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
                    <>
                        <li className={`inline relative text-[16px] font-[400] leading-[24px] ${(sectionBg === 'bg-white' || sectionBg === 'bg-skyblue') || props?.data?.post ? 'text-black' : 'text-black'}  hover:text-pink transition-all delay-[0.3s] mr-[15px]`}>
                            <Link href="/" className='sm:text-[14px]'>Home</Link>
                        </li>
                         <li className={`inline relative text-[16px] font-[400] leading-[24px] ${(sectionBg === 'bg-white' || sectionBg === 'bg-skyblue') || props?.data?.post ? 'text-black' : 'text-black'}  hover:text-pink transition-all delay-[0.3s] mr-[15px]`}>
                            <Link href="/blog" className='sm:text-[14px]'>Blog</Link>
                        </li></> : ''
                    }
                    {
                    middleTemp.length > 0 ? 
                    middleTemp.map((data, index) => {
                        const bredData = data.replaceAll('-', ' ');
                            return (
                                <li key={index} className={`inline relative text-[16px] font-[400] leading-[24px] ${(sectionBg === 'bg-white' || sectionBg === 'bg-skyblue') || props?.data?.post ? 'text-black' : 'text-black'}  hover:text-pink transition-all delay-[0.3s] mr-[15px]`}>
                                        {
                                        (middleTemp.length - 1) === index ? 
                                            <span className={` capitalize elipsis text-pink middle-elipsis sm:text-[14px]`}>{bredData}</span> : <Link href={`/${data}`} className={` capitalize elipsis sm:text-[14px]`}>{bredData}</Link>
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
