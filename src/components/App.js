import { Container } from 'react-bootstrap';
import Dashboard from './Dashboard';
import UpdateProfile from './UpdateProfile';
import Signup from './Signup';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Container className='d-flex align-itmes-center justify-content-center' style={{ minHeight: '100vh' }}>
        <div className='w-100' style={{ maxWidth: '400px' }}>
          <Router>
            <AuthProvider>
              <Routes>
                <Route path='/' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path='/update-profile' element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
