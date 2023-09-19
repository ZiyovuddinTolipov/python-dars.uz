import { useRoutes } from 'react-router-dom';
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
// pages 
import Home from "./Components/Login"
// import SignUp from "./users/Components/register/SignUp";
// import SignIn from './users/Components/register/SignIn';
// import Shopping from "./users/pages/Shop"
// import Authors from './users/pages/Authors';
import NotFound from './layouts/NoteFound';
// import Admin from './admin/admin'


// import Navbar from './users/layouts/Navbar';
// import Footer from './users/layouts/Footer';
function App() {

  const routes = useRoutes([
    { path: '/', element: <Home /> },
    // any other
    // { path: 'signin', element: <SignIn /> },
    // { path: 'signup', element: <SignUp /> },
    // { path: 'shop', element: <Shopping /> },
    // { path: 'signup/as', element: <Home /> },
    // { path: 'authors', element: <Authors /> },
    // { path: 'admin', element: <Admin /> },
    { path: '*', element: <NotFound /> },
  ]);


  return (
  
    <div className="bg-slate-800 w-full py-5 h-screen">
      <ToastContainer
        position="top-right"
        autoClose={4000}
        limit={4}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {routes}
    </div>
  );
}

export default App