import React,{useEffect,useContext, useState} from 'react';
import classes from './home.css';
import Header from '../../components/header/header';
import Addlocation from '../../components/addlocation/addlocation';
import Places from '../../components/Places/places';
import Tipical from '../../components/tipical/tipical';
import {Contextauth} from '../../contex/context-auth';
import {Datacontext} from '../../contex/contex-data'
import Spinner  from '../../components/Spinner/Spinner';

const Home =(props)=>{
    


    const getData= useContext(Datacontext).fetch_data
    const getDt= useContext(Datacontext).full_post
  const getme= useContext(Contextauth).getme
  useEffect(()=>{
    getme();
    getData();
  },[])
    const gohandller=()=>{
        
        props.history.push('/profile')
    }
    return(
       getDt?<div  className={classes.home} onAnimationStart={classes.anim} style={{height:window.innerHeight, width: '100%'}}>
           <Header Click={gohandller} ></Header>
           <div className={classes.places}>
           <Addlocation ></Addlocation>
           </div>
           <div className={classes.plac}>
           <Tipical></Tipical>
           <Places></Places>
           </div>
           
       </div>:<Spinner></Spinner>
    )
}
export default Home;

