'use client';
import React from 'react';

const Content = (props) => {
	let data = props.items;
	return (
		<>
			{data?.body && <section className={`Content p-0`} dangerouslySetInnerHTML={{ __html: data?.body}}></section>}
		</>
	);
};

export default Content;
