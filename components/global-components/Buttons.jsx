import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Style from '../../styles/about/videoWithContent.module.css';
import Styles from "./../../styles/buttons/btnPink.module.css"

function DynamicButton(value) {
  var regExp;
  var match;
  var videoId;
  var iframeSrc;

  if (value.cta) {
    if (value.cta[0].type == 'video') {
      if ((value.cta[0].videoType) == 'vimeo') {
        const regex = /\/(\d+)(?:\?|$)/
        const vimeoId = (value.cta[0].videoUrl)?.match(regex);
        if (vimeoId == null) {
          iframeSrc = `https://player.vimeo.com/video/${value.cta[0].videoUrl}`
        } else {
          iframeSrc = `https://player.vimeo.com/video/${vimeoId[1]}`
        }
      } else if ((value.cta[0].videoType) == 'podcast') {
        iframeSrc = value.cta[0].videoUrl
      } else {
        regExp = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
        match = value.cta[0].videoUrl?.match(regExp);
        videoId = (match && match[5].length === 11) ? match[5] : 'error';
        iframeSrc = videoId !== 'error' ? `https://www.youtube.com/embed/${videoId}` : '';

      }
    }
  }

  if (value.vimeoId) {
    const vimeoUrl = "https://player.vimeo.com/video/";
    iframeSrc = vimeoUrl + value.vimeoId
  }

  useEffect(() => {
    for (var c = document.getElementsByTagName("a"),
      a = 0;
      a < c.length; a++) {
      var b = c[a];
      b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank")
    }
  })

  const [open, setOpen] = useState(0)
  const overlay = <div className={`overlay transition-all duration-300 xl-up:w-[calc(100%-276px)] desktop:w-[calc(100%-244px)] wide-nav-screen:max-w-[2500px] wide-nav-screen:mx-auto  fixed w-screen h-screen z-[9999] ${Style.overlay}`} onClick={(e) => documentClickHandler(e)}>
    <div className={`${Style.overlaycardsWrap} relative top-[50%] tablet-landscape:top-0 md:top-0 lg:pb-[50px] pt-[70px]`}>
      <div className={`cross w-[40px] h-[40px] cursor-pointer absolute right-[179px] -top-[27px] desktop-laptop:right-[30px] desktop-laptop:top-[45px] lg:right-[30px] lg:top-[40px]  ${Style.logoWrap} z-[9999]`} onClick={() => removeOverlay()}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.8802 15.1879L22.0663 20L26.8802 24.8121C27.016 24.9479 27.1237 25.1091 27.1972 25.2865C27.2707 25.464 27.3085 25.6541 27.3085 25.8461C27.3085 26.0382 27.2707 26.2283 27.1972 26.4058C27.1237 26.5832 27.016 26.7444 26.8802 26.8802C26.7444 27.016 26.5832 27.1237 26.4058 27.1972C26.2284 27.2707 26.0382 27.3085 25.8462 27.3085C25.6541 27.3085 25.464 27.2707 25.2865 27.1972C25.1091 27.1237 24.9479 27.016 24.8121 26.8802L20 22.0662L15.1879 26.8802C15.0521 27.016 14.8909 27.1237 14.7135 27.1972C14.536 27.2707 14.3459 27.3085 14.1539 27.3085C13.9618 27.3085 13.7717 27.2707 13.5942 27.1972C13.4168 27.1237 13.2556 27.016 13.1198 26.8802C12.984 26.7444 12.8763 26.5832 12.8028 26.4058C12.7293 26.2283 12.6915 26.0382 12.6915 25.8461C12.6915 25.6541 12.7293 25.464 12.8028 25.2865C12.8763 25.1091 12.984 24.9479 13.1198 24.8121L17.9338 20L13.1198 15.1879C12.8456 14.9136 12.6915 14.5417 12.6915 14.1538C12.6915 13.766 12.8456 13.394 13.1198 13.1198C13.3941 12.8456 13.766 12.6915 14.1539 12.6915C14.5417 12.6915 14.9136 12.8456 15.1879 13.1198L20 17.9337L24.8121 13.1198C24.9479 12.984 25.1091 12.8763 25.2865 12.8028C25.464 12.7293 25.6541 12.6915 25.8462 12.6915C26.0382 12.6915 26.2284 12.7293 26.4058 12.8028C26.5832 12.8763 26.7444 12.984 26.8802 13.1198C27.016 13.2556 27.1237 13.4168 27.1972 13.5942C27.2707 13.7716 27.3085 13.9618 27.3085 14.1538C27.3085 14.3459 27.2707 14.536 27.1972 14.7135C27.1237 14.8909 27.016 15.0521 26.8802 15.1879ZM39 20C39 23.7578 37.8857 27.4313 35.7979 30.5558C33.7102 33.6804 30.7428 36.1156 27.271 37.5537C23.7992 38.9918 19.9789 39.368 16.2933 38.6349C12.6077 37.9018 9.22218 36.0922 6.56498 33.435C3.90778 30.7778 2.09821 27.3924 1.36509 23.7067C0.631969 20.0211 1.00823 16.2008 2.4463 12.729C3.88436 9.25722 6.31964 6.28982 9.44417 4.20208C12.5687 2.11433 16.2422 1 20 1C25.0375 1.00532 29.8671 3.00881 33.4292 6.57085C36.9912 10.1329 38.9947 14.9625 39 20ZM36.0769 20C36.0769 16.8203 35.134 13.712 33.3675 11.0681C31.6009 8.4243 29.09 6.36368 26.1524 5.14686C23.2147 3.93004 19.9822 3.61166 16.8636 4.23199C13.7449 4.85232 10.8803 6.3835 8.63191 8.6319C6.38351 10.8803 4.85233 13.7449 4.232 16.8635C3.61167 19.9822 3.93004 23.2147 5.14687 26.1524C6.36369 29.09 8.42431 31.6009 11.0681 33.3675C13.712 35.134 16.8203 36.0769 20 36.0769C24.2624 36.0721 28.3488 34.3767 31.3628 31.3628C34.3767 28.3488 36.0721 24.2624 36.0769 20Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="videoWrap w-full max-w-[760px] mx-auto p-[20px]">
        <iframe
          width="100%"
          height="415"
          src={iframeSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; autostop; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

      </div>
    </div>
  </div>

  function clickHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    (open == 0 ? setOpen(1) : setOpen(0))
  }

  function removeOverlay() {
    (open == 0 ? setOpen(1) : setOpen(0))
  }
  function documentClickHandler(e) {
    if (e.target.tagName == 'DIV' || (e.target.tagName == 'SVG')) {
      (open == 0 ? setOpen(1) : setOpen(0))
    }
  }
  return (

    <>
      {value.cta ?
        value?.cta && value?.cta.map((val, index) => {
          let ctaData = val;
          const ctaLink = () => {
            let link = '';
            if (ctaData && ctaData?.type == 'file') {
              link = ctaData?.uploadFile?.link;
            } else if (ctaData && ctaData?.type == 'internal' && ctaData?.internal) {
              link = ctaData?.internal?.uri
            } else if (ctaData?.url) {
              link = ctaData?.url;
            }
            // else {
            //   link = '#';
            // }
            return link
          }
          let linkVal = ctaLink();
          return (
            val.type == 'video' ? (
              <>
                {(open == 1 ? (overlay) : '')}
                <div key={index}>
                  <Link
                    key={index}
                    aria-label="first link"
                    className={`relative ${Styles.btn_pink} ${Styles.video_btn} group pr-[60px] button z-10 inline-block transition-all md:py-[12px] laptop-landscape:px-[20px] laptop-landscape:pr-[40px] md:px-[20px] md:pr-[40px] desktop:pr-[55px]  py-[16px] px-[24px] active:opacity-[0.85] font-[700]  border-[3px] border-transparent bg-pink rounded-full uppercase`}
                    href="#"
                    onClick={(e) => clickHandler(e)}>
                    {val.text}
                    <span className="absolute top-[auto] bottom-[-8px] wide-screen:bottom-[-7px] -translate-y-1/2 right-0 w-[20px] h-[17px] overflow-hidden"></span>
                  </Link>
                </div> </>) : (
              linkVal && <Link
                key={index}
                aria-label="first link"
                className={`${val.style} button group uppercase`}
                href={linkVal}
                target={val.target ? '_blank' : '_self'}>
                {val.text ? val.text : 'Read More'}
                <span className="absolute top-[auto] bottom-[-8px] wide-screen:bottom-[-7px] -translate-y-1/2 right-0 w-[20px] h-[17px] overflow-hidden"></span>
              </Link>
            )
          )
        })

        :
        <>
          {value.vimeoId && (
            <>
              {(open == 1 ? (overlay) : '')}
              <div>
                {value.linkUrl && value.linkUrl.includes('http') ? (
                  <Link
                    aria-label="first link"
                    className={`relative ${Styles.btn_pink} ${Styles.video_btn} group pr-[60px] button z-10 inline-block transition-all md:py-[12px] laptop-landscape:px-[20px] laptop-landscape:pr-[40px] md:px-[20px] md:pr-[40px] desktop:pr-[55px]  py-[16px] px-[24px] active:opacity-[0.85] font-[700]  border-[3px] border-transparent bg-pink rounded-full uppercase`}
                    href={value.linkUrl}
                    target="_blank"
                  >
                    {value.ctaText}
                    <span className="absolute top-[auto] bottom-[-8px] wide-screen:bottom-[-7px] -translate-y-1/2 right-0 w-[20px] h-[17px] overflow-hidden"></span>
                  </Link>
                ) : (
                  <Link
                    aria-label="first link"
                    className={`relative ${Styles.btn_pink} ${Styles.video_btn} group pr-[60px] button z-10 inline-block transition-all md:py-[12px] laptop-landscape:px-[20px] laptop-landscape:pr-[40px] md:px-[20px] md:pr-[40px] desktop:pr-[55px]  py-[16px] px-[24px] active:opacity-[0.85] font-[700]  border-[3px] border-transparent bg-pink rounded-full uppercase`}
                    href={value.linkUrl}
                    onClick={(e) => clickHandler(e)}
                  >
                    {value.ctaText}
                    <span className="absolute top-[auto] bottom-[-8px] wide-screen:bottom-[-7px] -translate-y-1/2 right-0 w-[20px] h-[17px] overflow-hidden"></span>
                  </Link>
                )}
              </div>
            </>
          )}
        </>
      }
    </>
  )
}


export default DynamicButton;
