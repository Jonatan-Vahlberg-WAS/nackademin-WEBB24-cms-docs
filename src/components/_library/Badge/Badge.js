import { Badge as StrapBadge } from "reactstrap";
import styled from "styled-components";

const BadgeWrapper = styled.div`
  & .badge-selectable {
    cursor: pointer;
    &:hover {
      filter: brightness(90%);
    }
  }
`;

const Badge = ({ children, ...props }) => {
  return (
    <BadgeWrapper>
      <StrapBadge pill color="primary" {...props}>
        {children}
      </StrapBadge>
    </BadgeWrapper>
  );
};

export default Badge;
