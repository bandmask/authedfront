import init from './actions/init'
import register from './actions/register'
import resetRegisterModel from './actions/resetRegisterModel'

export const ACTIONS = {
  INIT: 'a_init',
  REGISTER: 'a_register',
  RESET_REGISTER_MODEL: 'a_resetRegisterModel'
}

export default {
  [ACTIONS.INIT]: init,
  [ACTIONS.REGISTER]: register,
  [ACTIONS.RESET_REGISTER_MODEL]: resetRegisterModel
}
