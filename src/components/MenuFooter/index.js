import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export class MenuFooter extends Component {
    render() {
        return (
            <div className="navbar-custome">
               <Link to="/detail"><i className="fas icon-home fa-home fa-2x"> </i></Link>
            </div>
        )
    }
}

export default MenuFooter;
