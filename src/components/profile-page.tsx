import * as React from 'react';
import { profile, tweet } from "../utils/interface";
import Tweet from './tweet'
import ProfileBio from './profile-bio';
import FormInput from './form-input';

interface ProfilePageProps {
  profile: profile;
}

interface ProfilePageState {
  tweets: tweet[]
}

class ProfilePage extends React.Component<ProfilePageProps, ProfilePageState> {
  constructor(props: ProfilePageProps) {
    super(props)
    this.state = {
      tweets: this.props.profile.tweetList
    }
  }
  renderTweets() {
    return this.state.tweets.map((tweet: tweet) => {
      return <Tweet tweet={tweet} />
    })
  }

  postTweet(message: string) {
    const newTweet = {
      message: message,
      user: this.props.profile.userInfo.name,
      date: new Date()
    }
    let currentTweets = this.state.tweets;
    currentTweets.unshift(newTweet);
    this.setState({ tweets: currentTweets })
  }

  render() {
    return (
      <div className="profile-page">
        <div className="spacer col-md-2" />
        <div className="col-lg-8">
          <ProfileBio info={this.props.profile.userInfo} />
          <FormInput postTweet={(value) => this.postTweet(value)} />
          {this.renderTweets()}
        </div>
        <div className="spacer col-md-2" />
      </div>
    )
  }

}

export default ProfilePage;