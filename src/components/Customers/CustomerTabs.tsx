import { Button } from '@/components/common/UI/button.tsx'
import { Tabs, TabsList, TabsTrigger } from '@/components/common/UI/tabs.tsx'
import { Users } from 'lucide-react'

interface CustomerTabsProps {
  activeTab: string
  setActiveTab: (value: string) => void
}

const CustomerTabs: React.FC<CustomerTabsProps> = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="flex items-center gap-6">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-[400px]"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="cable-tv">Cable TV</TabsTrigger>
          <TabsTrigger value="broadband">Broadband</TabsTrigger>
        </TabsList>
      </Tabs>
      <Button variant="outline" size="icon">
        <Users className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default CustomerTabs
