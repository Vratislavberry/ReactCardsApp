import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home";
import CardManager from "./pages/CardManager";
import Quiz from "./pages/Quiz";
import NoPage from "./pages/NoPage";
const router = createBrowserRouter([
  {
    path: "/ReactCardsApp/",
    element: <App />,
    children: [
      {
        path: "/ReactCardsApp/",
        element: <Home />,
      },
      {
        path: "/ReactCardsApp/CardManager",
        element: <CardManager />,
      },
      {
        path: "/ReactCardsApp/Quiz",
        element: <Quiz />,
      },
      {
        path: "/ReactCardsApp/*",
        element: <NoPage />,
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <App />
  </StrictMode>,
)
