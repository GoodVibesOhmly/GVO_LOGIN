import { OAuthExtension } from './index';
import * as types from './types';

Object.assign(OAuthExtension, {
  ...types,
});

export { OAuthExtension as default };
