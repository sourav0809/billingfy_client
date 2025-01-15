import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/common/UI/select.tsx'

const SelectShowTotalCustomer = () => {
  return (
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
  )
}

export default SelectShowTotalCustomer
