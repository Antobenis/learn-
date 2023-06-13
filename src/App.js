import { Routes, Route,Navigate } from 'react-router-dom'
import './App.css';
import { lazy } from 'react';
import { Suspense } from 'react';
const Login = lazy(() => import('./login/Login.jsx'))
function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Navigate to={'/login'} />} replace />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
