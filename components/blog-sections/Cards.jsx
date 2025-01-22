import React from 'react'
import Link from 'next/link'
import { useQuery } from '@apollo/client';
import { GET_RELATED_POST } from '../../graphql/getRelatedPost';
export default function Cards(props) {
  const { loading, error, data } = useQuery(GET_RELATED_POST, {
    variables: { ids: props.items },
  });
  let items = '';
  if (data) {
    items = data.posts;
  }
  return (
    <div>
      <p className={`small_font font-[700!important] laptop-landscape:text-[16px] lg:!text-[16px] `}> You may also like</p>
      {items && items.nodes.map((item, index) => {
        return (
          <article key={index} className="relative hover:outline-[2px] hover:shadow-black-shadow">
            {item.categories && item.categories.nodes.slice(0, 2).map((cat, i) => {
              return (
                <p key= {i} className='text-blue text-[14px] font-[700] wide-screen:text-[18px] uppercase'>
                  <Link href={{pathname: '/blog', query: { category: cat.slug }}}>{cat.name}</Link>
                  {item.categories.nodes.length > 1 && i < 1 ? ", " : " "}
                </p> 
            )})}
            <h4 className='wide-screen:text-[28px] xl-up:text-[21px]'>
              <Link href={`/blog/${item.uri}`}>{item.title}</Link>
            </h4>
          </article>
        )
      })}
    </div>
  )
}
