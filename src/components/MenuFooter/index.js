import React, { Component } from 'react'
import {Link} from 'react-router-dom';
var colorHome = '';
var colorContak = ''
var listApps = ''
export class MenuFooter extends Component {

    render() {
        const{page} = this.props;
        if(page === 'home'){
            colorHome = '#480048';
            colorContak = '#807070';
        }else if(page === 'kontak'){
            colorContak = '#480048';
            colorHome = '#807070';
            listApps = '#807070'
        }else if(page === 'seeAll'){
            colorContak = '#807070';
            colorHome = '#807070';
        }else if(page === 'listapp'){
            listApps = '#480048'
            colorContak = '#807070';
            colorHome = '#807070';
        }
        return (
            <>
            <div style={{display:'flex'}} className="navbar-custome">
               <Link style={{color: colorHome}} to="/"><i className="fas icon-custome fa-home fa-2x"></i><p class="text-menu-icon">HOME</p></Link>
               <Link style={{color: colorContak}} to="/kontak"><i class="far icon-custome fa-address-book fa-2x" ><p style={{fontSize: 10,marginTop: 5,marginLeft: -8}}>KONTAK</p></i></Link>
               <Link style={{color: listApps}} to="/list-apps"><i class="far icon-custome fa-address-book fa-2x" ><p style={{fontSize: 10,marginTop: 5,marginLeft: -8}}>APPSSS</p></i></Link>
            </div>
            </>
        )
    }
}

export default MenuFooter;
