import Styled from 'styled-components';

import { Column } from '../../components/column';

export const SummaryContainer = Styled.div`
  overflow-y: scroll;
`;

export const CardContainer = Styled(Column)`
  height: 408px;
`;

export const RecentEntriesContainer = Styled(Column)`
  margin-bottom: 48px;
`;

export const ToBeReleasedContainer = Styled(Column)``;

export const ImageCardContainer = Styled.div`
  margin-top: 16px;
`;
