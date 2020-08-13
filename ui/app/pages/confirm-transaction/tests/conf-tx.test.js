import React from 'react'
import { Provider } from 'react-redux'
import assert from 'assert'
import sinon from 'sinon'
import configureMockStore from 'redux-mock-store'
import { mountWithRouter } from '../../../../../test/lib/render-helpers'
import ConfirmTxScreen from '../conf-tx'

xdescribe('ConfirmTxScreen', function () {
  let wrapper

  const mockStore = {
    metamask: {
      network: '66',
      provider: {
        type: 'test',
      },
      currentCurrency: 'usd',
      cachedBalances: {
        '66': {
          '0x0dcd5d886577d5081b0c52e242ef29e70be3e7bc': '0xde0b6b3a7640000',
        },
      },
      identities: {
        '0x0dcd5d886577d5081b0c52e242ef29e70be3e7bc': {
          address: '0x0dcd5d886577d5081b0c52e242ef29e70be3e7bc',
          name: 'Account 1',
        },
      },
      accounts: {
        '0x0dcd5d886577d5081b0c52e242ef29e70be3e7bc': {
          address: '0x0dcd5d886577d5081b0c52e242ef29e70be3e7bc',
          balance: '0xde0b6b3a7640000',
        },
      },
      unapprovedTxs: {},
      unapprovedMsgs: {
        1: {
          id: 1,
          msgParams: {
            from: '0x0dcd5d886577d5081b0c52e242ef29e70be3e7bc',
            data: '0x879a053d4800c6354e76c7985a865d2922c82fb5b3f4577b2fe08b998954f2e0',
            origin: 'test.domain',
          },
          time: 1,
          status: 'unapproved',
          type: 'eth_sign',
        },
      },
    },
  }

  const store = configureMockStore()(mockStore)

  const props = {
    history: {
      push: sinon.spy(),
    },
    match: {
      params: {
        id: '1',
      },
    },
    identities: {
      '0x0dcd5d886577d5081b0c52e242ef29e70be3e7bc': {
        address: '0x0dcd5d886577d5081b0c52e242ef29e70be3e7bc',
        name: 'Account 1',
      },
    },
    unapprovedMsgs: {
      1: {
        id: 1,
        msgParams: {
          from: '0x0dcd5d886577d5081b0c52e242ef29e70be3e7bc',
          data: '0x879a053d4800c6354e76c7985a865d2922c82fb5b3f4577b2fe08b998954f2e0',
          origin: 'test.domain',
        },
        time: 1,
        status: 'unapproved',
        type: 'eth_sign',
      },
    },
    send: {
      to: '',
    },
  }

  beforeEach(function () {
    wrapper = mountWithRouter(
      <Provider store={store}>
        <ConfirmTxScreen.WrappedComponent {...props} />
      </Provider>, store
    )
  })

  it('renders', function () {
    assert.equal(wrapper.length, 1)
  })
})