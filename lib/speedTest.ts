import useSWR from 'swr';
import api from '../components/fetcher';

const speedTest = () => {
  const { data, error } = useSWR('/speedtest/data', api.get);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default speedTest;
