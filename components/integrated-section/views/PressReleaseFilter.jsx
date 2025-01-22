import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Style from "../../../styles/three-col-grid.module.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Inter } from 'next/font/google';
import BlogFilterStyle from '../../../styles/blog/blogFilter.module.css';
import DynamicButton from '../../global-components/Buttons';
import DynamicLinks from '../../global-components/Links';
import { GET_PRESSRELEASE_POST } from '../../../graphql/pressReleaseData';
import moment from 'moment';
import Loader from '../Loader';


const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
})

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

const PressReleaseFilter = () => {
  let newDate = '';
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [startCursor, setStartCursor] = useState('');
  const [endCursor, setEndCursor] = useState('');
  const [first, setFirst] = useState(9);
  const [last, setLast] = useState();
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  // Loader Variables
  const [loader, setLoading] = useState(true);

  const { loading, error, data } = useQuery(GET_PRESSRELEASE_POST, {
    variables: { searchTerm: searchTerm, startCursor: startCursor, endCursor: endCursor, first: first, last: last, offset: offset, limit: itemsPerPage },
  });


  const posts = data?.pressReleases?.nodes || [];
  const pageInfo = data?.pressReleases?.pageInfo || '';

  // Pagination
  const [count, setCount] = useState(null);
  useEffect(() => {
		if (count === null && data?.pressReleases?.pageInfo?.total && searchTerm == "") {
			setCount(data?.pressReleases?.pageInfo?.total);
		} else if(searchTerm !== "") {
			setCount(data?.pressReleases?.pageInfo?.total);
		}
	}, [data, count]);

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
      const sectionElement = document.getElementById("PressReleaseFilter");
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
    matchHeight('.newsCards .card-inner .content-wrap h4');
    const handleResize = () => {
      matchHeight('.newsCards .card-inner');
      matchHeight('.newsCards .card-wrapper');
      matchHeight('.newsCards .card-inner .content-wrap');
      matchHeight('.newsCards .card-inner .bolg_details');
      matchHeight('.newsCards .card-inner h4');
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

  function getUrlParam() {
    const params = router.query;
    const hasSearch = 'search' in params;
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
  }, [router.asPath])


	useEffect(() => {
    if(router.query?.pid !== undefined){
        const hasPage = parseInt(router?.query?.pid);
        if (hasPage) {
            handlePageChange(hasPage);
        }
    }
}, []);


  const clearSearch = () => {
    setSearchTerm('');
    delete router.query.search;
    router.push({
      pathname: router.pathname,
      query: { ...router.query },
    }, undefined, { scroll: false })
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

  // useEffect(() => {
  //   for (var c = document.getElementsByTagName("a"),
  //     a = 0;
  //     a < c.length; a++) {
  //     var b = c[a];
  //     b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank")
  //   }
  // })

  return (
    <>
      <section className={`three-col-grid newsCards md:pb-8 no-padding-top bg-[#ffffff] overflow-hidden ${BlogFilterStyle.blogFilter}`} id='PressReleaseFilter'>
        <a name="press"></a>
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
                  placeholder="Search press releases"
                  className={`pt-[13px] pb-[14px] pl-[16px] pr-[82px] w-full text-black bg-white rounded-[8px] ${inter.className
                    } lg:text-black lg:bg-white outline-[2px] outline outline-black hover:outline-pink transition-all sm:py-[8px] sm:px-[15px] sm:w-full sm:pr-[20px]  
                                    `}
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <span className={`crossBtn ${searchTerm ? 'show' : 'hide'} absolute top-[50%] right-[60px] w-[18px] cursor-pointer text-[20px] translate-y-[-50%] hover:text-pink`} onClick={() => clearSearch()}>X</span>
                <button type="submit" className="searchCta">Submit</button>
              </form>
            </div>

          </div>
        </div>

        <div className={`container`}>
          {
            <div className={`bgWhite_SlideWarp min-h-[380px] sm:mt-0 flex justify-center flex-wrap w-[calc(100%+24px)] ml-[-12px] pt-[100px] xl:pt-[40px] sm:w-full sm:m-0`}>
              {loading ? <Loader /> : posts && posts.length != 0 ? posts && posts.map((item, index) => {
                newDate = item.cardGrid.date && moment(item.cardGrid.date).format('MMM DD, YYYY');
                return (
                  <div key={index} className={`${Style.col_three_item} group card-wrapper w-[calc(33.33%-22px)] mx-[11px] laptop-down:w-[calc(50%-22px)] sm:!w-full sm:mx-0 mb-[24px] overflow-hidden transition-all duration-300 rounded-[16px] border-black border-[2px] outline outline-transparent outline-1 hover:outline-black hover:shadow-black-shadow`} data-aos="fade-up" data-aos-delay="300">
                    <DynamicLinks cta={item.cardGrid.cta} />
                    <div className={`inner_card relative min-h-[398px] tablet:min-h-[290px] md:min-h-[160px] desktop:min-h-[310px] sm:min-h-[250px] laptop-landscape:!px-[21px] laptop-landscape:min-h-[330px] flex flex-col transition-all h-full bg-white overflow-hidden pt-[37px] px-[40px] laptop-landscape:pt-[21px] laptop:px-[30px] tablet:p-[25px] md:p-[20px] lg:pb-[50px] desktop:p-[30px] desktop:pb-[36px] xl-up:pb-[44px] `}>
                      <div className={`${Style.eyebrowText} bolg_details mb-[6px] wide-screen:mb-[16px] tracking-[2.4px]`}>
                        <span className="relative fontInter inline-block pr-3 mr-3 laptop-landscape:text-[14px] wide-screen:text-[18px] desktop:text-[14px] lg:text-[14px] text-blue font-bold tracking-[0.64px] uppercase">
                          press release
                        </span>
                        {newDate && <span className="relative fontInter inline-block laptop-landscape:text-[14px] desktop:text-[14px] lg:text-[14px] wide-screen:text-[18px]  text-blue font-bold tracking-[0.64px] uppercase">
                          {newDate}
                        </span>}
                      </div>
                      {item.title && <h4 className="mb-[9px] text-ellipsis md:h-[45px] md:!line-clamp-2 " dangerouslySetInnerHTML={{ __html: item.title }}></h4>}
                      <div className="mt-9 z-10 absolute bottom-[36px] lg:bottom-[20px] desktop:bottom-[28px] group-hover:text-pink">
                        <DynamicButton cta={item.cardGrid.cta} />
                      </div>
                    </div>
                  </div>
                ); 
              }) : (<h3 className={`block w-full mt-[100px] text-center ${data?.pressReleases?.nodes.length < 1? '' : 'hidden'}`}>No Result Found</h3>)}
            </div>}
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
                          onClick={() => handlePageChange(i + 1)}
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
                          onClick={() => handlePageChange(i + 1)}
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
              )
              : ''}

        </div>

      </section>

    </>

  );
};

export default PressReleaseFilter;