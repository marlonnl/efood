const Checkout = ({ onClose }: { onClose?: () => void }) => (
  <div className="container">
    Pagamento - Valor a pagar R$ 0,00
    <div>
      <label htmlFor="cardName">Nome no cartão</label>
      <input type="text" name="cardName" id="cardName" />

      <label htmlFor="cardNumber">Número do cartão</label>
      <input type="text" name="cardNumber" id="cardNumber" />

      <label htmlFor="cvv">CVV</label>
      <input type="text" name="cvv" id="cvv" />

      <label htmlFor="expMonth">Mês de vencimento</label>
      <input type="text" name="expMonth" id="expMonth" />

      <label htmlFor="expYear">Ano de vencimento</label>
      <input type="text" name="expYear" id="expYear" />
    </div>
  </div>
)

export default Checkout
