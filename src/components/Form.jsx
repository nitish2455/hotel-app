import React from "react"
import "./style.css"
import {useState} from "react"
import * as fs from "fs"

export default function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address:''
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit= (event) => {
        event.preventDefault();
    
        
        const data = JSON.stringify(formData, null, 2);
        fs.writeFileSync('data.json', data);
    
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          address:''
        });
      };

    

    
    return (
<section id="contact">
    <h1 className="h-primary center ">Sign Up</h1>
    <div id="contact-box">
        <form onSubmit={handleSubmit} action="" id="form">
            <div className="form-group">
                <label htmlFor="Name">Name: </label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your name"/>
            </div>
            <div className="form-group">
                <label htmlFor="Name">Email: </label>
                <input type="text" name="email" id="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email"/>
            </div>
            <div className="form-group">
                <label htmlFor="Name">Phone Number: </label>
                <input type="text" name="phone" id="phone" value={formData.phone} onChange={handleInputChange} placeholder="Enter your phone"/>
            </div>
            <div className="form-group">
                <label htmlFor="Name">Address: </label>
                <textarea name="address" id="address" cols="30" rows="10" value={formData.address} onChange={handleInputChange} ></textarea>
            </div>
            <button className="btn-primary center" >SUBMIT</button>
        </form>    
    </div>
     
    
     </section>
    );
}
