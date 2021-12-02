import React,{useState,useEffect,useContext} from 'react';
 import classes from './auth.css';
import  {Contextauth} from '../../contex/context-auth';
import axios from 'axios';



 const Auth=()=>{
     const authenticate= useContext(Contextauth).auth;
     
    const [authform, setauthform]=useState({ email:{
        proptype:{
            type: 'email',
            placeholder:'ایمیل',
            
        },
        proplength:{
            required: true,
            isEmail: true
            
        },
        value:'',
        valid:false,
        touch: false,
    },
    password:{
        proptype:{
            type: 'password',
            placeholder:'رمز عبور'
        },
        proplength:{
            required: true,
            maxlength:20,
            minlength: 6,
        },
        value:'',
        valid:false,
        touch: false,
    },
});

    const [disab, setdisab]= useState(false);
    const [signup,setsinup]= useState(true);

useEffect(()=>{
        if(!signup){
            setauthform({
                FristName:{
                    proptype:{
                        type: 'text',
                        placeholder:'نام کوچک'
                    },
                    proplength:{
                        required: true,
                        maxlength:20,
                        minlength: 3,
                    },
                    value:'',
                    valid:false,
                    touch: false,
                },
                LastName:{
                    proptype:{
                        type: 'text',
                        placeholder:'نام بزرگ'
                    },
                    proplength:{
                        required: true,
                        maxlength:20,
                        minlength: 3,
                    },
                    value:'',
                    valid:false,
                    touch: false,
                },
                email:{
                    proptype:{
                        type: 'email',
                        placeholder:'ایمیل',
                        
                    },
                    proplength:{
                        required: true,
                        isEmail: true
                        
                    },
                    value:'',
                    valid:false,
                    touch: false,
                },
                password:{
                    proptype:{
                        type: 'password',
                        placeholder:'رمز عبور'
                    },
                    proplength:{
                        required: true,
                        maxlength:20,
                        minlength: 6,
                    },
                    value:'',
                    valid:false,
                    touch: false,
                },
                passwordConfirm:{
                    proptype:{
                        type: 'password',
                        placeholder:'رمز عبور را تایید کنید'
                    },
                    proplength:{
                        required: true,
                        maxlength:20,
                        minlength: 6,
                    },
                    value:'',
                    valid:false,
                    touch: false,
                }
            })
        }else{
            setauthform({
                email:{
                    proptype:{
                        type: 'email',
                        placeholder:'ایمیل',
                        
                    },
                    proplength:{
                        required: true,
                        isEmail: true
                        
                    },
                    value:'',
                    valid:false,
                    touch: false,
                },
                password:{
                    proptype:{
                        type: 'password',
                        placeholder:'رمز عبور'
                    },
                    proplength:{
                        required: true,
                        maxlength:20,
                        minlength: 6,
                    },
                    value:'',
                    valid:false,
                    touch: false,
                },
            })
        }
},[signup])

    
    const changehandler=(event,rul)=>{
        let valid= true;
        if(!rul){
            return true
        }
        if(rul.required){
            valid= event.trim() !== '' && valid
        }
        if ( rul.minlength ) {
            valid = event.length >= rul.minlength && valid
        }

        if ( rul.maxlength ) {
            valid = event.length <= rul.maxlength && valid
        }
        
        if ( rul.isEmail ) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            valid = pattern.test( event ) && valid
        }
        return valid;
    }
    const authhandller=(event,id)=>{
        const change= {
            ...authform,
            [id]:{
                ...authform[id],
                value: event.target.value,
                touch:true,
                valid: changehandler(event.target.value, authform[id].proplength)
            }
        } 
        let dis=true;
        for(let key in authform){
            dis = authform[key].valid && dis
        }
        setdisab(dis)
        setauthform(change);
    }
    
    const arr=[];
    for(let key in authform){
        arr.push({
            config: authform[key],
            id: key
        })
    }
    const clickauth= ()=>{
        
        let authData;
        if(!signup){ authData = {
            Email: authform.email.value,
            Password: authform.password.value,
            PasswordConfirm:authform.passwordConfirm.value,
            LastName:authform.LastName.value,
            FristName:authform.FristName.value };}
            else{
                authData={
                    Email: authform.email.value,
            Password: authform.password.value,
                }
            }
            
          
            authenticate(authData,signup);
        
    }
    const clicksine=()=>{
        setsinup(e=>!e)
    }
    console.log(authform)
    return(
        <div className={classes.auth} style={{width:'100%',height:window.innerHeight}}>
            <div className={classes.box}>
            {arr.map(mp=>(
                <input className={mp.config.touch && !mp.config.valid ? classes.notvalid:classes.auth_input}
                 {...mp.config.proptype} {...mp.config.value} onChange={e=>authhandller(e,mp.id)}/>
            ))}
            <button className={classes.button} onClick={clickauth} disabled={!disab}>ورود</button>
            <button className={classes.button} onClick={clicksine} >{signup?'sine up':'sine in'}</button>
            </div>
        </div>

    );
 }
 export default Auth;