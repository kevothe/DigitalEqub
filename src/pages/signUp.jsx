import React from 'react';
import { useForm } from "react-hook-form";
import "react-bootstrap";
import '.././sass/app.scss';

export default function     SignUp () {
const{register,handleSubmit,formState:{errors}}=useForm();
  return(
    <>
    <div className="jobApp w-100 flex-row d-flex justify-content-center">
    <form onSubmit={handleSubmit((data=>console.log(data)) )}>
      <h3 className="text-center text-success ">Sign Up</h3>
    <div className="form-group mt-3">
   
    <input {...register("firstName",{ pattern:{
      value:/^[A-Za-z]+$/,
      message:"please enter your first name"
    } }, { required: "first name is required"
  })} type="text" className="form-control bg-white" id="InputFirstName" aria-describedby="emailHelp" placeholder="Enter firstname"/>
    <p> {errors.firstName?.message}</p>
  </div>
  
  <div className="form-group mt-4">
   
    <input {...register("lastName" ,{ pattern:{
      value:/^[A-Za-z]+$/,
      message:"please enter your last name"
    } },{ required: "lastname is required"
    })} type="text" className="form-control bg-white" id="InputFirstName" aria-describedby="emailHelp" placeholder="Enter lastname"/>
    
    <p > {errors.lastName?.message}</p>
 
  </div>
 
  <div className="form-group mt-4">
   
    <input {...register("email" ,{pattern:{
      value:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
      message:"Please enter a valid email address"
    }
    })} type="email" className="form-control bg-white"  aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
 
  </div>
  <div className="form-group mt-4">
   
    <input {...register("password" , {pattern:{
      value:/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/,
      message:"password must be at least 6 characters long and must contain a number and special character"
    }
  
  })} type="password" className="form-control bg-white"  aria-describedby="emailHelp" placeholder="Enter password"/>
     </div>
 
  <div className="form-group mt-4">
  
    <input {...register("phone" ,{
      pattern:{
        value:/[1-4]/g,
        message:"Phone number must be a valid phone number"
      }
    })} type="tel" className="form-control bg-white"  aria-describedby="emailHelp" placeholder="phone"/>
     
  
  <div className="form-group mt-4">
 
  
  </div>
  
  <button type="submit" className="btn btn-primary rounded mt-3">Submit</button>
</div>
</form>

        </div>
        </>
        
    );}