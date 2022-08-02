import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Signup = React.lazy(() => import("pages/Signup/Signup"));
const Login = React.lazy(() => import("pages/Login/Login"));
const Dashboard = React.lazy(() => import("pages/Dashboard/Dashboard"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
