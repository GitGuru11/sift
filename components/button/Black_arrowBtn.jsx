import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import { Inter } from 'next/font/google'
const permanentMarker = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })

const redArrow = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.73646 2.26816C9.38467 1.91055 8.8143 1.91067 8.46264 2.26816C8.11073 2.62602 8.11074 3.20592 8.46276 3.56377L11.9241 7.08359L1.90066 7.08457C1.40319 7.08469 1 7.4947 1 8.00083C1.00012 8.50672 1.40331 8.9166 1.90078 8.9166L11.9246 8.91563L8.4624 12.4362C8.11062 12.7939 8.11062 13.3741 8.4624 13.7317C8.63835 13.9105 8.86883 14 9.09943 14C9.32991 14 9.56039 13.9105 9.73634 13.7318L14.7361 8.64754C14.9051 8.47582 15 8.2429 15 7.99985C14.9999 7.7568 14.905 7.52401 14.736 7.35192L9.73646 2.26816Z" fill="#FF3B84" />
</svg>

function Black_arrowBtn(props) {
  return (
    <>
      <Link aria-label="first link" className={`group arrow_btn uppercase text-black relative transition-all duration-300 font-[700] leading-[1] pr-[26px] hover:text-pink ${permanentMarker.className} `} href={props?.link}>
        {/* <span className='absolute top-1/2 -translate-y-1/2 -right-[5px] duration-300 w-[17px] h-[15px] group-hover:w-[20px]'>
        <Image className='w-full h-full object-cover' src='/redArrow.svg' alt='arrow' width={20} height={17} />
        </span> */}
        <span className='absolute top-1/2 -translate-y-1/2 right-0 w-[20px] overflow-hidden'>
          <svg className='-ml-[5px] duration-300 group-hover:-ml-[1px]' xmlns="http://www.w3.org/2000/svg" width='20' height="17" viewBox={`0 0 20 17`} fill="none">
            <path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84" />
          </svg>
        </span>
        {/* <Image className='object-cover absolute right-[2px] top-[50%] -translate-y-[50%] max-h-4 transition-opacity duration-300 ease-linear group-hover:opacity-0' src='/redArrow.svg' alt='arrow' width={16} height={13} />
        <Image className='object-cover absolute -right-[2px] top-[50%] -translate-y-[50%] max-h-[9px] opacity-0 transition-opacity duration-300 ease-linear group-hover:opacity-100' src='/redArrow.svg' alt='arrow' width={20} height={13} /> */}
        {props.text}
      </Link>
    </>
  )
}

export default Black_arrowBtn

