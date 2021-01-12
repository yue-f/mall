var Mock = require('mockjs');
import { Request, Response } from 'express';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  'GET /api/getUserDetail': {
    status: 1,
    id: '001',
    name: '打盹儿的妖精',
    icon:
      'https://upload.jianshu.io/users/upload_avatars/10953087/6e0d6bbc-fa5c-46ff-bfcc-70d66e91ad3c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp',
    email: 'xiaoyueyuevip@163.com',
    signature: 'hello world',
    title: '买买买',
    tags: [
      {
        key: '0',
        label: '买',
      },
      {
        key: '1',
        label: '再买',
      },
      {
        key: '2',
        label: '接着买~',
      },
    ],
    country: 'China',
    address: '地球村',
    phone: '0110-20204123',
  },
};
