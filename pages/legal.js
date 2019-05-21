import PropTypes from 'prop-types'
import { compose } from 'recompose'
import withShop from '../containers/withShop'
import PaddedView from '../components/PaddedView'

const LegalPage = ({
  shop, isShopLoading
}) =>
  <PaddedView>
    {JSON.stringify(shop)}
  </PaddedView>

export default compose(
  withShop
)(LegalPage)
