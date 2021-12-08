import {useState} from 'react';

interface Props {
  search: string;
  setSearch(value: string): void;
}

const useSearchInput = () => {
  const [search, setSearch] = useState<string>('');

  return {
    search,
    setSearch,
  };
};

export default useSearchInput;
