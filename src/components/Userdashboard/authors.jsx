import { useState, useEffect } from "react";
const apiUrl =
  import.meta.env.MODE === "development"
    ? "http://localhost:5432" // Local backend URL for development
    : "https://foodblog-server-side.onrender.com"; // Production backend URL
const AuthorsList = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(`${apiUrl}/user/allauthors`, {
          credentials: 'include', // Include this if you have session tokens
        });
        const users = await response.json();
        
        // Filter users to only include those with the role 'AUTHOR'
        const authors = users.filter(user => user.role === 'AUTHOR');
        setAuthors(authors);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, []);

  if (authors.length === 0) {
    return <p>No authors found.</p>;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {authors.map((author) => (
        <div
          key={author.id}
          className="bg-black text-white shadow-lg rounded-lg p-4 m-4 w-full max-w-xs"
        >
          <div className="flex flex-col items-center">
            <img
   
              src={author.profile_image_url ? `https://foodblog-server-side.onrender.com${apiUrl}${author.profile_image_url}` : 'https://via.placeholder.com/150'}
             
              alt={`${author.name}'s profile`}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            
            <h2 className="text-xl font-bold">{author.name}</h2>
            <p className="text-sm text-gray-500">{author.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AuthorsList;
