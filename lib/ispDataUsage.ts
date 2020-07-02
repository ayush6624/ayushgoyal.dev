import useSWR from 'swr';

const ispDataUsage = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR('https://isp.ayushgoyal.dev/data', fetcher);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default ispDataUsage;
