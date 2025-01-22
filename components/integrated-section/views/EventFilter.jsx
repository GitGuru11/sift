import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import BlogFilterStyle from '../../../styles/blog/blogFilter.module.css'
import EventFilterStyle from '../../../styles/blog/blogFilter.module.css'
import {GET_ALL_EVENT_POST,GET_ALL_EVENT_POST_WITH_REGION, GET_ALL_EVENT_POST_WITH_EVENTTYPE, GET_ALL_EVENT_POST_WITH_REGION_EVENTTYPE, GET_ALL_EVENT_REGION, GET_ALL_EVENT_TYPE} from '../../../graphql/eventFilterData';
import DynamicButton from '../../global-components/Buttons';
import { useQuery } from '@apollo/client';
import Loader from '../Loader';
import DynamicLink from '../../global-components/Links';
import Arrow_textBtn from '../../button/Arrow_textBtn';
const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800']
})

export default function EventFilter() {
    const itemsPerPage = 9;
    const router = useRouter();
	const [open, setOpen] = useState(0);
	const [eventTypeName, setEventTypeName] = useState('');
	const [region, setRegion] = useState('');
    const [eventTypeSlug, setEventTypeSlug] = useState([]);
    const [regionSlug, setRegionSlug] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
    const [isSearchCtaHovered, setIsSearchCtaHovered] = useState(false);
	const [startCursor, setStartCursor] = useState('');
	const [endCursor, setEndCursor] = useState('');
	const [first, setFirst] = useState(9);
	const [last, setLast] = useState();
	const [offset, setOffset] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
        
    // }, 1000);
    // Loader Variables
	const [loader, setLoading] = useState(true)

		// Get All Product Types
		let eventTypeItems = [];
		let eventTypeArr;
		const eventTypeObj = useQuery(GET_ALL_EVENT_TYPE);
		if(eventTypeObj) {
			eventTypeItems = eventTypeObj?.data?.eventTypes?.nodes || [];
			eventTypeArr = eventTypeItems.map(item => { return item.slug });
		}
		
		// Get Fraud Types
		let regionItems = [];
		let regionArr;
		const regionObj = useQuery(GET_ALL_EVENT_REGION);
		if(regionObj) {
			regionItems = regionObj?.data?.regions?.nodes || [];
			regionArr = regionItems.map(item => { return item.slug });
		}

        let postObj;
	    let queryParam; 

        if(eventTypeSlug.length > 0 && regionSlug.length < 1) {
            queryParam = {searchTerm: searchTerm , eventTypeSlug: eventTypeSlug, startCursor: startCursor, endCursor: endCursor, first: first, last: last, offset: offset, limit: itemsPerPage };
        } else if(regionSlug.length > 0 && eventTypeSlug.length < 1) {
            queryParam = {searchTerm: searchTerm , regionSlug: regionSlug, startCursor: startCursor, endCursor: endCursor, first: first, last: last, offset: offset, limit: itemsPerPage }
        } else if(eventTypeSlug.length > 0 && regionSlug.length > 0) {
            queryParam = {searchTerm: searchTerm , eventTypeSlug: eventTypeSlug, regionSlug: regionSlug, startCursor: startCursor, endCursor: endCursor, first: first, last: last, offset: offset, limit: itemsPerPage }
        } else {
            queryParam = {searchTerm: searchTerm , startCursor: startCursor, endCursor: endCursor, first: first, last: last, offset: offset, limit: itemsPerPage };
        }
    
        postObj = useQuery(
            eventTypeSlug.length > 0 ? GET_ALL_EVENT_POST_WITH_EVENTTYPE
            : regionSlug.length > 0 ? GET_ALL_EVENT_POST_WITH_REGION 
            : eventTypeSlug.length > 0 && regionSlug.length > 0 ? GET_ALL_EVENT_POST_WITH_REGION_EVENTTYPE
            : GET_ALL_EVENT_POST,
            {variables: queryParam,}
        );

        let postData = [];
		if (postObj.loading) {
			// console.log("Loading list of Posts")
		} else {
			postData = postObj?.data?.events?.nodes || [];
		}
		const [count, setCount] = useState(null);
	

        useEffect(() => {
            if (count === null && postObj?.data?.events.pageInfo.total && region == "" && eventTypeName == "" ) {
                setCount(postObj?.data?.events.pageInfo.total);
            } else if(region !== "" || eventTypeName !== "") {
                setCount(postObj?.data?.events.pageInfo.total);
            }
        }, [postData, count , region, eventTypeName ]);

		const totalPages = Math.ceil(count / itemsPerPage);

		const handlePageChange = (newPage) => {
		  setCurrentPage(newPage);
		  var getPage = Math.floor((newPage - 1) * itemsPerPage);
		  setOffset(getPage)
          if(newPage !== 1){
			router.push({
				pathname: router.pathname,
				query: { ...router.query, pid: newPage }
			}, undefined, { scroll: false });
            const sectionElement = document.getElementById("EventFilter");
            if (sectionElement) {
                window.scrollTo({
                  top: sectionElement.offsetTop,
                  behavior: "smooth", 
                });
            }
            } else if(newPage == 1){
                delete router.query.pid;
                router.push({
                    pathname: router.pathname,
                    query: { ...router.query },
                }, undefined, { scroll: false })
            }
		  };

        const listHandler = (i) => {
            (open ==i ?setOpen(0):setOpen(i))
        }
        useEffect(() => {
            document.addEventListener('click', (e) => {
                if ((!((e.target).classList.contains("facet")))) {
                    if (!(e.target.tagName == "P")) {
                        setOpen(0)
                    }
                  
                } 
            })
             for(var c = document.getElementsByTagName("a"),
                a = 0;
                a < c.length;a++) {   
                var b = c[a]; 
                    b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank")  
                }
        })

       
        function eventTypeHandler(name, slug) {
            setEventTypeName(name);
            setEventTypeSlug([slug]);
            setOffset(0);
            setCurrentPage(1);
            const { pid, ...newQuery } = router.query; 
            router.push({
                pathname: router.pathname,
                query: { ...newQuery, event_type: slug }
            }, undefined, { scroll: false });
            setOpen(0);
        }
    
        function regionHandler(name, slug) {
            setRegion(name);
            setRegionSlug([slug]);
            setOffset(0);
            setCurrentPage(1);
            const { pid, ...newQuery } = router.query; 
            router.push({
                pathname: router.pathname,
                query: { ...newQuery, region: slug }
            }, undefined, { scroll: false });

            setOpen(0);
        }

        function setClear() {
            delete router.query.pid;
                router.push({
                    pathname: router.pathname,
                    query: { ...router.query },
                }, undefined, { scroll: false })
        }

        function clearTaxonomy(val) {
            if (val == 'region') {
                delete router.query.region;
                router.push({
                    pathname: router.pathname,
                    query: { ...router.query },
                }, undefined, { scroll: false })
                setRegion();
                setRegionSlug([]);
            } else if (val == 'eventTypeName') {
                delete router.query.event_type;
                router.push({
                    pathname: router.pathname,
                    query: { ...router.query },
                }, undefined, { scroll: false })
                setEventTypeName();
                setEventTypeSlug([]);
            }
        }

        function clearSearch () {
            delete router.query.search;
            router.push({
                pathname: router.pathname,
                query: { ...router.query },
            }, undefined, { scroll: false })
            setSearchTerm('');
            if(router.query?.pid !== undefined){
                const hasPage = parseInt(router?.query?.pid);
                if (hasPage) {
                    handlePageChange(1);
                }
            }
        }
        function clearAll() {
            setEventTypeName();
            setEventTypeSlug([]);
            setRegion();
            setRegionSlug([]);
            setSearchTerm('');
            delete router.query;
            router.push({
                pathname: 'events'
            }, undefined, { scroll: false })
        }

        const handleSearchChange = (event) => {
            setSearchTerm(event.target.value); 
            event.preventDefault(); 
            setOffset(0);
            setCurrentPage(1);
            if(searchTerm && event.target.value.length > 0) {
                const { pid, ...newQuery } = router.query; 
                router.push({
                    pathname: router.pathname,
                    query: { ...newQuery, search: event.target.value }
                }, undefined, { scroll: false });
            } else if(!event.target.value || event.target.value.length < 1) {
                delete router.query.search;
                router.push({
                    pathname: router.pathname,
                    query: { ...router.query },
                }, undefined, { scroll: false })
            }
        }
    
        const handleSearch = (event) => {
            event.preventDefault();
            setOffset(0);
            setCurrentPage(1);
            if(searchTerm) {
                const { pid, ...newQuery } = router.query; 
                router.push({
                    pathname: router.pathname,
                    query: { ...newQuery, search: searchTerm }
                }, undefined, { scroll: false });
            } else {
                delete router.query.search;
                router.push({
                    pathname: router.pathname,
                    query: { ...router.query },
                }, undefined, { scroll: false })
            }
        };

        const handleSearchCtaHover = () => {
            setIsSearchCtaHovered(true);
        };
        const handleSearchCtaLeave = () => {
            setIsSearchCtaHovered(false);
        };

        let hasRegion, hasEventType, hasSearch;
        const params = router.query;
        if(params) {
            hasRegion = 'region' in params;
            hasEventType = 'event_type' in params;
            hasSearch = 'search' in params;
        }
    
        function getUrlParam() {
            if (hasRegion) {
                setRegionSlug(params.region);
                if(regionObj && regionObj.data && regionObj.data.regions.nodes) {
                    const object = regionObj.data.regions.nodes.find(obj => obj.slug === params.region);
                    setRegion(object.name);
                }
            } else {
                clearTaxonomy('region');
            }

            if (hasEventType) {
                setEventTypeSlug(params.event_type);
                if(eventTypeObj && eventTypeObj.data && eventTypeObj.data.eventTypes.nodes) {
                    const object = eventTypeObj.data.eventTypes.nodes.find(obj => obj.slug === params.event_type);
                    setEventTypeName(object.name);
                }
            } else {
                clearTaxonomy('eventTypeName');
            }

            if(hasSearch) {
                setSearchTerm(params.search);
            } else {
                delete router.query.search;
                router.push({
                    pathname: router.pathname,
                    query: { ...router.query },
                }, undefined, { scroll: false })
            }
        }
        useEffect(() => {
            getUrlParam(); 
            // if(router.query?.pid == undefined || !router.query?.pid){
            //     handlePageChange(1);
            // }
        }, [router.asPath, regionObj, eventTypeObj]);

        useEffect(() => {
            // if(router.query?.pid !== undefined){
                const hasPage = parseInt(router?.query?.pid);
                if (hasPage) {
                    handlePageChange(hasPage);
                } 
            // }
            setTimeout(() => {
              setLoading(false); 
            }, 2000);
        }, []);

    // const arrow = (
	// 	<svg xmlns="http://www.w3.org/2000/svg"
	// 		width="14"
	// 		height="8"
	// 		viewBox="0 0 14 8"
	// 		fill="none"
    //         className='sm:w-[10px]'>
	// 		<path d="M13.6871 1.80909C14.1044 1.39531 14.1042 0.724429 13.6871 0.310796C13.2696 -0.103121 12.5931 -0.103121 12.1756 0.310937L8.06914 4.3823L8.068 4.38159C6.98501 5.30805 6.98501 5.30805 6.98501 5.30805C6.98501 5.30805 6.98501 5.30805 5.93063 4.38173L5.93177 4.38286L1.82446 0.310515C1.4071 -0.103261 0.730267 -0.103261 0.313052 0.310515C0.104445 0.517473 -3.15222e-07 0.788567 -3.03366e-07 1.0598C-2.91516e-07 1.3309 0.104445 1.60199 0.31291 1.80895L6.24454 7.68982C6.44488 7.88858 6.71661 8.00018 7.00017 8.00018C7.28373 8.00004 7.55532 7.88844 7.75609 7.68967L13.6871 1.80909Z" fill="black"/>
	// 	</svg>
	// );
    const cross = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
        <g clip-path="url(#clip0_1587_15631)">
        <path d="M10.7525 6.57506L8.82689 8.4999L10.7525 10.4247C10.8068 10.4791 10.8499 10.5435 10.8793 10.6145C10.9087 10.6855 10.9238 10.7615 10.9238 10.8384C10.9238 10.9152 10.9087 10.9912 10.8793 11.0622C10.8499 11.1332 10.8068 11.1977 10.7525 11.252C10.6982 11.3063 10.6337 11.3494 10.5627 11.3788C10.4917 11.4082 10.4157 11.4233 10.3389 11.4233C10.262 11.4233 10.186 11.4082 10.115 11.3788C10.044 11.3494 9.97956 11.3063 9.92524 11.252L8.00039 9.3264L6.07555 11.252C6.02123 11.3063 5.95675 11.3494 5.88578 11.3788C5.81481 11.4082 5.73875 11.4233 5.66193 11.4233C5.58512 11.4233 5.50905 11.4082 5.43808 11.3788C5.36712 11.3494 5.30263 11.3063 5.24832 11.252C5.194 11.1977 5.15091 11.1332 5.12152 11.0622C5.09212 10.9912 5.07699 10.9152 5.07699 10.8384C5.07699 10.7615 5.09212 10.6855 5.12152 10.6145C5.15091 10.5435 5.194 10.4791 5.24832 10.4247L7.17389 8.4999L5.24832 6.57506C5.13862 6.46536 5.07699 6.31658 5.07699 6.16144C5.07699 6.0063 5.13862 5.85752 5.24832 5.74782C5.35801 5.63813 5.5068 5.5765 5.66193 5.5765C5.81707 5.5765 5.96585 5.63813 6.07555 5.74782L8.00039 7.6734L9.92524 5.74782C9.97956 5.69351 10.044 5.65042 10.115 5.62103C10.186 5.59163 10.262 5.5765 10.3389 5.5765C10.4157 5.5765 10.4917 5.59163 10.5627 5.62103C10.6337 5.65042 10.6982 5.69351 10.7525 5.74782C10.8068 5.80214 10.8499 5.86662 10.8793 5.93759C10.9087 6.00856 10.9238 6.08462 10.9238 6.16144C10.9238 6.23826 10.9087 6.31432 10.8793 6.38529C10.8499 6.45626 10.8068 6.52074 10.7525 6.57506ZM15.6004 8.4999C15.6004 10.003 15.1547 11.4724 14.3196 12.7222C13.4845 13.972 12.2975 14.9462 10.9088 15.5214C9.52007 16.0966 7.99196 16.2471 6.51771 15.9539C5.04345 15.6606 3.68926 14.9368 2.62638 13.8739C1.5635 12.811 0.839674 11.4568 0.546426 9.98259C0.253178 8.50833 0.403684 6.98023 0.978909 5.59151C1.55414 4.20279 2.52825 3.01583 3.77806 2.18073C5.02787 1.34563 6.49725 0.899902 8.00039 0.899902C10.0154 0.90203 11.9472 1.70343 13.3721 3.12824C14.7969 4.55306 15.5983 6.48491 15.6004 8.4999ZM14.4312 8.4999C14.4312 7.22802 14.054 5.98469 13.3474 4.92716C12.6408 3.86962 11.6364 3.04538 10.4613 2.55865C9.28627 2.07192 7.99326 1.94457 6.74581 2.1927C5.49837 2.44083 4.35251 3.0533 3.45315 3.95266C2.55379 4.85202 1.94132 5.99787 1.69319 7.24532C1.44506 8.49277 1.57241 9.78578 2.05914 10.9608C2.54587 12.1359 3.37011 13.1403 4.42765 13.8469C5.48518 14.5535 6.72851 14.9307 8.00039 14.9307C9.70535 14.9287 11.3399 14.2506 12.5455 13.045C13.7511 11.8394 14.4292 10.2049 14.4312 8.4999Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0_1587_15631">
        <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
        </clipPath>
        </defs>
        </svg>

  return (
    <section className={`EventFilter overflow-hidden ${EventFilterStyle.blogFilter} pt-0 no-padding`} id="EventFilter">
        <div className="bg-skyblue py-[40px]">
            <div className="container">
                <div className={`searchWrap`}>
                    <form className={`relative`} onSubmit={handleSearch}>
						<label htmlFor="search">.</label>
						<input
							type="search"
							id="search"
							aria-label="first link"
							name="search"
							placeholder="Search Events"
							className={`pt-[13px] pb-[14px] pl-[16px] pr-[82px] w-full text-black bg-white rounded-[8px] ${
                                inter.className
                            } lg:text-black lg:bg-white outline-[2px] outline outline-black hover:outline-pink transition-all sm:py-[8px] sm:px-[15px] sm:w-full sm:pr-[20px]  ${
                                isSearchCtaHovered ? 'outline-pink' : ''
                            } ${searchTerm ? 'outline-[3px] outline-pink' : ''}`}
							value={searchTerm}
                            onChange={handleSearchChange}/>
						<span className={`crossBtn ${searchTerm ? 'show' : 'hide'} absolute top-[50%] right-[60px] w-[18px] cursor-pointer text-[20px] translate-y-[-50%] hover:text-pink`} onClick={()=> clearSearch()}>X</span>
						<button type="submit" className="searchCta">Submit</button>
					</form>
                </div>
            </div>
        </div>
        <div className="cardsWithFilter mt-0 bg-white padding-medium-bottom">
            <div className="container">
                <div className="filters-wrapper pt-[41px] pb-[36px] sm:py-[30px] sm:pb-0">
                    <p className={`inline-block mr-[15px] ${inter.className} !font-normal small_font `}>Filter by:</p>
                    <div className="filter-wraps inline-block relative sm:mb-[20px]">
                        <div className={`relative inline-block filter_wrap pl-[15px] pr-[41px] pt-[6px] pb-[8px] rounded-[4px] border-[1px] border-[#00000033] mr-[16px] hover:border-black ${open === 1 ? 'border-black' : ''} cursor-pointer sm:mr-[5px] sm:py-[5px] sm:mb-[10px]`}>
                            <div  className='facet absolute z-[11] w-full h-full top-0 left-0'  onClick={() => listHandler(1)}></div>
                            <p>Region</p>
                            <span className={`absolute w-[15px] h-[8px] top-1/2 right-[18px] -translate-y-[50%] duration-300 ${
                                    open == 1 ? ' -rotate-180 ' : 'rotate-0'}`}>
                                        <Image src='/blogFilter/dropDown.png' width={14} height={8} alt='Arrow'></Image>
                                    </span>
                            <ul className={`absolute  ${
                                    open == 1 ? 'z-[1] bg-white h-[218px] desktop:h-[200px] laptop:h-[200px] laptop-landscape:w-[255px] wide-screen:h-[240px] wide-screen:top-[60px] laptop-landscape:top-[40px] wide-screen:w-[255px] laptop-landscape:h-[240px]  tablet:h-[200px] phablet:h-[170px] sm:h-[182px] opacity-100 visible' : 'h-0 opacity-0 invisible'
                                } overflow-hidden top-[44px] duration-300 left-0 topic w-[236px] p-[20px] overflow-y-auto z-[90] shadow-filter-shadow rounded-[4px] sm:w-[130px] sm:p-[10px]`}>
                                {regionItems.map((item, i) => {
                                    return (
                                        <li key={i} className={`mb-[12px] last:mb-0 hover:text-pink z-[90] ${item.slug == regionSlug ? "text-pink" : "" }`} data-val={`${item.name}`}  
                                        onClick={() => regionHandler(item.name, item.slug)}>
                                            <p className={` text-[16px] font-[500]  leading-[24px]`}>
                                                {item.name}
                                            </p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className={`relative filter_wrap inline-block px-[16px] pr-[41px] pt-[6px] pb-[8px] rounded-[4px] border-[1px] border-[#00000033] hover:border-black ${open === 2 ? 'border-black' : ''} mr-[16px] cursor-pointer sm:mr-[5px] sm:py-[5px] sm:mb-[10px]`}>
                            <div  className='facet absolute z-[11] w-full h-full top-0 left-0'  onClick={() => listHandler(2)}></div>
                            <p>Event type</p>
                            <span className={`absolute w-[15px] h-[8px] top-1/2 right-[18px] -translate-y-[50%] duration-300 ${
                                open == 2 ? ' -rotate-180 ' : 'rotate-0'}`}>
                                    <Image src='/blogFilter/dropDown.png' width={14} height={8} alt='Arrow'></Image>
                                </span>
                            <ul className={`absolute  ${
                                    open == 2 ? 'z-[1] bg-white h-[218px] desktop:h-[190px] laptop:h-[200px] laptop-landscape:h-[240px] wide-screen:top-[60px] laptop-landscape:top-[40px] tablet:h-[200px] phablet:h-[170px] sm:h-[182px] opacity-100 visible' : 'h-0 opacity-0 invisible'
                                } overflow-hidden ${EventFilterStyle.scrollbarHide} top-[44px] duration-300 left-0 topic w-[236px] p-[20px] overflow-y-auto scroll-auto focus:scroll-auto z-[90] shadow-filter-shadow rounded-[4px] sm:w-[130px] sm:p-[10px]`}>
                                {eventTypeItems.map((item, i) => {
                                    return (
                                        <li key={i} className={`mb-[12px] last:mb-0 hover:text-pink z-[90] ${item.slug == eventTypeSlug ? "text-pink" : "" }`} data-val={`${item.name}`}
                                        onClick={() => eventTypeHandler(item.name, item.slug)} >
                                            <p className={`text-[16px] font-[500]  leading-[24px]`}>
                                                {item.name}
                                            </p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={` ${(!region && !eventTypeName && !searchTerm) ? 'hidden' : 'flex'} flex flex-wrap justify-between selected-facets mb-[24px]`}>
                   <ul>
                        {eventTypeName && <li className={`relative outline outline-black outline-[1px] ${EventFilterStyle.SelectedItems} group hover:outline-pink hover:outline-[2px] rounded-[100px] inline-block hover: mr-[16px] py-[4px] pr-[32px] pl-[10px] sm:mb-[10px]`}>
                            <a className='emptyLink' onClick={() => { clearTaxonomy('eventTypeName'); setClear();}}></a>
                            <p className=' xxl:text-[14px] text-[16px] font-[600] capitalize'> {eventTypeName} {" "}
											{postObj?.data?.events.pageInfo.total ?
											 `(${postObj?.data?.events.pageInfo.total})`: 
											 postObj?.data?.events.pageInfo.total == '0'? ' (0)': ''}</p>
                            <span className='absolute w-[16px] h-[16px] top-[7px] lg:top-[5px] desktop:top-[7px] laptop:top-[7px] right-[10px]'>
                                {cross}
                            </span></li>}
                        {region && <li className={`relative outline outline-black outline-[1px] ${EventFilterStyle.SelectedItems} group hover:outline-pink hover:outline-[2px] rounded-[100px] inline-block mr-[16px] py-[4px] pr-[32px] pl-[10px] sm:mb-[10px]`}>
                            <a className='emptyLink' onClick={() => { clearTaxonomy('region'); setClear();}}></a>
                            <p className=' xxl:text-[14px] text-[16px] font-[600] capitalize'> {region} {" "}
											{postObj?.data?.events.pageInfo.total ?
											 `(${postObj?.data?.events.pageInfo.total})`: 
											 postObj?.data?.events.pageInfo.total == '0'? ' (0)': ''}</p> 
                            <span className='absolute w-[16px] h-[16px] top-[7px] lg:top-[5px] desktop:top-[7px] laptop:top-[7px] right-[10px]'>{cross}
                            </span></li>}
                        <li className='inline-block pr-[10px] lg:hidden' >
                             <span className={`bold cursor-pointer text-[14px] font-[700] uppercase underline hover:!text-pink duration-300 ${inter.className}`}
								onClick={() => clearAll()}>
								CLEAR ALL
							</span>
                        </li>
                    </ul>
                    <div className='total-count flex alignright'>
                        <ul>
                            <li className='inline-block pr-[10px] lg-up:hidden'>
                                <span className={`bold cursor-pointer text-[14px] font-[700] uppercase underline hover:!text-pink duration-300 ${inter.className}`}
                                    onClick={() => clearAll()}>
                                    CLEAR ALL
                                </span>
                            </li>
                            <li className='inline-block'><p><span className='text-blue font-[600]'>{postObj?.data?.events.pageInfo.total}</span> results</p></li>
                        </ul>
                    </div>
                </div>
                <div className={`filterCards relative min-h-[520px]`}>
                    <div className="wrapper flex justify-center flex-wrap w-[calc(100%+24px)] ml-[-12px] desktop-mid:w-[calc(100%+12px)] desktop:w-[calc(100%+16px)] desktop:ml-[-8px] desktop-mid:ml-[-6px] tablet:w-[calc(100%+12px)] tablet:ml-[-6px] phablet:w-[calc(100%+12px)]  phablet:ml-[-6px] sm:w-full sm:ml-0">
                    {postObj.loading ? <Loader /> : postData.length != 0 ? ( postData.map((item, index) => {
                       return ( <div key={index} className="relative group mb-[20px] bg-white col-three w-[calc(33.33%-22px)] mx-[11px] border-[2px] border-solid border-black desktop:w-[calc(33.33%-16px)] desktop:mx-[8px] rounded-[16px] overflow-hidden outline outline-[1px] outline-white transition-all duration-300 ease-in-out hover:shadow-black-shadow hover:outline-black desktop-mid:w-[calc(50%-12px)] desktop-mid:mx-[6px] tablet:w-[calc(50%-12px)] tablet:mx-[6px] phablet:w-[calc(50%-12px)] phablet:mx-[6px] sm:w-full sm:mx-0" id={index} 
                       data-aos="fade-up" data-aos-delay="300">
                           <div className={`card relative h-full`}>
                                {item?.eventbuilder?.cardGridOptions?.cta &&
                                !item?.eventbuilder?.cardGridOptions?.cta[0]?.uploadFile
                                && !item?.eventbuilder?.cardGridOptions?.cta[0]?.url
                                && !item?.eventbuilder?.cardGridOptions?.cta[0]?.videoUrl ?

                                <Link className="emptyLink" href={item?.uri}></Link>
                                : <DynamicLink cta={item?.eventbuilder?.cardGridOptions?.cta} /> }
                                        <div className="imgWrap relative h-[241px] bg-black overflow-hidden xl:h-[160px] laptop:h-[180px]">
                                        {item?.eventbuilder?.cardGridOptions?.featuredEventImage?.sourceUrl ? <Image src={item?.eventbuilder?.cardGridOptions?.featuredEventImage?.sourceUrl} 
                                            alt={item?.eventbuilder?.cardGridOptions?.featuredEventImage?.altText} 
                                            className='h-full w-full object-cover scale-100 group-hover:scale-105 transition-all duration-300 ease-in-out' 
                                            width={372} height={242} /> :
                                            item?.eventbuilder?.cardGridOptions?.cardImage?.sourceUrl ? 
                                            <Image src={item?.eventbuilder?.cardGridOptions?.cardImage?.sourceUrl} 
                                            alt={item?.eventbuilder?.cardGridOptions?.cardImage?.altText} 
                                            className='h-full w-full object-cover scale-100 group-hover:scale-105 transition-all duration-300 ease-in-out' 
                                            width={372} height={242} />
                                            :<Image src={`/eventsFilter/girl-boy.png`} alt='' className='h-full w-full scale-100 group-hover:scale-105 transition-all duration-300 ease-in-out' width={372} height={242} />
                                        }
                                        </div>
                                        <div className="content py-[31px] pt-[29px] px-[30px] lg:p-[20px] desktop-laptop:p-[20px] desktop-mid:mb-0 tablet:mb-0 md:p-[20px] sm:mb-0">
                                            {item?.eventTypes?.nodes && item?.eventTypes?.nodes.map((item, index) => {
                                            return (
                                                <p key={index} className='text-blue small_font xl:!text-[14px] laptop-landscape:text-[14px] uppercase font-bold'>
                                                    {item.name}
                                                </p> )})}
                                            {/* <Link href="#"> */}
                                                <h4 className='mt-[6px] h-[116px] laptop-landscape:!h-[100px] phablet:h-[66px] desktop-laptop:h-[72px] tablet:h-[72px] desktop-mid:h-[72px] desktop:h-[72px] desktop:line-clamp-3 lg:line-clamp-3 sm:h-[66px] xxl-up:h-[90px] wide-screen:h-[90px] text-ellipsis line-clamp-4'>
                                                    {item.title}
                                                </h4>
                                            {/* </Link> */}
                                            <div className="location-with-date mt-[23px] mb-[20px] sm:mt-[20px]">
                                                {item?.eventbuilder?.cardGridOptions?.location && <div className="icon_with_location flex mb-[8px]">
                                                    <div className="w-[24px] pl-[2px] flex items-center">
                                                        <Image src="/eventsFilter/location.svg" width={24} height={24} alt="Location" />
                                                    </div>
                                                    <div className="text pl-[8px]">
                                                    <p className='small_font text-black'>{item?.eventbuilder?.cardGridOptions?.location}</p>
                                                    </div>
                                                </div>}
                                                {item?.eventbuilder?.cardGridOptions?.time &&
                                                <div className="icon_with_location flex mb-[8px]">
                                                    <div className="w-[24px] pl-[2px] flex items-center">
                                                    <Image src="/eventsFilter/clock.svg" width={24} height={24} alt="Location" />
                                                    </div>
                                                    <div className="text pl-[8px]">
                                                    <p className='small_font text-black'>{item?.eventbuilder?.cardGridOptions?.time}</p>
                                                    </div>
                                                </div>}
                                                {item?.eventbuilder?.cardGridOptions?.date && <div className="icon_with_location flex">
                                                    <div className="w-[24px] pl-[2px] flex items-center">
                                                    <Image src="/eventsFilter/calendar-check-fill.svg" width={24} height={24} alt="Location" />
                                                    </div>
                                                    <div className="text pl-[8px]">
                                                    <p className='small_font text-black'>
                                                        {item?.eventbuilder?.cardGridOptions?.date}
                                                    </p>
                                                    </div>
                                                </div>}
                                            </div>
                                            <div className="btn relative ">
                                            {item?.eventbuilder?.cardGridOptions?.cta &&
                                            !item?.eventbuilder?.cardGridOptions?.cta[0]?.uploadFile
                                            && !item?.eventbuilder?.cardGridOptions?.cta[0]?.url
                                            && !item?.eventbuilder?.cardGridOptions?.cta[0]?.videoUrl ?

                                            <Link aria-label="first link" class="arrow_text-btn button group uppercase" target="_blank" 
                                            href={item?.uri}>Event details
                                            <span class="absolute top-[auto] bottom-[-8px] wide-screen:bottom-[-7px] -translate-y-1/2 right-0 w-[20px] h-[17px] overflow-hidden"></span>
                                            </Link> : 
                                            <DynamicButton cta={item?.eventbuilder?.cardGridOptions?.cta} /> }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           );
                        })
                    ) : (<h3 className={`block w-full mt-[100px] text-center ${postObj?.data?.events?.nodes.length < 1? '' : 'hidden'}`}>No Result Found</h3>)}
                    </div>
				</div>
                {loader ? '' :
            				postData && postData.length != 0 ?
							count > itemsPerPage && (
								<ul className={`${BlogFilterStyle.pagination} mt-[35px] flex justify-center items-center lg:mt-[20px]`}>
									<button
										onClick={() => handlePageChange(currentPage - 1 )}
										disabled={currentPage === 1}
										className="prev-button mr-[18px] text-[0]"
									>
										.
										<div className="iconWrap w-[26px] h-[26px]">
											<div className={`${BlogFilterStyle.imgWrapPrev} relative ${
													currentPage === 1 && 'opacity-[0.2] pointer-events-none'
												}`}></div>
										</div>
									</button>
									{Array.from({ length: totalPages }, (_, i) => {
										const isCurrent = i + 1 === currentPage;
										if (
											i + 1 === 1 ||
											(currentPage === 1 && i < 4) ||
											(currentPage === 2 && i < 4) ||
											(currentPage === 3 && i < 4) ||
											(currentPage === 4 && i === 0) ||
											i + 1 === currentPage - 1 ||
											i + 1 === currentPage ||
											i + 1 === currentPage + 1 ||
											i + 1 === totalPages 
											||
											(totalPages === currentPage  && i + 1 === totalPages - 2)
										) {
											return (
												<li
													key={i + 1}
													onClick={() => handlePageChange(i + 1)}
													className={`text-black text-[18px] font-[500]  leading-[24px] ${inter.className} mx-[8px] cursor-pointer transition-all delay-300 hover:text-pink ${
														isCurrent ? 'active text-pink !font-[700]' : ''
													}`}
												>
													{i + 1}
												</li>
											);
										} else if (
											(currentPage === 1 && i === 4) ||
											(currentPage === 2 && i === 4) ||
											(currentPage === 3 && i === 4) ||
											(i + 1 === currentPage - 2 && i + 1 > 1) ||
											(i + 1 === currentPage + 2 && i + 1 < totalPages) ||  (currentPage === totalPages && i + 1 === totalPages - 2)
										) {
											return (
												<li
													key={`dots-${i + 1}`}
													className={`text-black text-[18px] font-[500]  leading-[24px] ${inter.className}  mx-[8px] transition-all delay-300 hover:text-pink `}
												>
													...
												</li>
											);
										} else if (i + 1 === 1) {
											return (
												<li
													key={i + 1}
													onClick={() => handlePageChange(i + 1)}
													className={`text-black text-[18px] font-[500]  leading-[24px] ${inter.className}  mx-[8px] cursor-pointer transition-all delay-300 hover:text-pink ${
														isCurrent ? 'active text-pink !font-[700]' : ''
													}`}
												>
													{i + 1}
												</li>
											);
										}else if (totalPages === currentPage && i + 1 === totalPages - 3) {
											return (
											<li
												key={`dots-${i + 1}`}
												className={`text-black text-[18px] font-[500]  leading-[24px] ${inter.className}  mx-[8px] transition-all delay-300 hover:text-pink `}
											>
												...
											</li>
											);
										}

										return null;
									})}

									<button
										onClick={() => handlePageChange(currentPage + 1)}
										disabled={currentPage === totalPages}
										className="next-button ml-[18px] text-[0]"
									>
											.
										<div className={`iconWrap w-[26px] h-[26px]`}>
											<div className={`${BlogFilterStyle.imgWrapNext} relative ${
													currentPage === totalPages && 'opacity-[0.2] pointer-events-none'}`}></div>
										</div>
									</button>
								</ul>
							) : ''}
            </div>
        </div>
    </section>
  )
}
