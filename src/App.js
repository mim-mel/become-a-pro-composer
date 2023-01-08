import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/mainpage/Mainpage';
import BlogPage from './pages/blogpage/BlogPage';

function App() {
  return (
    <BrowserRouter basename='/become-a-pro-composer/'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/blog' element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
