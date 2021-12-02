import React,{useState,useEffect,useContext,useCallback} from 'react';
import classes from './places.css';
import photo1 from '../../assets/img/16857264_XL.jpg'
import {Link} from 'react-router-dom';
import {Datacontext} from '../../contex/contex-data';
const Places=()=>{
    const detdata=useContext(Datacontext).fetch_data;
    const dataful=useContext(Datacontext).full_post;
    const load = useContext(Datacontext).loading;
    const  [use, setuse]=useState(false)
     
    useEffect(()=>{
        detdata()
        
        
            if(load){
                setuse(true)
            }
        
    },[])

        
    
    
    
    let post= null;
    if(dataful){
       post= dataful.map(id=>(
                   
            <div  key={id.id}  className={classes.ja} >
                <Link to={`/${id._id}/place`}>
                    
                <img src={id.imageCover?`data:image/jpeg;base64,${id.imageCover}`: photo1} className={classes.image} />
                </Link>
                <p className={classes.pra}> {id.Tipic} </p>
                
            </div>
            
        ))
    }
    return(
       
           <div className={classes.place_sec}>
               <div className={classes.Places}>
                {post}
                </div>
           </div>
   
    )
}
export default Places;