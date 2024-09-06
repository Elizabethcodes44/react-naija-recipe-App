import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from './pagination';

export default function PostList({ selectedCategory }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    //usıng pagınatıon
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(4);

    // Fetch posts when selectedCategory changes
    useEffect(() => {
        setLoading(true); // Start loading state
        const url = `http://localhost:5432/category/postscategory?category=${selectedCategory}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(result => {
                setPosts(result.data || []); // Ensure posts is an array
                console.log(result.data)
                setError(null); // Clear any previous errors
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
                setError(error.message); // Set error message
            })
            .finally(() => {
                setLoading(false); // End loading state
            });
    }, [selectedCategory]);

    const handlePostClick = (postId) => {
        navigate(`/user-dashboard/post/${postId}`);
    };
    
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = posts.slice(firstPostIndex, lastPostIndex)


    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">Posts</h2>
            {loading && <div className="text-center">Loading posts...</div>}
            {error && <div className="text-red-500 text-center">Error: {error}</div>}
            {!loading && !error && posts.length === 0 && <div className="text-center">No posts available for this category.</div>}
            <div className="grid grid-cols-3 gap-6">
                {currentPosts.map(post => (
                    <div
                        key={post.id}
                        onClick={() => handlePostClick(post.id)}
                        className="cursor-pointer bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition"
                    >
                        
                        <img src={post.featured_image_url} alt={post.title} className="h-32 w-full object-cover rounded-md mb-4" />
                     
                        <h1>Status: {post.status}</h1>
                       
                        
    </div>
                        
                    
                ))}
            </div>
            <Pagination totalPosts ={posts.length} postPerPage = {postPerPage}
           setPostPerPage={setPostPerPage}
            setCurrentPage={setCurrentPage}
            currentPage= {currentPage}></Pagination>
        </div>
    );
}
