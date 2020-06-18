import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const usePrivatePage = () => {

  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem('token');

    if (!token) {
      history.push('/login');
    }
  }, [history]);
}

export default usePrivatePage;