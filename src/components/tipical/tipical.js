import React from 'react';
import classes from './tipical.css';


const Tipical=()=>{
  
    return(
        <div className={classes.tipical}>
            
            <ul className={classes.tipic}>
            <li style={{listStyle:'none'}}><li  className={classes.li_prime}>خانه</li>
                <ul>
                <li  className={classes.li_second}>آپارتمان</li>
                <li  className={classes.li_second}>ویلا</li>
                    
                </ul>
            </li >
            <li style={{listStyle:'none'}} ><li  className={classes.li_prime}>زمین</li>
            <ul>
                <li  className={classes.li_second}>کشاورزی</li>
                <li  className={classes.li_second}>برای ساخت</li>
                    
                </ul>
            </li >
            <li style={{listStyle:'none'}} ><li  className={classes.li_prime}>کاری</li>
            <ul>
                <li  className={classes.li_second}>مغازه</li>
                <li  className={classes.li_second}>دفتر اداری</li>
                <li  className={classes.li_second}>دفتر تجاری</li>
                    
                </ul></li >
             
            </ul>
        </div>
    )
}
export default Tipical;


