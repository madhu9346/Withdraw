import './index.css'

const DenominationItem = props => {
  const {eachItem, withdrawAmount} = props
  const {id, value} = eachItem

  const onWithdraw = () => {
    withdrawAmount(value)
  }

  return (
    <li className="liAdds">
      <button type="button" className="btn" onClick={onWithdraw}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
