const Base = require('./base')

class AuthService extends Base {
  async fetch({code}) {
    const ctx = this.ctx
    const { accessToken, appId, appSecret } = this.config.wxconfig
    const res = await ctx.curl('https://api.weixin.qq.com/sns/oauth2/access_token', {
      dataType: 'json',
      data: {
        appid: appId,
        secret: appSecret,
        grant_type: 'authorization_code',
        code
      }
    })
    return res
  }
}

module.exports = AuthService
