import { describe, it } from 'mocha';
import { assert, expect } from 'chai';
import { getSdk } from '../index';
import exp = require('constants');

const token = process.env.APP_TOKEN || '';

describe('getSdk', () => {
  it('token', async () => {
    expect(token).to.have.lengthOf.above(2);
  });

  it('app', async () => {
    const sdk = getSdk(token);
    const app = await sdk.app();
    expect(app).include.all.keys(['app']);
    expect(app.app).include.all.keys([
      'id',
      'title',
      'short_body',
      'type',
      'store_status',
      'installs',
    ]);
  });

  it('no valid token', async () => {
    const sdk = getSdk('');
    let error = null;
    try {
      const appPromise = await sdk.app();
    } catch (e) {
      error = e;
    }
    expect(error).to.be.not.null;
    expect(error.message.startsWith('No Valid OAuth Token(App) Provided')).to.be
      .true;
  });
});
