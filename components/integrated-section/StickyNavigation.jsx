import React, { useState, useEffect, use } from 'react';
import StickyStyle from '../../styles/solutions/sticky.module.css'
import Link from 'next/link';
import { Inter } from 'next/font/google';
const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800']
})

export default function StickyNavigation(props) {
    let data = props.items;
    const [isSticky, setSticky] = useState(false);
    const [isHeight, setHeight] = useState(0);
    const [isScrolled, setIsScrolled] = useState(true);
    const [isScrolledSmallDevice, setIsScrolledSmallDevice] = useState(true);
    const [ribbonHeight, setRibbonHeight] = useState(0);
    const [abc, setAbc] = useState(0);
    const [isBorder, setBorder] = useState(0);
    const [winWidth, isWinWidth] = useState(0);

    //Start Responsive dropDown
    const [open, setOpen] = useState(0);
    const [list, setList] = useState('');
    const [navLink, setNavLink] = useState(0);

    //  scrolling 
    const [activeSection, setActiveSection] = useState('');

    const listHandler = (i) => {
        open == i ? setOpen(0) : setOpen(i);
    };

    // Scroll page if url has id
    useEffect(() => {
        // Scroll to section if URL hash is present, indicating client-side execution
        const hashText = window.location.hash.substring(1);
        if (hashText) {
            const element = document.getElementById(hashText);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }
        }
    }, []);
    useEffect(() => {
        const handleResize = () => {
            isWinWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        // Initial call to set window size
        handleResize();

    })

    useEffect(() => {
        let lastScrollTop = 0;

        const handleNavScroll = () => {
            const currentScrollTop = window.scrollY;
            const isScrolledDown = currentScrollTop < lastScrollTop;
            if (currentScrollTop == 40) {
                setIsScrolledSmallDevice(isScrolledDown)
            }
            setIsScrolled(isScrolledDown);
            lastScrollTop = currentScrollTop;
        };

        setTimeout(() => {
            window.addEventListener('scroll', handleNavScroll);
        }, 500);

        return () => {
            window.removeEventListener('scroll', handleNavScroll);
        };
    }, [isScrolled]);

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
        if (ribbonElement) {
            setRibbonHeight(ribbonElement.clientHeight);
            setAbc(document.getElementById('previewRibbon'));
        }

        const headerElement = document.getElementById('header');
        if (headerElement) {
            const headerHeight = headerElement.clientHeight;
            setHeight(headerHeight);
        }
    });

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
        const sections = document.querySelectorAll('section');
        const navList = document.querySelectorAll('.stickyNavigation .listWrap ul li');
        const stickyElement = document.querySelector('.stickyNavigation')
        var headerHeight = '';
        var stickyHeight = '';
        var ribbonElemHeight = '';
        const ribbonElement = document.getElementById('previewRibbon');
        if (ribbonElement) {
            setRibbonHeight(ribbonElement.clientHeight);
            ribbonElemHeight = ribbonElement.clientHeight;
            setAbc(document.getElementById('previewRibbon'));
        }
        const headerElement = document.getElementById('header');
        if (headerElement) {
            headerHeight = headerElement.clientHeight;
            setHeight(headerHeight);
        }
        if (stickyElement) {
            stickyHeight = stickyElement.clientHeight;
        }
        const scrollPosition = window.scrollY + (ribbonElemHeight + headerHeight + stickyHeight);
        // Find the active section based on scroll position
        let activeSectionId = '';
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = (sectionTop + section.offsetHeight);
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionId = section.id;
                sections.forEach((blade) => {
                    blade.classList.remove("active-nav")
                })
                section.classList.add("active-nav")
            }
        });
        navList.forEach((item) => {
            const navLink = item.querySelector('a');
            const attr = navLink.getAttribute('href');
            const realAttr = attr.split('#')[1]
            if (realAttr === activeSectionId) {
                setList(item.innerText)
            }
        })

        setActiveSection(activeSectionId);
    };
    /* Click stickyNav Link */
    const handleStickyClick = (e, id, borderActive) => {
        var ribbon = document.getElementById('previewRibbon');
        var prevSection = document.querySelector("section.active-nav")
        var prevSectionTop
        if (prevSection == null) {
            prevSectionTop = 0
        } else {
            prevSectionTop = document.querySelector("section.active-nav").getBoundingClientRect().top;
        }
        var x = document.querySelectorAll("section")
        e.preventDefault()
        setBorder(borderActive);
        var headrHeight = document.querySelector('header').offsetHeight;
        var ribbonHeight;
        if (ribbon) {
            ribbonHeight = ribbon.clientHeight;
        } else {
            ribbonHeight = 0;
        }
        var stickyHeight = document.querySelector('.stickyNavigation').clientHeight;

        if (winWidth > 1024) {
            x.forEach((item) => {
                var attr = item.getAttribute('id')
                const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                if (attr == id) {
                    x.forEach((section) => {
                        section.classList.remove("active-nav")
                    })
                    item.classList.add("active-nav")
                    var topp = item.getBoundingClientRect().top;
                    var d = 0
                    if (scrollPosition == 0) {
                        d = topp - (scrollPosition + stickyHeight + ribbonHeight)
                    } else if (prevSectionTop > topp) {
                        d = topp + (scrollPosition - (headrHeight + stickyHeight + ribbonHeight))
                    } else if (parseInt(prevSectionTop) < parseInt(topp)) {
                        d = parseInt(topp) + parseInt(scrollPosition - (stickyHeight + ribbonHeight))
                        if (winWidth < 1024) {
                            d = parseInt(topp) + parseInt(scrollPosition - (stickyHeight + ribbonHeight + (headrHeight - 5)))
                        }

                    }

                    window.scrollTo({
                        top: d,
                        behavior: 'smooth'
                    });
                }
            })
        } else {
            setList(e.target.text)
            setNavLink(borderActive)
            setOpen(0)
            x.forEach((item) => {
                var attr = item.getAttribute('id')
                var sticRibon = stickyHeight - (ribbonHeight + 8);

                const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                if (attr == id) {
                    var topp = item.getBoundingClientRect().top;

                    var d = 0
                    if (scrollPosition == 0) {
                        d = topp - (scrollPosition + stickyHeight + ribbonHeight)
                    } else if (prevSectionTop > topp) {
                        d = topp + (scrollPosition - (headrHeight + stickyHeight + ribbonHeight))
                    } else if (parseInt(prevSectionTop) < parseInt(topp)) {
                        d = parseInt(topp) + parseInt(scrollPosition - (stickyHeight + ribbonHeight + (headrHeight - 5)))
                    }
                    window.scrollTo({
                        top: d,
                        behavior: 'smooth'
                    });
                }
            })
        }

    }
    useEffect(() => {
        setTimeout(() => {
            if (window.innerWidth < 1024) {
                const ribbonElement = document.getElementById('previewRibbon');
                if (ribbonElement) {
                    setRibbonHeight(ribbonElement.clientHeight);
                    setAbc(document.getElementById('previewRibbon'));
                }
                const headerElement = document.getElementById('header');
                const headrHeight = document.querySelector('header');
                if (headerElement) {
                    const headerHeight = headerElement.offsetHeight;
                    setHeight(headerHeight);
                }
            }
        }, 500);
    }, []);

    const height = {
        top: `${isHeight + ribbonHeight}px`,
    };

    useEffect(() => {
        var sections = document.querySelectorAll('section');
        var header = document.getElementById('header');
        var footer = document.querySelector('footer');
        var ribbon = document.getElementById('previewRibbon')
        sections.forEach(element => {
            element.addEventListener('click', function () {
                const stickyEle = element.getAttribute('id');
                if (stickyEle != 'stickyNavigation') {
                    setOpen(0)
                }
            })
        });
        if (header) {
            header.addEventListener('click', function () {
                setOpen(0);
            })
        }
        if (footer) {
            footer.addEventListener('click', function () {
                setOpen(0);
            })
        }
        if (ribbon) {
            ribbon.addEventListener('click', function () {
                setOpen(0);
            })
        }
    })

    return (
        <>
            {
                winWidth > 991 ?
                    <section id={data.id ? data.id : ''} className={`stickyNavigation ${data.gatedComponent ? 'GatedHide' : ''} ${isSticky ? 'sticky' : 'sticky'} pt-[29px!important]  ${StickyStyle.mainSticky} pb-[23px!important] z-50 bg-white  transition-all duration-300 ease-in-out shadow-bottom-white-shadow ${data.background} ${data.padding} ${data.classes}`} style={isScrolled ? height : { top: ribbonHeight }}>
                        <div className="container">
                            <ul className="flex relative sm:justify-between">
                                {data?.nav && data?.nav.map((data, index) => {
                                    return (
                                        <li key={index} datatype={data?.id} className={`pr-10 sm:px-1 relative tablet-mid:pr-[12px] laptop-mid:pr-[1.3rem] small-laptop:pr-[1.3rem]`}>
                                            <Link href={`#${data?.source}`} aria-label={`Navigate to ${data?.label}`} className={`text-black capitalize ${activeSection === data?.source ? 'border-b-4 border-pink activated text-pink' : ''} text-[18px] desktop-mid:text-[14px] laptop-small:text-[15px] font-[500] transition-all hover:text-pink pb-[22px] ease-in-out`}
                                                onClick={(e) => handleStickyClick(e, data.source, index)} >{data.label}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </section> : <section id="stickyNavigation" className={`stickyNavigation ${isSticky ? 'sticky' : 'sticky'} ${StickyStyle.mainSticky} z-50 py-[16px] bg-white  transition-all duration-300 ease-in-out shadow-bottom-white-shadow`}
                        style={isScrolledSmallDevice ? height : { top: height }}>
                        <div className="container">
                            <div className="stickyDropDown relative " >
                                <h6 className={`arrow ${open != 0 ? 'rotate' : ''} ${inter.className} font-[600] text-[16px] leading-[24px]`} onClick={() => listHandler(1)}>{list == '' ? data?.nav[0]?.label : list}</h6>
                            </div>
                            <div className={`listWrap absolute top-[40px] bg-white w-full left-0  border-t-[2px] border-solid border-[#e5e7eb] px-[20px] ${open != 0 ? 'show' : 'hide'} shadow-bottom-white-shadow`} >
                                <ul>
                                    {data?.nav && data?.nav.map((data, index) => {
                                        return (
                                            <li key={index} datatype={data?.id} className={`pt-[20px] pb-[17px] border-b-[2px] border-solid last:border-b-[0px] ${activeSection === data?.source ? 'border-pink !border-b-[4px] last:border-b-[4px]' : ''}`}>
                                                <Link href={`#${data?.source}`} className='inline-block w-full text-[16px] font-[600] leading-[24px]' aria-label={`Navigate to ${data?.label}`}
                                                    onClick={(e) => handleStickyClick(e, data.source, index)}>{data?.label}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </section>
            }
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
