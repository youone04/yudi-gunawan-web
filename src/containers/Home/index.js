import React, { Component } from 'react'
import { Footer, MenuFooter } from '../../components'
import AppsTerbaru from './AppsTerbarus';
import CardTop from './CardTop';
import * as dataSheetsAction from '../../config/redux/action';
import { connect } from 'react-redux';

export class Home extends Component {
    constructor(props){
        super(props);
        props.getDataLandingPageUtama()
    }

    render() {
        return (
            <>
            <CardTop/>
            <AppsTerbaru/>
            {/* <Footer/> */}
            <MenuFooter/>
            </>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getDataLandingPageUtama: () => dispatch(dataSheetsAction.getDataLandingPageUtama()),
    }
}

export default connect(null,mapDispatchToProps) (Home);
