import  './Signup.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Signup=()=>{
   
      const [getForm,setForm]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:''

    });
    const navigate = useNavigate();
 
const onClickHandler = () =>{
  navigate('/login');
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
         if(!emptyValidation(getForm.firstName)){
            alert("first name cannot be empty");
            return ;
         }
         if(!emptyValidation(getForm.lastName)){
          alert("last name  cannot be empty");
          return ;
       }
         if(!emptyValidation(getForm.email)){
            alert("email  cannot be empty");
            return ;
         }
         if(!emptyValidation(getForm.password)){
            alert("password cannot be empty");
            return ;
         }
        //  localStorage.setItem("email",getForm.email);
        //  localStorage.setItem("password",getForm.password);
        //  navigate('/Login');
         axios.post('http://localhost:3000/registration',getForm).then((result)=>{
          console.log(result);
          navigate('/login');
   }).catch((error)=>{
          console.log(error); 
   })
  
    }




    return(  <div >
           
    <nav className="one1 navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"><i className="fa fa-handshake-o" aria-hidden="true"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className=" collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="http://localhost:3000/about">about</a>
            </li>
            
            
            <li className="nav-item active">
              <a className="nav-link disabled" href="http://localhost:3000/expense">Expense</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link disabled" href="http://localhost:3000/table">table</a>
            </li> */}
            {/* <li className=" nav-item active">
              <a className="nav-link disabled" href="http://localhost:3000/">signup</a>
            </li> */}
            <li className="nav-item active">
              <a className="nav-link disabled" onClick={onClickHandler}>login</a>
            </li>
          </ul>
          </div>
          </nav>
          
        
        
      
      <div className="row signup">
        <div className="eigth1 col-3">SIGNUP PAGE</div>
        <div className="page1 col-5">
          <form className='nine1'>
            <div className=" form-group" id="1">
              <label className="three1"  >First Name</label>
              <input type="email" onChange={onChangeHandler} className="two1 form-control"  name="firstName" aria-describedby="emailHelp" placeholder="First Name"/>
             
            </div>
            <div className=" form-group">
              <label className="four1 c">Last Name</label>
              <input type="email" onChange={onChangeHandler} className="two1 form-control" name='lastName' aria-describedby="emailHelp" placeholder="Last Name"/>
             
            </div>
            <div className=" form-group">
              <label className=" five1 c"  >Email address</label>
              <input type="email" onChange={onChangeHandler} className="two1 form-control"  name='email' aria-describedby="emailHelp" placeholder="Enter email"/>
             
            </div>
            <div className=" form-group">
              <label className="six1 c" >Password</label>
              <input type="password" onChange={onChangeHandler} className="two1 form-control" name='password'  placeholder="Password"/>
            </div>
           
            <button type="submit" onClick={onSubmitHandler}  className="seven1 btn btn-primary">SIGN UP</button>
          </form>

        </div>
        <div className=" col-4"></div>
      </div>
   
   
  </div>
    
       
   
  )


}
export default Signup;
















// import stylesA from './Signup.module.css';

// const Signup=()=>{
//     return( 
//      <div >
//     <nav classNameName={`${stylesA.navbar} ${stylesA.navbar-expand-lg} ${stylesA.navbar-light} ${stylesA.bg-light}`}>
//         <a classNameName="navbar-brand" href="#"><i classNameName="fa fa-handshake-o" aria-hidden="true"/></a>
//         <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span classNameName="navbar-toggler-icon"></span>
//         </button> 
      
//         <div classNameName=" collapse navbar-collapse" id="navbarSupportedContent">
//           <ul classNameName="navbar-nav mr-auto">
//             <li classNameName="nav-item active">
//               <a classNameName="nav-link" href="#">Home <span classNameName="sr-only">(current)</span></a>
//             </li>
//             <li classNameName="nav-item active">
//               <a classNameName="nav-link" href="http://localhost:3000/about">about</a>
//             </li>
            
            
//             <li classNameName="nav-item active">
//               <a classNameName="nav-link disabled" href="#">services</a>
//             </li>
//             <li classNameName="nav-item active">
//               <a classNameName="nav-link disabled" href="#">contact</a>
//             </li>
//             <li classNameName=" nav-item active">
//               <a classNameName="nav-link disabled" href="http://localhost:3000/">signup</a>
//             </li>
//             <li classNameName="nav-item active">
//               <a classNameName="nav-link disabled" href="http://localhost:3000/login">login</a>
//             </li>
//           </ul>
//           </div>
//           </nav>
          
        
        
      
//       <div classNameName="row signup">
//         <div classNameName="col-3"></div>
//         <div classNameName="page1 col-5">
//           <form>
//             <div classNameName=" form-group" id="1">
//               <label classNameName="c"  for="exampleInputEmail1">First Name</label>
//               <input type="email" classNameName="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name"/>
             
