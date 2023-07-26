import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ByCategory from './pages/ByCategory';
import Homepage from './pages/Homepage';
import PostDetails from './pages/PostDetails';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/bycategory/:categoryId' element={<ByCategory/>} />
          <Route path='/details/:postId' element={<PostDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;