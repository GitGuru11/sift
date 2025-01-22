import React, { useState, useEffect, use } from 'react';
import Link from "next/link";
import StickyStyle from '../styles/solutions/sticky.module.css'
// import {animateScroll as scroll } from 'react-scroll';
// import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function Sticky({ data }) {
    const [isSticky, setSticky] = useState(false);
    const [isHeight, setHeight] = useState(0);
    const [isScrolled, setIsScrolled] = useState(true);
    const [ribbonHeight, setRibbonHeight] = useState(0);
    const [abc, setAbc] = useState(0);
    const [isBorder, setBorder] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollMatch, isScrolledMatch] = useState(true);
    const [visibleSections, setVisibleSections] = useState([]);
    const [winWidth, isWinWidth] = useState(0);

    useEffect(() => {
        let lastScrollTop = 0;

        const handleNavScroll = () => {
            const currentScrollTop = window.scrollY;
            const isScrolledDown = currentScrollTop < lastScrollTop;

            setIsScrolled(isScrolledDown);
            lastScrollTop = currentScrollTop;
        };

        setTimeout(() => {
            window.addEventListener('scroll', handleNavScroll);
        }, 500);

        return () => {
            window.removeEventListener('scroll', handleNavScroll);
        };
    }, []);

    useEffect(() => {

        setTimeout(() => {
            window.addEventListener('scroll', handleScroll);
        }, 500);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const ribbonElement = document.getElementById('previewRibbon');
        if(ribbonElement) {
            setRibbonHeight(ribbonElement.clientHeight);
            setAbc(document.getElementById('previewRibbon'));
        }
        
        const headerElement = document.getElementById('header'); 
        if (headerElement) {
            const headerHeight = headerElement.clientHeight;
            setHeight(headerHeight);
        }
    })

    useEffect(() => {
        const handleDocumentClick = (event) => {
            const isOutsideComponent = event.target.closest('#previewRibbon button');
            if (isOutsideComponent) {
                setRibbonHeight(document.getElementById('previewRibbon').clientHeight);
            }
        };
        document.addEventListener('click', handleDocumentClick);

    }, []);

    const handleScroll = () => {
        setSticky(window.scrollY > 0);
    };
    const handleStickyClick = (e,id,borderActive, sectionId, offset) => {
        var x = document.querySelectorAll("section")
        e.preventDefault() 
        setBorder(borderActive);
        var headrHeight = document.querySelector('header').offsetHeight;

        x.forEach((item) => {
            var attr = item.getAttribute('id')
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            if (attr == id) {
                var topp = item.getBoundingClientRect().top;
                var d = (scrollPosition + topp) -99
                if (topp < 0) {
                   d= d - (headrHeight)
                }
                window.scrollTo({
                top: d,
                behavior: 'smooth'
                });
            }
        })
    }
        
    

    const height = {
        top: `${isHeight + ribbonHeight}px`,
    };

    //On scroll observer sections
    const handleIntersection = (entries) => {
        const visibleSections = entries
            .filter(entry => entry.isIntersecting || entry.intersectionRatio > 0)
            .map(entry => entry.target.id);
    
        const windowHeight = window.innerHeight;
    
        const filteredSections = visibleSections.filter(sectionId => {
            const sectionElement = document.getElementById(sectionId);
    
            // Check if the element is found before accessing its properties
            if (sectionElement) {
                const sectionBottom = sectionElement.getBoundingClientRect().bottom;
    
                return sectionBottom - 200 > 0;
            }
    
            return false;
        });
    
        setVisibleSections(filteredSections);
    };
    
    
    
    //On scroll observer sections
    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
          root: null,
          threshold: 0.5,
        });
    
        const sectionElements = document.querySelectorAll('section:not(.sticky');
    
        sectionElements.forEach(sectionElement => {
          observer.observe(sectionElement);
        });
    
        return () => {
          observer.disconnect();
        };
      }, [visibleSections]);

    useEffect(() => { 
        // isWinWidth(window.innerWidth);
        const handleResize = ( ) => {
            isWinWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
         // Initial call to set window size
        handleResize();
        
    })
      

    return (
        <>
            {
                winWidth > 1024 ? 
                    <section className={`${isSticky ? 'sticky' : 'sticky'} pt-[29px] ${StickyStyle.mainSticky} pb-[23px] z-50 bg-white  transition-all duration-300 ease-in-out shadow-bottom-white-shadow`} style={isScrolled ? height : { top: ribbonHeight }}>
                        <div className="container">
                            <ul className="flex relative sm:justify-between">
                                {data.map((data, index) => {
                                    return (
                                        <li key={index} datatype={data.id} className="pr-10 sm:px-1 relative tablet-mid:pr-[12px]">
                                            <a href={`#${data.url}`} aria-label={`Navigate to ${data.title}`} className={`text-black capitalize ${visibleSections[0] === data.url ? 'border-b-4 border-pink activated' : ''} text-[18px] font-[500] transition-all hover:text-pink pb-[22px] ease-in-out`} onClick={(e) => handleStickyClick(e,data.url,index, data.url, 50)} >{data.title}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </section> :  ''
            }

                    {/* <div className={`${isSticky ? 'sticky' : ''} ${StickyStyle.mainSticky} pt-[29px] pb-[23px] tablet:py-[15px] sm:py-[15px] phablet:py-[15px] z-50 bg-white transition-all duration-300 ease-in-out`} style={height}>
                        <div className="container">
                            <div className={`${StickyStyle.dropdown} relative`}>
                                <p className={`relative pl-2 font-semibold  ${isdropDown ? StickyStyle.open : ''}`} onClick={() => dropDown() }>{linkData ? linkData : 'Select'}</p>
                                <ul className={`absolute bg-white w-[calc(100%+40px)] ml-[-20px] border-t-[3px] pb-3 border-pink transition-all duration-300 ease-in-out px-6 mt-[10px] z-50 ${isdropDown ? 'h-auto visible' : 'h-0 hidden'}`}>
                                    {stickyData.map((data, index) => {
                                        return (
                                            <li key={index} datatype={data.id} className={`pr-10 sm:px-1 tablet:mb-2`}>
                                                <a href={`#${data.url}`} aria-label={`Navigate to ${data.title}`} className={`text-black  ${visibleSections[0] === data.url ? 'border-b-4 border-pink' : ''} w-full border-pink ${linkData === data.title ? 'hidden' : 'inline-block'} pb-2 pt-3 border-b-[1px] pb-2 text-lg hover:border-b-4 tablet:pb-1 ease-in-out text-sm`}  onClick={() => dropLinkActive(index, data.title)} >{data.title}</a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            
                        </div>
                    </div> */}
            <style jsx>
                {
                    `
                    .activated{
                        color:#FF3B84;
                        -webkit-text-stroke: 1px #FF3B84;
                    }
                    `
                }
            </style>
        </>
        
        
    )
}
