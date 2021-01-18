import { queryRecommend } from '@/services/home';
import { Card, WingBlank } from 'antd-mobile';
import React, { FC, useState, useEffect } from 'react';

interface RecommendProps {}

const Recommend: FC<RecommendProps> = (props) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    queryRecommend().then((res) => {
      console.log(res.list.data);
      setList(res.list.data);
    });
  }, []);

  return (
    <>
      <WingBlank size="lg">
        <Card title="" extra={<a href="#">More</a>}>
          <Card.Header></Card.Header>
        </Card>
      </WingBlank>
    </>
  );
};

export default Recommend;
