import jwt from 'jsonwebtoken'
import config from './config.production.js'

const verify = (req, res, next) => {
  try {
    const header = req.headers['authorization']
    var jwtToken = header.split(' ')[1]

    jwt.verify(jwtToken, config.secret, getOptions(config))
    next()
  } catch (exception) {
    res.json({ success: 401, message: exception })
  }
}

const getOptions = config => {
  return {
    issuer: config.issuer,
    audience: config.audience,
    algorithms: ['HS256']
  }
}

export default verify
