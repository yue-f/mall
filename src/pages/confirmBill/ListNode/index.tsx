import { CartProductType } from '@/@types/product';
import { Card, WhiteSpace } from 'antd-mobile';
import React, { FC } from 'react';
import classnames from 'classnames';
import styles from './index.less';

const ListNode: FC<CartProductType> = ({ id, title, img, price, count }) => {
  return (
    <>
      <Card className={styles.main}>
        <div className={styles.imgBox}>
          <img src={img} alt={title} />
        </div>
        <div className={styles.right}>
          <div className={classnames()}>{title}</div>
          <div className={styles.info}>
            <p className={classnames('red', 'font14')}>￥{price}</p>
            <span className="font12">x {count}</span>
          </div>
        </div>
      </Card>
      <WhiteSpace size="lg" />
    </>
  );
};

export default ListNode;
