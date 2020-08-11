import { DocumentNode, gql } from '@apollo/client/core';
import { useQuery } from '@apollo/client/react/hooks/useQuery';
import { QueryResult } from '@apollo/client/react/types/types';

const SYSTEM_QUERY: DocumentNode = gql`
  query System {
    system {
      version
    }
  }
`;

export interface ISystemQueryData {
  system: {
    version: string;
  }
}

export const useSystemQuery = (): QueryResult<ISystemQueryData> => {
  return useQuery<ISystemQueryData>(SYSTEM_QUERY);
};
