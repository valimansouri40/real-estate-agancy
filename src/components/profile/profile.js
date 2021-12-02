import React,{useState,useEffect,useContext} from 'react';
import classes from './profile.css';
import { Datacontext } from '../../contex/contex-data';
import {Contextauth} from '../../contex/context-auth';
import Spinner from '../Spinner/Spinner'
import Paginate from '../Paginate/Paginate';
import rainy from '../../assets/img/villa.jpg';
const Profile=(props)=>{

    const [number,setnum]=useState(1);
    const[spin,setspin]=useState(false);
    
    
    
    
    
    const getdata=useContext(Datacontext).getMyPost;
    const data=useContext(Datacontext).MyData;
    const my= useContext(Contextauth).token;
    let lng;
    if(data){
    lng= data.length
    
    }
    useEffect(()=>{
        
        if(my){
            getdata(my._id,number);
        }
        
    },[number])
    
    const gobackhandller=()=>{
        props.history.goBack();
    }
    return(
<div className={classes.State} style={{minHeight:'100vh',width:'100%',background:'rgb(185, 174, 174)',position:'relative'}}>
            <button className={classes.goback} onClick={gobackhandller} >باز گشت به صفحه اصلی</button>
            <header className={classes.header_states}>
               <h3 className={classes.h3}>پست های من</h3>
            </header>
            <div className={classes.state_box}>
            {data?data.map((mp)=>  <div className={classes.state}>
                    <img onClick={()=>props.history.replace(`/${mp._id}/place`)} src={mp.imageCover?`data:image/jpg;base64,${mp.imageCover}`:rainy} className={classes.state_img}/>
                    <h3 className={classes.state_h3}>{mp.Tipic}</h3>
                </div>):<Spinner/>}
                <Paginate length={lng} spin={spin} setspin={setspin} number={number} setnum={setnum}></Paginate>
            </div>
        </div>

        
    );
}
export default Profile;