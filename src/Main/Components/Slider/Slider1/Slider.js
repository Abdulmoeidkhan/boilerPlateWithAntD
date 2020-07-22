import React from "react"
import SimpleImageSlider from "react-simple-image-slider";
import "./Slider.css"

let Slider = ()=>{
    const images = [
        { url: "https://dummyimage.com/600x300/000/fff" },
        { url: "https://dummyimage.com/600x300/000/fff" },
        { url: "https://dummyimage.com/600x300/000/fff" },
        { url: "https://dummyimage.com/600x300/000/fff" },
        { url: "https://dummyimage.com/600x300/000/fff" },
        { url: "https://dummyimage.com/600x300/000/fff" },
        { url: "https://dummyimage.com/600x300/000/fff" },
    ];
    return(
        <div>
                <SimpleImageSlider
                    width={"90%"}
                    height={504}
                    images={images}
                />
            </div>
    )
}

export default Slider