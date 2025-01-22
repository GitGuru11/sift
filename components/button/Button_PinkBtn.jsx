import React from 'react'
import Link from 'next/link'
import Style from '../../styles/buttons/btnTransparent.module.css'


function Button_PinkBtn(props) {

  return (
    <>
      <Link href='/' aria-label="first link" className={`button ${Style.btn_transparent} ${Style.video_btn} pr-[60px] inline-block font-bold md:py-[12px] border-[3px] border-pink md:px-[20px] laptop-landscape:px-[20px] py-[16px] px-[24px] uppercase text-white rounded-full  duration-700 hover:bg-pink hover:text-black `} >{props.text}</Link>

    </>
  )
}

export default Button_PinkBtn
