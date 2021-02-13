import React from 'react';

const CardTop = () => {
    return(
        <div data-overlay class="o-hidden">
        <section class="pb-0">
          <div class="container">
            <div class="row justify-content-center text-center min-vh-40 d-flex flex-column align-items-center">
              <div class="col-md-12 col-lg-12 col-xl-12" data-aos="fade-up">
                <h1 class="display-3">A modular UI Kit for<br/> <mark><span data-typed-text data-loop="true" data-type-speed="90" data-strings='["Bootstrap","quick deployment","static sites","rapid development","clever startups"]'></span></mark></h1>
                <p class="lead px-xl-5">Launch your site in style with Jumpstart, a tidy collection of crafted pages and modular components.</p>
                <div class="flex-column flex-sm-row mt-4 mt-md-5" data-aos="fade-up" data-aos-delay="300">
                  <a href="#landing-pages" class="btn btn-primary btn-lg mx-sm-2 my-1 my-sm-0 my-sm-3" data-smooth-scroll>View Demos</a>
                  <a href="#" class="btn btn-outline-primary btn-lg mx-sm-2 my-1 my-sm-0">Purchase</a>
                </div>
              </div>
            </div>
          </div>
          <div class="position-absolute bottom left w-50 h-50 d-none d-md-block" data-jarallax-element="-24 48">
            <div class="blob bg-gradient w-50 h-100 bottom left"></div>
          </div>
          <div class="position-absolute top right w-50 h-50 d-none d-md-block" data-jarallax-element="48">
            <div class="blob blob-2 bg-gradient w-50 h-50 top right"></div>
          </div>
          <div class="divider divider-bottom bg-white"></div>
        </section>
      </div>
    )
}

export default CardTop;