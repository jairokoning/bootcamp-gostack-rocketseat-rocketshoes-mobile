import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import formatPrice from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import {
  CartContainer,
  Container,
  Products,
  Product,
  ProductInfo,
  Image,
  Info,
  ProductTitle,
  Price,
  ViewButtonRemove,
  ButtonRemove,
  ProductControl,
  RemoveAmount,
  Amount,
  AddAmount,
  ProductPrice,
  Total,
  TotalTitle,
  TotalPrice,
  ButtonFinish,
  ButtonText,
  EmptyContainer,
  EmptyText,
} from './styles';

export default function Cart() {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <CartContainer>
      {cart.length ? (
        <>
          <Container>
            <Products>
              {cart.map(product => (
                <Product key={product.id}>
                  <ProductInfo>
                    <Image
                      source={{
                        uri: product.image,
                      }}
                    />
                    <Info>
                      <ProductTitle>{product.title}</ProductTitle>
                      <Price>{product.priceFormatted}</Price>
                    </Info>
                    <ViewButtonRemove>
                      <ButtonRemove
                        onPress={() =>
                          dispatch(CartActions.removeFromCart(product.id))
                        }
                      >
                        <Icon name="delete-forever" color="#7159c1" size={24} />
                      </ButtonRemove>
                    </ViewButtonRemove>
                  </ProductInfo>
                  <ProductControl>
                    <RemoveAmount onPress={() => decrement(product)}>
                      <Icon
                        name="remove-circle-outline"
                        color="#7159c1"
                        size={24}
                      />
                    </RemoveAmount>
                    <Amount>{product.amount}</Amount>
                    <AddAmount onPress={() => increment(product)}>
                      <Icon
                        name="add-circle-outline"
                        color="#7159c1"
                        size={24}
                      />
                    </AddAmount>
                    <ProductPrice>{product.subtotal}</ProductPrice>
                  </ProductControl>
                </Product>
              ))}
            </Products>
            <Total>
              <TotalTitle>TOTAL</TotalTitle>
              <TotalPrice>{total}</TotalPrice>
            </Total>
            <ButtonFinish>
              <ButtonText>Finalizar Pedido</ButtonText>
            </ButtonFinish>
          </Container>
        </>
      ) : (
        <EmptyContainer>
          <Icon name="remove-shopping-cart" size={64} color="#eee" />
          <EmptyText>Seu carrinho está vazio.</EmptyText>
        </EmptyContainer>
      )}
    </CartContainer>
  );
}
