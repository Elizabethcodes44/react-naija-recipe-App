import { useState, useEffect } from "react";
import Cookies from "js-cookie"; //To 
const initialState = {
  title: "",
  content: "",
  status: "",
  category: "",
  tags: "",
  featuredImageUrl: null,
};
const apiUrl = import.meta.env.MODE === 'development'
  ? 'http://localhost:5432'  // Local backend URL for development
  : 'https://foodblog-server-side.onrender.com';  // Production backend URL
export default function CreateAPost() {
    const [form, setForm] = useState(initialState);
    const [message, setMessage] = useState(""); // For success or error messages
    const [error, setError] = useState(""); // For error messages
    const [categories, setCategories] = useState([]); // To store fetched categories
    
  
    // Fetch categories from the API on component mount
    useEffect(() => {
      async function fetchCategories() {
        try {
          const response = await fetch(`${apiUrl}/category`);
          const result = await response.json();
          if (response.ok) {
            
            setCategories(result.data);
            console.log(result.data) // Assuming data is an array of categories
          } else {
            console.error("Failed to fetch categories");
          }
        } catch (err) {
          console.error("Error fetching categories:", err);
        }
      }
      fetchCategories();
    }, []);
  
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'featuredImageUrl') {
          setForm({ ...form, [name]: files[0] });
        } else {
          setForm({ ...form, [name]: value });
        }
      };
  
    const handleFileChange = (e) => {
      setForm({
        ...form,
        featuredImageUrl: e.target.files[0],
      });
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("content", form.content);
        formData.append("status", form.status);
        formData.append("categoryName", form.category); // Correct name in FormData
        formData.append("tags", form.tags);
        if (form.featuredImageUrl) {
          formData.append("featuredImageUrl", form.featuredImageUrl);
        }
      
        try {
          const token = Cookies.get('token'); // Ensure the correct token key
         
          console.log(token)
          const response = await fetch(`${apiUrl}/post/posts`, {
            method: "POST",
           
            credentials: 'include', // This ensures cookies are sent with the request
            body: formData, // Ensure this matches your backend’s expected content type
          });
          
      
          const data = await response.json();
      
          if (response.ok) {
            setMessage("Post Created Successfully");
            setError("");
          } else {
            setMessage("");
            setError(data.error || "Post Creation Failed");
          }
        } catch (error) {
          console.error("An error occurred", error);
          setMessage("");
          setError("An error occurred during post creation");
        }
      };
      

  return (
    <>
      <div>
        <h1>Dear Author, fill this form to create a post</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <input
              placeholder="Add a title"
              value={form.title}
              name="title"
              type="text"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-transparent text-white"
              required
            />
          </div>
          <div>
            <label>Content</label>
            <input
              placeholder="Add a title"
              value={form.content}
              name="content"
              type="text"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-transparent text-white"
              required
            />
          </div>
          <div>
            <label>Status</label>
            <select
              
              value={form.status}
              name="status"
              
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-transparent text-white"
              required
            >
            <option 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-transparent text-white" value="">Select Status</option>
              <option value="DRAFT">Draft</option>
              <option value="PUBLISHED">Published</option>
              </select>
          </div>
          <div>
            <label>Category</label>
            <select
              value={form.category}
              name="category"
              
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-transparent text-white"
              required
            > 
             <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}</select>
          </div>
          <div>
            <label>Tags</label>
            <input
              placeholder="Add a title"
              value={form.tags}
              name="tags"
              type="text"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-transparent text-white"
              required
            />
          </div>
          <div>
            <label
              htmlFor="profileImage"
              className="block text-gray-700 font-semibold text-white mb-1"
            >
              Featured Image:
            </label>
            <input
              type="file"
              name="profileImage"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-transparent text-white"
            />
          </div>
          <button>Submit</button>
        </form>
        {message && <p>{message}</p>}
        {error && <p>{error}</p>}
      </div>
    </>
  );
}
