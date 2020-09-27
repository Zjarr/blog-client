import Styled from 'styled-components';

import { Column } from '../../../components/column';
import { COLOR_GRAY_DARK, MEDIA_SM, MEDIA_XL } from '../../../utils/values';

const EMPTY_CONTAINER_PADDING = '16px';

const getContainerPadding = (initial: string, empty?: boolean): string => empty ? EMPTY_CONTAINER_PADDING : initial;

export const ViewContainer = Styled.div<{ empty?: boolean }>`
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

export const ContentContainer = Styled(Column)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

export const BasicInfoContainer = Styled.div`
  margin-top: 32px;
  text-align: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const SocialContainer = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 32px;

  button,
  div {
    margin: 0px 16px;
  }
`;

export const AdvancedInfoContainer = Styled.div`
  width: 100%;
`;

export const InfoContainer = Styled.div`
  margin-top: 32px;
`;

export const Label = Styled.p`
  font-family: Proxima Nova Bold;
  margin-bottom: 4px;

  color: ${COLOR_GRAY_DARK};
`;

export const Info = Styled.p``;
