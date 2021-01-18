import React from 'react';
import Arc from '../components/Arc';
import Carousel from './Carousel/index';
import styles from './index.less';
import NavTable from './NavTable/index';
import Recommend from './Recommend';
import SearchInput from './SearchInput/index';

export default () => {
  return (
    <div className={styles.main}>
      <SearchInput />
      <Carousel />
      <Arc />
      <NavTable />
      <Recommend />
    </div>
  );
};
