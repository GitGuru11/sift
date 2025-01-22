'use client';
import React from 'react';
import Image from 'next/image';

const Quote = (props) => {
	let data = props.items;
	return (
		<section id={data.id ? data.id : ''} className={`Quote quote_block  py-[64px] px-0 ${data.background} ${data.classes} ${data.padding}`}>
			<blockquote className='p-[40px] bg-[#FFCA36] rounded-[24px] sm:p-[20px]'>
				<Image
					src="/blogDetail/doublequote.svg"
					width={40}
					height={40}
					className="mb-[16px]"
					alt=""
				/>
				<h4 className='!mt-[0px]' dangerouslySetInnerHTML={{ __html: data.quote}}></h4>
				<div className="auther">
					<p className='font-bold !mb-[0]' dangerouslySetInnerHTML={{ __html: data.authorName}}></p>
					<p className="small_font">{data.authorDesignation} {data.authorCompany ? `at ${data.authorCompany}` : ''}</p>
				</div>
			</blockquote>
		</section>
	);
};

export default Quote;
