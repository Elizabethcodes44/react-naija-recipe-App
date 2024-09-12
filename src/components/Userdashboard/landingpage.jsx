const apiUrl =
  import.meta.env.MODE === "development"
    ? "http://localhost:5432" // Local backend URL for development
    : "https://foodblog-server-side.onrender.com"; // Production backend URL
const RequestRoleChange = () => {
  const handleRequest = async () => {
    try {
      const response = await fetch(`${apiUrl}/user/request-role-change`, {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        alert('Role change request submitted successfully');
      } else {
        alert('Error submitting role change request');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    
        <div className="rounded bg-black text-white flex  flex-col justify-center items-center h-[200px] space-y-4 p-6 "
       >
            <h1 className="text-3xl font-semibold text-center">Have the best food blog experience here</h1>
            <p className="text-l text-center ">Want to become an Author</p>
            <button onClick={handleRequest} className="bg-gray-200 text-black rounded-md py-2 px-4 hover:bg-gray-300 transition duration-300">Request Author Role</button>
            
    

   
    </div>

  );
};

export default RequestRoleChange;

