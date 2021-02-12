import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const AppsTerbaru = () => {
    return(
        <section>
        <div class="container">
            <div class="row section-title justify-content-center text-center">
            <div class="col-md-12 col-lg-12 col-xl-12">
                <h3 class="display-4"><mark data-aos="highlight-text" data-aos-delay="300">Aplikasi Terbaru</mark> </h3>
                <div class="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</div>
            </div>
            </div>
            <div class="row">
            <div class="col-md-12 col-lg-12 mb-3 mb-md-4 mb-lg-0">
            <Carousel
            additionalTransfrom={0}
            arrows
            // autoPlay
            // autoPlaySpeed={3000}
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
                partialVisibilityGutter: 40
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
             <div class="card h-100 hover-box-shadow">
                <div class="d-block bg-gradient rounded-top position-relative">
                    <img class="card-img-top hover-fade-out" src="assets/assets/img/case-studies/thumb-2.jpg" alt="Image accompanying Circle testimonial"/>
                    <div class="badge badge-light">
                    <img src="assets/assets/img/logos/brand/asgardia.svg" alt="Asgardia company logo" class="icon icon-sm m-lg-1"/>
                    </div>
                </div>
                <div class="card-body">
                    <h3>NotesApps</h3>
                    <p>
                    Samwell nisl purus in mollis. Varys eget velit aliquet sagittis consectetur purus ut.
                    </p>
                    <a href="#" class="stretched-link">Download</a>
                </div>
                </div>

                <div class="card h-100 hover-box-shadow">
                <div class="d-block bg-gradient rounded-top position-relative">
                    <img class="card-img-top hover-fade-out" src="assets/assets/img/case-studies/thumb-2.jpg" alt="Image accompanying Circle testimonial"/>
                    <div class="badge badge-light">
                    <img src="assets/assets/img/logos/brand/asgardia.svg" alt="Asgardia company logo" class="icon icon-sm m-lg-1"/>
                    </div>
                </div>
                <div class="card-body">
                    <h3>CatatanKeuangan</h3>
                    <p>
                    Samwell nisl purus in mollis. Varys eget velit aliquet sagittis consectetur purus ut.
                    </p>
                    <a href="#" class="stretched-link">Download</a>
                </div>
                </div>
            </Carousel>
            </div>
            </div>
        </div>
        </section>
    )
}
export default AppsTerbaru;