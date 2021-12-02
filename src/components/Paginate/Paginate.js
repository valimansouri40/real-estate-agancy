import React, { useEffect, useState }  from "react";
import classes from './Paginate.css';

const Paginate=(props)=>{
    const {length,number,setnum,spin,setspin}=props;
    
    
    const[disadd,setdisadd]=useState(false);
    const[disless,setdisless]=useState(false);
        let page= length /10;
console.log(length)
    useEffect(()=>{
        if( page < 1){
            setdisadd(true)
        }else{
            setdisadd(false)
        }
        if(number === 1){
            setdisless(true)
        }else{
            setdisless(false)
        }
    },[page,number])



    const addhandller=()=>{


        if(page > number){
            setnum(e=>{return e + 1})
            setspin(true);
            setTimeout(() => {
                setspin(false)
            }, 3000);
        }
        

    }
    
    const lesshandller=()=>{
        if( number > 1){
            setnum(e=>{return e - 1})
            setspin(true);
            setTimeout(() => {
                setspin(false)
            }, 3000);
        }

        
    }

    return(
        <div className={classes.Paginate}>
            <button className={classes.setpage} spin={spin} setspin={setspin} disabled={disless} onClick={lesshandller}>less</button>
            <button className={classes.setpage} spin={spin} setspin={setspin} disabled={disadd} onClick={addhandller}>add</button>

        </div>
    );
}

export default Paginate;