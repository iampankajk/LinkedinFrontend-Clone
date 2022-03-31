import React from 'react'
import './Style/Grid.css';
function Grid_Navbar() {
  let box = [];
  for ( let i = 0; i < 3; i++){
      box.push(<div className='box'></div>)
  }
   
    return (
        <div className="grid">
            <div className='grid--hori'>
              {box}
            </div>
            <div className='grid--hori'>
              {box}
            </div>
            <div className='grid--hori'>
              {box}
            </div>
            
        </div>
    )
}

export default Grid_Navbar;
