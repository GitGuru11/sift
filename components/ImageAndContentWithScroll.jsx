import Image from 'next/image'
import Link from 'next/link'
import React,{useEffect, useState ,useRef} from 'react'
import Arrow_Btn from './button/Arrow_Btn'
import Intro from './FullWidthIntro'


const contentData = [
    {
    title: 'Global Data Netwrok',
    img:'/how-it-works.png',
        blurb: 'AI-Powered Fraud Decisioning..',
        linkText: 'learn more about Global data network',
        linkHref:'/'
    },
    {
      title: 'AI Machine Learning',
      img:'/phone-in-handd.png',
        blurb: 'AI-Powered Fraud Decisioning..',
        linkText: 'learn more about Global data network',
        linkHref:'/'
    },
    {
      title: 'Analytics',
      img:'/verticalTab/laptop-image.png',
        blurb: 'AI-Powered Fraud Decisioning..',
        linkText: 'learn more about Global data network',
        linkHref:'/'
    },
    {
      title: 'Sift Community',
      img:'/platform-tab.png',
        blurb: 'AI-Powered Fraud Decisioning..',
        linkText: 'learn more about Global data network',
        linkHref:'/'
    }
]

const introDetail = {
    PreNormalText:'Headline about',
    HighLightedText: ' HOW IT WORKS',
    bg:'black',
    blurb:'AI-Powered Fraud Decisioning..',
   
}

function ImageAndContentWithScroll() {


  const [scrollDirection, setScrollDirection] = useState('up');
  const [i, setI] = useState(0)
  const section1 = useRef();
  
  useEffect(() => {
    var section = document.querySelector("#howItWorks")
    console.log(section)

    var top = section.getBoundingClientRect().top - 300
    
    var first = top+100
    var second = first + 300
    var third = second + 300
    var fourth = third + 300
    
    window.addEventListener("scroll", () => {
      var current = window.scrollY
        if ((current >first) && (current <second)) {
          setI(0)
        }else if ((current >second) && (current <third)) {
          setI(1)
        }else if ((current >third) && (current <fourth)) {
          setI(2)
        }else if (current > fourth) {
          setI(3)
        }
    })
  },[])
  


  return (
    <>
      <section className='ImageAndContentWithScroll bg-darkBlue h-full padding-100 ' ref={section1} id="howItWorks">
    
        <div className="container">
          <div className='wrap h-[1700px] desktop:h-[1500px] lg:hidden'>
            <div className='full-content-wrap sticky top-[200px]'>
              <Intro {...introDetail} />
              <div className="pinned  wrapper xl-up:mt-[80px]  w-[calc(100%+30px)] flex flex-wrap -ml-[15px] desktop:items-center" data-aos="fade-up" data-aos-delay="300">
                <div className="col_two w-[calc(50%-30px)] md:w-full mx-[15px]">
                  <Image className={` transition-all duration-300`} src={contentData[i].img} alt='computer' width={550} height={550} quality={25} />
                </div>
                <div className="col_two w-[calc(50%-30px)] md:w-full mx-[15px] ">
                  <div className="scroll_text_wrap xl-up:pt-[71px] xl-up:-ml-[4px] ">
                    <div key={1} className={`content_wrap text-white  tablet:mb-[100px] md:mb-[40px]`}>
                      <h3 className='mb-[16px]'>{contentData[i].title}</h3>
                      <p>{contentData[i].blurb}</p>
                      <div className='mt-[19px]'>
                        <Arrow_Btn text={contentData[i].linkText} redirection={contentData[i].linkHref} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='lg-up:hidden'>
          {
            contentData.map((item, i) => {
              return (
                <div key={i} className="pinned  wrapper xl-up:mt-[80px]  w-[calc(100%+30px)] flex flex-wrap -ml-[15px] last:mb-0 lg:mb-[40px] desktop:items-center" data-aos="fade-up" data-aos-delay="300">
                  <div className="col_two w-[calc(50%-30px)] lg:w-full lg:mb-[20px] mx-[15px]  ">
                    <div className='lg:max-w-[400px] mx-auto'>
                      <Image className={` transition-all duration-300`} src={item.img} alt='computer' width={550} height={550} quality={25} />
                    </div>
                
                  </div>
                  <div className="col_two w-[calc(50%-30px)] lg:w-full mx-[15px] ">
                    <div className="scroll_text_wrap xl-up:pt-[71px] xl-up:-ml-[4px] ">
                      <div key={1} className={`content_wrap text-white  tablet:mb-[50px] md:mb-0`}>
                        <h3 className='mb-[16px]'>{item.title}</h3>
                        <p>{item.blurb}</p>
                        <div className='mt-[19px]'>
                          <Arrow_Btn text={item.linkText} redirection={item.linkHref} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
          

        </div>
      </section>
    </>
  );
}

export default ImageAndContentWithScroll
