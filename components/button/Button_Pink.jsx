import React from 'react'
import Link from 'next/link'
import Styles from "./../../styles/buttons/btnPink.module.css"

function Button_Pink(props) {
	return (
		<>
			<Link
				href={props?.link}
				aria-label="first link"
				target={props.target}
				className={`${Styles.btn_pink} button z-10 inline-block transition-all md:py-[12px] iPhone-se:mr-0  laptop-landscape:px-[20px] md:px-[14px] py-[16px]  px-[24px] active:opacity-[0.85] font-[700]  border-[3px] border-transparent bg-pink rounded-full uppercase mr-[16px]`}
			>
				{props.text}
			</Link>
		</>
	);
}

export default Button_Pink
