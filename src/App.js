import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home';
import IeltsHub from './Pages/ProjectDetails/IeltsHub';
import LaptopCity from './Pages/ProjectDetails/LaptopCity';
import MyLesson from './Pages/ProjectDetails/MyLesson';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children: [
        {
          path: '/',
          element: <Home/>,
        },
        {
          path: '/blog',
          element: <Blog/>
        },
        {
          path: '/ieltsHub',
          element: <IeltsHub/>,
        },
        {
          path: '/laptopCity',
          element: <LaptopCity/>,
        },
        {
          path: '/myLesson',
          element: <MyLesson/>,
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>

  );
}

export default App;
