'use client';
import useDelay from '@/function/useDebounce';
import { useRouter } from 'next/navigation';
import qs from 'query-string';
import { FC, useEffect, useState } from 'react';
import Input from './Input';

interface SearchInputProps {}

const SearchInput: FC<SearchInputProps> = ({}) => {
  const router = useRouter();
  const [value, setValue] = useState<string>('');
  const delayedValue = useDelay<string>(value, 500);

  useEffect(() => {
    const query = {
      title: delayedValue,
    };
    const url = qs.stringifyUrl({
      url: '/search',
      query: query,
    });
    router.push(url);
  }, [delayedValue, router]);

  return (
    <Input
      placeholder="Search a song"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
