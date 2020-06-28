import Row from 'react-bootstrap/Row';
import Styled from 'styled-components';

import { Column } from '../../components/column';

import { BORDER_RADIUS_BIG_INNER } from '../../utils/values';

export const SummaryContainer = Styled.div`
  height: 100%;
  overflow-y: scroll;

  border-bottom-left-radius: ${BORDER_RADIUS_BIG_INNER};
  border-top-left-radius: ${BORDER_RADIUS_BIG_INNER};
`;

export const SummaryCardContainer = Styled(Row)`
  margin-bottom: 48px;
`;

export const ChartContainer = Styled.div`
  height: 360px;
  margin-top: 16px;
  overflow: hidden;
`;

export const CardContainer = Styled(Column)`
  height: 404px;
`;

export const RecentEntriesContainer = Styled(Column)`
  margin-bottom: 48px;
`;

export const ImageCardContainer = Styled.div`
  margin-top: 8px;
`;
