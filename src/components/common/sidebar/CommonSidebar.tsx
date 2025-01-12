import { useState } from 'react'
import {
  Sidebar,
  SidebarBody,
  SidebarLink,
  useSidebar,
} from '@/components/common/UI/sidebar.tsx'
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { Snowflake } from 'lucide-react'

export function CommonSidebar() {
  const links = [
    {
      label: 'Dashboard',
      href: '#',
      icon: <IconBrandTabler className="h-6 w-6 flex-shrink-0" />,
    },
    {
      label: 'Profile',
      href: '#',
      icon: <IconUserBolt className="h-6 w-6 flex-shrink-0" />,
    },
    {
      label: 'Settings',
      href: '#',
      icon: <IconSettings className="h-6 w-6 flex-shrink-0" />,
    },
    {
      label: 'Logout',
      href: '#',
      icon: <IconArrowLeft className="h-6 w-6 flex-shrink-0" />,
    },
  ]
  const [open, setOpen] = useState(false)
  return (
    <div className="">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <LogoIcon />
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          {/* <div>
            <SidebarLink
              link={{
                label: 'Manu Arora',
                href: '#',
                icon: '',
              }}
            />
          </div> */}
        </SidebarBody>
      </Sidebar>
    </div>
  )
}
export const Logo = () => {
  return (
    <div className="font-normal flex items-center text-sm text-black py-1 relative z-20">
      <Snowflake className="h-8 w-8 text-blue-500 " />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre text-base"
      >
        Billingfy
      </motion.span>
    </div>
  )
}
export const LogoIcon = () => {
  const { open } = useSidebar()
  return (
    <div className="font-normal flex items-center gap-2 text-sm text-black py-1 relative z-20 px-2">
      <Snowflake className="h-8 w-8 text-blue-500 " />
      {open && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-medium text-black dark:text-white whitespace-pre text-base"
        >
          Billingfy
        </motion.span>
      )}
    </div>
  )
}

// Dummy dashboard component with content
