import { Location } from 'umi';
import { UserModelState } from './user';
/**
 * 标记 model 的 state 类型
 */
export interface ConnectProps {
  location: Location & { state: { from: string } };
}

export interface ConnectState {
  user: UserModelState;
}

export { UserModelState };
