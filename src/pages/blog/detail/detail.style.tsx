import Row from 'react-bootstrap/Row';
import Styled from 'styled-components';

export const DetailContainer = Styled.div`
  height: 100%;
  padding: 16px 16px 112px;
  overflow-y: scroll;
`;

export const BodyContainer = Styled(Row)``;

export const EditorButtonsContainer = Styled.div`
  display: flex;
  justify-content: flex-end;

  button:last-child {
    margin-left: 16px;
  }
`;
