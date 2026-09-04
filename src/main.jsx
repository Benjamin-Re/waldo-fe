import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from './pages/HomePage'
import { FeriaPage } from './pages/FeriaPage'
import { CarpetPage } from './pages/CarpetPage'

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <HomePage />},
			{ path: 'feria', element: <FeriaPage />},
			{ path: 'carpet', element: <CarpetPage />}
		]
	}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
