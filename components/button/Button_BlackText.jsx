import React from 'react'
import Link from 'next/link'
import Style from '../../styles/buttons/btnTransparent.module.css';

function Button_BlackText(props) {
  return (
		<>
			<Link
				href={props?.link}
				className={`button ${Style.btn_transparent} inline-block font-bold mr-[16px] md:py-[12px] md:px-[20px] laptop-landscape:px-[20px] py-[19px] px-[24px] h-fit shadow-btn uppercase text-black rounded-full duration-700 hover:text-black`}
			>
				{props.text}
			</Link>
		</>
	);
}

export default Button_BlackText