//             </div>
//             <div classNameName="form-group">
//               <label classNameName="c"  for="exampleInputEmail1">Last Name</label>
//               <input type="email" classNameName="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name"/>
             
//             </div>
//             <div classNameName=" form-group">
//               <label classNameName="c"  for="exampleInputEmail1">Email address</label>
//               <input type="email" classNameName="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
             
//             </div>
//             <div classNameName=" form-group">
//               <label classNameName="c" for="exampleInputPassword1">Password</label>
//               <input type="password" classNameName="form-control" id="exampleInputPassword1" placeholder="Password"/>
//             </div>
           
//             <button type="submit" classNameName="btn btn-primary">SIGN UP</button>
//           </form>

//         </div>
//         <div classNameName="col-4"></div>
//       </div>
   
   
//   </div>
    
       
   
//   )


// }
// export default Signup;



// import  './Signup.module.css';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

// const Signup=()=>{
   
//       const [getForm,setForm]=useState({
//         firstName:'',
//         lastName:'',
//         email:'',
//         password:''

//     });
//     const navigate = useNavigate();

//     const emptyValidation=(value)=>{
//         if(value){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }

//     const onChangeHandler=(event)=>{
//         setForm({...getForm,[event.target.name]:event.target.value})
//     }
//     const onSubmitHandler=(event)=>{
//          event.preventDefault();
//          if(!emptyValidation(getForm.firstName)){
//             alert("first name cannot be empty");
//             return ;
//          }
//          if(!emptyValidation(getForm.lastName)){
//           alert("last name  cannot be empty");
//           return ;
//        }
//          if(!emptyValidation(getForm.email)){
//             alert("email  cannot be empty");
//             return ;
//          }
//          if(!emptyValidation(getForm.password)){
//             alert("password cannot be empty");
//             return ;
//          }
//          localStorage.setItem("email",getForm.email);
//          localStorage.setItem("password",getForm.password);
//          navigate('/Login');
//     }




//     return(  <div >
//            {/* <nav classNameName={`${stylesA.navbar} ${stylesA.navbar-expand-lg} ${stylesA.navbar-light} ${stylesA.bg-light}`}></nav> */}
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <a className="navbar-brand" href="#"><i className="fa fa-handshake-o" aria-hidden="true"/></a>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
      
//         <div className=" collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item active">
//               <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//             </li>
//             <li className="nav-item active">
//               <a className="nav-link" href="http://localhost:3000/about">about</a>
//             </li>
            
            
//             <li className="nav-item active">
//               <a className="nav-link disabled" href="#">services</a>
//             </li>
//             <li className="nav-item active">
//               <a className="nav-link disabled" href="#">contact</a>
//             </li>
//             <li className=" nav-item active">
//               <a className="nav-link disabled" href="http://localhost:3000/">signup</a>
//             </li>
//             <li className="nav-item active">
//               <a className="nav-link disabled" href="http://localhost:3000/login">login</a>
//             </li>
//           </ul>
//           </div>
//           </nav>
          
        
        
      
//       <div className="row signup">
//         <div className="col-3"></div>
//         <div className="page1 col-5">
//           <form>
//             <div className=" form-group" id="1">
//               <label className="c"  >First Name</label>
//               <input type="email" onChange={onChangeHandler} className="form-control"  name="firstName" aria-describedby="emailHelp" placeholder="First Name"/>
             
//             </div>
//             <div className="form-group">
//               <label className="c">Last Name</label>
//               <input type="email" onChange={onChangeHandler} className="form-control" name='lastName' aria-describedby="emailHelp" placeholder="Last Name"/>
             
//             </div>
//             <div className=" form-group">
//               <label className="c"  >Email address</label>
//               <input type="email" onChange={onChangeHandler} className="form-control"  name='email' aria-describedby="emailHelp" placeholder="Enter email"/>
             
//             </div>
//             <div className=" form-group">
//               <label className="c" >Password</label>
//               <input type="password" onChange={onChangeHandler} className="form-control" name='password'  placeholder="Password"/>
//             </div>
           
//             <button type="submit" onClick={onSubmitHandler}  className="btn btn-primary">SIGN UP</button>
//           </form>

//         </div>
//         <div className="col-4"></div>
//       </div>
   
   
//   </div>
    
       
   
//   )


// }
// export default Signup;
