import request from '@/utils/request';

export async function queryCurrent(): Promise<any> {
  return request('/api/currentUser');
}

export async function queryDetail(): Promise<any> {
  return request('/api/getUserDetail');
}

export async function fakeAccountLoginOut(): Promise<any> {
  return request('/api/logout');
}
