import { Button } from '@/components/common/UI/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/common/UI/dialog'
import { Input } from '@/components/common/UI/input'
import { Label } from '@/components/common/UI/label'

import { useState } from 'react'
import { MapIcon, Users, Tv, Wifi } from 'lucide-react'

export default function AddNewAreaDialog({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="text-xs">{children}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Area Information
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            Enter the Area details to add a new Area or edit an existing
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          {/* 2x2 Grid for main inputs */}
          <div className="grid grid-cols-1  gap-6">
            {/* Name Input */}
            <div className="grid gap-2">
              <Label htmlFor="name">Area Name</Label>
              <div className="relative">
                <MapIcon className="absolute left-3 top-2 h-4 w-4 text-gray-400" />
                <Input
                  id="name"
                  placeholder="Enter area name"
                  className="pl-10"
                />
              </div>
            </div>

            {/* Employee ID */}
            <div className="grid gap-2">
              <Label htmlFor="id">Number Of Internet Connection</Label>
              <div className="relative">
                <Wifi className="absolute left-3 top-2 h-4 w-4 text-gray-400" />
                <Input
                  id="id"
                  placeholder="Number Of Internet Connection"
                  className="pl-10"
                />
              </div>
            </div>

            {/* Phone Input */}
            <div className="grid gap-2">
              <Label htmlFor="phone">Number Of Cable TV connection</Label>
              <div className="relative">
                <Tv className="absolute left-3 top-2 h-4 w-4 text-gray-400" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Number Of Cable TV connection"
                  className="pl-10"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="grid gap-2">
              <Label htmlFor="email">Number Of Working Employees</Label>
              <div className="relative">
                <Users className="absolute left-3 top-2 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Number Of Working Employees"
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            className="w-full sm:w-auto"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="w-full sm:w-auto"
            onClick={() => setOpen(false)}
          >
            Add Area
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
