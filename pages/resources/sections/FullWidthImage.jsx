'use client';
import React from 'react';
import Image from 'next/image';

const FullWidthImage = (props) => {
	let data = props.items
	return (
		<>
		 { data && <section className={`FullWidthImage`}>
				{data?.image && <Image
					src={data?.image?.sourceUrl} alt={data?.image?.altText}
					width={300}
					height={250}
				/> }
		</section> }
		</>
	);
};

export default FullWidthImage;
