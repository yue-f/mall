import { Card, Carousel } from 'antd-mobile';
import React from 'react';
import styles from './index.less';
import classnames from 'classnames';

export default ({ data }: { data: string[] }) => {
  return (
    <Card full>
      <Carousel className={styles.main} autoplay={false} infinite>
        {data.map((item, index) => (
          <a
            className={classnames(styles.carouselItem, 'xyCenter')}
            key={index}
          >
            <img
              src={item}
              alt="图片"
              onLoad={() => {
                window.dispatchEvent(new Event('resize'));
              }}
            />
          </a>
        ))}
      </Carousel>
    </Card>
  );
};
