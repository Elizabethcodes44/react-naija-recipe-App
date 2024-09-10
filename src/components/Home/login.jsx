import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; //To access cookies
import background from "../../assets/land.png";
const initialState = {
  email: "",
  password: "",
};
const apiUrl = import.meta.env.MODE === 'development'
  ? 'http://localhost:5432'  // Local backend URL for development
  : 'https://foodblog-server-side.onrender.com';  // Production backend URL
export default function Login() {
  const [form, setForm] = useState(initialState);
  const [message, setMessage] = useState(""); // For success or error messages
  const [error, setError] = useState(""); // For error messages
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
      const response = await fetch(`${apiUrl}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include', 
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

        Cookies.set("token", token, {
          // Expires in 7 days
          path: "/", // Available throughout the site
          sameSite: "Lax", // Lax for CSRF protection
        });

        // Role-based redirection logic
        const { role } = data; // Assuming `data` contains user role information

        // Redirect to the appropriate dashboard based on user role
        if (role === "AUTHOR") {
          navigate("/author-dashboard");
        } else if (role === "ADMIN") {
          navigate("/admin-dashboard");
        } else {
          navigate("/user-dashboard"); // Default for regular users
        } // Set success message
        setMessage("Login successful");
        setError("");
      } else {
        // Handle login failure
        setMessage("");
        setError(data.error || "Login failed");
      }
    } catch (error) {
      console.error("An error occurred", error);
      setMessage("");
      setError("An error occured during log in");
    }
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/signup");
  };
  return (
    <div
      className="flex items-center justify-center min-h-screen text-white p-6"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover", // Ensures the image covers the entire area
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
        backgroundPosition: "center", // Centers the background image
      }}
    >
      <div className="bg-white/30 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Log in to our blog
        </h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {message && <p className="text-green-500 mb-4">{message}</p>}
        <form onSubmit={handleSubmit} className="text-white space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1 text-white">
              <span className="text-red-500">*</span>EMail
            </label>
            <input
              placeholder="input your email"
              value={form.email}
              name="email"
              type="email"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-transparent text-white"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold text-white mb-1">
              <span className="text-red-500">*</span>Password
            </label>
            <input
              placeholder="input your password"
              value={form.password}
              name="password"
              type="password"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-transparent text-white"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-orange-600 font-semibold text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
            <p className="text-white">Not registered yet?</p>
          </div>
          <h1
            className="text-white text-lg italic text-center cursor-pointer mt-4 hover:underline"
            onClick={handleNavigate}
          >
            Sign Up
          </h1>
        </form>
      </div>
    </div>
  );
}
