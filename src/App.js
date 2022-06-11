import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Route, Routes, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {


  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'abc 1',
      date: "blah 1",
      body: "again blah 1"
    },
    {
      id: 2,
      title: 'abc 2',
      date: "blah 2",
      body: "again blah 2  rgbrg rg rg brb nryy g rgnt nn rgbt nybyr ntrnbryn 4ry nry"
    },
    {
      id: 3,
      title: 'abc 3',
      date: "blah 3",
      body: "again blah 3"
    },
    {
      id: 4,
      title: 'abc 4',
      date: "blah 4",
      body: "again blah 4 fbgggg tge r brgbrygy byrgb r bgrbrg"
    }
  ]);

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const filteredResults = posts.filter(post =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      ||
      ((post.title).toLowerCase()).includes(search.toLowerCase())
    );
setSearchResults(filteredResults.reverse());
  }, [posts, search])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const date = (new Date(Date.now())).toDateString();
    const newPost = { id: id, title: postTitle, date: date, body: postBody };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate('/');
  }

  const handleDelete = async (id) => {
    const postsList = posts.filter(post => post.id !== id);
    setPosts(postsList);
    navigate('/');

  }
  return (
    <div className='App'>

      <Header title={'Art Blog'} />
      <Nav
        search={search}
        setSearch={setSearch}
      />

      <Routes >
        <Route exact path='/' element={<Home posts={searchResults} />} />

        <Route path='post' element={<NewPost handleSubmit={handleSubmit} postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody} />} />

        <Route path='post/:id' element={<PostPage posts={posts} handleDelete={handleDelete} />} />

        <Route path='about' element={<About />} />

        <Route path='*' element={<Missing />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
