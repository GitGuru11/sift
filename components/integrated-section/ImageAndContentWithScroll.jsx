import Image from 'next/image'
import React,{useEffect, useState ,useRef} from 'react'
import DynamicButton from '../global-components/Buttons';
function ImageAndContentWithScroll(props) {
  let data = props.items;
  var rowLength =data?.rows.length
  const [i, setI] = useState(0)
  const section1 = useRef();
  useEffect(() => {
    var section = document.querySelector(".howItWorks")
    var top = section.getBoundingClientRect().top - 300
    
    var first = top + 100
    var second = first + 300
    var third = second + 300
    var fourth = third + 300
    var fifth = fourth + 300
    if (data?.rows.length > 1) {
      window.addEventListener("scroll", () => {
        var current = window.scrollY
     
        if ((current > first) && (current < second)) {
          setI(0)
        } else if ((current > second) && (current < third)) {
          setI(1)
        } else if ((current > third) && (current < fourth)) {
          if (i <= (data?.rows.length)) {
            setI(2)
          }
        } else if ((current > fourth) && (current < fifth)) {
          if (i <= (data?.rows.length)) {
            setI(3)
          }
        }else if (current > fifth) {
          if (i <= (data?.rows.length)) {
            setI(4)
          }
        }
     
        
      })
    }
  }, [])


  return (
    <>
      <section id={data.id ? data.id : ''} className={`${data.gatedComponent? 'GatedHide' : ''} ImageAndContentWithScroll howItWorks h-full ${data.background} ${data.classes} ${data.padding}`} ref={section1}>
        {
          data?.background == 'custom' && (
            <div className="custom-bg-img absolute left-0 top-[0px] w-full h-full ">
              {data?.backgroundImage?.sourceUrl && <Image className="w-full h-full object-cover" src={data?.backgroundImage?.sourceUrl} alt={data?.backgroundImage?.altText} width="1200" height="1200" />}
            </div>
          )
        }
        <div className="container">
          <div className={`wrap h-[${425*(data?.rows.length)}px] desktop:h-[1500px] lg:hidden`} style={{height: `${rowLength <= 1 ? 'auto' : (`${425*(data?.rows.length)}px`) }`}}>
            <div className='full-content-wrap sticky top-[300px] xl:top-[290px]'>
              <div className="pinned  wrapper w-[calc(100%+30px)] flex flex-wrap -ml-[15px] desktop:items-center" data-aos="fade-up" data-aos-delay="300">
              {data?.rows[i]?.image?.sourceUrl && (
                <div className="col_two w-[calc(50%-30px)] md:w-full mx-[15px]">
                  <Image className={` transition-all duration-300`} src={data?.rows[i]?.image?.sourceUrl} alt={data?.rows[i]?.image?.altText} width={550} height={550} quality={25} />
                </div>
                )}
                <div className="col_two w-[calc(50%-30px)] md:w-full mx-[15px] ">
                  <div className="scroll_text_wrap xl-up:pt-[71px] xl-up:-ml-[4px] ">
                    <div key={1} className={`content_wrap text-white  tablet:mb-[100px] md:mb-[40px]`}>
                      <h3 className='mb-[16px]'>{data?.rows[i]?.title}</h3>
                      <div dangerouslySetInnerHTML={{ __html: data?.rows[i]?.body }}></div>
                      <div className='mt-[19px]'>
                        <DynamicButton cta={data?.rows[i]?.buttons} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='lg-up:hidden'>
            {
              data?.rows && data?.rows.map((item, i) => {
                return (
                  <div key={i} className="pinned  wrapper xl-up:mt-[80px]  w-[calc(100%+30px)] flex flex-wrap -ml-[15px] last:mb-0 lg:mb-[40px] desktop:items-center" data-aos="fade-up" data-aos-delay="300">
                    <div className="col_two w-[calc(50%-30px)] lg:w-full lg:mb-[20px] mx-[15px]  ">
                    {item?.image?.sourceUrl && (
                      <div className='lg:max-w-[400px] mx-auto'>
                        <Image className={` transition-all duration-300`} src={item?.image?.sourceUrl} alt={item?.image?.altText} width={550} height={550} quality={25} />
                      </div>
                      )}
                    </div>
                    <div className="col_two w-[calc(50%-30px)] lg:w-full mx-[15px] ">
                      <div className="scroll_text_wrap xl-up:pt-[71px] xl-up:-ml-[4px] ">
                        <div key={1} className={`content_wrap text-white  tablet:mb-[50px] md:mb-0`}>
                          {item?.title && <h3 className='mb-[16px]'>{item?.title}</h3>}
                          {item?.blurb && <p>{item?.blurb}</p>}
                          <div className='mt-[19px]'>
                            <DynamicButton cta={item?.buttons} />
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
