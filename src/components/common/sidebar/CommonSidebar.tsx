import React, { createContext, useContext, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  FileEdit,
  Tags,
  FolderOpen,
  Users,
  Settings,
  LogOut,
  Snowflake,
} from 'lucide-react'

const SidebarContext = createContext<{
  isExpanded: boolean
  setIsExpanded: (value: boolean) => void
}>({
  isExpanded: false,
  setIsExpanded: () => {},
})

const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <SidebarContext.Provider value={{ isExpanded, setIsExpanded }}>
      {children}
    </SidebarContext.Provider>
  )
}

const MenuItem: React.FC<{
  icon: React.ReactNode
  text: string
}> = ({ icon, text }) => {
  const { isExpanded } = useContext(SidebarContext)

  return (
    <div className="relative">
      <div
        className={`
          flex items-center px-3 py-2 z-50
          hover:bg-gray-100 rounded-md cursor-pointer w-full ${text === 'Dashboard' ? 'bg-gray-100' : ''}
        `}
      >
        <div
          className={`${text === 'Dashboard' ? '!text-blue-500' : 'text-muted-foreground'}`}
        >
          {icon}
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.span
              className="ml-3 whitespace-nowrap text-sm text-gray-700"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
              }}
            >
              {text}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

const Sidebar = () => {
  return (
    <SidebarProvider>
      <SidebarContent />
    </SidebarProvider>
  )
}

const SidebarContent = () => {
  const { isExpanded, setIsExpanded } = useContext(SidebarContext)

  return (
    <motion.div
      className="h-screen bg-white border-r relative z-50"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      animate={{
        width: isExpanded ? 270 : 80,
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
    >
      {/* Brand */}
      <div className="h-16 px-[1.1rem] flex items-center w-full">
        <div className="flex items-center relative">
          <Snowflake className="h-8 w-8 text-blue-500 " />
          <AnimatePresence>
            {isExpanded && (
              <motion.span
                className="ml-2 font-semibold text-gray-700 absolute left-[40px] whitespace-nowrap"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                }}
              >
                Billingfy
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-2 py-2 flex flex-col gap-2 mt-2">
        <MenuItem
          icon={<LayoutDashboard className="h-5 w-5" />}
          text="Dashboard"
        />
        <MenuItem icon={<FileEdit className=" h-5 w-5" />} text="Posts" />
        <MenuItem
          icon={<FolderOpen className=" h-5 w-5" />}
          text="Categories"
        />
        <MenuItem icon={<Tags className="h-5 w-5" />} text="Tags" />
        <MenuItem icon={<Users className=" h-5 w-5" />} text="Users" />
        <MenuItem icon={<Settings className=" h-5 w-5" />} text="Account" />
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 w-full p-2">
        <div className="border rounded-md">
          <MenuItem
            icon={<LogOut className="text-muted-foreground h-5 w-5" />}
            text="Sign out"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Sidebar
