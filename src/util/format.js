// const numeral = require('numeral');
import numeral from 'numeral';
import 'numeral/locales';

export default function formatPrice(value) {
  const num = parseFloat(value)
    .toFixed(2)
    .replace('.', ',');

  numeral.locale('pt-br');
  return numeral(num).format('$ 0.00[,]00');
}

// export const { format: formatPrice } = Intl.NumberFormat('pt-BR', {
//   style: 'currency',
//   currency: 'BRL',
// });
