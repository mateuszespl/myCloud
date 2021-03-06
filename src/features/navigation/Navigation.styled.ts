import styled from "styled-components";

export const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 60px;
  position: relative;
  padding: 0 10vw;

  ${({ theme }) => theme.media.m3} {
    justify-content: space-between;
    padding: 0 2vw;
  }
`;
