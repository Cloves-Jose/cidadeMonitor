export const jwtConstants = {
    secret: `${require('crypto').randomBytes(48, function(ee, buffer){ let token = buffer.toString('hex'); /*console.log(token)*/})}`
}