import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Arrow_Btn from './button/ExternalLink_btn';
import Style from "../styles/three-col-grid.module.css"
import IntroWithCta from './IntroWithCta';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Inter } from 'next/font/google';
import BlogFilterStyle from '../styles/blog/blogFilter.module.css'
import { withCoalescedInvoke } from 'next/dist/lib/coalesced-function';

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
        <div className="btn-wrap mt-9 z-10 absolute bottom-[40px] lg:bottom-[20px] desktop:bottom-[20px] sm:bottom-[10px] laptop-landscape:bottom-[22px]">
          <Arrow_Btn text={linktext} link={link} color='black' />
        </div>
      </div>
    </div>
  );
};

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
  ];
  //Query Parameter 
  const router = useRouter()
  var x = (router.query?.page == undefined ? (1) : parseInt(router.query?.page) > (Math.ceil(items.length / 12)) ? (Math.ceil(items.length / 12)) : parseInt(router.query?.page))
  const [currentPage, setCurrentPage] = useState(x);
  useEffect(() => {
    setCurrentPage(x)
  }, [x]);


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

  const [isSearchCtaHovered, setIsSearchCtaHovered] = useState(false);
  const [wholeData, setWholeData] = useState(items);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSearch, setFilterSeaarch] = useState('');
  const [totalCards, setTotalCards] = useState(items);
  const [totalData, setTotalData] = useState(items);

  const itemsPerPage = 9;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const filteredData = totalCards
  const totalPages = Math.ceil(wholeData.length / itemsPerPage);

  const handleSearchCtaHover = () => {
    setIsSearchCtaHovered(true);
  };
  const handleSearchCtaLeave = () => {
    setIsSearchCtaHovered(false);
  };

  /* Search code */
  useEffect(() => {
    const filteredCards = searchTerm
      ? items.filter(
        (items) =>
          items.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          items.postType.toLowerCase().includes(searchTerm.toLowerCase()) ||
          items.content.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      : items;
    // const filteredCards = '';
    setTotalData(filteredCards);
    setTotalCards(filteredCards);
    setWholeData(filteredCards);
  }, [searchTerm]);


  //Pagination
  const handlePageChange = (newPage) => {
    console.log(newPage);
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

    const sectionElement = document.getElementById("in-the-news");
    if (sectionElement) {
      window.scrollTo({
        top: sectionElement.offsetTop,
        behavior: "smooth",
      });
    }
  };
  // console.log(startIndex)
  // console.log(endIndex);

  return (
    <section className={`three-col-grid newsCards md:pb-8 no-padding-top bg-[#ffffff] ${BlogFilterStyle.blogFilter} `} id='in-the-news' >
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
                placeholder="Search in the news"
                className={`pt-[13px] pb-[14px] pl-[16px] pr-[50px] w-full text-black bg-white rounded-[8px] ${inter.className
                  } lg:text-black lg:bg-white outline-[2px] outline outline-black hover:outline-pink transition-all sm:py-[8px] sm:px-[15px] sm:w-full sm:pr-[20px]  ${isSearchCtaHovered ? 'outline-pink' : ''
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
      <div className="container">
        {/* <IntroWithCta {...intro} /> */}
        <div className={`bgWhite_SlideWarp sm:mt-0 flex flex-wrap w-[calc(100%+24px)] ml-[-12px] pt-[100px] xl:pt-[40px] sm:w-full sm:m-0`} data-aos="fade-up" data-aos-delay="300">
          {/* <Slider {...settings}> */}
          {(wholeData.length != 0 ? wholeData.slice(startIndex, endIndex).map((item, index) => {
            return (
              <div key={index} className={`${Style.col_three_item} card-wrapper w-[calc(33.33%-22px)] mx-[11px] laptop-down:w-[calc(50%-22px)] sm:!w-full sm:mx-0 mb-[24px] overflow-hidden transition-all duration-300 rounded-[16px] border-black border-[2px] outline outline-transparent outline-1 hover:outline-black hover:shadow-black-shadow`} data-aos="fade-up" data-aos-delay="200" >
                <ThreeColumnGrid {...item} />
              </div>
            );
          }) : (<h3 className='block w-full mt-[100px] text-center'>No Result Found</h3>))}

          {/* </Slider> */}
        </div>
        {wholeData.length > 9 && (
          <ul className={`${BlogFilterStyle.pagination} mt-[35px] flex justify-center items-center lg:mt-[20px]`}>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="prev-button mr-[18px] text-[0]"
            >.
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
                    className={`text-black text-[18px] font-[500]  leading-[24px] ${inter.className} mx-[8px] cursor-pointer transition-all delay-300 hover:text-pink ${isCurrent ? 'active text-pink font-bold' : ''
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
                    className={`text-black text-[18px] font-[500]  leading-[24px] ${inter.className}  mx-[8px] cursor-pointer transition-all delay-300 hover:text-pink ${isCurrent ? 'active text-pink font-bold' : ''
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
                    className={`text-black text-[18px] font-[500]  leading-[24px] ${inter.className}  mx-[8px] cursor-pointer transition-all delay-300 hover:!text-pink `}
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
            >.
              <div className={`iconWrap w-[26px] h-[26px]`}>
                <div className={`${BlogFilterStyle.imgWrapNext} relative ${currentPage === totalPages && 'opacity-[0.2] pointer-events-none'}`}></div>
              </div>
            </button>
          </ul>
        )}
      </div>
    </section>
  );
};

export default ColGrid;