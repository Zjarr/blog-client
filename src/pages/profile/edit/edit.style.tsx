import Styled from 'styled-components';

import { Column } from '../../../components/column';

export const EditContainer = Styled.div`
  height: 100%;
  padding: 16px 16px 112px;
  overflow-y: scroll;
`;

export const BodyContainer = Styled.div``;

export const ImageColumn = Styled(Column)`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const SocialNetworksContainer = Styled.div`
  margin-top: 48px;
`;

export const AddButtonContainer = Styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const CurrentContainer = Styled.div`
  margin-top: 48px;
`;
