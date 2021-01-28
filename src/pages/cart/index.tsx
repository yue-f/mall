import { CartProductType } from '@/@types/product';
import { ConnectState } from '@/models/connect';
import { query } from '@/services/cart';
import React, { Component } from 'react';
import { connect, ConnectProps, history } from 'umi';
import styles from './index.less';
import List, { UpdateProductType } from './List';
import PayBar from './payBar';

interface CartState {
  data: CartProductType[];
}
class Cart extends Component<ConnectProps, CartState> {
  state: CartState = { data: [] };

  componentDidMount() {
    query().then((res) => {
      this.setState({ data: res.list.data });
    });
  }

  updateProduct = (newState: UpdateProductType) => {
    const { id, index, count, checked } = newState;
    let data = [...this.state.data];
    Object.assign(data[index], newState);

    if (count === 0) {
      data.splice(index, 0);
    } else {
      this.setState({ data });
    }
  };

  checkedAllChange = (allChecked: boolean) => {
    let data = [...this.state.data];
    data.every((item) => (item.checked = allChecked));
    this.setState({ data });
  };

  goPay = () => {
    const { data } = this.state;
    const checkedData = data.filter((item) => item.checked);
    this.props.dispatch({
      type: 'cart/saveCart',
      payload: { data: checkedData },
    });

    history.push('/confirmBill');
  };

  render() {
    const { data } = this.state;
    return (
      <div className={styles.main}>
        <List data={data} updateProduct={this.updateProduct} />
        <PayBar
          data={data}
          checkedAllChange={this.checkedAllChange}
          goPay={this.goPay}
        />
      </div>
    );
  }
}

export default connect(({ cart }: ConnectState) => ({ cart }))(Cart);
