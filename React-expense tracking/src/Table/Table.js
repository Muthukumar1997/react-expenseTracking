import Expense from '../Expense/Expense';
import  './Table.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';



const Table=()=>{
  const [getList, setList] = useState([]);
  const navigate = useNavigate();
  const onClickHandler = () =>{
    navigate('/expense');
 }
 const onClickHandler2 = () =>{
  navigate('/about');
}
 const onClickHandler3 = () =>{
  navigate('/login');
}

const getListAPI = () => {
  axios.get(`http://localhost:3000/expense`).then((result) => {
    setList(result.data);
  }).catch(() => {

  })
}
useEffect(() => {
  getListAPI();
}, [])





    return(  <div >
     
    <div className="row">
    <nav className="one5 navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"><i className="fa fa-handshake-o" aria-hidden="true"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className=" c" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li> */}
            <li className="nav-item active">
              <a className="nav-link" onClick={onClickHandler2}>About</a>
            </li>
            
            
            <li className="nav-item active">
              <a className="nav-link disabled" onClick={onClickHandler}>Expense</a>
            </li>
            {/* <li className="nav-item active">
              <a className="nav-link disabled"  >Table</a>
            </li> */}
            {/* <li className=" nav-item active">
              <a className="nav-link disabled" href="http://localhost:3000/">signup</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link disabled" href="http://localhost:3000/login">login</a>
            </li> */}
            <li className="nav-item active">
              <a className=" nav-link disabled"  onClick={onClickHandler3} >Logout    <i class="fa fa-sign-out"></i></a>
            </li>
          </ul>
          </div>
          </nav>
       <table className="two5 table ">
           <thead >
             <tr>
               <th scope="col" className="col-1">SI NO</th>
               <th scope="col"className="col-2">EXPENSE TITLE</th>
               <th scope="col"className="col-2">EXPENSE AMOUNT</th>
               <th scope="col"className="col-2">EXPENSE BRANCH</th>
               <th scope="col"className="col-2">PAID TO</th>
               <th scope="col"className="col-1">PAID BY</th>
               <th scope="col"className="col-4">DATE</th>
             </tr>
           </thead>
           <tbody  >
           {
                        getList.map((obj,index)=>{
                            return ( <tr key={index}>
                              <th scope="row">{index+1}</th>
                              <td>{obj.expenseTitle}</td>
                              <td>{obj.expenseNotes}</td>
                              <td>{obj.expenseCategory}</td>
                              <td>{obj.expenseAmount}</td>
                              <td>{obj.paidBy}</td>
                              <td>{obj.expenseDate}</td>
                              
                            </tr>)
                        })
                      }


         
           
            
            
           </tbody>
         </table>

   
 </div>
</div>
      );


}
export default Table;