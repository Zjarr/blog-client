import Styled from 'styled-components';
import Row from 'react-bootstrap/Row';

const DEFAULT_FORM_FIELD_CONTAINER_HEIGHT = 'auto%';
const DEFAULT_FORM_FIELD_CONTAINER_MARGIN_BOTTOM = '24px';
const DEFAULT_FORM_FIELD_CONTAINER_WIDTH = '100%';

const FORM_FIELD_CONTAINER_NO_MARGIN_BOTTOM = '0px';

const getFormFieldContainerMarginBottom = (noMargin?: boolean): string =>
  noMargin ? FORM_FIELD_CONTAINER_NO_MARGIN_BOTTOM : DEFAULT_FORM_FIELD_CONTAINER_MARGIN_BOTTOM;

const getFormFieldContainerHeight = (height?: string): string => height ? height : DEFAULT_FORM_FIELD_CONTAINER_HEIGHT;
const getFormFieldContainerWidth = (width?: string): string => width ? width : DEFAULT_FORM_FIELD_CONTAINER_WIDTH;

export const BodyContainer = Styled(Row)`
  height: 100%;
`;

export const FormFieldContainer = Styled.div<{ height?: string, noMargin?: boolean, width?: string }>`
  position: relative;

  height: ${({ height }): string => getFormFieldContainerHeight(height)};
  margin-bottom: ${({ noMargin }): string => getFormFieldContainerMarginBottom(noMargin)};
  width: ${({ width }): string => getFormFieldContainerWidth(width)};
`;
