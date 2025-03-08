import PostsList from './components/PostsList';
import PostDetails from './components/PostDetails';
import EditPost from './components/EditPost';
import { PostsProvider } from './context/PostsContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <PostsProvider>
        <div className="min-h-screen bg-gray-50">
          <nav className="">
            <div className="max-w-4xl mx-auto p-4">
              <h2 className="text-3xl font-bold text-center">
                <a href="/posts" className="text-blue-800 hover:text-blue-900 uppercase">
                  posts
                </a>
              </h2>
            </div>
          </nav>
          <Routes>
            <Route path="/posts" element={<PostsList />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route path="/posts/:id/edit" element={<EditPost />} />
            <Route path="/" element={<Navigate to="/posts" replace />} />
          </Routes>
        </div>
      </PostsProvider>
    </Router>
  );
}

export default App