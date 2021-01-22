import React, { FC } from 'react';
import classnames from 'classnames';
import styles from './index.less';
import { Tag } from 'antd-mobile';

interface IProps {
  tags: string[];
}

const Tags: FC<IProps> = ({ tags = [] }) => {
  return (
    <div className={classnames(styles.main)}>
      {tags.map((tag, index) => {
        <Tag key={index} className={classnames(styles.tag, 'font12')}>
          {tag}
        </Tag>;
      })}
    </div>
  );
};

export default Tags;
