import { useState } from 'react'
import AuthForm from '@/components/auth/AuthForm'
import AuthRightSection from '@/components/auth/AuthRightSection.tsx'

const Auth = () => {
  const [isLogIn, setIsLogIn] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* Left Section - Auth Form */}
      <AuthForm
        isLogIn={isLogIn}
        setIsLogIn={setIsLogIn}
        formData={formData}
        setFormData={setFormData}
      />

      {/* Right Section - Blue gradient background with text and icons (hidden on mobile) */}
      <AuthRightSection />
    </div>
  )
}

export default Auth
