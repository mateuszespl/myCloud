import styled from "styled-components";

export const StyledFavourites = styled.section`
  position: fixed;
  bottom: 0;
  transform: translateX(-50%);
  left: 50%;
  height: 30vh;
  width: 700px;
  padding: 10px;
  background: ${({ theme }) => theme.colors.primaryLight};
  box-shadow: 0px 0px 15px -5px ${({ theme }) => theme.colors.black};
  border-radius: 25px 25px 0 0;
  z-index: 2;
  overflow: scroll;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    position: fixed;
    top: 0;
    right: 0;
  }

  ${({ theme }) => theme.media.m2} {
    width: 80vw;
  }

  ${({ theme }) => theme.media.m3} {
    width: 100vw;
  }
`;
