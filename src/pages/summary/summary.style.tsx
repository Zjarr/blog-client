import Row from 'react-bootstrap/Row';
import Styled from 'styled-components';

import { Column } from '../../components/column';

import { BORDER_RADIUS_SMALL } from '../../utils/values';

export const SummaryContainer = Styled.div`
  height: 100%;
  padding: 16px;
  overflow-y: scroll;
`;

export const SummaryCardContainer = Styled(Row)`
  margin-bottom: 48px;
`;

export const CardContainer = Styled(Column)`
  height: 308px;
`;

export const RecentEntriesContainer = Styled(Column)`
  margin-bottom: 48px;
`;

export const ImageCardContainer = Styled.div`
  margin-bottom: 32px;

  :last-child {
    margin-bottom: 0px;
  }
`;

export const ChartContainer = Styled.div`
  height: 256px;
  margin-top: 16px;
  overflow: hidden;

  border-radius: ${BORDER_RADIUS_SMALL};
`;
