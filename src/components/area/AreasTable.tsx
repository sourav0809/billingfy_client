import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/common/UI/table.tsx'

interface Area {
  name: string
  numberOfInternetConnection: number
  numberOfCableConnection: number
  numberOfEmployeesWorking: number
}

const areas: Area[] = [
  {
    name: 'Simlapal',
    numberOfInternetConnection: 5,
    numberOfCableConnection: 5,
    numberOfEmployeesWorking: 5,
  },
  {
    name: 'Simlapal',
    numberOfInternetConnection: 5,
    numberOfCableConnection: 5,
    numberOfEmployeesWorking: 5,
  },
  {
    name: 'Doldoria',
    numberOfInternetConnection: 5,
    numberOfCableConnection: 5,
    numberOfEmployeesWorking: 5,
  },
  {
    name: 'Lakhisagar',
    numberOfInternetConnection: 5,
    numberOfCableConnection: 5,
    numberOfEmployeesWorking: 5,
  },
  {
    name: 'Simlapal',
    numberOfInternetConnection: 5,
    numberOfCableConnection: 5,
    numberOfEmployeesWorking: 5,
  },
  {
    name: 'Simlapal',
    numberOfInternetConnection: 5,
    numberOfCableConnection: 5,
    numberOfEmployeesWorking: 5,
  },
  {
    name: 'Tilabani',
    numberOfInternetConnection: 100,
    numberOfCableConnection: 100,
    numberOfEmployeesWorking: 5,
  },
  {
    name: 'Jamda',
    numberOfInternetConnection: 5,
    numberOfCableConnection: 5,
    numberOfEmployeesWorking: 5,
  },
  {
    name: 'Jamda',
    numberOfInternetConnection: 5,
    numberOfCableConnection: 5,
    numberOfEmployeesWorking: 5,
  },
  {
    name: 'Jamda',
    numberOfInternetConnection: 5,
    numberOfCableConnection: 5,
    numberOfEmployeesWorking: 5,
  },
  {
    name: 'Jamda',
    numberOfInternetConnection: 5,
    numberOfCableConnection: 5,
    numberOfEmployeesWorking: 5,
  },
  {
    name: 'Jamda',
    numberOfInternetConnection: 5,
    numberOfCableConnection: 5,
    numberOfEmployeesWorking: 5,
  },
  {
    name: 'Jamda',
    numberOfInternetConnection: 5,
    numberOfCableConnection: 5,
    numberOfEmployeesWorking: 5,
  },

  // Add more customer data here
]

const AreasTable = () => {
  return (
    <div className="rounded-md border w-full h-full">
      <Table className="text-xs">
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className=" text-center">SI No</TableHead>
            <TableHead className="text-center ">Name</TableHead>
            <TableHead className="text-center">
              Number Of Internet Connection
            </TableHead>
            <TableHead className="text-center">
              Number Of Cable TV Connection
            </TableHead>
            <TableHead className="text-center">
              Number Of Employees Working
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="h-[80%] overflow-y-auto">
          {areas.map((area, index) => (
            <TableRow key={index}>
              <TableCell className="text-center">{index + 1}</TableCell>
              <TableCell className="text-center">{area.name}</TableCell>
              <TableCell className="text-center">
                {area.numberOfInternetConnection}
              </TableCell>
              <TableCell className="text-center">
                {area.numberOfCableConnection}
              </TableCell>
              <TableCell className="text-center">
                {area.numberOfEmployeesWorking}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default AreasTable
