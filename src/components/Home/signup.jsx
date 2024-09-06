import { useState } from "react";
import { useNavigate } from "react-router-dom";
const initialState = {
    name  : "",
    email : "",
    password: "",
}
export default function Signup() {
    const [form , setForm] = useState(initialState);
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // send POST to the Server
            const response = await fetch('http://localhost:5432/user/signup', {
                method: 'POST',
                // make sure the request body is in JSON format
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            
            // Wait for response from server
            const data = await response.json();
            
            // If server respond
            if (response.ok) {
                // Handle successful login (e.g., navigate to another page, store user data)
                console.log("Sign up successful", data);
                //navigate("/userdashboard")
            } 
            else {
                // Handle errors (e.g., show error message)
                console.error("Sign up failed", data);
            }
        } catch (error) {
            console.error("An error occurred", error);
        }
    };
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/login")
    }
  return (
    <div>
      <form onSubmit = {handleSubmit}>
      <label>
          <span className="text-red-500">*</span>Name
        </label>
        <input placeholder="input your email" 
        value = {form.name}
        name = "name"
        type = "text"
        onChange={handleChange}/>
        <label>
          <span className="text-red-500">*</span>EMail
        </label>
        <input placeholder="input your email" 
        value = {form.email}
        name = "email"
        type = "email"
        onChange={handleChange}/>
        <label><span className="text-red-500">*</span>Password</label>
        <input placeholder="input your password"
        value = {form.password}
        name = "password"
        onChange={handleChange}/>
        <input type = "submit"
        value="submit"
        onClick= {handleNavigate}/>
      
      </form>
    </div>
  );
}
