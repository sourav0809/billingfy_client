import React, { createContext, useContext, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  Tags,
  Users,
  Snowflake,
  HomeIcon,
  UserRound,
} from 'lucide-react'
import { pathNames } from '@/constants/path.const.ts'
import { Link, useNavigate } from 'react-router-dom'

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
  path: string
}> = ({ icon, text, path }) => {
  const { isExpanded } = useContext(SidebarContext)
  const activePath = window.location.pathname

  return (
    <div className="relative">
      <div
        className={`
          flex items-center px-3 py-2 z-50
          hover:bg-gray-100 rounded-md cursor-pointer w-full ${activePath === path ? 'bg-gray-100' : ''}
        `}
      >
        <div
          className={`${activePath === path ? '!text-blue-500' : 'text-muted-foreground'}`}
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
  const navigate = useNavigate()

  const navigationPaths = [
    {
      label: 'Dashboard',
      icon: <LayoutDashboard className="h-5 w-5" />,
      path: pathNames.DASHBOARD,
      onClick: () => {
        navigate(pathNames.DASHBOARD)
      },
    },
    {
      label: 'Users',
      icon: <Users className="h-5 w-5" />,
      path: pathNames.CUSTOMERS,
      onClick: () => navigate(pathNames.CUSTOMERS),
    },
    {
      label: 'Plans',
      icon: <Tags className="h-5 w-5" />,
      path: pathNames.PLANS,
      onClick: () => navigate(pathNames.PLANS),
    },
    {
      label: 'Area',
      icon: <HomeIcon className="h-5 w-5" />,
      path: pathNames.AREA,
      onClick: () => navigate(pathNames.AREA),
    },
    {
      label: 'Employee',
      icon: <UserRound className="h-5 w-5" />,
      path: pathNames.EMPLOYEES,
      onClick: () => navigate(pathNames.EMPLOYEES),
    },
  ]

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
        {navigationPaths.map((item) => {
          return (
            <Link key={item.label} to={item.path}>
              <MenuItem icon={item.icon} text={item.label} path={item.path} />
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      {/* <div className="absolute bottom-0 w-full p-2">
        <div className="border rounded-md">
          <MenuItem
            icon={<LogOut className="text-muted-foreground h-5 w-5" />}
            text="Sign out"
          />
        </div>
      </div> */}
    </motion.div>
  )
}

export default Sidebar
