'use client'

import { useState } from 'react'
import {
  Search,
  Users,
  MoreVertical,
  Download,
  Printer,
  Trash,
} from 'lucide-react'
import { Button } from '@/components/common/UI/button.tsx'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/common/UI/select.tsx'
import { Input } from '@/components/common/UI/input.tsx'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/common/UI/table.tsx'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/common/UI/dropdown-menu.tsx'
import { Badge } from '@/components/common/UI/badge.tsx'
import { Card, CardContent, CardHeader } from '@/components/common/UI/card.tsx'
import { Tabs, TabsList, TabsTrigger } from '@/components/common/UI/tabs.tsx'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
  PaginationPrevious,
} from '@/components/common/UI/pagination.tsx'
import Layout from '@/components/common/Layout.tsx'

interface Customer {
  id: number
  custId: string
  name: string
  address: string
  mobile: string
  stb: number
  status: 'Active' | 'Inactive'
  amount: number
  received: number
  balance: number
  expDate: string
}

const customers: Customer[] = [
  {
    id: 1,
    custId: '23523532',
    name: 'Subrata Pathak',
    address: 'Lakhisagar',
    mobile: '9126375017',
    stb: 1,
    status: 'Active',
    amount: 500,
    received: 300,
    balance: 200,
    expDate: '12.10.2024',
  },
  {
    id: 1,
    custId: '23523532',
    name: 'Subrata Pathak',
    address: 'Lakhisagar',
    mobile: '9126375017',
    stb: 1,
    status: 'Active',
    amount: 500,
    received: 300,
    balance: 200,
    expDate: '12.10.2024',
  },
  {
    id: 1,
    custId: '23523532',
    name: 'Subrata Pathak',
    address: 'Lakhisagar',
    mobile: '9126375017',
    stb: 1,
    status: 'Active',
    amount: 500,
    received: 300,
    balance: 200,
    expDate: '12.10.2024',
  },
  {
    id: 1,
    custId: '23523532',
    name: 'Subrata Pathak',
    address: 'Lakhisagar',
    mobile: '9126375017',
    stb: 1,
    status: 'Active',
    amount: 500,
    received: 300,
    balance: 200,
    expDate: '12.10.2024',
  },

  {
    id: 1,
    custId: '23523532',
    name: 'Subrata Pathak',
    address: 'Lakhisagar',
    mobile: '9126375017',
    stb: 1,
    status: 'Active',
    amount: 500,
    received: 300,
    balance: 200,
    expDate: '12.10.2024',
  },
  {
    id: 1,
    custId: '23523532',
    name: 'Subrata Pathak',
    address: 'Lakhisagar',
    mobile: '9126375017',
    stb: 1,
    status: 'Active',
    amount: 500,
    received: 300,
    balance: 200,
    expDate: '12.10.2024',
  },
  {
    id: 1,
    custId: '23523532',
    name: 'Subrata Pathak',
    address: 'Lakhisagar',
    mobile: '9126375017',
    stb: 1,
    status: 'Active',
    amount: 500,
    received: 300,
    balance: 200,
    expDate: '12.10.2024',
  },
  {
    id: 1,
    custId: '23523532',
    name: 'Subrata Pathak',
    address: 'Lakhisagar',
    mobile: '9126375017',
    stb: 1,
    status: 'Active',
    amount: 500,
    received: 300,
    balance: 200,
    expDate: '12.10.2024',
  },
  {
    id: 1,
    custId: '23523532',
    name: 'Subrata Pathak',
    address: 'Lakhisagar',
    mobile: '9126375017',
    stb: 1,
    status: 'Active',
    amount: 500,
    received: 300,
    balance: 200,
    expDate: '12.10.2024',
  },
  {
    id: 1,
    custId: '23523532',
    name: 'Subrata Pathak',
    address: 'Lakhisagar',
    mobile: '9126375017',
    stb: 1,
    status: 'Active',
    amount: 500,
    received: 300,
    balance: 200,
    expDate: '12.10.2024',
  },
  // Add more customer data here
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('cable-tv')
  const [search, setSearch] = useState('')

  return (
    <Layout>
      <Card className="w-full h-full relative">
        <CardHeader className="pb-0">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-6">
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-[400px]"
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="cable-tv">Cable TV</TabsTrigger>
                  <TabsTrigger value="broadband">Broadband</TabsTrigger>
                </TabsList>
              </Tabs>
              <Button variant="outline" size="icon">
                <Users className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm text-muted-foreground">Show:</p>
              <Select defaultValue="40">
                <SelectTrigger className="w-[70px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="30">30</SelectItem>
                  <SelectItem value="40">40</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search any user by name or ID"
                className="pl-8"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Areas</SelectItem>
                  <SelectItem value="north">North</SelectItem>
                  <SelectItem value="south">South</SelectItem>
                  <SelectItem value="east">East</SelectItem>
                  <SelectItem value="west">West</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Employee" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Employees</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px] text-center">SI No</TableHead>
                  <TableHead>Cust Id</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Mobile No</TableHead>
                  <TableHead>STB</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Due</TableHead>
                  <TableHead>Exp Date</TableHead>
                  <TableHead className="w-[80px]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="h-[80%] overflow-y-auto">
                {customers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell className="text-center">{customer.id}</TableCell>
                    <TableCell>{customer.custId}</TableCell>
                    <TableCell className="font-medium">
                      {customer.name}
                    </TableCell>
                    <TableCell>{customer.address}</TableCell>
                    <TableCell>{customer.mobile}</TableCell>
                    <TableCell>{customer.stb}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          customer.status === 'Active' ? 'success' : 'secondary'
                        }
                      >
                        {customer.status}
                      </Badge>
                    </TableCell>
                    <TableCell>₹{customer.amount}</TableCell>
                    <TableCell>₹{customer.amount}</TableCell>
                    <TableCell>{customer.expDate}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Printer className="mr-2 h-4 w-4" />
                            Print
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Trash className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 flex justify-center absolute bg-white w-full bottom-2">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </CardContent>
      </Card>
    </Layout>
  )
}
