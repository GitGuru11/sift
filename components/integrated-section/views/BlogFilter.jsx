import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_ALL_BLOG_POST, GET_ALL_BLOG_CATEGORY, GET_ALL_BLOG_TAGS, GET_ALL_BLOG_AUTHORS, GET_CURRENT_CATEGORY_NAME } from '../../../graphql/blogFilterData';
import { Inter } from 'next/font/google';
import BlogFilterStyle from '../../../styles/blog/blogFilter.module.css'
import moment from 'moment';
import Loader from '../Loader'
// import {Pagination} from "@nextui-org/react";

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800']
})


export default function BlogFilter() {
    const router = useRouter();
    const [open, setOpen] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [catSlug, setCatSlug] = useState();
    const [catName, setCatName] = useState();
    const [catCount, setCatCount] = useState(0);
    const [tagSlug, setTagSlug] = useState();
    const [tagName, setTagName] = useState();
    const [tagCount, setTagCount] = useState(0);
    const [authSlug, setAuthSlug] = useState();

    // SEARCH INPUT DEBOUNCE
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);


    //Forms Variable
    const [formSubmit, setFormSubmit] = useState(false);
    const [isInputBox, setInputValue] = useState('');
    const [isFocus, setEleFocus] = useState(false);
    const [drpList, isSelectList] = useState('United states');

    const [isSearchCtaHovered, setIsSearchCtaHovered] = useState(false);

    const [startCursor, setStartCursor] = useState('');
    const [endCursor, setEndCursor] = useState('');
    const [first, setFirst] = useState(9);
    const [last, setLast] = useState();
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    // const hasPage = parseInt(router.query?.pid);
    const itemsPerPage = 9;
    
    // Loader Variables
    const [loading, setLoading] = useState(true);

    // Get Posts
    const postObj = useQuery(GET_ALL_BLOG_POST, {
        variables: { catSlug: catSlug, tagSlug: tagSlug, authSlug: authSlug, searchTerm: searchTerm, startCursor: startCursor, endCursor: endCursor, first: first, last: last, offset: offset, limit: itemsPerPage},
    });

    let postData = [];
    if (postObj.loading) {
        // console.log("Loading list of Posts")
    } else {
        postData = postObj.data;
    }
      // Pagination
    const [count, setCount] = useState(null);

      useEffect(() => {
		if (count === null && postData?.posts?.pageInfo.total && catName == "" && tagName == "" && authSlug == "") {
			setCount(postData?.posts?.pageInfo.total);
		} else if(catName !== "" || tagName !== "" || authSlug !== "") {
			setCount(postData?.posts?.pageInfo.total);
		}
	}, [postData, count , catName, tagName , authSlug]);
    const pageInfo = postData?.posts?.pageInfo || '';
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
            const sectionElement = document.getElementById("BlogFilter");
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


    // Get All Category
    const categoryObj = useQuery(GET_ALL_BLOG_CATEGORY);
    

    // Get All Tags
    const tagsObj = useQuery(GET_ALL_BLOG_TAGS);
    

    // Get All Tags
    const authorsObj = useQuery(GET_ALL_BLOG_AUTHORS);
   

    function categoryHandler(id, name, slug, count) {
        setOpen(0);
        setOffset(0);
        setCatName(name);
        setCatSlug(slug);
        setCatCount(count)
        setOffset(0);
        setCurrentPage(1);
        const { pid, ...newQuery } = router.query; 
        router.push({
            pathname: router.pathname,
            query: { ...newQuery, category: slug }
        }, undefined, { scroll: false });
    }


    // function tagsHandler(id, name, slug, count) {
    //     setOpen(0);
    //     setOffset(0);
    //     setTagSlug(slug);
    //     setTagName(name);
    //     setTagCount(count)
    //     router.push({
    //         pathname: router.pathname,
    //         query: { ...router.query, topic: slug , pid: 1 }
    //     }, undefined, { scroll: false });
      
       
    // }

    function authorHandler(slug) {
        setOpen(0);
        setOffset(0);
        setAuthSlug(slug);
        setOffset(0);
        setCurrentPage(1);
        const { pid, ...newQuery } = router.query; 
        router.push({
            pathname: router.pathname,
            query: { ...newQuery, author: slug }
        }, undefined, { scroll: false });
    }
 
    // DEBOUNCE EFFECT FOR SEARCH INPUT
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);
    useEffect(() => {      
        if (debouncedSearchTerm) {
            const { pid, ...currentQuery } = router.query;
            router.push({
                pathname: router.pathname,
                query: { ...currentQuery, search: debouncedSearchTerm }
            }, undefined, { scroll: false });
        } else {
            const { search, ...newQueryWithoutSearch } = router.query; 
            router.push({
                pathname: router.pathname,
                query: { ...newQueryWithoutSearch },
            }, undefined, { scroll: false });
        }
    }, [debouncedSearchTerm]); 

    //DEBOUNCE SEARCH TERM

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value); 
        event.preventDefault(); 
    };

    // DEBOUNCE END
    
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
    function setClear() {
        delete router.query.pid;
			router.push({
				pathname: router.pathname,
				query: { ...router.query },
			}, undefined, { scroll: false })
    }

    function clearTaxonomy(val) {
        if (val == 'topic') {
            if(router.query?.topic !== undefined){
                delete router.query?.topic;
                router.push({
                    pathname: router.pathname,
                    query: { ...router.query },
                }, undefined, { scroll: false })
			}
          
            setTagName();
            setTagSlug();
        } else if (val == 'category') {
            if(router.query?.category !== undefined){
                delete router.query?.category;
                router.push({
                    pathname: router.pathname,
                    query: { ...router.query },
                }, undefined, { scroll: false })
			}
            setCatName();
            setCatSlug();
        }
        else if (val == 'author') {
            if(router.query?.author !== undefined){
                delete router.query?.author;
                router.push({
                    pathname: router.pathname,
                    query: { ...router.query },
                }, undefined, { scroll: false })
			}
           
            setAuthSlug();
        }
       
    }

    function getUrlParam() {
        const params = router.query;
        const hasCat = 'category' in params;
        const hasTag = 'topic' in params;
        const hasAuth = 'author' in params;
        const hasSearch = 'search' in params;
        if (hasCat) {
            setCatSlug(params.category);
            if(categoryObj && categoryObj.data && categoryObj.data.categories.nodes) {
                const object = categoryObj.data.categories.nodes.find(obj => obj.slug === params.category);
                setCatName(object.name);
                setCatCount(object.count);
            }
        } else {
            clearTaxonomy('category');
        }
        if (hasAuth) {
            setAuthSlug(params.author);
        } else {
            // clearTaxonomy('author');
        }

        if (hasTag) {
            setTagSlug(params.topic);
            if(tagsObj && tagsObj.data && tagsObj.data.tags.nodes) {
                const object = tagsObj.data.tags.nodes.find(obj => obj.slug === params.topic);
                setTagName(object.name);
                setTagCount(object.count);
            }
        } else {
            // clearTaxonomy('topic');
        }
        if(hasSearch) {
            setSearchTerm(params.search);
        } else {
            if(router.query?.search !== undefined){
                delete router.query?.search;
                router.push({
                    pathname: router.pathname,
                    query: { ...router.query },
                }, undefined, { scroll: false })
            }
        }
    }

    function clearAll() {
        setTagName();
        setTagSlug();
        setCatName();
        setCatSlug();
        setAuthSlug();
        setSearchTerm('');
        delete router.query;
        router.push({
            pathname: 'blog'
        }, undefined, { scroll: false })
    }

    function clearSearch () {
        if(router.query?.search !== undefined){
            delete router.query.search;
            router.push({
                pathname: router.pathname,
                query: { ...router.query },
            }, undefined, { scroll: false })
        }
        setSearchTerm('');
    }

    useEffect(()=> {
        if(router.query?.pid == undefined || !router.query?.pid){
            handlePageChange(1);
        }
        getUrlParam(); 
    }, [router.asPath , tagsObj, categoryObj])

    useEffect(() => {
        const hasPage = parseInt(router?.query?.pid);
        if (hasPage) {
            handlePageChange(hasPage);
        }
    }, []);

    const listHandler = (i) => {
        (open == i ? setOpen(0) : setOpen(i))
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
  

    //Form Code
    const handleSubmit = (event) => {
        event.preventDefault();
        setFormSubmit(true);
    };

    const selectDrop = (val, drpSelectValue) => {

        if (val === true) {
            setEleFocus(true);
            isSelectList(drpSelectValue)

        }
    }
    useEffect(() => {
        var sectionId = document.getElementById('blogFilter');
        if (sectionId) {
            sectionId.addEventListener('click', function () {
                setEleFocus(false);
            })
        }

    })
    const inputText = (inputVaue) => {
        setInputValue(inputVaue);
    }

     //   Loading code
     useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }, []);

    const cross = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none" className='group-hover:pink-stroke wide-screen:w-[20px] wide-screen:h-[20px]'>
        <g clip-path="url(#clip0_1587_15631)">
            <path d="M10.7525 6.57506L8.82689 8.4999L10.7525 10.4247C10.8068 10.4791 10.8499 10.5435 10.8793 10.6145C10.9087 10.6855 10.9238 10.7615 10.9238 10.8384C10.9238 10.9152 10.9087 10.9912 10.8793 11.0622C10.8499 11.1332 10.8068 11.1977 10.7525 11.252C10.6982 11.3063 10.6337 11.3494 10.5627 11.3788C10.4917 11.4082 10.4157 11.4233 10.3389 11.4233C10.262 11.4233 10.186 11.4082 10.115 11.3788C10.044 11.3494 9.97956 11.3063 9.92524 11.252L8.00039 9.3264L6.07555 11.252C6.02123 11.3063 5.95675 11.3494 5.88578 11.3788C5.81481 11.4082 5.73875 11.4233 5.66193 11.4233C5.58512 11.4233 5.50905 11.4082 5.43808 11.3788C5.36712 11.3494 5.30263 11.3063 5.24832 11.252C5.194 11.1977 5.15091 11.1332 5.12152 11.0622C5.09212 10.9912 5.07699 10.9152 5.07699 10.8384C5.07699 10.7615 5.09212 10.6855 5.12152 10.6145C5.15091 10.5435 5.194 10.4791 5.24832 10.4247L7.17389 8.4999L5.24832 6.57506C5.13862 6.46536 5.07699 6.31658 5.07699 6.16144C5.07699 6.0063 5.13862 5.85752 5.24832 5.74782C5.35801 5.63813 5.5068 5.5765 5.66193 5.5765C5.81707 5.5765 5.96585 5.63813 6.07555 5.74782L8.00039 7.6734L9.92524 5.74782C9.97956 5.69351 10.044 5.65042 10.115 5.62103C10.186 5.59163 10.262 5.5765 10.3389 5.5765C10.4157 5.5765 10.4917 5.59163 10.5627 5.62103C10.6337 5.65042 10.6982 5.69351 10.7525 5.74782C10.8068 5.80214 10.8499 5.86662 10.8793 5.93759C10.9087 6.00856 10.9238 6.08462 10.9238 6.16144C10.9238 6.23826 10.9087 6.31432 10.8793 6.38529C10.8499 6.45626 10.8068 6.52074 10.7525 6.57506ZM15.6004 8.4999C15.6004 10.003 15.1547 11.4724 14.3196 12.7222C13.4845 13.972 12.2975 14.9462 10.9088 15.5214C9.52007 16.0966 7.99196 16.2471 6.51771 15.9539C5.04345 15.6606 3.68926 14.9368 2.62638 13.8739C1.5635 12.811 0.839674 11.4568 0.546426 9.98259C0.253178 8.50833 0.403684 6.98023 0.978909 5.59151C1.55414 4.20279 2.52825 3.01583 3.77806 2.18073C5.02787 1.34563 6.49725 0.899902 8.00039 0.899902C10.0154 0.90203 11.9472 1.70343 13.3721 3.12824C14.7969 4.55306 15.5983 6.48491 15.6004 8.4999ZM14.4312 8.4999C14.4312 7.22802 14.054 5.98469 13.3474 4.92716C12.6408 3.86962 11.6364 3.04538 10.4613 2.55865C9.28627 2.07192 7.99326 1.94457 6.74581 2.1927C5.49837 2.44083 4.35251 3.0533 3.45315 3.95266C2.55379 4.85202 1.94132 5.99787 1.69319 7.24532C1.44506 8.49277 1.57241 9.78578 2.05914 10.9608C2.54587 12.1359 3.37011 13.1403 4.42765 13.8469C5.48518 14.5535 6.72851 14.9307 8.00039 14.9307C9.70535 14.9287 11.3399 14.2506 12.5455 13.045C13.7511 11.8394 14.4292 10.2049 14.4312 8.4999Z" fill="black" />
        </g>
        <defs>
            <clipPath id="clip0_1587_15631">
                <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
            </clipPath>
        </defs>
    </svg>

    return (
        <section className={`BlogFilter overflow-hidden ${BlogFilterStyle.blogFilter} pt-0 no-padding`} id="BlogFilter">
            <div className="bg-skyblue pt-[39px] pb-[40px] desktop:py-[30px] lg:py-[20px]">
                <div className="container">
                    <div className={`searchWrap`}>
                        <form className={`relative`} onSubmit={handleSearch}>
                            <label htmlFor="search">.</label>
                            <input
                                type="search"
                                id="search"
                                aria-label="first link"
                                name="search"
                                placeholder="Search blog"
                                className={`pt-[13px] pb-[14px] pl-[16px] pr-[82px] w-full text-black bg-white rounded-[8px] ${
                                    inter.className
                                } lg:text-black lg:bg-white outline-[2px] outline outline-black hover:outline-pink transition-all sm:py-[8px] sm:px-[15px] sm:w-full sm:pr-[20px]  ${
                                    isSearchCtaHovered ? 'outline-pink' : ''
                                } ${searchTerm ? 'outline-[3px] outline-pink' : ''}`}
                                    value={searchTerm}
                                    onChange={handleSearchChange}

                                    required
                            />
                            <span className={`crossBtn ${searchTerm ? 'show' : 'hide'} absolute top-[50%] right-[60px] w-[18px] cursor-pointer text-[20px] translate-y-[-50%] hover:text-pink`} onClick={()=> clearSearch()}>X</span>
                            <button type="submit" className="searchCta">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={` cardsWithFilter relative mt-0 bg-white padding-medium-bottom `}>
                <div className={`container`}>
                    <div className="filters-wrapper py-[39px] sm:py-[30px] sm:pb-0">
                        <p className={`inline-block mr-[15px] ${inter.className} !font-normal small_font `}>Filter by:</p>
                        <div className="filter-wraps inline-block relative sm:mb-[20px]">
                            {/* <div className={`relative inline-block filter_wrap pl-[15px] pr-[41px] pt-[6px] pb-[8px] rounded-[4px] border-[1px] border-[#00000033] mr-[16px] sm:mr-[10px] hover:border-black ${open === 1 ? 'border-black' : ''} cursor-pointer sm:mr-[5px] sm:py-[5px] sm:mb-[10px]`}>
                                <div className='facet absolute z-[11] w-full h-full top-0 left-0' onClick={() => listHandler(1)}></div>
                                <p>Topic</p>
                                <span className={`absolute w-[15px] h-[8px] top-1/2 right-[18px] -translate-y-[50%] duration-300 ${open == 1 ? ' -rotate-180 ' : 'rotate-0'}`}>
                                    <Image src='/blogFilter/dropDown.png' width={14} height={8} alt='Arrow'></Image>
                                </span>
                                <ul className={`absolute  ${open == 1 ? 'z-[1] bg-white !h-[218px] xxl-up:w-[260px] sm:!h-[214px] opacity-100 visible' : 'h-0 z-[1] opacity-0 invisible'} top-[44px] wide-screen:top-[56px] phablet:top-[42px] sm:top-[38px] duration-300 left-0 topic  w-[236px] p-[20px] overflow-auto z-[90] shadow-filter-shadow rounded-[4px] sm:w-[130px] sm:p-[10px]`}>
                                    {tagsObj && tagsObj.data && tagsObj.data.tags.nodes.map((item, i) => {
                                        return (
                                            <li key={i} className={`mb-[16px] hover:text-pink ${item.slug == tagSlug ? "text-pink" : "" }`} data-id={item.termTaxonomyId} data-val={`${item.slug}`} onClick={() => tagsHandler(item.termTaxonomyId, item.name, item.slug, item.count)} >
                                                <p className={`text-[16px] font-[500]  leading-[24px]`}>{item.name}</p>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div> */}
                            {/* <div className={`relative filter_wrap inline-block px-[16px] pr-[41px] pt-[6px] pb-[8px] rounded-[4px] border-[1px] border-[#00000033] sm:mr-[10px]  hover:border-black ${open === 2 ? 'border-black' : ''} mr-[16px] cursor-pointer sm:mr-[5px] sm:py-[5px] sm:mb-[10px]`}>
                                <div className='facet absolute z-[11] w-full h-full top-0 left-0' onClick={() => listHandler(2)}></div>
                                <p>Author</p>
                                <span className={`absolute w-[15px] h-[8px] top-1/2 right-[18px] -translate-y-[50%] duration-300 ${open == 2 ? ' -rotate-180 ' : 'rotate-0'}`}>
                                    <Image src='/blogFilter/dropDown.png' width={14} height={8} alt='Arrow'></Image>
                                </span>
                                <ul className={`absolute  ${open == 2 ? 'z-[1] bg-white !h-[236px] xxl-up:w-[260px] xxl-up:h-[236px] xxl-mid-up:h-[250px] wide-screen:h-[250px] desktop:h-[200px] laptop:h-[190px] tablet:h-[194px] phablet:h-[170px] sm:h-[182px] opacity-100 visible' : 'h-0 opacity-0 invisible'} top-[44px] wide-screen:top-[56px] phablet:top-[42px] sm:top-[38px] duration-300 left-0 topic w-[236px] p-[20px] overflow-y-auto z-[90] shadow-filter-shadow rounded-[4px] sm:w-[130px] sm:p-[10px]`}>
                                    {authorsObj && authorsObj.data && authorsObj.data.users.nodes.map((item, i) => {
                                        return (
                                            <li key={i} className={`mb-[16px] hover:text-pink  ${item.name == authSlug ? "text-pink" : "" }`} data-val={item.name} onClick={() => authorHandler(item.name)} >
                                                <p className={` text-[16px] font-[500]  leading-[24px]`}>{item.firstName&&item.firstName} {item.lastName&&item.lastName}</p></li>
                                        )
                                    })}
                                </ul>
                            </div> */}
                            <div className={`relative filter_wrap inline-block px-[16px] pr-[41px] pt-[6px] pb-[8px] rounded-[4px] border-[1px] border-[#00000033] sm:mr-[10px]  hover:border-black ${open === 3 ? 'border-black' : ''} mr-[16px] cursor-pointer sm:mr-[5px] sm:py-[5px] sm:mb-[10px]`}>
                                <div className='facet absolute z-[11] w-full h-full top-0 left-0' onClick={() => listHandler(3)}></div>
                                <p>Category</p>
                                <span className={`absolute w-[15px] h-[8px] top-1/2 right-[18px] -translate-y-[50%] duration-300 ${open == 3 ? ' -rotate-180 ' : 'rotate-0'}`}>
                                    <Image src='/blogFilter/dropDown.png' width={14} height={8} alt='Arrow'></Image>
                                </span>
                                <ul className={`absolute  ${open == 3 ? 'z-[1] bg-white !h-[218px] xxl-up:w-[260px] sm:!h-[214px] opacity-100 visible' : 'h-0 opacity-0 invisible'} top-[44px] wide-screen:top-[56px] phablet:top-[42px] sm:top-[38px] duration-300 left-0 topic w-[236px] p-[20px] overflow-auto z-[90] shadow-filter-shadow rounded-[4px] sm:w-[130px] sm:p-[10px]`}>
                                    {categoryObj && categoryObj.data && categoryObj.data.categories.nodes.map((item, i) => {
                                        return (
                                            <li key={i} className={`mb-[16px] hover:text-pink  ${item.slug == catSlug ? "text-pink" : "" }`} data-id={item.categoryId} data-val={`${item.slug}`} onClick={() => categoryHandler(item.categoryId, item.name, item.slug, item.count)} >
                                                <p className={`text-[16px] font-[500]  leading-[24px]`}>{item.name}</p>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`flex-wrap ${(!catName  && !tagName && !authSlug && !searchTerm) ? 'hidden' : 'flex'} justify-between selected-facets laptop:mt-[0] xl:mt-[0] mb-[24px]`}>
                        <ul>
                            {catName ? (
                            <li className={`relative outline outline-black outline-[1px] ${BlogFilterStyle.SelectedItems} group hover:outline-pink hover:outline-[2px] rounded-[100px] inline-block hover: mr-[16px] py-[4px] pr-[32px] pl-[10px] sm:mb-[10px]`}>
                                <a className='emptyLink' onClick={()=>{clearTaxonomy('category'); setClear();}}></a>
                                <p className=' xxl:text-[14px] text-[16px] font-[600] capitalize'>{catName} {" "}
											{postData?.posts?.pageInfo.total ?
											 `(${postData?.posts?.pageInfo.total})`: 
											 postData?.posts?.pageInfo.total == '0'? ' (0)': ''}</p>
                                <span className="absolute w-[16px] h-[16px] top-[7px] right-[10px]">
											{cross}
								</span>
                            </li>) : ''}
                            {tagName ? (
                            <li className={`relative outline outline-black outline-[1px] ${BlogFilterStyle.SelectedItems} group hover:outline-pink hover:outline-[2px] rounded-[100px] inline-block mr-[16px] py-[4px] pr-[32px] pl-[10px] sm:mb-[10px]`}>
                                <a className='emptyLink' onClick={()=>{clearTaxonomy('topic'); setClear();}}></a>
                                <p className=' xxl:text-[14px] text-[16px] font-[600] capitalize'>{tagName}  {" "}
											{postData?.posts?.pageInfo.total ?
											 `(${postData?.posts?.pageInfo.total})`: 
											 postData?.posts?.pageInfo.total == '0'? ' (0)': ''}</p> 
                                <span className="absolute w-[16px] h-[16px] top-[7px] right-[10px]">
											{cross}
										</span>
                            </li>) : ''}
                            {authSlug ? (
                            <li className={`relative outline outline-black outline-[1px] ${BlogFilterStyle.SelectedItems} group hover:outline-pink hover:outline-[2px] rounded-[100px] inline-block mr-[16px] py-[4px] pr-[32px] pl-[10px] sm:mb-[10px]`}>
                                <a className='emptyLink' onClick={()=>{clearTaxonomy('author'); setClear(); }}></a>
                                <p className=' xxl:text-[14px] text-[16px] font-[600] capitalize'> {authSlug} {" "}
											{postData?.posts?.pageInfo.total ?
											 `(${postData?.posts?.pageInfo.total})`: 
											 postData?.posts?.pageInfo.total == '0'? ' (0)': ''} </p> 
                                <span className="absolute w-[16px] h-[16px] top-[7px] right-[10px]">
											{cross}
										</span>
                            </li>) : ''}
                            <li className='inline-block pr-[10px] lg:hidden' ><p className='bold cursor-pointer text-[14px] wide-screen:text-[20px] font-[700] underline hover:text-pink' onClick={()=>clearAll()}>CLEAR ALL</p></li>
                        </ul>

                        <div className='total-count flex alignright phablet:mt-[10px]'>
                            <ul>
                                <li className='inline-block pr-[10px] lg-up:hidden' ><p className='bold cursor-pointer text-[14px] font-[700] underline hover:text-pink' onClick={()=>clearAll()}>CLEAR ALL</p></li>
                                <li className='inline-block'><p><span className='text-blue font-[600]'>{postData?.posts?.pageInfo.total}</span> Results</p></li>
                            </ul>
                        </div>
                </div>
                {
                        <div className={`filterCards min-h-[520px] relative mt-[20px]`}>
                        <div className="wrapper flex flex-wrap w-[calc(100%+24px)] ml-[-12px] desktop:w-[calc(100%+16px)] desktop:ml-[-8px] desktop-mid:w-[calc(100%+12px)] desktop-mid:ml-[-6px] tablet:w-[calc(100%+12px)] tablet:ml-[-6px] phablet:w-[calc(100%+12px)]  phablet:ml-[-6px] sm:w-full sm:ml-0">
                        {postObj.loading ? 
                    <Loader /> :  postData.posts && postData.posts.nodes.length != 0 ?
                         postData && postData.posts && postData.posts.nodes.map((item, i) => {
                            let postDate = item && item.date && moment(item.date).format('MMM DD, YYYY');
                                return (
                                    <>
                                        <div key={i} className="group mb-[20px] card pb-[80px] bg-white col-three w-[calc(33.33%-22px)] min-h-[470px] transition-all duration-300 ease-in-out desktop:w-[calc(33.33%-16px)] desktop:mx-[8px] mx-[11px] rounded-[16px] overflow-hidden border-[2px] border-black outline-0 outline-transparent hover:shadow-black-shadow hover:outline hover:outline-1 hover:outline-black desktop-mid:w-[calc(50%-12px)] desktop-mid:mx-[6px] laptop-small:w-[calc(50%-12px)] laptop-small:mx-[6px] tablet:w-[calc(50%-12px)] tablet:mx-[6px] phablet:w-[calc(50%-12px)] phablet:mx-[6px] sm:w-full sm:mx-0"
                                         data-aos="fade-up" data-aos-delay="200">
                                                <div className="imgWrap relative h-[239px] overflow-hidden lg:h-[250px] md:!h-[210px] bg-black desktop:h-[210px] laptop:h-[210px] xxl-mid-up:h-[310px] wide-screen:h-[350px]">
                                                    <Link className="emptyLink" href={`blog${item.uri}`}>.</Link>
                                                    <Image className='h-full w-full object-cover transition-all duration-300 scale-100 group-hover:scale-105' 
                                                    src ={item.featuredImage? item.featuredImage.node.sourceUrl : '/blogFilter/laptop.png'}
                                                    alt={item.featuredImage? item.featuredImage.node.altText : 'Default Image'}
                                                    width={372} height={242} />
                                                </div>
                                                <div className="content pb-[33px] pt-[29px] px-[30px] desktop:p-[15px] lg:p-[15px] desktop-mid:mb-0 tablet:mb-0 md:p-[20px] sm:mb-0">
                                                    <div className='text-blue small_font xl:!text-[14px] laptop-landscape:!text-[14px] uppercase font-bold'>
                                                        <ul>
                                                            {item.categories && item.categories.nodes.slice(0, 1).map((cat, index) => {
                                                            return (
                                                                <li key={index} onClick={() => categoryHandler(cat.categoryId, cat.name, cat.slug, cat.count)}>
                                                                    {cat.name}
                                                                    <span>&nbsp; &nbsp;</span>
                                                                </li>
                                                            )
                                                            })}
                                                        </ul>
                                                    </div>
                                                    <Link href={`blog${item.uri}`}>
                                                        <h4 className='mt-[6px] h-[116px] sm:h-[65px] phablet:h-[65px] tablet:h-[75px] desktop:h-[96px] tablet-mid:h-[75px] laptop:h-[72px] xxl-up:h-[86px] laptop-landscape:!h-[75px] text-ellipsis line-clamp-4 xl:line-clamp-3 laptop:line-clamp-3'>{item.title}</h4>
                                                    </Link>
                                                    <div className="auther absolute bottom-[20px] left-[30px] sm:left-[15px] flex w-full mt-[37px] laptop:items-center xl:items-center desktop-mid:mt-[30px] tablet:mt-[30px] sm:mt-[20px]">
                                                        <div className="w-1/4">
                                                            { item.author.node.avatar && item.author.node.avatar.url &&
                                                                <div className="img-wrap rounded-[50%] relative w-[56px] h-[56px] sm:flex sm:items-center">
                                                                    <Image src={item.author.node.avatar.url} width={56} height={56} alt={item.author.node.firstName ? item.author.node.firstName : 'Author Image'} className='rounded-[50%] relative h-full sm:w-[50px] sm:h-[50px]' />
                                                                </div>
                                                            }
                                                        </div>
                                                        <div className="w-full pl-[3px] desktop:pl-[5px] sm::pl-[5px]">
                                                            {item.author.node.firstName &&<p className='text-black small_font  decoration-2 underline cursor-pointer inline-block !font-[700] hover:text-pink hover:decoration-pink' onClick={() => authorHandler(item.author.node.name)}>
                                                            {item.author.node.firstName ? item.author.node.firstName : ''}
                                                            &nbsp;
                                                            {item.author.node.lastName ? item.author.node.lastName : ''}
                                                            </p> }
                                                            <div className="date text-black flex pt-[4px] ">
                                                                <p className='small_font'>{postDate}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </>
                                )
                            } )
                            : (<h3 className={`block w-full mt-[100px] text-center ${postObj?.data?.posts?.nodes.length < 1? '' : 'hidden'}`}>No Result Found</h3>)}
                        </div>
                    </div>
                }
                 {/* <Pagination showControls total={10} initialPage={1} /> */}
                </div>

                {loading ? '' 
                :  postData.posts && postData.posts.nodes.length != 0 ? count > itemsPerPage && (
                        <ul className={`${BlogFilterStyle.pagination} mt-[35px] flex justify-center items-center lg:mt-[20px]`}>
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
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
                                            className={`text-black text-[18px] font-[500] leading-[24px] ${inter.className}  mx-[8px] cursor-pointer transition-all delay-300 hover:text-pink ${
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
                                        className={`text-black text-[18px] font-[500] leading-[24px] ${inter.className}  mx-[8px] transition-all delay-300 hover:text-pink `}
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
				    ) 
                : ''}
            </div>
        </section>
    )
}
