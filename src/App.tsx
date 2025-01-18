import AppRouter from '@/routes/app.router.tsx'
import { RouterProvider } from 'react-router-dom'

const App = () => {
  return (
    <div className="w-full h-full">
      <RouterProvider router={AppRouter} />
    </div>
  )
}

export default App
