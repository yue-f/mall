/**
 * 处理数据层
 */
import { fakeAccountLogin } from '@/services/login';
import {
  fakeAccountLoginOut,
  queryCurrent,
  queryDetail,
} from '@/services/user';
import { Toast } from 'antd-mobile';
import { Effect, Reducer } from 'umi';

// 定义数据类型
interface CurrentUser {
  name?: string;
  icon?: string;
  userid?: string;
}

// detail 的数据类型
interface DetailUser {
  name?: string;
  icon?: string;
  userid?: string;
  email: string;
  phone: string;
  address: string;
  signature?: string;
  title?: string;
  tags?: {
    key: string;
    label: string;
  }[];
  country: string;
}
export interface UserModelState {
  currentUser: CurrentUser;
  detail:
    | DetailUser
    | {
        name: string;
        icon: string;
      };
}
export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    fetchCurrent: Effect;
    login: Effect;
    queryDetail: Effect;
    logout: Effect;
  };
  reducers: {
    saveUser: Reducer<UserModelState>;
    clearUser: Reducer<UserModelState>;
  };
}

// 数据处理
const UserModel: UserModelType = {
  // 唯一性
  namespace: 'user',
  state: {
    currentUser: {},
    detail: {
      name: '',
      icon: '',
    },
  },
  effects: {
    // 调用副作用
    *fetchCurrent(_, { call, put }) {
      // 获取异步请求
      const response = yield call(queryCurrent);

      yield put({
        type: 'saveUser',
        payload: { currentUser: { ...response } },
      });
    },
    // 用户登录
    *login({ payload }, { call, put }) {
      // 获取异步请求
      const response = yield call(fakeAccountLogin, payload);
      if (response.status === 1) {
        yield put({
          type: 'saveUser',
          payload: { currentUser: { ...response } },
        });
      } else {
        Toast.fail(response.msg || '系统开小差，请稍后重试~');
      }
    },
    // 获取用户详细信息
    *queryDetail(_, { call, put }) {
      // 获取异步请求
      const response = yield call(queryDetail);

      yield put({ type: 'saveUser', payload: { detail: { ...response } } });
    },

    // 退出
    *logout(_, { call, put }) {
      // 获取异步请求
      const response = yield call(fakeAccountLoginOut);

      yield put({
        type: 'clearUser',
        payload: { currentUser: {}, detail: { name: '', icon: '' } },
      });
    },
  },
  reducers: {
    saveUser(state, action) {
      return { ...state, ...(action.payload || {}) };
    },
    clearUser(state, action) {
      return { ...action.payload };
    },
  },
};
export default UserModel;
