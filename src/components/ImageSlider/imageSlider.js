import React, { useState } from 'react'
import {
  imageSliderContainer,
  slider,
  leftArrow,
  rightArrow,
  theImage,
  arrows,
} from '../ImageSlider/ImageSlider.module.css'


const ImageSlider = ({ images }) => {

  const [current, setCurrent] = useState(0)
  const length = images.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if(!Array.isArray(images) || images.length <=0){
    return null;
  }

  return (
    <>
      <div className={imageSliderContainer}>
        <section className={slider}>
          <div className={arrows}>
            <div className={leftArrow} onClick={prevSlide}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0V9Z" fill="black" />
              </svg>
            </div>
            <div className={rightArrow} onClick={nextSlide}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0V9Z" fill="black" />
              </svg>
            </div>
          </div>
          <div className={theImage}>
            {images[current]}
          </div>

        </section>


      </div>
    </>
  )
}

export default ImageSlider