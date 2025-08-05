import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import ProfileLayout from './page/ProfileLayout';

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile/*" element={<ProfileLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
