import Styled from 'styled-components';

const DEFAULT_FORM_FIELD_CONTAINER_MARGIN_BOTTOM = '24px';
const DEFAULT_FORM_FIELD_CONTAINER_WIDTH = '100%';

const FORM_FIELD_CONTAINER_NO_MARGIN_BOTTOM = '0px';

const getFormFieldContainerMarginBottom = (noMargin?: boolean): string =>
  noMargin ? FORM_FIELD_CONTAINER_NO_MARGIN_BOTTOM : DEFAULT_FORM_FIELD_CONTAINER_MARGIN_BOTTOM;

const getFormFieldContainerWidth = (width?: string): string => width ? width : DEFAULT_FORM_FIELD_CONTAINER_WIDTH;

export const BodyContainer = Styled.div`
  display: flex;

  a, button, div  {
    margin: 0px 4px;

    :first-child {
      margin-left: 0px;
    }

    :last-child {
      margin-right: 0px;
    }
  }
`;

export const FormFieldContainer = Styled.div<{ noMargin?: boolean, width?: string }>`
  position: relative;

  margin-bottom: ${({ noMargin }): string => getFormFieldContainerMarginBottom(noMargin)};
  width: ${({ width }): string => getFormFieldContainerWidth(width)};
`;
