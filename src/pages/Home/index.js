import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

// import { formatPrice } from '../../util/format';
import formatPrice from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  List,
  Product,
  Image,
  Title,
  Price,
  ButtonAddToCart,
  ButtonIconDiv,
  ButtonIconText,
  ButtonText,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <List
        data={products}
        keyExtractor={product => String(product.id)}
        horizontal
        renderItem={({ item }) => (
          <Product>
            <Image source={{ uri: item.image }} />
            <Title>{item.title}</Title>
            <Price>{item.priceFormatted}</Price>
            <ButtonAddToCart onPress={() => handleAddProduct(item.id)}>
              <ButtonIconDiv>
                <Icon name="shopping-basket" color="#fff" size={18} />
                <ButtonIconText>{amount[item.id] || 0}</ButtonIconText>
              </ButtonIconDiv>
              <ButtonText>ADICIONAR AO CARRINHO</ButtonText>
            </ButtonAddToCart>
          </Product>
        )}
      />
    </Container>
  );
}
