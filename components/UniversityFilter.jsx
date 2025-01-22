import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import ArrowBtn from './button/Black_arrowBtn';
import Style from '../styles/platform/contentWithCard.module.css';
import { useEffect } from 'react';
import data from '../pages/data/university.json';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import BlogFilterStyle from '../styles/blog/blogFilter.module.css';
// import EventFilterStyle from '../styles/blog/blogFilter.module.css'
const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
});
import { useRouter } from 'next/router'




const arrow = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="14"
		height="8"
		viewBox="0 0 14 8"
		fill="none"
	>
		<path
			d="M13.6871 1.80909C14.1044 1.39531 14.1042 0.724429 13.6871 0.310796C13.2696 -0.103121 12.5931 -0.103121 12.1756 0.310937L8.06914 4.3823L8.068 4.38159C6.98501 5.30805 6.98501 5.30805 6.98501 5.30805C6.98501 5.30805 6.98501 5.30805 5.93063 4.38173L5.93177 4.38286L1.82446 0.310515C1.4071 -0.103261 0.730267 -0.103261 0.313052 0.310515C0.104445 0.517473 -3.15222e-07 0.788567 -3.03366e-07 1.0598C-2.91516e-07 1.3309 0.104445 1.60199 0.31291 1.80895L6.24454 7.68982C6.44488 7.88858 6.71661 8.00018 7.00017 8.00018C7.28373 8.00004 7.55532 7.88844 7.75609 7.68967L13.6871 1.80909Z"
			fill="black"
		/>
	</svg>
);

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
	const router = useRouter()
	var p = (router.query?.page == undefined ? (1) : parseInt(router.query?.page) > (Math.ceil(data.length / 12)) ? (Math.ceil(data.length / 12)) : parseInt(router.query?.page))
	
	const [wholeData, setWholeData] = useState(data);
	const [dataForSearch, setDataForSearch] = useState(data);
	const [activeTopicFacet, setTopicFacet] = useState();
	const [activeAuthorFacet, setAuthorFacet] = useState();
	const [totalCount, setTotalCount] = useState(data.length);
	const [selectedTopic, setSelectedTopic] = useState('');
	const [countTopic, setCountTopic] = useState(0);
	const [countAuthor, setCountAuthor] = useState(0);
	const [selectedAuthor, setSelectedAuthor] = useState('');
	const [topicData, setTopicData] = useState();
	const [authorData, setAuthorData] = useState();
	const [searchTerm, setSearchTerm] = useState('');
	const [open, setOpen] = useState(0);
	//pagination variables
	const [currentPage, setCurrentPage] = useState(p);
	useEffect(() => {
		setCurrentPage(p)
	}, [p])
	useEffect(() => {
		var t = router.query?.topic == undefined ? '' : router.query?.topic
		var a = router.query?.author == undefined ? '' : router.query?.author
		setSelectedTopic(t)
		setSelectedAuthor(a)
		if (router.query?.topic != undefined) {
			topicFacetHandler(t,1)
		}
		if (router.query?.author != undefined) {
			authorFacetHandler(a, 1)
		}
	},[router]);
	
	const itemsPerPage = 12;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const totalPages = Math.ceil(wholeData.length / itemsPerPage);
	

	
	
	var topics = [];
	var authors = [];
	//set lists
	if (open == 1) {
		let temp = selectedAuthor == '' ? data : authorData;
		const arrayUniqueByTopic = [
			...new Map(temp.map((item) => [item.topic, item])).values(),
		];

		arrayUniqueByTopic.map((item) => {
			topics.push(item.topic);
		});
	}

	if (open == 2) {
		let temp = selectedTopic == '' ? data : topicData;
		const arrayUniqueByAuthors = temp.filter(
			(thing, index, self) =>
				index === self.findIndex((t) => t.author === thing.author),
		);

		arrayUniqueByAuthors.map((item) => {
			authors.push(item.author);
		}, []);
	}

	const listHandler = (i) => {
		open == i ? setOpen(0) : setOpen(i);
	};
	//topic facet
	function topicFacetHandler(val, index) {
		let sorted = [];
		setTopicFacet(index);
		setSelectedTopic(val);

		router.push({
			...router,
			query: {
			  ...router.query,
			  topic: val,
			},
		  },
		  undefined, 
		  { shallow: true }
		);
		if (val == 'removeTopic') {
			sorted = [];
		} else {
			data.filter((item) => {
				if (item.topic == val) {
					sorted.push(item);
				}
			});
		}
		setCountTopic(sorted.length);
		setTopicData(sorted);
		if (selectedAuthor != '') {
			let temp = sorted.length != 0 ? sorted : authorData;
			sorted = [];
			temp.filter((item) => {
				if (item.author == selectedAuthor) {
					sorted.push(item);
				}
			});
		}
		setCurrentPage(1);
		var noDuplicateds = sorted.filter(
			(elem, index, self) => index === self.findIndex((t) => t.id === elem.id),
		);
		setTotalCount(
			noDuplicateds.length == 0 ? data.length : noDuplicateds.length,
		);
		setWholeData(noDuplicateds.length == 0 ? data : noDuplicateds);
		setDataForSearch(noDuplicateds.length == 0 ? data : noDuplicateds);
	}
	//Author facet
	function authorFacetHandler(val, index) {
		let sorted = [];
		setAuthorFacet(index);
		setSelectedAuthor(val);
		router.push({
			...router,
			query: {
			  ...router.query,
			  author: val,
			},
		  },
		  undefined, 
		  { shallow: true }
		);
		if (val != 'removeAuthor') {
			data.filter((item) => {
				if (item.author == val) {
					sorted.push(item);
				}
			});
		}
		setCountAuthor(sorted.length);
		setAuthorData(sorted);
		if (selectedTopic != '') {
			
			let temp = sorted.length != 0 ? sorted : topicData;
			sorted = [];
			temp.filter((item) => {
				if (item.topic == selectedTopic) {
					sorted.push(item);
				}
			});
		}
		setCurrentPage(1);
		var noDuplicateds = sorted.filter(
			(elem, index, self) => index === self.findIndex((t) => t.id === elem.id),
		);
		setTotalCount(
			noDuplicateds.length == 0 ? data.length : noDuplicateds.length,
		);
		setWholeData(noDuplicateds.length == 0 ? data : noDuplicateds);
		setDataForSearch(noDuplicateds.length == 0 ? data : noDuplicateds);
	}

	useEffect(() => {
		document.addEventListener('click', (e) => {
			if (!e.target.classList.contains('facet')) {
				if (!(e.target.tagName == 'SPAN')) {
					setOpen(0);
				}
			}
		});
	});

	//clear All filters
	const clearAll = () => {
		delete router.query.topic
		delete router.query.author
		delete router.query.page
		router.push(router, undefined, { shallow: true });
		setSelectedAuthor('');
		setSelectedTopic('');
		setTopicFacet(999);
		setAuthorFacet(999);
		setWholeData(data);
		setTotalCount(data.length);
		setTopicData();
		setAuthorData();
	};
	//selected facet click
	const selectedFacetHandler = (value, index) => {
		if (value == 'removeTopic') {
			topicFacetHandler(value, index);
			setSelectedTopic('');
			delete router.query.topic
			router.push(router, undefined, { shallow: true });
		} else {
			authorFacetHandler(value, index);
			setSelectedAuthor('');
			delete router.query.author
			router.push(router, undefined, { shallow: true });
		}
	};

	//page click
	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
		if (newPage == 1) {
			delete router.query.page
			router.push(router, undefined, { shallow: true });
		} else {
			router.push({
				...router,
				query: {
				  ...router.query,
				  page: newPage,
				},
			  },
			  undefined, 
				{ shallow: true }
			);
		}
		const sectionElement = document.getElementById('universityFilter');
		if (sectionElement) {
			window.scrollTo({
				top: sectionElement.offsetTop,
				behavior: 'smooth',
			});
		}
	};
	//search active and hover
	const [isSearchCtaHovered, setIsSearchCtaHovered] = useState(false);
	const handleSearchCtaHover = () => {
		setIsSearchCtaHovered(true);
	};
	const handleSearchCtaLeave = () => {
		setIsSearchCtaHovered(false);
	};
	//search handler
	const searchHandler = (term) => {
		setSearchTerm(term);
		if (term == '') {
			setWholeData(dataForSearch);
		} else {
			let searchedData = dataForSearch.filter((item) =>
				item.title.toLowerCase().includes(term.toLowerCase()),
			);
			if (searchedData == '') {
				setWholeData([]);
			} else {
				setWholeData(searchedData);
			}
		}
	};

	return (
		<section
			className={`University-filter filter bg-white no-padding-top padding-medium-bottom ${BlogFilterStyle.blogFilter} `}
			id="universityFilter"
		>
			<div className="search bg-skyblue py-[40px] " id="searchBar">
				<div className="container">
					<div className={`searchWrap`}>
						<form className={`relative ${isSearchCtaHovered ? 'hovered' : ''}`}>
							<label htmlFor="search">.</label>

							<input
								type="search"
								id="search"
								aria-label="first link"
								name="search"
								placeholder="Search"
								className={`pt-[13px] pb-[14px] pl-[16px] xl-up:h-[58px] pr-[50px] active:outline-pink active:outline-[3px] w-full text-black bg-white rounded-[8px] ${
									inter.className
								} lg:text-black lg:bg-white outline-[2px] outline outline-black hover:outline-pink transition-all sm:py-[8px] sm:px-[15px] sm:w-full sm:pr-[20px] ${
									searchTerm ? 'outline-[3px] outline-pink' : ''
								}`}
								value={searchTerm}
								onChange={(e) => searchHandler(e.target.value)}
							/>
							<button
								type="submit"
								className="searchCta"
								onMouseEnter={handleSearchCtaHover}
								onMouseLeave={handleSearchCtaLeave}
							>
								Submit
							</button>
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
						<div
							className={`relative inline-block filter_wrap px-[16px] pr-[41px] py-[7px] rounded-[4px] border-[1px] border-[#00000033] hover:border-black ${
								open == 1 ? 'border-black' : ''
							} mr-[16px] cursor-pointer`}
						>
							<div
								className="facet absolute z-[11] w-full h-full top-0 left-0"
								onClick={() => listHandler(1)}
							></div>
							<p className="xl-up:text-[16px]">Topic</p>
							<span
								className={`absolute w-[15px] h-[8px] top-1/2 right-[16px] -translate-y-[50%] duration-300 ${
									open == 1 ? ' -rotate-180 ' : 'rotate-0'
								}`}
							>
								{arrow}
							</span>
							<ul
								className={`absolute w-[150px] px-[16px] pb-[24px] bg-white h-[224px] ${BlogFilterStyle.scrollbarHide} scroll-auto focus:scroll-auto  overflow-y-auto  ${
									open == 1
										? 'opacity-100 py-[16px] z-[11]  '
										: ' opacity-0 h-0 py-0 -z-[1]'
								} overflow-hidden top-[41px] duration-300 left-0 topic shadow-filter-shadow rounded-[4px]`}
								id="topics"
							>
								{topics.map((item, i) => {
									return (
										<li
											key={i}
											className={`mb-[16px] last:mb-0 hover:text-pink`}
											data-val={`${item}`}
											onClick={() => topicFacetHandler(item, i)}
										>
											<span
												className={`${
													selectedTopic == item ? 'text-pink' : ''
												} inline-block text-[16px] font-[500]`}
											>
												{item}
											</span>
										</li>
									);
								})}
							</ul>
						</div>
						<div
							className={`relative inline-block filter_wrap px-[16px] pr-[32px] py-[7px] rounded-[4px] border-[1px] border-[#00000033] hover:border-black mr-[16px] cursor-pointer ${
								open == 2 ? 'border-black' : ''
							}`}
						>
							<div
								className="facet absolute z-[11] w-full h-full top-0 left-0"
								onClick={() => listHandler(2)}
							></div>
							<p className="xl-up:text-[16px]">Author</p>
							<span
								className={`absolute w-[15px] h-[8px] top-1/2 right-[10px] -translate-y-[50%] duration-300 ${
									open == 2 ? ' -rotate-180 ' : 'rotate-0'
								}`}
							>
								{arrow}
							</span>
							<ul
								className={`absolute w-[150px] px-[16px] bg-white h-[224px] ${BlogFilterStyle.scrollbarHide} scroll-auto focus:scroll-auto  overflow-y-auto  ${
									open == 2
										? 'opacity-100 py-[16px] z-[11]  '
										: 'opacity-0 py-0 -z-[1]'
								} overflow-hidden top-[41px] duration-300 left-0 topic shadow-filter-shadow rounded-[4px]`}
								id="authors"
							>
								{authors.map((item, i) => {
									return (
										<li
											key={i}
											className={`mb-[16px] last:mb-0 hover:text-pink`}
											data-val={`${item}`}
											onClick={() => authorFacetHandler(item, i)}
										>
											<span
												className={`${
													selectedAuthor == item ? 'text-pink' : ''
												} inline-block text-[16px] font-[500]`}
											>
												{item}
											</span>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
				<div
					className={` flex flex-wrap ${
						selectedAuthor == '' && selectedTopic == '' ? 'hidden' : 'block'
					} justify-between selected-facets mt-[25px] mb-[24px] sm:mt-[20px] `}
				>
					<ul>
						{selectedTopic != '' ? (
							<li className="relative group sm:mb-[15px] duration-300 rounded-[100px] inline-block mr-[16px] py-[4px] pr-[32px] pl-[10px] before:content before:absolute before:w-full before:h-full before:top-0 before:left-0 before:border-[1px] before:border-black before:rounded-[100px] hover:before:border-[2px] hover:before:border-pink">
								<a
									className="emptyLink"
									onClick={() => selectedFacetHandler('removeTopic', 999)}
								></a>
								<p className=" text-[16px] font-[500]">
									{`${selectedTopic} (${totalCount})`}{' '}
								</p>
								<span className="absolute w-[16px] h-[16px] top-[7px] right-[10px]">
									<svg xmlns="http://www.w3.org/2000/svg"  width="16" height="17" viewBox="0 0 16 17" fill="none">
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
						) : (
							''
						)}
						{selectedAuthor != '' ? (
							<li className="relative inline-block sm:mb-[15px] mr-[16px] py-[4px] pr-[32px] pl-[10px]  before:content before:absolute before:w-full before:h-full before:top-0 before:left-0 before:border-[1px] before:border-black before:rounded-[100px] hover:before:border-[2px] hover:before:border-pink">
								<a
									className="emptyLink"
									onClick={() => selectedFacetHandler('removeAuthor', 999)}
								></a>
								<p className=" text-[16px] font-[500]">{`${selectedAuthor} (${totalCount})`}</p>{' '}
								<span className="absolute w-[16px] h-[16px] top-[7px] right-[10px]">
									{cross}
								</span>
							</li>
						) : (
							''
						)}
						<li className="inline-block">
							<span
								className="font-[700] fontInter cursor-pointer text-[14px] underline hover:!text-pink duration-300"
								onClick={() => clearAll()}
							>
								CLEAR ALL
							</span>
						</li>
					</ul>

					<div className="total-count flex lg:pt-[4px]">
						<p>
							<span className="text-blue font-[600]">{totalCount}</span> results
						</p>
					</div>
				</div>

				<div className="hits" id="hits">
					<div className="wrapper flex flex-wrap w-[calc(100%+24px)] -ml-[12px] ">
						{wholeData.length != 0 ? (
							wholeData.slice(startIndex, endIndex).map((item, i) => {
								return (
									<div
										key={i}
										className={`col-three relative w-[calc(33.33%-24px)] sm:w-full tablet:w-[calc(50%-24px)] desktop:w-[calc(50%-24px)] phablet:w-[calc(50%-24px)]  mx-[12px] mb-[20px]`}
										data-aos="fade-up"
										data-aos-delay="500"
									>
										<div
											className={`${Style.card} relative bg-white rounded-[16px] tablet-mid:p-[30px] md:p-[25px] px-[40px] py-[37px] xl-up:pb-[40px] grouphover:outline-black`}
										>
											<Link className="emptyLink" href="/homepage">
												.
											</Link>
											<div className="tags mb-[6px]">
												<div className="category inline-block">
													<p>
														<span className="text-blue uppercase small_font md:!text-[14px] wide-screen:!text-[18px] tracking-[1px] laptop-landscape:!text-[14px] !font-[600]">
															{item.topic}
														</span>
													</p>
												</div>
												<div className="relative data inline-block ml-[10px] pl-[12px] after:content-[''] after:absolute after:w-[2px] after:h-[20px] lg:after:h-[14px] after:top-1/2 after:-translate-y-1/2 after:left-0 after:bg-blue">
													<p>
														<span className="text-blue uppercase small_font md:!text-[14px] wide-screen:!text-[18px] tracking-[1px] laptop-landscape:!text-[14px] !font-[600]">
															{item.date}
														</span>
													</p>
												</div>
											</div>
											<h4 className="mb-[9px] max-h-[86px]  text-ellipsis line-clamp-3">
												{item.title}
											</h4>
											<div className="btn mt-[44px] md:mt-[24px]">
												<ArrowBtn text={item.ctaText} link={item.ctaLink} />
											</div>
										</div>
									</div>
								);
							})
						) : (
							<h3 className="block w-full mt-[100px] text-center">
								No Result Found
							</h3>
						)}
					</div>

					{wholeData.length > 12 && (
						<ul className={` ${BlogFilterStyle.pagination} pagination mt-[35px] flex justify-center `}>
							<button
								onClick={() => handlePageChange(currentPage - 1)}
								disabled={currentPage === 1}
								className="prev-button mr-[18px] text-[0]"
							>
								.
								<div className="iconWrap w-[26px] h-[26px]">
									<div
										className={`${BlogFilterStyle.imgWrapPrev} relative ${
											currentPage === 1 && 'opacity-[0.2] pointer-events-none'
										}`}
									></div>
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
									i + 1 === totalPages ||
									(totalPages === currentPage && i + 1 === totalPages - 2)
								) {
									return (
										<li
											key={i + 1}
											onClick={() => handlePageChange(i + 1)}
											className={`text-black text-[18px] font-[500]  leading-[24px] ${
												inter.className
											} mx-[8px] cursor-pointer transition-all delay-300 hover:text-pink ${
												isCurrent ? 'active text-pink font-bold' : ''
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
									(i + 1 === currentPage + 2 && i + 1 < totalPages) ||
									(currentPage === totalPages && i + 1 === totalPages - 2)
								) {
									return (
										<li
											key={`dots-${i + 1}`}
											onClick={() => handlePageChange(i + 1)}
											className={`text-black text-[18px] font-[500]  leading-[24px] ${inter.className}  mx-[8px] cursor-pointer transition-all delay-300 hover:text-pink `}
										>
											...
										</li>
									);
								} else if (i + 1 === 1) {
									return (
										<li
											key={i + 1}
											onClick={() => handlePageChange(i + 1)}
											className={`text-black text-[18px] font-[500]  leading-[24px] ${
												inter.className
											}  mx-[8px] cursor-pointer transition-all delay-300 hover:text-pink ${
												isCurrent ? 'active text-pink font-bold' : ''
											}`}
										>
											{i + 1}
										</li>
									);
								} else if (
									totalPages === currentPage &&
									i + 1 === totalPages - 3
								) {
									return (
										<li
											key={`dots-${i + 1}`}
											onClick={() => handlePageChange(i + 1)}
											className={`text-black text-[18px] font-[500]  leading-[24px] ${inter.className}  mx-[8px] cursor-pointer transition-all delay-300 hover:text-pink `}
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
									<div
										className={`${BlogFilterStyle.imgWrapNext} relative ${
											currentPage === totalPages &&
											'opacity-[0.2] pointer-events-none'
										}`}
									></div>
								</div>
							</button>
						</ul>
					)}
				</div>
			</div>
		</section>
	);
}

export default UniversityFilter;
