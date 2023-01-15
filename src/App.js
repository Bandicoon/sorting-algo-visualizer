import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BubbleSort from './pages/BubbleSort';
import Home from './pages/Home';
import Header from './components/Header';
import { Box } from '@mui/material';

function App() {
  return (
    <Router>
      <Box
        sx={{
          display: 'flex',
          minHeight: '100vh',
          flexDirection: 'column',
          backgroundColor: '#FBFBF2',
        }}
      >
        <Header />
        <Box
          sx={{
            display: 'flex',
            pt: '80px',
            flex: '1',
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bubble" element={<BubbleSort />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
