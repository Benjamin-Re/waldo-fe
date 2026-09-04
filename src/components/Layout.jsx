import { Outlet } from 'react-router'
import { Nav } from './Nav'
import { ContextProvider } from './ContextProvider'

export function Layout () {
	
	return (
		<ContextProvider>
			<Nav />
			<Outlet /> 
		</ContextProvider>
	)
}