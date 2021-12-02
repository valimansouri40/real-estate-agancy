import React from 'react';
import classes from './addlocation.css';
import { NavLink} from 'react-router-dom';

const Addlocation = (props)=>{
  
    return(
        <div className={classes.addlocation}>
            <p className={classes.pragraf}>به راحتی املاک خود را بفروشید</p>
            
            <NavLink to='/addplace'  className={classes.button_add} title='اگهی خود را بسازید' > افزودن آگهی</NavLink>
            <NavLink to='/compelet/places' className={classes.button_add} title='اگهی مورد نظر خود را پیدا کنید' > دیدن تمام آگهی ها</NavLink>
        </div>
    )
}
export default Addlocation;
//DlsL2kpZnnEyYbzY
/////%USERPROFILE%\AppData\Local\Temp//TMP