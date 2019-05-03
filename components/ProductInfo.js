import { compose, withHandlers, withState } from 'recompose'
import withCheckoutLineItemsAdd from '../containers/withCheckoutLineItemsAdd'
import withCheckoutId from '../containers/withCheckoutId'
import Price from '../components/Price'

const ProductInfo = ({ product, isLoading, onAddToCartClick, isAddToCartLoading }) =>
  <div className='ProductInfo'>
    <div>
      <img src={product.images && product.images.edges[0].node.src} alt='' />
    </div>
    <div>
      <h1>{product.title}</h1>
      <h4><Price value={product.variants.edges[0].node.price} /></h4>
      <button type='button' onClick={onAddToCartClick} disabled={isLoading}>comprar</button>
      {isAddToCartLoading && 'carregando'}
      <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
    </div>
    <style jsx>{`
      .ProductInfo {
        display: flex;
      }
      .ProductInfo > div {
        flex: 1
      }
      h1 {
        margin-bottom: 0
      }
      h4 {
        margin-top: 0
      }
    `}</style>
  </div>

export default compose(
  withState('isAddToCartLoading', 'setAddToCartLoading', false),
  withCheckoutLineItemsAdd,
  withCheckoutId,
  withHandlers({
    onAddToCartClick: ({
      checkoutLineItemsAdd,
      checkoutId,
      setAddToCartLoading,
      product
    }) => async e => {
      setAddToCartLoading(true)
      const mutationResult = await checkoutLineItemsAdd({
        variables: {
          checkoutId: checkoutId,
          lineItems: [
            { variantId: product.variants.edges[0].node.id, quantity: 1 }
          ]
        }
      })
      console.log(mutationResult)
      setAddToCartLoading(false)
    }
  })
)(ProductInfo)
