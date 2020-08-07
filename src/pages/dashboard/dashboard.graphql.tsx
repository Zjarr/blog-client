import { gql, DocumentNode } from '@apollo/client';

export const SYSTEM_VERSION_QUERY: DocumentNode = gql`
  query System {
    system {
      version
    }
  }
`;

export interface ISystemVersionData {
  system: {
    version: string;
  }
}
