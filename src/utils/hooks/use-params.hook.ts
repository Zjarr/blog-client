import { useLocation } from 'react-router-dom';

export const useParams = (): URLSearchParams => {
  return new URLSearchParams(useLocation().search);
};
