import ProfileList from './components/Profile/ProfileList';
import FriendList from './components/Friend/FriendList';
import StatisticsList from './components/Statistics/StatisticsList';
import TransactionHistory from './components/Transaction/TransactionHistory';
import profile from './components/user.json';
import friends from './components/friends.json';
import statistics from './components/data.json';
import transactions from './components/transactions.json';
import './index.css';

export default function App() {
  return (
    <div>
      <ProfileList items={profile} />
      <StatisticsList items={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
