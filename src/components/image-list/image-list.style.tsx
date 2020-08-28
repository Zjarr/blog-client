import Styled from 'styled-components';

import { BORDER_RADIUS_MEDIUM, COLOR_WHITE, MEDIA_LG } from '../../utils/values';

const CENTER_ITEMS_ALIGNMENT = 'flex-start';

const DEFAULT_ITEMS_ALIGNMENT = 'center';

const getItemsAlignment = (empty?: boolean): string => empty ? CENTER_ITEMS_ALIGNMENT : DEFAULT_ITEMS_ALIGNMENT;

export const ImageListContainer = Styled.div`
  bottom: 16px;
  left: 16px;
  overflow-y: auto;
  position: absolute;
  right: 16px;
  top: 16px;

  background-color: ${COLOR_WHITE};
  border-radius: ${BORDER_RADIUS_MEDIUM};
`;

export const TitleContainer = Styled.div`
  padding: 16px 68px 16px 16px;

  ${MEDIA_LG} {
    padding: 24px;
  }
`;

export const SearchContainer = Styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  width: 100%;

  > div {
    width: 100%;
  }

  ${MEDIA_LG} {
    > div {
      width: 30%;
    }
  }
`;

export const ListContainer = Styled.div<{ empty?: boolean }>`
  display: flex;
  height: calc(100% - 176px);
  justify-content: center;
  padding: 16px;

  align-items: ${({ empty }): string => getItemsAlignment(empty)};

  ${MEDIA_LG} {
    height: calc(100% - 190px);
  }
`;

export const PaginatorContainer = Styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -32px;
`;
