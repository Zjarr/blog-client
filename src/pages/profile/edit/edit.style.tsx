import Styled from 'styled-components';

import { Column } from '../../../components/column';
import { MEDIA_SM, MEDIA_XL } from '../../../utils/values';

const EMPTY_CONTAINER_PADDING = '16px';

const getContainerPadding = (initial: string, empty?: boolean): string => empty ? EMPTY_CONTAINER_PADDING : initial;

export const EditContainer = Styled.div<{ empty?: boolean }>`
  height: 100%;
  overflow-y: auto;

  padding: ${({ empty }): string => getContainerPadding('16px 16px 80px', empty)};

  ${MEDIA_SM} {
    padding: ${({ empty }): string => getContainerPadding('16px 16px 96px', empty)};
  }

  ${MEDIA_XL} {
    padding: ${({ empty }): string => getContainerPadding('16px 16px 112px', empty)};
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
