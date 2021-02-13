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
        props.getDataNewApps()
    }

    render() {
        return (
            <>
            <CardTop/>
            <AppsTerbaru/>
            <Footer/>
            <MenuFooter page='home'/>
            </>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getDataLandingPageUtama: () => dispatch(dataSheetsAction.getDataLandingPageUtama()),
        getDataNewApps: () => dispatch(dataSheetsAction.getDataNewApps())
    }
}

export default connect(null,mapDispatchToProps) (Home);
