import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect, useRef, useContext, Children } from 'react';
import { useRouter } from 'next/router';
import styles from './header.module.css';
import Btn_Pink from '../button/Button_Pink';
import Button_Black from '../button/Button_Black'
import NavContext from '../contexts/NavContext';

import $ from 'jquery';

function NavItem({ data }) {
    const [activeNavItem, setActiveNavItem] = useContext(NavContext);
    // Function to update styles based on the current route

    const router = useRouter();
    const asPath = router.asPath;

    const isActive = activeNavItem === data.url;
    let isActiveMenuHeader = false;

    if (data?.subItems) {
        isActiveMenuHeader = data.subItems.find(item => {
                if (item?.subItems) {
                    return item.subItems.find(subItem => subItem.url === activeNavItem);
                }
                return item.url === activeNavItem;
            }
        );
    }

    // toggle multilevel menu
    const toggleSubMenu = (event) => {
        event.preventDefault();
        const parentListItem = event.target.closest('li');
        const hasOpenSibling = parentListItem.parentNode.querySelector('li.header_open__WQ8dW');
        const hasOpenChild = parentListItem.parentNode.querySelector('li.header_open__WQ8dW li.header_open__WQ8dW');

        if (hasOpenSibling && hasOpenSibling !== parentListItem) {
            hasOpenSibling.classList.remove(styles.open);
            if (hasOpenChild != null) {
                hasOpenChild.classList.remove(styles.open);
            }
        }
        parentListItem.classList.toggle(styles.open);
    };

    return (
        <li className={`${styles.scrollBarHidden} dropDownMenuHeading ${isActiveMenuHeader ? 'header_open__WQ8dW' : ''}`}>
            {data.subItems ? (
                <>
                    <p className={`${styles.borderBottom} py-4 pl-6 block relative group hover:text-pink`} onClick={toggleSubMenu}>
                        {data.label}
                        <span className='w-[14px] h-[6px] absolute left-6 top-2/4'>
                            <span className={`absolute top-0 left-0 w-[10px] h-[2px] bg-black inline-block transition-all rotate-45`}></span>
                            <span className={`absolute top-0 left-[6px] w-[10px] h-[2px] bg-black inline-block transition-all -rotate-45`}></span>
                        </span>
                    </p>
                    <ul className={`${styles.borderBottom} ${styles.scrollBarHidden} max-h-0 overflow-hidden transition-[max-height] duration-500`}>
                        {data.subItems.map((subItem, subIndex) => (
                            <NavItem key={subIndex} data={subItem} />
                        ))}
                    </ul>
                </>
            ) : (
                <>
                    {!data.button ? (
                        <Link href={`${data.url}`} aria-label="first link" className={` ${data.category === "category" ? "text-blue font-bold text-sm pointer-events-none" : "text-[15px] font-semibold hover:text-pink transition-all"} py-[11px] pl-[50px] pr-[15px] block rounded-tr-full rounded-br-full rounded-bl-none rounded-tl-none ${isActive ? 'bg-pink/[0.1] text-pink' : ''}`} {...(data.externalLink ? { target: "_blank" } : {})}>
                            {data.label}
                        </Link>
                    ) : (
                        <div className={`${styles.customBtn} text-center my-3`}>
                            <Button_Black text={data.label} link={data.url} />
                        </div>
                    )}
                </>
            )}
        </li>
    );
}


