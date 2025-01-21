import Area from '@/components/area/Area.tsx'
import Auth from '@/components/auth/Auth.tsx'
import AllCustomers from '@/components/customers/AllCustomers.tsx'
import Employee from '@/components/employee/Employees'
import PageNotFound from '@/components/page-not-found/PageNotFound.tsx'
import { pathNames } from '@/constants/path.const.ts'
import { createBrowserRouter } from 'react-router-dom'

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
  },
  {
    path: pathNames.CUSTOMERS,
    element: <AllCustomers />,
  },
  {
    path: pathNames.EMPLOYEES,
    element: <Employee />,
  },
  {
    path: pathNames.AREA,
    element: <Area />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
])

export default AppRouter
