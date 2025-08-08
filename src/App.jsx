import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useState} from 'react';
import Home from './page/Home';
import ProfileLayout from './page/ProfileLayout';
import cardData from './data/cardData';

function App() {
  const [profiles, setProfiles] = useState(cardData);
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile/*" element={<ProfileLayout profiles={profiles} setProfiles={setProfiles} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
