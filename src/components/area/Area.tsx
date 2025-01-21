import { useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/common/UI/card.tsx'
import Layout from '@/components/common/Layout.tsx'
import { MapPinPlus, MapIcon } from 'lucide-react'
import SearchArea from '@/components/area/SearchArea.tsx'
import SelectShowTotalAreas from '@/components/area/SelectShowTotalAreas.tsx'
import AreasTable from '@/components/area/AreasTable.tsx'
import AddNewAreaDialog from '@/components/area/AddNewAreaDialog.tsx'

const Area = () => {
  const [search, setSearch] = useState('')

  return (
    <Layout>
      <Card className="w-full h-full relative">
        <CardHeader className="pb-0">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col justify-center items-start gap-3">
              <div className=" space-y-1 mb-4">
                <h2 className="text-3xl font-medium ">Area Management</h2>
                <p className="text-muted-foreground text-sm">
                  Manage and monitor your Area effectively
                </p>
              </div>

              <AddNewAreaDialog>
                <MapPinPlus className="w-4 h-4" /> <p>Add New</p>
              </AddNewAreaDialog>
            </div>
            <div className="flex flex-col justify-between items-center gap-10">
              <Card className="px-4 py-4 shadow-none rounded-lg !border-none self-end">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <MapIcon className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Total Areas
                    </p>
                    <h3 className="text-xl font-bold text-gray-900">20</h3>
                  </div>
                </div>
              </Card>
              <SelectShowTotalAreas />
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-6 py-4">
          <SearchArea search={search} setSearch={setSearch} />
          <AreasTable />
        </CardContent>
      </Card>
    </Layout>
  )
}

export default Area
