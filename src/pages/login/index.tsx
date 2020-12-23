import { ConnectState, ConnectProps, UserModelState } from '@/models/connect';
import React from 'react';
import { connect } from 'umi';
import styles from './index.less';

interface LoginProps extends ConnectProps {
  user: UserModelState;
}

const Login: React.FC<LoginProps> = ({ user }) => {
  return (
    <div>
      <h1 className={styles.title}>Page login/index</h1>
    </div>
  );
};
export default connect(({ user }: ConnectState) => ({ user }))(Login);
