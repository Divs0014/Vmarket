import React ,{useState} from "react";

import {Link} from 'react-router-dom';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import Veg from './img/singup.jpg';
import styled from 'styled-components';
const Login = () => {
  const[email , setEmail] = useState()
  const[password ,setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login',{email,password})
    .then(result => {console.log(result)
      if(result.data === "Success"){
        navigate('/Products')
      }
      
    })
    .catch(err=> console.log(err))
  }

  return (
    <Wrapper>
    <div className="Container">
        <div className="Login">
          <form  className="FORM"onSubmit={handleSubmit}>
            <h1 className="l_h1">Login</h1>
            <hr className="l_hr" />
            <p className="l_p">Explore the World!</p>
            <label className="l_label">Email</label>
            <input className="l_input" type="text" placeholder="abc@example.com" name="email" onChange={(e) => setEmail(e.target.value)} />
            <label  className="l_label">Password</label>
            <input  className="l_input" etype="password" placeholder="Enter your password!" name="password" onChange={(e) => setPassword(e.target.value)} />
            <button id="submit" type="submit" >Submit</button>
            <p className="l_p">
              Not a member? <Link to="/SignUp" style={{ color: 'blue' }}>Sign-Up</Link>
            </p>
          </form>
        </div>
        <div className="l_pic">
          <img src={Veg} alt="Vegetable" />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
width:100%;

.Container{
    
    margin: auto;
    height: 700px;
    width: 100%;
    display: flex;
    max-width: 850px;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    flex-direction: row;
}
.Login{
    width: 400px;
     flex: 1;
}
.FORM{
    width: 250px;
    font-family: 'Montserrat', sans-serif;
    margin: 60px auto;
}
.l_h1{
    margin: 20px;
    text-align: center;
    font-weight: bolder;
    text-transform: uppercase;
}
.l_p{
    text-align: center;
    margin: 10px;
}
.l_hr{
    border-top: 2px solid tomato;
}

.l_pic img{
    width: 450px;
    height: 100%;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
}

.l_label{
    display: block;
    font-size: 16px;
    font-weight: 600;
    padding: 5px;

    
}
.l_input{
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
export default Login;