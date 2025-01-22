import React from 'react';
import { useState, useEffect , useRef } from 'react';
import ArrowBtn from './button/Black_arrowBtn';
import Link from 'next/link';
import data from '../pages/data/resource.json';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import BlogFilterStyle from '../styles/blog/blogFilter.module.css'
import EventFilterStyle from '../styles/blog/blogFilter.module.css'
import { useRouter } from 'next/router'
import debounce from 'lodash/debounce';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
});
export default function ResourcesFilter() {
	const router = useRouter()
	const [activeTopic, setActiveTopic] = useState(0);
	const [wholeData, setWholeData] = useState(data[activeTopic].cardData);

	const [activeCT, setCT] = useState('');
	const [ctData, setCtData] = useState('');
	const [ctList, setCtList] = useState('');

	const [useCTCount, setUseCTCount] = useState(data[activeTopic].cardData.length,);

	const [activeUseCase, setUseCase] = useState('');
	const [usData, setusData] = useState('');
	const [usList, setusList] = useState('');
	const [useCaseCount, setUseCaseCount] = useState(data[activeTopic].cardData.length,);

	const [activeRole, setRole] = useState('');
	const [roleData, setroleData] = useState('');
	const [roleList, setroleList] = useState('');

	const [roleCount, setRoleCount] = useState(data[activeTopic].cardData.length);

	const [activeProduct, setProduct] = useState('');
	const [productData, setproductData] = useState('');
	const [pdList, setpdList] = useState('');

	const [ProductCount, setProductCount] = useState(
		data[activeTopic].cardData.length,
	);
	
	const [activeIndustry, setIndustry] = useState('');
	
	const [industryData, setIndustryData] = useState('');
	const [idList, setidList] = useState('');

	const [industryCount, setIndustryCount] = useState(
		data[activeTopic].cardData.length,
	);

	const [totalCount, setTotalCount] = useState(
		data[activeTopic].cardData.length,
	);

	const [isSearchCtaHovered, setIsSearchCtaHovered] = useState(false);
	var x = (router.query?.page == undefined ? (1) : parseInt(router.query?.page) > (Math.ceil(data[activeTopic].cardData.length / 12)) ? (Math.ceil(data[activeTopic].cardData.length / 12)) : parseInt(router.query?.page))
	const [currentPage, setCurrentPage] = useState(x);
	useEffect(() => {
		setCurrentPage(x)
	}, [x]);
	
  const [pageLoaded, setPageLoaded] = useState(false);

  var c = router.query?.contenttype == undefined ? '' : router.query?.contenttype
	var u = router.query?.ucase == undefined ? '' : router.query?.ucase
	var i = router.query?.industry == undefined ? '' : router.query?.industry
	var r = router.query?.role == undefined ? '' : router.query?.role
	var p = router.query?.product == undefined ? '' : router.query?.product

const [isInitialLoad, setIsInitialLoad] = useState(true);
	useEffect(() => {
		const delayInMilliseconds = 5000;
		const taskTimeout = setTimeout(() => {
		setIsInitialLoad(false);
		}, delayInMilliseconds);
		return () => clearTimeout(taskTimeout);
	}, []); 

  useEffect(() => {
    if (isInitialLoad) {
      const parameterOrder = ['contenttype', 'ucase', 'industry', 'role', 'product'];
      parameterOrder.forEach((parameterName, index) => {
        const parameterValue = router.query?.[parameterName];
        if (parameterValue !== undefined) {
          switch (parameterName) {
            case 'contenttype':
              CTHandler(parameterValue, 1);
              break;
            case 'ucase':
              facetHandler(parameterValue, 1);
              break;
            case 'industry':
              industryHandler(parameterValue, 1);
              break;
            case 'role':
              roleHandler(parameterValue, 1);
              break;
            case 'product':
              productHandler(parameterValue, 1);
              break;
            default:
              break;
          }
        }
      }); 
    if (
		c === '' &&
		u === '' &&
		i === '' &&
		r === '' &&
		p === ''
	  ) {
		setWholeData(data[activeTopic].cardData)
		setroleData('');
		setusData('');
		setCtData('');
		setproductData('');
		setIndustryData('');

		setCtList('');
		setpdList('');
		setroleList('');
		setidList('');
		setusList('');
	  }
      setPageLoaded(true);
      return () => setPageLoaded(false);
    }
  }, [isInitialLoad, c, u, i, r, p]);

	useEffect(() => {
		if (activeProduct !== '') {
			productHandler(activeProduct, -1);
		} else if (activeRole !== '') {
			roleHandler(activeRole, -1);
		} else if (activeCT !== '') {
			CTHandler(activeCT, -1);

		} else if (activeIndustry !== '') {
			industryHandler(activeIndustry, -1);
		} else if (activeUseCase !== '') {
			facetHandler(activeUseCase, -1);
		}
		if (activeCT !== '' && activeUseCase === '' && activeIndustry === '' && activeRole === '' && activeProduct === '') {
			CTHandler(activeCT, 1);
		} 
		if (activeUseCase !== '' && activeCT === '' && activeIndustry === '' && activeRole === '' && activeProduct === '') {
			facetHandler(activeUseCase, 1);
		} 
		if (activeRole !== '' && activeCT === '' && activeProduct === '' && activeIndustry === '' && activeUseCase === '') {
			roleHandler(activeRole, 1);
		} 
		if (activeProduct !== '' && activeCT === '' && activeIndustry === '' && activeRole === '' && activeUseCase === '') {
			productHandler(activeProduct, 1);
		} 
		if (activeIndustry !== '' && activeCT === '' && activeProduct === '' && activeRole === '' && activeUseCase === '') {
			industryHandler(activeIndustry, 1);
		} 
	}, [activeProduct, activeRole, activeCT, activeIndustry, activeUseCase]);

	
	
	// console.log(ctData.length , usData.length , industryData.length , roleData.length , productData.length);
	// console.log(ctList.length , usList.length , idList.length , roleList.length , pdList.length);

	// if (router.query?.contenttype != undefined && router.query?.ucase == undefined && router.query?.industry == undefined && router.query?.role == undefined && router.query?.product == undefined) {
	// 	CTHandler(c, 1)
	// } 
	// if (router.query?.ucase != undefined && router.query?.ucase == undefined && router.query?.industry == undefined && router.query?.role == undefined && router.query?.product == undefined) {
	// 	facetHandler(u, 1)
	// } 
	// if (router.query?.role != undefined && router.query?.ucase == undefined && router.query?.industry == undefined && router.query?.product == undefined && router.query?.contenttype == undefined) {
	// 	roleHandler(r, 1)
	// } 
	// if (router.query?.product != undefined && router.query?.role == undefined && router.query?.ucase == undefined && router.query?.industry == undefined && router.query?.contenttype == undefined) {
	// 	productHandler(p, 1)
	// } 
	// if (router.query?.industry != undefined && router.query?.ucase == undefined && router.query?.role == undefined && router.query?.product == undefined && router.query?.contenttype == undefined) {
	// 	industryHandler(i, 1)
	// } 
	
	const itemsPerPage = 12;
	const [searchTerm, setSearchTerm] = useState('');
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const totalPages = Math.ceil(wholeData.length / itemsPerPage);

	const [open, setOpen] = useState(0);
	const listHandler = (i) => {
		open == i ? setOpen(0) : setOpen(i);
	};

	const handleTopicClick = (index) => {
		setActiveTopic(index);
		setCurrentPage(1);
		clearAll();
	};
	
	const clearAll = () => {
		setusData('');
		setroleData('');
		setIndustryData('');
		setCtData('');
		setproductData('');

		setUseCase('');
		setRole('');
		setIndustry('');
		setCT('');
		setProduct('');

		setusList('');
		setroleList('');
		setidList('');
		setCtList('');
		setpdList('');
		
		setTotalCount(data[activeTopic].cardData.length);
		setWholeData(data[activeTopic].cardData);
		delete router.query.contenttype
		delete router.query.ucase
		delete router.query.industry
		delete router.query.product
		delete router.query.role
		router.push(router, undefined, { shallow: true });
	};

	useEffect(() => {
		const filteredCards = searchTerm
			? data[activeTopic].cardData.filter(
					(cardData) =>
						cardData.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
						cardData.subTitle
							?.toLowerCase()
							.includes(searchTerm.toLowerCase()) ||
						cardData.useCase
							?.toLowerCase()
							.includes(searchTerm.toLowerCase()) ||
						cardData.Industry?.toLowerCase().includes(
							searchTerm.toLowerCase(),
						) ||
						cardData.role.toLowerCase().includes(searchTerm.toLowerCase()),
			  )
			: data[activeTopic].cardData;
		setWholeData(filteredCards);
	}, [searchTerm, activeTopic]);

	let CTSet = new Set();
	const CTSetArray = new Set([
		...usList,
		...roleList,
		...idList,
		...pdList,
	]);

	// if (open === 1) {
	CTSet = new Set(
		roleList.length === 0 &&
		idList.length === 0 &&
		usList.length === 0 &&
		pdList.length === 0
			? data[activeTopic].cardData.map((item) => item.subTitle)
			: [...CTSetArray].map((item) => item.subTitle),
	);
	if (activeRole !== '' && (roleList === wholeData && activeRole !== '')) {
		CTSet = new Set([...roleList].map((item) => item.subTitle));
	} else if (
		// activeIndustry !== '' &&
		(idList === wholeData && activeIndustry !== '')
	) {
		CTSet = new Set([...idList].map((item) => item.subTitle));
	} else if (
		// activeUseCase !== '' &&
		(usList === wholeData && activeUseCase !== '')
	) {
		CTSet = new Set([...usList].map((item) => item.subTitle));
	} else if (
		// activeProduct !== '' &&
		(pdList === wholeData && activeProduct !== '')
	) {
		CTSet = new Set([...pdList].map((item) => item.subTitle));
	}
	// }

	let useCaseSet = new Set();
	const useCaseArray = new Set([
		...ctList,
		...roleList,
		...idList,
		...pdList,
	]);

	// if (open === 2) {
	useCaseSet = new Set(
		roleList.length === 0 &&
		idList.length === 0 &&
		ctList.length === 0 &&
		pdList.length === 0
			? data[activeTopic].cardData.map((item) => item.useCase)
			: [...useCaseArray].map((item) => item.useCase),
	);
	if (
		// activeRole !== '' && 
	(roleList === wholeData && activeRole !== '')) {
		useCaseSet = new Set([...roleList].map((item) => item.useCase));
	} else if (
		// activeIndustry !== '' &&
		(idList === wholeData && activeIndustry !== '')
	) {
		useCaseSet = new Set([...idList].map((item) => item.useCase));
	} else if (
		// activeCT !== '' && 
	(ctList === wholeData && activeCT !== '')) {
		useCaseSet = new Set([...ctList].map((item) => item.useCase));
	} else if (
		// activeProduct !== '' &&
		(pdList === wholeData && activeProduct !== '')
	) {
		useCaseSet = new Set([...pdList].map((item) => item.useCase));
	}
	// }

	let roleSet = new Set();

	const roleSetArray = new Set([
		...ctList,
		...usList,
		...idList,
		...pdList,
	]);

	// if (open === 3) {
	roleSet = new Set(
		ctList.length === 0 &&
		idList.length === 0 &&
		usList.length === 0 &&
		pdList.length === 0
			? data[activeTopic].cardData.map((item) => item.role)
			: [...roleSetArray].map((item) => item.role),
	);
	if (
		// activeCT !== '' &&
	 (ctList === wholeData && activeCT !== '')) {
		roleSet = new Set([...ctList].map((item) => item.role));
	} else if (
		// activeIndustry !== '' &&
		(idList === wholeData && activeIndustry !== '')
	) {
		roleSet = new Set([...idList].map((item) => item.role));
	} else if (
		// activeUseCase !== '' &&
		(usList === wholeData && activeUseCase !== '')
	) {
		roleSet = new Set([...usList].map((item) => item.role));
	} else if (
		// activeProduct !== '' &&
		(pdList === wholeData && activeProduct !== '')
	) {
		roleSet = new Set([...pdList].map((item) => item.role));
	}

	// }

	let industrySet = new Set();
	const industryArray = new Set([
		...ctList,
		...usList,
		...roleList,
		...pdList,
	]);

	// if (open === 4) {
	industrySet = new Set(
		ctList.length === 0 &&
		roleList.length === 0 &&
		usList.length === 0 &&
		pdList.length === 0
			? data[activeTopic].cardData.map((item) => item.Industry)
			: [...industryArray].map((item) => item.Industry),
	);
	if (
		// activeRole !== '' && 
	(roleList === wholeData && activeRole !== '')) {
		industrySet = new Set([...roleList].map((item) => item.Industry));
	} else if (
		// activeUseCase !== '' &&
		(usList === wholeData && activeUseCase !== '')
	) {
		industrySet = new Set([...usList].map((item) => item.Industry));
	} else if (
		// activeCT !== '' &&
		(ctList === wholeData && activeCT !== '')) {
		industrySet = new Set([...ctData].map((item) => item.Industry));
	} else if (
		// activeProduct !== '' &&
		(pdList === wholeData && activeProduct !== '')
	) {
		industrySet = new Set([...pdList].map((item) => item.Industry));
	}
	// }

	let productSet = new Set();
	const productArray = new Set([
		...ctList,
		...usList,
		...roleList,
		...idList,
	]);

	// if (open === 5) {
	productSet = new Set(
		ctList.length === 0 &&
		roleList.length === 0 &&
		usList.length === 0 &&
		idList.length === 0
			? data[activeTopic].cardData.map((item) => item.product)
			: [...productArray].map((item) => item.product),
	);
	if (
		// activeRole !== '' &&
		 (roleList === wholeData && activeRole !== '')) {
		productSet = new Set([...roleList].map((item) => item.product));
	} else if (
		// activeUseCase !== '' &&
		(usList === wholeData && activeUseCase !== '')
	) {
		productSet = new Set([...usList].map((item) => item.product));
	} else if (activeCT !== '' && (ctList === wholeData && activeCT !== '')) {
		productSet = new Set([...ctList].map((item) => item.product));
	} else if (
		// activeIndustry !== '' &&
		(idList === wholeData && activeIndustry !== '')
	) {
		productSet = new Set([...idList].map((item) => item.product));
	}
	// }
	const prevRouterQuery = useRef(router.query);
	  const handleQueryChange = (query) => {
		if (query.ucase === '') {
		  delete query.ucase;
		} else if (query.contenttype === '') {
		  delete query.contenttype;
		} else if (query.industry === '') {
		  delete query.industry;
		}else if (query.role === '') {
			delete query.role;
		}else if (query.product === '') {
			delete query.product;
		} 
		router.replace({ pathname: router.pathname, query }, undefined, {
		  shallow: true,
		});
	  };
	
	  useEffect(() => {
		const hasQueryChanged =
		  router.query.ucase !== prevRouterQuery.current.ucase ||
		  router.query.contenttype !== prevRouterQuery.current.contenttype ||
		  router.query.industry !== prevRouterQuery.current.industry ||
		  router.query.role !== prevRouterQuery.current.role ||
		  router.query.product !== prevRouterQuery.current.product;
	
		if (hasQueryChanged) {
		  prevRouterQuery.current = { ...router.query };
		  handleQueryChange(router.query);
		}
	  }, [router.query]);
	  

	const useCase = Array.from(useCaseSet);
	const role = Array.from(roleSet);
	const Industry = Array.from(industrySet);
	const contentType = Array.from(CTSet);
	const productType = Array.from(productSet);

	//contentType
	const debouncedCTHandler = debounce((val, index) => {
		if (router.query?.contenttype !== val) {
		  router.push(
			{
			  pathname: router.pathname,
			  query: {
				...router.query,
				contenttype: val,
			  },
			},
			undefined,
			{ shallow: true }
		  );
		}
	  }, 100); 
	function CTHandler(val, index) {
		// console.log(index);
		debouncedCTHandler(val, index);
		let sorted = [];
		setCT(val);
		setCurrentPage(1);
		if (val == '') {
			sorted = [];
		} else if (
			activeRole === '' &&
			activeIndustry === '' &&
			activeUseCase === '' &&
			activeProduct === ''
		) {
			data[activeTopic].cardData.filter((item) => {
				if (item.subTitle == val) {
					sorted.push(item);
				}
			});
		}
		let combinedArray1 = new Set();
		let combinedArray = [];
		if (activeRole !== '' || (roleData === wholeData && activeRole !== '')) {
			combinedArray1 = new Set([...roleData]);
		} else if (
			activeIndustry !== '' ||
			(industryData === wholeData && activeIndustry !== '')
		) {
			combinedArray1 = new Set([...industryData]);
		} else if (
			activeUseCase !== '' ||
			(usData === wholeData && activeUseCase !== '')
		) {
			combinedArray1 = new Set([...usData]);
		} else if (
			activeProduct !== '' ||
			(productData === wholeData && activeProduct !== '')
		) {
			combinedArray1 = new Set([...productData]);
		}

		combinedArray = Array.from(combinedArray1);

		combinedArray.forEach((item) => {
			if (item.subTitle === val) {
				sorted.push(item);
			}
		});

		var noDuplicateds = sorted.filter(
			(elem, index, self) => index === self.findIndex((t) => t.id === elem.id),
		);

		let prevData = new Set();

		// if (
		// 	roleList === '' &&
		// 	idList === '' &&
		// 	usList === '' &&
		// 	pdList === ''
		// ) {
		// 	prevData = data[activeTopic].cardData;
		// } else {
		// 	prevData = Array.from(
		// 		new Set([...roleList, ...usList, ...idList, ...pdList]),
		// 	);
		// }
		if (
			roleData === '' &&
			usData === '' &&
			industryData === '' &&
			productData === ''
		) {
			prevData = data[activeTopic].cardData;
		} else {
			prevData = Array.from(
				new Set([...roleData, ...usData, ...industryData, ...productData]),
			);
		}

		setUseCTCount(sorted != '' ? sorted.length : prevData.length);
		setUseCaseCount(sorted != '' ? sorted.length : prevData.length);
		setIndustryCount(sorted != '' ? sorted.length : prevData.length);
		setProductCount(sorted != '' ? sorted.length : prevData.length);
		setRoleCount(sorted != '' ? sorted.length : prevData.length);

		setTotalCount(
			sorted != ''
				? noDuplicateds.length == 0
					? sorted.length
					: noDuplicateds.length
				: prevData.length,
		);
		setWholeData(
			sorted != ''
				? noDuplicateds.length == 0
					? sorted
					: noDuplicateds
				: prevData,
		);
		if(index !== -1){
			setCtList(
				sorted != ''
					? noDuplicateds.length == 0
						? sorted
						: noDuplicateds
					: prevData,
			);
			setCtData(
				sorted != ''
					? noDuplicateds.length == 0
						? sorted
						: noDuplicateds
					: prevData,
			);
		} 
		setCtData(
			sorted != ''
				? noDuplicateds.length == 0
					? sorted
					: noDuplicateds
				: prevData,
		);
		// else {
		// 	setCtData(
		// 		noDuplicateds.length == 0
		// 		? sorted
		// 		: noDuplicateds
		// 	);
		// }
		
	}
	// console.log(ctData.length);
	//UseCase
	const debouncedFacetHandler = debounce((val, index) => {
		if (router.query?.ucase !== val) {
		  router.push(
			{
			  pathname: router.pathname,
			  query: {
				...router.query,
				ucase: val,
			  },
			},
			undefined,
			{ shallow: true }
		  );
		}
	  }, 100); 
	function facetHandler(val, index) {
		debouncedFacetHandler(val, index);
		let sorted = [];
		setUseCase(val);
		setCurrentPage(1);

		if (val == '') {
			sorted = [];
		} else if (
			activeRole === '' &&
			activeIndustry === '' &&
			activeCT === '' &&
			activeProduct === ''
		) {
			data[activeTopic].cardData.filter((item) => {
				if (item.useCase == val) {
					sorted.push(item);
				}
			});
		}

		let combinedArray1 = new Set();
		let combinedArray = [];
		if (activeRole !== '' || (roleData === wholeData && activeRole !== '')) {
			combinedArray1 = new Set([...roleData]);
		} else if (
			activeIndustry !== '' ||
			(industryData === wholeData && activeIndustry !== '')
		) {
			combinedArray1 = new Set([...industryData]);
		} else if (activeCT !== '' || (ctData === wholeData && activeCT !== '')) {
			combinedArray1 = new Set([...ctData]);
		} else if (
			activeProduct !== '' ||
			(productData === wholeData && activeProduct !== '')
		) {
			combinedArray1 = new Set([...productData]);
		}

		combinedArray = Array.from(combinedArray1);

		combinedArray.forEach((item) => {
			if (item.useCase === val) {
				sorted.push(item);
			}
		});

		var noDuplicateds = sorted.filter(
			(elem, index, self) => index === self.findIndex((t) => t.id === elem.id),
		);

		let prevData = new Set();
		// prevData = Array.from(
		// 	new Set([...roleData, ...ctData, ...industryData, ...productData]),
		// );

		// if (
		// 	roleList === '' &&
		// 	idList === '' &&
		// 	ctList === '' &&
		// 	pdList === ''
		// ) {
		// 	prevData = data[activeTopic].cardData;
		// } else {
		// 	prevData = Array.from(
		// 		new Set([...roleList, ...ctList, ...idList, ...pdList]),
		// 	);
		// }

		if (
			roleData === '' &&
			ctData === '' &&
			industryData === '' &&
			productData === ''
		) {
			prevData = data[activeTopic].cardData;
		} else {
			prevData = Array.from(
				new Set([...roleData, ...ctData, ...industryData, ...productData]),
			);
		}
		setUseCaseCount(sorted != '' ? sorted.length : prevData.length);
		setUseCTCount(sorted != '' ? sorted.length : prevData.length);
		setIndustryCount(sorted != '' ? sorted.length : prevData.length);
		setProductCount(sorted != '' ? sorted.length : prevData.length);
		setRoleCount(sorted != '' ? sorted.length : prevData.length);

		setTotalCount(
			sorted != ''
				? noDuplicateds.length == 0
					? sorted.length
					: noDuplicateds.length
				: prevData.length,
		);
		setWholeData(
			sorted != ''
				? noDuplicateds.length == 0
					? sorted
					: noDuplicateds
				: prevData,
		);
		
		if(index !== -1){
			setusList(
				sorted != ''
					? noDuplicateds.length == 0
						? sorted
						: noDuplicateds
					: prevData,
			);
			setusData(
				sorted != ''
					? noDuplicateds.length == 0
						? sorted
						: noDuplicateds
					: prevData,
			);
		} 
		setusData(
			sorted != ''
				? noDuplicateds.length == 0
					? sorted
					: noDuplicateds
				: prevData,
		);
		// else {
		// 	setusData(
		// 		noDuplicateds.length == 0
		// 		? sorted
		// 		: noDuplicateds
		// 	);
		// }
		// if(index == x){
		// 	setusData('');
		// }
		
	}

	//Role
	const debouncedRoleHandler = debounce((val, index) => {
		if (router.query?.role !== val) {
		  router.push(
			{
			  pathname: router.pathname,
			  query: {
				...router.query,
				role: val,
			  },
			},
			undefined,
			{ shallow: true }
		  );
		}
	  }, 100); 
	function roleHandler(val, index) {
		debouncedRoleHandler(val, index);
		let sorted = [];
		setRole(val);
		setCurrentPage(1);
		if (val == '') {
			sorted = [];
		} else if (
			activeUseCase === '' &&
			activeIndustry === '' &&
			activeCT === '' &&
			activeProduct === ''
		) {
			data[activeTopic].cardData.filter((item) => {
				if (item.role == val) {
					sorted.push(item);
				}
			});
		}

		let combinedArray1 = new Set();
		let combinedArray = [];
		if (ctData !== '' || (ctData === wholeData && activeCT !== '')) {
			combinedArray1 = new Set([...ctData]);
		} else if (
			activeIndustry !== '' ||
			(industryData === wholeData && activeIndustry !== '')
		) {
			combinedArray1 = new Set([...industryData]);
		} else if (
			activeUseCase !== '' ||
			(usData === wholeData && activeUseCase !== '')
		) {
			combinedArray1 = new Set([...usData]);
		} else if (
			activeProduct !== '' ||
			(productData === wholeData && activeProduct !== '')
		) {
			combinedArray1 = new Set([...productData]);
		}
		combinedArray = Array.from(combinedArray1);

		combinedArray.forEach((item) => {
			if (item.role === val) {
				sorted.push(item);
			}
		});

		var noDuplicateds = sorted.filter(
			(elem, index, self) => index === self.findIndex((t) => t.id === elem.id),
		);

		let prevData = new Set();
		if (
			ctData === '' &&
			usData === '' &&
			industryData === '' &&
			productData === ''
		) {
			prevData = data[activeTopic].cardData;
		}  else {
			prevData = Array.from(
				new Set([...ctData, ...usData, ...industryData, ...productData]),
			);
		}

		setRoleCount(sorted != '' ? sorted.length : prevData.length);
		setUseCaseCount(sorted != '' ? sorted.length : prevData.length);
		setUseCTCount(sorted != '' ? sorted.length : prevData.length);
		setIndustryCount(sorted != '' ? sorted.length : prevData.length);
		setProductCount(sorted != '' ? sorted.length : prevData.length);

		setTotalCount(
			sorted != ''
				? noDuplicateds.length == 0
					? sorted.length
					: noDuplicateds.length
				: prevData.length,
		);
		console.log(sorted != ''
		? noDuplicateds.length == 0
			? sorted.length
			: noDuplicateds.length
		: prevData.length,);
		setWholeData(
			sorted != ''
				? noDuplicateds.length == 0
					? sorted
					: noDuplicateds
				: prevData,
		);
		// console.log("role index", index);
		if(index !== -1){
			setroleList(
				sorted != ''
					? noDuplicateds.length == 0
						? sorted
						: noDuplicateds
					: prevData,
			);
			setroleData(
				sorted != ''
					? noDuplicateds.length == 0
						? sorted
						: noDuplicateds
					: prevData,
			);
		} 
		setroleData(
			sorted != ''
				? noDuplicateds.length == 0
					? sorted
					: noDuplicateds
				: prevData,
		);
		// else {
		// 	setroleData(
		// 		noDuplicateds.length == 0
		// 		? sorted
		// 		: noDuplicateds
		// 	);
		// }
		
	}

	// Industry
	const debouncedIndustryHandler = debounce((val, index) => {
		if (router.query?.industry !== val) {
		  router.push(
			{
			  pathname: router.pathname,
			  query: {
				...router.query,
				industry: val,
			  },
			},
			undefined,
			{ shallow: true }
		  );
		}
	  }, 100); 
	function industryHandler(val, index) {
		debouncedIndustryHandler(val, index);
		let sorted = [];
		setIndustry(val);
		setCurrentPage(1);
		if (val == '') {
			sorted = [];
		} else if (
			activeUseCase === '' &&
			activeProduct === '' &&
			activeCT === '' &&
			activeRole === ''
		) {
			data[activeTopic].cardData.filter((item) => {
				if (item.Industry == val) {
					sorted.push(item);
				}
			});
		}
		let combinedArray1 = new Set();
		let combinedArray = [];
		if (activeRole !== '' || (roleData === wholeData && activeRole !== '')) {
			combinedArray1 = new Set([...roleData]);
		} else if (
			activeUseCase !== '' ||
			(usData === wholeData && activeUseCase !== '')
		) {
			combinedArray1 = new Set([...usData]);
		} else if (activeCT !== '' || (ctData === wholeData && activeCT !== '')) {
			combinedArray1 = new Set([...ctData]);
		} else if (
			activeProduct !== '' ||
			(productData === wholeData && activeProduct !== '')
		) {
			combinedArray1 = new Set([...productData]);
		}
		combinedArray = Array.from(combinedArray1);

		combinedArray.forEach((item) => {
			if (item.Industry == val) {
				sorted.push(item);
			}
		});

		var noDuplicateds = sorted.filter(
			(elem, index, self) => index === self.findIndex((t) => t.id === elem.id),
		);

		let prevData = new Set();

		if (
			roleData === '' &&
			ctData === '' &&
			usData === '' &&
			productData === ''
		) {
			prevData = data[activeTopic].cardData;
		}  else {
			prevData = Array.from(
				new Set([...roleData, ...ctData, ...usData, ...productData]),
			);
		}

		setUseCaseCount(sorted != '' ? sorted.length : prevData.length);
		setUseCTCount(sorted != '' ? sorted.length : prevData.length);
		setIndustryCount(sorted != '' ? sorted.length : prevData.length);
		setProductCount(sorted != '' ? sorted.length : prevData.length);
		setRoleCount(sorted != '' ? sorted.length : prevData.length);

		setTotalCount(
			sorted != ''
				? noDuplicateds.length == 0
					? sorted.length
					: noDuplicateds.length
				: prevData.length,
		);
		setWholeData(
			sorted != ''
				? noDuplicateds.length == 0
					? sorted
					: noDuplicateds
				: prevData,
		);
		
		if(index !== -1){
			setidList(
				sorted != ''
					? noDuplicateds.length == 0
						? sorted
						: noDuplicateds
					: prevData,
			);
			setIndustryData(
				sorted != ''
					? noDuplicateds.length == 0
						? sorted
						: noDuplicateds
					: prevData,
			);
		} 
		setIndustryData(
			sorted != ''
				? noDuplicateds.length == 0
					? sorted
					: noDuplicateds
				: prevData,
		);
		// else {
		// 	setIndustryData(
		// 		noDuplicateds.length == 0
		// 		? sorted
		// 		: noDuplicateds
		// 	);
		// }
		
	}

	//Product
	const debouncedProductHandler = debounce((val, index) => {
		if (router.query?.product !== val) {
		  router.push(
			{
			  pathname: router.pathname,
			  query: {
				...router.query,
				product: val,
			  },
			},
			undefined,
			{ shallow: true }
		  );
		}
	  }, 100); 
	
	function productHandler(val, index) {
		debouncedProductHandler(val, index);
		let sorted = [];
		setProduct(val);
		setCurrentPage(1);
		if (val == '') {
			sorted = [];
		} else if (
			activeUseCase === '' &&
			activeIndustry === '' &&
			activeCT === '' &&
			activeRole === ''
		) {
			data[activeTopic].cardData.filter((item) => {
				if (item.product == val) {
					sorted.push(item);
				}
			});
		}

		let combinedArray1 = new Set();
		let combinedArray = [];

		if (activeRole !== '' || (roleData === wholeData && activeRole !== '')) {
			combinedArray1 = new Set([...roleData]);
		} else if (
			activeUseCase !== '' ||
			(usData === wholeData && activeUseCase !== '')
		) {
			combinedArray1 = new Set([...usData]);
		} else if (activeCT !== '' || (ctData === wholeData && activeCT !== '')) {
			combinedArray1 = new Set([...ctData]);
		} else if (
			activeIndustry !== '' ||
			(industryData === wholeData && activeIndustry !== '')
		) {
			combinedArray1 = new Set([...industryData]);
		}

		combinedArray = Array.from(combinedArray1);
		combinedArray.forEach((item) => {
			if (item.product == val) {
				sorted.push(item);
			}
		});

		var noDuplicateds = sorted.filter(
			(elem, index, self) => index === self.findIndex((t) => t.id === elem.id),
		);

		let prevData = new Set();

		if (
			industryData === '' &&
			usData === '' &&
			ctData === '' &&
			roleData === ''
		) {
			prevData = data[activeTopic].cardData;
		}  else if([...roleData] < [...ctData, ...usData, ...industryData]) {
			prevData = Array.from(
				new Set([...roleData]),
			);
		} else if([...ctData] < [...roleData, ...usData, ...industryData]) {
			prevData = Array.from(
				new Set([...ctData]),
			);
		} else if([...usData] < [...roleData, ...ctData, ...industryData]) {
			prevData = Array.from(
				new Set([...usData]),
			);
		} else if([...industryData] < [...roleData, ...ctData, ...usData]) {
			prevData = Array.from(
				new Set([...industryData]),
			);
		}

		setUseCaseCount(sorted != '' ? sorted.length : prevData.length);
		setUseCTCount(sorted != '' ? sorted.length : prevData.length);
		setIndustryCount(sorted != '' ? sorted.length : prevData.length);
		setProductCount(sorted != '' ? sorted.length : prevData.length);
		setRoleCount(sorted != '' ? sorted.length : prevData.length);

		setTotalCount(
			sorted != ''
				? noDuplicateds.length == 0
					? sorted.length
					: noDuplicateds.length
				: prevData.length,
		);
		setWholeData(
			sorted != ''
				? noDuplicateds.length == 0
					? sorted
					: noDuplicateds
				: prevData,
		);
		if(index !== -1){
			setpdList(
				sorted != ''
					? noDuplicateds.length == 0
						? sorted
						: noDuplicateds
					: prevData,
			);
			setproductData(
				sorted != ''
					? noDuplicateds.length == 0
						? sorted
						: noDuplicateds
					: prevData,
			);
		} 
		setproductData(
			sorted != ''
				? noDuplicateds.length == 0
					? sorted
					: noDuplicateds
				: prevData,
		);
		// else if(sorted != ''){
		// 	setproductData(
		// 		noDuplicateds.length == 0
		// 		? sorted
		// 		: noDuplicateds
		// 	);
		// }
		
	}

	function setAllHandler(){		
		if (
			activeUseCase === '' &&
			activeIndustry === '' &&
			activeCT === '' &&
			activeRole === '' && activeProduct === ''
		) { setWholeData(data[activeTopic].cardData)
			setroleData('');
		setusData('');
		setCtData('');
		setproductData('');
		setIndustryData('');

		} else if (
		    router.query['contenttype'] === undefined &&
			router.query['ucase'] === undefined &&
			router.query['industry'] === undefined &&
			router.query['role'] === undefined &&
			router.query['product'] === undefined
		  ) {
			setWholeData(data[activeTopic].cardData)
			setroleData('');
		setusData('');
		setCtData('');
		setproductData('');
		setIndustryData('');
		  }
	  }

	// cross
	const selectedFacetHandler = (value, index) => {
		if (value == 'removeUseCase') {
			facetHandler('', x);
			setUseCase('');
			setusData('');
			setusList('');
			setUseCaseCount(usData.length);
			setUseCTCount(ctData.length);
			setIndustryCount(industryData.length);
			setRoleCount(roleData.length);
			setProductCount(productData.length);
			// delete router.query?.ucase
			// router.push(router, undefined, { shallow: true });
			setAllHandler();
			// if (activeRole != '') {
			// 	roleHandler(activeRole, index);
			// }
			// if (activeCT != '') {
			// 	CTHandler(activeCT, index);
			// }
			// if (activeIndustry != '') {
			// 	industryHandler(activeIndustry, index);
			// }
			// if (activeProduct != '') {
			// 	productHandler(activeProduct, index);
			// }
		}
		if (value == 'removeRole') {
			roleHandler('', x);
			setRole('');
			setroleData('');
			setroleList('');
			setUseCaseCount(usData.length);
			setUseCTCount(ctData.length);
			setIndustryCount(industryData.length);
			setRoleCount(roleData.length);
			setProductCount(productData.length);
			// delete router.query?.role
			// router.push(router, undefined, { shallow: true });
			setAllHandler();
			// if (activeCT != '') {
			// 	CTHandler(activeCT, index);
			// }
			// if (activeUseCase != '') {
			// 	facetHandler(activeUseCase, index);
			// }
			// if (activeIndustry != '') {
			// 	industryHandler(activeIndustry, index);
			// }
			// if (activeProduct != '') {
			// 	productHandler(activeProduct, index);
			// }
		}

		if (value == 'removeIndustry') {
			industryHandler('', x);
			setIndustry('');
			setIndustryData('');
			setidList('')
			setUseCaseCount(usData.length);
			setUseCTCount(ctData.length);
			setIndustryCount(industryData.length);
			setRoleCount(roleData.length);
			setProductCount(productData.length);
			// delete router.query.industry
			// router.push(router, undefined, { shallow: true });
			setAllHandler();

			// if (activeUseCase != '') {
			// 	facetHandler(activeUseCase, index);
			// }
			// if (activeRole != '') {
			// 	roleHandler(activeRole, index);
			// }
			// if (activeProduct != '') {
			// 	productHandler(activeProduct, index);
			// }
			// if (activeCT != '') {
			// 	CTHandler(activeCT, index);
			// }
		}
		if (value == 'removeCT') {
			CTHandler('', x);
			setCT('');
			setCtData('');
			setCtList('')
			setUseCaseCount(usData.length);
			setUseCTCount(ctData.length);
			setIndustryCount(industryData.length);
			setRoleCount(roleData.length);
			setProductCount(productData.length);
			// delete router.query.contenttype
		    // router.push(router, undefined, { shallow: true });
			setAllHandler();

			// if (activeUseCase != '') {
			// 	facetHandler(activeUseCase, index);
			// }
			// if (activeRole != '') {
			// 	roleHandler(activeRole, index);
			// }
			// if (activeIndustry != '') {
			// 	industryHandler(activeIndustry, index);
			// }
			// if (activeProduct != '') {
			// 	productHandler(activeProduct, index);
			// }
		}

		if (value == 'removeProduct') {
			productHandler('', x);
			setproductData('');
			setProduct('');
			setpdList('');
			setUseCaseCount(usData.length);
			setUseCTCount(ctData.length);
			setIndustryCount(industryData.length);
			setRoleCount(roleData.length);
			setProductCount(productData.length);
			// delete router.query.product
			// router.push(router, undefined, { shallow: true });
			setAllHandler();

			// if (activeUseCase != '') {
			// 	facetHandler(activeUseCase, index);
			// }
			// if (activeRole != '') {
			// 	roleHandler(activeRole, index);
			// }
			// if (activeIndustry != '') {
			// 	industryHandler(activeIndustry, index);
			// }
			// if (activeCT != '') {
			// 	CTHandler(activeCT, index);
			// }
		}

		if (
			activeUseCase === '' &&
			activeIndustry === '' &&
			activeCT === '' &&
			activeRole === '' &&
			activeProduct === ''
		) {
			setWholeData(data[activeTopic].cardData);
		}
		if (
			c === '' &&
			u === '' &&
			i === '' &&
			r === '' &&
			p === ''
		  ) {
			// console.log("here");
			setWholeData(data[activeTopic].cardData)
			setroleData('');
			setusData('');
			setCtData('');
			setproductData('');
			setIndustryData('');
	
			setCtList('');
			setpdList('');
			setroleList('');
			setidList('');
			setusList('');
		  }
	};

	


	const handleSearchCtaHover = () => {
		setIsSearchCtaHovered(true);
	};

	const handleSearchCtaLeave = () => {
		setIsSearchCtaHovered(false);
	};

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
		const sectionElement = document.getElementById('resourcesFilter');
		if (sectionElement) {
			window.scrollTo({
				top: sectionElement.offsetTop,
				behavior: 'smooth',
			});
		}
	};

	useEffect(() => {
		document.addEventListener('click', (e) => {
			if (!e.target.classList.contains('facet')) {
				if (!(e.target.tagName == 'P')) {
					setOpen(0);
				}
			}
		});
	});

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
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="17"
			viewBox="0 0 16 17"
			fill="none"
		>
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
	const selectClasses =
		'mb-[10px] sm:w-[35%] xs:w-full relative inline-block filter_wrap px-[16px] pr-[32px] transition-all delay-100 py-[8px] rounded-[4px] hover:border-[#000] border-[1px] border-[#00000033] mr-[16px] cursor-pointer';
	return (
		<section
			className={`ResourcesFilter pt-0 overflow-hidden bg-[#fff] ${BlogFilterStyle.blogFilter}`}
			id="resourcesFilter"
		>
			<div className="bg-skyblue pt-[40px] pb-[30px]">
				<div className="container">
					<div className={`searchWrap`}>
						<form className={`relative`} onSubmit={(e) => e.preventDefault()}>
							<label htmlFor="search">.</label>
							<input
								type="search"
								id="search"
								aria-label="first link"
								name="search"
								placeholder="Search resources"
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
					<div className="filterByTopics mt-[30px]">
						<div className="flex flex-wrap items-center">
							<div className="mr-[16px]">
								<span
									className={`text-[16px] font-[400] tracking-[0.012em] leading-[24px] ${inter.className}`}
								>
									Select topic type:
								</span>
							</div>
							<div className="">
								<ul className="div">
									{data.map((data, index) => {
										return (
											<li
												key={index}
												className={`inline-block cursor-pointer transition-all delay-30  text-[18px] font-[500] leading-[27px] outline hover:outline-pink hover:outline-2 outline-1 outline-solid outline-black mr-[8px] rounded-[100px] px-[16px] my-[10px] py-[4px] ${
													activeTopic === index ? ' bg-pink outline-pink ' : ''
												}`}
												onClick={() => handleTopicClick(index)}
											>
												<span>{data.topic}</span>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="cardsWithFilter mt-[40px]">
				<div className="container">
					<div className="filter-wraps relative mb-[30px]">
						<p className="inline-block mr-[16px] my-[10px]">Filter By:</p>
						<div className="filter-wraps relative inline-block phablet:pr-[150px]">
							<div
								className={`${selectClasses} transition-all delay-300 ${
									open == 1 ? ' border-[#000] ' : ' '
								} ${
									contentType != '' ? '' : ' pointer-events-none opacity-[0.5]'
								}`}
							>
								<div
									className="facet absolute z-[11] w-full h-full top-0 left-0"
									onClick={() => listHandler(1)}
								></div>
								<p>Content type</p>
								<span
									className={`absolute w-[15px] h-[8px] top-1/2 right-[10px] -translate-y-[50%] duration-300 ${
										open == 1 && contentType != ''
											? ' -rotate-180 '
											: 'rotate-0'
									}`}
								>
									{arrow}
								</span>
								{contentType != '' ? (
									<ul
										className={`absolute px-[16px] pb-0 bg-white w-[236px] xs:w-full ${EventFilterStyle.scrollbarHide} scroll-auto focus:scroll-auto  overflow-y-auto h-[218px] ${
											open == 1
												? 'opacity-100 py-[16px] z-[99] block'
												: 'opacity-0 py-0 hidden'
										} overflow-hidden top-[44px] wide-screen:top-[54px] laptop-landscape:top-[42px!important] duration-300 left-0 topic shadow-filter-shadow rounded-[4px]`}
										id="authors"
									>
										{contentType.map((item, i) => {
											return (
												<li
													key={i}
													className={`mb-[16px] hover:text-pink`}
													data-val={`${item}`}
													onClick={() => CTHandler(item, i)}
												>
													<p
														className={` text-[16px] font-[500]  leading-[24px]  ${
															activeCT == item ? 'text-pink' : ''
														}`}
													>
														{item}
													</p>
												</li>
											);
										})}
									</ul>
								) : (
									''
								)}
							</div>
							<div
								className={`${selectClasses} transition-all delay-300 ${
									open == 2 && useCase != '' ? ' border-[#000] ' : ' '
								} ${useCase != '' ? '' : ' pointer-events-none opacity-[0.5]'}`}
							>
								<div
									className="facet absolute z-[11] w-full h-full top-0 left-0"
									onClick={() => listHandler(2)}
								></div>
								<p>Use case</p>
								<span
									className={`absolute w-[15px] h-[8px] top-1/2 right-[10px] -translate-y-[50%] duration-300 ${
										open == 2 && useCase != '' ? ' -rotate-180 ' : 'rotate-0'
									}`}
								>
									{arrow}
								</span>
								{useCase != '' ? (
									<ul
										className={`absolute px-[16px] pb-0 bg-white w-[236px] xs:w-full ${EventFilterStyle.scrollbarHide} scroll-auto focus:scroll-auto overflow-y-auto h-[218px] ${
											open == 2
												? 'opacity-100 py-[16px] z-[99]'
												: ' opacity-0 h-0 py-0 -z-[1]'
										} overflow-hidden top-[44px] wide-screen:top-[54px] laptop-landscape:top-[42px!important] duration-300 left-0 topic shadow-filter-shadow rounded-[4px]`}
										id="topics"
									>
										{useCase.map((item, i) => {
											return (
												<li
													key={i}
													className={`mb-[16px] hover:text-pink`}
													data-val={`${item}`}
													onClick={() => facetHandler(item, i)}
												>
													<p
														className={`  text-[16px] font-[500]  leading-[24px] ${
															activeUseCase == item ? 'text-pink' : ''
														}`}
													>
														{item}
													</p>
												</li>
											);
										})}
									</ul>
								) : (
									''
								)}
							</div>

							<div
								className={`${selectClasses} transition-all delay-300 ${
									open == 4 ? ' border-[#000] ' : ' '
								} ${
									Industry != '' ? '' : ' pointer-events-none opacity-[0.5]'
								}`}
							>
								<div
									className="facet absolute z-[11] w-full h-full top-0 left-0"
									onClick={() => listHandler(4)}
								></div>
								<p>Industry</p>
								<span
									className={`absolute w-[15px] h-[8px] top-1/2 right-[10px] -translate-y-[50%] duration-300 ${
										open == 4 && Industry != '' ? ' -rotate-180 ' : 'rotate-0'
									}`}
								>
									{arrow}
								</span>
								{Industry != '' ? (
									<ul
										className={`absolute px-[16px] pb-0 bg-white w-[236px] xs:w-full ${EventFilterStyle.scrollbarHide} scroll-auto focus:scroll-auto overflow-y-auto h-[218px] ${
											open == 4
												? 'opacity-100 py-[16px] z-[99]'
												: 'opacity-0 py-0 -z-[1]'
										} overflow-hidden top-[44px] wide-screen:top-[54px] laptop-landscape:top-[42px!important] duration-300 left-0 topic shadow-filter-shadow rounded-[4px]`}
										id="authors"
									>
										{Industry.map((item, i) => {
											return (
												<li
													key={i}
													className={`mb-[16px] hover:text-pink`}
													data-val={`${item}`}
													onClick={() => industryHandler(item, i)}
												>
													<p
														className={` text-[16px] font-[500]  leading-[24px] ${
															activeIndustry == item ? 'text-pink' : ''
														}`}
													>
														{item}
													</p>
												</li>
											);
										})}
									</ul>
								) : (
									''
								)}
							</div>
							<div
								className={`${selectClasses} transition-all delay-300 ${
									open == 3 ? ' border-[#000] ' : ' '
								} ${role != '' ? '' : ' pointer-events-none opacity-[0.5]'}`}
							>
								<div
									className="facet absolute z-[11] w-full h-full top-0 left-0"
									onClick={() => listHandler(3)}
								></div>
								<p>Role</p>
								<span
									className={`absolute w-[15px] h-[8px] top-1/2 right-[10px] -translate-y-[50%] duration-300 ${
										open == 3 && role != ' ' ? ' -rotate-180 ' : 'rotate-0'
									}`}
								>
									{arrow}
								</span>
								{role != ' ' ? (
									<ul
										className={`absolute px-[16px] pb-0 bg-white w-[236px] xs:w-full ${EventFilterStyle.scrollbarHide} scroll-auto focus:scroll-auto overflow-y-auto h-[218px] ${
											open == 3
												? 'opacity-100 py-[16px] z-[99]'
												: 'opacity-0 py-0 -z-[1]'
										} overflow-hidden top-[44px] wide-screen:top-[54px] laptop-landscape:top-[42px!important] duration-300 left-0 topic shadow-filter-shadow rounded-[4px]`}
										id="authors"
									>
										{role.map((item, i) => {
											return (
												<li
													key={i}
													className={`mb-[16px] hover:text-pink`}
													data-val={`${item}`}
													onClick={() => roleHandler(item, i)}
												>
													<p
														className={` text-[16px] font-[500]  leading-[24px] ${
															activeRole == item ? 'text-pink' : ''
														}`}
													>
														{item}
													</p>
												</li>
											);
										})}
									</ul>
								) : (
									''
								)}
							</div>

							<div
								className={`${selectClasses} transition-all delay-300 ${
									open == 5 ? ' border-[#000] ' : ' '
								} ${
									productType != '' ? '' : ' pointer-events-none opacity-[0.5]'
								}`}
							>
								<div
									className="facet absolute z-[11] w-full h-full top-0 left-0"
									onClick={() => listHandler(5)}
								></div>
								<p>Product</p>
								<span
									className={`absolute w-[15px] h-[8px] top-1/2 right-[10px] -translate-y-[50%] duration-300 ${
										open == 5 && productType != ''
											? ' -rotate-180 '
											: 'rotate-0'
									}`}
								>
									{arrow}
								</span>
								{productType != '' ? (
									<ul
										className={`absolute px-[16px] pb-0 bg-white w-[236px] xs:w-full ${EventFilterStyle.scrollbarHide} scroll-auto focus:scroll-auto overflow-y-auto h-[218px] ${
											open == 5
												? 'opacity-100 py-[16px] z-[99]'
												: 'opacity-0 py-0 -z-[1]'
										} overflow-hidden top-[44px] wide-screen:top-[54px] laptop-landscape:top-[42px!important] duration-300 left-0 topic shadow-filter-shadow rounded-[4px]`}
										id="authors"
									>
										{productType.map((item, i) => {
											return (
												<li
													key={i}
													className={`mb-[16px] hover:text-pink`}
													data-val={`${item}`}
													onClick={() => productHandler(item, i)}
												>
													<p
														className={`text-[16px] font-[500]  leading-[24px] ${
															activeProduct == item ? 'text-pink' : ''
														}`}
													>
														{item}
													</p>
												</li>
											);
										})}
									</ul>
								) : (
									''
								)}
							</div>
						</div>
						{activeUseCase == '' &&
						activeRole == '' &&
						activeIndustry == '' &&
						activeCT == '' &&
						activeProduct == '' ? (
							' '
						) : (
							<div
								className={` flex flex-wrap ${
									activeUseCase == '' &&
									activeRole == '' &&
									activeIndustry == '' &&
									activeCT == '' &&
									activeProduct == ''
										? 'justify-end'
										: 'justify-between'
								} selected-facets mt-[10px] mb-[24px]`}
							>
								<ul
									className={`${
										activeUseCase == '' &&
										activeRole == '' &&
										activeIndustry == '' &&
										activeCT == '' &&
										activeProduct == ''
											? 'hidden'
											: 'block'
									}`}
								>
									{activeCT != '' ? (
										<li className={`relative outline-[1px] outline outline-black hover:outline-pink hover:outline-[2px] rounded-[100px] inline-block mr-[16px] mt-[20px] py-[4px] pr-[32px] pl-[10px] ${EventFilterStyle.SelectedItems} `}>
											<a
												className="emptyLink"
												onClick={() => selectedFacetHandler('removeCT', '')}
											></a>
											<p className="xxl:text-[14px] text-[16px] font-[600] capitalize">
												{`${activeCT} (${useCTCount})`}{' '}
											</p>{' '}
											<span className="absolute w-[16px] h-[16px] top-[7px] right-[10px]">
												{cross}
											</span>
										</li>
									) : (
										''
									)}
									{activeUseCase != '' ? (
										<li className={`relative outline-[1px] outline outline-black hover:outline-pink hover:outline-[2px] rounded-[100px] inline-block mr-[16px] mt-[20px] py-[4px] pr-[32px] pl-[10px] ${EventFilterStyle.SelectedItems} `}>
											<a
												className="emptyLink"
												onClick={() =>
													selectedFacetHandler('removeUseCase', 999)
												}
											></a>
											<p className="xxl:text-[14px] text-[16px] font-[600] capitalize">
												{`${activeUseCase} (${useCaseCount})`}
											</p>
											<span className="absolute w-[16px] h-[16px] top-[7px] right-[10px]">
												{cross}
											</span>
										</li>
									) : (
										''
									)}
									{activeRole != '' ? (
										<li className={`relative outline-[1px] outline outline-black hover:outline-pink hover:outline-[2px] rounded-[100px] inline-block mr-[16px] mt-[20px] py-[4px] pr-[32px] pl-[10px] ${EventFilterStyle.SelectedItems} `}>
											<a
												className="emptyLink"
												onClick={() => selectedFacetHandler('removeRole', '')}
											></a>
											<p className="xxl:text-[14px] text-[16px] font-[600] capitalize">
												{`${activeRole} (${roleCount})`}{' '}
											</p>{' '}
											<span className="absolute w-[16px] h-[16px] top-[7px] right-[10px]">
												{cross}
											</span>
										</li>
									) : (
										''
									)}
									{activeIndustry != '' ? (
										<li className={`relative outline-[1px] outline outline-black hover:outline-pink hover:outline-[2px] rounded-[100px] inline-block mr-[16px] mt-[20px] py-[4px] pr-[32px] pl-[10px] ${EventFilterStyle.SelectedItems} `}>
											<a
												className="emptyLink"
												onClick={() =>
													selectedFacetHandler('removeIndustry', '')
												}
											></a>
											<p className="xxl:text-[14px] text-[16px] font-[600] capitalize">
												{`${activeIndustry} (${industryCount})`}{' '}
											</p>{' '}
											<span className="absolute w-[16px] h-[16px] top-[7px] right-[10px]">
												{cross}
											</span>
										</li>
									) : (
										''
									)}
									{activeProduct != '' ? (
										<li className={`relative outline-[1px] outline outline-black hover:outline-pink hover:outline-[2px] rounded-[100px] inline-block mr-[16px] mt-[20px] py-[4px] pr-[32px] pl-[10px] ${EventFilterStyle.SelectedItems} `}>
											<a
												className="emptyLink"
												onClick={() =>
													selectedFacetHandler('removeProduct', '')
												}
											></a>
											<p className="xxl:text-[14px] text-[16px] font-[600] capitalize">
												{`${activeProduct} (${ProductCount})`}{' '}
											</p>{' '}
											<span className="absolute w-[16px] h-[16px] top-[7px] right-[10px]">
												{cross}
											</span>
										</li>
									) : (
										''
									)}
									<li className="inline-block">
										<span
											className={`bold cursor-pointer text-[14px] font-[700] uppercase underline hover:!text-pink duration-300 ${inter.className}`}
											onClick={() => clearAll()}
										>
											CLEAR ALL
										</span>
								    </li>
								</ul>
								<div className="total-count flex alignright mt-[20px]">
									<p>
										<span className="text-blue font-[600]">{totalCount}</span>{' '}
										results
									</p>
								</div>
							</div>
						)}
					</div>
					<div className="filterCards min-h-[300px] mt-[20px]">
						<div className="wrapper flex flex-wrap w-[calc(100%+24px)] -ml-[12px]">
							{wholeData.length != 0 ? (
								wholeData.slice(startIndex, endIndex).map((cardData, index) => {
									return (
										<div
											key={index}
											className="group mb-[20px] desktop-laptop:p-[30px] lg:p-[20px] laptop-landscape:p-[26px] p-[40px] pb-[70px] lg:pb-[50px] desktop-laptop:pb-[60px] wide-screen:pb-[90px] relative desktop-laptop:min-h-[220px] laptop-landscape:min-h-[230px!important] lg:min-h-full large-desktop:min-h-[260px] xxl-up:min-h-[260px] transition-all duration-300 outline hover:shadow-black-shadow shadow-none bg-white col-three w-[calc(33.33%-24px)] tablet-mid:w-[calc(50%-24px)] tablet:w-[calc(50%-24px)] phablet:w-[calc(50%-24px)] sm:w-[calc(100%-24px)]  mx-[12px] rounded-[16px] overflow-hidden hover:outline-[3px] outline-black outline-2 "
											data-aos="fade-up"
											data-aos-delay="300"
										>
											<div
												className={`card transition-all duration-300 grouphover:outline-black `}
											>
												<Link className="emptyLink" href="/homepage">
													.
												</Link>
												<div className="tags mb-[8px]">
													<div className="category inline-block mr-[16px]">
														<h6 className={`text-blue uppercase small_font laptop-landscape:text-[14px] xl:text-[14px] font-[700!important] ${inter.className}`}>
															{cardData.subTitle}
														</h6>
													</div>
												</div>
												<h4 className="mb-[9px] text-ellipsis h-[118px] laptop-landscape:h-[76px!important] laptop-landscape:line-clamp-[3!important] wide-screen:h-[128px] line-clamp-4 relative desktop-laptop:h-[100px] lg:h-[68px] lg:line-clamp-3 wide-screen:line-clamp-3">
													{cardData.title}
												</h4>
												<div className="btn mt-[22px] absolute bottom-[40px] lg:bottom-[20px]">
													<Link
														aria-label="first link"
														className={`arrow_btn uppercase text-black relative transition-all duration-300 font-[700] leading-[1] pr-[26px]  group-hover:text-pink ${inter.className} `}
														href="/"
													>
														<span className="absolute top-1/2 -translate-y-1/2 right-0 w-[20px] overflow-hidden">
															<svg
																className="-ml-[5px] duration-300 group-hover:-ml-[1px]"
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

														{cardData.cta}
													</Link>
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
									className="next-button ml-[18px] text-[0]"
								>
										.
									<div className={`iconWrap w-[26px] h-[26px]`}>
                                        <div className={`${BlogFilterStyle.imgWrapNext} relative ${
												currentPage === totalPages && 'opacity-[0.2] pointer-events-none'}`}></div>
									</div>
								</button>
							</ul>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
