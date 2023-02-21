import styled, { createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    flex-direction: column;
  }
  height: 100vh;
`;

export const RoutesContainer = styled.section`
  display: flex;
  flex: 1 0 auto;
  margin: 32px;

  @media (min-width: 900px) {
    display: block;
  }
`;
