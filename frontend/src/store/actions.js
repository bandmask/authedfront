import init from './actions/init'
import register from './actions/register'
import resetRegisterModel from './actions/resetRegisterModel'
import verifyUser from './actions/verifyUser'

export const ACTIONS = {
  INIT: 'a_init',
  REGISTER: 'a_register',
  RESET_REGISTER_MODEL: 'a_resetRegisterModel',
  VERIFY_USER: 'a_verifyUser'
}

export default {
  [ACTIONS.INIT]: init,
  [ACTIONS.REGISTER]: register,
  [ACTIONS.RESET_REGISTER_MODEL]: resetRegisterModel,
  [ACTIONS.VERIFY_USER]: verifyUser
}
