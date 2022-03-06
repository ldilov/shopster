import { lazy, Suspense } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectCartItems } from '../redux/cart/cart.selectors';
import Loader from '../components/loader/loader.component';

const Message = lazy(() => import('../components/message/message.component'));
const CartInfoCard = lazy(() => import('../components/cart-info-card/cart-info-card.component'));

const CartPage = ({cartItems}) => {
  return (
      <>
      {
        cartItems.length === 0
            ? (
                <div className="my-2">\
                  <Suspense fallback={<Loader />}>
                    <Message content={ 'Your cart is empty!' }/>
                  </Suspense>
                </div>
            )
            : (
                <Suspense fallback={<Loader />}>
                  <CartInfoCard cartItems={cartItems} total={256.12} subTotal={123.11} count={3} />
                </Suspense>
            )
      }
      </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps, null)(CartPage);
