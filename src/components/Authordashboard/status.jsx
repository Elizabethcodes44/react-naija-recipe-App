import { useEffect, useState } from 'react';

const DraftPosts = () => {
  const [drafts, setDrafts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch draft posts for the logged-in author
  useEffect(() => {
    const fetchDraftPosts = async () => {
      try {
        const response = await fetch('http://localhost:5432/post/posts/drafts', {
          method: 'GET',
          credentials: 'include', // Include cookies if needed
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Fetch error:', errorData); // Log error data if available
          throw new Error('Failed to fetch drafts');
        }

        const result = await response.json();
        console.log('Draft posts:', result.data); // Log fetched drafts
        setDrafts(result.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching draft posts:', err); // Log error
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDraftPosts();
  }, []);

  // Render loading, error, or no drafts message
  if (loading) {
    return <div>Loading drafts...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (drafts.length === 0) {
    return <div>No drafts currently available</div>;
  }

  return (
    <div>
      <h2>Your Draft Posts</h2>
      <ul>
        {drafts.map((draft) => (
          <li key={draft.id}>
            <h3>{draft.title}</h3>
            <p>{draft.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DraftPosts;
