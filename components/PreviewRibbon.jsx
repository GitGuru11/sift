// import React, { useState, forwardRef } from 'react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Cookies from 'js-cookie';

const PreviewRibbon = ({ visible, onHide }) => {
    const [ribbonHeight, setRibbonHeight] = useState(0);
    const ribbonRef = useRef(null);

    useEffect(() => {
        if (ribbonRef.current) {
            setRibbonHeight(ribbonRef.current.clientHeight);
        }
    }, [visible]);

    return (
        <div ref={ribbonRef} id="previewRibbon" className={`bg-[#79F7C6] flex py-2 z-[100] fixed top-0 w-full wide-nav-screen:max-w-[2776px] wide-nav-screen:mx-auto wide-nav-screen:left-[calc(50%-138px)] wide-nav-screen:translate-x-[-50%] ${visible ? '' : 'hidden'}`}>
            <div className='container'>
                <p className='text-black font-bold xxl-up:text-xl large-desktop:text-base xl:text-base text-center'>Join Sift at Money20/20 USA in Las Vegas</p>
            </div>
            <button className='xxl-up:mr-7 mr-4 cursor-pointer' onClick={onHide}>
                <Image src="/close-black.svg" alt="close btn" width={24} height={24} />
            </button>
        </div>
    )
}

export default PreviewRibbon;