const Controller = require("egg").Controller

class AuthController extends Controller {
  async index() {
    const ctx = this.ctx
    const { code, state } = ctx.query

    // TODO 时效处理
    const data = await ctx.service.authToken.fetch({code})
    const { access_token, openid} = data.data
    const userInfo = await ctx.service.userinfo.fetch({access_token, openid})
    this.ctx.body = userInfo
  }
}

module.exports = AuthController
