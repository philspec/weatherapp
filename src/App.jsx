import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedHome from './pages/ProtectedHome.jsx';
import Login from './pages/Login';
import TermsandConditions from './pages/TermsandConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedHome component={<Home />} />} />
        <Route path="/termsandconditions" element={<TermsandConditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
