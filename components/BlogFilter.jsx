import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google';
import blogJsonData from '../pages/data/blogFilter.json'
import BlogFilterStyle from '../styles/blog/blogFilter.module.css'
import Loader from './Loader'

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800']
})

export default function BlogFilter() {
    //Query Parameter 
    const router = useRouter()
	var x = (router.query?.page == undefined ? (1) : parseInt(router.query?.page) > (Math.ceil(blogJsonData.length / 12)) ? (Math.ceil(blogJsonData.length / 12)) : parseInt(router.query?.page))
	// console.log(router.query?.author);
    // if(router.query?.author != null) {

    // }

    const [isSearchCtaHovered, setIsSearchCtaHovered] = useState(false);
    const [open, setOpen] = useState(0);
    const [uniqueTopic, isUniqueTopic] = useState([]);
    const [wholeData, setWholeData] = useState(blogJsonData);
    const [activeFacet, setActiveFacet] = useState()
    const [totalCount, setTotalCount] = useState(blogJsonData.length)
    const [selectedTopic, setSelectedTopic] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [filterSearch, setFilterSeaarch] = useState('');
    const [currentPage, setCurrentPage] = useState(x);
    const [activeTopic, setActiveTopic] = useState(0);
    const [countTopic, setCountTopic] = useState(0)
    const [countAuthor, setCountAuthor] = useState(0)
    const [countProduct, setCountProduct] = useState(0)
    const [clickCountAuthor, setClickCountAuthor] = useState(0);
	const [totalCards, setTotalCards] = useState(blogJsonData);
	const [totalData, setTotalData] = useState(blogJsonData);
    const [selectedAuthor, setSelectedAuthor] = useState('');
    const [clickAuthor, setClickAuthor] = useState('');
    const [selectedProduct, setSelectedProduct] = useState('');
    const [activeTopicFacet, setTopicFacet] = useState()
    const [activeAuthorFacet, setAuthorFacet] = useState()
    const [activeProductFacet, setProductFacet] = useState();

    const [isFocus, setEleFocus] = useState(false);
    const [drpList, isSelectList] = useState('United states');
    // const [selectedTopic, setSelectedTopic] = useState('');
    const [topicData, setTopicData] = useState()
    const [authorData, setAuthorData] = useState()
    const [productData, setProductData] = useState()
    const [formSubmit, setFormSubmit] = useState(false);
    const [isInputBox, setInputValue] = useState('');

    // Loader Variables
    const [loading, setLoading] = useState(true);

    //pagination variables
    // const [currentPage, setCurrentPage] = useState(x);
    useEffect(() => {
		setCurrentPage(x)
	})
    const itemsPerPage = 8;
    const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
    const filteredData = totalCards
	const totalPages = Math.ceil(wholeData.length / itemsPerPage);


    var topics = []
    var authors = []
    var product = []
    const queryLength = router.query
      //Update Url Parameter
    //   useEffect(() => {
    //     //Get Url Parameter 
        const [pageLoaded, setPageLoaded] = useState(false);
        var tpc = router.query?.topic == undefined ? '' : router.query?.topic
        var ath = router.query?.author == undefined ? '' : router.query?.author
        var prd = router.query?.product == undefined ? '' : router.query?.product

        const [isInitialLoad, setIsInitialLoad] = useState(true);
        useEffect(() => {
            const delayInMilliseconds = 5000;
            const taskTimeout = setTimeout(() => {
            setIsInitialLoad(false);
            }, delayInMilliseconds);
            return () => clearTimeout(taskTimeout);
        }); 

    useEffect(() => {

        if(isInitialLoad) {
            var queryParameter = ['topic', 'author', 'product'];
            queryParameter.forEach((data, index) => {
                // console.log(data);
                const parameterName = router.query?.[data];
                console.log(parameterName);
                if(parameterName !== undefined) {
                    switch (data) {
                        case "topic":
                            topicHandlerData(parameterName, 1)
                            break;
                        case "author":
                            authorHandler(parameterName, 1)
                            break;
                        case "product":
                            productHandler(parameterName, 1)
                            break;
                        default:
                            break;
                    }
                }
            })
            setPageLoaded(true);
            return () => setPageLoaded(false);
        }

    }, [tpc, ath, prd])

    useEffect(() => {
        if(selectedTopic !== '') {
            topicHandlerData(selectedTopic, 1)
        } else if (selectedAuthor !== '') {
            authorHandler(selectedAuthor, 1)
        } else if (selectedProduct !== '') {
            productHandler(selectedProduct, 1)
        }
        if (selectedTopic !== '' && selectedAuthor == '' && selectedProduct == '') {
            topicHandlerData(selectedTopic, 1)
        }  
        if(selectedAuthor !== '' && selectedTopic == '' && selectedProduct == '') {
            authorHandler(activeAuthorFacet, 1)
        } 
        if(selectedProduct !== '' && selectedTopic == '' && selectedAuthor == '') {
            productHandler(activeProductFacet, 1)
        }
    }, [selectedTopic, selectedAuthor, selectedProduct])
    
    /* Search code */ 
    useEffect(() => {
		const filteredCards = searchTerm
			? blogJsonData.filter(
					(blogJsonData) =>
                    blogJsonData.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    blogJsonData.subTitle
							.toLowerCase()
							.includes(searchTerm.toLowerCase()) ||
                            blogJsonData.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            blogJsonData.author
							?.toLowerCase()
							.includes(searchTerm.toLowerCase()) ||
                            blogJsonData.product.toLowerCase().includes(searchTerm.toLowerCase()),
			  )
			: blogJsonData;
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
    
    function topicList() {
        if(open == 1) {
            // console.log(selectedAuthor);
            let temp = (((selectedAuthor != '') || (selectedProduct != '')) ? topicData : blogJsonData)
            // console.log(temp);
            const uniqueTopicData = temp.filter(
                (value, index, self) => self.findIndex(item => item.topic === value.topic) === index
            );
            // const uniqueTopicData = temp.filter((item) => {
            //     !seen.has(item.topic) ? seen.add(item.topic) : ''
            // })
            console.log(uniqueTopicData)
            uniqueTopicData.map((item) => {
                topics.push(item);
            })
        }
    }
    topicList()
    
    function authorList() {
        if(open == 2) {
            let temp = (selectedTopic != '' || selectedProduct != ''  ? authorData : blogJsonData);

            const uniqueAuthorData = temp.filter((value, index, self) => self.findIndex(item => item.author === value.author) === index
            );

            uniqueAuthorData.map(item => {
                authors.push(item.author);
            },[]);
        }
    }
    authorList()
    
    function productList() {
        if(open == 3) {
            let temp = (((selectedTopic != '') || (selectedAuthor != '')) ? productData : blogJsonData)
            const uniqueProductData = temp.filter((value, index, self) => self.findIndex(item => item.product === value.product) === index 
            );
            uniqueProductData.map(item => {
                product.push(item.product)
            })
        }
    }
    productList()
    
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
    
    function topicHandlerData(val,index) {
        let sorted = []
       
        router.push({
            ...router,
                query: {
                    ...router.query,
                    topic: val
                },
        }, undefined, 
        { shallow: true }, )

        setTopicFacet(val)
        setSelectedTopic(val);

        if(val == 'removeTopic') {
            sorted = [];
        } else {
            blogJsonData.filter((item) => {
                if(item.topic == val) {
                    sorted.push(item);
                }
            })
        }
        // setTopicData(sorted)
        if (selectedAuthor != '') {
            const temp = ((sorted.length != 0) ? sorted : blogJsonData)
            sorted = []
            temp.filter((item) => {
                if (item.author == selectedAuthor) {
                    sorted.push(item)
                }
            })
        }
       
        // setProductData(sorted)
        if (selectedProduct != '') {
            const temp = ((sorted.length != 0) ? sorted : blogJsonData)
            sorted = []
            temp.filter((item) => {
                if (item.product == selectedProduct) {
                    sorted.push(item)
                }
            })
        }
        setCountTopic(sorted.length);
        setCountAuthor(sorted.length);
        setCountProduct(sorted.length);

        var noDuplicateds = sorted.filter((elem, index, self) => index === self.findIndex((t) => (t.id === elem.id)));
        
        setTotalCount((noDuplicateds.length == 0?(blogJsonData.length):(noDuplicateds.length)))
        setWholeData((noDuplicateds.length == 0?blogJsonData:noDuplicateds))
        setTotalCards((noDuplicateds.length == 0?blogJsonData:noDuplicateds));
        setTotalData(noDuplicateds);
        setAuthorData((noDuplicateds.length == 0?blogJsonData:noDuplicateds))
        setProductData((noDuplicateds.length == 0?blogJsonData:noDuplicateds))
        setFilterSeaarch(noDuplicateds)
    }


    function authorHandler(val, index) {
        let sorted = [];

        router.push({
            ...router,
                query: {
                    ...router.query,
                    author: val
                },
        }, undefined, 
        { shallow: true }, )

        // setActiveFacet(index)
            setAuthorFacet(val)
            setSelectedAuthor(val);
            if(val == 'removeAuthor') {
                sorted = [];
            } else {
                blogJsonData.filter((item) => {
                    if(item.author == val) {
                        sorted.push(item);
                    }
                })
            }
            // setCountAuthor(sorted.length)
            // setAuthorData(sorted)
            if (selectedTopic != '') {
                const temp = ((sorted.length != 0) ? sorted : blogJsonData)
                sorted = []
                temp.filter((item) => {
                    if (item.topic == selectedTopic) {
                        sorted.push(item)
                    }
                })
            }
        
        
            if (selectedProduct != '') {
                const temp = ((sorted.length != 0) ? sorted : blogJsonData)
                sorted = []
                temp.filter((item) => {
                    if (item.product == selectedProduct) {
                        sorted.push(item)
                    }
                })
            }
        
            setCountAuthor(sorted.length);
            setCountTopic(sorted.length);
            setCountProduct(sorted.length);

            var noDuplicateds = sorted.filter((elem, index, self) => index === self.findIndex((t) => (t.id === elem.id)));
            setTotalCount((noDuplicateds.length == 0?(blogJsonData.length):(noDuplicateds.length)))
            setWholeData((noDuplicateds.length == 0?blogJsonData:noDuplicateds))
            setTotalCards((noDuplicateds.length == 0?blogJsonData:noDuplicateds));
            setTotalData(noDuplicateds);
            setTopicData((noDuplicateds.length == 0?blogJsonData:noDuplicateds))
            setProductData((noDuplicateds.length == 0?blogJsonData:noDuplicateds))
            setFilterSeaarch(noDuplicateds)
        // }
    }
    function productHandler(val, index) {
        let sorted = []
        console.log(val);
        
        router.push({
            ...router,
                query: {
                    ...router.query,
                    product: val
                },
        }, undefined, 
        { shallow: true }, )
        console.log(router.query);
        setProductFacet(val)
        setSelectedProduct(val);

        if(val == 'removeProduct') {
            sorted = [];
        } else {
            blogJsonData.filter((item) => {
                if(item.product == val) {
                    sorted.push(item);
                }
            })
        }
        // setCountProduct(sorted.length)
        
        if (selectedTopic != '') {
            const temp = ((sorted.length != 0) ? sorted : blogJsonData)
            sorted = []
            temp.filter((item) => {
                if (item.topic == selectedTopic) {
                    sorted.push(item)
                }
            })
        }
        // setCountTopic(sorted.length)
        if (selectedAuthor != '') {
            const temp = ((sorted.length != 0) ? sorted : blogJsonData)
            sorted = []
            temp.filter((item) => {
                if (item.author == selectedAuthor) {
                    sorted.push(item)
                }
            })
        }
        setCountProduct(sorted.length);
        setCountAuthor(sorted.length);
        setCountTopic(sorted.length);
        
        
        var noDuplicateds = sorted.filter((elem, index, self) => index === self.findIndex((t) => (t.id === elem.id)));
        setTotalCount((noDuplicateds.length == 0?(blogJsonData.length):(noDuplicateds.length)))
        setWholeData((noDuplicateds.length == 0?blogJsonData:noDuplicateds))
        setTotalCards((noDuplicateds.length == 0?blogJsonData:noDuplicateds));
        setTotalData(noDuplicateds);
        setAuthorData((noDuplicateds.length == 0?blogJsonData:noDuplicateds))
        setTopicData((noDuplicateds.length == 0?blogJsonData:noDuplicateds))
        setFilterSeaarch(noDuplicateds)
        productList()
    }

    //clear All filters
    const clearAll = () => {
        delete router.query.topic
		delete router.query.author
        delete router.query.product
		delete router.query.page
		router.push(router, undefined, { shallow: true });
        setSelectedAuthor('')
        setSelectedTopic('')
        setSelectedProduct('')
        setClickAuthor('')
        setTopicFacet(999)
        setAuthorFacet(999)
        setProductFacet(999)
        setAuthorData()
        setTopicData()
        setTotalData(blogJsonData) 
        setWholeData(blogJsonData)
        setTotalCount(blogJsonData.length)
        setTotalCards(blogJsonData)
        // routerPush('');
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
        } else if(value == 'removeProduct') {
            productHandler(value, index)
            setSelectedProduct('')
            delete router.query.product
			router.push(router, undefined, { shallow: true });
        } 
    }
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

		const sectionElement = document.getElementById("blogFilter");
		if (sectionElement) {
			window.scrollTo({
			  top: sectionElement.offsetTop,
			  behavior: "smooth", 
			});
		}
	};

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormSubmit(true);
    };

    const selectDrop = (val, drpSelectValue) => {
        console.log(drpSelectValue)
      
          if(val === true) {
            setEleFocus(true);
            isSelectList(drpSelectValue)
      
          }
        }
        useEffect (()=> {
            var sectionId = document.getElementById('blogFilter');
            if(sectionId) {
              sectionId.addEventListener('click', function () {
                setEleFocus(false);
              })
            }
           
          })
    // useEffect (() => {
    //     const { authorName } = router.query;
    //     if(authorName !== '') {
    //         authorHandler(authorName);
    //     } 
    // }, [])

    // function routerPush(val) {
    //     if(val !== '') {
    //         router.push({
    //             query: {author: val}
    //         })
    //     }
    // }
    const inputText = (inputVaue) => {
        console.log(inputVaue);
        setInputValue(inputVaue);
      }

    //   Loading code
      useEffect(() => {
        // Simulate loading data
        setTimeout(() => {
          setLoading(false); // Set loading to false after some delay
        }, 2000);
      }, []);


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
    const cross = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none" className='group-hover:pink-stroke wide-screen:w-[20px] wide-screen:h-[20px]'>
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
    <section className={`BlogFilter ${BlogFilterStyle.blogFilter} pt-0 no-padding`} id="blogFilter">
        <div className="bg-skyblue pt-[39px] pb-[40px] desktop:py-[30px] lg:py-[20px]">
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
                        <span className={`crossBtn ${searchTerm ? 'show' : 'hide'} absolute top-[50%] right-[60px] w-[18px] text-[20px] translate-y-[-50%]`}>X</span>
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
        <div className={` cardsWithFilter mt-0 bg-white padding-medium-bottom ${loading ? 'h-[300px]' : ''}`}>
            <div className="container">
                <div className="filters-wrapper py-[39px] sm:py-[30px] sm:pb-0">
                    <p className={`inline-block mr-[15px] ${inter.className} !font-normal small_font `}>Filter by:</p>
                    <div className="filter-wraps inline-block relative sm:mb-[20px]">
                        <div className={`relative inline-block filter_wrap pl-[15px] pr-[41px] pt-[6px] pb-[8px] rounded-[4px] border-[1px] border-[#00000033] mr-[16px] sm:mr-[10px] hover:border-black ${open === 1 ? 'border-black' : ''} cursor-pointer sm:mr-[5px] sm:py-[5px] sm:mb-[10px]`}
                             >
                                <div  className='facet absolute z-[11] w-full h-full top-0 left-0'  onClick={() => listHandler(1)}></div>
                            <p>Topic</p>
                            <span
                                className={`absolute w-[15px] h-[8px] top-1/2 right-[18px] -translate-y-[50%] duration-300 ${
                                    open == 1 ? ' -rotate-180 ' : 'rotate-0'
                                }`}
                            >
                                {arrow}
                            </span>
                            <ul
                                className={`absolute  ${
                                    open == 1 ? 'z-[1] bg-white !h-[218px] xxl-up:w-[260px] sm:!h-[214px] opacity-100 visible' : 'h-0 z-[1] opacity-0 invisible'
                                } top-[44px] wide-screen:top-[56px] phablet:top-[42px] sm:top-[38px] duration-300 left-0 topic  w-[236px] p-[20px] overflow-auto z-[99] shadow-filter-shadow rounded-[4px] sm:w-[130px] sm:p-[10px]`}
                            >
                                {topics.map((item, i) => {
                                    return (
                                        <li key={i} className={`mb-[16px] hover:text-pink`} data-val={`${item}`} onClick={() => topicHandlerData(item.topic, i)} ><p className={`${activeTopicFacet == i ? 'text-pink' : ''} text-[16px] font-[500]  leading-[24px]`}>{item.topic}</p></li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className={`relative filter_wrap inline-block px-[16px] pr-[41px] pt-[6px] pb-[8px] rounded-[4px] border-[1px] border-[#00000033] sm:mr-[10px]  hover:border-black ${open === 2 ? 'border-black' : ''} mr-[16px] cursor-pointer sm:mr-[5px] sm:py-[5px] sm:mb-[10px]`}
                             >
                                <div  className='facet absolute z-[11] w-full h-full top-0 left-0'  onClick={() => listHandler(2)}></div>
                            <p>Author</p>
                            <span
                                className={`absolute w-[15px] h-[8px] top-1/2 right-[18px] -translate-y-[50%] duration-300 ${
                                    open == 2 ? ' -rotate-180 ' : 'rotate-0'
                                }`}
                            >
                                {arrow}
                            </span>
                            <ul
                                className={`absolute  ${
                                    open == 2 ? 'z-[1] bg-white !h-[236px] xxl-up:w-[260px] xxl-up:h-[236px] xxl-mid-up:h-[250px] wide-screen:h-[250px] desktop:h-[200px] laptop:h-[190px] tablet:h-[194px] phablet:h-[170px] sm:h-[182px] opacity-100 visible' : 'h-0 opacity-0 invisible'
                                } top-[44px] wide-screen:top-[56px] phablet:top-[42px] sm:top-[38px] duration-300 left-0 topic w-[236px] p-[20px] overflow-y-auto z-[99] shadow-filter-shadow rounded-[4px] sm:w-[130px] sm:p-[10px]`}
                            >
                                {authors.map((item, i) => {
                                    return (
                                            <li key={i} className={`mb-[16px] hover:text-pink `} data-val={`${item}`} onClick={() => authorHandler(item, i)} ><p className={`${activeAuthorFacet == i ? 'text-pink' : ''} text-[16px] font-[500]  leading-[24px]`}>{item}</p></li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className={`relative filter_wrap inline-block px-[16px] pr-[41px] pt-[6px] pb-[8px] rounded-[4px] border-[1px] border-[#00000033] sm:mr-[10px]  hover:border-black ${open === 3 ? 'border-black' : ''} mr-[16px] cursor-pointer sm:mr-[5px] sm:py-[5px] sm:mb-[10px]`}
                             >
                                <div  className='facet absolute z-[11] w-full h-full top-0 left-0'  onClick={() => listHandler(3)}></div>
                            <p>Product</p>
                            <span
                                className={`absolute w-[15px] h-[8px] top-1/2 right-[18px] -translate-y-[50%] duration-300 ${
                                    open == 3 ? ' -rotate-180 ' : 'rotate-0'
                                }`}
                            >
                                {arrow}
                            </span>
                            <ul
                                className={`absolute  ${
                                    open == 3 ? 'z-[1] bg-white !h-[218px] xxl-up:w-[260px] sm:!h-[214px] opacity-100 visible' : 'h-0 opacity-0 invisible'
                                } top-[44px] wide-screen:top-[56px] phablet:top-[42px] sm:top-[38px] duration-300 left-0 topic w-[236px] p-[20px] overflow-auto z-[99] shadow-filter-shadow rounded-[4px] sm:w-[130px] sm:p-[10px]`}
                            >
                                {product.map((item, i) => {
                                    return (
                                            <li key={i} className={`mb-[16px] hover:text-pink`} data-val={`${item}`} onClick={() => productHandler(item, i)} ><p className={`${activeProductFacet == i ? 'text-pink' : ''} text-[16px] font-[500]  leading-[24px]`}>{item}</p></li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={` flex flex-wrap ${(selectedAuthor == '' && selectedTopic == '' && selectedProduct == '' ) ? 'hidden' : 'block'} justify-between selected-facets laptop:mt-[0] xl:mt-[0] mb-[24px]`}>
                    <ul className={`${(selectedAuthor == '' && selectedTopic == '' && selectedProduct == '') ? 'hidden' : 'block'}`}>
                        {selectedTopic != '' ? (<li className={`relative outline outline-black outline-[1px] ${BlogFilterStyle.SelectedItems} group hover:outline-pink hover:outline-[2px] rounded-[100px] inline-block hover: mr-[16px] py-[4px] pr-[32px] pl-[10px] sm:mb-[10px]`}><a className='emptyLink' onClick={()=>selectedFacetHandler('removeTopic',999)}></a><p className=' small_font font-[500]'>{`${selectedTopic} (${wholeData.length})`} </p><span className='absolute w-[16px] h-[16px] top-[7px] lg:top-[5px] desktop:top-[5px] laptop:top-[5px] wide-screen:top-[12px] right-[10px]'>{cross}</span></li>) : ''}
                        {selectedAuthor != '' ? (<li className={`relative outline outline-black outline-[1px] ${BlogFilterStyle.SelectedItems} group hover:outline-pink hover:outline-[2px] rounded-[100px] inline-block mr-[16px] py-[4px] pr-[32px] pl-[10px] sm:mb-[10px]`}><a className='emptyLink' onClick={()=>selectedFacetHandler('removeAuthor',999)}></a><p className=' small_font font-[500]'>{`${selectedAuthor} (${wholeData.length})`}</p> <span className='absolute w-[16px] h-[16px] top-[7px] lg:top-[5px] desktop:top-[5px] laptop:top-[5px] wide-screen:top-[12px] right-[10px]'>{cross}</span></li>) : ''}
                        {selectedProduct != '' ? (<li className={`relative outline outline-black outline-[1px] ${BlogFilterStyle.SelectedItems} group hover:outline-pink hover:outline-[2px] rounded-[100px] inline-block mr-[16px] py-[4px] pr-[32px] pl-[10px] sm:mb-[10px]`}><a className='emptyLink' onClick={()=>selectedFacetHandler('removeProduct',999)}></a><p className=' small_font font-[500]'>{`${selectedProduct} (${wholeData.length})`}</p> <span className='absolute w-[16px] h-[16px] top-[7px] lg:top-[5px] desktop:top-[5px] laptop:top-[5px] wide-screen:top-[12px] right-[10px]'>{cross}</span></li>) : ''}
                        {/* {clickAuthor != '' ? (<li className='relative outline outline-black outline-[1px] group hover:outline-pink hover:outline-[2px] rounded-[100px] inline-block mr-[16px] py-[4px] pr-[32px] pl-[10px] sm:mb-[10px]'><a className='emptyLink' onClick={()=>selectedFacetHandler('removeClickAuthor',999)}></a><p className=' text-[16px] font-[500]'>{`${clickAuthor} (${clickCountAuthor})`}</p> <span className='absolute w-[16px] h-[16px] top-[7px] right-[10px]'>{cross}</span></li>) : ''} */}
                        <li className='inline-block pr-[10px] lg:hidden' ><p className='bold cursor-pointer text-[14px] wide-screen:text-[20px] font-[700] underline hover:text-pink' onClick={()=>clearAll()}>CLEAR ALL</p></li>
                    </ul>

                    <div className='total-count flex alignright'>
                        <ul>
                            <li className='inline-block pr-[10px] lg-up:hidden' ><p className='bold cursor-pointer text-[14px] font-[700] underline hover:text-pink' onClick={()=>clearAll()}>CLEAR ALL</p></li>
                            <li className='inline-block'><p><span className='text-blue font-[600]'>{totalCount }</span> results</p></li>
                        </ul>
                    </div>

                </div>
                {loading ? 
                 <Loader /> : 
                      <div className="filterCards min-h-[300px] relative">
                        <div className="wrapper flex flex-wrap w-[calc(100%+24px)] ml-[-12px] desktop:w-[calc(100%+16px)] desktop:ml-[-8px] desktop-mid:w-[calc(100%+12px)] desktop-mid:ml-[-6px] tablet:w-[calc(100%+12px)] tablet:ml-[-6px] phablet:w-[calc(100%+12px)]  phablet:ml-[-6px] sm:w-full sm:ml-0">
                     
                            {(wholeData.length != 0?wholeData.slice(startIndex, endIndex).map((cardData, index) => {
                        
                                if(blogJsonData[5].id == index+1) {
                                    return (
                                        <>
                                        <div
                                            key={index}
                                            className="group mb-[20px] bg-oceanGreen col-three w-[calc(33.33%-24px)] mx-[12px] desktop:w-[calc(33.33%-16px)] desktop:mx-[8px] mt-[3px] rounded-[16px] overflow-hidden border-transparent outline-[3px] outline-transparent desktop-mid:w-[calc(50%-12px)] desktop-mid:mx-[6px] tablet:w-[calc(50%-12px)] tablet:mx-[6px] phablet:w-[calc(50%-12px)] phablet:mx-[6px] sm:w-full sm:mx-0"
                                            id={index}
                                            data-aos="fade-up" data-aos-delay="200"
                                        >
                                            <div className={`card relative  pt-[39px] pb-[42px] pl-[31px] pr-[32px] desktop:p-[20px] laptop:p-[20px] md:p-[15px] `}>
                                                    <div className={`thankYoupopup ${formSubmit === true ? '': 'hidden'} `}>
                                                        <div className="CardLogoWrap mb-[35px] laptop:mb-[24px] xl:mb-[24px]">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="114" height="40" viewBox="0 0 114 40" fill="none">
                                                            <g clipPath="url(#clip0_1587_16123)">
                                                                <path d="M113.028 31.1839C112.866 31.2259 112.64 31.2743 112.345 31.3227C112.05 31.371 111.71 31.3968 111.322 31.3968C110.803 31.3968 110.324 31.3162 109.887 31.1549C109.45 30.9936 109.093 30.6839 108.825 30.2259C108.552 29.7678 108.42 29.0904 108.42 28.1968V14.6549H113.537V10.5775H108.42V4.97104H103.332V10.5775H93.1074V7.3162C93.1074 6.24846 93.3535 5.65491 93.8458 5.0904C94.3381 4.52588 95.1639 4.24201 96.3201 4.24201C96.8189 4.24201 97.2464 4.28394 97.6091 4.37104C97.9719 4.45814 98.2666 4.53878 98.4933 4.61298L99.6462 0.538783C99.2997 0.409751 98.7685 0.267816 98.056 0.109751C97.3403 -0.0450874 96.4886 -0.125732 95.4911 -0.125732C94.1373 -0.125732 92.8937 0.135558 91.7569 0.658139C90.6201 1.18072 89.7101 1.96782 89.0235 3.01943C88.3369 4.07104 87.9936 5.31943 87.9936 6.8904V10.5775H82.8733V14.6549H87.9936V35.3775H93.1074V14.6485H103.329V29.1775C103.341 30.6968 103.633 31.9581 104.32 32.9614C105.006 33.9646 105.91 34.7033 107.03 35.1839C108.151 35.6646 109.375 35.8936 110.706 35.871C111.496 35.8485 112.157 35.7743 112.695 35.6614C113.232 35.5485 113.715 35.4227 114.042 35.3227L113.025 31.1839H113.028ZM61.1745 21.4291L57.1326 20.5227C55.7918 20.2001 54.8203 19.7936 54.2179 19.3033C53.6187 18.813 53.3175 18.1678 53.3175 17.371C53.3175 16.4452 53.7677 15.6839 54.6648 15.0904C55.5619 14.4968 56.676 14.2001 58.0071 14.2001C58.9916 14.2001 59.8142 14.3581 60.4749 14.6775C61.1356 14.9968 61.6603 15.4033 62.0489 15.9065C62.3404 16.2807 62.5703 16.6678 62.7387 17.0678C62.797 17.2033 62.8456 17.342 62.8909 17.4839H67.6776C67.6388 17.2517 67.5934 17.0098 67.5319 16.7549C67.4121 16.2517 67.2534 15.7775 67.0623 15.3259C66.4955 13.9775 65.6341 12.8968 64.4455 12.0098C62.865 10.8291 60.7016 10.2388 57.952 10.2388C56.0477 10.2388 54.3636 10.5485 52.8965 11.1678C51.4294 11.7872 50.2829 12.6517 49.4538 13.7614C48.628 14.871 48.2134 16.1646 48.2134 17.642C48.2134 19.4194 48.7705 20.8904 49.8846 22.0485C50.9987 23.2065 52.7313 24.0452 55.0793 24.5614L59.2993 25.4839C60.4782 25.742 61.3558 26.1291 61.9291 26.6388C62.5023 27.1517 62.7873 27.7904 62.7873 28.5549C62.7873 29.4807 62.3242 30.2646 61.4012 30.9065C60.4749 31.5485 59.241 31.8678 57.6929 31.8678C56.2647 31.8678 55.1053 31.5646 54.2114 30.9549C53.3175 30.3452 52.7249 29.442 52.4334 28.2452H47.4297C47.4297 28.471 47.4426 28.7001 47.4815 28.9259C47.6758 30.0356 48.045 31.0194 48.5924 31.8775C49.1364 32.7356 49.8587 33.4678 50.7525 34.0743C52.5435 35.2872 54.8656 35.8936 57.7221 35.8936C59.7559 35.8936 61.5437 35.5614 63.0853 34.9001C64.6268 34.2356 65.8349 33.3227 66.7125 32.1614C67.5902 30.9968 68.0274 29.6614 68.0274 28.1517C68.0274 26.3968 67.4607 24.9646 66.3304 23.8614C65.2001 22.7581 63.4771 21.9452 61.1615 21.4291H61.1745ZM73.1639 35.3678H78.2809V10.5678H73.1639V35.3646V35.3678Z" fill="black"/>
                                                                <path d="M75.7128 8.02262C77.4085 8.02262 78.783 6.65348 78.783 4.96456C78.783 3.27564 77.4085 1.90649 75.7128 1.90649C74.0172 1.90649 72.6426 3.27564 72.6426 4.96456C72.6426 6.65348 74.0172 8.02262 75.7128 8.02262Z" fill="black"/>
                                                                <path d="M21.7179 21.9581C20.7204 22.9517 19.0979 22.9517 18.1004 21.9581C17.1029 20.9646 17.1029 19.3484 18.1004 18.3549C19.0979 17.3613 20.7204 17.3613 21.7179 18.3549C22.7154 19.3484 22.7154 20.9646 21.7179 21.9581ZM11.8045 12.0839C10.807 13.0775 10.807 14.6936 11.8045 15.6871C12.802 16.6807 14.4245 16.6807 15.422 15.6871C16.4195 14.6936 16.4195 13.0775 15.422 12.0839C14.4245 11.0904 12.802 11.0904 11.8045 12.0839ZM5.50857 9.41617C6.50607 10.4097 8.12863 10.4097 9.12613 9.41617C10.1236 8.42262 10.1236 6.8065 9.12613 5.81295C8.12863 4.8194 6.50607 4.8194 5.50857 5.81295C4.51107 6.8065 4.51107 8.42262 5.50857 9.41617ZM34.3065 30.8936C33.309 29.9 31.6865 29.9 30.689 30.8936C29.6915 31.8871 29.6915 33.5033 30.689 34.4968C31.6865 35.4904 33.309 35.4904 34.3065 34.4968C35.304 33.5033 35.304 31.8871 34.3065 30.8936ZM28.0106 28.2258C29.0081 27.2323 29.0081 25.6162 28.0106 24.6226C27.0131 23.6291 25.3906 23.6291 24.3931 24.6226C23.3956 25.6162 23.3956 27.2323 24.3931 28.2258C25.3906 29.2194 27.0131 29.2194 28.0106 28.2258ZM24.3931 12.0807C23.3956 13.0742 23.3956 14.6904 24.3931 15.6839C25.3906 16.6775 27.0131 16.6775 28.0106 15.6839C29.0081 14.6904 29.0081 13.0742 28.0106 12.0807C27.0131 11.0871 25.3906 11.0871 24.3931 12.0807ZM21.7147 5.80972C20.7172 4.81617 19.0947 4.81617 18.0972 5.80972C17.0996 6.80327 17.0996 8.4194 18.0972 9.41295C19.0947 10.4065 20.7172 10.4065 21.7147 9.41295C22.7122 8.4194 22.7122 6.80327 21.7147 5.80972ZM11.8012 3.14198C12.7987 4.13553 14.4213 4.13553 15.4188 3.14198C16.2025 2.36133 16.3677 1.20327 15.924 0.258108C14.2335 0.590366 12.6174 1.1323 11.1049 1.85488C11.2021 2.32585 11.432 2.77424 11.8012 3.14198ZM36.9816 24.6194C35.9841 25.6129 35.9841 27.2291 36.9816 28.2226C37.3476 28.5871 37.801 28.8194 38.2739 28.9162C38.9993 27.4097 39.5434 25.8 39.877 24.1162C38.9281 23.6742 37.7654 23.8388 36.9816 24.6194ZM30.6857 18.3484C29.6882 19.342 29.6882 20.9581 30.6857 21.9517C31.6832 22.9452 33.3058 22.9452 34.3033 21.9517C35.3008 20.9581 35.3008 19.342 34.3033 18.3484C33.3058 17.3549 31.6832 17.3549 30.6857 18.3484ZM30.6857 5.8065C29.6882 6.80004 29.6882 8.41617 30.6857 9.40972C31.6832 10.4033 33.3058 10.4033 34.3033 9.40972C35.3008 8.41617 35.3008 6.80004 34.3033 5.8065C33.3058 4.81295 31.6832 4.81295 30.6857 5.8065ZM24.3898 3.13875C25.3873 4.1323 27.0099 4.1323 28.0074 3.13875C28.3733 2.77424 28.6065 2.32262 28.7037 1.85166C27.1912 1.12908 25.5752 0.587141 23.8846 0.254883C23.4409 1.20004 23.6061 2.35811 24.3898 3.13875ZM36.9816 15.6807C37.7654 16.4613 38.9281 16.6258 39.877 16.1839C39.5434 14.5 38.9993 12.8904 38.2739 11.3839C37.801 11.4807 37.3508 11.7097 36.9816 12.0775C35.9841 13.071 35.9841 14.6871 36.9816 15.6807ZM9.12289 34.4904C10.1204 33.4968 10.1204 31.8807 9.12289 30.8871C8.12539 29.8936 6.50283 29.8936 5.50533 30.8871C4.50783 31.8807 4.50783 33.4968 5.50533 34.4904C6.50283 35.4839 8.12539 35.4839 9.12289 34.4904ZM2.82698 24.6162C2.04323 23.8355 0.880561 23.671 -0.0683594 24.1129C0.26522 25.7968 0.809311 27.4065 1.53477 28.9129C2.00761 28.8162 2.46101 28.5871 2.82698 28.2194C3.82448 27.2259 3.82448 25.6097 2.82698 24.6162ZM15.4188 37.1581C14.4213 36.1646 12.7987 36.1646 11.8012 37.1581C11.4353 37.5226 11.2021 37.9742 11.1049 38.4452C12.6174 39.1678 14.2335 39.7097 15.924 40.042C16.3677 39.0968 16.2025 37.9388 15.4188 37.1581ZM15.4188 28.2194C16.4163 27.2259 16.4163 25.6097 15.4188 24.6162C14.4213 23.6226 12.7987 23.6226 11.8012 24.6162C10.8037 25.6097 10.8037 27.2259 11.8012 28.2194C12.7987 29.2129 14.4213 29.2129 15.4188 28.2194ZM5.50533 18.3452C4.50783 19.3388 4.50783 20.9549 5.50533 21.9484C6.50283 22.942 8.12539 22.942 9.12289 21.9484C10.1204 20.9549 10.1204 19.3388 9.12289 18.3452C8.12539 17.3517 6.50283 17.3517 5.50533 18.3452ZM2.82698 15.6775C3.82448 14.6839 3.82448 13.0678 2.82698 12.0742C2.46101 11.7097 2.00761 11.4775 1.53477 11.3807C0.809311 12.8871 0.26522 14.4968 -0.0683594 16.1807C0.880561 16.6226 2.04323 16.4581 2.82698 15.6775ZM28.0074 37.1549C27.0099 36.1613 25.3873 36.1613 24.3898 37.1549C23.6061 37.9355 23.4409 39.0936 23.8846 40.0387C25.5752 39.7065 27.1912 39.1646 28.7037 38.442C28.6065 37.971 28.3766 37.5226 28.0074 37.1549ZM18.0939 30.8839C17.0964 31.8775 17.0964 33.4936 18.0939 34.4871C19.0914 35.4807 20.714 35.4807 21.7115 34.4871C22.709 33.4936 22.709 31.8775 21.7115 30.8839C20.714 29.8904 19.0914 29.8904 18.0939 30.8839Z" fill="black"/>
                                                                </g>
                                                                <defs>
                                                                <clipPath id="clip0_1587_16123">
                                                                <rect width="114" height="40" fill="white"/>
                                                                </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <div className="contentWrap pb-[40px] border-b-[1px] border-black">
                                                            <h4 className='pr-[20px]'>Thank you for subscribing to our blog!</h4>
                                                        </div>
                                                        <div className="socialIconWithTitle">
                                                            <div className="imgWrap mt-[40px] phablet:mt-[20px] phablet:mb-[10px] mb-[16px]">
                                                                <Image src="/blogFilter/Linkedin.svg" width={64} height={64} alt="LinkedIn"/>
                                                            </div>
                                                            <h3 className='tabHeading !font-[700]'>Stay up to date with us on LinkedIn</h3>
                                                            <button className='button group arrow_btn mt-[40px] bg-pink py-[16px] px-[24px] w-full rounded-[100px] uppercase text-black relative transition-all duration-300 font-[700] leading-[1] pr-[26px] md:mt-[20px]'>Check out our account</button>
                                                        </div>
                                                    </div>
                                                    <div className={`contentForm ${formSubmit === false ? '': 'hidden'} `}>
                                                        <div className="CardLogoWrap mb-[32px] laptop:mb-[24px] xl:mb-[24px]">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="114" height="40" viewBox="0 0 114 40" fill="none">
                                                                <g clipPath="url(#clip0_1587_16123)">
                                                                    <path d="M113.028 31.1839C112.866 31.2259 112.64 31.2743 112.345 31.3227C112.05 31.371 111.71 31.3968 111.322 31.3968C110.803 31.3968 110.324 31.3162 109.887 31.1549C109.45 30.9936 109.093 30.6839 108.825 30.2259C108.552 29.7678 108.42 29.0904 108.42 28.1968V14.6549H113.537V10.5775H108.42V4.97104H103.332V10.5775H93.1074V7.3162C93.1074 6.24846 93.3535 5.65491 93.8458 5.0904C94.3381 4.52588 95.1639 4.24201 96.3201 4.24201C96.8189 4.24201 97.2464 4.28394 97.6091 4.37104C97.9719 4.45814 98.2666 4.53878 98.4933 4.61298L99.6462 0.538783C99.2997 0.409751 98.7685 0.267816 98.056 0.109751C97.3403 -0.0450874 96.4886 -0.125732 95.4911 -0.125732C94.1373 -0.125732 92.8937 0.135558 91.7569 0.658139C90.6201 1.18072 89.7101 1.96782 89.0235 3.01943C88.3369 4.07104 87.9936 5.31943 87.9936 6.8904V10.5775H82.8733V14.6549H87.9936V35.3775H93.1074V14.6485H103.329V29.1775C103.341 30.6968 103.633 31.9581 104.32 32.9614C105.006 33.9646 105.91 34.7033 107.03 35.1839C108.151 35.6646 109.375 35.8936 110.706 35.871C111.496 35.8485 112.157 35.7743 112.695 35.6614C113.232 35.5485 113.715 35.4227 114.042 35.3227L113.025 31.1839H113.028ZM61.1745 21.4291L57.1326 20.5227C55.7918 20.2001 54.8203 19.7936 54.2179 19.3033C53.6187 18.813 53.3175 18.1678 53.3175 17.371C53.3175 16.4452 53.7677 15.6839 54.6648 15.0904C55.5619 14.4968 56.676 14.2001 58.0071 14.2001C58.9916 14.2001 59.8142 14.3581 60.4749 14.6775C61.1356 14.9968 61.6603 15.4033 62.0489 15.9065C62.3404 16.2807 62.5703 16.6678 62.7387 17.0678C62.797 17.2033 62.8456 17.342 62.8909 17.4839H67.6776C67.6388 17.2517 67.5934 17.0098 67.5319 16.7549C67.4121 16.2517 67.2534 15.7775 67.0623 15.3259C66.4955 13.9775 65.6341 12.8968 64.4455 12.0098C62.865 10.8291 60.7016 10.2388 57.952 10.2388C56.0477 10.2388 54.3636 10.5485 52.8965 11.1678C51.4294 11.7872 50.2829 12.6517 49.4538 13.7614C48.628 14.871 48.2134 16.1646 48.2134 17.642C48.2134 19.4194 48.7705 20.8904 49.8846 22.0485C50.9987 23.2065 52.7313 24.0452 55.0793 24.5614L59.2993 25.4839C60.4782 25.742 61.3558 26.1291 61.9291 26.6388C62.5023 27.1517 62.7873 27.7904 62.7873 28.5549C62.7873 29.4807 62.3242 30.2646 61.4012 30.9065C60.4749 31.5485 59.241 31.8678 57.6929 31.8678C56.2647 31.8678 55.1053 31.5646 54.2114 30.9549C53.3175 30.3452 52.7249 29.442 52.4334 28.2452H47.4297C47.4297 28.471 47.4426 28.7001 47.4815 28.9259C47.6758 30.0356 48.045 31.0194 48.5924 31.8775C49.1364 32.7356 49.8587 33.4678 50.7525 34.0743C52.5435 35.2872 54.8656 35.8936 57.7221 35.8936C59.7559 35.8936 61.5437 35.5614 63.0853 34.9001C64.6268 34.2356 65.8349 33.3227 66.7125 32.1614C67.5902 30.9968 68.0274 29.6614 68.0274 28.1517C68.0274 26.3968 67.4607 24.9646 66.3304 23.8614C65.2001 22.7581 63.4771 21.9452 61.1615 21.4291H61.1745ZM73.1639 35.3678H78.2809V10.5678H73.1639V35.3646V35.3678Z" fill="black"/>
                                                                    <path d="M75.7128 8.02262C77.4085 8.02262 78.783 6.65348 78.783 4.96456C78.783 3.27564 77.4085 1.90649 75.7128 1.90649C74.0172 1.90649 72.6426 3.27564 72.6426 4.96456C72.6426 6.65348 74.0172 8.02262 75.7128 8.02262Z" fill="black"/>
                                                                    <path d="M21.7179 21.9581C20.7204 22.9517 19.0979 22.9517 18.1004 21.9581C17.1029 20.9646 17.1029 19.3484 18.1004 18.3549C19.0979 17.3613 20.7204 17.3613 21.7179 18.3549C22.7154 19.3484 22.7154 20.9646 21.7179 21.9581ZM11.8045 12.0839C10.807 13.0775 10.807 14.6936 11.8045 15.6871C12.802 16.6807 14.4245 16.6807 15.422 15.6871C16.4195 14.6936 16.4195 13.0775 15.422 12.0839C14.4245 11.0904 12.802 11.0904 11.8045 12.0839ZM5.50857 9.41617C6.50607 10.4097 8.12863 10.4097 9.12613 9.41617C10.1236 8.42262 10.1236 6.8065 9.12613 5.81295C8.12863 4.8194 6.50607 4.8194 5.50857 5.81295C4.51107 6.8065 4.51107 8.42262 5.50857 9.41617ZM34.3065 30.8936C33.309 29.9 31.6865 29.9 30.689 30.8936C29.6915 31.8871 29.6915 33.5033 30.689 34.4968C31.6865 35.4904 33.309 35.4904 34.3065 34.4968C35.304 33.5033 35.304 31.8871 34.3065 30.8936ZM28.0106 28.2258C29.0081 27.2323 29.0081 25.6162 28.0106 24.6226C27.0131 23.6291 25.3906 23.6291 24.3931 24.6226C23.3956 25.6162 23.3956 27.2323 24.3931 28.2258C25.3906 29.2194 27.0131 29.2194 28.0106 28.2258ZM24.3931 12.0807C23.3956 13.0742 23.3956 14.6904 24.3931 15.6839C25.3906 16.6775 27.0131 16.6775 28.0106 15.6839C29.0081 14.6904 29.0081 13.0742 28.0106 12.0807C27.0131 11.0871 25.3906 11.0871 24.3931 12.0807ZM21.7147 5.80972C20.7172 4.81617 19.0947 4.81617 18.0972 5.80972C17.0996 6.80327 17.0996 8.4194 18.0972 9.41295C19.0947 10.4065 20.7172 10.4065 21.7147 9.41295C22.7122 8.4194 22.7122 6.80327 21.7147 5.80972ZM11.8012 3.14198C12.7987 4.13553 14.4213 4.13553 15.4188 3.14198C16.2025 2.36133 16.3677 1.20327 15.924 0.258108C14.2335 0.590366 12.6174 1.1323 11.1049 1.85488C11.2021 2.32585 11.432 2.77424 11.8012 3.14198ZM36.9816 24.6194C35.9841 25.6129 35.9841 27.2291 36.9816 28.2226C37.3476 28.5871 37.801 28.8194 38.2739 28.9162C38.9993 27.4097 39.5434 25.8 39.877 24.1162C38.9281 23.6742 37.7654 23.8388 36.9816 24.6194ZM30.6857 18.3484C29.6882 19.342 29.6882 20.9581 30.6857 21.9517C31.6832 22.9452 33.3058 22.9452 34.3033 21.9517C35.3008 20.9581 35.3008 19.342 34.3033 18.3484C33.3058 17.3549 31.6832 17.3549 30.6857 18.3484ZM30.6857 5.8065C29.6882 6.80004 29.6882 8.41617 30.6857 9.40972C31.6832 10.4033 33.3058 10.4033 34.3033 9.40972C35.3008 8.41617 35.3008 6.80004 34.3033 5.8065C33.3058 4.81295 31.6832 4.81295 30.6857 5.8065ZM24.3898 3.13875C25.3873 4.1323 27.0099 4.1323 28.0074 3.13875C28.3733 2.77424 28.6065 2.32262 28.7037 1.85166C27.1912 1.12908 25.5752 0.587141 23.8846 0.254883C23.4409 1.20004 23.6061 2.35811 24.3898 3.13875ZM36.9816 15.6807C37.7654 16.4613 38.9281 16.6258 39.877 16.1839C39.5434 14.5 38.9993 12.8904 38.2739 11.3839C37.801 11.4807 37.3508 11.7097 36.9816 12.0775C35.9841 13.071 35.9841 14.6871 36.9816 15.6807ZM9.12289 34.4904C10.1204 33.4968 10.1204 31.8807 9.12289 30.8871C8.12539 29.8936 6.50283 29.8936 5.50533 30.8871C4.50783 31.8807 4.50783 33.4968 5.50533 34.4904C6.50283 35.4839 8.12539 35.4839 9.12289 34.4904ZM2.82698 24.6162C2.04323 23.8355 0.880561 23.671 -0.0683594 24.1129C0.26522 25.7968 0.809311 27.4065 1.53477 28.9129C2.00761 28.8162 2.46101 28.5871 2.82698 28.2194C3.82448 27.2259 3.82448 25.6097 2.82698 24.6162ZM15.4188 37.1581C14.4213 36.1646 12.7987 36.1646 11.8012 37.1581C11.4353 37.5226 11.2021 37.9742 11.1049 38.4452C12.6174 39.1678 14.2335 39.7097 15.924 40.042C16.3677 39.0968 16.2025 37.9388 15.4188 37.1581ZM15.4188 28.2194C16.4163 27.2259 16.4163 25.6097 15.4188 24.6162C14.4213 23.6226 12.7987 23.6226 11.8012 24.6162C10.8037 25.6097 10.8037 27.2259 11.8012 28.2194C12.7987 29.2129 14.4213 29.2129 15.4188 28.2194ZM5.50533 18.3452C4.50783 19.3388 4.50783 20.9549 5.50533 21.9484C6.50283 22.942 8.12539 22.942 9.12289 21.9484C10.1204 20.9549 10.1204 19.3388 9.12289 18.3452C8.12539 17.3517 6.50283 17.3517 5.50533 18.3452ZM2.82698 15.6775C3.82448 14.6839 3.82448 13.0678 2.82698 12.0742C2.46101 11.7097 2.00761 11.4775 1.53477 11.3807C0.809311 12.8871 0.26522 14.4968 -0.0683594 16.1807C0.880561 16.6226 2.04323 16.4581 2.82698 15.6775ZM28.0074 37.1549C27.0099 36.1613 25.3873 36.1613 24.3898 37.1549C23.6061 37.9355 23.4409 39.0936 23.8846 40.0387C25.5752 39.7065 27.1912 39.1646 28.7037 38.442C28.6065 37.971 28.3766 37.5226 28.0074 37.1549ZM18.0939 30.8839C17.0964 31.8775 17.0964 33.4936 18.0939 34.4871C19.0914 35.4807 20.714 35.4807 21.7115 34.4871C22.709 33.4936 22.709 31.8775 21.7115 30.8839C20.714 29.8904 19.0914 29.8904 18.0939 30.8839Z" fill="black"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_1587_16123">
                                                                    <rect width="114" height="40" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                </svg>
                                                        </div>
                                                        <div className="contentWrap">
                                                            <h4 className='pr-[20px]'>Get Expert Insights into your inbox</h4>
                                                            <p className='mt-[8px] small_font'>AI-Powered Fraud Decisioning..</p>
                                                        </div>
                                                        <form className='mt-[33px] md:mt-[24px] !tablet:mt-[100px] desktop-mid:mt-[80px] desktop:mt-[24px] laptop:mt-[20px] xxl-up:mt-[40px]' onSubmit={handleSubmit}>
                                                            <div className="inputWrap">
                                                                <label htmlFor="" className={`text-black block small_font text-sm mb-[6px] !text-[14px] ${inter.className} font-bold uppercase desktop:text-xs`}>email address*</label>
                                                                <input type="text" className={`text-black block rounded-[4px] bg-white outline-[1px] outline outline-black  xl:py-[5px] laptop:py-[8px] ${isInputBox != '' ? '!outline-[3px] !outline-pink ' : ''} hover:outline-pink focus:outline-[2px] focus:outline-pink pt-[11px] pb-[12px] px-[10px] w-full`} onChange={(e) => inputText(e.target.value)} />
                                                            </div>
                                                            <div className="inputWrap mt-[23px] xl:mt-[14px]">
                                                                <label htmlFor="" className={`text-black block small_font text-sm mb-[8px] !text-[14px] ${inter.className} font-bold uppercase desktop:text-xs`}>Country*</label>
                                                                <div className={`relative inline-block filter_wrap py-[10px] px-[10px] bg-white w-full rounded-[4px] outline-[1px] outline outline-black hover:outline-pink mr-[16px] ${isFocus === true ? 'outline-[2px] outline-pink' : '' }  focus:cursor-pointer sm:mr-[5px] xl:py-[5px] sm:mb-[10px]`} onClick={() => selectDrop()}>
                                                                    <p className='!font-[400] focus:outline-[2px] focus:outline-pink' onClick={() => selectDrop(true)}>United states</p>
                                                                    <span className={`absolute w-[15px] h-[8px] top-1/2 right-[15px] -translate-y-[50%] duration-300 rotate-0`}>{arrow}</span>
                                                                    <ul className={`absolute z-[1] top-[50px] duration-300 left-0 topic w-full p-[10px] overflow-y-scroll bg-white ${isFocus === true ? 'h-full opacity-1 visible overflow-visible': 'h-0 opacity-0 invisible overflow-hidden'} z-[99] shadow-filter-shadow rounded-[4px] sm:w-[230px]`}>
                                                                        <li className={`mb-[16px] last:mb-0 hover:text-pink  z-[99]`}><p>India</p></li>
                                                                    </ul>
                                                                </div>
                                                                
                                                                
                                                                {/* <select name="" id="" className='text-black block mb-[18px] text-[18px] font-[400] rounded-[4px] bg-white py-[10px] pb-[9px] px-[4px] w-full hover:border-1 outline outline-1 outline-black hover:outline-pink focus:outline-[2px] focus:outline-pink'>
                                                                    <option value="">United State</option>
                                                                    <option value="">India</option>
                                                                </select> */}
                                                                {/* <input type="text" className='text-black block mb-6 border border-black rounded bg-white p-2 w-full hover:border-1 hover:border-black focus:outline outline-1 outline-black focus:border-1 focus:border-black' /> */}
                                                            </div>
                                                            <button type='submit' className='button group arrow_btn mt-[43px] xl:mt-[20px] bg-pink py-[16px] px-[24px] w-full rounded-[100px] uppercase text-black relative transition-all duration-300 font-[700] leading-[1] pr-[26px] md:mt-[20px]'>Submit</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                    
                                    <div
                                    className="group mb-[20px] bg-white col-three w-[calc(33.33%-22px)] transition-all duration-300 ease-in-out desktop:w-[calc(33.33%-16px)] desktop:mx-[8px] mx-[11px] rounded-[16px] overflow-hidden border-[2px] border-black outline-0 outline-transparent hover:shadow-black-shadow hover:outline hover:outline-1 hover:outline-black desktop-mid:w-[calc(50%-12px)] desktop-mid:mx-[6px] tablet:w-[calc(50%-12px)] tablet:mx-[6px] phablet:w-[calc(50%-12px)] phablet:mx-[6px] sm:w-full sm:mx-0"
                                    id={index}
                                    data-aos="fade-up" data-aos-delay="200"
                                >
                                    <div
                                        className={`card relative`}
                                    >
                                        <div className="imgWrap relative h-[239px] overflow-hidden lg:h-full bg-black desktop:h-full laptop:h-full xxl-up:h-full">
                                            <Link className="emptyLink" href="#">
                                                .
                                            </Link>
                                            <Image src={`/blogFilter/${cardData.cardImage}`} alt='' className='h-full w-full transition-all duration-300 scale-100 group-hover:scale-105' width={372} height={242} />
                                        </div>
                                        <div className="content pb-[33px] pt-[29px] px-[30px] desktop:p-[15px] lg:p-[15px] desktop-mid:mb-0 tablet:mb-0 md:p-[20px] sm:mb-0">
                                            <p className='text-blue small_font xl:!text-[14px] laptop-landscape:!text-[14px] uppercase font-bold'>{cardData.topic}</p>
                                            <Link href="#"><h4 className='mt-[6px] h-[116px] sm:h-[65px] phablet:h-[65px] tablet:h-[75px] desktop:h-[96px] tablet-mid:h-[75px] laptop:h-[72px] xxl-up:h-[86px] laptop-landscape:!h-[75px] text-ellipsis line-clamp-4'>{cardData.title}</h4></Link>
                                            <div className="auther flex w-full mt-[37px] laptop:items-center xl:items-center desktop-mid:mt-[30px] tablet:mt-[30px] sm:mt-[20px]">
                                                <div className="w-1/4">
                                                    <div className="img-wrap rounded-[50%] relative w-[56px] h-[56px]">
                                                    <Image src={`/blogFilter/${cardData.autherImage}`} className='rounded-[50%] relative h-full' alt="" width={56} height={56} />
                                                    </div>
                                                </div>
                                                <div className="w-full pl-[3px] desktop:pl-[5px]">
                                                    <p className='text-black small_font  decoration-2 underline cursor-pointer inline-block !font-[700] hover:text-pink hover:decoration-pink' onClick={() => authorHandler(cardData.autherName)}>{cardData.autherName}</p>
                                                    <div className="date text-black flex pt-[4px] ">
                                                        <p className='small_font'>{cardData.date}</p>
                                                        <p className={`small_font pl-[17px] desktop:pl-[14px] relative ${BlogFilterStyle.blackdots}`}>{cardData.time}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </>
                                    )
                                }
                                return (
                                    <div
                                        key={index}
                                        className="group mb-[20px] bg-white col-three w-[calc(33.33%-22px)] min-h-[470px] transition-all duration-300 ease-in-out desktop:w-[calc(33.33%-16px)] desktop:mx-[8px] mx-[11px] rounded-[16px] overflow-hidden outline outline-2 outline-black hover:shadow-black-shadow hover:outline hover:outline-[3px] hover:outline-black desktop-mid:w-[calc(50%-12px)] desktop-mid:mx-[6px] tablet:w-[calc(50%-12px)] tablet:mx-[6px] phablet:w-[calc(50%-12px)] phablet:mx-[6px] sm:w-full sm:mx-0"
                                        id={index}
                                        data-aos="fade-up" data-aos-delay="200"
                                    >
                                        <div
                                            className={`card relative`}
                                        >
                                            <div className="imgWrap relative h-[239px] bg-black overflow-hidden lg:h-full desktop:h-full laptop:h-full xxl-up:h-full">
                                                <Link className="emptyLink" href="#">
                                                    .
                                                </Link>
                                                <Image src={`/blogFilter/${cardData.cardImage}`} alt='' className='h-full w-full transition-all duration-300 scale-100 group-hover:scale-105' width={372} height={242} />
                                            </div>
                                            <div className="content pb-[33px] pt-[29px] px-[30px] desktop:p-[15px] lg:p-[15px] desktop-mid:mb-0 tablet:mb-0 md:p-[20px] sm:mb-0">
                                                <p className='text-blue small_font xl:!text-[14px] laptop-landscape:!text-[14px] uppercase font-bold'>{cardData.topic}</p>
                                                <Link href="#"><h4 className='mt-[6px] h-[116px] sm:h-[65px] phablet:h-[65px] tablet:h-[75px] desktop:h-[96px] tablet-mid:h-[75px] laptop:h-[72px] laptop-landscape:!h-[75px] text-ellipsis line-clamp-4'>{cardData.title}</h4></Link>
                                                <div className="auther flex w-full mt-[37px] absolute bottom-[-70px] laptop:items-center xl:items-center desktop-mid:mt-[30px] tablet:mt-[30px] sm:mt-[20px]">
                                                    <div className="w-1/4">
                                                        <div className="img-wrap rounded-[50%] relative w-[56px] h-[56px]">
                                                        <Image src={`/blogFilter/${cardData.autherImage}`} className='rounded-[50%] relative h-full' alt="" width={56} height={56} />
                                                        </div>
                                                    </div>
                                                    <div className="w-full pl-[3px] desktop:pl-[5px]">
                                                        <p className='text-black small_font  decoration-2 underline cursor-pointer inline-block !font-[700] hover:text-pink hover:decoration-pink' onClick={() => authorHandler(cardData.autherName)}>{cardData.autherName}</p>
                                                        <div className="date text-black flex pt-[4px] ">
                                                            <p className='small_font'>{cardData.date}</p>
                                                            <p className={`small_font pl-[17px] desktop:pl-[14px] relative ${BlogFilterStyle.blackdots}`}>{cardData.time}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                        
                            }): (<h3 className='block w-full mt-[100px] text-center'>No Result Found</h3>))}
                            
                        </div>
                            {wholeData.length > 9 && (
                                <ul className={`${BlogFilterStyle.pagination} mt-[35px] flex justify-center items-center lg:mt-[20px]`}>
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className="prev-button mr-[18px]"
                                    >
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
                                            <div className={`${BlogFilterStyle.imgWrapNext} relative ${
                                                    currentPage === totalPages && 'opacity-[0.2] pointer-events-none'}`}></div>
                                        </div>
                                    </button>
                                </ul>
                            )}
                        </div>
                }

            </div>
        </div>

    </section>
  )
}
