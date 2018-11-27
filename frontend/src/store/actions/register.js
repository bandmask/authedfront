import auth from '@/auth'
import { ACTIONS } from '@/store/actions'

export default (context, payload) => {
  let registerResult = auth.register(payload)
  if (registerResult.success) {
    context.dispatch(ACTIONS.RESET_REGISTER_MODEL)
  } else {
    context.state.registerModel.errors = registerResult.errors
  }
}
