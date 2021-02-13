import React,{useEffect} from 'react';
import MenuFooter from '../../components/MenuFooter';
import CardTop from './CardTop';
import * as dataSheetsAction from '../../config/redux/action';
import { connect } from 'react-redux';
import ListApps from './ListApps';
const SeeAll = ({getDataNewApps}) => {
    useEffect(() => {
        getDataNewApps()

    },[getDataNewApps]);

    return(
        <>
            <CardTop/>
            <ListApps/>
            <MenuFooter/>
        </>
    )
}

const mapDispatchToProps =  (dispatch) => {
        return{
            getDataNewApps: () => dispatch(dataSheetsAction.getDataNewApps())
        }
}

export default connect(null , mapDispatchToProps)(SeeAll);