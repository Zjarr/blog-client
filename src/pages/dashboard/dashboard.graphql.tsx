import { DocumentNode, gql } from '@apollo/client/core';

export const SYSTEM_QUERY: DocumentNode = gql`
  query System {
    system {
      version
    }
  }
`;

interface ISystem {
  version: string;
}

export interface ISystemQuery {
  system: ISystem;
}
