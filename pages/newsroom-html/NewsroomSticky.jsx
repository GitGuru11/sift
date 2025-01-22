import React, { useState, useEffect, use } from 'react';
import Link from "next/link";
import StickyStyle from '../../styles/solutions/sticky.module.css'

export default function Sticky({ ribbonVisible }) {
    const stickyData = [
        {
            id: "1",
            pageName: "newsroom",
            title: "In the news",
            url: "in-the-news"
        },
        {
            id: "2",
            pageName: "newsroom",
            title: "Press releases",
            url: "press-release"
        },
        {
            id: "3",
            pageName: "newsroom",
            title: "Media kit",
            url: "media-kit"
        },
        {
            id: "4",
            pageName: "newsroom",
            title: "Our mission",
            url: "our-mission"
        }
    ];

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
    const [isdropDown, setDropDown] = useState(false);
    // const [idMatch, isIdMatch] = use
    const [linkData, setLinkData] = useState();

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
        const handleResize = () => {
            setRibbonHeight(document.getElementById('previewRibbon').clientHeight);
        };
        setAbc(document.getElementById('previewRibbon'));
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    useEffect(() => {
        const headerElement = document.getElementById('header'); // Replace with your actual header ID

        if (headerElement) {
            const headerHeight = headerElement.clientHeight;
            setHeight(headerHeight);
        }
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
        const handleDocumentClick = (event) => {
            const isOutsideComponent = event.target.closest('#previewRibbon button');
            if (isOutsideComponent) {
                setRibbonHeight(document.getElementById('previewRibbon').clientHeight);
            }
        };

        // Add event listener to the document
        document.addEventListener('click', handleDocumentClick);

        // Clean up the event listener on component unmount
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
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
                console.log(topp)
                // console.log(scrollPosition)
                var d = (scrollPosition + topp) -100
                if (topp < 0) {
                   d= d - (headrHeight)
                }

                window.scrollTo({
                top: d,
                behavior: 'smooth'
                });
                // $('html,body').animate({scrollTop: d}, 0, 'linear');
            }
        })
    }

    const dropDown = () => {
        setDropDown(!isdropDown);
    }

    const dropLinkActive = (index, dropLink) => {
        setLinkData(dropLink);
    }

    const height = {
        top: `${isHeight + ribbonHeight}px`,
    };

    useEffect(() => {
        const mainElement = document.getElementsByTagName('main')[0];
        const headerElement = document.getElementsByTagName('header')[0];
        setTimeout(() => {
            if(ribbonHeight === 0) {
                if(isHeight === 0) {
                    document.documentElement.style.scrollPadding = `${isHeight}px`;
                } else {
                    document.documentElement.style.scrollPadding = `0px`;
                }
            } else {
                var totalHeight = isHeight + ribbonHeight + 80;
                if(isScrolled === true) {
                    document.documentElement.style.scrollPadding = `${totalHeight}px`;
                } else {
                    // var plusRibbonHeight = ribbonHeight + 80;
                    var minusTotalHeight = totalHeight - isHeight;
                    document.documentElement.style.scrollPadding = `${minusTotalHeight}px`;
                    // mainElement.style.height = '5rem';

                }
            }
        }, 500);
    });

    const handleIntersection = (entries) => {
        const visibleSections = entries
        .filter(entry => entry.isIntersecting)
        .map(entry => entry.target.id);

        setVisibleSections(visibleSections);
    };

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

        // Clean up event listener on component unmount
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    })
      

    return (
        <>
            {
                winWidth > 1024 ? 
                    <section className={`${isSticky ? 'sticky' : 'position-initial'} pt-[29px] ${StickyStyle.mainSticky} pb-[23px] z-50 bg-white  transition-all duration-300 ease-in-out shadow-bottom-white-shadow`} style={isScrolled ? height : { top: ribbonHeight }}>
                        <div className="container">
                            <ul className="flex relative sm:justify-between">
                                {stickyData.map((data, index) => {
                                    return (
                                        <li key={index} datatype={data.id} className="pr-10 sm:px-1 relative tablet-mid:pr-[12px]">
                                            <a href={`#${data.url}`} aria-label={`Navigate to ${data.title}`} className={`text-black ${visibleSections[0] === data.url ? 'border-b-4 border-pink activated' : ''} text-[18px] font-[500] transition-all hover:text-pink pb-[22px] ease-in-out`} onClick={(e) => handleStickyClick(e,data.url,index, data.url, 50)} >{data.title}</a>
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
