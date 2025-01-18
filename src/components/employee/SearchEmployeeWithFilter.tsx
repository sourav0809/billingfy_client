import { Input } from '@/components/common/UI/input.tsx'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/common/UI/select.tsx'
import { Search } from 'lucide-react'

interface SearchCustomerWithFilterProps {
  search: string
  setSearch: (value: string) => void
}
const SearchEmployeeWithFilter = ({
  search,
  setSearch,
}: SearchCustomerWithFilterProps) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-5">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search any employee by name or email"
          className="pl-8"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter Area" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Area</SelectItem>
            <SelectItem value="active">Jamda</SelectItem>
            <SelectItem value="inactive">Tilabani</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default SearchEmployeeWithFilter
