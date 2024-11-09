import Form from './components/Form';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
    </Routes>
    </Router>
  );
}

export default App;