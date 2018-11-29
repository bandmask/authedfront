const init = () => {
  var token = getToken()
  if (token) {
    if (validateToken(token)) {
      return true
    }
  }
  return false
}

const signin = () => {

}

const signout = () => {

}

const register = async (registerModel) => {
  try {
    var response = await (await fetch('https://auth.ropr.se/api/auth/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ropr-domain-client': 'ropr'
      },
      body: JSON.stringify(registerModel)
    })).json()

    console.log(response)

    setToken(response)

    return { success: true }
  } catch (exception) {
    console.log(exception)
    return { success: false }
  }
}

const verify = async () => {
  try {
    var token = getToken()
    var response = await (await fetch('http://localhost:49360/verify', {
      method: 'GET',
      headers: {
        'Authorization': token
      }
    })).json()

    return response
  } catch (exception) {
    return { success: false, message: exception }
  }
}

export default {
  init: init,
  signin: signin,
  signout: signout,
  register: register,
  verify: verify
}

const getToken = () => {
  return localStorage.getItem('bearerToken')
}

const setToken = token => {
  localStorage.setItem('bearerToken', token)
}

const validateToken = async token => {
  try {
    var response = await (await fetch('https://auth.ropr.se/api/auth/validate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ropr-domain-client': 'ropr',
        'Authorization': token
      }
    })).json()

    console.log(response)

    return true
  } catch (exception) {
    console.log(exception)
    return false
  }
}
