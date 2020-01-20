import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { lighten } from 'polished';

export const CartContainer = styled.View`
  flex: 1;
  background: #292929;
  /* background: #65daa2; */
`;

export const Container = styled.View`
  padding: 10px;
  border-radius: 4px;
  margin: 15px;
  background: #fff;
`;

export const Products = styled.View``;

export const Product = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-content: center;
`;

export const Image = styled.Image`
  width: 64px;
  height: 64px;
`;

export const Info = styled.View`
  max-width: 250px;
  margin: 10px 0 0 15px;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: #333;
`;

export const Price = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const ViewButtonRemove = styled.View`
  flex: 1;
  align-items: flex-end;
`;

export const ButtonRemove = styled.TouchableOpacity`
  margin-top: 15px;
`;

export const ProductControl = styled.View`
  flex-direction: row;
  background: ${lighten(0.38, '#7159c1')};
  border-radius: 2px;
`;

export const RemoveAmount = styled.TouchableOpacity`
  margin: 10px;
`;

export const Amount = styled.TextInput.attrs({
  readOnly: true,
})`
  height: 32px;
  background: #fff;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
  margin: 5px 0;
`;
export const AddAmount = styled.TouchableOpacity`
  flex: 1;
  margin: 10px;
`;
export const ProductPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: auto;
  padding-right: 10px;
`;
export const Total = styled.View`
  /* border: border solid #8c8c8c; */
  margin: auto;
  align-items: center;
  padding-top: 15px;
`;

export const TotalTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #8c8c8c;
`;

export const TotalPrice = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;
export const ButtonFinish = styled(RectButton)`
  margin-top: 20px;
  height: 35px;
  background: #7159c1;
  color: #fff;
  border: 0;
  border-radius: 2px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const ButtonText = styled.Text`
  color: #fff;
  flex: 1;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

export const EmptyContainer = styled.View`
  flex: 1;
  align-items: center;
  max-height: 150px;
  padding: 10px;
  border-radius: 4px;
  margin: 15px;
  background: #fff;
`;

export const EmptyText = styled.Text`
  margin-top: 10px;
  font-size: 24px;
  font-weight: bold;
`;
