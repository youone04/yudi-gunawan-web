import React,{useEffect} from 'react';
import MenuFooter from '../../components/MenuFooter';
import CardTop from './CardTop';
import * as dataSheetsAction from '../../config/redux/action';
import { connect } from 'react-redux';
import ListApps from './ListApps';
import { Footer , PlaceHolderLoading } from '../../components';
const SeeAll = ({getDataNewApps , getDataSeeAll , placeHolderLoading}) => {
    useEffect(() => {
        getDataNewApps()
        getDataSeeAll()
       

    },[getDataNewApps , getDataSeeAll]);
    if(placeHolderLoading){
        return(
            <>
            <PlaceHolderLoading/>
            </>
        )
    }
    return(
        <>
            <CardTop/>
            <ListApps/>
            <Footer/>
            <MenuFooter page="seeAll"/>
        </>
    )
}
const mapsStateToProps = (state) => {
    return{
        placeHolderLoading: state.placeHolderLoading
    }
}
const mapDispatchToProps =  (dispatch) => {
        return{
            getDataNewApps: () => dispatch(dataSheetsAction.getDataNewApps()),
            getDataSeeAll: () => dispatch(dataSheetsAction.getDataSeeAll())
        }
}

export default connect(mapsStateToProps , mapDispatchToProps)(SeeAll);