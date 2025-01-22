import React from 'react'
import Style from '../../../styles/stats/stats.module.css'

export default function Statics(props) {
    let data = props.items
    return (
        <div className={`stats p-0 ${Style.stats}`}>
            {data?.heading && <h3>{data?.heading}</h3>}
            <div>
                {data?.cards && data?.cards.map((item, i) => {
                    return (
                        <div key={i}>
                            <div>
                                {item?.number && <h2>{item?.number}</h2>}
                                {item?.digit && <span >{item?.digit}</span>}
                            </div>
                            {item?.title && <h6>{item?.title}</h6>}
                            {item?.body && <p dangerouslySetInnerHTML={{ __html: item?.body }}></p>}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
