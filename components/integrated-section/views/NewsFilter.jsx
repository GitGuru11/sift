import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import Style from "../../../styles/three-col-grid.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Inter } from 'next/font/google';
import BlogFilterStyle from '../../../styles/blog/blogFilter.module.css'
import { GET_NEWS_POST } from '../../../graphql/newsData';
import DynamicButton from '../../global-components/Buttons';
import DynamicLinks from '../../global-components/Links';
import moment from 'moment';
import Loader from '../Loader';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
})
let newDate = '';
function matchHeight(selector) {
  const elements = document.querySelectorAll(selector);

  const setEqualHeight = () => {
    elements.forEach(element => {
      element.style.height = 'auto';
    });

    const maxHeight = Math.max(...Array.from(elements).map(element => element.offsetHeight));

    elements.forEach(element => {
      element.style.height = `${maxHeight}px`;
    });
  };

  const handleResize = () => {
    if (window.innerWidth > 595) {
      setEqualHeight();
      setTimeout(() => {
        setEqualHeight();
      }, 100);
    } else {
      elements.forEach(element => {
        element.style.height = 'auto';
      });
    }
  };

  handleResize();
  window.addEventListener('resize', handleResize);
}

const NewsFilter = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchCtaHovered, setIsSearchCtaHovered] = useState(false);
  const [startCursor, setStartCursor] = useState('');
  const [endCursor, setEndCursor] = useState('');
  const [first, setFirst] = useState(9);
  const [last, setLast] = useState();
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  // Loader Variables
  const [loader, setLoading] = useState(true);

  const { loading, error, data } = useQuery(GET_NEWS_POST, {
    variables: { searchTerm: searchTerm , startCursor: startCursor, endCursor: endCursor, first: first, last: last, offset: offset, limit: itemsPerPage},
  });
  const posts = data?.newsPosts?.nodes || [];

    // Pagination
  const [count, setCount] = useState(null);


  useEffect(() => {
		if (count === null && data?.newsPosts?.pageInfo.total && searchTerm == "") {
			setCount(data?.newsPosts?.pageInfo.total);
		} else if(searchTerm !== "") {
			setCount(data?.newsPosts?.pageInfo.total);
		}
	}, [data, count]);

  const pageInfo = data?.newsPosts?.pageInfo || '';


	const totalPages = Math.ceil(count / itemsPerPage);

  // let btnTrack = '';

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
        var getPage = Math.floor((newPage - 1) * itemsPerPage);
        setOffset(getPage)

        if(newPage !== 1){
          router.push({
            pathname: router.pathname,
            query: { ...router.query, pid: newPage }
          }, undefined, { scroll: false });
          const sectionElement = document.getElementById("in-the-news");
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

  useEffect(() => {
    matchHeight('.newsCards .card-inner');
    matchHeight('.newsCards .card-inner .content-wrap');
    matchHeight('.newsCards .card-inner .bolg_details');
    // matchHeight('.newsCards .card-inner .content-wrap h4');

    const handleResize = () => {
      matchHeight('.newsCards .card-inner');
      matchHeight('.newsCards .card-wrapper');
      matchHeight('.newsCards .card-inner .content-wrap');
      matchHeight('.newsCards .card-inner .bolg_details');
      // matchHeight('.newsCards .card-inner h4');
      // matchHeight('.newsCards .card-inner .btn-wrap');
    };

    // Attach both resize and orientationchange event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);


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

 
  function getUrlParam() {
    const params = router.query;
    const hasSearch = 'search' in params;
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

  useEffect(()=> {
    getUrlParam(); 
  }, [router.asPath])

  useEffect(() => {
      if(router.query?.pid !== undefined){
        const hasPage = parseInt(router?.query?.pid);
        if (hasPage) {
            handlePageChange(hasPage);
        }
    }
  }, [])

// Cross button
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

 //   Loading code
 useEffect(() => {
  // Simulate loading data
  setTimeout(() => {
    setLoading(false); // Set loading to false after some delay
  }, 2000);
}, []);

  return (
    <section className={`three-col-grid newsCards md:pb-8 no-padding-top bg-[#ffffff] overflow-hidden ${BlogFilterStyle.blogFilter} `} id='in-the-news' >
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
                placeholder="Search in the news"
                className={`pt-[13px] pb-[14px] pl-[16px] pr-[82px] w-full text-black bg-white rounded-[8px] ${
                  inter.className
              } lg:text-black lg:bg-white outline-[2px] outline outline-black hover:outline-pink transition-all sm:py-[8px] sm:px-[15px] sm:w-full sm:pr-[20px]  ${
                  isSearchCtaHovered ? 'outline-pink' : ''
              } ${searchTerm ? 'outline-[3px] outline-pink' : ''}`}
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <span className={`crossBtn ${searchTerm ? 'show' : 'hide'} absolute top-[50%] right-[60px] w-[18px] cursor-pointer text-[20px] translate-y-[-50%] hover:text-pink`} onClick={()=> clearSearch()}>X</span>
              <button type="submit" className="searchCta">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={`bgWhite_SlideWarp min-h-[450px] sm:mt-0 flex justify-center flex-wrap w-[calc(100%+24px)] ml-[-12px] pt-[100px] xl:pt-[40px] sm:w-full sm:m-0`}>
          {loading ? <Loader /> : posts && posts.length != 0 ? posts && posts.map((item, index) => {
            newDate = item.cardGrid.date && moment(item.cardGrid.date).format('MMM DD, YYYY');
            return (
              <div key={index} className={`${Style.col_three_item} card-wrapper w-[calc(33.33%-22px)] mx-[11px] laptop-down:w-[calc(50%-22px)] sm:!w-full sm:mx-0 mb-[24px] overflow-hidden transition-all duration-300 rounded-[16px] border-black border-[2px] outline outline-transparent outline-1 hover:outline-black hover:shadow-black-shadow ${BlogFilterStyle.blogFilter}`} data-aos="fade-up" data-aos-delay="300" >
                <div className={`${Style.col_three} card-inner relative flex flex-col duration-500 h-full  overflow-hidden rounded-[12px] tablet:min-h-[428px] group`}>
                  <DynamicLinks cta={item.cardGrid.cta} />
                  {item.cardGrid.cardImage && item.cardGrid.cardImage.sourceUrl && <div className={`${Style.img_wrap} img-wrap h-[240px] desktop:h-[200px] sm:h-[190px] phablet:h-[210px] laptop-landscape:h-[210px] wide-screen:h-[275px] overflow-hidden`}>
                    <Image
                      src={item.cardGrid.cardImage.sourceUrl}
                      alt={item.cardGrid.cardImage.altText}
                      className="w-full h-full object-cover duration-500 group-hover:scale-[1.05] transition-all"
                      height={400}
                      width={400}
                      quality={100}
                    />
                  </div>}
                  <div className="content-wrap lg:pb-[60px]  desktop:pb-[70px] xl-up:pb-[94px] desktop:p-[20px]  tablet:p-[25px] md:p-[18px]  laptop:pb-[85px]  p-[40px] pr-[30px] laptop:p-[25px] laptop-landscape:!px-[20px] laptop-landscape:pt-[20px] laptop-landscape:!pb-[70px]">
                    <div className={`${Style.eyebrowText} bolg_details mb-[6px] tracking-[2.4px]`}>
                      <span className="fontInter inline-block relative pr-3 mr-3 text-blue text-[16px] wide-screen:text-[18px] laptop-landscape:text-[14px] desktop:text-[14px] lg:text-[14px] font-bold tracking-[0.64px] uppercase">
                        in the news
                      </span>
                      {newDate && <span className="fontInter inline-block  text-blue text-[16px] laptop-landscape:text-[14px] wide-screen:text-[18px] desktop:text-[14px] lg:text-[14px] font-bold tracking-[0.64px] uppercase ">
                        {newDate}
                      </span>}
                    </div>
                    {item.title && <h4 className="block font-semibold line-clamp-3 text-ellipsis h-[90px] laptop:h-[72px] xl:h-[72px] md:!h-[68px]" dangerouslySetInnerHTML={{ __html: item.title }}></h4>}
                    <div className="btn-wrap mt-9 z-10 absolute bottom-[40px] lg:bottom-[20px] desktop:bottom-[20px] sm:bottom-[10px] laptop-landscape:bottom-[22px]">
                      <DynamicButton cta={item.cardGrid.cta} />
                    </div>
                  </div>
                </div>
              </div>
            )
          }) : (<h3 className={`block w-full mt-[100px] text-center ${data?.newsPosts?.nodes.length < 1? '' : 'hidden'}`}>No Result Found</h3>)}
        </div>
        {loader ? '' :
            posts && posts.length != 0 ? 
            count > itemsPerPage && (
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
											className={`text-black text-[18px] font-[500]  leading-[24px] ${inter.className}  mx-[8px]  transition-all delay-300 hover:text-pink `}
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
    </section>
  );
};

export default NewsFilter;