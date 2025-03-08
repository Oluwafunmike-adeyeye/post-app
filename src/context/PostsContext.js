
import { createContext, useState, useEffect } from 'react';

export const PostsContext = createContext();

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const deletePost = async (postId) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE',
      });
      setPosts(prev => prev.filter(post => post.id !== postId));
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const updatePost = async (updatedPost) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedPost),
        }
      );
      const data = await response.json();
      setPosts(prev => prev.map(post => post.id === updatedPost.id ? data : post));
    } catch (err) {
      console.error('Update error:', err);
    }
  };

  return (
    <PostsContext.Provider
      value={{ posts, isLoading, error, deletePost, updatePost }}
    >
      {children}
    </PostsContext.Provider>
  );
}