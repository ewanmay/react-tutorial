
import * as React from 'react';
import { userInfo } from '../utils/interface';

interface profileBioProps {
  info: userInfo
}

class ProfileBio extends React.Component<profileBioProps, any> {
  listAllInterests(interests: string[]) {
    const formattedInterests = interests.map((interest) => {
      return (
        <li key={interest}>
          {interest}
        </li>
      )
    })
    return (
      <div className='interests'>
        Interests:
      <ul>
          {formattedInterests}
        </ul>
      </div>
    )
  }

  render() {
    console.log(this.props,"/images/" + this.props.info.age);
    return (
      <div className='profile-bio'>
        <img src={"/images/" + this.props.info.name + '.jpg'} className='col-xs-2 col-sm-2 col-md-2 col-lg-2' height='200px' width='200px' />
        <div className='name'>
          {this.props.info.name}
        </div>
        <div className='age'>
          {this.props.info.age}
        </div>
        {this.listAllInterests(this.props.info.interests)}
      </div>
    );
  }
}

export default ProfileBio