import { Reducer } from 'umi';
import { CartProductType } from '@/@types/product';

export interface CartModelState {
  data: CartProductType[];
}

export interface CartModelProps {
  namespace: 'cart';
  state: CartModelState;
  effects: {};
  reducers: {
    saveCart: Reducer<CartModelState>;
  };
}

const CartModel: CartModelProps = {
  namespace: 'cart',
  state: {
    data: [],
  },
  effects: {},
  reducers: {
    saveCart(state, action) {
      return { ...state, ...action.payload };
    },
  },
};

export default CartModel;
