import React from 'react'
import { compose } from 'recompose'
import withCheckout from '../../containers/withCheckout'
import CartItem from '../store/Cart/Item'
import { velaBlue, offWhite, velaRed } from '../../style/colors'
import Checkbox from '../Checkbox'

const AddedToCart = ({ checkout, checked, onCheck, toggleButton, activeButton }) => {
  return (
    <div>
      <h3>Itens adicionados ao carrinho!</h3>
      <p>Finalize o pedido do seu Pacote Aluguel Anual da Vela 2.</p>
      <div className='conditions'>
        <p>1. A Vela é feita sob medida, o prazo atual é de 8 semanas para produção e entrega.</p>
        <p>2. Possui alguma dúvida? Envie uma mensagem no chat em azul à direita da tela!</p>
        <p>3. Você receberá o status de acompanhamento do seu pedido por e-mail.</p>
      </div>
      <p>Aceitamos pagamentos pelo <b>PayPal</b> (parcele em até 12x sem juros no cartão de crédito) ou pelo Coinbase com criptomoedas.</p>
      {checkout && !checkout.lineItems.edges.length ? (
        <h5>Seu carrinho está vazio.</h5>
      ) : (
        <>
          <h5>Confira e revise os itens do pedido para finalizar:</h5>
          <div className="items">
            <table>
              <tbody>
                {checkout.lineItems.edges.map((item) => (
                  <CartItem key={item.node.variant.id} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      <div>
        {/* <label className='terms'>
          <Checkbox
            onChange={() => onCheck(!checked) + toggleButton(!activeButton)}
          />
          <span>Eu concordo com os <a href='/termosdealuguel' target='_blank'>Termos de Aluguel</a> da Vela 2 correspondentes ao período contratado.</span>
        </label>
        <h6>Após pagamento, a contratação será concluída mediante análise de crédito. As informações para análise serão requeridas por e-mail.</h6> */}
        <h5 className='unavailable'>O aluguel está indisponível no momento. Aguarde novas oportunidades!</h5>
      </div>    
      <style jsx>{`
      .items {
        flex: 1;
        overflow: auto;
        min-height: 0;
        max-width: 100%;
      }
      .items table {
        border-spacing: 0 1rem;
      }
      .another {
        color: ${velaBlue};
        cursor: pointer;
      }
      .conditions {
        background-color: ${offWhite};
        padding: 1em;
        margin-bottom: 1em;
      }
      .conditions p{
        font-size: 0.9em;
      }
      .terms {
        margin-bottom: 0.5em;
      }
      .unavailable {
        color: ${velaRed};
      }
      `}</style>
    </div>
  )
}

export default compose(
  withCheckout
)(AddedToCart)
