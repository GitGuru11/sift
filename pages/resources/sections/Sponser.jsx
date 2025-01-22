import React from 'react'
import Link from 'next/link'
import Style from '../../../styles/sponser/sponser.module.css'
import Image from 'next/image'
export default function Sponser(props) {
    let data = props.items;
    return (
        <div className={` sponsors p-0 ${Style.sponsors} xl:max-w-[550px]`}>
            {data?.heading && <h3>{data?.heading}</h3>}
            <div>
                {data?.sponsors && data?.sponsors.map((item, i) => {
                    return (
                        <div key={i}>
                            <Link href={item?.link ? item?.link :'#'}>
                                {item?.logo?.sourceUrl && <Image
                                    src={item?.logo?.sourceUrl}
                                    width={160}
                                    height={29}
                                    alt={item?.logo?.altText}
                                />}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
