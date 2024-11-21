// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RegistrationForm from './pages/Registration';
import { HomePage } from './pages/HomePage';
import { PageNotFound } from './pages/PageNotFound';
import CreateRecipePage from './pages/CreateRecipe';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage/>
  },
  {
    path:'/home',
    element: <HomePage/>
  },
  {
    path:'/register',
    element: <RegistrationForm/>
  },
  {
    path:'/create-recipe',
    element: <CreateRecipePage/>
  },
  {
    path:'/profile',
    element: <ProfilePage/>
  },
  {
    path:'/settings',
    element: <SettingsPage/>
  },
  {
    path:'*',
    element: <PageNotFound/>
  },

])
function App() {
  return <RouterProvider router={router} />;
}

export default App;
