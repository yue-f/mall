import { ConnectState, ConnectProps, UserModelState } from '@/models/connect';
import React from 'react';
import { connect, Redirect } from 'umi';
import styles from './index.less';
import LoginForm from './loginForm';
import { LoginParamsType } from '@/services/login';

interface LoginProps extends ConnectProps {
  user: UserModelState;
}

const Login: React.FC<LoginProps> = ({ user, location, dispatch }) => {
  // 判断用户是否登录
  const { userid } = user.currentUser;
  const isLogin = !!userid;
  if (isLogin) {
    const { from = '/' } = location.state || {};
    return <Redirect to={from} />;
  }

  const handleSubmit = (value: LoginParamsType) => {
    // dispatch login
    dispatch({ type: 'user/login', payload: value });
  };

  return (
    <div className={styles.main}>
      <div className={styles.logo}></div>
      <LoginForm handleSubmit={handleSubmit} />
    </div>
  );
};
export default connect(({ user }: ConnectState) => ({ user }))(Login);
