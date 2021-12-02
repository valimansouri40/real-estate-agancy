import React from 'react';
import classes from './addplace.css';


const Input=(props)=>{

    let cssclass=[classes.inputform];
        if(props.touch  && props.prtouch){
            cssclass.push(classes.notvalid)
        }
        let Input= null;
        switch(props.elconfig){
            case 'input':
                Input=<input className={cssclass.join(' ')}  {...props.eltype} onChange={props.change} value={props.value} />
                
            case 'input':
                    Input=<input className={cssclass.join(' ')}  {...props.eltype} onChange={props.change} value={props.value} />
                    break    
            case 'check': 
             Input= <textarea  onChange={props.change} {...props.eltype} className={classes.inputform} style={{maxWidth:'70%'}}></textarea>;
             break
             case 'select': 
             Input= <select
             className={cssclass.join(' ')}
             value={props.value}
             onChange={props.change}
             >
                 {props.eltype.option.map((op,ind)=>(
                     <option  key={ind}>
                         {op.val}
                     </option>
                 ))

                 }
             </select>;
             break
             default : Input=<input className={cssclass.join(' ')}  {...props.eltype} onChange={props.change} value={props.value} />
            break
        }
    return Input
      
}
export default Input;