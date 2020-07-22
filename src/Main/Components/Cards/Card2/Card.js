import React from "react"
import Carousel from "react-multi-carousel";
import { Card } from 'antd';

import "react-multi-carousel/lib/styles.css";
import "./Card.css"

const { Meta } = Card;

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

                <Card
                    hoverable
                    style={{ width: 290 ,margin:"0 auto"}}
                    cover={<img alt="example" src="https://picsum.photos/200/300" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    style={{ width: 290 ,margin:"0 auto"}}
                    cover={<img alt="example" src="https://picsum.photos/200/300" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    style={{ width: 290 ,margin:"0 auto"}}
                    cover={<img alt="example" src="https://picsum.photos/300/300" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    style={{ width: 290 ,margin:"0 auto"}}
                    cover={<img alt="example" src="https://picsum.photos/300/300" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </Carousel>
        </section>
    )
}

export default MyCard