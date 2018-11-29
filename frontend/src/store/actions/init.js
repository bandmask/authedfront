import auth from '@/auth'

export default context => {
  if (auth.init()) {
    context.state.userModel.loggedIn = true
  }
  context.state.authInitiated = true
}
