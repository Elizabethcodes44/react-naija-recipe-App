import { useState } from "react";
import { useNavigate } from "react-router-dom";
const initialState = {
    name  : "",
    email : "",
    password: "",
    profileImage: null // This will be used to handle file uploads
}
export default function Signup() {
    const [form , setForm] = useState(initialState);
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const navigate = useNavigate();
    const handleFileChange = (e) => {
        setForm({
            ...form,
            profileImage: e.target.files[0]
        });
    };
 
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('email', form.email);
        formData.append('password', form.password);
        if (form.profileImage) {
            formData.append('profileImage', form.profileImage);
        }
    
        try {
            const response = await fetch('http://localhost:5432/user/signup', {
                method: 'POST',
                body: formData,
            });
    
            const data = await response.json();
    
            if (response.ok) {
                console.log("Sign up successful", data);
                navigate("/login");
            } else {
                console.error("Sign up failed", data);
            }
        } catch (error) {
            console.error("An error occurred", error);
        }
    };
    
    
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
        <label htmlFor="profileImage">Profile Image:</label>
        <input type="file" name="profileImage" onChange={handleFileChange} />
        <input type = "submit"
        value="submit"
        />
      
      </form>
    </div>
  );
}
