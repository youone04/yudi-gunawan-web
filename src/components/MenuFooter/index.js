import React, { Component } from 'react'
import {Link} from 'react-router-dom';
var colorHome = '';
var colorContak = ''
export class MenuFooter extends Component {

    render() {
        const{page} = this.props;
        if(page === 'home'){
            colorHome = '#480048';
            colorContak = '#807070';
        }else if(page === 'kontak'){
            colorHome = '#807070';
            colorContak = '#480048';
        }
        return (
            <>
            <div className="navbar-custome">
               <Link style={{color: colorHome}} to="/"><i className="fas icon-custome fa-home fa-2x"> </i></Link>
               <Link style={{color: colorContak}} to="/kontak"><i class="far icon-custome fa-address-book fa-2x" ></i></Link>
            </div>
            </>
        )
    }
}

export default MenuFooter;
