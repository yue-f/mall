import { Button, WingBlank } from 'antd-mobile';
import React, { FC } from 'react';

interface LogoutProps {
  logout: Function;
}

const Logout: FC<LogoutProps> = ({ logout }) => {
  return (
    <WingBlank size="lg">
      <Button type="primary" onClick={() => logout()}>
        退出登录
      </Button>
    </WingBlank>
  );
};

export default Logout;
