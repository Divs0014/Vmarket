import React ,{useState} from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import Veg from './img/login.jpg'
import styled from 'styled-components';
const Accounts = () =>{
  const[email , setEmail] = useState()
  const[phone , setPhone] = useState()
  const[password ,setPassword] = useState()
const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register',{email,phone,password})
    .then(result => {console.log(result)
    navigate('/login')   //put path for homepage here 
    })
    .catch(err=> console.log(err))
  }
  

  return (
    <Wrapper>
    <div className="L_container">
      <div className="Login">
        <form className="Login_form"onSubmit={handleSubmit}>
          <h1 className="L_h1">Sign Up</h1>
          <hr className="L_hr"/>
          <p className="L_p">Welcome !</p>
          <label className="L_label">Email</label>
          <input className="L_input" type="text" name="email" placeholder="abc@example.com" onChange={(e) => setEmail(e.target.value)} />
          <label className="L_label">Phone</label>
          <input className="L_input" type="number" name="phone" placeholder="9123876105" onChange={(e) => setPhone(e.target.value)}/>
          <label className="L_label">Password</label>
          <input className="L_input" etype="password" name="password" placeholder="Enter Your Password!" onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" id="submit">Submit</button>  
        </form>
        <p className="L_p">Already a member? <Link to="/login" style={{ color: 'blue'}}>Login</Link> </p>
        
      </div>
      <div className="pic">
        <img src={Veg} alt="Vegetable" />
      </div>
    </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Carter+One&family=Comfortaa:wght@700&family=Lobster+Two:ital,wght@1,700&family=Montserrat:wght@500&family=Rubik:wght@300&display=swap');
.L_container{
    font-family: 'Montserrat', sans-serif;
    margin: auto;
    width: 100%;
    display: flex;
    height:700px;
    max-width: 850px;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
.Login{
    width: 400px;
}
.Login_form{
    width: 250px;
    margin: 60px auto;
}
.L_h1{
    margin: 20px;
    text-align: center;
    font-weight: bolder;
    text-transform: uppercase;
}
.L_p{
    text-align: center;
    margin: 10px;
}
.L_hr{
    border-top: 2px solid tomato;
}

.pic img{
    width: 450px;
    height: 100%;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
}

.L_label{
    display: block;
    font-size: 16px;
    font-weight: 600;
    padding: 5px;
}
.L_input{
    width: 100%;
    margin: 2px;
    border: none;
    outline: none;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid gray;
}
#submit{
    border: none;
    outline: none;
    padding: 8px;
    width: 252px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 5px;
    background: green;
}
#submit:hover{
    background: rgba(214, 86, 64, 1);
}

`;
export default Accounts;

