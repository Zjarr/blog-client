import Styled from 'styled-components';

import { Column } from '../../../components/column';
import { MEDIA_SM, MEDIA_XL } from '../../../utils/values';

export const EditContainer = Styled.div`
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

export const BodyContainer = Styled.div``;

export const ImageColumn = Styled(Column)`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const SocialContainer = Styled.div`
  margin-top: 48px;
`;

export const SocialCardContainer = Styled(Column)`
  margin-bottom: 16px;
`;

export const AddButtonContainer = Styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const CurrentContainer = Styled.div`
  margin-top: 48px;
`;

export const EmptyListContainer = Styled.div`
  text-align: center;
`;
