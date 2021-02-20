import React from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'

const BottomSheetsHome = () => {
    return (
        <BottomSheet
          className="sheet-home"
          snapPoints={({ minHeight, maxHeight}) => [50, 270 / 0.6]}
          defaultSnap={250} 
          open={true}>

            <p>dhjdghjbd</p>
            <br/>
            <br/>
            <p>dhjdghjbd</p>
            <br/>
            <br/>
            <p>dhjdghjbd</p>
            <br/>
            <br/>
            <p>dhjdghjbd</p>
            <br/>
            <br/>
            <p>dhjdghjbd</p>
            <br/>
            <br/>
            <p>dhjdghjbd</p>
            <br/>
            <br/>
          
        </BottomSheet>
    )
}
export default BottomSheetsHome;