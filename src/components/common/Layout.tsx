import Sidebar from '@/components/common/sidebar/CommonSidebar.tsx'
import CommonTopBar from '@/components/common/topbar/CommonTopBar.tsx'
import { cn } from '@/lib/utils.ts'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        'relative rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800  flex-1 w-screen h-screen border border-neutral-200 dark:border-neutral-700 overflow-hidden',
      )}
    >
      <Sidebar />
      <CommonTopBar />
      <div className="mt-[3rem] p-5 w-full h-[96%]">{children}</div>
    </div>
  )
}

export default Layout
