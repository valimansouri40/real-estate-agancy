import React from 'react';

import classes from './Modal.css';


const Modal=(props)=>{

    return(
        <div className={classes.Modal}>

            <div className={classes.box}>
                    <span>X</span>
                    <button className={classes.close}>بستن</button>
            </div>

        </div>
    );
}

export default Modal;