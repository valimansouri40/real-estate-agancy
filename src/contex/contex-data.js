import React,{useState} from 'react';
import axios from 'axios';


    export const Datacontext= React.createContext({
        loading: false,
        full_post: null,
        length:null,
        fetch_data:(page,srch)=>{},
        error: false,
        getMyPost:(id,page)=>{},
        search: null,
        serchhandler:(se)=>{},
        getone:(id)=>{},
        dataone:null,
        filter:[],
        MyData:null,
       
    })

  export default props=>{
    const [lengthdt, setlengthdt ]=useState();
    const [post,setpost]=useState()
    const [Mypost,setmypost]=useState()
    const [errordata,seterrordata]=useState(false)
    const [load,setload]=useState(false);
    const [srch,setsrch]=useState(null);
    const [one,setone]=useState(null);
    const [filterpost,setfilterpost]=useState()
    const data= async(page, srch)=>{
        setload(true);
        const api=srch? srch:'1234';
        
       await axios.get(`/api/v1/post/${api}?page=${page}&limit=8`).then(e=>{

        
            setpost(e.data.data)
            setlengthdt(e.data.length)
            setload(false)
            
        }).catch(err=>{
            seterrordata(true);
            setload(false)
            console.log('error')
        })
    }
    const filterhandler=(se)=>{
        setsrch(se);
        //const filt=post.filter(e=>e.tipic === se);
       // setfilterpost(filt)
    }

    const getMyPostInit=(id,page)=>{
        axios.get(`/api/v1/post/getallmyposts/${id}`).then(res=>{
            
            setmypost(res.data.data)
        }).catch(er=>console.log(er))
    }
    const getoneInit=(id)=>{
        axios.get(`/api/v1/post/one/${id}`).then(res=>{
          
            setone(res.data.data)
        }).catch(er=>console.log(er))}
    return(
        <Datacontext.Provider value={{getone:getoneInit,dataone:one,length:lengthdt,full_post: post,getMyPost: getMyPostInit,MyData:Mypost ,fetch_data: data,error:errordata,loading:load, search: srch,serchhandler:filterhandler,
        filter:filterpost}}>
            {props.children}
        </Datacontext.Provider>
    )
  }