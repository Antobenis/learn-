import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import { lazy } from 'react';
import { Suspense } from 'react';
const Login = lazy(() => import('./login/Login.jsx'))
const Register = lazy(() => import('./Register/Register.jsx'))
const Get = lazy(() => import('./get/Get.jsx'))
function App() {
  return (
    <>
      <Suspense fallback={<><h1>loading....</h1></>}>
        <Routes>
          <Route path="/" element={<Navigate to={'/login'} />} replace />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/get" element={<Get />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
