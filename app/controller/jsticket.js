const Controller = require("egg").Controller
let lasttime = 0
let result

class JsTicketController extends Controller {
  async index() {
    const ctx = this.ctx
    const { appId } = this.config.wxconfig
    if (lasttime === 0 || new Date().getTime() - lasttime > 7200 * 1000) {
      const token = await ctx.service.accessToken.fetch()
      lasttime = new Date().getTime()
      const jsticket = await ctx.service.jsticket.fetch({
        token: token.data.access_token
      })
      result = jsticket
    }
    const signConfig = ctx.helper.sign(
      result.data.ticket,
      `http://${ctx.header.host}`
    )
    this.ctx.body = Object.assign(signConfig, {
      appId
    })
  }
}

module.exports = JsTicketController
