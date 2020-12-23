/**
 * 底部栏
 * created by yue on 2020.12.22
 */
import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import { history } from 'umi';
const menu = [
  {
    title: '首页',
    link: '/',
    icon: 'shouye',
  },
  {
    title: '购物车',
    link: '/cart',
    icon: 'gouwuche',
  },
  {
    title: '订单列表',
    link: '/olist',
    icon: 'dingdanliebiao',
  },
  {
    title: '用户',
    link: '/user',
    icon: 'wode',
  },
];
interface BottomNavProps {
  pathname: string;
}
export default class BottomNav extends Component {
  render() {
    const { pathname } = this.props;
    return (
      <TabBar tintColor="red">
        {menu.map(({ title, link, icon }) => (
          <TabBar.Item
            key={link}
            title={title}
            icon={<span className={'iconfont icon-' + icon}></span>}
            selectedIcon={<span className={'red iconfont icon-' + icon}></span>}
            selected={pathname === link}
            onPress={() => {
              history.push(link);
            }}
          />
        ))}
      </TabBar>
    );
  }
}
