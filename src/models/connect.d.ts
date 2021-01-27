import { Location, Dispatch } from 'umi';
import { UserModelState } from './user';
import { CartModelState } from './cart';
/**
 * 标记 model 的 state 类型
 */
export interface ConnectProps {
  location: Location & { state: { from: string } };
  disptach: Dispatch;
}

export interface ConnectState {
  user: UserModelState;
  cart: CartModelState;
}

export { UserModelState };
export { CartModelState };
