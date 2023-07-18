import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  withdrawAmount = value => {
    this.setState(prev => ({amount: prev.amount - value}))
  }

  render() {
    const {amount, includeList} = this.state

    const {denominationsList} = this.props
    return (
      <div className="con">
        <div className="con1">
          <div className="con2">
            <h1 className="head1">S</h1>
            <h1 className="head2">Sarah Williams</h1>
          </div>
          <div className="con3">
            <p className="para2">Your Balance</p>
            <div className="con4">
              <p className="head3">{amount}</p>
              <p className="para1">in Rupees</p>
            </div>
          </div>
          <p className="head5">Withdraw</p>
          <p className="para">CHOOSE SUM (IN RUPEES)</p>
          <ul className="subCon">
            {denominationsList.map(each => (
              <DenominationItem
                eachItem={each}
                key={each.id}
                withdrawAmount={this.withdrawAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
