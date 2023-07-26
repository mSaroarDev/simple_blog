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
          <Route path='/bycategory/:{id}' element={<ByCategory/>} />
          <Route path='/details/:{id}' element={<PostDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;