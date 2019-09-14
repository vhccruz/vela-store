import Link from 'next/link'
import PropTypes from 'prop-types'
import { compose, withHandlers } from 'recompose'
import { toggleDrawer } from '../lib/redux'
import withOpenDrawer from '../containers/withOpenDrawer'
import { Logo, MenuIcon, CartIcon } from './Icons'

const HeaderMenu = ({ handleCartClick, handleMenuClick }) =>
  <>
    <div><Link href='/'><a>
      <Logo />
    </a></Link></div>
    <div><a onClick={handleMenuClick}>
      <MenuIcon />
    </a></div>
    <div><a onClick={handleCartClick}>
      <CartIcon />
    </a></div>
  </>

HeaderMenu.propTypes = {
  handleCartClick: PropTypes.func,
  handleMenuClick: PropTypes.func
}

export default compose(
  withOpenDrawer,
  withHandlers({
    handleMenuClick: ({ dispatch }) => e => dispatch(toggleDrawer('MENU')),
    handleCartClick: ({ dispatch }) => e => dispatch(toggleDrawer('CART'))
  })
)(HeaderMenu)
