/**
 * 处理数据层
 */
import { queryCurrent } from '@/services/user';
import { Effect, Reducer } from 'umi';

// 定义数据类型
interface CurrentUser {
  name?: string;
  icon?: string;
  userid?: string;
}
export interface UserModelState {
  currentUser: CurrentUser;
}
export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    fetchCurrent: Effect;
  };
  reducers: {
    saveCurrentUser: Reducer<UserModelState>;
  };
}

// 数据处理
const UserModel: UserModelType = {
  // 唯一性
  namespace: 'user',
  state: {
    currentUser: {},
  },
  effects: {
    // 调用副作用
    *fetchCurrent(_, { call, put }) {
      // 获取异步请求
      const response = yield call(queryCurrent);

      yield put({ type: 'saveCurrentUser', payload: response });
    },
  },
  reducers: {
    saveCurrentUser(state, action) {
      return { ...state, currentUser: action.payload || {} };
    },
  },
};
export default UserModel;
