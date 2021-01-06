import React, { useEffect } from 'react';
import { connect, UserModelState } from 'umi';
import { ConnectProps, ConnectState } from '@/models/connect';

import styles from './index.less';

interface UserProos extends ConnectProps {
  user: UserModelState;
}

const User: React.FC<UserProos> = ({ dispatch }) => {
  useEffect(() => {
    dispatch({ type: 'user/queryDetail' });
  }, []);
  // 获取用户的基本信息
  return (
    <div>
      <h1 className={styles.title}>Page user/index</h1>
    </div>
  );
};

export default connect(({ user }: ConnectState) => ({ user }))(User);
