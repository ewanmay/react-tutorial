import * as React from 'react';
import { profile, tweet } from "../utils/interface";
import Tweet from './tweet';


interface HomePageProps {
  profiles: profile[];
}

interface HomePageState {
  tweets: tweet[]
}


class HomePage extends React.Component<HomePageProps, HomePageState> {
  constructor(props: HomePageProps) {
    super(props)
    this.state = {
      tweets: []
    }
  }

  componentWillMount() {
    this.formatData()
  }

  formatData() {
    const mappedTweets = this.props.profiles.map((profile: profile) => profile.tweetList);
    const totalTweetList = mappedTweets.reduce((a: tweet[], b: tweet[]) => a.concat(b));
    const sortedTweetList = totalTweetList.sort((a: tweet, b: tweet) => b.date.getTime() - a.date.getTime());
    this.setState({ tweets: sortedTweetList });
  }

  renderTweets() {
    return this.state.tweets.map((tweet: tweet) => {
      return <Tweet tweet={tweet} />
    })
  }

  render() {
    return (
      <div className="home-page">
        <div className="spacer col-lg-2" />
        <div className="col-lg-8">
        {this.renderTweets()}
        </div>
        <div className="spacer col-lg-2" />
      </div>
    )
  }
}

export default HomePage;