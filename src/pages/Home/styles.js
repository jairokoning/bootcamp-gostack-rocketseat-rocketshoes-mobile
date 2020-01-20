import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
// import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
  background: #292929;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Product = styled.View`
  padding: 10px;
  max-width: 260px;
  background: #fff;
  margin: 0 15px 250px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 250px;
  height: 250px;
  background: #eee;
`;

export const Title = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: #333;
  margin-top: 5px;
`;

export const Price = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin: 5px 0 20px;
`;

export const ButtonAddToCart = styled(RectButton)`
  background: #7159c1;
  color: #fff;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const ButtonIconDiv = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
`;

export const ButtonIconText = styled.Text`
  margin-left: 5px;
  color: #fff;
`;

export const ButtonText = styled.Text`
  color: #fff;
  flex: 1;
  text-align: center;
  font-weight: bold;
`;
