'use client';
import React from 'react';
import Image from 'next/image';

const FullWidthImage = (props) => {
	let data = props.items
	return (
		<>
		 { data && data?.image && 
				 <Image
					src={data?.image?.sourceUrl} alt={data?.image?.altText}
					width={669} 
					height={400} 
					quality={25} 
				/> 
		 }
		</>
	);
};
export default FullWidthImage;
