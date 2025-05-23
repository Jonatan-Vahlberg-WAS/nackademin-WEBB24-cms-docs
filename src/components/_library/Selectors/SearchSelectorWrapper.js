import styled from "styled-components";


const SearchSelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray_50};
  padding: 0 8px 0;
  width: 350px;

  & .select-search-input {
    @media (prefers-color-scheme: dark) {
      color: ${({ theme }) => theme.colors.black};
    }
  }
  &.error {
    border: 1px solid ${({ theme }) => theme.colors.red_700};
    background-color: ${({ theme }) => theme.colors.red_100};

    & svg {
      color: ${({ theme }) => theme.colors.red_700};
    }

    & .select-search {
      &-input {
        color: ${({ theme }) => theme.colors.red_700};
        background-color: ${({ theme }) => theme.colors.red_100} !important;

        &::placeholder {
          color: ${({ theme }) => theme.colors.red_700};
        }
      }
    }
  }

  & .select-search {
    &-container {
      border-radius: 2px;
      height: 35px;
      flex: 1;
    }
    &-input {
      padding: 8px 12px;
      font-size: 14px;
      height: 35px;
      background-color: ${({ theme }) => theme.colors.gray_50};
      border: none;
      line-height: 1.5;
    }

    &-select {
      top: 43px !important;
    }
  }

  & .select-search-option[value="new"],
  & .select-search-option.select-search-is-selected {
    color: ${({ theme }) => theme.colors.green_600};
  }

  & .select-search-options {
    padding: 0;
  }
  & .select-search-option {
    height: unset;
    min-height: 42px;
  }
`

export default SearchSelectorWrapper;