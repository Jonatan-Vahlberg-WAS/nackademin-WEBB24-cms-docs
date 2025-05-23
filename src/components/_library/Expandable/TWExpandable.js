import { useState } from "react"
import styled from "styled-components"
import T from "../Ui/TWTypography"
import { FaPlus, FaMinus } from "react-icons/fa6"
import ExpandableHeader from "./TWExpandableHeader"
import ExpandableBody from "./TWExpandableBody"
import Divider from "../Ui/TWDivider"

const Expandable = ({ 
  defaultExpanded = false,
  Header = ExpandableHeader,
  Title = T.Title,
  Body = ExpandableBody,
  titleText = "",
  children,
  headerProps = {},
  bodyProps = {},
  titleProps = {},
  iconProps = {},
  showDivider = true,
  isSubExpandable = false,
  className = ''
 }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  bodyProps = isExpanded ? bodyProps : {}

  return (
    <div className={className}>
      <Header onClick={() => setIsExpanded(!isExpanded)} {...headerProps} showDivider={showDivider}>
        <Title {...titleProps}>
          {titleText}
        </Title>
        {!isSubExpandable && <i
          className={`fa fa-chevron-${isExpanded ? "up" : "down"}`}
          {...iconProps}

          role="button"
        />}
        {isSubExpandable && isExpanded && <FaMinus {...iconProps}  role="button"/>}
        {isSubExpandable && !isExpanded && <FaPlus {...iconProps}  role="button"/>}
      </Header>
      <Body isExpanded={isExpanded} {...bodyProps}>
        {children}
      </Body>
    </div>
  )
 }

export default Expandable