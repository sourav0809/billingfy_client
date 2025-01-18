import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/common/UI/table.tsx'

interface Employee {
  name: string
  email: string
  mobile: string
  numberOfAreas: number
}

const employees: Employee[] = [
  {
    name: 'John Doe',
    email: 'd9o2t@example.com',
    mobile: '1234567890',
    numberOfAreas: 5,
  },
  {
    name: 'John Doe',
    email: 'd9o2t@example.com',
    mobile: '1234567890',
    numberOfAreas: 5,
  },
  {
    name: 'John Doe',
    email: 'd9o2t@example.com',
    mobile: '1234567890',
    numberOfAreas: 5,
  },
  {
    name: 'John Doe',
    email: 'd9o2t@example.com',
    mobile: '1234567890',
    numberOfAreas: 5,
  },
  {
    name: 'John Doe',
    email: 'd9o2t@example.com',
    mobile: '1234567890',
    numberOfAreas: 5,
  },
  {
    name: 'John Doe',
    email: 'd9o2t@example.com',
    mobile: '1234567890',
    numberOfAreas: 5,
  },
  {
    name: 'John Doe',
    email: 'd9o2t@example.com',
    mobile: '1234567890',
    numberOfAreas: 5,
  },
  {
    name: 'John Doe',
    email: 'd9o2t@example.com',
    mobile: '1234567890',
    numberOfAreas: 5,
  },
  {
    name: 'John Doe',
    email: 'd9o2t@example.com',
    mobile: '1234567890',
    numberOfAreas: 5,
  },
  {
    name: 'John Doe',
    email: 'd9o2t@example.com',
    mobile: '1234567890',
    numberOfAreas: 5,
  },
  {
    name: 'John Doe',
    email: 'd9o2t@example.com',
    mobile: '1234567890',
    numberOfAreas: 5,
  },
  {
    name: 'John Doe',
    email: 'd9o2t@example.com',
    mobile: '1234567890',
    numberOfAreas: 5,
  },

  // Add more customer data here
]

const EmployeesTable = () => {
  return (
    <div className="rounded-md border w-full h-full">
      <Table className="text-xs">
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className=" text-center">SI No</TableHead>
            <TableHead className="text-center ">Name</TableHead>
            <TableHead className="text-center">Email</TableHead>
            <TableHead className="text-center">Mobile No</TableHead>
            <TableHead className="text-center">
              Number Of Working Areas
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="h-[80%] overflow-y-auto">
          {employees.map((employees, index) => (
            <TableRow key={index}>
              <TableCell className="text-center">{index + 1}</TableCell>
              <TableCell className="text-center">{employees.name}</TableCell>
              <TableCell className="text-center">{employees.email}</TableCell>
              <TableCell className="text-center">{employees.mobile}</TableCell>
              <TableCell className="text-center mx-0 px-0">
                {employees.numberOfAreas}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default EmployeesTable
