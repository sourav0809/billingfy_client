import { useState } from 'react'

import { Card, CardContent, CardHeader } from '@/components/common/UI/card.tsx'

import Layout from '@/components/common/Layout.tsx'
import CustomerTabs from '@/components/customers/CustomerTabs.tsx'
import SelectShowTotalCustomer from '@/components/customers/SelectShowTotalCustomer.tsx'
import SearchCustomerWithFilter from '@/components/customers/SearchCustomerWithFilter.tsx'
import CustomersTable from '@/components/customers/CustomersTable.tsx'

const AllCustomers = () => {
  const [activeTab, setActiveTab] = useState('cable-tv')
  const [search, setSearch] = useState('')

  return (
    <Layout>
      <Card className="w-full h-full relative">
        <CardHeader className="pb-0">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <CustomerTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <SelectShowTotalCustomer />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <SearchCustomerWithFilter search={search} setSearch={setSearch} />
          <CustomersTable />
        </CardContent>
      </Card>
    </Layout>
  )
}

export default AllCustomers
