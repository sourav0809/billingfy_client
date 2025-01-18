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
import { Textarea } from '@/components/common/UI/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/common/UI/select'
import { useState } from 'react'
import { Building2, Mail, Phone, User, X } from 'lucide-react'

export default function AddNewEmployeeDialog({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const [selectedAreas, setSelectedAreas] = useState<string[]>([])

  const workAreas = ['Jamda', 'Tilabani', 'Doldoria', 'Simlapal']

  const toggleWorkArea = (area: string) => {
    setSelectedAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area],
    )
  }

  const removeArea = (areaToRemove: string) => {
    setSelectedAreas((prev) => prev.filter((area) => area !== areaToRemove))
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="text-xs">{children}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Employee Information
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            Enter the Employee details to add a new employee or edit an existing
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          {/* 2x2 Grid for main inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name Input */}
            <div className="grid gap-2">
              <Label htmlFor="name">Employee Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="name"
                  placeholder="Enter employee name"
                  className="pl-10"
                />
              </div>
            </div>

            {/* Employee ID */}
            <div className="grid gap-2">
              <Label htmlFor="id">Employee ID</Label>
              <div className="relative">
                <Building2 className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="id"
                  placeholder="Enter employee ID"
                  className="pl-10"
                />
              </div>
            </div>

            {/* Phone Input */}
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter phone number"
                  className="pl-10"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          {/* Work Areas Multi-Select */}
          <div className="grid gap-2">
            <Label>Work Areas</Label>
            <Select onValueChange={toggleWorkArea}>
              <SelectTrigger>
                <SelectValue placeholder="Select a work areas" />
              </SelectTrigger>
              <SelectContent>
                {workAreas.map((area) => (
                  <SelectItem key={area} value={area}>
                    {area}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Selected Areas Display */}
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedAreas.map((area) => (
                <div
                  key={area}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                >
                  {area}
                  <button
                    onClick={() => removeArea(area)}
                    className="hover:bg-blue-200 rounded-full p-1"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>

            {selectedAreas.length === 0 && (
              <p className="text-sm text-red-500">
                Please select at least one work area
              </p>
            )}
          </div>

          {/* Address Section */}
          <div className="grid gap-2">
            <Label htmlFor="address">Address</Label>
            <Textarea
              id="address"
              placeholder="Enter complete address"
              className="min-h-[8rem]"
            />
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
            disabled={selectedAreas.length === 0}
            onClick={() => setOpen(false)}
          >
            Add Employee
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
