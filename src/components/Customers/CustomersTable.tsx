import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
  PaginationPrevious,
} from '@/components/common/UI/pagination.tsx'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/common/UI/dropdown-menu.tsx'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/common/UI/table.tsx'

import { Badge } from '@/components/common/UI/badge.tsx'
import { Button } from '@/components/common/UI/button.tsx'
import { MoreVertical, Download, Printer, Trash } from 'lucide-react'

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

const CustomersTable = () => {
  return (
    <div className="rounded-md border">
      <Table className="text-xs">
        <TableHeader>
          <TableRow>
            <TableHead className=" text-center">SI No</TableHead>
            <TableHead className="text-center">Cust Id</TableHead>
            <TableHead className="text-center ">Name</TableHead>
            <TableHead className="text-center">Address</TableHead>
            <TableHead className="text-center">Mobile No</TableHead>
            <TableHead className="text-center">STB</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Amount</TableHead>
            <TableHead className="text-center">Due</TableHead>
            <TableHead className="text-center">Exp Date</TableHead>
            <TableHead className="w-[80px] text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="h-[80%] overflow-y-auto">
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell className="text-center">{customer.id}</TableCell>
              <TableCell className="text-center">{customer.custId}</TableCell>
              <TableCell className="text-center mx-0 px-0">
                {customer.name}
              </TableCell>
              <TableCell className="text-center">{customer.address}</TableCell>
              <TableCell className="text-center">{customer.mobile}</TableCell>
              <TableCell className="text-center">{customer.stb}</TableCell>
              <TableCell className="text-center">
                <Badge
                  variant={
                    customer.status === 'Active' ? 'success' : 'secondary'
                  }
                >
                  {customer.status}
                </Badge>
              </TableCell>
              <TableCell className="text-center">₹{customer.amount}</TableCell>
              <TableCell className="text-center">₹{customer.amount}</TableCell>
              <TableCell className="text-center">{customer.expDate}</TableCell>
              <TableCell className="text-center">
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

      <div className="flex justify-center absolute bg-white bottom-1 right-2 w-fit !text-xs">
        <Pagination className="text-xs">
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
    </div>
  )
}

export default CustomersTable
