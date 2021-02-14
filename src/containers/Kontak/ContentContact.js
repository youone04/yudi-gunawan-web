import React from 'react';

const ContentContact = () => {
    return(
        <section class="row no-gutters p-0 border-top border-bottom">
        <div class="col-lg-12">
            <section>
            <div class="container">
                <div class="row justify-content-center">
                <div class="col col-md-12 col-xl-12 text-center text-lg-left">
                    <h3 class="display-3">Contact Us</h3>
                    <address class="lead mb-5">
                    <p>443 Park Avenue South,</p>
                    <p>Kips Bay</p>
                    <p>New York City</p>

                    </address>
                    <div class="d-flex flex-column justify-content-center justify-content-lg-start">
                    <div class="mx-3 mx-lg-0 mr-lg-5 mb-4">
                        <h5>Email us</h5>
                        <a href="#" class="lead">hello@jumpstart.io</a>
                    </div>
                    <div class="mx-3 mx-lg-0 mr-lg-5 mb-4">
                        <h5>Call any time</h5>
                        <a href="#" class="lead">1800 488 328</a>
                    </div>
                    <div class="mx-3 mx-lg-0 mr-lg-5 mb-4">
                        <h5>Get in touch</h5>
                        <a href="#" class="lead">Leave a message</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
        <div class="col-lg-12">
            <div class="divider divider-side d-none d-lg-block transform-flip-y"></div>
            <div class="min-vh-30 h-100 w-100" data-marker-image="assets/img/icons/theme/map/marker-2.svg" data-maps-api-key="INSERT_YOUR_GOOGLE_MAPS_API_KEY_HERE" data-address="443 Park Avenue South,
                Kips Bay
                New York City
                " data-map-zoom="14">
                        <div class="map-marker" data-address="443 Park Avenue South,
                Kips Bay
                New York City
                ">
                <div class="info-window" data-max-width="400">
                <div class="container">
                    <div class="row">
                    <div class="col-12">
                        <h5>Info windows in Jumpstart</h5>
                    </div>
                    <div class="col-4">
                        <img alt="Jumpstart Logo" class="w-100" src="assets/assets/img/logos/jumpstart.svg"/>
                    </div>
                    <div class="col-8 pb-2">
                        <p>
                        We've made info windows easy in Jumpstart, so you can use any HTML in this infowindow on your map.
                        </p>
                        <h6 class="mb-0">Address</h6>
                        <address>
                        443 Park Avenue South, Kips Bay New York City

                        </address>
                        <a target="_blank" href="#">... More Info</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}
export default ContentContact;