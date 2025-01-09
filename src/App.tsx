import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ComponentDetails, Home } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/component/:id" element={<ComponentDetails />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
