import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const CardTop = () => {
    return(
        <section class="p-0 bg-primary text-white row no-gutters">
        <div class="col-lg-12 col-xl-12">
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={4000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                breakpoint: {
                    max: 3000,
                    min: 1024
                },
                items: 1,
                partialVisibilityGutter: 30
                },
                mobile: {
                breakpoint: {
                    max: 464,
                    min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
                },
                tablet: {
                breakpoint: {
                    max: 1024,
                    min: 464
                },
                items: 1,
                partialVisibilityGutter: 30
                }
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            >
            <div>
            <img src="assets/assets/img/blog/large-2.jpg" alt="Image" class="w-100 h-100"/>
            </div>
           <div>
           <img src="https://placeimg.com/700/428/tech" alt="Image" class="w-100 h-100"/>
           </div>
           </Carousel>
           
        </div>
        <div class="col-lg-12 col-xl-12">
            <section>
            <div class="container">
                <div class="row justify-content-center">
                <div class="col col-md-12 col-xl-12">
                    <h3 class="h1">&ldquo;Hallo... Selamat datang di website gudangnya aplikasi androis&rdquo;</h3>
                    <p class="lead">
                    Non pulvinar neque laoreet suspendisse interdum Catelyn libero id. Olenna imp leo in vitae turpis massa. Sapien habitant Tyrion.
                    </p>
                    <img class="bg-white opacity-50 mt-3 mt-md-4 mb-3" src="assets/assets/img/logos/brand/aven.svg" alt="Aven company logo" data-inject-svg/>
                </div>
                </div>
            </div>
            </section>
        </div>
        </section>
    )
}
export default CardTop;