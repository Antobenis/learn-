import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import { lazy } from 'react';
import { Suspense } from 'react';
import { Private } from './privateRoute/PrivateRoute';
const Login = lazy(() => import('./login/login'))
const Register = lazy(() => import('./Register/Register.jsx'))
const Get = lazy(() => import('./get/Get.jsx'))
const Update = lazy(() => import('./update/Update.jsx'))
const Error = lazy(() => import('./error/Error.jsx'))
function App() {
  return (
    <>
      <Suspense fallback={<><h1>loading....</h1></>}>
        <Routes>
          <Route path="/" element={<Navigate to={'/login'} />} replace />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<Private />}>
          <Route path="/get"element={<Get />} />
          <Route path="/update/:id" element={<Update />} />
          </Route>
          <Route path="/error" element={<Error />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
