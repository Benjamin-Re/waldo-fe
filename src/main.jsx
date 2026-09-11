import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from './pages/HomePage'

import { Layout } from './components/Layout'
import { GamePage } from './pages/GamePage'

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
				element: <GamePage game='feria' key='feria'/>
			},
			{
				path: '/carpet',
				element: <GamePage game='carpet' key='carpet'/>,
			}
		]
	}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
