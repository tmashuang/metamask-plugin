import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import ConfirmDeployContract from '../confirm-deploy-contract.component'

describe('Confirm Deploy Contract', function () {

  let wrapper

  const txData = {
    id: 1,
    metamaskNetworkId: '66',
    status: 'unapproved',
    txParams: {
      from: '0x0dcd5d886577d5081b0c52e242ef29e70be3e7bc',
      value: '0x0',
      data: '0x608060405234801561001057600080fd5b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000808190555061023b806100686000396000f300608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632e1a7d4d1461005c5780638da5cb5b1461009d578063d0e30db0146100f4575b600080fd5b34801561006857600080fd5b5061008760048036038101908080359060200190929190505050610112565b6040518082815260200191505060405180910390f35b3480156100a957600080fd5b506100b26101d0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100fc6101f6565b6040518082815260200191505060405180910390f35b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561017057600080fd5b8160008082825403925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f193505050501580156101c5573d6000803e3d6000fd5b506000549050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60003460008082825401925050819055506000549050905600a165627a7a72305820f237db3ec816a52589d82512117bc85bc08d3537683ffeff9059108caf3e5d400029',
      gas: '0x47b760',
      gasPrice: '0x77359400',
    },
  }

  beforeEach(function () {
    wrapper = shallow(
      <ConfirmDeployContract />, {
        context: {
          t: (str) => str,
        },
      }
    )
  })

  it('sets actionKey to contractDeployment', function () {
    assert.equal(wrapper.prop('actionKey'), 'contractDeployment')
  })

  it('sets txData to props', function () {
    wrapper.setProps({ txData })

    assert.deepEqual(wrapper.instance().props.txData, txData)
  })
})