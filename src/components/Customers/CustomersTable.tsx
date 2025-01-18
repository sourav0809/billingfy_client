import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/common/UI/table.tsx'

import { Badge } from '@/components/common/UI/badge.tsx'

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
          <TableRow className="bg-gray-50">
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default CustomersTable
