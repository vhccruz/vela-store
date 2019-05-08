import { compose, withHandlers } from 'recompose'
import { setCustomerAccessToken } from '../lib/redux'
import withCustomerCreate from '../containers/withCustomerCreate'
import withCustomerAccessTokenCreate from '../containers/withCustomerAccessTokenCreate'
import UserLoginForm from '../components/UserLoginForm'
import UserRegisterForm from '../components/UserRegisterForm'

const UserAuth = ({ handleLoginSubmit, handleRegisterSubmit }) =>
  <div className='UserAuth'>
    <UserLoginForm onSubmit={handleLoginSubmit} />
    <UserRegisterForm onSubmit={handleRegisterSubmit} />
  </div>

export default compose(
  withCustomerCreate,
  withCustomerAccessTokenCreate,
  withHandlers({
    handleLoginSubmit: props => async input => {
      try {
        const tokenMutationResult = await customerAccessTokenCreate({ variables: { input } })
        dispatch(setCustomerAccessToken(tokenMutationResult.data.customerAccessTokenCreate.customerAccessToken))
      } catch (error) {
        alert(error)
      }
    },
    handleRegisterSubmit: props => async input => {
      try {
        const createMutationResult = await customerCreate({ variables: { input } })
        const tokenMutationResult = await customerAccessTokenCreate({ variables: { input } })
        dispatch(setCustomerAccessToken(tokenMutationResult.data.customerAccessTokenCreate.customerAccessToken))
      } catch (error) {
        alert(error)
      }
    }
  })
)(UserAuth)
