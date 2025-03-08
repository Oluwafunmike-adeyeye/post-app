import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PostsContext } from '../context/PostsContext';

const PostDetails = () => {
    const { id } = useParams();
  const { posts, deletePost } = useContext(PostsContext);
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const foundPost = posts.find(p => p.id === Number(id));
    if (foundPost) {
      setPost(foundPost);
    } else {
      setLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
        .finally(() => setLoading(false));
    }
  }, [id, posts]);

  const handleDelete = () => {
    deletePost(Number(id));
    navigate('/posts');
  };

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;
  
    return (
      <div className="max-w-4xl mx-auto p-4">
        <div className="mb-4">
          <button
            onClick={() => navigate('/posts')}
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            &larr; Back to Posts
          </button>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{post.title}</h1>
        <p className="text-gray-600 mb-6">{post.body}</p>
        <p className="text-sm text-gray-400">User ID: {post.userId}</p>
        <div className="mt-6 flex gap-4">
          <button
            onClick={() => navigate(`/posts/${id}/edit`)}
            className="px-8 py-2 bg-blue-600 text-white rounded-2xl hover:bg-blue-800"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="px-8 py-2 bg-red-600 text-white rounded-2xl hover:bg-red-800"
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default PostDetails;