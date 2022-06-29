import Profile from './Profile';
import profile from '../user.json';

function ProfileList() {
  return (
    <Profile
      key={profile.tag}
      name={profile.username}
      tag={profile.tag}
      location={profile.location}
      avatar={profile.avatar}
      followers={profile.stats.followers}
      views={profile.stats.views}
      likes={profile.stats.likes}
    />
  );
}
export default ProfileList;
