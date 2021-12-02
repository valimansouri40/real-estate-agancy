import React,{useContext} from 'react';
import classes from './header.css';
import rainy from '../../assets/img/sunny.jpg';
import profile from '../../assets/img/profile.png';
import logoutt from '../../assets/img/ic_logout.png';
import { Datacontext } from '../../contex/contex-data';
import {PostContext} from '../../contex/context_post'
const Header =(props)=>{
    const da=useContext(Datacontext).full_post;
    const logout= useContext(PostContext).logouthandller
    
    
    return(
        <header  className={classes.header}>
                <img src={rainy} className={classes.image_head} />
                {da?<img src={profile} onClick={props.Click} title='پروفایل' className={classes.profile}/>:null}
                <img src={logoutt} title='خارج شدن' onClick={logout} className={classes.logout}/>

                <h1 className={classes.h1_head}>مشاورین املاک دهکده</h1>
        </header>
    )
}
export default Header;