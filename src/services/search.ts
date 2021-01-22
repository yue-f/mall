import request from '@/utils/request';

export async function query(params: {
  pageNo: number;
  pageSize: number;
  searchKey: '';
}) {
  return request('/api/search', {
    method: 'POST',
    data: params,
  });
}
