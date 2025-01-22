// three Col Grid

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Arrow_Btn from './button/Arrow_Btn';
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
      className={`${Style.col_three} card-inner relative flex flex-col duration-500 h-full text-white overflow-hidden rounded-[16px] group`}
    >
      <Link href={link} aria-label="first link" className={`emptyLink`}>
        .
      </Link>
      <div
        className={`${Style.img_wrap} img-wrap h-[240px] wide-screen:h-[275px] overflow-hidden`}
      >
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover duration-500 group-hover:scale-[1.05] transition-all"
          height={200}
          width={200}
          quality={100}
        />
      </div>
      <div className="content-wrap  lg:pb-[70px] desktop:pb-[70px] xl-up:pb-[94px] desktop:p-[26px] laptop-landscape:p-[32px] laptop-landscape:pb-[90px] laptop:pb-[85px]  p-[40px] pr-[30px] laptop:p-[25px] lg:p-6">
        <div className="bolg_details mb-[6px] tracking-[2.4px] laptop-landscape:text-[12px]">
          <span className="fontInter font-bold tracking-[0.64px]">
            {postType}
          </span>
          <span className="fontInter pl-3 ml-3 border-l-2 font-bold tracking-[0.64px] border-white">
            {date}
          </span>
        </div>
        <h4 className=" font-semibold">{content}</h4>
        <div className="btn-wrap mt-9 z-10 absolute bottom-[40px] lg:bottom-[20px] desktop:bottom-[20px]">
          <Arrow_Btn text={linktext} redirection={link} />
        </div>
      </div>
    </div>
  );
};
const intro = {
  HighLightedText: "Explore",
  normalText: "more from Sift",
  bg: "black",
  link: '/',
  cta: 'Talk to an expert',
}

const ColGrid = () => {
  const items = [
    {
      image: '/iphone.jpg',
      title: 'Item 1',
      postType: "BLOG POST",
      date: "FEB 23 2023",
      content: 'AI-Powered Fraud Decisioning..',
      link: '/item1',
      linktext: 'READ THE ARTICLE',
    },
    {
      image: '/tab-in-hand.png',
      title: 'Item 2',
      postType: "WHITEPAPER",
      date: "FEB 23 2023",
      content: 'AI-Powered Fraud Decisioning..',
      link: '/item2',
      linktext: 'READ WHITEPAPER',
    },
    {
      image: '/tab-in-hand.png',
      title: 'Item 3',
      postType: "BLOG",
      date: "FEB 23 2023",
      content: 'AI-Powered Fraud Decisioning..',
      link: '/item3',
      linktext: 'READ BLOG',
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
      breakpoint: 991,
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
    matchHeight('.card-inner');
    matchHeight('.card-wrapper');
    matchHeight('.card-inner .content-wrap');
    matchHeight('.card-inner .bolg_details');
    matchHeight('.card-inner h4');
    matchHeight('.card-inner .btn-wrap');

    const handleResize = () => {
      matchHeight('.card-inner');
      matchHeight('.card-wrapper');
      matchHeight('.card-inner .content-wrap');
      matchHeight('.card-inner .bolg_details');
      matchHeight('.card-inner h4');
      matchHeight('.card-inner .btn-wrap');
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
    <section className="three-col-grid md:pb-8 bg-black xl-up:pb-[105px]">
      <div className="container">
        <IntroWithCta {...intro} />
        <div className={`${Style.SlideWarp} sm:mt-0 w-[calc(100%+24px)] ml-[-12px]`}>
          <Slider {...settings}>
            {items.map((item, index) => (
              <div key={index} className={`${Style.col_three_item} card-wrapper data-aos-delay="300 transition-all duration-300 rounded-[18px] border-[2px] outline outline-transparent outline-1 hover:outline-white hover:shadow-white-shadow`}>
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