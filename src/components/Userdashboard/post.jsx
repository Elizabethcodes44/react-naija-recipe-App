import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie'; // Make sure js-cookie is installed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

export default function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState('');
  const [replyTo, setReplyTo] = useState(null); // Store the comment ID being replied to
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://foodblog-server-side.onrender.com/post/posts/${postId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(result => {
        setPost(result.post);
        setComments(result.post.comments);
      })
      .catch(error => console.error('Error fetching post details:', error))
      .finally(() => setLoading(false));
  }, [postId]);

  const handleCommentSubmit = () => {
    const token = Cookies.get('token');

    if (!token) {
      console.error('No token found');
      return;
    }

    fetch('https://foodblog-server-side.onrender.com/comment/comments', {
      method: 'POST',
      headers: {
      
      },
      body: JSON.stringify({
        content: newComment,
        postId,
        parentId: replyTo,
      }),
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(error => { throw new Error(error.error || 'Unknown error'); });
        }
        return response.json();
      })
      .then(comment => {
        setComments(prev => [comment, ...prev]);
        setNewComment('');
        setReplyTo(null);
      })
      .catch(error => console.error('Error creating comment:', error));
  };

  const handleLike = (commentId) => {
    const token = Cookies.get('token');

    if (!token) {
      console.error('No token found');
      return;
    }

    fetch(`https://foodblog-server-side.onrender.com/comment/comments/${commentId}/like`, {
      method: 'POST',
      headers: {
      
      }
    })
      .then(response => response.json())
      .then(updatedComment => {
        setComments(prev =>
          prev.map(comment =>
            comment.id === updatedComment.id ? updatedComment : comment
          )
        );
      })
      .catch(error => console.error('Error liking comment:', error));
  };

  const handleDislike = (commentId) => {
    const token = Cookies.get('token');

    if (!token) {
      console.error('No token found');
      return;
    }

    fetch(`https://foodblog-server-side.onrender.com/comment/comments/${commentId}/dislike`, {
      method: 'POST',
      headers: {
        
      }
    })
      .then(response => response.json())
      .then(updatedComment => {
        setComments(prev =>
          prev.map(comment =>
            comment.id === updatedComment.id ? updatedComment : comment
          )
        );
      })
      .catch(error => console.error('Error disliking comment:', error));
  };

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

          <div>
            <h2 className="text-xl font-bold mb-4">Comments</h2>
            {comments.map(comment => (
              <div key={comment.id} className="mb-4">
                <p><strong>{comment.author.name}:</strong> {comment.content}</p>
                <button onClick={() => setReplyTo(comment.id)}>Reply</button>
                <button onClick={() => handleLike(comment.id)}>
                  <FontAwesomeIcon icon={faThumbsUp} /> ({comment.likes})
                </button>
                <button onClick={() => handleDislike(comment.id)}>
                  <FontAwesomeIcon icon={faThumbsDown} /> ({comment.dislikes})
                </button>
                {comment.replies && comment.replies.map(reply => (
                  <div key={reply.id} style={{ marginLeft: '20px' }}>
                    <p><strong>{reply.author.name}:</strong> {reply.content}</p>
                  </div>
                ))}
              </div>
            ))}

            {/* Comment Text Area */}
            <div className="mt-4">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
                className="w-full h-24 p-2"
              />
              <button onClick={handleCommentSubmit} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
            </div>
          </div>
        </div>
      ) : (
        <div>No comments yet</div>
      )}
    </div>
  );
}
