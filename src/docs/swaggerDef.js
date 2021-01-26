const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Big App Co. mail service API Documentation',
    version,
    license: {
      name: 'MIT',
      url: '',
    },
  },
  servers: [
    {
      url: `http://${config.host}/api/v1`,
    },
  ],
};

module.exports = swaggerDef;
