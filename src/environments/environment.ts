import {environmentBase} from './environment.base';

const environmentDev = {
   apiBaseUrl: 'http://localhost:8000'
};

export const environment = Object.assign({}, environmentBase, environmentDev);
