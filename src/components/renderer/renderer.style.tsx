import Styled from 'styled-components';

import { COLOR_PURPLE, TEXT_CLIENT_BIG, TEXT_CLIENT_NORMAL } from '../../utils/values';

export const RendererContainer = Styled.div`
  h1, h2, h3, h4, h5, h6 {
    font-family: Proxima Nova Bold;
    margin-bottom: 16px;
    margin-top: 48px;

    font-size: ${TEXT_CLIENT_BIG};
  }

  a {
    color: ${COLOR_PURPLE};

    :hover {
      text-decoration: none;
    }
  }

  a, li, p, td, th {
    font-family: Proxima Nova Regular;

    font-size: ${TEXT_CLIENT_NORMAL};
  }

  strong {
    font-family: Proxima Nova Bold;
  }

  ol {
    * {
      margin-bottom: 0;
    }
  }

  img {
    width: 100%;
  }
`;
