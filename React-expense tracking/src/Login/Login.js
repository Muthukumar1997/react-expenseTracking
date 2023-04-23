import  './Login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const Login=()=>{
  const [getForm,setForm]=useState({
    email:'',
    password:''
});
const navigate = useNavigate();
const onClickHandler = () =>{
  navigate('/');
}
const emptyValidation=(value)=>{
    if(value){
        return true;
    }
    else{
        return false;
    }
}
const onChangeHandler=(event)=>{
    setForm({...getForm,[event.target.name]:event.target.value})
}
const onSubmitHandler=(event)=>{
     event.preventDefault();
     if(!emptyValidation(getForm.email)){
        alert("email  cannot be empty");
        return ;
     }
     if(!emptyValidation(getForm.password)){
        alert("password cannot be empty");
        return ;
     }
 axios.get(`http://localhost:3000/registration?email=${getForm.email}&password=${getForm.password}`).then((result)=>{
  console.log(result.data);
  if(result.data && result.data.length>0){
      sessionStorage.setItem('email',getForm.email);
      navigate('/table');
  }else{
      alert("email and password match is not found");
  }
}).catch(()=>{
})
}
    return( 
      <div >
      <nav className="one2 navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#"><i className="fa fa-handshake-o" aria-hidden="true"/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className=" collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {/* <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li> */}
              {/* <li className="nav-item active">
                <a b className="a nav-link" href="http://localhost:3000/about">about</a>
              </li>
              
              
              <li className="nav-item active">
                <a className="nav-link disabled"href="http://localhost:3000/expense">Expense</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link disabled"  href="http://localhost:3000/table">table</a>
              </li> */}
              <li className=" nav-item active">
                <a className="nav-link disabled" onClick={onClickHandler}>signup</a>
              </li>
              {/* <li className=" nav-item active">
                <a className="nav-link disabled">login</a>
              </li> */}
            </ul>
            </div>
            </nav>
            
          
          
        
        <div className="row seven2 ">
          <div className="col-3"></div>
          <div className="page1 col-5">
            <form>
              <p  className=" five2">LOGIN PAGE</p>
             
              <div className=" form-group" >
              <label className="three2 " >Email</label>
                
                <input type="email" className="two2 form-control" onChange={onChangeHandler} name='email'  placeholder="email"/>
               
              </div>
              <div className="form-group">
              <label className="four2" >Password</label>
                
                <input type="password" className="two2 form-control" onChange={onChangeHandler} name='password' placeholder="password"/>
               
              </div>
              <button  type="submit" className='six2 btn btn-primary' onClick={onSubmitHandler}>Login</button>
           
             
              
            </form>
  
          </div>
          <div className=" col-4"></div>
        </div>
     
     
    </div>
      
 )


}
export default Login;















// import styles from './Login.module.css';

// const Login=()=>{
//     return( 
//       <div className="container">
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <a className="navbar-brand" href="#"><i className="fa fa-handshake-o" aria-hidden="true"/></a>
//           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
        
//           <div className=" collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav mr-auto">
//               <li className="nav-item active">
//                 <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//               </li>
//               <li className="nav-item active">
//                 <a b className="a nav-link" href="http://localhost:3000/about">about</a>
//               </li>
              
              
//               <li className="nav-item active">
//                 <a className="nav-link disabled" href="#">services</a>
//               </li>
//               <li className="nav-item active">
//                 <a className="nav-link disabled" href="#">contact</a>
//               </li>
//               <li className=" nav-item active">
//                 <a className="nav-link disabled" href="http://localhost:3000/">signup</a>
//               </li>
//               <li className=" nav-item active">
//                 <a className="nav-link disabled" href="http://localhost:3000/login">login</a>
//               </li>
//             </ul>
//             </div>
//             </nav>
            
          
          
        
//         <div className="row signup">
//           <div className="col-3"></div>
//           <div className="page1 col-5">
//             <form>
//               <p>Login</p>
             
//               <div className=" form-group" id="1">
                
//                 <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email"/>
               
//               </div>
//               <div className="form-group">
                
//                 <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="password"/>
               
//               </div>
//               <button>Login</button>
           
             
              
//             </form>
  
//           </div>
//           <div className="col-4"></div>
//         </div>
     
     
//     </div>
      
//  )


// }
// export default  Login;