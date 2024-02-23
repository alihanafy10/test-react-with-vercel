import './App.css';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Home from './component/home/Home';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Portfolio from './component/portfolio/Portfolio';
import UserLayout from './layout/userLayout/UserLayout';

export default function App() {
  const greenColor = "#1abc9c"
let routs=  createBrowserRouter([
    {
      path: '/', element: <UserLayout/>, children: [
        { index: true, element: <Home greenColor={greenColor } /> },
        {path:'about',element:<About greenColor={greenColor }/>},
        {path:'portfolio',element:<Portfolio/>},
        { path: 'contact', element: <Contact /> },
        {path:'*',element:<p className='pt-5 mt-5 text-center text-danger fw-bold'>ايرور يا معلم</p>},
      ]
    }
])
  return (
    <>
      <RouterProvider router={routs}/>
    </>
  );
}

