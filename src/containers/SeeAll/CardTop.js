import React from 'react';
import { connect } from 'react-redux';

const CardTop = ({dataSeeAll}) => {
    return(
        <div data-overlay class="o-hidden">
        <section class="pb-0">
          <div class="container">
            <div class="row justify-content-center text-center min-vh-40 d-flex flex-column align-items-center">
              <div class="col-md-12 col-lg-12 col-xl-12" data-aos="fade-up">
                <h1 class="display-3">{dataSeeAll[0]}<br/> <mark><span data-typed-text data-loop="true" data-type-speed="90" data-strings='["You One","Applikasi android","Semoga Berkah"]'></span></mark></h1>
                <p class="lead px-xl-5">{dataSeeAll[1]}</p>
                <div class="flex-column flex-sm-row mt-4 mt-md-5" data-aos="fade-up" data-aos-delay="300">
                  <a style={{backgroundColor:'#f07241',color:'white'}} href="#landing-pages" class="btn btn-lg mx-sm-2 my-1 my-sm-0 my-sm-3" data-smooth-scroll>{dataSeeAll[2]}</a>
                  <a href="#" class="btn btn-outline-primary-4 btn-lg mx-sm-2 my-1 my-sm-0">{dataSeeAll[3]}</a>
                </div>
              </div>
            </div>
          </div>
          <div class="position-absolute bottom left w-50 h-50 d-none d-md-block" data-jarallax-element="-24 48">
            <div style={{backgroundColor:'#480048'}} class="blob w-50 h-100 bottom left"></div>
          </div>
          <div class="position-absolute top right w-50 h-50 d-none d-md-block" data-jarallax-element="48">
            <div  style={{backgroundColor:'#f07241'}} class="blob blob-2 w-50 h-50 top right"></div>
          </div>
          <div class="divider divider-bottom bg-white"></div>
        </section>
      </div>
    )
}
const mapStateToProps = (state) => {
  return{
    dataSeeAll: state.dataSeeAll
  }

}
export default connect(mapStateToProps, null) (CardTop);