import Row from 'react-bootstrap/Row';
import Styled from 'styled-components';

import { MEDIA_SM, MEDIA_XL } from '../../../utils/values';

export const DetailContainer = Styled.div`
  height: 100%;
  padding: 16px 16px 80px;
  overflow-y: auto;

  ${MEDIA_SM} {
    padding: 16px 16px 96px;
  }

  ${MEDIA_XL} {
    padding: 16px 16px 112px;
  }
`;

export const BodyContainer = Styled(Row)``;

export const EditorButtonsContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 24px;

  button:first-child {
    margin: 0px 0px 16px 0px;
  }

  ${MEDIA_SM} {
    flex-direction: row;

    button:first-child {
      margin: 0px 16px 0px 0px;
    }
  }
`;

export const SimpleListContainer = Styled.div`
  margin-bottom: 32px;

  :last-child {
    margin-bottom: 0;
  }
`;

export const EmptyListContainer = Styled.div`
  text-align: center;
`;
