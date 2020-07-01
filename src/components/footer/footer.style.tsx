import Styled from 'styled-components';

export const FooterContainer = Styled.div`
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  padding: 32px;
  position: fixed;
  right: 0;

  button:last-child {
    margin-left: 16px;
  }
`;
