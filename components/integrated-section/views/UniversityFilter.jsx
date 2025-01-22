import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from 'react';
import Style from '../../../styles/platform/contentWithCard.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { Inter } from 'next/font/google';
import moment from 'moment';
import Loader from '../Loader';
import BlogFilterStyle from '../../../styles/blog/blogFilter.module.css';
import { GET_ALL_UNIVERSITY_POST, GET_ALL_UNIVERSITY_POST_TOPIC, GET_ALL_UNIVERSITY_TOPIC, GET_ALL_UNIVERSITY_AUTHORS } from '../../../graphql/universityFilter';
const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
});
// const arrow = (
// 	<svg
// 		xmlns="http://www.w3.org/2000/svg"
// 		width="14"
// 		height="8"
// 		viewBox="0 0 14 8"
// 		fill="none"
// 	>
// 		<path
// 			d="M13.6871 1.80909C14.1044 1.39531 14.1042 0.724429 13.6871 0.310796C13.2696 -0.103121 12.5931 -0.103121 12.1756 0.310937L8.06914 4.3823L8.068 4.38159C6.98501 5.30805 6.98501 5.30805 6.98501 5.30805C6.98501 5.30805 6.98501 5.30805 5.93063 4.38173L5.93177 4.38286L1.82446 0.310515C1.4071 -0.103261 0.730267 -0.103261 0.313052 0.310515C0.104445 0.517473 -3.15222e-07 0.788567 -3.03366e-07 1.0598C-2.91516e-07 1.3309 0.104445 1.60199 0.31291 1.80895L6.24454 7.68982C6.44488 7.88858 6.71661 8.00018 7.00017 8.00018C7.28373 8.00004 7.55532 7.88844 7.75609 7.68967L13.6871 1.80909Z"
// 			fill="black"
// 		/>
// 	</svg>
// );
const cross = (
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
		<g clip-path="url(#clip0_1587_15631)">
			<path
				d="M10.7525 6.57506L8.82689 8.4999L10.7525 10.4247C10.8068 10.4791 10.8499 10.5435 10.8793 10.6145C10.9087 10.6855 10.9238 10.7615 10.9238 10.8384C10.9238 10.9152 10.9087 10.9912 10.8793 11.0622C10.8499 11.1332 10.8068 11.1977 10.7525 11.252C10.6982 11.3063 10.6337 11.3494 10.5627 11.3788C10.4917 11.4082 10.4157 11.4233 10.3389 11.4233C10.262 11.4233 10.186 11.4082 10.115 11.3788C10.044 11.3494 9.97956 11.3063 9.92524 11.252L8.00039 9.3264L6.07555 11.252C6.02123 11.3063 5.95675 11.3494 5.88578 11.3788C5.81481 11.4082 5.73875 11.4233 5.66193 11.4233C5.58512 11.4233 5.50905 11.4082 5.43808 11.3788C5.36712 11.3494 5.30263 11.3063 5.24832 11.252C5.194 11.1977 5.15091 11.1332 5.12152 11.0622C5.09212 10.9912 5.07699 10.9152 5.07699 10.8384C5.07699 10.7615 5.09212 10.6855 5.12152 10.6145C5.15091 10.5435 5.194 10.4791 5.24832 10.4247L7.17389 8.4999L5.24832 6.57506C5.13862 6.46536 5.07699 6.31658 5.07699 6.16144C5.07699 6.0063 5.13862 5.85752 5.24832 5.74782C5.35801 5.63813 5.5068 5.5765 5.66193 5.5765C5.81707 5.5765 5.96585 5.63813 6.07555 5.74782L8.00039 7.6734L9.92524 5.74782C9.97956 5.69351 10.044 5.65042 10.115 5.62103C10.186 5.59163 10.262 5.5765 10.3389 5.5765C10.4157 5.5765 10.4917 5.59163 10.5627 5.62103C10.6337 5.65042 10.6982 5.69351 10.7525 5.74782C10.8068 5.80214 10.8499 5.86662 10.8793 5.93759C10.9087 6.00856 10.9238 6.08462 10.9238 6.16144C10.9238 6.23826 10.9087 6.31432 10.8793 6.38529C10.8499 6.45626 10.8068 6.52074 10.7525 6.57506ZM15.6004 8.4999C15.6004 10.003 15.1547 11.4724 14.3196 12.7222C13.4845 13.972 12.2975 14.9462 10.9088 15.5214C9.52007 16.0966 7.99196 16.2471 6.51771 15.9539C5.04345 15.6606 3.68926 14.9368 2.62638 13.8739C1.5635 12.811 0.839674 11.4568 0.546426 9.98259C0.253178 8.50833 0.403684 6.98023 0.978909 5.59151C1.55414 4.20279 2.52825 3.01583 3.77806 2.18073C5.02787 1.34563 6.49725 0.899902 8.00039 0.899902C10.0154 0.90203 11.9472 1.70343 13.3721 3.12824C14.7969 4.55306 15.5983 6.48491 15.6004 8.4999ZM14.4312 8.4999C14.4312 7.22802 14.054 5.98469 13.3474 4.92716C12.6408 3.86962 11.6364 3.04538 10.4613 2.55865C9.28627 2.07192 7.99326 1.94457 6.74581 2.1927C5.49837 2.44083 4.35251 3.0533 3.45315 3.95266C2.55379 4.85202 1.94132 5.99787 1.69319 7.24532C1.44506 8.49277 1.57241 9.78578 2.05914 10.9608C2.54587 12.1359 3.37011 13.1403 4.42765 13.8469C5.48518 14.5535 6.72851 14.9307 8.00039 14.9307C9.70535 14.9287 11.3399 14.2506 12.5455 13.045C13.7511 11.8394 14.4292 10.2049 14.4312 8.4999Z"
				fill="black"
			/>
		</g>
		<defs>
			<clipPath id="clip0_1587_15631">
				<rect
					width="16"
					height="16"
					fill="white"
					transform="translate(0 0.5)"
				/>
			</clipPath>
		</defs>
	</svg>
);

