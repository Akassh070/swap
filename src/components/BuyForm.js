import React, { Component } from 'react'

class BuyForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      output: '0'
    }
  }

  render() {
    return (
      <form className="buyForm" onSubmit={(event) => {
          event.preventDefault()
          let etherAmount
          etherAmount = this.input.value.toString()
          etherAmount = window.web3.utils.toWei(etherAmount, 'Ether')
          this.props.buyTokens(etherAmount)
        }}>
        <div className="forInput">
          <label className="input"><b>Input</b></label>
          <span className="balance1">
            Balance: {window.web3.utils.fromWei(this.props.ethBalance, 'Ether')}
          </span>
        </div>
        <div className="input-group mb-4">
          <input
            type="text"
            onChange={(event) => {
              const etherAmount = this.input.value.toString()
              this.setState({
                output: etherAmount * 100
              })
            }}
            ref={(input) => { this.input = input }}
            className="form-control form-control-lg"
            placeholder="0"
            required />
            
        </div>
        <div className="for-output">
          <label className="output"><b>Output</b></label>
          <span className="balance">
            Balance: {window.web3.utils.fromWei(this.props.tokenBalance, 'Ether')}
          </span>
        </div>
        <div className="input-group mb-2">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="0"
            value={this.state.output}
            disabled
          />
          <div className="input-group-append">
            
          </div>
        </div>
        <div className="ex-r">
          <span className="first-span">Exchange Rate</span>
          <span className="second-span">1 ETH = 100 Akash</span>
        </div>
        <button type="submit" className="buyBotton">SWAP</button>
      </form>
    );
  }
}

export default BuyForm;
