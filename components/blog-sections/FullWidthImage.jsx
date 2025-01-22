'use client';
import React from 'react';
import Image from 'next/image';

const FullWidthImage = (props) => {
	let data = props.items
	return (
		<>
		 { data && <section id={data.id ? data.id : ''} className={`FullWidthImage ${data.background} ${data.classes} ${data.padding}`}>
				{data.image && <Image
					src={data.image.sourceUrl} alt={data.image.altText}
					width={300}
					height={250}
				/> }
		</section> }
		</>
	);
};

export default FullWidthImage;
