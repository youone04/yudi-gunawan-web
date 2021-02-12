import React, { Component } from 'react'
import { Footer, MenuFooter } from '../../components'
import AppsTerbaru from './AppsTerbarus';
import CardTop from './CardTop';

export class Home extends Component {
    render() {
        return (
            <>
            <CardTop/>
            <AppsTerbaru/>
            <Footer/>
            <MenuFooter/>
            </>
        )
    }
}

export default Home;
