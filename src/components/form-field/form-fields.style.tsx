import Row from 'react-bootstrap/Row';
import Styled from 'styled-components';

const DEFAULT_FORM_FIELD_CONTAINER_HEIGHT = 'auto';
const DEFAULT_FORM_FIELD_CONTAINER_MIN_HEIGHT = 'auto';
const DEFAULT_FORM_FIELD_CONTAINER_MARGIN_BOTTOM = '24px';
const DEFAULT_FORM_FIELD_CONTAINER_WIDTH = '100%';

const FORM_FIELD_CONTAINER_NO_MARGIN_BOTTOM = '0px';

const getFormFieldContainerMarginBottom = (noMargin?: boolean): string =>
  noMargin ? FORM_FIELD_CONTAINER_NO_MARGIN_BOTTOM : DEFAULT_FORM_FIELD_CONTAINER_MARGIN_BOTTOM;

const getFormFieldContainerHeight = (height?: string): string => height ? height : DEFAULT_FORM_FIELD_CONTAINER_HEIGHT;
const getFormFieldContainerMinHeight = (minHeight?: string): string => minHeight ? minHeight : DEFAULT_FORM_FIELD_CONTAINER_MIN_HEIGHT;
const getFormFieldContainerWidth = (width?: string): string => width ? width : DEFAULT_FORM_FIELD_CONTAINER_WIDTH;

export const BodyContainer = Styled(Row)`
  height: 100%;

  > *:not(:first-child) {
    margin-left: 16px;
  }
`;

export const FormFieldContainer = Styled.div<{ height?: string, minHeight?: string, noMargin?: boolean, width?: string }>`
  display: flex;
  flex-direction: column;
  position: relative;

  height: ${({ height }): string => getFormFieldContainerHeight(height)};
  min-height: ${({ minHeight }): string => getFormFieldContainerMinHeight(minHeight)};
  margin-bottom: ${({ noMargin }): string => getFormFieldContainerMarginBottom(noMargin)};
  width: ${({ width }): string => getFormFieldContainerWidth(width)};
`;
