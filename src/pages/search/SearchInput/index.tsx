import { Button, InputItem } from 'antd-mobile';
import React, { FC, useRef, useEffect, useState, useCallback } from 'react';
import { history } from 'umi';
import styles from './index.less';

interface SearchInputProps {
  queryList: Function;
}

const SearchInput: FC<SearchInputProps> = (props) => {
  const inputRef = useRef<any>(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [input, setInput] = useState('');

  const inputChange = useCallback((val: string) => {
    setInput(val);
  }, []);

  const [searchMode, setSearchMode] = useState<boolean>(false);

  // useCallback 对函数做一个缓存
  const handle = useCallback(() => {
    if (searchMode) {
      // 搜索
      // 重新查找列表
      const val = input.trim();
      props.queryList({ searchKey: val, pageNo: 0 });
    } else {
      // 去首页
      history.push('/');
    }
  }, [searchMode, input]);

  // input改变时触发
  useEffect(() => {
    const val = input.trim();
    setSearchMode(val !== '');
  }, [input]);

  return (
    <div className={styles.main}>
      <InputItem
        ref={inputRef}
        value={input}
        onChange={inputChange}
        clear
        className={styles.searchBar}
      />
      <Button className={styles.btn} type="primary" onClick={handle}>
        {searchMode ? '搜索' : '取消'}
      </Button>
    </div>
  );
};

export default SearchInput;
