import React ,{useEffect}from 'react';
import { MenuFooter ,Footer, PlaceHolderLoading } from "../../components";
import ContentContact from './ContentContact';
import { connect } from 'react-redux';
import * as dataSheetsAction from '../../config/redux/action';

const Kontak = ({placeHolderLoading , getDataKontak}) => {
    useEffect(()=> {
        getDataKontak();
    },[])

    if(placeHolderLoading){
       return(
        <>
        <PlaceHolderLoading/>
        </>
       )
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
        placeHolderLoading: state.placeHolderLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{

        getDataKontak: () => dispatch(dataSheetsAction.getDataKontak()),
    }
  }
export default  connect(mapsStateToProps , mapDispatchToProps)(Kontak);