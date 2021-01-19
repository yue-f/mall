import { Button, InputItem } from 'antd-mobile';
import React, { FC, useRef, useEffect } from 'react';
import styles from './index.less';

interface SearchInputProps {}

const SearchInput: FC<SearchInputProps> = (props) => {
  const inputRef = useRef<any>(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className={styles.main}>
      <InputItem ref={inputRef} />
      <Button type="primary"></Button>
    </div>
  );
};

export default SearchInput;
