const Controller = require("egg").Controller

class JsTicketController extends Controller {
  async index() {
    const ctx = this.ctx
    const { appId } = this.config.wxconfig
    const token = await ctx.service.accessToken.fetch()
    const jsticket = await ctx.service.jsticket.fetch({
      token: token.data.access_token
    })

    const signConfig = ctx.helper.sign(
      jsticket.data.ticket,
      `http://${ctx.header.host}`
    )

    this.ctx.body = Object.assign(signConfig, {
      appId
    })
  }
}

module.exports = JsTicketController
