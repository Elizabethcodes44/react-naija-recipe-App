import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie" //To access cookies
const initialState = {
    email : "",
    password: "",
}
export default function Login() {
    const [form , setForm] = useState(initialState);
    const [message, setMessage] = useState('');  // For success or error messages
    const [error, setError] = useState('');  // For error messages
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
 
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // send POST request to the server
            const response = await fetch('http://localhost:5432/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            // Parse response from the server
            const data = await response.json();
            console.log("This is data:", data);

            // Check if login was successful
            if (response.ok) {
                console.log("Login successful", data);

                // Set the token in cookies (assuming `data.token` holds the token)
                const token = data.token;
                Cookies.set('token', token);

                // Role-based redirection logic
                const { role } = data; // Assuming `data` contains user role information

                // Redirect to the appropriate dashboard based on user role
                if (role === 'AUTHOR') {
                    navigate("/author-dashboard");
                } else if (role === 'ADMIN') {
                    navigate("/admin-dashboard");
                } else {
                    navigate("/user-dashboard"); // Default for regular users
                }  // Set success message
                setMessage('Login successful');
                setError('');
            } else {
                // Handle login failure
                setMessage('');
                setError(data.error || 'Login failed');
            }
        } catch (error) {
            console.error("An error occurred", error);
            setMessage('');
                setError("An error occured during log in");
        }
    };
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/signup")
    }
  return (
    <div>
      <form onSubmit = {handleSubmit} className="text-white">
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
        type = "password"
        onChange={handleChange}/>
        <input type = "submit"
        value="submit"/>
        <p>Not registered yet?</p>
        <h1 className="text-orange-600 text-xl italic " onClick= {handleNavigate}>Sign Up</h1>
      </form>
    </div>
  );
}
