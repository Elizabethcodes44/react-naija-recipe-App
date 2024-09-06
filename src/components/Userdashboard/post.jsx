import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PostDetail() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
   
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true); // Set loading state to true
        // Fetch post details
        fetch(`http://localhost:5432/post/posts/${postId}`)
            .then(response =>
                {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                }) 
            .then(result => {
                setPost(result.post);
                console.log("this is the post", result.post)
                 })
            .catch(error => console.error('Error fetching post details:', error))
            .finally(() => setLoading(false)); //
    }, [postId]);
    if (loading) {
        return <div className="container mx-auto p-4">Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4 text-white">
            {post ? (
                <div>
                    <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                    <img src={post.featured_image_url} alt={post.title} className="w-full h-64 object-cover mb-4" />
                    <p className="mb-4">{post.content}</p>
                    <p className="mb-4">{post.author.name}</p>

                    {/* Comments Section */}
                    <h2 className="text-xl font-bold mb-4">Comments</h2>
                    <ul>
                        {post.comments.map(comment => (
                            <li key={comment.id}>
                                <p>{comment.content}</p>
                                <p>Likes: {comment.likes}</p>
                                <p>Dislikes: {comment.dislikes}</p>
                            </li>
                        ))}
                    </ul>
                </div>               
                        ) : (
                            <div>No comments yet</div>

                        )}
                    </div>
               
    );
}
