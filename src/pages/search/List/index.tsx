import { PaginationType } from '@/@types/list';
import { ProductType } from '@/@types/product';
import { query } from '@/services/search';
import { Card, Icon, ListView, Tag, WingBlank } from 'antd-mobile';
import React, { Component } from 'react';
import { Link } from 'umi';
import styles from './index.less';
import classnames from 'classnames';
import Tags from '@/pages/components/Tags';

interface ListProps {
  data: ProductType[];
  pagination: PaginationType;

  queryList: Function;
}
interface ListState {
  dataSource: any;
}
export default class List extends Component<ListProps, ListState> {
  state: ListState = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (r1: any, r2: any) => r1 !== r2,
    }),
  };

  onEndReached = () => {
    const { data, pagination } = this.props;

    // 判断是否有更多的数据
    if (pagination.pageNo < pagination.totalPage - 1) {
      // 获得下一页的数据
      this.props.queryList({
        pageNo: pagination.pageNo + 1,
      });
    }
  };

  componentDidMount() {
    this.props.queryList();
  }
  render() {
    const { dataSource } = this.state;
    const { data, pagination } = this.props;
    return (
      <Card full className={styles.main}>
        {data.length > 0 ? (
          <ListView
            dataSource={dataSource.cloneWithRows(data)}
            renderRow={(item) => Node(item)}
            pageSize={pagination.pageSize}
            initialListSize={pagination.pageSize}
            onEndReached={this.onEndReached}
            // 是否使用html容器
            useBodyScroll={true}
            renderFooter={() => (
              <div className="txtCenter">
                {pagination.pageNo < pagination.totalPage - 1 ? (
                  <Icon type="loading" />
                ) : (
                  <div>加载完毕</div>
                )}
              </div>
            )}
            onEndReachedThreshold={10}
          />
        ) : (
          <div className="txtCenter font14">暂无数据</div>
        )}
      </Card>
    );
  }
}

function Node({ img, title, price, tags, id }: ProductType) {
  return (
    <Link className={styles.node} to={'/product/' + id}>
      <div className={classnames(styles.imgBox, 'xyCenter')}>
        <img src={img} alt="" />
      </div>
      <WingBlank size="lg" className={styles.cnt}>
        <div className="twoRows">{title}</div>
        <div className={classnames(styles.priceBox, 'font16')}>
          <span className={styles.yuan}>￥</span>
          <span className={styles.price}>{price}</span>
        </div>
        <Tags tags={tags} />
      </WingBlank>
    </Link>
  );
}
