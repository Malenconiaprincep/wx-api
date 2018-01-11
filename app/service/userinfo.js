const Base = require('./base')

class UserInfoService extends Base {
  async fetch({access_token, openid}) {
    const ctx = this.ctx
    const res = await ctx.curl('https://api.weixin.qq.com/sns/userinfo', {
      dataType: 'json',
      data: {
        access_token,
        openid,
        lang: 'zh_CN'
      }
    })
    return res
  }
}

module.exports = UserInfoService
