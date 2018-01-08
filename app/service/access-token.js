const Service = require("egg").Service

class ATService extends Service {
  async fetch() {
    const ctx = this.ctx
    const { accessToken, appId, appSecret } = this.config.wxconfig
    console.log(accessToken, appId, appSecret)
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
