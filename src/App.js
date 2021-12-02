import React,{Suspense, useContext, useEffect, useState} from 'react';
import Home from './continar/home/home';
import {Switch,Route} from 'react-router-dom';

import Placefocus from './components/Places/placefocus/placefocus';
import {Contextauth} from './contex/context-auth';


import States from './components/States/States';
import Spinner  from './components/Spinner/Spinner';


function App(){

  const Profile= React.lazy(()=>{
    return import('./components/profile/profile')
  })
  const Addplace= React.lazy(()=>{
    return import('./components/Places/addplace/addplace');
  })
  const Auth =React.lazy(()=>{
    return import('./components/auth/auth')
  })
  const token= useContext(Contextauth).token;
  const getme= useContext(Contextauth).getme;
  
  useEffect(()=>{
    
    getme();
   
  },[])
    
  //C:\Users\afv2354\AppData\Roaming\npm\serve

  
  let tok= <Auth></Auth>;
  
  if(token){
    tok= <Switch>
    <Route path='/place'  component={Placefocus}/>
    <Route path='/' exact  component={Home}/>
    <Route path='/addplace' component={Addplace}/>
    <Route path='/profile' component={Profile}/>
    <Route path='/:tipic/place' component={Placefocus}/>
    <Route path='/compelet/places' component={States}/>
    </Switch>
  }
  return(
    <div>
     <Suspense fallback={<Spinner/>}>
     {tok}
     </Suspense>
      
    </div>
  )
}

export default App;