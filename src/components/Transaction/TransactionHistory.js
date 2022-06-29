import Transaction from './Transaction';
import s from './transaction.module.css';
import PropTypes from 'prop-types';

function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th className={s.shit}>Type</th>
          <th className={s.shit}>Amount</th>
          <th className={s.shit}>Currency</th>
        </tr>
      </thead>
      {items.map(item => (
        <Transaction
          key={item.id}
          type={item.type}
          amount={item.amount}
          currency={item.currency}
        />
      ))}
    </table>
  );
}

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
export default TransactionHistory;
