/**
 * 最外层layout
 * created by yue on 2020.12.22
 */
import React, { useEffect } from 'react'
import BottomNav from '../components/BotomNav';
import '@/static/iconfont/iconfont.css'
interface BasicLayoutProps{}
const BasicLayout: React.FC<BasicLayoutProps> = props => {

  // 利用组件复合方式
  const {children} = props;

  useEffect(() => {}, []);
  return <div>
    <article>{children}</article>
    <BottomNav />
  </div>;
};

export default BasicLayout;
