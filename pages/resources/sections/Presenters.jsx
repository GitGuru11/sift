import React from 'react'
import Image from 'next/image'
import Style from '../../../styles/presents/presents.module.css'

export default function Presenters(props) {
    let data = props.items
  return (
    <>
        {data?.heading && <h3>{data?.heading}</h3>}
            <div className={`presenters rounded-[16px] overflow-hidden sm:rounded-[30px] ${Style.presenters}`} >
                {data?.speakers && <div>
                    <Image
                        src="/resources/Background.png"
                        width={496}
                        height={320}
                        alt="Image"/>
                </div>}
                <div>
                    {data?.speakers && data?.speakers.map((item, i) => {
                        return (
                            <div key={i}>
                                {item?.image?.sourceUrl && <div>
                                    <Image
                                        src={item?.image?.sourceUrl}
                                        width={123}
                                        height={140}
                                        alt={item?.image?.altText}
                                    />
                                </div> }
                                <div>
                                    {item?.name && <h6>{item?.name}</h6>}
                                    {item?.designation && <p>{item?.designation}</p>}
                                    {item?.logo?.sourceUrl && <Image
                                        src={item?.logo?.sourceUrl}
                                        width={117}
                                        height={42}
                                        alt={item?.logo?.sourceUrl}
                                    />}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
  )
}
