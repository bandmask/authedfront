var jwt = require('jsonwebtoken')

var jwtOptions = {
  issuer: "ropr.se",
  audience: "ropr",
  authority: "authority-ropr-se",
  secret: "MTE0NEQzMThDOEI4RDVBM0E3OUJBNEIxQTI3QzM="
}

var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhc2Rhc2QiLCJqdGkiOiI5NzMzYjM2Ny1hNWEwLTQ2NzItOGIzNy1lZjQyNmM0NDlkZDYiLCJuYW1laWQiOiI1YmZmYmQ3YTBhYzI5NDAwMDFkODkxNWMiLCJuYmYiOjE1NDM0ODY4NDIsImV4cCI6MTU0NjA3ODg0MiwiaWF0IjoxNTQzNDg2ODQyLCJpc3MiOiJyb3ByLnNlIiwiYXVkIjoicm9wciJ9.E0z6ObkeXD6CpfGRuF9wDj48J2abCk_U6P6bc_F5io8'

jwt.verify(token, jwtOptions.secret, getOptions(jwtOptions), (err, decoded) => {
  console.log(err, decoded)
})

function getOptions (jwtOptions) {
  return {
    issuer: jwtOptions.issuer,
    audience: jwtOptions.audience,
    algorithms: ['HS256']
  }
}
