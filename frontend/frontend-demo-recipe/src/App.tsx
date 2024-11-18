import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { RegistrationForm } from './pages/Registration';
import { HomePage } from './pages/HomePage';
import { PageNotFound } from './pages/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<RegistrationForm/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
