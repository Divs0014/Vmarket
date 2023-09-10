
import styled from 'styled-components';
import React ,{useState} from "react";
import axios from "axios";
import Veg from './img/pexels-chepté-cormani-1416530.jpg';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const Wrapper = styled.div`
   background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${Veg});
    font-family: 'Poppins', sans-serif;
    min-height: 650px;

.container {
    font-family: 'Roboto', sans-serif;
    width: 80%;
    margin: 0px 0px 0px 20.0rem;
    
}

.contact-box {
    display: flex;
    padding-top:8.0rem;
}

.contact-left {
    flex-basis: 60%;
    padding: 40px 60px;
    background: rgba(255, 255, 255, 0); 
    border: 1px solid rgba(255, 255, 255, 0.1); /* Adjust alpha (0.5) for transparency */
    backdrop-filter: blur(10px);
    font-size:1.4rem;
}

.contact-right {
    flex-basis: 40%;
    padding: 40px;
    background: rgba(85, 85, 85, 0.2); /* Adjust alpha (0.5) for transparency */
    color: #ffffff;
    font-size:1.50rem;
    backdrop-filter: blur(10px);
}

h1{
    margin-bottom:10px;
   

}
.container p{
    margin-bottom: 40px;

}
.input-row{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    
}
.input-group{
    flex-basis: 45%;
}
.container input{
    width:100%;
    border:none;
    outline:none;
    padding-bottom: 5px;
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0,0, 0.3); 
    color:#fff; 
}
.container textarea{
    width: 100%;
    outline:none;
    border:none;
    padding:10px;
    box-sizing: border-box;
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0,0, 0.3); 
    color:#fff;

}
.container label{
    margin-bottom:6px;
    display: block;
    color:#fff;
}
.container button{
    background:#000000;
    width: 100px;
    border: none;
    outline: none;
    color:#fff;
    height: 35px;
    border-radius: 25px;
    margin-top: 20px;
    box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.3);
}
.contact-left h3{
    color:#fff;
    font-weight: 600;
    margin-bottom: 30px;
}
.contact-right h3{
    font-weight: 600;
    margin-bottom: 30px;
}

tr td:first-child{
    padding-right: 20px;
}
tr td{
    padding-top: 15px;
}
`;

function Contacts() {
    const[name , setName] = useState()
    const[phone , setPhone] = useState()
    const[email , setEmail] = useState()
    const[subject , setSubject] = useState()
    const[message , setMessage] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/contact',{name,phone,email,subject,message})
        .then(result => {console.log(result)
        navigate('/')  //put path for homepage here 
        })
        .catch(err=> console.log(err))
    }


  return (
    <Wrapper>
       <div className="container">
          {/*  <h1>Connect With Us</h1>
            <p>Feel Free To Contact Us</p>*/}
            <div className="contact-box">
                <div className="contact-left">
                    <h3>Send Your Request</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="input-row">
                            <div className="input-group">
                                <label>Name</label>
                                <input type="text" placeholder="John" name="name" onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="input-group">
                                <label>Phone</label>
                                <input type="text" placeholder="+91 4561238907" name="phone" onChange={(e) => setPhone(e.target.value)} />
                            </div>
                        </div>
                        <div className="input-row">
                            <div className="input-group">
                                <label>Email</label>
                                <input type="email" placeholder="Awerhel123@gmail.com" name="email" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="input-group">
                                <label>Subject</label>
                                <input type="text" placeholder="Demo" name="subject" onChange={(e) => setSubject(e.target.value)} />
                            </div>
                        </div>
                        <label>Message</label>
                        <textarea rows="5" placeholder="Your Message" name="message" onChange={(e) => setMessage(e.target.value)} ></textarea>
                        <button type="submit">SEND</button>
                    </form>
                </div>
                <div className="contact-right">
                    <h3>Reach Us</h3>
                    <table>
                        <tr>
                            <td>Email</td>
                            <td>contactus@example.com</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>+91 1234567890</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>Clement Town, Dehradun</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </Wrapper>
  );
};

export default Contacts;
