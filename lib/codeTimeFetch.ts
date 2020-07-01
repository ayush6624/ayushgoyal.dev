import useSWR from 'swr';
import api from '../components/fetcher';

const getTimeStats = () => {
  const { data, error } = useSWR('/wakatime', api.get);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default getTimeStats;
