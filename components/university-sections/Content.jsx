'use client';
import React from 'react';
import Link from 'next/link';

const Content = (props) => {
	let data = props.items;
	return (
		<>
			{data.body && <section id={data.id ? data.id : ''} className={`Content p-0 ${data.background} ${data.classes} ${data.padding}`} dangerouslySetInnerHTML={{ __html: data.body}}></section>}
		</>
	);
};

export default Content;
