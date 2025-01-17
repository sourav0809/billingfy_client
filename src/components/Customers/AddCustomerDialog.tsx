import * as React from 'react'
import { Button } from '@/components/common/UI/button.tsx'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/common/UI/card.tsx'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/common/UI/dialog.tsx'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/common/UI/form.tsx'
import { Input } from '@/components/common/UI/input.tsx'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/common/UI/select.tsx'
import { ScrollArea } from '@/components/common/UI/scroll-area.tsx'
import { Textarea } from '@/components/common/UI/textarea.tsx'
import { useForm } from 'react-hook-form'

const employees = [
  'Rajesh Kumar',
  'Priya Singh',
  'Amit Patel',
  'Neha Sharma',
  'Suresh Verma',
]

const areas = [
  'Simlapal',
  'Taldangra',
  'Bishnupur',
  'Bankura',
  'Sonamukhi',
  'Patrasayer',
]

const AddCustomerDialog = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false)
  const form = useForm({
    defaultValues: {
      name: '',
      mobile: '',
      email: '',
      area: '',
      employee: '',
      balanceDue: '',
      planExpiry: new Date(),
      address: '',
    },
  })

  function onSubmit(data: any) {
    console.log(data)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">{children}</Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl h-[90vh]">
        <DialogHeader>
          <DialogTitle>Customer Information</DialogTitle>
          <DialogDescription>
            Enter the customer details to create a new account or update
            existing information.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <ScrollArea className="h-[calc(90vh-9rem)] pr-4">
              <div className="space-y-6 mb-7">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Details</CardTitle>
                    <CardDescription>
                      Please fill in the basic information about the customer.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-4">
                      {/* 1st column  */}
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter customer name"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter email address"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* 2nd column  */}
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="mobile"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Mobile No</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter mobile number"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="area"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Area</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select area" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {areas.map((area) => (
                                    <SelectItem key={area} value={area}>
                                      {area}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* 3rd column */}
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="employee"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Employee</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select employee" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {employees.map((employee) => (
                                    <SelectItem key={employee} value={employee}>
                                      {employee}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="balanceDue"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Balance Due</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter balance amount"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Address */}
                      <div className="w-full">
                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Address</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Enter customer's full address"
                                  className="resize-none h-[120px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Hardware Details</CardTitle>
                    <CardDescription>
                      Please fill the hardware details of the customer.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Customer Id</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter customer Id"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mac Address</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter customer mac address"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* PLAN DETAILS OF CUSTOMER  */}
                <Card className="">
                  <CardHeader>
                    <CardTitle>Plan Details</CardTitle>
                    <CardDescription>
                      Enter the plan details of the customer
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-2 w-full">
                      <FormField
                        control={form.control}
                        name="area"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Choose Plan</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Please choose the desired plan" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {areas.map((area) => (
                                  <SelectItem key={area} value={area}>
                                    {area}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="w-full">
                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Plan Description</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Enter customer's full address"
                                  className="resize-none h-[120px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollArea>

            <div className="flex justify-end gap-4 pt-2 w-full">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default AddCustomerDialog
