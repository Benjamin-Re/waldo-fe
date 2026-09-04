import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from './pages/HomePage'
import { FeriaPage } from './pages/FeriaPage'
import { CarpetPage } from './pages/CarpetPage'
import { Layout } from './components/Layout'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <HomePage />
			},
			{
				path: '/feria',
				element: <FeriaPage />
			},
			{
				path: '/carpet',
				element: <CarpetPage />
			}
		]
	}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
