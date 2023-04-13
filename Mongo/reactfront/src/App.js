import './App.css';
import NavBar from './blog/navbar';
import Footer from './blog/footer';
import CompShowBlogs from './blog/ShowBlog';
import CompCreateBlog from './blog/CreateBlog';
import CompEditBlog from './blog/EditBlog';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Home() {
  return (
    <>
      <NavBar />
      <CompShowBlogs />
      <Footer/>
    </>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<CompCreateBlog />} />
          <Route path='/edit/:id' element={<CompEditBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
