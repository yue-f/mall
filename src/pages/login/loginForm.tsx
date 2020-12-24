import { Button, InputItem, WhiteSpace, WingBlank } from 'antd-mobile';
import React, { FC } from 'react';
import { createForm } from 'rc-form';
interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = (props) => {
  const submit = () => {
    // 登录  搜集信息
  };
  return (
    <WingBlank size="lg">
      <WhiteSpace size="lg" />
      <InputItem type="text" placeholder="请输入账号名" clear>
        账号
      </InputItem>
      <InputItem
        type="password"
        placeholder="请输入密码"
        clear
        autoComplete="new-password"
      >
        密码
      </InputItem>
      <WhiteSpace size="lg" />
      <Button type="primary" onClick={submit}>
        登录
      </Button>
    </WingBlank>
  );
};

export default createForm()(LoginForm);
