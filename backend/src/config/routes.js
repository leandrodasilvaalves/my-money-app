const express = require('express');

module.exports = (server) => {
  
  //URL base
  router = express.Router();
  server.use('/api',router);

  //mapeamento das rotas
  const BillingCycle = require('../api/billingCycle/billingCycleService');
  BillingCycle.register(router, '/billingCycles');

}