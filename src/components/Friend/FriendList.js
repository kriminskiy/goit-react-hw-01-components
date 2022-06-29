import Friend from '../Friend/Friend';
import PropTypes from 'prop-types';
import s from './friend.module.css';

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(item => (
        <Friend
          key={item.id}
          name={item.name}
          avatar={item.avatar}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
}

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  //isOnline: PropTypes.string.isRequired,
};
export default FriendList;
