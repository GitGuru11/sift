import React from 'react'
import Link from 'next/link'
import Styles from './../../styles/buttons/btnWhite.module.css';
function Button_White(props) {
  return (
		<>
			<Link
				href={props?.link}
				aria-label="first link"
				className={`button ${Styles.btn_white} inline-block transition-all duration-500 md:py-[12px] laptop-landscape:px-[20px] md:px-[20px] py-[16px] px-[24px] font-[700] border-[3px] border-white bg-white rounded-full uppercase hover:text-pink hover:border-pink `}
			>
				{props.text}
			</Link>
		</>
	);
}

export default Button_White
