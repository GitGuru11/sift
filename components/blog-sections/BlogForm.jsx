import React, { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800']
  })


export default function BlogForm() {

    const [isFocus, setEleFocus] = useState(false);
    const [drpList, isSelectList] = useState('United states');
    const [isInputBox, setInputValue] = useState('');

  const selectDrop = (val, drpSelectValue) => {

    if (val === true) {
      setEleFocus(true);
      isSelectList(drpSelectValue)

    }
  }
  useEffect(() => {
    var sectionId = document.getElementById('blogDetail');
    if (sectionId) {
      sectionId.addEventListener('click', function () {
        setEleFocus(false);
      })
    }

  })

  const listUpdate = (listValue) => {
    isSelectList(listValue);
  }

  const inputText = (inputVaue) => {
    setInputValue(inputVaue);
  }

  // const arrow = (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     width="14"
  //     height="8"
  //     viewBox="0 0 14 8"
  //     fill="none"
  //     className='sm:w-[10px]'
  //   >
  //     <path
  //       d="M13.6871 1.80909C14.1044 1.39531 14.1042 0.724429 13.6871 0.310796C13.2696 -0.103121 12.5931 -0.103121 12.1756 0.310937L8.06914 4.3823L8.068 4.38159C6.98501 5.30805 6.98501 5.30805 6.98501 5.30805C6.98501 5.30805 6.98501 5.30805 5.93063 4.38173L5.93177 4.38286L1.82446 0.310515C1.4071 -0.103261 0.730267 -0.103261 0.313052 0.310515C0.104445 0.517473 -3.15222e-07 0.788567 -3.03366e-07 1.0598C-2.91516e-07 1.3309 0.104445 1.60199 0.31291 1.80895L6.24454 7.68982C6.44488 7.88858 6.71661 8.00018 7.00017 8.00018C7.28373 8.00004 7.55532 7.88844 7.75609 7.68967L13.6871 1.80909Z"
  //       fill="black"
  //     />
  //   </svg>
  // );

  return (
    <div>
        <p className={`small_font font-[700!important] laptop-landscape:text-[16px] lg:!text-[16px]`}>Sign up to get our latest insights in your inbox:</p>
        <form>
        <div>
            <label htmlFor="" className={`${inter.className}`}>email address*</label>
            <input type="text" value={isInputBox} className={`${isInputBox != '' ? '!outline-[3px] !outline-pink ' : 'outline-transparent'}`} onChange={(e) => inputText(e.target.value)} />
        </div>
        <div>
            <label htmlFor="" className={`${inter.className}`}>Country*</label>
            <div className={`hover:outline-pink mr-[16px] cursor-pointer p-[0] sm:mr-[5px] outline outline-[1px] border-[0] lg:p-0 ${isFocus === true ? 'outline-[2px] outline-pink' : 'outline-[1px] outline outline-black'} sm:mb-[10px]`}>
            {/* <span className='inline relative'></span> */}
            <p className='!font-[400] p-[10px] xl-up:!text-[18px] relative dropDownArrow ' onClick={() => selectDrop(true)}>United States</p>
            <ul className={`absolute z-[1] top-[50px] duration-300 left-0 topic w-full p-[10px] overflow-auto bg-white ${isFocus === true ? 'h-full opacity-1 visible overflow-visible' : 'h-0 opacity-0 invisible overflow-hidden'} z-[99] shadow-filter-shadow rounded-[4px] sm:w-[230px]`}>
                <li className={`mb-[16px] last:mb-0 hover:text-pink z-[99]`} onClick={() => listUpdate('India')}><p className='!font-[400]'>India</p></li>
            </ul>
            </div>
        </div>
        <div>
            {/* <button type='submit' className='button group arrow_btn bg-pink py-[16px] px-[24px] xl-up:text-[16px] w-full rounded-[100px] uppercase text-black relative transition-all wide-screen:text-[20px] duration-300 font-[700] leading-[1] pr-[26px] hover:'>Submit</button> */}
            <button type='submit' className='btnPink_btn_pink__8Yxi7 button z-10 inline-block transition-all md:py-[12px] iPhone-se:mr-0  laptop-landscape:px-[20px] md:px-[14px] py-[10px] text-[16px] px-[24px] active:opacity-[0.85] font-[700]  border-[3px] border-transparent bg-pink rounded-full uppercase mr-[16px]'>Submit</button>
        </div>

        </form>
    </div>
  )
}
