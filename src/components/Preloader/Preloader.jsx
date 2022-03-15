import React from 'react';
import preloader from '../../assess/images/Iphone-spinner-2.gif'

let Preloader = (props) => {
    return (
        <div style ={ { backgroundColor: 'yellow'} }>
            <img src = {preloader}  />
        </div>
    )
}

export default Preloader;