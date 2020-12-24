/**
 * 路由守卫
 * 拦截
 */
import { ConnectState } from '@/models/connect';
import React, { FC, useEffect } from 'react';
import { connect, Redirect, UserModelState } from 'umi';

interface SecurityLayoutProps {
  user: UserModelState;
}

const SecurityLayout: FC<SecurityLayoutProps> = ({ user, location }) => {
  // 校验登录
  const { userid } = user.currentUser;
  const isLogin = !!userid;
  if (!isLogin) {
    // 没有登录，去登录页
    return (
      <Redirect to={{ pathname: '/login', state: { from: location.state } }} />
    );
  }
  return <div></div>;
};

export default connect(({ user }: ConnectState) => ({ user }))(SecurityLayout);
