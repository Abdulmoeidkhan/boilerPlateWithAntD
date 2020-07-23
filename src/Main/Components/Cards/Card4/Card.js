import React from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Card.css"


let arr = [0, 1, 2, 3, 4, 5]

let MyCard = (props) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const getDeviceType = () => {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return "tablet";
        }
        if (
            /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
                ua
            )
        ) {
            return "mobile";
        }
        return "desktop";
    };
    return (
        <section className="card-carousel-sec">
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                // autoPlay={getDeviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5s"
                transitionDuration={1200}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={getDeviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-10-px"
            >
                {arr.map((i) => (
                    <div key={i}  className="card4">
                        <img src="https://picsum.photos/300/300" className="img4" alt="Avatar" style={{ width: "100%" }} />
                        <div className="container4">
                        <img src="https://picsum.photos/100/100" alt="Avatar" className="avatar" />
                            <h4 className="card-heading"><b>Jane Doe</b></h4>
                            <p>Interior Designer</p>
                            <p>Interior Designer</p>
                            <p>Interior Designer</p>
                        </div>
                    </div>
                ))}

            </Carousel>
        </section>
    )
}

export default MyCard