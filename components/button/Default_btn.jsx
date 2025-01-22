import React from 'react'
import Link from 'next/link'


function Default_btn(props) {
	return (
		<>
			<Link
				href={props?.link}
				aria-label="first link"
				className={`${props.className} default-btn button inline-block font-bold mr-[16px] md:py-[9px] md:px-[20px] laptop-landscape:px-[20px] py-[16px] px-[24px] h-fit uppercase border-[3px] border-pink text-black rounded-full duration-700 hover:text-black`}
			>
				{props.text}
			</Link>
		</>
	);
}

export default Default_btn
