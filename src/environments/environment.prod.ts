import { environmentBase } from './environment.base';

const environmentProduction = {
  production: true,
  apiBaseUrl: 'https://api.domain.com',
};

export const environment = Object.assign({}, environmentBase, environmentProduction);
