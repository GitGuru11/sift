import React, {useEffect, useState} from "react";
import DynamicButton from "../global-components/Buttons";
export default function FaqAccordion(props) {
	let data = props.items;
    const [open,setOpen] =useState([])
    function clickHandler(index) {
        if (open.includes(index)) {
            setOpen(open.filter(item => item !== index));
        } else {
            setOpen([...open, index]);
        }
    }

    const icon = 'after:content-[""] after:absolute after:w-[32px] after:h-[32px]  lg:after:w-[22px] lg:after:h-[22px] after:top-0 after:right-[-2px] after:bg-contain after:z-[-1]'

    return(
        <section  id={data.id ? data.id : ''} className={`accordion  ${data.background} ${data.classes} ${data.padding}`}>
            <div className="container">
                <div className="intro mb-[64px] laptop-landscape:mb-[24px]">
                    {data?.title && <h2 className='mb-[32px] lg:mb-[30px]' dangerouslySetInnerHTML={{ __html: data?.title }}></h2>}
                </div>
                {
                    data?.accordion && data?.accordion.map((item,i)=>{
                        return (
                            <div key={i} className="acc-wrapper px-[24px] pb-[15px] pt-[22px] mb-[16px] last:mb-0 border-[2px] duration-300 hover:shadow-black-shadow hover:outline hover:outline-[1px] hover:outline-black border-black rounded-[16px]">
                                {item?.title && <div className={`relative mb-[10px] cursor-pointer  z-[2] ${icon} ${open.includes(i) ? 'after:bg-[url("/logos/minus.svg")]' : 'after:bg-[url("/logos/plus.svg")]'}`}>
                                    <h4 className="pr-[30px]" onClick={() => clickHandler(i)} dangerouslySetInnerHTML={{ __html: item?.title }}></h4>
                                </div> }
                                <div className={`content  overflow-hidden transition-all ${open.includes(i) ? ' max-h-[1000px] pb-[12px]' : 'max-h-0'}`}>
                                    {item?.body && <p className="small_font max-w-[950px] wide-screen:max-w-[calc(100%-80px)]  wide-screen:pt-[20px]" dangerouslySetInnerHTML={{ __html: item?.body }}></p>}
                                    <div className="btn mt-[16px] wide-screen:mt-[30px]">
                                        <DynamicButton cta={item?.buttons} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}