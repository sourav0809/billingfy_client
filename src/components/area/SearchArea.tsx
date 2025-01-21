import { Input } from '@/components/common/UI/input.tsx'
import { Search } from 'lucide-react'

interface SearchCustomerWithFilterProps {
  search: string
  setSearch: (value: string) => void
}
const SearchArea = ({ search, setSearch }: SearchCustomerWithFilterProps) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-5">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search any area by name"
          className="pl-8"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  )
}

export default SearchArea
