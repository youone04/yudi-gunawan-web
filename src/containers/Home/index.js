import React , {Component} from 'react';
import BottomSheetsHome from './BottomSheetsHome';
import BgHome from './BgHome';
import { PlaceHolderLoading} from '../../components'
import * as dataSheetsAction from '../../config/redux/action';
import {connect} from 'react-redux';
import CardTop from './CardTop';

class Home extends Component{
  constructor(props){
    super(props);
    props.getDataLandingPageUtama()
}
  
  render(){
    const { placeHolderLoading } = this.props;
   if(placeHolderLoading){
     return(
       <PlaceHolderLoading/>
     )
   }

    return (
      <>
        <BottomSheetsHome/>
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
  }
}
export default connect(mapsStateToProps , mapDispatchToProps) (Home);