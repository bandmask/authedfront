import auth from '@/auth'

export default context => {
  context.state.verificationResult = auth.verify()
}
