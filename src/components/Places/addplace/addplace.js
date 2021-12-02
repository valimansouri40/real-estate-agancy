    import React,{useEffect,useContext,useState,useRef} from 'react';
    import classes from './addplace.css';
    import Input from './Input';
    import {PostContext} from '../../../contex/context_post';
   
    import large from '../../../assets/img/large.png'
    import small from '../../../assets/img/smallest.png'
import BaseMap from '../../BaseMap/BaseMap';
import  Spinner from '../../Spinner/Spinner';
    const Addplace=(props)=>{
        const [image,setimage]=useState()
        
        const [validator,setvalidator]=useState(true)
        const [optionval,setoptionvalue]=useState('');
        const [coordinate, setcoordinate]=useState('');
        const [size,setsize]=useState(false);

        const opi=useRef()
        
        const postplacehandller= useContext(PostContext).postplacehandller;
        const posttrue= useContext(PostContext).post;
        const loading= useContext(PostContext).loading;

        const [dataperson,setdataperson]=useState({
            name:{
                tag:'input',
                proptype:{
                    type:'text',
                    placeholder: 'نام و نام خانوادگی',
                },
                value:'',
                prtouch:false,
                touch:false,
                proplength:{
                    requier:true,
                    maxlength:18,
                    minlength: 2,
                    
                }
            },
            text:{
                tag:'check',
                proptype:{
                    placeholder: 'متن اضافی',
                },
                value:'',

                
                proplength:{
                    requier:true,
                   
                }
            },
            price:{
                tag:'input',
                proptype:{
                    type:'text',
                    placeholder: 'قیمت',
                },
                value:'',
                prtouch:false,
                touch:false,
                proplength:{
                    requier:true,
                    maxlength:15,
                    minlength: 4,
                    isNumeric:true
                }
            },
            addres:{
                tag:'check',
                proptype:{
                    
                    placeholder: 'آدرس',
                },
                value:'',
                
                proplength:{
                    requier:true,
                
                }
            },
            number:{
                tag:'input',
                proptype:{
                    type:'',
                    placeholder: 'شماره',
                },
                value:'',
                prtouch:false,
                touch:false,
                proplength:{
                    requier:true,
                    maxlength:12,
                    minlength: 6,
                    isNumeric:true
                }
            },
            tipic:{
                tag:'select',
                proptype:{
                   option:[
                    {val:'زمین'},
                    {val:'کاری'},
                    {val:'خانه'},
                   ] 
                },
                value:'کاری',
                prtouch:false,
                touch:false,
              
            },
        })
        useEffect(()=>{
            const a=opi.current
            if(selectvalue !== null){
            setoptionvalue(a.value)}
            let validate= true;
         for(let key in dataperson){
             if(dataperson[key].value === ''){
                 validate=false
             }else{
                validate= dataperson[key].touch && validate
             }
             
         }
         
         setvalidator(validate)
     
         
         
        },[validator, dataperson,opi])

        if(posttrue){
            props.history.replace('/');
        }
        const touchhandller=( value, rules )=> {
            let isValid = true;
            if ( !rules ) {
                return true;
            }
    
            if ( rules.requier ) {
                isValid = value.trim() !== '' && isValid;
            }
    
            if ( rules.minlength ) {
                isValid = value.length >= rules.minlength && isValid
            }
    
            if ( rules.maxlength ) {
                isValid = value.length <= rules.maxlength && isValid
            }
    
            if ( rules.isEmail ) {
                const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                isValid = pattern.test( value ) && isValid
            }
    
            if ( rules.isNumeric ) {
                const pattern = /^\d+$/;
                isValid = pattern.test( value ) && isValid
            }
            
            return isValid;
        }
        const inputhandler=(e,id)=>{
         const handler={
             ...dataperson,
             [id]:{
                 ...dataperson[id],
                 value : e.target.value,
                 touch: touchhandller(e.target.value, dataperson[id].proplength) ,
                 prtouch: true,
             }
             
         }
         setdataperson(handler)
         
        }
        const arr=[];
        for(let id in dataperson){
            arr.push({
                config: dataperson[id],
                
                key: id
            })
        }
    
        const filehandller=(e)=>{

           
           setimage(e.target.files)
        
        }
        
        
        
        
        

        let error=null;
       const clicksabt= async()=>{
        

           const Datafrm=new FormData();
           Datafrm.append('Name',dataperson.name.value)
           Datafrm.append('Tipic',dataperson.tipic.value)
           Datafrm.append('extraText',dataperson.text.value)
           Datafrm.append('PhoneNumber',dataperson.number.value)
           Datafrm.append('Price',dataperson.price.value)
           Datafrm.append('address',dataperson.addres.value)
           Datafrm.append('Tipical',optionval)
           if(image){Datafrm.append('photo',image[0] )
           Datafrm.append('photo',image[1] )
           Datafrm.append('photo',image[2] )}
           if(coordinate !== ''){
            Datafrm.append('Location',coordinate?coordinate.lng+ ','+ coordinate.lat:'' )
           }
           
          
           
    
           postplacehandller(Datafrm);
           
       if(posttrue){
           error=<p className={classes.error}>اطلاعات وارد شده صحیح نیست!!!</p>
       }else{
        // window.location.replace('/')
       }
     
       }
       const gobackhandller=()=>{
           
           props.history.goBack()
       }
      
       
       let selectvalue= null;
       switch(dataperson.tipic.value){
           case 'کاری':  selectvalue=<select className={classes.inputform} ref={opi} >
               <option>مغازه</option>
               <option>دفتر اداری</option>
               <option>دفتر تجاری</option>
           </select>
           break
           case 'خانه':  selectvalue=<select className={classes.inputform} ref={opi} >
               <option>آپارتمان</option>
               <option>ویلا</option>
               
           </select>
           break
           case 'زمین':  selectvalue=<select className={classes.inputform} ref={opi} >
               <option>برای ساخت</option>
               <option>کشاورزی</option>
           </select>
           break
       }


       const sizehandller=()=>{
           setsize(e=> {return !e})
       }

       
        
       return !loading?<div className={classes.Addplace} style={{height:'130vh',position:'relative',width:'100%',position:'relative'}}>
                
             <button className={classes.goback} onClick={gobackhandller} >باز گشت به صفحه اصلی</button>
                {error}
               <div className={classes.inp}>
                  
                {arr.map(mp=>(
                     <Input key={mp.key} eltype={mp.config.proptype} elconfig={mp.config.tag} change={e=>inputhandler(e,mp.key)}
                      value={mp.config.value} touch={!mp.config.touch} prtouch={mp.config.prtouch} proplength={mp.config.proptype}  ></Input>
                ))}
                {selectvalue}
                   {size?<div className={classes.loc2}>{!size?<img onClick={sizehandller} className={classes.spn} src={large}/>:
                   <img onClick={sizehandller} className={classes.spn} src={small}/>}<BaseMap size={size} center={[51.387917487548265,35.69558343945812]} click={setcoordinate} popup={coordinate}></BaseMap></div>:
                   <button className={classes.location}onClick={(e)=>setsize(true)}>{!coordinate?'انتخاب موقعیت مکانی':'تغییر موقعیت مکانی'}</button>} 
                <div className={classes.label_img}>
                    <label for='img' title='حداکثر سه تصویر انتخاب کنید' className={classes.label}>{!image?'عکس را وارد کنید':'تغییر عکس ها'}</label> 
                    <input type='file' name='file' multiple id='img'style={{visibility:'hidden',display: 'none'}} onChange={filehandller} />
                   
                </div>
                
                <button className={classes.sabt} onClick={clicksabt} disabled={!validator}>ثبت</button>
               </div>
            </div>:<Spinner/>
        
    }
    export default Addplace;