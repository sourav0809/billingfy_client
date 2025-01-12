import { Button } from '@/components/common/UI/button'
import { Checkbox } from '@/components/common/UI/checkbox'
import { Input } from '@/components/common/UI/input'
import { validateForm } from '@/helpers/schema.helper'
import { loginSchema, signUpSchema } from '@/schema/auth.schema'
import { Eye, EyeOff, Snowflake } from 'lucide-react'
import { useState, FormEvent } from 'react'
import { toast } from 'sonner'

interface AuthFormProps {
  isLogIn: boolean
  setIsLogIn: (value: boolean) => void
  formData: {
    name: string
    email: string
    password: string
  }
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string
      email: string
      password: string
    }>
  >
}

const AuthForm = ({
  isLogIn,
  setIsLogIn,
  formData,
  setFormData,
}: AuthFormProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const signUp = (e: FormEvent) => {
    e.preventDefault()
    if (!validateForm(signUpSchema, formData)) {
      toast.error('Please fill all fields correctly.')
      return
    }
    toast.success('Account created successfully')
  }

  const login = (e: FormEvent) => {
    e.preventDefault()
    if (!validateForm(loginSchema, formData)) {
      toast.error('Invalid email or password.')
      return
    }
    toast.success('Logged in successfully')
  }

  return (
    <div className="md:w-1/2 h-screen">
      <div className="px-4 py-2 flex justify-start items-center gap-2 absolute top-4 left-0 sm:left-4">
        <Snowflake className="h-12 w-12 text-blue-500 " />
        <p className="text-2xl font-medium ">Billingfy</p>
      </div>
      <div className="flex-1 flex items-center justify-center p-6 lg:p-8 h-screen">
        <div className="w-full sm:max-w-xl space-y-10">
          <div>
            <h2 className="text-2xl lg:text-4xl font-medium tracking-tight">
              {isLogIn ? 'Welcome back' : 'Create an account'}
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Good things take time & effort.
            </p>
          </div>

          <form
            className="space-y-4 lg:space-y-6 "
            onSubmit={isLogIn ? login : signUp}
          >
            <div className="space-y-4">
              {!isLogIn && (
                <div className="space-y-2">
                  <label htmlFor="name" className="text-base font-medium">
                    Company Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your company name"
                    className="h-11"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
              )}
              <div className="space-y-2">
                <label htmlFor="email" className="text-base font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="h-11"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter password"
                    className="h-11"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-500"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </div>

            {isLogIn && (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label htmlFor="remember" className="text-sm text-gray-600">
                    Remember me
                  </label>
                </div>
                <a
                  href="/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            )}

            <Button
              className="w-full h-11 bg-blue-600 hover:bg-blue-700"
              type="submit"
            >
              {isLogIn ? 'Log in' : 'Create Account'}
            </Button>

            <p className="text-center text-sm text-gray-600">
              {isLogIn ? "Don't have an account?" : 'Already have an account?'}{' '}
              <span
                onClick={() => setIsLogIn(!isLogIn)}
                className="text-blue-600 hover:text-blue-500 font-medium cursor-pointer"
              >
                {isLogIn ? 'Create an account' : 'Log in'}
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AuthForm
