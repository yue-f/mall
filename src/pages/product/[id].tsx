import { ProductType } from '@/@types/product';
import { query } from '@/services/product';
import { Card, WhiteSpace } from 'antd-mobile';
import React, { Component } from 'react';
import { IRoute } from 'umi';
import Tags from '../components/Tags';
import Carousel from './Carousel';
import styles from './[id].less';
import classnames from 'classnames';
import CartAndBuy from './CartAndBuy';

class Product extends Component<IRoute, {}> {
  state: ProductType = {
    imgs: [],
    price: 0,
    title: '',
    tags: [],
  };

  componentDidMount() {
    // 获取商品详情
    const { id } = this.props.match.params;
    query({ id }).then((res) => {
      this.setState({ ...res.data });
    });
  }

  render() {
    const { imgs, price, title, tags } = this.state;

    return (
      <div className={styles.main}>
        <Carousel data={imgs} />
        <WhiteSpace size="lg" />
        <Card full>
          <p className="font14">￥{price}</p>
          <p className={classnames('red', 'bold')}>{title}</p>
          <Tags tags={tags} />
        </Card>

        <CartAndBuy product={this.state} />
      </div>
    );
  }
}

export default Product;
