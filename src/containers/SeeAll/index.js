import React,{useEffect} from 'react';
import MenuFooter from '../../components/MenuFooter';
import CardTop from './CardTop';
import * as dataSheetsAction from '../../config/redux/action';
import { connect } from 'react-redux';
import ListApps from './ListApps';
import { Footer } from '../../components';
const SeeAll = ({getDataNewApps , getDataSeeAll}) => {
    useEffect(() => {
        getDataNewApps()
        getDataSeeAll()
       

    },[getDataNewApps , getDataSeeAll]);

    return(
        <>
            <CardTop/>
            <ListApps/>
            <Footer/>
            <MenuFooter/>
        </>
    )
}

const mapDispatchToProps =  (dispatch) => {
        return{
            getDataNewApps: () => dispatch(dataSheetsAction.getDataNewApps()),
            getDataSeeAll: () => dispatch(dataSheetsAction.getDataSeeAll())
        }
}

export default connect(null , mapDispatchToProps)(SeeAll);