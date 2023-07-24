import React from 'react';
import { useState } from 'react';
import axios from 'axios';


export default function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        if(name.length === 0){
            alert("Name field empty")
        } else if ( email.length === 0) {
            alert("Email field is empty")
        } else if ( message.length === 0){
            alert("Message field is empty")
        } else{
            const url = 'http://localhost/website-react/index.php';
            let fData = new FormData();
            fData.append('name', name);
            fData.append('email', email);
            fData.append('message', message);
            axios.post(url, fData).then(response => alert(response.data)).catch(error => alert(error))
        }
    }
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-6">
              <div className="card shadow">
              <div className="card-body py-4">
              <h4>Send Your Idea</h4>
                <div className="underline mb-3"></div>
      <form action="">
        <label htmlFor="">Name</label>
        <input type="text" className="form-control"  placeholder='Your Name' id='name' value={name} onChange={(e) =>setName(e.target.value)}/>
        <label htmlFor="">Email</label>
        <input type="text" className="form-control"  placeholder='Your email' id='email' value={email} onChange={(e) =>setEmail(e.target.value)}/>
        <label htmlFor="">Message</label>
        <textarea  className='form-control wait text-center' placeholder='Your message' id='message' value={message} onChange={(e) =>setMessage(e.target.value)}></textarea>
        <center> <button type='submit' className="btn btn-primary my-2" id='submit' value="Register" onClick={handleSubmit}>Submit</button>  </center>
      </form>
      </div>
      </div>
      </div>
      </div>
              
    </div>
  )
}
