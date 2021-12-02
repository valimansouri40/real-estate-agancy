import React ,{Component} from 'react';
import classes from '../addplace.css';

class Uploadimage extends Component{

    state={
        images:[]
    }
    
    onImageChange = event => {
      
  
      this.setState({
        images: event.target.files,
      });
      event.preventDefault();
  
      const formData = new FormData();
  
      Array.from(this.state.images).forEach(image => {
        formData.append('files', image);
      });
      
    };
  
    
    render(){

        return(
            <div className={classes.label_img}>
            <label for='img' className={classes.label}>عکس را وارد کنید</label> 
            <input type='file' name='files' multiple id='img'style={{visibility:'hidden',display: 'none'}} onChange={this.onImageChange} />
            
            
    {this.state.images?<div ><img  src={this.state.images[0]} 
        className={classes.index_image}/></div>:null}
           
        </div>
        )
    }
}
export default Uploadimage;