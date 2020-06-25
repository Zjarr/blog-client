import { useHistory } from 'react-router-dom';

export const useNavigateTo = (): (path: string) => void => {
  const history = useHistory();

  return history.push;
};
