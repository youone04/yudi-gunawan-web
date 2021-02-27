import React from 'react';
import {connect} from 'react-redux';

const ContentContact = ({dataKontak}) => {
    return(
        <section class="row no-gutters p-0 border-top border-bottom">
        <div class="col-lg-12">
            <section>
                {
                    console.log(dataKontak)
                }
            <div class="container">
                <div class="row justify-content-center">
                <div class="col col-md-12 col-xl-12 text-center text-lg-left">
                    <h3 class="display-3">{dataKontak[0]}</h3>
                    <address class="lead mb-5">
                    <p>{dataKontak[1]}</p>
                    <p>{dataKontak[2]}</p>
                    <p>{dataKontak[3]}</p>

                    </address>
                    <div class="d-flex flex-column justify-content-center justify-content-lg-start">
                    <div class="mx-3 mx-lg-0 mr-lg-5 mb-4">
                        <h5>{dataKontak[4]}</h5>
                        <a href="#" class="lead">{dataKontak[5]}</a>
                    </div>
                    <div class="mx-3 mx-lg-0 mr-lg-5 mb-4">
                        <h5>{dataKontak[6]}</h5>
                        <a href="#" class="lead">{dataKontak[7]}</a>
                    </div>
                    <div class="mx-3 mx-lg-0 mr-lg-5 mb-4">
                        <h5>{dataKontak[8]}</h5>
                        <a href="#" class="lead">{dataKontak[9]}</a>
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
const mapsStateToProps = (state) => {
    return{
        dataKontak: state.dataKontak
    }
}
export default connect(mapsStateToProps , null)(ContentContact);