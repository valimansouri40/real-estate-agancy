import React,{useState} from 'react';
import axios from 'axios';
import  {showAlert} from '../components/alert/alert';

export const PostContext= React.createContext({
   // place:[],
   loading:false,
   post:'',
    error:false,
    postplacehandller:(data)=>{},
    logouthandller:()=>{}
    //getplacehandller:()=>{}
})

export default props=>{
  
    const [post, setpost]=useState(false)
    const [error, seterror]=useState(false);
   
   const posthandller =(data)=>{
    
    seterror(true);
    axios.post('https://vaskkfjad.herokuapp.com/api/v1/post',data)
    .then(res=>{
        
        if(res.data.data){
                
                showAlert('succes','آگهی با موفقیت ثبت شد')
         
        
            seterror(false)
            window.location.reload();
            
            setpost(true)
        }
        setpost(false)
        showAlert('fail','اطلاعات وارد شده صحیح نمی باشد')
       
    }).catch(er=>{
        showAlert('fail','سایت دچار مشکل شده است.')
        setpost(false)
       
    })
   }

   const logouthandller=()=>{
       axios.post('https://vaskkfjad.herokuapp.com/api/v1/user/logout').then(res=>{
           setTimeout(()=>{
            window.location.reload()
           },[2000])
            
       }).catch(er=>{
           console.log(er)
       })
   }
    return(
        <PostContext.Provider value={{logouthandller:logouthandller,post:post,postplacehandller: posthandller,loading:error }}>
            {props.children}
        </PostContext.Provider>
    )
}