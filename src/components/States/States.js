import React, { useState,useContext, useEffect } from "react";
import classes from './States.css';
import Search from "../search/search";
import {Datacontext} from '../../contex/contex-data';
import rainy from '../../assets/img/villa.jpg';
import Paginate from "../Paginate/Paginate";
import Spinner  from "../Spinner/Spinner";


const States=(props)=>{
    const [number,setnum]=useState(1);
    const [search,sets]=useState('');
    const[spin,setspin]=useState(false);
    const datainit= useContext(Datacontext).fetch_data;
    const loading= useContext(Datacontext).loading;
    
       
    const searchhandller=()=>{
        datainit(number,search)
       
    }
    const lng= useContext(Datacontext).length;
    const data= useContext(Datacontext).full_post;
    
    
    let fullState=<Spinner/>;
    if(data){
        fullState=!spin?data.map((mp)=>  <div className={classes.state}>
        <img onClick={()=>props.history.replace(`/${mp._id}/place`)} src={mp.imageCover?`data:image/jpg;base64,${mp.imageCover}`:rainy} className={classes.state_img}/>
        <h3 className={classes.state_h3}>{mp.Tipic}</h3>
    </div>):<Spinner/>
    }

    
    

    useEffect(()=>{
        datainit(number);
    },[number])
    const gobackhandller=()=>{
        props.history.replace('/');
    }
    return(
        <div className={classes.State} style={{minHeight:'100vh',width:'100%',background:'rgb(185, 174, 174)',position:'relative'}}>
            <button className={classes.goback} onClick={gobackhandller} >باز گشت به صفحه اصلی</button>
            <header className={classes.header_states}>
                <Search ser={searchhandller} search={search} sets={sets} sz={true}></Search>
            </header>
            <div className={classes.state_box}>
            {!loading?fullState:<Spinner/>}
                <Paginate length={lng} spin={spin} setspin={setspin} number={number} setnum={setnum}></Paginate>
            </div>
        </div>
    );
}

export default States;