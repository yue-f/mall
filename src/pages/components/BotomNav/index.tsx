/**
 * 底部栏
 * created by yue on 2020.12.22
 */
import React, { Component } from 'react'

const menu = [
  {
    title: '首页',
    link: '/',
    icon: 'shouye',
  },
  {
    title: '购物车',
    link: '/cart',
    icon: '3',
  },
  {
    title: '订单列表',
    link: '/olist',
    icon: 'icon-',
  },
  {
    title: '用户',
    link: '/user',
    icon: 'wode',
  },
]
export default class BottomNav extends Component {
  render() {
    return (
      <div>
        <h3>BottomNav</h3>
      </div>
    )
  }
}
