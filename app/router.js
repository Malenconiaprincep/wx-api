module.exports = app => {
  const { router, controller } = app;
  router.get('/jsticket', controller.jsticket.index);
}
