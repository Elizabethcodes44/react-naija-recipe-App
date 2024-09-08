import { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../../assets/land.png";
const initialState = {
    name  : "",
    email : "",
    password: "",
    profileImage: null // This will be used to handle file uploads
}
export default function Signup() {
    const [form , setForm] = useState(initialState);
    const [message, setMessage] = useState(""); // For success or error messages
  const [error, setError] = useState(""); // For error messages
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
                setMessage("Login successful");
        setError("");
                navigate("/login");
            } else {
                setMessage("");
                setError(data.error || "Login failed");
            }
        } catch (error) {
            console.error("An error occurred", error);
            setMessage("");
      setError("An error occured during log in");
        }
    };
    
    
  return (
      <div className="flex items-center justify-center min-h-screen text-white p-6"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover", // Ensures the image covers the entire area
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
        backgroundPosition: "center", // Centers the background image
        
      }}>
         <div className="bg-white/30 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Sign up on our blog
        </h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {message && <p className="text-green-500 mb-4">{message}</p>}
      <form onSubmit = {handleSubmit} className="text-white space-y-4">
      <div>
      <label className="block text-gray-700 font-semibold mb-1 text-white">
          <span className="text-red-500">*</span>Name
        </label>
        <input placeholder="input your email" 
        value = {form.name}
        name = "name"
        type = "text"
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-transparent text-white"
              required/>
               </div>
               <div>
        <label className="block text-gray-700 font-semibold text-white mb-1">
          <span className="text-red-500">*</span>EMail
        </label>
        <input placeholder="input your email" 
        value = {form.email}
        name = "email"
        type = "email"
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-transparent text-white"
              required/>
              </div>
              <div>
        <label className="block text-gray-700 font-semibold text-white mb-1"><span className="text-red-500">*</span>Password</label>
        <input placeholder="input your password"
        value = {form.password}
        name = "password"
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-transparent text-white"
              required/>
           </div> 
           <div>
        <label htmlFor="profileImage" className="block text-gray-700 font-semibold text-white mb-1">Profile Image:</label>
        <input type="file" name="profileImage" onChange={handleFileChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-transparent text-white" />
        </div>
        <div className="flex items-center justify-between">
        <button type = "submit"
         className="bg-orange-600 font-semibold text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
         >
        Submit
        </button>
        </div>
      </form>
      </div>
    </div>
  );
}
