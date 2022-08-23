
import React,{useState} from 'react';
import "react-bootstrap";
import '.././sass/app.scss';
import { signup} from '.././util/APIUtils';

export default function SignUp () {
  
const [actName,setFullname]=useState("");
const [actUsername,setUsername]=useState("");
const [actEmail,setEmail]=useState("");
const [actPassword,setPassword]=useState("");
const signupRequest = {
  name: actName,
  email: actEmail,
  username: actUsername,
  password: actPassword      };
  console.log(signupRequest.name)
  signup(signupRequest)
      .then(response => {
          alert.success({
          
              message: 'Digital Equb',
              description: "Thank you! You're successfully registered. Please Login to continue!",
          });          
          this.props.history.push("/login");
      }).catch(error => {
          alert.error({
              message: 'Digital Equb',
              description: error.message || 'Sorry! Something went wrong. Please try again!'
          });
      });
 
  return(
    <>
    <div className="jobApp w-100 flex-row d-flex justify-content-center">
    <form >
      <h3 className="text-center text-success ">Sign Up</h3>
    <div className="form-group mt-3">
   
    <input  value ={actName} onChange={(event)=>setFullname(event.target.value)} type="text" className="form-control bg-white" id="InputFullName"  placeholder="Enter fullname"/>
   
  </div>
  <div className="form-group mt-3">
   
    <input  value ={actUsername} onChange={(event)=>setUsername(event.target.value)} type="text" className="form-control bg-white" id="InputUsername"  placeholder="Enter Username"/>
   
  </div>
  
  <div className="form-group mt-4">
   
    <input value ={actEmail} onChange={(event)=>setEmail(event.target.value)} type="email" className="form-control bg-white" id="InputEmail"  placeholder="Enter email"/>
    
 
 
  </div>
 
  
  <div className="form-group mt-4">
   
    <input  value ={actPassword} onChange={(event)=>setPassword(event.target.value)} type="password" className="form-control bg-white"  placeholder="Enter password"/>
     </div>
 
  <div className="form-group mt-4">
  
    
  
  <button type="submit" className="btn btn-primary rounded mt-3" onClick={() => signup()}>Submit</button>
</div>
</form>

        </div>
        </>
        
    );}

    