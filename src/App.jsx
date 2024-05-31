
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header  from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home';
import Miami from './Pages/Miami';

import Beverly from './Pages/Beverly';

import NYMassion from './Pages/NYMassion';

import NYPentahouse from './Pages/NYPentahouse';

import Presidential from './Pages/Presidential';

import Sanfra from './Pages/Sanfra';

function Layout(){
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />

   
    
    </>
    
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/Beverly',
        element:< Beverly />,
      },

      {
        path:'/Miami',
        element:<Miami/>,
      },
      

      {
        path:'/NYMassion',
        element:<NYMassion/>,

      },
      {
        path:'/NYPentahouse',
        element:<NYPentahouse/>,

      },
      {
        path:'/Presidential',
        element:<Presidential/>,

      },
      {
        path:'/Sanfra',
        element:<Sanfra/>,

      },




    ]
  },

]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App; 