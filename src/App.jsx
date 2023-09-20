import { useRoutes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
// pages 
import Home from "./Components/Home"
import NotFound from './layouts/NoteFound';
function App() {

  const routes = useRoutes([
    { path: '/', element: <Home /> },
    // any other
    { path: '*', element: <NotFound /> },
  ]);


  return (
  
    <div className="">
    {/* <Navbar /> */}
      {routes}
    {/* <Footer /> */}
    </div>
  );
}

export default App