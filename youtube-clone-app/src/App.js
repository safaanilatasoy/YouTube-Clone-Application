import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import {Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed} from './components';

const App = () => {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor: '#191919'}}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/video/:id" element={<ChannelDetail />} />
        <Route path="/video/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>

    </BrowserRouter>
  )
}

export default App
