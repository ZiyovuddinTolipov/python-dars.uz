import { useRoutes } from 'react-router-dom';;
// pages 
import HomePage from './pages/Home';
import Login from "./pages/Login"
import NotFound from './pages/Test';
import Register from './pages/Register';
import Course from './pages/Course';
import Dashboard from './pages/Dashboard';

import { Toaster } from "react-hot-toast"
function App() {
  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/login', element: <Login /> },
    { path: '/course', element: <Course /> },
    {
      path: '/dashboard/*',
      element: <Dashboard />
    },
    { path: '/register', element: <Register /> },
    { path: '*', element: <NotFound /> }
  ]);
  return (
    <main>
     <Toaster
  position="top-right"
  reverseOrder={false}
/>

      {routes}
    </main>
  );
}

export default App;