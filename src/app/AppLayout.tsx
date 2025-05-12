import { Outlet } from '@tanstack/react-router'
import { Toaster } from 'react-hot-toast'

const AppLayout = () => {
  return (
    <>
      <Toaster />
      <Outlet />
    </>
  )
}

export default AppLayout
