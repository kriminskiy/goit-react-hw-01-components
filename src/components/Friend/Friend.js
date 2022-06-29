import s from './friend.module.css';
const Friend = ({ id, avatar, name, isOnline }) => {
  const statusOn = isOnline === true ? s.online : s.status;
  return (
    <li className={s.item}>
      <span className={statusOn}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt={name} width="49" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

export default Friend;
