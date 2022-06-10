import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Route, Routes, useHistory, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className='App'>
       <Link to="/post">Posts</Link>
        <Link to="/about">About</Link>
      <Header />
      <Nav />

      <Routes >
        <Route exact path='/' element={<Home />} />

        <Route path='post' element={<NewPost />} />

        <Route path='post/:id' element={<PostPage />} />

        <Route path='about' element={<About />} />

        <Route path='*' element={<Missing />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
