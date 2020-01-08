import React from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import assert from 'assert'
import configureMockStore from 'redux-mock-store'
import { mountWithRouter } from '../../../../../test/lib/render-helpers'
import ConfirmApprove from '../index'

describe('Confirm Approve', () => {
  let wrapper

  const mockStore = {
    metamask: {
      featureFlags: {
        advancedInlineGas: false,
      },
      preferences: {
        showFiatInTestnets: false,
      },
      provider: {
        type: 'test',
      },
      addressBook: {},
      ensResolutionsByAddress: {},
      assetImages: {
        '0x617b3f8050a0bd94b6b1da02b4384ee5b4df13f4': null,
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
      cachedBalances: {
        '66': {
          '0x0dcd5d886577d5081b0c52e242ef29e70be3e7bc': '0xde0b6b3a7640000',
        },
      },
      unapprovedTxs: {
        1: {
          id: 1,
          status: 'unapproved',
          metamaskNetworkId: '66',
          txParams: {
            from: '0x0dcd5d886577d5081b0c52e242ef29e70be3e7bc',
            to: '0x617b3f8050a0bd94b6b1da02b4384ee5b4df13f4',
            value: '0x0',
            data: '0xa9059cbb000000000000000000000000f74176bd80708bab197a0b5063c57440fd9fea59000000000000000000000000000000000000000000000000016345785d8a0000',
            gas: '0xdaf1',
            gasPrice: '0x77359400',
          },
        },
      },
    },
    confirmTransaction: {
      txData: {
        id: 1,
        metamaskNetworkId: '66',
        status: 'unapproved',
        txParams: {
          from: '0x0dcd5d886577d5081b0c52e242ef29e70be3e7bc',
          to: '0x617b3f8050a0bd94b6b1da02b4384ee5b4df13f4',
          value: '0x0',
          data: '0xa9059cbb000000000000000000000000f74176bd80708bab197a0b5063c57440fd9fea59000000000000000000000000000000000000000000000000016345785d8a0000',
          gas: '0xdaf1',
          gasPrice: '0x77359400',
        },
      },
      tokenProps: {
        tokenDecimals: '',
        tokenSymbol: '',
      },
      fiatTransactionTotal: '0.02',
      ethTransactionTotal: '0.000112',
      methodData: {},
      tokenData: {
        name: 'approve',
        params: [
          {
            name: '_spender',
            value: '0x0dcd5d886577d5081b0c52e242ef29e70be3e7bc',
            type: 'address',
          },
          {
            name: '_value',
            value: '1',
            type: 'uint256',
          },
        ],
      },
    },
  }

  const store = configureMockStore([thunk])(mockStore)

  const props = {
    currentCurrency: 'usd',
    fiatTransactionTotal: '0.02',
    ethTransactionTotal: '0.000112',
    userAddress: '0x0dcd5d886577d5081b0c52e242ef29e70be3e7bc',
    token: {
      address: '0x617b3f8050a0bd94b6b1da02b4384ee5b4df13f4',
    },
  }

  beforeEach(() => {
    wrapper = mountWithRouter(
      <Provider store={store}>
        <ConfirmApprove.WrappedComponent {...props} />
      </Provider>, store
    )
  })

  it('renders', () => {
    assert.equal(wrapper.length, 1)
  })
})
