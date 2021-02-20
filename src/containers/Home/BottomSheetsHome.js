import React from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'
import BgHome from './BgHome';
import CardTop from './CardTop';
import {Link} from 'react-router-dom';

const BottomSheetsHome = () => {
    return (
        <>
        <CardTop/>
        <BottomSheet
          className="sheet-home"
          snapPoints={({ minHeight, maxHeight}) => [80, 270 / 0.6]}
          defaultSnap={300} 
          open={true}>
          <div style={{display:'flex'}} className="navbar-customes">
               <Link style={{color: '#480048'}} to="/"><i className="fas icon-custome fa-home fa-2x"></i><p class="text-menu-icon">HOME</p></Link>

               <Link style={{color: '#807070'}}  to="/kontak"><i class="far icon-custome fa-address-book fa-2x" ><p style={{fontSize: 10,marginTop: 5,marginLeft: -8}}>KONTAK</p></i></Link>
               <Link style={{color:'#807070'}} to="/list-apps">
                   <i class="fas  icon-custome fa-toolbox fa-2x">
                       <p style={{fontSize: 10,marginTop: 5,marginLeft: -8}}>APPSSS</p></i></Link>
         </div>
         <div style={{overflowY:'auto' ,height: 300}}>
             <p>yudi gunawan</p>
             <br/>
             <p>yudi gunawan</p>
             <br/>
             <p>yudi gunawan</p>
             <br/>
             <p>yudi gunawan</p>
             <br/>
             <p>yudi gunawan</p>
             <br/>
             <p>yudi gunawan</p>
             <br/>
             <p>yudi gunawan</p>
             <br/>
             <p>yudi gunawan</p>
             <br/>
             <p>yudi gunawan</p>
             <br/>
             <p>yudi gunawan</p>
             <br/>
             <p>yudi gunawan</p>
             <br/>
             <p>yudi gunawan</p>
             <br/>

         </div>

        </BottomSheet>
        </>
    )
}
export default BottomSheetsHome;