export default function Header({ data, ribbonVisible, ribbonHeight }) {
    const [activeNavItem, setActiveNavItem] = useContext(NavContext);
    const [openMenu, setOpenMenu] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true);
    const [fillColor, setFillColor] = useState("");
    const [fillColorBlue, setFillColorBlue] = useState("");
    const [strokeColorBlack, setStrokeColorBlack] = useState("");
    const [toggleBtnColor, setToggleBtnColor] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const [isScrolled, setIsScrolled] = useState(true);
    const [expanded, setExpanded] = useState(false);
    const [navigationTop, setNavigationTop] = useState(0);
    const navigationRef = useRef(null);

    const router = useRouter();
    const asPath = router.asPath;

    setActiveNavItem(asPath);

    // toggle menu on smaller width
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Toggle searchBar
    const handleSearchClick = () => {
        setExpanded(!expanded);
    };

    const handleWindowResize = () => {
        const banner = document.querySelector('.banner.bg-white');
        const bannerSkyBlue = document.querySelector('.banner.bg-skyblue');
        if (window.innerWidth > 992) {
            setIsMenuOpen(false);
            setFillColor("#000");
            setFillColorBlue("#2E69FF");
            setStrokeColorBlack("#fff");
            if (banner !== null || bannerSkyBlue !== null) {
                setStrokeColorBlack("#000");
            } else {
                setStrokeColorBlack("#fff");
            }
        } else {
            setStrokeColorBlack("#000");
            if (banner !== null || bannerSkyBlue !== null) {
                setFillColor("#000");
                setFillColorBlue("#2E69FF");
                setToggleBtnColor("bg-black");
            } else {
                setFillColor("#fff");
                setFillColorBlue("#fff");
                setToggleBtnColor("bg-white");
            }
        }
    };

    useEffect(() => {

        // hide and show navigation on scroll
        let lastScrollTop = 0;

        const handleScroll = () => {
            const currentScrollTop = window.scrollY;

            const isScrolledDown = currentScrollTop < lastScrollTop;
            if (currentScrollTop > 100) {
                setIsScrolled(isScrolledDown);
            }

            // Additional logic for the banner
            const banner = document.querySelector('.banner.bg-white');
            const bannerSkyBlue = document.querySelector('.banner.bg-skyblue');
            let isScrolled;
            if (window.innerWidth > 992) {
                isScrolled = currentScrollTop > 100;
            } else {
                isScrolled = currentScrollTop > 10;
            }
            // const isScrolled = currentScrollTop > 10;

            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
                if (banner !== null || bannerSkyBlue !== null) {
                    if (isScrolled) {
                        setStrokeColorBlack("#fff");
                        setToggleBtnColor("bg-white");
                    } else {
                        setStrokeColorBlack("#000");
                        setToggleBtnColor("bg-black");
                    }
                }
            }


            lastScrollTop = currentScrollTop;
        };

        // adjust header according to ribbon availability

        setNavigationTop(ribbonVisible ? ribbonHeight : 0);

        setTimeout(() => {
            window.addEventListener('scroll', handleScroll);
            window.addEventListener('resize', handleWindowResize);
            handleWindowResize();
        }, 500);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [scrolled, ribbonVisible, ribbonHeight]);

    useEffect(() => {
        const handleRouteChange = () => {
            setTimeout(() => {
                handleWindowResize();
                const page = document.querySelector('.fraud-benchmarking-hub');
                if (page) {
                    setTimeout(() => {
                        page.style.opacity = "1";
                    }, 500);
                }
            }, 500);
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);


    return (
        <header ref={navigationRef} id='header' className={`${styles.header} fixed w-full lg-up:h-[100px] lg:h-[70px] top-0 left-0 flex transition-all duration-300 ease-in-out wide-nav-screen:max-w-[2776px] wide-nav-screen:left-[calc(50%-138px)] wide-nav-screen:translate-x-[-50%] lg:z-[100] ${scrolled ? 'lg:bg-black' : 'lg:transparent'} ${isScrolled ? 'lg-up:z-[98]' : 'lg-up:z-0'}`} style={{ top: `${navigationTop}px` }}>
            <div className={`relative w-full flex items-center xxl-up:pr-20  pr-5`}>
                <div className={`${styles.shadow} absolute top-0 lg:w-60 xl:w-[240px] xl-up:w-[276px] lg-up:left-0 h-full bg-white transition-all duration-300 ease-in-out ${isDesktop && !isMenuOpen ? 'left-[-100%]' : 'left-0'}`}></div>
                <div className="row flex justify-between w-full items-center">
                    <Link href={'/'} aria-label="first link" className={`relative z-[1] pl-6 desktop:w-[146px] lg:w-[108px]`}>
                        <svg width="138" height="48" viewBox="0 0 138 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${scrolled && !isMenuOpen ? styles.navScroll : ''} xl:w-full xl:h-full`}>
                            <g clipPath="url(#clip0_1311_6081)">
                                <path d="M136.824 37.4206C136.628 37.471 136.353 37.529 135.997 37.5871C135.64 37.6452 135.228 37.6761 134.758 37.6761C134.13 37.6761 133.55 37.5794 133.021 37.3858C132.492 37.1923 132.06 36.8206 131.735 36.271C131.406 35.7213 131.245 34.9084 131.245 33.8361V17.5858H137.439V12.6929H131.245V5.96516H125.086V12.6929H112.709V8.77935C112.709 7.49806 113.007 6.7858 113.603 6.10838C114.199 5.43096 115.199 5.09032 116.598 5.09032C117.202 5.09032 117.719 5.14064 118.159 5.24516C118.598 5.34967 118.954 5.44645 119.229 5.53548L120.625 0.646448C120.205 0.491609 119.562 0.321287 118.7 0.13161C117.833 -0.0541964 116.802 -0.15097 115.595 -0.15097C113.956 -0.15097 112.45 0.162578 111.074 0.789675C109.698 1.41677 108.597 2.36129 107.765 3.62322C106.934 4.88516 106.519 6.38322 106.519 8.26838V12.6929H100.32V17.5858H106.519V42.4529H112.709V17.5781H125.082V35.0129C125.098 36.8361 125.451 38.3497 126.282 39.5535C127.113 40.7574 128.207 41.6439 129.563 42.2206C130.92 42.7974 132.402 43.0723 134.013 43.0452C134.969 43.0181 135.769 42.929 136.42 42.7935C137.071 42.6581 137.655 42.5071 138.051 42.3871L136.82 37.4206H136.824ZM74.0534 25.7148L69.1607 24.6271C67.5377 24.24 66.3615 23.7523 65.6323 23.1639C64.907 22.5755 64.5424 21.8013 64.5424 20.8452C64.5424 19.7342 65.0874 18.8206 66.1733 18.1084C67.2593 17.3961 68.6079 17.04 70.2192 17.04C71.4111 17.04 72.4069 17.2297 73.2066 17.6129C74.0064 17.9961 74.6415 18.4839 75.112 19.0877C75.4648 19.5368 75.7432 20.0013 75.947 20.4813C76.0176 20.6439 76.0764 20.8103 76.1313 20.9806H81.9257C81.8787 20.7019 81.8238 20.4116 81.7493 20.1058C81.6042 19.5019 81.4121 18.9329 81.1808 18.391C80.4948 16.7729 79.4519 15.4761 78.0131 14.4116C76.0999 12.9948 73.4811 12.2864 70.1526 12.2864C67.8474 12.2864 65.8087 12.6581 64.0328 13.4013C62.2568 14.1445 60.869 15.1819 59.8653 16.5135C58.8656 17.8452 58.3638 19.3974 58.3638 21.1703C58.3638 23.3032 59.0381 25.0684 60.3867 26.4581C61.7354 27.8477 63.8328 28.8542 66.6752 29.4735L71.7835 30.5806C73.2106 30.8903 74.273 31.3548 74.9669 31.9664C75.6608 32.5819 76.0058 33.3484 76.0058 34.2658C76.0058 35.3768 75.4452 36.3174 74.3279 37.0877C73.2066 37.8581 71.7129 38.2413 69.839 38.2413C68.11 38.2413 66.7065 37.8774 65.6245 37.1458C64.5424 36.4142 63.825 35.3303 63.4721 33.8942H57.415C57.415 34.1652 57.4307 34.44 57.4778 34.711C57.713 36.0426 58.1599 37.2232 58.8225 38.2529C59.4811 39.2826 60.3554 40.1613 61.4374 40.889C63.6054 42.3445 66.4164 43.0723 69.8742 43.0723C72.3363 43.0723 74.5004 42.6735 76.3665 41.88C78.2327 41.0826 79.695 39.9871 80.7574 38.5935C81.8199 37.1961 82.3491 35.5935 82.3491 33.7819C82.3491 31.6761 81.663 29.9574 80.2948 28.6335C78.9266 27.3097 76.8409 26.3342 74.0378 25.7148H74.0534ZM88.567 42.4413H94.7613V12.6813H88.567V42.4374V42.4413Z" fill={`${isMenuOpen ? '#000' : fillColor}`} className='transition-all duration-300 ease-in-out' />
                                <path d="M91.6521 9.6271C93.7048 9.6271 95.3687 7.98413 95.3687 5.95743C95.3687 3.93072 93.7048 2.28775 91.6521 2.28775C89.5995 2.28775 87.9355 3.93072 87.9355 5.95743C87.9355 7.98413 89.5995 9.6271 91.6521 9.6271Z" fill={`${isMenuOpen ? '#2E69FF' : fillColorBlue}`} className='transition-all duration-300 ease-in-out' />
                                <path d="M26.2909 26.3497C25.0834 27.5419 23.1192 27.5419 21.9117 26.3497C20.7042 25.1574 20.7042 23.2181 21.9117 22.0258C23.1192 20.8336 25.0834 20.8336 26.2909 22.0258C27.4984 23.2181 27.4984 25.1574 26.2909 26.3497ZM14.2904 14.5007C13.0829 15.6929 13.0829 17.6323 14.2904 18.8245C15.4979 20.0168 17.462 20.0168 18.6695 18.8245C19.877 17.6323 19.877 15.6929 18.6695 14.5007C17.462 13.3084 15.4979 13.3084 14.2904 14.5007ZM6.66899 11.2994C7.87649 12.4916 9.84064 12.4916 11.0481 11.2994C12.2556 10.1071 12.2556 8.16775 11.0481 6.97549C9.84064 5.78324 7.87649 5.78324 6.66899 6.97549C5.46149 8.16775 5.46149 10.1071 6.66899 11.2994ZM41.5297 37.0723C40.3222 35.88 38.358 35.88 37.1505 37.0723C35.943 38.2645 35.943 40.2039 37.1505 41.3961C38.358 42.5884 40.3222 42.5884 41.5297 41.3961C42.7372 40.2039 42.7372 38.2645 41.5297 37.0723ZM33.9083 33.871C35.1158 32.6787 35.1158 30.7394 33.9083 29.5471C32.7008 28.3549 30.7367 28.3549 29.5292 29.5471C28.3217 30.7394 28.3217 32.6787 29.5292 33.871C30.7367 35.0632 32.7008 35.0632 33.9083 33.871ZM29.5292 14.4968C28.3217 15.689 28.3217 17.6284 29.5292 18.8207C30.7367 20.0129 32.7008 20.0129 33.9083 18.8207C35.1158 17.6284 35.1158 15.689 33.9083 14.4968C32.7008 13.3045 30.7367 13.3045 29.5292 14.4968ZM26.2869 6.97162C25.0794 5.77936 23.1153 5.77936 21.9078 6.97162C20.7003 8.16388 20.7003 10.1032 21.9078 11.2955C23.1153 12.4878 25.0794 12.4878 26.2869 11.2955C27.4944 10.1032 27.4944 8.16388 26.2869 6.97162ZM14.2864 3.77033C15.4939 4.96259 17.4581 4.96259 18.6656 3.77033C19.6143 2.83356 19.8143 1.44388 19.2772 0.309687C17.2307 0.708397 15.2744 1.35872 13.4435 2.22582C13.5612 2.79098 13.8395 3.32904 14.2864 3.77033ZM44.768 29.5432C43.5605 30.7355 43.5605 32.6749 44.768 33.8671C45.211 34.3045 45.7598 34.5832 46.3322 34.6994C47.2104 32.8916 47.8691 30.96 48.2729 28.9394C47.1242 28.409 45.7167 28.6065 44.768 29.5432ZM37.1466 22.0181C35.9391 23.2103 35.9391 25.1497 37.1466 26.3419C38.3541 27.5342 40.3183 27.5342 41.5258 26.3419C42.7333 25.1497 42.7333 23.2103 41.5258 22.0181C40.3183 20.8258 38.3541 20.8258 37.1466 22.0181ZM37.1466 6.96775C35.9391 8.16001 35.9391 10.0994 37.1466 11.2916C38.3541 12.4839 40.3183 12.4839 41.5258 11.2916C42.7333 10.0994 42.7333 8.16001 41.5258 6.96775C40.3183 5.77549 38.3541 5.77549 37.1466 6.96775ZM29.5252 3.76646C30.7327 4.95872 32.6969 4.95872 33.9044 3.76646C34.3474 3.32904 34.6297 2.78711 34.7473 2.22195C32.9164 1.35485 30.9601 0.704526 28.9137 0.305817C28.3765 1.44001 28.5765 2.82969 29.5252 3.76646ZM44.768 18.8168C45.7167 19.7536 47.1242 19.951 48.2729 19.4207C47.8691 17.4 47.2104 15.4684 46.3322 13.6607C45.7598 13.7768 45.2149 14.0516 44.768 14.4929C43.5605 15.6852 43.5605 17.6245 44.768 18.8168ZM11.0442 41.3884C12.2517 40.1961 12.2517 38.2568 11.0442 37.0645C9.83672 35.8723 7.87257 35.8723 6.66507 37.0645C5.45757 38.2568 5.45757 40.1961 6.66507 41.3884C7.87257 42.5807 9.83672 42.5807 11.0442 41.3884ZM3.42285 29.5394C2.4741 28.6026 1.06666 28.4052 -0.0820312 28.9355C0.321776 30.9561 0.980412 32.8878 1.85859 34.6955C2.43098 34.5794 2.97984 34.3045 3.42285 33.8632C4.63035 32.671 4.63035 30.7316 3.42285 29.5394ZM18.6656 44.5897C17.4581 43.3974 15.4939 43.3974 14.2864 44.5897C13.8434 45.0271 13.5612 45.569 13.4435 46.1342C15.2744 47.0013 17.2307 47.6516 19.2772 48.0503C19.8143 46.9161 19.6143 45.5265 18.6656 44.5897ZM18.6656 33.8632C19.8731 32.671 19.8731 30.7316 18.6656 29.5394C17.4581 28.3471 15.4939 28.3471 14.2864 29.5394C13.0789 30.7316 13.0789 32.671 14.2864 33.8632C15.4939 35.0555 17.4581 35.0555 18.6656 33.8632ZM6.66507 22.0142C5.45757 23.2065 5.45757 25.1458 6.66507 26.3381C7.87257 27.5303 9.83672 27.5303 11.0442 26.3381C12.2517 25.1458 12.2517 23.2065 11.0442 22.0142C9.83672 20.8219 7.87257 20.8219 6.66507 22.0142ZM3.42285 18.8129C4.63035 17.6207 4.63035 15.6813 3.42285 14.489C2.97984 14.0516 2.43098 13.7729 1.85859 13.6568C0.980412 15.4645 0.321776 17.3961 -0.0820312 19.4168C1.06666 19.9471 2.4741 19.7497 3.42285 18.8129ZM33.9044 44.5858C32.6969 43.3936 30.7327 43.3936 29.5252 44.5858C28.5765 45.5226 28.3765 46.9123 28.9137 48.0465C30.9601 47.6478 32.9164 46.9974 34.7473 46.1303C34.6297 45.5652 34.3513 45.0271 33.9044 44.5858ZM21.9039 37.0607C20.6964 38.2529 20.6964 40.1923 21.9039 41.3845C23.1114 42.5768 25.0755 42.5768 26.283 41.3845C27.4905 40.1923 27.4905 38.2529 26.283 37.0607C25.0755 35.8684 23.1114 35.8684 21.9039 37.0607Z" fill={`${isMenuOpen ? '#2E69FF' : fillColorBlue}`} className='transition-all duration-300 ease-in-out' />
                            </g>
                            <defs>
                                <clipPath id="clip0_1311_6081">
                                    <rect width="138" height="48" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                    <div className={`${styles.scrollBarHidden} flex lg:flex-wrap lg-up:justify-between lg:overflow-y-scroll lg:absolute lg:top-[100%] lg:h-[calc(100vh-80px)] lg:w-60 lg:bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'menu-open left-0' : 'lg:left-[-100%]'}`}>
                        <div className={`${scrolled ? 'bg-black' : 'bg-transparent'} ${isScrolled ? 'lg-up:translate-y-[0] show' : 'lg-up:translate-y-[-112px]'} absolute h-full xl:w-[calc(100%-244px)] xl-up:w-[calc(100%-276px)] right-0 top-0 transition-all lg:hidden`}></div>
                        <div className='lg-up:flex'>
                            <aside className={`${styles.scrollBarHidden} lg-up:bg-white lg-up:absolute lg-up:overflow-y-scroll lg-up:left-0 lg-up:top-[100%] lg-up:h-[calc(100vh-112px)] xl-up:w-[276px] xl:w-[240px] lg-up:transition-all`}>
                                <nav className='pr-4 h-full lg-up:flex lg-up:flex-col lg-up:justify-between'>
                                    <ul className={`${styles.scrollBarHidden}`}>
                                        {data.items.map((item, index) => (
                                            <NavItem key={index} data={item} />
                                        ))}
                                    </ul>
                                </nav>
                            </aside>
                            <div className={`flex lg-up:justify-between lg-up:items-center lg:flex-wrap lg:mt-3 lg-up:z-0 transition-all ${isScrolled ? 'lg-up:translate-y-[0]' : 'lg-up:translate-y-[-112px]'}`}>
                                {/* <div className={`flex lg-up:justify-between lg-up:items-center lg:flex-wrap lg-up:z-0 transition-all`}> */}
                                <div className='lg:mx-5 items-center relative hidden'>
                                    <div className={`lg-up:translate-x-8 transition-all`}>
                                        <form className=''>
                                            <input type='search' id='search' aria-label="first link" name='search' placeholder='search for' className={`py-2 border-solid border-2 border-white rounded-3xl lg-up:text-white lg:text-black lg:bg-skyblue lg-up:bg-transparent focus:outline-none transition-all lg:w-56 lg:pl-3 lg:pr-10 ${expanded ? 'lg-up:visible lg-up:w-80 w-72 pl-2 pr-10' : 'lg-up:w-0 lg-up:invisible'}`} />
                                            <input type='submit' id='submit' aria-label="first link" className={`h-5 w-5 mr-5 cursor-pointer border-0 ${expanded ? 'lg-up:visible' : 'lg-up:invisible'}`} />
                                        </form>
                                    </div>
                                    <div onClick={handleSearchClick} className='lg:hidden cursor-pointer'>
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.70833 15.0417C12.2061 15.0417 15.0417 12.2061 15.0417 8.70833C15.0417 5.21053 12.2061 2.375 8.70833 2.375C5.21053 2.375 2.375 5.21053 2.375 8.70833C2.375 12.2061 5.21053 15.0417 8.70833 15.0417Z" stroke={strokeColorBlack} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M16.6254 16.625L13.1816 13.1812" stroke={strokeColorBlack} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div className={`${styles.btnWrap} lg-up:mx-5 lg:my-5 lg:order-1 lg:flex-none lg:flex-shrink-0 lg:text-center lg:w-full`}>
                                    <Btn_Pink text='See Sift in Action' link='/demo' />
                                </div>
                                <a href="https://console.sift.com/login?_gl=1*4om7dj*_ga*MjEwNTQyODU2LjE2OTg2OTA0MjA.*_ga_R8SV2EK5NZ*MTcwNjYzODY3OC4zNC4xLjE3MDY2Mzg2OTAuMC4wLjA" aria-label="first link" className='login transition-all lg:mt-4 lg:pl-12' target="_self">
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 21.5V19.5C20 18.4391 19.5786 17.4217 18.8284 16.6716C18.0783 15.9214 17.0609 15.5 16 15.5H8C6.93913 15.5 5.92172 15.9214 5.17157 16.6716C4.42143 17.4217 4 18.4391 4 19.5V21.5" stroke={strokeColorBlack} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lg:stroke-[#000!important] ${scrolled ? 'lg-up:stroke-[#fff]' : ''}`} />
                                        <path d="M12 11.5C14.2091 11.5 16 9.70914 16 7.5C16 5.29086 14.2091 3.5 12 3.5C9.79086 3.5 8 5.29086 8 7.5C8 9.70914 9.79086 11.5 12 11.5Z" stroke={strokeColorBlack} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lg:stroke-[#000!important] ${scrolled ? 'lg-up:stroke-[#fff]' : ''}`} />
                                    </svg>
                                </a>
                                {/* </div> */}

                            </div>
                        </div>
                    </div>
                    <button aria-label="first link" className={`menu-toggle w-9 h-[25px] relative transition-transform duration-500 cursor-pointer lg-up:hidden ${isMenuOpen ? 'menu-open' : ''}`} onClick={toggleMenu}>
                        <ul>
                            <li className={`h-0.5 absolute w-full transition-all duration-300 ease-in-out ${toggleBtnColor} ${scrolled ? '!bg-white' : ''} ${isMenuOpen ? 'menu-open transform rotate-[135deg] top-3' : 'top-0'}`}></li>
                            <li className={`h-0.5 absolute w-full transition-all duration-300 ease-in-out ${toggleBtnColor} ${scrolled ? '!bg-white' : ''} ${isMenuOpen ? 'menu-open opacity-0 left-[-60px]' : 'top-[11px] left-0'}`}></li>
                            <li className={`h-0.5 absolute w-full transition-all duration-300 ease-in-out ${toggleBtnColor} ${scrolled ? '!bg-white' : ''} ${isMenuOpen ? 'menu-open transform rotate-[-135deg] top-3' : 'top-[22px]'}`}></li>
                        </ul>
                    </button>
                </div>
            </div>
        </header>
    );
}

