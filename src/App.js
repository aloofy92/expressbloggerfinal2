import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blogs from './Pages/Blogs';
import BlogPost from './Components/BlogPost';
import BlogForm from './Components/BlogForm';
import NavBar from './Components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/blogs" element={< Blogs /> } />
        <Route path="/blogs/:id" element={<BlogPost /> } />
        <Route path="/create-blog" element={<BlogForm />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
