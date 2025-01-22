import React from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { useState , useEffect } from 'react';
import Style from './../styles/patents/patentTable.module.css';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800']
})
export default function PatentTable() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [winWidth, isWinWidth] = useState(0);

  const [openIndexes, setOpenIndexes] = useState([0]);

  const toggleAccordion = (index) => {
    const isOpen = openIndexes.includes(index);

    if (isOpen) {
      setOpenIndexes(openIndexes.filter((item) => item !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };


  useEffect(() => { 
    const handleResize = ( ) => {
        isWinWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
    window.removeEventListener('resize', handleResize);
    };
})


const handleHover = (index) => {
  setHoveredIndex(index);
};
	const tableData = [
		{ Categories: "Category 1", Number: "9,954,879 - 10,284,582 - 10,643,216", date: '04/24/2018 - 05/07/2019 - 05/05/2020', description: "Workflow platform that allows customer teams to build and update their fraud processes without needing to write code; enables set up of workflows that automate any type of fraud detection achievable on Sift's platform." },
		{ Categories: "Category 2", Number: "9,954,879 - 10,284,582 - 10,643,216", date: "04/24/2018 - 05/07/2019 - 05/05/2020", description: "AI-Powered Fraud Decisioning.."},
		{ Categories: "Category 3", Number: "9,954,879 - 10,284,582", date: "04/24/2018 - 05/07/2019", description: "AI-Powered Fraud Decisioning.." },
		{ Categories: "Category 4", Number: "9,954,879", date: "04/24/2018", description: "AI-Powered Fraud Decisioning.." },
		{ Categories: "Category 5", Number: "9,954,879 - 10,284,582 - 10,643,216", date: "04/24/2018 - 05/07/2019 - 05/05/2020", description: "Workflow platform that allows customer teams to build and update their fraud processes without needing to write code; enables set up of workflows that automate any type of fraud detection achievable on Sift's platform." },
		{ Categories: "Category 6", Number: "9,954,879 - 10,284,582 - 10,643,216", date: "04/24/2018 - 05/07/2019 - 05/05/2020", description: "AI-Powered Fraud Decisioning.." },
		{ Categories: "Category 7", Number: "9,954,879 - 10,284,582", date: "04/24/2018 - 05/07/2019", description: "AI-Powered Fraud Decisioning.." },
		{ Categories: "Category 8", Number: "9,954,879", date: "04/24/2018", description: "AI-Powered Fraud Decisioning.." },
	];
	return (
        <section className='PatentTable overflow-hidden bg-white'>
     
          {winWidth > 991 ?  <div className="container">
                          <div className="wrap md:overflow-x-scroll md:whitespace-wrap md:p-[20px]">
                                <table border="1" className='outline-[1px] outline outline-black md:w-[767px] rounded-[16px] overflow-hidden '>
                                  <thead className='bg-oceanGreen '>
                                    <tr>
                                      <th className={`w-[16%] md:w-[200px] font-[700] text-[16px] leading-[19px] text-center pt-[16px] pb-[18px] uppercase px-[16px] border-r-[1px] border-black ${inter.className}`}>Patent Categories</th>
                                      <th className={`w-[15%] md:w-[200px] text-center pt-[16px] pb-[18px] uppercase px-[16px] border-r-[1px] border-black ${inter.className}`}>Patent Number <span className='font-[400] text-[14px] italic capitalize block'>Patent links</span></th>
                                      <th className={`w-[13%] md:w-[200px] text-center pt-[16px] pb-[18px] uppercase px-[16px] border-r-[1px] border-black ${inter.className}`}>Grant Date</th>
                                      <th className={`w-[57%] md:w-[400px] pt-[16px] pb-[18px] px-[34px] text-left uppercase  ${inter.className}`}>Description</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {tableData.map((row, index) => (
                                      <tr key={index} className='border-b-[1px] last:border-b-0 border-black'>
                                        <td className={`w-[15%] md:w-[200px] relative font-[700] text-[16px] leading-[19px] text-center py-[24px] px-[16px] border-r-[1px] border-black ${inter.className} align-top`}>
                                            <span className={`${inter.className} font-[700] text-[16px] text-black transition-all duration-[0.3s]`}>
                                              {row.Categories}
                                            </span>
                                        </td>
                                        <td className={`w-[15%] font-[700] text-[16px] leading-[19px] text-center py-[24px] px-[16px] border-r-[1px] border-black cursor-pointer align-top`}>
                                          <div>
                                            {row.Number.split('-').map((part, index, array) => (
                                              <React.Fragment key={index}>
                                              <Link
                                                  href={"/"}
                                                  className={`${inter.className} font-[700] text-[16px] text-black transition-all duration-[0.3s] underline hover:underline-pink hover:text-pink`}
                                                  onMouseEnter={() => handleHover(index)}
                                                  onMouseLeave={() => handleHover(null)}
                                                >
                                                  {part}
                                                </Link>
                                                {index !== array.length - 1 && <div className="mt-[10px]"></div>}
                                              </React.Fragment>
                                            ))}
                                            </div>
                                        </td>
                                        <td className={`w-[13%] md:w-[200px] font-[700] text-[16px] leading-[19px] text-center py-[24px] px-[16px] border-r-[1px] border-black align-top ${inter.className}`}>
                                          <p className='font-[700] text-[16px]'>
                                                {row.date.split('-').map((part, index, array) => (
                                              <React.Fragment key={index}>
                                              {part}
                                              {index !== array.length - 1 && <span className="mt-[10px] block"></span>}
                                              </React.Fragment>
                                          ))}
                                          </p>
                                        </td>
                                        <td className={`w-[57%] md:w-[400px] font-[400] text-[16px] leading-[19px] py-[24px] pl-[34px] pr-[24px] align-top border-black ${inter.className}`}><p className='small_font'>{row.description}</p></td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                          </div> 
               </div> : <div>
                  <div className="accWrap">
                    {tableData.map((row, index) => (
                      <div key={index} className="border-[1px] border-black border-b-0 border-x-0 last:border-b-[1px]">
                        <div className={`bg-oceanGreen w-[100%] font-[600] text-[16px] py-[20px] px-[16px] text-left relative capitalize cursor-pointer ${inter.className}`} onClick={() => toggleAccordion(index)}>
                          <span> Patent {" "}{row.Categories} </span> <div className={`${Style.plusMinus}  ${openIndexes.includes(index) ? `${Style.minus}` : ''}`}></div>
                        </div>
                        <div className={`innerContent transition-all delay-[0.3s] ${openIndexes.includes(index) ? 'h-auto' : 'h-0 hidden'} `}>
                          <div className="flex  p-[16px] pb-0">
                            <span className={`w-[100px] font-[700] text-[14px] uppercase mr-[24px] xs:mr-[15px] min-w-[101px]  ${inter.className}`}>Patent Number<span className='font-[400] text-[12px] italic capitalize block'>Patent links</span></span>
                            <div className=" flex flex-wrap items-center">
                            {row.Number.split('-').map((part, index, array) => (
                                <React.Fragment key={index}>
                                <Link
                                    href={"/"}
                                    className={`${inter.className} font-[700] text-[14px] text-blue transition-all leading-[21px] mb-[8px] inline-block duration-[0.3s] underline hover:underline-pink xs:block w-fit hover:text-pink xs:w-full mr-[15px]`}
                                    onMouseEnter={() => handleHover(index)}
                                    onMouseLeave={() => handleHover(null)}
                                  >
                                    {part}
                                  </Link>
                                  {index !== array.length - 1 && <div className="mt-[10px]"></div>}
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                          <div className="flex p-[16px] pb-0">
                            <span className={`w-[100px] font-[700] text-[14px] uppercase mr-[24px] xs:mr-[15px] min-w-[101px] ${inter.className}`}>Grant Date</span>
                            <div className=" flex flex-wrap items-center">
                              {row.date.split('-').map((part, index, array) => (
                                <React.Fragment key={index}>
                                <p
                                    className={`${inter.className} font-[700] text-[14px] mb-[8px] xs:block w-fit leading-[21px] xs:w-full mr-[15px]`}
                                  >
                                    {part}
                                  </p>
                                  {index !== array.length - 1 && <div className="mt-[10px]"></div>}
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                          <div className="flex p-[16px] pb-[24px]">
                            <span className={`w-[100px] font-[700] text-[14px] uppercase mr-[24px] xs:mr-[15px] min-w-[101px] ${inter.className}`}>Description</span>
                            <div>
                              <p className='small_font'>{row.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      ))
                    }
                  </div>
              </div>
          }
      </section>
	);
}
