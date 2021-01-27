import request from '@/utils/request';

export interface QueryItem {
  id: string;
  increment?: number; // 新增或者减少多少，如1 是增加1
  count?: number; // 最近的数据
}

export async function editCart(params: QueryItem) {
  return request('/api/cart/edit', {
    method: 'POST',
    data: params,
  });
}
