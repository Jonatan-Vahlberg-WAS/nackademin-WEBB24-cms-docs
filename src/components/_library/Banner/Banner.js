import styled from "styled-components";
import theme from "../../../utils/theme";

const { colors } = theme;

const variants = {
  warning: {
    backgroundColor: colors.yellow_100,
    borderColor: colors.yellow_300,
    titleColor: colors.yellow_700,
    subtitleColor: colors.yellow_700,
    iconWrapperColor: colors.yellow_500,
    iconColor: colors.white,
  },
  success: {
    backgroundColor: colors.green_50,
    borderColor: colors.green_300,
    titleColor: colors.green_700,
    subtitleColor: colors.green_900,
    iconWrapperColor: colors.green_600,
    iconColor: colors.white,
  },
  info: {
    backgroundColor: colors.blue_100,
    borderColor: colors.blue_300,
    titleColor: colors.blue_900,
    subtitleColor: colors.blue_700,
    iconWrapperColor: colors.blue_500,
    iconColor: colors.white,
  },
  danger: {
    backgroundColor: colors.red_100,
    borderColor: colors.red_300,
    titleColor: colors.red_700,
    subtitleColor: colors.red_700,
    iconWrapperColor: colors.red_500,
    iconColor: colors.white,
  },
  default: {
    backgroundColor: colors.gray_100,
    borderColor: colors.gray_300,
    titleColor: colors.gray_700,
    subtitleColor: colors.gray_700,
    iconWrapperColor: colors.gray_500,
    iconColor: colors.white,
  },
};

export const Wrapper = styled.div`
  ${(props) => {
    const variant = variants[props.variant] || variants.default;
    return `
        --background-color: ${variant.backgroundColor};
        --border-color: ${variant.borderColor};
        --title-color: ${variant.titleColor};
        --subtitle-color: ${variant.subtitleColor};
        --icon-wrapper-color: ${variant.iconWrapperColor};
        --icon-color: ${variant.iconColor};
        `;
  }}
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  background-color: var(--background-color);
  border: solid 2px var(--border-color);
  padding: 8px 16px;
  & .title {
    font-weight: 700;
    color: var(--title-color);
    margin: 0;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 4px;
  }
  & .subtitle {
    color: var(--subtitle-color);
    margin: 0;
    font-size: 14px;
    line-height: 16px;
  }
  & .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--icon-wrapper-color);
    padding: 8px;
    width: 36px;
    height: 36px;
    box-sizing: border-box;
    margin-right: 8px;
    border-radius: 50%;

    & i {
      color: var(--icon-color);
      font-size: 16px;
      line-height: 16px;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-right: 8px;
`;

const Banner = ({
  variant = "default",
  title = "",
  subtitle = "",
  children,
  icon = "fas fa-warning",
  ...props
}) => {
  return (
    <Wrapper variant={variant} {...props}>
      <ContentWrapper>
        <div>
          <div className="icon-wrapper">
            <i className={`${icon}`}></i>
          </div>
        </div>
        <div>
          <p className="title">{title}</p>
          <p className="subtitle">{subtitle}</p>
        </div>
      </ContentWrapper>
      {children}
    </Wrapper>
  );
};

export default Banner;