function UniversityFilter() {
	let newDate = '';
	const itemsPerPage = 12;
	const router = useRouter();
	const [open, setOpen] = useState(0);
	const [topic, setTopic] = useState('');
	const [topicSlug, setTopicSlug] = useState([]);
	const [authSlug, setAuthSlug] = useState();
	const [searchTerm, setSearchTerm] = useState('');
	const [startCursor, setStartCursor] = useState('');
	const [endCursor, setEndCursor] = useState('');
	const [first, setFirst] = useState(9);
	const [last, setLast] = useState();
	const [offset, setOffset] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	// Loader Variables
	const [loader, setLoading] = useState(true)

	// Get All Topics
	let topicItems = [];
	let topicArr;
	const topicsObj = useQuery(GET_ALL_UNIVERSITY_TOPIC);
	if (topicsObj) {
		topicItems = topicsObj?.data?.topics?.nodes || [];
		topicArr = topicItems.map(item => { return item.slug });
	}

	let postObj;
	let queryParam;

	if (topicSlug.length > 0) {
		queryParam = { topicSlug: topicSlug, searchTerm: searchTerm, startCursor: startCursor, endCursor: endCursor, first: first, last: last, offset: offset, limit: itemsPerPage };
	} else {
		queryParam = { searchTerm: searchTerm, startCursor: startCursor, endCursor: endCursor, first: first, last: last, offset: offset, limit: itemsPerPage };
	}

	postObj = useQuery(topicSlug ? GET_ALL_UNIVERSITY_POST_TOPIC : GET_ALL_UNIVERSITY_POST, {
		variables: queryParam,
	});

	let postData = [];
	if (postObj.loading) {
		// console.log("Loading list of Posts")
	} else {
		postData = postObj?.data?.universities?.nodes || [];

	}
	const [count, setCount] = useState(null);
	useEffect(() => {
		if (count === null && postObj?.data?.universities.pageInfo.total && topicSlug == "" && authSlug == "") {
			setCount(postObj?.data?.universities.pageInfo.total);
		} else if (topicSlug !== "" || authSlug !== "") {
			setCount(postObj?.data?.universities.pageInfo.total);
		}
	}, [postData, count, topicSlug, authSlug]);

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
			const sectionElement = document.getElementById("UniversityFilter");
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


	// Get All Tags
	const authorsObj = useQuery(GET_ALL_UNIVERSITY_AUTHORS);

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
		event.preventDefault();
		setOffset(0);
        setCurrentPage(1);
		if (searchTerm && event.target.value.length > 0) {
			const { pid, ...newQuery } = router.query; 
            router.push({
                pathname: router.pathname,
                query: { ...newQuery, search: event.target.value }
            }, undefined, { scroll: false });
		} else if (!event.target.value || event.target.value.length < 1) {
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
		if (searchTerm) {
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

	function authorHandler(slug) {
		setOpen(0);
		setAuthSlug(slug);
		setOffset(0);
		setCurrentPage(1);
		router.push({
			pathname: router.pathname,
			query: { ...router.query, author: slug, pid: 1 }
		}, undefined, { scroll: false })
	}

	function topictHandler(name, slug) {
		setOpen(0);
		setTopic(name);
		setTopicSlug([slug]);
		setOffset(0);
		setCurrentPage(1);
		router.push({
			pathname: router.pathname,
			query: { ...router.query, topic: slug, pid: 1 }
		}, undefined, { scroll: false })
	}

	function setClear() {
        delete router.query.pid;
			router.push({
				pathname: router.pathname,
				query: { ...router.query },
			}, undefined, { scroll: false })
    }

	function clearTaxonomy(val) {
		if (val == 'topic') {
			delete router.query.topic;
			router.push({
				pathname: router.pathname,
				query: { ...router.query },
			}, undefined, { scroll: false })
			setTopic();
			setTopicSlug(topicArr);
		} else if (val == 'author') {
			delete router.query.author;
			router.push({
				pathname: router.pathname,
				query: { ...router.query },
			}, undefined, { scroll: false })
			setAuthSlug();
		}
	}

	function clearSearch() {
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
		setTopic();
		setTopicSlug(topicArr);
		setSearchTerm('');
		setAuthSlug();
		delete router.query;
		router.push({
			pathname: 'trust-safety-university'
		}, undefined, { scroll: false })
	}

	let hasTopic, hasAuthor, hasSearch;
	const params = router.query;
	if (params) {
		hasTopic = 'topic' in params;
		hasAuthor = 'author' in params;
		hasSearch = 'search' in params;
	}

	function getUrlParam() {
		if (hasTopic) {
			setTopicSlug(params.topic);
			if (topicsObj && topicsObj.data && topicsObj.data.topics.nodes) {
				const object = topicsObj.data.topics.nodes.find(obj => obj.slug === params.topic);
				setTopic(object.name);
			}
		} else {
			clearTaxonomy('topic');
		}
		if (hasAuthor) {
			setAuthSlug(params.author);
		} else {
			clearTaxonomy('author');
		}

		if (hasSearch) {
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
		if(router.query?.pid == undefined || !router.query?.pid){
			handlePageChange(1);
		}
	}, [router.asPath, topicsObj, authorsObj])

	const listHandler = (i) => {
		open == i ? setOpen(0) : setOpen(i);
	};

	// Loading code
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
		//  for(var c = document.getElementsByTagName("a"),
		// a = 0;
		// a < c.length;a++) {   
		// var b = c[a]; 
		//     b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank")  
		// }
	}, []);

	useEffect(() => {
        // if(router.query?.pid !== undefined){
            const hasPage = parseInt(router?.query?.pid);
            if (hasPage) {
                handlePageChange(hasPage);
            }
        // }
    }, []);

	useEffect(() => {
		document.addEventListener('click', (e) => {
			if (!e.target.classList.contains('facet')) {
				if (!(e.target.tagName == 'SPAN')) {
					setOpen(0);
				}
			}
		});
	});

	return (
		<section className={`University-filter overflow-hidden filter bg-[#fff] no-padding-top padding-medium-bottom ${BlogFilterStyle.blogFilter} `}
			id="UniversityFilter">
			<div className="search bg-skyblue py-[40px] " id="searchBar">
				<div className="container">
					<div className={`searchWrap`}>
						<form className={`relative`} onSubmit={handleSearch}>
							<label htmlFor="search">.</label>
							<input
								type="search"
								id="search"
								aria-label="first link"
								name="search"
								placeholder="Search resources"
								className={`pt-[13px] pb-[14px] pl-[16px] pr-[82px] w-full text-black bg-white rounded-[8px]  ${searchTerm ? 'outline-[3px] outline-pink' : ''}`}
								value={searchTerm}
								onChange={handleSearchChange} />
							<span className={`crossBtn ${searchTerm ? 'show' : 'hide'} absolute top-[50%] right-[60px] w-[18px] cursor-pointer text-[20px] translate-y-[-50%] hover:text-pink`} onClick={() => clearSearch()}>X</span>
							<button type="submit" className="searchCta">Submit</button>
						</form>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="filters-wrapper pt-[38px] md:pt-[25px] pb-[32px] xl-up:pt-[39px]  sm:pb-[20px]">
					<p className="inline-block mr-[16px] xl-up:text-[16px] sm:mb-[10px]">
						Filter by:
					</p>
					<div className="filter-wraps relative inline-block">
						<div className={`relative inline-block filter_wrap px-[16px] pr-[41px] py-[7px] rounded-[4px] border-[1px] border-[#00000033] hover:border-black ${open == 1 ? 'border-black' : ''} mr-[16px] cursor-pointer`}>
							<div className="facet absolute z-[11] w-full h-full top-0 left-0" onClick={() => listHandler(1)}></div>
							<p className="xl-up:text-[16px]">Topic</p>
							<span className={`absolute w-[15px] h-[8px] top-1/2 right-[16px] -translate-y-[50%] duration-300 ${open == 1 ? ' -rotate-180 ' : 'rotate-0'
								}`}>
								<Image src='/blogFilter/dropDown.png' width={14} height={8} alt='Arrow'></Image>
							</span>
							<ul className={`absolute w-[150px] px-[16px] pb-[24px] bg-white h-[224px] ${BlogFilterStyle.scrollbarHide} scroll-auto focus:scroll-auto  overflow-y-auto  ${open == 1
									? 'opacity-100 py-[16px] z-[11]  '
									: ' opacity-0 h-0 py-0 -z-[1]'
								} overflow-hidden top-[41px] duration-300 left-0 topic shadow-filter-shadow rounded-[4px]`}
								id="topics">
								{topicItems.map((item, i) => {
									return (
										(item.name !== "" ?
											<li key={i} className={`mb-[16px] last:mb-0 hover:text-pink`} data-val={`${item}`} onClick={() => topictHandler(item.name, item.slug)}>
												<span className={`inline-block text-[16px] font-[500]`}>
													{item.name}
												</span>
											</li> : ''
										)
									);
								})}
							</ul>
						</div>
					</div>
				</div>
				<div className={` flex flex-wrap ${(!topic && !searchTerm) ? 'hidden' : 'flex'} justify-between selected-facets mt-[25px] mb-[24px] sm:mt-[20px] `}>
					<ul>
						{topic && <li className="relative group sm:mb-[15px] duration-300 rounded-[100px] inline-block mr-[16px] py-[4px] pr-[32px] pl-[10px] before:content before:absolute before:w-full before:h-full before:top-0 before:left-0 before:border-[1px] before:border-black before:rounded-[100px] hover:before:border-[2px] hover:before:border-pink">
							<a className="emptyLink" onClick={() => { clearTaxonomy('topic'); setClear(); }}></a>
							<p className=" text-[16px] font-[500]">
								{topic} {" "}
											{postObj?.data?.universities.pageInfo.total ?
											 `(${postObj?.data?.universities.pageInfo.total})`: 
											 postObj?.data?.universities.pageInfo.total == '0'? ' (0)': ''}
							</p>
							<span className="absolute w-[16px] h-[16px] top-[7px] right-[10px]">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
									<g clip-path="url(#clip0_1587_15631)">
										<path className='group-hover:fill-pink'
											d="M10.7525 6.57506L8.82689 8.4999L10.7525 10.4247C10.8068 10.4791 10.8499 10.5435 10.8793 10.6145C10.9087 10.6855 10.9238 10.7615 10.9238 10.8384C10.9238 10.9152 10.9087 10.9912 10.8793 11.0622C10.8499 11.1332 10.8068 11.1977 10.7525 11.252C10.6982 11.3063 10.6337 11.3494 10.5627 11.3788C10.4917 11.4082 10.4157 11.4233 10.3389 11.4233C10.262 11.4233 10.186 11.4082 10.115 11.3788C10.044 11.3494 9.97956 11.3063 9.92524 11.252L8.00039 9.3264L6.07555 11.252C6.02123 11.3063 5.95675 11.3494 5.88578 11.3788C5.81481 11.4082 5.73875 11.4233 5.66193 11.4233C5.58512 11.4233 5.50905 11.4082 5.43808 11.3788C5.36712 11.3494 5.30263 11.3063 5.24832 11.252C5.194 11.1977 5.15091 11.1332 5.12152 11.0622C5.09212 10.9912 5.07699 10.9152 5.07699 10.8384C5.07699 10.7615 5.09212 10.6855 5.12152 10.6145C5.15091 10.5435 5.194 10.4791 5.24832 10.4247L7.17389 8.4999L5.24832 6.57506C5.13862 6.46536 5.07699 6.31658 5.07699 6.16144C5.07699 6.0063 5.13862 5.85752 5.24832 5.74782C5.35801 5.63813 5.5068 5.5765 5.66193 5.5765C5.81707 5.5765 5.96585 5.63813 6.07555 5.74782L8.00039 7.6734L9.92524 5.74782C9.97956 5.69351 10.044 5.65042 10.115 5.62103C10.186 5.59163 10.262 5.5765 10.3389 5.5765C10.4157 5.5765 10.4917 5.59163 10.5627 5.62103C10.6337 5.65042 10.6982 5.69351 10.7525 5.74782C10.8068 5.80214 10.8499 5.86662 10.8793 5.93759C10.9087 6.00856 10.9238 6.08462 10.9238 6.16144C10.9238 6.23826 10.9087 6.31432 10.8793 6.38529C10.8499 6.45626 10.8068 6.52074 10.7525 6.57506ZM15.6004 8.4999C15.6004 10.003 15.1547 11.4724 14.3196 12.7222C13.4845 13.972 12.2975 14.9462 10.9088 15.5214C9.52007 16.0966 7.99196 16.2471 6.51771 15.9539C5.04345 15.6606 3.68926 14.9368 2.62638 13.8739C1.5635 12.811 0.839674 11.4568 0.546426 9.98259C0.253178 8.50833 0.403684 6.98023 0.978909 5.59151C1.55414 4.20279 2.52825 3.01583 3.77806 2.18073C5.02787 1.34563 6.49725 0.899902 8.00039 0.899902C10.0154 0.90203 11.9472 1.70343 13.3721 3.12824C14.7969 4.55306 15.5983 6.48491 15.6004 8.4999ZM14.4312 8.4999C14.4312 7.22802 14.054 5.98469 13.3474 4.92716C12.6408 3.86962 11.6364 3.04538 10.4613 2.55865C9.28627 2.07192 7.99326 1.94457 6.74581 2.1927C5.49837 2.44083 4.35251 3.0533 3.45315 3.95266C2.55379 4.85202 1.94132 5.99787 1.69319 7.24532C1.44506 8.49277 1.57241 9.78578 2.05914 10.9608C2.54587 12.1359 3.37011 13.1403 4.42765 13.8469C5.48518 14.5535 6.72851 14.9307 8.00039 14.9307C9.70535 14.9287 11.3399 14.2506 12.5455 13.045C13.7511 11.8394 14.4292 10.2049 14.4312 8.4999Z"
											fill="black"
										/>
									</g>
									<defs>
										<clipPath id="clip0_1587_15631">
											<rect
												width="16"
												height="16"
												fill="white"
												transform="translate(0 0.5)"
											/>
										</clipPath>
									</defs>
								</svg>
							</span>
						</li>
						}
						{/* {authSlug && <li className="relative inline-block sm:mb-[15px] mr-[16px] py-[4px] pr-[32px] pl-[10px]  before:content before:absolute before:w-full before:h-full before:top-0 before:left-0 before:border-[1px] before:border-black before:rounded-[100px] hover:before:border-[2px] hover:before:border-pink">
								<a className="emptyLink" onClick={() => { clearTaxonomy('author'); setClear(); }}></a>
								<p className=" text-[16px] font-[500]"> {`${authSlug} (${postObj?.data?.universities.pageInfo.total})`}</p>
								<span className="absolute w-[16px] h-[16px] top-[7px] right-[10px]">
									{cross}
								</span>
							</li>
						} */}
						<li className="inline-block">
							<span className={`bold cursor-pointer text-[14px] font-[700] uppercase underline hover:!text-pink duration-300 ${inter.className}`}
								onClick={() => clearAll()}>
								CLEAR ALL
							</span>
						</li>
					</ul>

					<div className="total-count flex lg:pt-[4px]">
						<p>
							<span className="text-blue font-[600]">{postObj?.data?.universities.pageInfo.total}</span> results
						</p>
					</div>
				</div>

				<div className="hits min-h-[450px]" id="hits">
					<div className="wrapper flex justify-center flex-wrap w-[calc(100%+24px)] -ml-[12px] ">
						{postData.length != 0 ? (postData.map((item, index) => {
							newDate = item.date && moment(item.date).format('MMM DD, YYYY');
							return (
								<div key={index}
									className={`col-three relative w-[calc(33.33%-24px)] sm:w-full tablet:w-[calc(50%-24px)] desktop:w-[calc(50%-24px)] phablet:w-[calc(50%-24px)]  mx-[12px] mb-[20px]`}
									data-aos="fade-up"
									data-aos-delay="300">
									<div className={`${Style.card} relative h-full bg-white rounded-[16px] tablet-mid:p-[30px] md:p-[25px] px-[40px] py-[37px] xl-up:pb-[40px] grouphover:outline-black`}>
										<Link className="emptyLink" href={item.uri}>.</Link>
										<div className="tags mb-[6px]">
											<div className="category inline-block">
												{item?.topics?.nodes && item?.topics?.nodes.slice(0,1).map((item, index) => {
													return (<p key={index}><span className="text-blue uppercase small_font md:!text-[14px] wide-screen:!text-[18px] tracking-[1px] laptop-landscape:!text-[14px] !font-[600]">
														{item.name}
													</span>
													</p>)
												})}
											</div>
											{/* <div className="relative data inline-block ml-[10px] pl-[12px] after:content-[''] after:absolute after:w-[2px] after:h-[20px] lg:after:h-[14px] after:top-1/2 after:-translate-y-1/2 after:left-0 after:bg-blue">
												<p>
													<span className="text-blue uppercase small_font md:!text-[14px] wide-screen:!text-[18px] tracking-[1px] laptop-landscape:!text-[14px] !font-[600]">
														{newDate}
													</span>
												</p>
											</div> */}
										</div>
										<h4 className="mb-[9px] max-h-[86px]  text-ellipsis line-clamp-3">
											{item.title}
										</h4>
										<div className="btn mt-[44px] md:mt-[24px]">
											<Link aria-label="first link" className={`group arrow_btn uppercase text-black relative transition-all duration-300 font-[700] leading-[1] pr-[26px] hover:text-pink ${inter.className} `}
												href={item.uri}>
												<span className='absolute top-1/2 -translate-y-1/2 right-0 w-[20px] overflow-hidden'>
													<svg className='-ml-[5px] duration-300 group-hover:-ml-[1px]' xmlns="http://www.w3.org/2000/svg" width='20' height="17" viewBox={`0 0 20 17`} fill="none">
														<path d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z" fill="#FF3B84" />
													</svg>
												</span>Read More
											</Link>
										</div>
									</div>
								</div>
							);
						})
						) : (<h3 className={`block w-full mt-[100px] text-center ${postObj?.data?.universities?.nodes < 1 ? '' : 'hidden'}`}>No Result Found</h3>)}
					</div>
				</div>
				{postObj?.loading ? <Loader /> :
					postData && postData.length != 0 ?
						count > itemsPerPage && (
							<ul className={`${BlogFilterStyle.pagination} mt-[35px] flex justify-center items-center lg:mt-[20px]`}>
								<button
									onClick={() => handlePageChange(currentPage - 1)}
									disabled={currentPage === 1}
									className="prev-button mr-[18px] text-[0]"
								>
									.
									<div className="iconWrap w-[26px] h-[26px]">
										<div className={`${BlogFilterStyle.imgWrapPrev} relative ${currentPage === 1 && 'opacity-[0.2] pointer-events-none'
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
										(totalPages === currentPage && i + 1 === totalPages - 2)
									) {
										return (
											<li
												key={i + 1}
												onClick={() => handlePageChange(i + 1)}
												className={`text-black text-[18px] font-[500]  leading-[24px] ${inter.className} mx-[8px] cursor-pointer transition-all delay-300 hover:text-pink ${isCurrent ? 'active text-pink !font-[700]' : ''
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
										(i + 1 === currentPage + 2 && i + 1 < totalPages) || (currentPage === totalPages && i + 1 === totalPages - 2)
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
												className={`text-black text-[18px] font-[500]  leading-[24px] ${inter.className}  mx-[8px] cursor-pointer transition-all delay-300 hover:text-pink ${isCurrent ? 'active text-pink !font-[700]' : ''
													}`}
											>
												{i + 1}
											</li>
										);
									} else if (totalPages === currentPage && i + 1 === totalPages - 3) {
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
										<div className={`${BlogFilterStyle.imgWrapNext} relative ${currentPage === totalPages && 'opacity-[0.2] pointer-events-none'}`}></div>
									</div>
								</button>
							</ul>
						) : ''}

			</div>
		</section>
	);
}

export default UniversityFilter;
