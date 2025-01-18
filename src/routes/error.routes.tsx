import PageNotFound from '@/components/page-not-found/PageNotFound.tsx'

const errorRoutes = [
  {
    element: <PageNotFound />,
    path: '*',
  },
]

export default errorRoutes
