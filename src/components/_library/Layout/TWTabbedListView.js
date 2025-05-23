import ListView from "./TWListView"
import SelectBar from "../SelectBar/TWSelectBar"
import { useRouter } from "next/router"

const TabbedListView = ({
  children,
  activeTab,
  tabs = [],
  layoutProps = {},
  wrapperProps = {},
  Title = null,
  Description = null,
  Extra = null,
}) => {
  const router = useRouter()
  return (
    <ListView
      {...layoutProps}
      {...wrapperProps}
    >
      {Title && <Title />}
      {Description && <Description />}
      {Extra && <Extra />}
      <SelectBar
        items={tabs}
        selectedItem={{value: activeTab}}
        selectItem={(tab) => {
          router.push(tab.route)
        }}
        className="tw:!mb-4"
        transparentItems
      />
      {children}
    </ListView>
  )
}

export default TabbedListView