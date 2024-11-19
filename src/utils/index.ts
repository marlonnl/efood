export const priceFormat = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const sumCart = (items: Cardapio[]) => {
  return items.reduce((acc, actualPrice) => {
    return (acc += actualPrice.preco)
  }, 0)
}
