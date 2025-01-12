import Layout from '@/components/common/Layout.tsx'

import { CommonSidebar } from '@/components/common/sidebar/CommonSidebar'

const Dashboard = () => {
  return (
    <Layout>
      <CommonSidebar />
      <div className="flex flex-1">
        <div className="p-2 md:p-10 rounded-tl-2xl  bg-white flex flex-col gap-2 flex-1 w-full h-full">
          <div className="flex gap-2">
            {[...new Array(4)].map((i) => (
              <div
                key={'first-array' + i}
                className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
              ></div>
            ))}
          </div>
          <div className="flex gap-2 flex-1">
            {[...new Array(2)].map((i) => (
              <div
                key={'second-array' + i}
                className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
