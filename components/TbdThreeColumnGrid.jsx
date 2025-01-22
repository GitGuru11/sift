// three Col Grid

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Arrow_Btn from './button/ExternalLink_btn';
import Style from "../styles/three-col-grid.module.css"
import IntroWithCta from './IntroWithCta';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const ThreeColumnGrid = ({ image, title, content, postType, date, link, linktext }) => {

  return (
    <div
      className={`${Style.col_three} card-inner relative flex flex-col duration-500 h-full  overflow-hidden rounded-[12px] tablet:min-h-[428px] group`}
    >
      <Link href={link} aria-label="first link" className={`emptyLink`}>
        .
      </Link>
      <div
        className={`${Style.img_wrap} img-wrap h-[240px] desktop:h-[200px] sm:h-[190px] phablet:h-[210px] laptop-landscape:h-[210px] wide-screen:h-[275px] overflow-hidden`}
      >
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover duration-500 group-hover:scale-[1.05] transition-all"
          height={400}
          width={400}
          quality={100}
        />
      </div>
      <div className="content-wrap  lg:pb-[60px]  desktop:pb-[70px] xl-up:pb-[94px] desktop:p-[20px]  tablet:p-[25px] md:p-[18px]  laptop:pb-[85px]  p-[40px] pr-[30px] laptop:p-[25px] laptop-landscape:!px-[20px] laptop-landscape:pt-[20px] laptop-landscape:!pb-[70px]">
        <div className={`${Style.eyebrowText} bolg_details mb-[6px] tracking-[2.4px]`}>
          <span className="fontInter inline-block relative pr-3 mr-3 text-blue text-[16px] wide-screen:text-[18px] laptop-landscape:text-[14px] desktop:text-[14px] lg:text-[14px] font-bold tracking-[0.64px] uppercase">
            {postType}
          </span>
          <span className="fontInter inline-block  text-blue text-[16px] laptop-landscape:text-[14px] wide-screen:text-[18px] desktop:text-[14px] lg:text-[14px] font-bold tracking-[0.64px] uppercase ">
            {date}
          </span>
        </div>
        <h4 className="block font-semibold">{content}</h4>
        <div className="btn-wrap mt-9 z-10 absolute bottom-[40px] lg:bottom-[20px] desktop:bottom-[20px] laptop-landscape:bottom-[22px]">
          <Arrow_Btn text={linktext} link={link} color='black'/>
        </div>
      </div>
    </div>
  );
};
const intro = {
  normalText: "In the news",
  bg: "white",
  link: '/news-html',
  cta: 'See All News',
}

const ColGrid = () => {
  const items = [
    {
      image: '/financial.jpg',
      title: 'Item 1',
      postType: "in the news",
      date: "Nov 8, 2023",
      content: 'Financial IT Interview with Armen Najarian, CMO at Sift',
      link: '/item1',
      linktext: 'READ MORE',
    },
    {
      image: '/paypres.jpg',
      title: 'Item 2',
      postType: "in the news",
      date: "oct 30, 2023",
      content: 'BR-DGE partners with Sift',
      link: '/item2',
      linktext: 'READ MORE',
    },
    {
      image: '/news.jpg',
      title: 'Item 3',
      postType: "in the news",
      date: "oct 25, 2023",
      content: 'Sift Expands Fintech Coverage to Address Digital Risk in Emerging Payments',
      link: '/item3',
      linktext: 'READ MORE',
    },
  ];

  const getSlidesToShow = () => {
    if (items.length > 3) {
      return 3;
    } else {
      return items.length;
    }
  };


  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: getSlidesToShow(),
    adaptiveHeight: true,
    appendDots: (dots) => (
      <div>
        <ul className={`${Style.btnDots}`}>{dots}</ul>
      </div>
    ),
    customPaging: function (i) {
      return (
        <button className={Style.slickDotButton} />
      );
    },
  };

  const responsiveSettings = [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 595,
      settings: {
        slidesToShow: 1,
      },
    },
  ];

  Object.assign(settings, { responsive: responsiveSettings });

  useEffect(() => {
    // setTimeout(() => {
      
    matchHeight('.newsCards .card-inner');
    matchHeight('.newsCards .card-inner .content-wrap');
    matchHeight('.newsCards .card-inner .bolg_details');
    matchHeight('.newsCards .card-inner .content-wrap h4');
      // matchHeight('.newsCards .card-inner .btn-wrap');
    // }, 500);

    const handleResize = () => {
      matchHeight('.newsCards .card-inner');
      matchHeight('.newsCards .card-wrapper');
      matchHeight('.newsCards .card-inner .content-wrap');
      matchHeight('.newsCards .card-inner .bolg_details');
      matchHeight('.newsCards .card-inner h4');
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

  return (
    <section className="three-col-grid newsCards md:pb-8 bg-white padding-medium " id='in-the-news'>
      <div className="container">
        <IntroWithCta {...intro} />
        <div className={`${Style.SlideWarp} bgWhite_SlideWarp sm:mt-0  w-[calc(100%+24px)] ml-[-12px]`} data-aos="fade-up" data-aos-delay="300">
          <Slider {...settings}>
            {items.map((item, index) => (
              <div key={index} className={`${Style.col_three_item} card-wrapper  transition-all duration-300 rounded-[16px] border-black border-[2px] outline outline-transparent outline-1 hover:outline-black hover:shadow-black-shadow`} >
                <ThreeColumnGrid {...item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ColGrid;