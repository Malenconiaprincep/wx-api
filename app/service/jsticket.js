const Base = require('./base')

class JSTicketService extends Base {
  async fetch(params) {
    const ctx = this.ctx
    const { jsticket } = this.config.wxconfig
    const res = await ctx.curl(jsticket, {
      dataType: 'json',
      data: {
        access_token: params.token
      }
    })
    return res
  }
}

module.exports = JSTicketService
