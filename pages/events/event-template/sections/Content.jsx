import React from 'react';
const Content = (props) => {
	let data = props.items;
	return (
		<div>
			{data?.body && <div dangerouslySetInnerHTML={{ __html: data?.body }}></div>}
		</div>
	);
};

export default Content;
