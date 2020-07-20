import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import "./Slider.css"


const Slider = () => {

  let galleryItems = () => {
    let arr = ["https://res.cloudinary.com/tanzeelah/image/upload/v1594745296/Cover%20Photos/Untitled-8_aij9qx.jpg", "https://res.cloudinary.com/tanzeelah/image/upload/v1594745295/Cover%20Photos/Untitled-1_remeuh.jpg", "https://res.cloudinary.com/tanzeelah/image/upload/v1594745294/Cover%20Photos/Untitled-9_bcmsdy.jpg", "https://res.cloudinary.com/tanzeelah/image/upload/v1594745293/Cover%20Photos/Untitled-7_pecrtb.jpg", "https://res.cloudinary.com/tanzeelah/image/upload/v1594745291/Cover%20Photos/Untitled-2_reojs6.jpg", "https://res.cloudinary.com/tanzeelah/image/upload/v1594745290/Cover%20Photos/Untitled-4_kselx4.jpg", "https://res.cloudinary.com/tanzeelah/image/upload/v1594745290/Cover%20Photos/Untitled-6_ix7pvi.jpg", "https://res.cloudinary.com/tanzeelah/image/upload/v1594745290/Cover%20Photos/Untitled-3_nkzaap.jpg", "https://res.cloudinary.com/tanzeelah/image/upload/v1594745290/Cover%20Photos/Untitled-5_su4wkx.jpg"]
    return arr
      .map((item, i) => <img className="item" alt={item} src={item} />
      )
  }
  let [state, setState] = useState({
    currentIndex: 0,
    itemsInSlide: 1,
    responsive: {
      0: { items: 1 },
      767: { items: 2 },
      1024: { items: 3 }
    },
    galleryItems: galleryItems()
  })

  let slidePrevPage = () => {
    const currentIndex = state.currentIndex - state.itemsInSlide
    setState(
      {
        ...state,
        currentIndex
      }
    )
  }

  let slideNextPage = () => {
    
    let currentIndex = state.currentIndex + state.itemsInSlide
    if (currentIndex > state.galleryItems.length) currentIndex = state.galleryItems.length

    setState(
      {
        ...state,
        currentIndex
      }
    )
  }

  let handleOnSlideChange = (event) => {
    const { itemsInSlide, item } = event
    console.log(event)
    setState({
      ...state,
      itemsInSlide,
      currentIndex: item
    })
  }

  return (
    <div className="desktopClass">
      <div onClick={() => slidePrevPage()} className="cardIcon"><i className="fa fa-chevron-left"></i></div>{
        console.log("Component", state)
      }
      <AliceCarousel
        items={state.galleryItems}
        slideToIndex={state.currentIndex}
        responsive={state.responsive}
        onInitialized={handleOnSlideChange}
        onSlideChanged={handleOnSlideChange}
        onResized={handleOnSlideChange}
      />
      <div onClick={() => slideNextPage()} className="cardIcon"><div><i className="fa fa-chevron-right"></i></div></div>
    </div>
  )
}

export default Slider