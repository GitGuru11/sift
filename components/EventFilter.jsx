import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
// import Black_arrowBtn from './button/Black_arrowBtn';
import Router, { useRouter } from 'next/router';
import eventJsonData from '../pages/data/blogFilter.json';
import EventFilterStyle from '../styles/blog/blogFilter.module.css'

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800']
})

export default function EventFilter() {
    const router = useRouter()
    var x = (router.query?.page == undefined ? (1) : parseInt(router.query?.page) > (Math.ceil(eventJsonData.length / 12)) ? (Math.ceil(eventJsonData.length / 12)) : parseInt(router.query?.page))

    const [isSearchCtaHovered, setIsSearchCtaHovered] = useState(false);
    const [open, setOpen] = useState(0);
    const [uniqueTopic, isUniqueTopic] = useState([]);
    const [wholeData, setWholeData] = useState(eventJsonData);
    const [activeFacet, setActiveFacet] = useState()
    const [totalCount, setTotalCount] = useState(eventJsonData.length)
    const [selectedTopic, setSelectedTopic] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [filterSearch, setFilterSeaarch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [activeTopic, setActiveTopic] = useState(0);
    const [countTopic, setCountTopic] = useState(0)
    const [countAuthor, setCountAuthor] = useState(0)
    const [clickCountAuthor, setClickCountAuthor] = useState(0);
	const [totalCards, setTotalCards] = useState(eventJsonData);
	const [totalData, setTotalData] = useState(eventJsonData);
    const [selectedAuthor, setSelectedAuthor] = useState('');
    const [clickAuthor, setClickAuthor] = useState('');
    const [activeTopicFacet, setTopicFacet] = useState()
    const [activeAuthorFacet, setAuthorFacet] = useState()
    const [topicData, setTopicData] = useState()
    const [authorData, setAuthorData] = useState()


    useEffect(() => {
		setCurrentPage(x)
	})
    const itemsPerPage = 9;
    const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
    const filteredData = totalCards
	const totalPages = Math.ceil(wholeData.length / itemsPerPage);

    var topics = []
    var authors = []
    var product = []

    useEffect(() => {
		const filteredCards = searchTerm
			? eventJsonData.filter(
					(eventJsonData) =>
                    eventJsonData.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    eventJsonData.subTitle
							.toLowerCase()
							.includes(searchTerm.toLowerCase()) ||
                            eventJsonData.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            eventJsonData.author
							?.toLowerCase()
							.includes(searchTerm.toLowerCase())
			  )
			: eventJsonData;
		setTotalData(filteredCards);
		setTotalCards(filteredCards);
        setWholeData(filteredCards);
	}, [searchTerm, activeTopic]);

	const handleSearchCtaHover = () => {
		setIsSearchCtaHovered(true);
	};
	const handleSearchCtaLeave = () => {
		setIsSearchCtaHovered(false);
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
    })
    
    if(open == 1) {
        const temp = (selectedAuthor == '' ? eventJsonData : authorData)

        const uniqueTopicData = temp.filter(
            (value, index, self) => self.findIndex(item => item.topic === value.topic) === index
        );

        uniqueTopicData.map((item) => {
            topics.push(item);
        })
    }
    if(open == 2) {
        const temp = (selectedTopic == '' ? eventJsonData : topicData)

        const uniqueAuthorData = temp.filter((value, index, self) => self.findIndex(item => item.author === value.author) === index
        );
        uniqueAuthorData.map(item => {
            authors.push(item.author);
        },[]);

    }
    function topicHandlerData(val,index) {
        let sorted = []
        setTopicFacet(index)
        setSelectedTopic(val);

        router.push({
            ...router,
                query: {
                    ...router.query,
                    topic: val
                },
        }, undefined, 
        { shallow: true }, )

        if(val == 'removeTopic') {
            sorted = [];
        } else {
            eventJsonData.filter((item) => {
                if(item.topic == val) {
                    sorted.push(item);
                }
            })
        }
       
        setTopicData(sorted)
        if (selectedAuthor != '') {
            const temp = ((sorted.length != 0) ? sorted : authorData)
            sorted = []
            temp.filter((item) => {
                if (item.author == selectedAuthor) {
                    sorted.push(item)
                }
            })
        }
        setCountTopic(sorted.length)
        setCountAuthor(sorted.length)

        var noDuplicateds = sorted.filter((elem, index, self) => index === self.findIndex((t) => (t.id === elem.id)));
        console.log(noDuplicateds);
        setTotalCount((noDuplicateds.length == 0?(eventJsonData.length):(noDuplicateds.length)))
        setWholeData((noDuplicateds.length == 0?eventJsonData:noDuplicateds))
        setTotalCards((noDuplicateds.length == 0?eventJsonData:noDuplicateds));
        setTotalData(noDuplicateds);
        setFilterSeaarch(noDuplicateds)
    }


    function authorHandler(val, index) {
        let sorted = []
        setActiveFacet(index)
        setAuthorFacet(index)
        setSelectedAuthor(val);

        router.push({
            ...router,
                query: {
                    ...router.query,
                    author: val
                },
        }, undefined, 
        { shallow: true }, )

        if(val == 'removeAuthor') {
            sorted = [];
        } else {
            eventJsonData.filter((item) => {
                if(item.author == val) {
                    sorted.push(item);
                }
            })
        }
       
        setAuthorData(sorted)
        if (selectedTopic != '') {
            const temp = ((sorted.length != 0) ? sorted : topicData)
            sorted = []
            temp.filter((item) => {
                if (item.topic == selectedTopic) {
                    sorted.push(item)
                }
            })
        }
        setCountAuthor(sorted.length)
        setCountTopic(sorted.length)
       

        var noDuplicateds = sorted.filter((elem, index, self) => index === self.findIndex((t) => (t.id === elem.id)));
        setTotalCount((noDuplicateds.length == 0?(eventJsonData.length):(noDuplicateds.length)))
        setWholeData((noDuplicateds.length == 0?eventJsonData:noDuplicateds))
        setTotalCards((noDuplicateds.length == 0?eventJsonData:noDuplicateds));
        setTotalData(noDuplicateds);
        setFilterSeaarch(noDuplicateds)
    }
    //clear All filters
    const clearAll = () => {
        delete router.query.topic
		delete router.query.author
		delete router.query.page
		router.push(router, undefined, { shallow: true });
        setSelectedAuthor('')
        setSelectedTopic('')
        setClickAuthor('')
        setTopicFacet(999)
        setAuthorFacet(999)
        setTotalData(eventJsonData)  
        setWholeData(eventJsonData)
        setTotalCount(eventJsonData.length)
        setTotalCards(eventJsonData);
    }
    //selected facet click 
    const selectedFacetHandler = (value, index) => {
        if (value == 'removeTopic') {
        topicHandlerData(value, index)
        setSelectedTopic('')
        delete router.query.topic
		router.push(router, undefined, { shallow: true });
        } else if (value == 'removeAuthor'){
            authorHandler(value, index)
            setSelectedAuthor('')
            delete router.query.author
			router.push(router, undefined, { shallow: true });
        } 
    }


    //Update Url Parameter
    useEffect(() => {
        //Get Url Parameter 
        var tpc = router.query?.topic == undefined ? '' : router.query?.topic
        var ath = router.query?.author == undefined ? '' : router.query?.author

        setSelectedAuthor(ath);
        setSelectedTopic(tpc);
        if(router.query?.author != undefined) {
            authorHandler(ath);
        } else if(router.query.topic != undefined) {
            topicHandlerData(tpc);
        }
    }, [router])

	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
        console.log(newPage)

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

		const sectionElement = document.getElementById("blogFilter");
		if (sectionElement) {
			window.scrollTo({
			  top: sectionElement.offsetTop,
			  behavior: "smooth", 
			});
		}
	};

    const arrow = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="14"
			height="8"
			viewBox="0 0 14 8"
			fill="none"
            className='sm:w-[10px]'
		>
			<path
				d="M13.6871 1.80909C14.1044 1.39531 14.1042 0.724429 13.6871 0.310796C13.2696 -0.103121 12.5931 -0.103121 12.1756 0.310937L8.06914 4.3823L8.068 4.38159C6.98501 5.30805 6.98501 5.30805 6.98501 5.30805C6.98501 5.30805 6.98501 5.30805 5.93063 4.38173L5.93177 4.38286L1.82446 0.310515C1.4071 -0.103261 0.730267 -0.103261 0.313052 0.310515C0.104445 0.517473 -3.15222e-07 0.788567 -3.03366e-07 1.0598C-2.91516e-07 1.3309 0.104445 1.60199 0.31291 1.80895L6.24454 7.68982C6.44488 7.88858 6.71661 8.00018 7.00017 8.00018C7.28373 8.00004 7.55532 7.88844 7.75609 7.68967L13.6871 1.80909Z"
				fill="black"
			/>
		</svg>
	);
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
    <section className={`EventFilter ${EventFilterStyle.blogFilter} pt-0 no-padding`} id="blogFilter">
        <div className="bg-skyblue py-[40px]">
            <div className="container">
                <div className={`searchWrap`}>
                    <form
                        className={`relative ${isSearchCtaHovered ? 'hovered' : ''}`}
                        onSubmit={(e) => e.preventDefault()} 
                    >
                        <label htmlFor="search">.</label>
                        <input
                            type="search"
                            id="search"
                            aria-label="first link"
                            name="search"
                            placeholder="Search blog"
                            className={`pt-[13px] pb-[14px] pl-[16px] pr-[50px] w-full text-black bg-white rounded-[8px] ${
                                inter.className
                            } lg:text-black lg:bg-white outline-[2px] outline outline-black hover:outline-pink transition-all sm:py-[8px] sm:px-[15px] sm:w-full sm:pr-[20px]  ${
                                isSearchCtaHovered ? 'outline-pink' : ''
                            } ${searchTerm ? 'outline-[3px] outline-pink' : ''}`}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
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
        <div className="cardsWithFilter mt-0 bg-white padding-medium-bottom">
            <div className="container">
                <div className="filters-wrapper pt-[41px] pb-[36px] sm:py-[30px] sm:pb-0">
                    <p className={`inline-block mr-[15px] ${inter.className} !font-normal small_font `}>Filter by:</p>
                    <div className="filter-wraps inline-block relative sm:mb-[20px]">
                        <div className={`relative inline-block filter_wrap pl-[15px] pr-[41px] pt-[6px] pb-[8px] rounded-[4px] border-[1px] border-[#00000033] mr-[16px] hover:border-black ${open === 1 ? 'border-black' : ''} cursor-pointer sm:mr-[5px] sm:py-[5px] sm:mb-[10px]`}
                             >
                                <div  className='facet absolute z-[11] w-full h-full top-0 left-0'  onClick={() => listHandler(1)}></div>
                            <p>Region</p>
                            <span
                                className={`absolute w-[15px] h-[8px] top-1/2 right-[18px] -translate-y-[50%] duration-300 ${
                                    open == 1 ? ' -rotate-180 ' : 'rotate-0'
                                }`}
                            >
                                {arrow}
                            </span>
                            <ul
                                className={`absolute  ${
                                    open == 1 ? 'z-[1] bg-white h-[218px] desktop:h-[200px] laptop:h-[200px] laptop-landscape:w-[255px] wide-screen:h-[240px] wide-screen:top-[60px] laptop-landscape:top-[40px] wide-screen:w-[255px] laptop-landscape:h-[240px]  tablet:h-[200px] phablet:h-[170px] sm:h-[182px] opacity-100 visible' : 'h-0 opacity-0 invisible'
                                } overflow-hidden top-[41px] duration-300 left-0 topic w-[236px] p-[20px] overflow-y-auto z-[99] shadow-filter-shadow rounded-[4px] sm:w-[130px] sm:p-[10px]`}
                            >
                                {topics.map((item, i) => {
                                    return (
                                            <li key={i} className={`mb-[12px] last:mb-0 hover:text-pink  z-[99]`} data-val={`${item}`} onClick={() => topicHandlerData(item.topic, i)} ><p className={`${activeTopicFacet == i ? 'text-pink' : ''} text-[16px] font-[500]  leading-[24px]`}>{item.topic}</p></li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className={`relative filter_wrap inline-block px-[16px] pr-[41px] pt-[6px] pb-[8px] rounded-[4px] border-[1px] border-[#00000033] hover:border-black ${open === 2 ? 'border-black' : ''} mr-[16px] cursor-pointer sm:mr-[5px] sm:py-[5px] sm:mb-[10px]`}
                             >
                                <div  className='facet absolute z-[11] w-full h-full top-0 left-0'  onClick={() => listHandler(2)}></div>
                            <p>Event type</p>
                            <span
                                className={`absolute w-[15px] h-[8px] top-1/2 right-[18px] -translate-y-[50%] duration-300 ${
                                    open == 2 ? ' -rotate-180 ' : 'rotate-0'
                                }`}
                            >
                                {arrow}
                            </span>
                            <ul
                                className={`absolute  ${
                                    open == 2 ? 'z-[1] bg-white h-[218px] desktop:h-[190px] laptop:h-[200px] laptop-landscape:h-[240px] wide-screen:top-[60px] laptop-landscape:top-[40px] tablet:h-[200px] phablet:h-[170px] sm:h-[182px] opacity-100 visible' : 'h-0 opacity-0 invisible'
                                } overflow-hidden ${EventFilterStyle.scrollbarHide} top-[41px] duration-300 left-0 topic w-[236px] p-[20px] overflow-y-auto scroll-auto focus:scroll-auto z-[99] shadow-filter-shadow rounded-[4px] sm:w-[130px] sm:p-[10px]`}
                            >
                                {authors.map((item, i) => {
                                    return (
                                            <li key={i} className={`mb-[12px] last:mb-0 hover:text-pink z-[99]`} data-val={`${item}`} onClick={() => authorHandler(item, i)} ><p className={`${activeAuthorFacet == i ? 'text-pink' : ''} text-[16px] font-[500]  leading-[24px]`}>{item}</p></li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={` flex flex-wrap ${(selectedAuthor == '' && selectedTopic == '') ? 'hidden' : 'block'} justify-between selected-facets mb-[24px]`}>
                    <ul className={`${(selectedAuthor == '' && selectedTopic == '') ? 'hidden' : 'block'}`}>
                        {selectedTopic != '' ? (<li className={`relative outline outline-black outline-[1px] ${EventFilterStyle.SelectedItems} group hover:outline-pink hover:outline-[2px] rounded-[100px] inline-block hover: mr-[16px] py-[4px] pr-[32px] pl-[10px] sm:mb-[10px]`}><a className='emptyLink' onClick={()=>selectedFacetHandler('removeTopic',999)}></a><p className=' small_font font-[500]'>{`${selectedTopic} (${countTopic})`} </p><span className='absolute w-[16px] h-[16px] top-[7px] lg:top-[5px] desktop:top-[7px] laptop:top-[7px] right-[10px]'>{cross}</span></li>) : ''}
                        {selectedAuthor != '' ? (<li className={`relative outline outline-black outline-[1px] ${EventFilterStyle.SelectedItems} group hover:outline-pink hover:outline-[2px] rounded-[100px] inline-block mr-[16px] py-[4px] pr-[32px] pl-[10px] sm:mb-[10px]`}><a className='emptyLink' onClick={()=>selectedFacetHandler('removeAuthor',999)}></a><p className=' small_font font-[500]'>{`${selectedAuthor} (${countAuthor})`}</p> <span className='absolute w-[16px] h-[16px] top-[7px] lg:top-[5px] desktop:top-[7px] laptop:top-[7px] right-[10px]'>{cross}</span></li>) : ''}
                        <li className='inline-block pr-[10px] lg:hidden' ><p className='bold cursor-pointer  text-[14px] font-[700] underline hover:text-pink' onClick={()=>clearAll()}>CLEAR ALL</p></li>
                    </ul>

                    <div className='total-count flex alignright'>
                        <ul>
                        <li className='inline-block pr-[10px] lg-up:hidden' ><p className='bold cursor-pointer text-[14px] font-[700] underline hover:text-pink' onClick={()=>clearAll()}>CLEAR ALL</p></li>
                            <li className='inline-block'><p><span className='text-blue font-[600]'>{totalCount }</span> results</p></li>
                        </ul>
                        
                        
                    </div>

                </div>
                <div className="filterCards min-h-[300px] relative">
                    <div className="wrapper flex flex-wrap w-[calc(100%+24px)] ml-[-12px] desktop-mid:w-[calc(100%+12px)] desktop:w-[calc(100%+16px)] desktop:ml-[-8px] desktop-mid:ml-[-6px] tablet:w-[calc(100%+12px)] tablet:ml-[-6px] phablet:w-[calc(100%+12px)]  phablet:ml-[-6px] sm:w-full sm:ml-0">
                        {(wholeData.length != 0?wholeData.slice(startIndex, endIndex).map((cardData, index) => {
                            return (
                                <div
                                    key={index}
                                    className="relative group mb-[20px] bg-white col-three w-[calc(33.33%-22px)] mx-[11px] border-[2px] border-solid border-black desktop:w-[calc(33.33%-16px)] desktop:mx-[8px] rounded-[16px] overflow-hidden outline outline-[1px] outline-white transition-all duration-300 ease-in-out hover:shadow-black-shadow hover:outline-black desktop-mid:w-[calc(50%-12px)] desktop-mid:mx-[6px] tablet:w-[calc(50%-12px)] tablet:mx-[6px] phablet:w-[calc(50%-12px)] phablet:mx-[6px] sm:w-full sm:mx-0"
                                    id={index}
                                    
                                >
                                    <Link className="emptyLink" href="#">
                                                .
                                            </Link>
                                    <div
                                        className={`card relative`}
                                    >
                                        <div className="imgWrap relative h-[241px] bg-black overflow-hidden xl:h-full laptop:h-full xxl-up:h-full">
                                            
                                            <Image src={`/eventsFilter/girl-boy.png`} alt='' className='h-full w-full scale-100 group-hover:scale-105 transition-all duration-300 ease-in-out' width={372} height={242} />
                                        </div>
                                        <div className="content py-[31px] pt-[29px] px-[30px] lg:p-[20px] desktop-laptop:p-[20px] desktop-mid:mb-0 tablet:mb-0 md:p-[20px] sm:mb-0">
                                            <p className='text-blue small_font xl:!text-[14px] laptop-landscape:text-[14px] uppercase font-bold'>{cardData.topic}</p>
                                            <Link href="#"><h4 className='mt-[6px] h-[116px] laptop-landscape:!h-[100px] phablet:h-[66px] desktop-laptop:h-[72px] tablet:h-[72px] desktop-mid:h-[72px] desktop:h-[72px] desktop:line-clamp-3 lg:line-clamp-3 sm:h-[66px] xxl-up:h-[90px] wide-screen:h-[90px] text-ellipsis line-clamp-4'>{cardData.title}</h4></Link>
                                            <div className="location-with-date mt-[23px] mb-[20px] sm:mt-[20px]">
                                                <div className="icon_with_location flex mb-[8px]">
                                                    <div className="w-[24px] pl-[2px]">
                                                        <Image src="/eventsFilter/location.svg" width={24} height={24} alt="Location" />
                                                    </div>
                                                    <div className="text pl-[8px]">
                                                    <p className='small_font text-black'>Virtual</p>
                                                    </div>
                                                </div>
                                                <div className="icon_with_location flex mb-[8px]">
                                                    <div className="w-[24px] pl-[2px]">
                                                    <Image src="/eventsFilter/clock.svg" width={24} height={24} alt="Location" />
                                                    </div>
                                                    <div className="text pl-[8px]">
                                                    <p className='small_font text-black'>11 A.M. PT / 2 P.M. ET</p>
                                                    </div>
                                                </div>
                                                <div className="icon_with_location flex">
                                                    <div className="w-[24px] pl-[2px]">
                                                    <Image src="/eventsFilter/calendar-check-fill.svg" width={24} height={24} alt="Location" />
                                                    </div>
                                                    <div className="text pl-[8px]">
                                                    <p className='small_font text-black'>Dec 6, 2023</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="btn relative ">
                                                <span
                                                    aria-label="first link"
                                                    className={`arrow_btn uppercase text-black relative xl:text-[14px] laptop-landscape:!text-[14px] wide-screen:text-[24px] transition-all duration-300 font-[700] leading-[1] pr-[26px] wide-screen:pr-[40px] md:text-[14px] group-hover:text-pink ${inter.className} `}
                                                    href="/"
                                                >
                                                    <span className="absolute top-1/2 -translate-y-1/2 right-0 w-[20px] laptop-landscape:w-[20px] wide-screen:w-[30px] overflow-hidden">
                                                        <svg
                                                            className="-ml-[5px] duration-300 group-hover:-ml-[1px] wide-screen:w-[30px] laptop-landscape:!w-[20px] wide-screen:h-[25px]"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="20"
                                                            height="17"
                                                            viewBox={`0 0 20 17`}
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M13.7365 2.76816C13.3847 2.41055 12.8143 2.41067 12.4626 2.76816C12.1107 3.12602 12.1107 3.70592 12.4628 4.06378L15.9241 7.58359L1.90066 7.58457C1.40319 7.58469 1 7.9947 1 8.50083C1.00012 9.00672 1.40331 9.4166 1.90078 9.4166L15.9246 9.41563L12.4624 12.9362C12.1106 13.2939 12.1106 13.8741 12.4624 14.2317C12.6384 14.4105 12.8688 14.5 13.0994 14.5C13.3299 14.5 13.5604 14.4105 13.7363 14.2318L18.7361 9.14754C18.9051 8.97582 19 8.7429 19 8.49985C18.9999 8.2568 18.905 8.02401 18.736 7.85192L13.7365 2.76816Z"
                                                                fill="#FF3B84"
                                                            />
                                                        </svg>
                                                    </span>
                                                    LEARN MORE
                                                    {/* {cardData.cta} */}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }) : (<h3 className='block w-full mt-[100px] text-center'>No Result Found</h3>))} 
                    </div>
                        {wholeData.length > 9 && (
							<ul className={`${EventFilterStyle.pagination} mt-[35px] flex justify-center items-center lg:mt-[20px] desktop:mt-[20px] `}>
								<button
									onClick={() => handlePageChange(currentPage - 1)}
									disabled={currentPage === 1}
									className="prev-button mr-[18px]"
								>
									<div className="iconWrap w-[26px] h-[26px]">
                                        <div className={`${EventFilterStyle.imgWrapPrev} relative ${
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
										(i + 1 === currentPage + 2 && i + 1 < totalPages) ||  (currentPage === totalPages && i + 1 === totalPages - 2)
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
												className={`text-black text-[18px] font-[500]  leading-[24px] ${inter.className}  mx-[8px] cursor-pointer transition-all delay-300 hover:text-pink ${
													isCurrent ? 'active text-pink font-bold' : ''
												}`}
											>
												{i + 1}
											</li>
										);
									}else if (totalPages === currentPage && i + 1 === totalPages - 3) {
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
									className="next-button ml-[18px]"
								>
									<div className={`iconWrap w-[26px] h-[26px]`}>
                                        <div className={`${EventFilterStyle.imgWrapNext} relative ${
												currentPage === totalPages && 'opacity-[0.2] pointer-events-none'}`}></div>
									</div>
								</button>
							</ul>
						)}
				</div>
            </div>
        </div>

    </section>
  )
}
