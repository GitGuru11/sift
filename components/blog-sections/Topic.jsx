import React from 'react'
import Link from 'next/link';
export default function Topic(props) {
  let tags = props.items;
  return (
    <div>
        <p className={`small_font font-[700!important] laptop-landscape:text-[16px] lg:!text-[16px]`}>Related topics</p>
        <div>
        {tags && tags.nodes.map((item, index) => {
            return (
            <div key={index} className='relative' >
                {/* <Link href={{pathname: '/blog', query: { topic: item.slug }}} className='emptyLink'>.</Link> */}
                <p className='!pr-0'>{item.name}</p>
            </div>
            )
        })}
        </div>
    </div>
  )
}
