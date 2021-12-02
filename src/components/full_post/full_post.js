import React from 'react';

import {Card,CardImg,CardBody,CardTitle,  Button} from 'reactstrap'
import aks from '../../assets/img/images (1).png'

const FullPost=(props)=>{
      const changehl=()=>{
            fetch('/api/v1/tours',{
              method:'GET',
              
            }).then((resp) => resp.json()).then(res=>{
               console.log(res.data);
                console.log('vali')
            }).catch(()=>console.log('error'))
      }
    return(
        <form style={{width:'30%'}}>
            <Card >
                <CardImg top src={aks} width='100%' height="30%" ></CardImg>
              <CardBody>
              <CardTitle >jgjfigjdf</CardTitle>
                <Button onClick={changehl} color="primery">vali</Button>
              </CardBody>
                
            </Card>
        </form>
        
    )
}
export default FullPost;