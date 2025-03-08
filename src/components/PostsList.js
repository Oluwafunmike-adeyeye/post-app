import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { PostsContext } from '../context/PostsContext';

const PostsList = () => {
    const { posts, isLoading, error } = useContext(PostsContext);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
  
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentPosts = posts.slice(indexOfFirst, indexOfLast);
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Posts</h1>
      <div className="space-y-4">
        {currentPosts.map(post => (
          <div key={post.id} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Link to={`/posts/${post.id}`} className="block">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600">{post.body.substring(0, 50)}...</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center items-center">
        <button
          className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-800 text-white disabled:opacity-50"
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button className="px-4 py-2 border-none bg-white disabled:opacity-50">{currentPage}</button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-800 disabled:opacity-50"
          onClick={() => setCurrentPage(p => p + 1)}
          disabled={indexOfLast >= posts.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostsList;