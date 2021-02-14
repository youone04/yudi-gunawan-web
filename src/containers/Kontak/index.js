import React from 'react';
import { MenuFooter ,Footer, PlaceHolderLoading } from "../../components";
import ContentContact from './ContentContact';
import { connect } from 'react-redux';
const Kontak = ({placeHolderLoading}) => {
    if(!placeHolderLoading){
        <>
        <PlaceHolderLoading/>
        </>
    }
    return(
        <>
        <ContentContact/>
        <Footer/>
        <MenuFooter page ='kontak'/>
        </>
    )
}
const mapsStateToProps = (state) => {
    return{
        placeHolderLoading: state.placeHolderLoading
    }
}
export default  connect(mapsStateToProps , null)(Kontak);