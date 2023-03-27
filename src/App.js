import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Components/HomePage";

import Navibar from "./Components/NaviBar";

import BlogList from "./BlogPages/BlogList";

import AddBlog from "./BlogPages/Add";

import Check from "./BlogPages/check";

import DeleteOneBlog from "./Components/DeleteOneBlog";

import Update from "./Components/Update";

import DeleteMultiple from "./Components/DeleteMultiple";

import BlogForm from "./BlogPages/BlogForm";

function App() {

  return (

    <Router>

      <Routes>

        <Route element={<Navibar />}>

          <Route path="/" element={<HomePage />} />

          <Route path="/blogs" element={<BlogList />} />

          <Route path="/create-blog" element={<AddBlog />} />

          <Route path="/blog/:id" element={<BlogForm />} />

          <Route path="/blog-added" element={<Check />} />

          <Route path="/blog-deleted" element={<DeleteOneBlog />} />

          <Route path="/blogs-deleted" element={<DeleteMultiple />} />

          <Route path="/blog-update/:id" element={<Update />} />

        </Route>

      </Routes>

    </Router>
  );
}

export default App;