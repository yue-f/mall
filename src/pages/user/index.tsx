import React, { useEffect } from 'react';
import { connect, UserModelState } from 'umi';
import { ConnectProps, ConnectState } from '@/models/connect';

import styles from './index.less';
import Header from './Header';
import MyList from './myList';
import Logout from './logout';

interface UserProos extends ConnectProps {
  user: UserModelState;
}

const User: React.FC<UserProos> = ({ dispatch, user }) => {
  useEffect(() => {
    // 获取用户的基本信息
    dispatch({ type: 'user/queryDetail' });
  }, []);

  const { name, icon } = user.detail;

  const logout = () => {
    // dispatch
    dispatch({ type: 'user/logout' });
  };
  return (
    <div>
      <Header name={name} icon={icon} />
      <MyList />
      <Logout logout={logout} />
    </div>
  );
};

export default connect(({ user }: ConnectState) => ({ user }))(User);
