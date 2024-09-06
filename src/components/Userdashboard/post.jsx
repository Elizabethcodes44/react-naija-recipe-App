import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PostDetail() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5432
/post/posts/${postId}`)
            .then(response => response.json())
            .then(data => setPost(data))
            .catch(error => console.error('Error fetching post:', error));
    }, [postId]);

    if (!post) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow-md rounded-lg p-6">
                <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-4" />
                <h1 className="text-2xl font-semibold mb-4">{post.title}</h1>
                <p className="text-gray-700 mb-4">{post.content}</p>
                <div className="border-t pt-4">
                    <h2 className="text-xl font-semibold mb-4">Comments</h2>
                    {/* Display comments and reply functionality here */}
                </div>
            </div>
        </div>
    );
}
