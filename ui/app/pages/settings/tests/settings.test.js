import React from 'react'
import { Provider } from 'react-redux'
import assert from 'assert'
import sinon from 'sinon'
import configureMockStore from 'redux-mock-store'
import { mountWithRouter } from '../../../../../test/lib/render-helpers'
import Settings from '../index'

describe('Settings', () => {
  let wrapper

  const mockStore = {
    metamask: {
      currentLocale: 'en',
      conversionDate: 1565024381.269,
      nativeCurrency: 'ETH',
      useBlockie: false,
      preferences: {
        useNativeCurrencyAsPrimaryCurrency: true,
      },
    },
    appState: {
      warning: null,
    },
  }

  const store = configureMockStore()(mockStore)

  const props = {
    history: {
      push: sinon.spy(),
    },
  }

  beforeEach(() => {
    wrapper = mountWithRouter(
      <Provider store={store}>
        <Settings.WrappedComponent {...props} />, store
      </Provider>
    )
  })

  it('renders', () => {
    assert.equal(wrapper.length, 1)
  })
})
