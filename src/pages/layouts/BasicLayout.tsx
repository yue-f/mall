/**
 * 最外层layout
 * created by yue on 2020.12.22
 */
import React, { useEffect } from 'react';
import BottomNav from '../components/BotomNav';
import { Location, connect, Dispatch } from 'umi';
import '@/static/iconfont/iconfont.css';
import styles from './BasicLatout.less';
interface BasicLayoutProps {
  location: Location;
  dispatch: Dispatch;
  user: any;
}

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  // 利用组件复合方式
  const { children, location, dispatch, user } = props;
  console.log('props', props);
  useEffect(() => {
    // 获取用户基本信息，和modal进行数据交互
    dispatch({
      type: 'user/fetchCurrent',
    });
  }, []);

  const { pathname } = location;
  return (
    <div className={styles.main}>
      <article>{children}</article>
      <footer>
        <BottomNav pathname={pathname} />
      </footer>
    </div>
  );
};

// umi 的方法connect，和modal进行数据交互
export default connect(({ user }) => ({ user }))(BasicLayout);
