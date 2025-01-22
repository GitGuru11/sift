import React from 'react';
import Style from '../styles/loader/loader.module.css'

export default function Loader() {
  return (
    <>
        <div className={`${Style.loader}`}>
            <span className={`${Style.spinner} ${Style.spinner}`}></span>
            <span className={`${Style.spinner} ${Style.spinner2}`}></span>
            <span className={`${Style.spinner} ${Style.spinner3}`}></span>
            <br />
            <span className={`${Style.loaderText}`}>LOADING...</span>
        </div>
    </>
   
  )
}
