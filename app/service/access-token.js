const Base = require('./base')

class ATService extends Base {
  async fetch() {
    const ctx = this.ctx
    const { accessToken, appId, appSecret } = this.config.wxconfig
    const res = await ctx.curl('https://api.weixin.qq.com/cgi-bin/token', {
      dataType: 'json',
      data: {
        appid: appId,
        secret: appSecret,
        grant_type: 'client_credential'
      }
    })
    return res
  }
}

module.exports = ATService
