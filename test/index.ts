import { describe, it } from 'mocha';
import { assert, expect } from 'chai';
import { getSdk } from '../index';

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
    let error: Error | null = null;
    try {
      const appPromise = await sdk.app();
    } catch (e) {
      if (e instanceof Error) error = e;
    }
    expect(error).to.be.not.null;
    expect(error!.message.startsWith('Authentication required.')).to.be.true;
  });
});
