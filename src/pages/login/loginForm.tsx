import { Button, InputItem, WhiteSpace, WingBlank } from 'antd-mobile';
import React, { FC } from 'react';
import { createForm } from 'rc-form';
interface LoginFormProps {
  form: {
    getFieldProps: Function;
  };
}

const LoginForm: FC<LoginFormProps> = ({ form, handleSubmit }) => {
  const { getFieldProps, getFieldsValue } = form;
  const submit = () => {
    // 登录  搜集信息
    const value = getFieldsValue();
    handleSubmit(value);
  };
  return (
    <WingBlank size="lg">
      <WhiteSpace size="lg" />
      <InputItem
        type="text"
        placeholder="请输入账号名"
        clear
        {...getFieldProps('name')}
      >
        账号
      </InputItem>
      <InputItem
        type="password"
        placeholder="请输入密码"
        clear
        autoComplete="new-password"
        {...getFieldProps('password')}
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
