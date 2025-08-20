import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Applayout from './layout/App';
import Home from './components/Home';
import CustomSlider from './pages/CustomSlider';
import ResponsiveSlider from './pages/ResponsiveSlider';
import RadioSlider from "./pages/RadioSlider";
import OldSlider from './pages/OldSlider';
import Footer from './layout/Footer';

import Album from './pages/Album';
import Radiointernal from "./pages/Radiointernal";
import Trendinginternal from "./pages/Trendinginternal";

import AlbumSongData from "./data/AlbumSong.json";
import NewSongData from "./data/NewSong.json";
import PodcastSongData from "./data/PodcastSong.json";
import PartySongData from "./data/PartySong.json";

import DesignTrend from "./data/Design.json";
import OldSongTrend from "./data/OldSong.json";
// import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import { Toaster } from 'react-hot-toast';
import ArtistAdd from '../../Admin/Artist/Add';
import ArtistEdit from '../../Admin/Artist/Edit';
import ArtistAll from '../../Admin/Artist/Viewall';
function App() {
  return (
    <>
      <div><Toaster /> </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Applayout />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/Home" element={<Home />} /> */}
            <Route path="/Album-song" element={<Album data={AlbumSongData} />} />
            <Route path="/New-Song" element={<Album data={NewSongData} />} />
            <Route path="/Podcast" element={<Album data={PodcastSongData} />} />
            <Route path="/Part" element={<Album data={PartySongData} />} />
            <Route path="/second" element={<Trendinginternal trend={DesignTrend} />} />
            <Route path="/done" element={<Trendinginternal trend={OldSongTrend} />} />

            <Route path="/Trendinginternal" element={<Trendinginternal />} />
            <Route path="/OldSlider" element={<OldSlider />} />
            <Route path="/Radiointernal" element={<Radiointernal />} />
          </Route>

          <Route path="/slider" element={<CustomSlider />} />
          <Route path="/responsive" element={<ResponsiveSlider />} />
          <Route path="/RadioSlider" element={<RadioSlider />} />
          <Route path="/layout" element={<Footer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/artist" element={<ArtistAll />} />
          <Route path="/artistadd" element={<ArtistAdd />} />
          <Route path="/artistedit/:id" element={<ArtistEdit />} />
       

        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
