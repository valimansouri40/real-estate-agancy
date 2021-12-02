import React,{useState,useEffect,useContext} from 'react';
import classes from './placefocus.css';
import sun from '../../../assets/img/sunny.jpg';
import {useParams} from 'react-router-dom';
import {Datacontext} from '../../../contex/contex-data';
import BaseMap from '../../BaseMap/BaseMap';
import large from '../../../assets/img/large.png';
import small from '../../../assets/img/smallest.png';
import rainy from '../../../assets/img/rainwinter.jpg'
import Spinner from '../../Spinner/Spinner';

    const Placefocus=(props)=>{
        
        const ctxdatainit= useContext(Datacontext).getone;
        const ctxdata= useContext(Datacontext).dataone;
        
        
        const prs= useParams().tipic;
        useEffect(()=>{
            

                ctxdatainit(prs);
            
        },[])
        
        
        const [numb,setnum]=useState(0);
        
        const [loc,setloc]=useState(false);
   
            let num;
            if(ctxdata){
                 num= ctxdata.Price;
                
                 num=num.toLocaleString()
                 
            }
           
            

       
        const addclick=()=>{
                if(ctxdata.photo.length -1  > numb){
                    setnum(e=> e + 1);
                }else{
                    setnum(0)
                }
                
        }
       const lessclick=()=>{
         if(numb === 0){
            setnum(ctxdata.photo.length -1)
        }else if(numb === ctxdata.photo.length ){
            setnum(e=> e - 1);
        }else{
            setnum(e=> e - 1);
        }
        
       }

       const gobackhandller=()=>{
           props.history.goBack()
       }
      
        return ctxdata?
            
                <div className={classes.placefocus} >
                <span className={classes.span1} onClick={addclick}> {'>'}</span>
    <span className={classes.span2} onClick={lessclick}>{'<'}</span>
 <div className={classes.place_data} style={{width:'100%',minHeight: window.innerHeight }} >
    <div className={classes.photo}>
    
    <img src={ctxdata.photo.length !==0?`data:image/jpg;base64,${ctxdata.photo[numb]}`:rainy} className={classes.sun} />
    
        </div> 
        <div className={classes.div}><p className={classes.pragraf}> نوع</p > <p className={classes.pragraf}> {ctxdata.Tipic}</p></div> 
        <div className={classes.div}><p className={classes.pragraf}> کاربری</p> <p className={classes.pragraf}> {ctxdata.Tipical}</p></div> 
        <div className={classes.div}><p className={classes.pragraf}> قیمت</p> <p className={classes.pragraf}> {num +' '+ 'ریال'} </p></div> 
        <div className={classes.div}><p className={classes.pragraf}> توضیحات</p> <p className={classes.pragraf}> {ctxdata.extraText}</p></div> 
        <div className={classes.div}><p className={classes.pragraf}> شماره تلفن</p> <p className={classes.pragraf}> {ctxdata.PhoneNumber}</p></div> 
        <div className={classes.div}><p className={classes.pragraf}> آدرس</p> <p className={classes.pragraf}> {ctxdata.address}</p></div> 
        <div className={classes.div}><p className={classes.pragraf}> نام</p> <p className={classes.pragraf}> {ctxdata.Name}</p></div> 
        {ctxdata.Location?<div className={classes.div}><button className={classes.locationpst} onClick={()=>{setloc(true)}}>موقعیت مکانی</button>
        </div>:null} 
 </div> 
 
 <button className={classes.goback} onClick={gobackhandller} >باز گشت به صفحه اصلی</button>

 {loc?<div className={!loc?null: classes.loc2}>{!loc?null:
           <img onClick={()=>setloc(false)} className={classes.spn} src={small}/>}<BaseMap size={loc} center={ctxdata.Location.split(',')}  popup={ctxdata.Location.split(',')}></BaseMap></div> :null}
</div>
            
        :<Spinner/>
    }
    export default Placefocus;