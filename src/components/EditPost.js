import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PostsContext } from '../context/PostsContext';

const EditPost = () => {
    const { id } = useParams();
  const { posts, updatePost } = useContext(PostsContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: '', body: '', userId: '' });

  useEffect(() => {
    const post = posts.find(p => p.id === Number(id));
    if (post) {
      setFormData(post);
    } else {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setFormData(data));
    }
  }, [id, posts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePost({ ...formData, id: Number(id) });
    navigate(`/posts/${id}`);
  };
  
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Edit Post</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Title:
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={e => setFormData({ ...formData, title: e.target.value })}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Body:
            </label>
            <textarea
              value={formData.body}
              onChange={e => setFormData({ ...formData, body: e.target.value })}
              className="w-full p-2 border rounded h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              User ID:
            </label>
            <input
              type="number"
              value={formData.userId}
              onChange={e => setFormData({ ...formData, userId: e.target.value })}
              className="w-full p-2 mb-4 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="px-8 py-2 bg-blue-600 text-white rounded-2xl mt-6 hover:bg-blue-800"
          >
            Save Changes
          </button>
        </form>
      </div>
    );
  };
  
export default EditPost;
