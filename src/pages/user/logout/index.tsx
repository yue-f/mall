import { Button, WingBlank } from 'antd-mobile';
import React, { FC } from 'react';

interface LogoutProps {}

const Logout: FC<LogoutProps> = (props) => {
  const lgout = () => {
    console.log('lgout');
  };
  return (
    <WingBlank size="lg">
      <Button type="primary" onClick={lgout}>
        退出登录
      </Button>
    </WingBlank>
  );
};

export default Logout;
