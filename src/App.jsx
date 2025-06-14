import './index.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UploadReport from './pages/Upload';
import Paymentpage from './pages/Paymentpage';
import Layout from './components/Layout';
import Output from './pages/Output';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landingpage />} />
          <Route path="/payment" element={<Paymentpage />} />
        </Route>

        {/* Pages without layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/upload" element={<UploadReport />} />
        <Route path='/Output' element={<Output/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
