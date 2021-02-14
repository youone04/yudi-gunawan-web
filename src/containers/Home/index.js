import React, { Component } from 'react'
import { Footer, MenuFooter ,PlaceHolderLoading} from '../../components'
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
        const { placeHolderLoading } = this.props;
        if(placeHolderLoading){
            return(
                <>
                <PlaceHolderLoading/>
                </>
            )
        }
        return (
            <>
            <CardTop/>
            <AppsTerbaru/>
            {/* Footer bermsalah */}
            <Footer/>
            <MenuFooter page='home'/>
            </>
        )
    }
}
const mapsStateToProps = (state) => {
    return{
        placeHolderLoading: state.placeHolderLoading
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getDataLandingPageUtama: () => dispatch(dataSheetsAction.getDataLandingPageUtama()),
        getDataNewApps: () => dispatch(dataSheetsAction.getDataNewApps())
    }
}

export default connect(mapsStateToProps,mapDispatchToProps) (Home);
