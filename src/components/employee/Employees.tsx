import { useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/common/UI/card.tsx'
import Layout from '@/components/common/Layout.tsx'
import SelectShowTotalEmployees from '@/components/employee/SelectShowTotalEmployees.tsx'
import SearchEmployeeWithFilter from '@/components/employee/SearchEmployeeWithFilter.tsx'
import EmployeesTable from '@/components/employee/EmployeesTable.tsx'
import { UserPlus, Users } from 'lucide-react'
import AddNewEmployeeDialog from '@/components/employee/AddNewEmployeeDialog.tsx'

const Employees = () => {
  const [search, setSearch] = useState('')

  return (
    <Layout>
      <Card className="w-full h-full relative">
        <CardHeader className="pb-0">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col justify-center items-start gap-3">
              <div className=" space-y-1 mb-4">
                <h2 className="text-3xl font-medium ">Employee Management</h2>
                <p className="text-muted-foreground text-sm">
                  Manage and monitor your employees effectively
                </p>
              </div>

              <AddNewEmployeeDialog>
                <UserPlus className="w-4 h-4" /> <p>Add New</p>
              </AddNewEmployeeDialog>
            </div>
            <div className="flex flex-col gap-4">
              <Card className="px-4 py-4 shadow-none rounded-lg !border-none self-end">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Total Employees
                    </p>
                    <h3 className="text-xl font-bold text-gray-900">20</h3>
                  </div>
                </div>
              </Card>
              <SelectShowTotalEmployees />
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-6 py-4">
          <SearchEmployeeWithFilter search={search} setSearch={setSearch} />
          <EmployeesTable />
        </CardContent>
      </Card>
    </Layout>
  )
}

export default Employees
