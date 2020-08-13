import React from 'react'
import assert from 'assert'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import AccountDetailsModal from '../index'

describe('Account Details Modal', function () {
  let wrapper

  const props = {
    hideModal: sinon.spy(),
    setAccountLabel: sinon.spy(),
    showExportPrivateKeyModal: sinon.spy(),
    showQrView: sinon.spy(),
    network: 'test',
    rpcPrefs: {},
    selectedIdentity: {
      address: '0xAddress',
      name: 'Account 1',
    },
    keyrings: [
      {
        type: 'HD Key Tree',
        accounts: [
          '0xAddress',
        ],
      },
    ],
    identities: {
      '0xAddress': {
        address: '0xAddress',
        name: 'Account 1',
      },
    },
  }

  before(function () {
    global.platform = { openTab: sinon.spy() }
  })

  beforeEach(function () {
    wrapper = shallow(
      <AccountDetailsModal.WrappedComponent {...props} />, {
        context: {
          t: (str) => str,
        },
      }
    )
  })

  after(function () {
    sinon.restore()
  })

  it('sets account label when changing default account label', function () {
    const accountLabel = wrapper.find('.account-modal__name').first()
    accountLabel.simulate('submit', 'New Label')

    assert(props.setAccountLabel.calledOnce)
    assert.equal(props.setAccountLabel.getCall(0).args[1], 'New Label')
  })

  it('opens new window when view block explorer is clicked', function () {
    const modalButton = wrapper.find('.account-modal__button')
    const etherscanLink = modalButton.first()

    etherscanLink.simulate('click')
    assert(global.platform.openTab.calledOnce)
  })

  it('shows export private key modal when clicked', function () {
    const modalButton = wrapper.find('.account-modal__button')
    const etherscanLink = modalButton.last()

    etherscanLink.simulate('click')
    assert(props.showExportPrivateKeyModal.calledOnce)
  })

  it('sets blockexplorerview text when block explorer url in rpcPrefs exists', function () {
    const blockExplorerUrl = 'https://block.explorer'
    wrapper.setProps({ rpcPrefs: { blockExplorerUrl } })

    const modalButton = wrapper.find('.account-modal__button')
    const blockExplorerLink = modalButton.first()

    assert.equal(blockExplorerLink.html(), '<button class="button btn-secondary account-modal__button">blockExplorerView</button>')
  })
})
