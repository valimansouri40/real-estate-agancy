import React from 'react';
import classes from './search.css';

import srch from '../../assets/img/search.png';
const Search=(props)=>{
    
   
    
    return(
        <div style={{width:props.sz? '30%':'18%'}} className={classes.search}>
            <input type='text' placeholder='جستجو' title='جستجو' onChange={(e)=>props.sets(e.target.value)} value={props.search} className={classes.input} />
            <img src={srch} onClick={props.ser} onKeyPress={props.ser} className={classes.srch} />
     </div>
    );
}
export default Search;
