import { BarChart3, Bell, FileText, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'

const AuthRightSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 12,
      },
    },
  }

  return (
    <div className="hidden md:flex flex-1 flex-col justify-start items-start bg-gradient-to-br from-blue-600 to-blue-800 text-white w-1/2 h-screen">
      {/* Content */}
      <motion.div
        className="pt-20 px-10 relative z-10 w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col gap-2">
          <motion.h1
            className="text-3xl font-medium tracking-wide"
            variants={itemVariants}
          >
            Streamline Your Billing Process
          </motion.h1>
          <motion.p className="text-xs" variants={itemVariants}>
            Automate invoicing, track payments, and manage subscriptions with
            our powerful billing platform.
          </motion.p>
          <motion.div className="grid gap-8 mt-16" variants={containerVariants}>
            <motion.div
              className="flex gap-4 items-start bg-white/10 p-4 rounded-md"
              variants={itemVariants}
            >
              <div className="h-10 w-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-sm">Smart Invoicing</h3>
                <p className="text-xs text-white/80">
                  Create and send professional invoices automatically
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4 items-start bg-white/10 p-4 rounded-md"
              variants={itemVariants}
            >
              <div className="h-10 w-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-sm">
                  Real-time Analytics
                </h3>
                <p className="text-xs text-white/80">
                  Track revenue and billing metrics at a glance
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4 items-start bg-white/10 p-4 rounded-md"
              variants={itemVariants}
            >
              <div className="h-10 w-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                <Bell className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-sm">
                  Smart Notifications
                </h3>
                <p className="text-xs text-white/80">
                  Get timely alerts for payments and invoice status
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4 items-start bg-white/10 p-4 rounded-md"
              variants={itemVariants}
            >
              <div className="h-10 w-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-sm">
                  Customer Communication
                </h3>
                <p className="text-xs text-white/80">
                  Seamlessly interact with clients through integrated messaging
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <div className="text-xs text-white/60 absolute bottom-0 px-10 pb-10">
        © 2024 Billingfy. All rights reserved.
      </div>
    </div>
  )
}

export default AuthRightSection
