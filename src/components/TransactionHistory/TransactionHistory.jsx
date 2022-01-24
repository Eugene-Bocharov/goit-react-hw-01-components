import React from "react";
import PropTypes from "prop-types";
import './TransactionHisstory.css'

function TransactionHistory({ items }) {
return(
<React.Fragment>
<h1 className="ProfileTitle">Transaction History</h1>

<table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map((item)=>{
          return(
            <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
          )
      })}
    </tbody>
  </table>
</React.Fragment>
)
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
  item : PropTypes.shape({
    id: PropTypes.number.isRequired,
    label : PropTypes.string,
    percentage: PropTypes.number,
  })
}

export default TransactionHistory;