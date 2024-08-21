import * as webpack from 'webpack';
const Dotenv = require('dotenv-webpack');

const config: webpack.Configuration = {
  plugins: [
    new Dotenv()  // Esto cargará las variables desde .env
  ]
};

export default config;
