import { getDefaultReceivingInfo } from '@/services/confirmBill';
import { Toast, WhiteSpace, WingBlank } from 'antd-mobile';
import React, { Component, FC } from 'react';
import { CartModelState, connect, ConnectProps, history } from 'umi';
import ReceivingInfo, { ReceivingInfoType } from './ReceivingInfo';
import { ConnectState } from '@/models/connect';
import ListNode from './ListNode';
import PayBar from './PayBar';

interface ConfirmBillProps extends ConnectProps {
  cart: CartModelState;
}
interface ConfirmBillState {
  receivingInfo: ReceivingInfoType;
}

class confirmBill extends Component<ConfirmBillProps, ConfirmBillState> {
  state: ConfirmBillState = {
    receivingInfo: {
      name: '',
      tel: '',
      address: '',
    },
  };

  componentDidMount() {
    const { data } = this.props.cart;
    if (data.length === 0) {
      Toast.info('请重新进入订单页面');
      history.go(-1);
    } else {
      getDefaultReceivingInfo().then((res) => {
        this.setState({
          receivingInfo: { ...res },
        });
      });
    }
  }

  render() {
    const { receivingInfo } = this.state;
    const { data } = this.props.cart;

    let totalPrice = 0,
      allCount = 0;
    const getList = data.map((item, index) => {
      if (item.checked) {
        totalPrice += item.price * item.count;
        allCount += item.count;
      }
      return <ListNode {...item} key={index} />;
    });
    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <ReceivingInfo {...receivingInfo} />
        <WhiteSpace size="lg" />
        <div>{getList}</div>

        <PayBar totalPrice={totalPrice} count={allCount} />
      </WingBlank>
    );
  }
}

export default connect(({ cart }: ConnectState) => ({ cart }))(confirmBill);
