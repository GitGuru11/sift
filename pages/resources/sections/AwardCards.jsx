import React from 'react'
import Image from 'next/image';
import Style from '../../../styles/logos/logos.module.css'
import DynamicLinks from '../../../components/global-components/Links';

export default function AwardCards(props) {
    let data = props.items;
  return (
    <div className={`logos p-0 ${Style.logos}`}>
        {data?.heading && <h3>{data?.heading}</h3>}
        <div>
            {data?.cards && data?.cards.map((item, i) => {
                return (
                    <div key={i}>
                        {item?.image?.sourceUrl && <Image 
                        src={item?.image?.sourceUrl}
                            alt={item?.image?.altText}
                            width={100}
                            height={134}
                        />}
                        <DynamicLinks cta={item?.links} />
                    </div>
                );
            })}
        </div>
        <DynamicLinks cta={data?.buttons} />
    </div>
  )
}
