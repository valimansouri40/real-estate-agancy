import React,{useState} from 'react';
import axios from 'axios';
import  {showAlert}  from '../components/alert/alert';


export const Contextauth= React.createContext({
    token:null,
    //userid: null,
    loading:false,
    error:false,
    auth:(authData,sineup)=>{},
    getme:()=>{},
    socket:null
})

export default props=>{
    const [token,settoken]=useState()
    
    const [errordata,seterrordata]=useState(false)
    const [load,setload]=useState(false);
   

    const getMiInit=()=>{
        axios.get('/api/v1/user/getme').then(res=>{
             
                settoken(res.data.data);
         }).catch(er=>console.log(er))
    }

    const authentication=async(authData,sine)=>{
        setload(true)
       
        let url = 'login';
        if (!sine) {
            url = 'sineup';
        }
        
       await axios.post(`/api/v1/user/${url}`,authData).then(res=>{
            
            if(res.data.data){
               
                window.location.reload();
                window.location.replace('/')
                showAlert('succes','خوش آمدید')
            }else if(res.data.status !== 'succes'){
                showAlert('fail','اطلاعات وارد شده صحیح نمی باشد')
            }
            
        }).catch(er=>{
            
            showAlert('fail','سایت دچار مشکل شده است')
        })

       
    }
    return(
        <Contextauth.Provider value={{auth:authentication, getme:getMiInit, loading:load, error:errordata,token: token}}>
        {props.children}</Contextauth.Provider>
    )
}