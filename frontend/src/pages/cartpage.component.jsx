import { lazy, Suspense } from 'react';
import { Col, Row } from 'react-bootstrap';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectCartItems } from '../redux/cart/cart.selectors';
import Loader from '../components/loader/loader.component';

const CartSummaryCard = lazy(() => import('../components/cart-summary-card/cart-summary-card.component'));
const CartShoppingCard = lazy(() => import('../components/cart-shopping-card/cart-shopping-card.component'));
const Message = lazy(() => import('../components/message/message.component'));

const CartPage = ({cartItems}) => {
  console.log(cartItems);
  return (
      <>
      {
        cartItems.length === 0
            ? (
                <div className="my-2">
                  <Message content={ 'Your cart is empty!' }/>
                </div>
            )
            : (
                <Row fluid>
                  <Col md={ 8 }>
                    <Suspense fallback={ <Loader/> }>
                      <CartShoppingCard items={ cartItems }/>
                    </Suspense>
                  </Col>
                  <Col md={ 4 }>
                    <Suspense fallback={ <Loader/> }>
                      <CartSummaryCard total={ 456.53 } subTotal={ 256.12 } count={ 3 }/>
                    </Suspense>
                  </Col>
                </Row>
            )
      }
      </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps, null)(CartPage);
