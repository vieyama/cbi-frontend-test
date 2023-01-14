import styled from "@emotion/styled";

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 24px;

  .search-input {
    height: 45px;
    width: 100%;
    box-sizing: border-box;
    padding-left: 2.9rem;
    background: hsl(11deg 100% 98%);
    border: none;
    border-radius: 15px;
  }

  .search-icon {
    height: 1.6rem;
    width: 1.6rem;
    padding: 4px;
    position: absolute;
    box-sizing: border-box;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
  }
`;
