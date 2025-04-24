import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import NewPost from './pages/NewPost';
import Layout from './Layout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'posts/:id', element: <PostDetail /> },
        { path: 'new', element: <NewPost /> }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;