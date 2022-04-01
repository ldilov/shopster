import { lazy, Suspense } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectCartItems } from '../redux/cart/cart.selectors';
import Loader from '../components/loader/loader.component';
import { decreaseQuantity, increaseQuantity, removeCartItem, setQuantity } from '../redux/cart/cart.actions';
import { CartActionsContextProvider } from '../contexts/cart-actions.context';

const Message = lazy(() => import('../components/message/message.component'));
const CartInfoCard = lazy(() => import('../components/cart-info-card/cart-info-card.component'));

const CartPage = ({ cartItems, deleteItem, increaseQty, decreaseQty, setQty }) => {
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
                  <CartActionsContextProvider
                      deleteItem={deleteItem}
                      increaseQty={increaseQty}
                      decreaseQty={decreaseQty}
                      setQty={setQty}
                  >
                    <CartInfoCard
                        cartItems={cartItems}
                        total={256.12}
                        subTotal={123.11}
                        count={3}
                    />
                  </CartActionsContextProvider>
                </Suspense>
            )
      }
      </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (item) => dispatch(removeCartItem(item)),
  increaseQty: (item) => dispatch(increaseQuantity(item)),
  decreaseQty: (item) => dispatch(decreaseQuantity(item)),
  setQty: (item, value) => dispatch(setQuantity(item, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
