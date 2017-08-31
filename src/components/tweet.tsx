import * as React from "react";
import { tweet } from "../utils/interface";
import { Link } from "react-router-dom";

interface TweetProps {
  tweet: tweet;
}

class Tweet extends React.Component<TweetProps, {}> {
  render() {
    return (
      <div className="tweet">
        <div className="tweet-userName">
          <Link to={'/profile/'+this.props.tweet.user}>
          {this.props.tweet.user}
          </Link>
        </div>
        <div className="tweet-date">
          {this.props.tweet.date.toLocaleDateString()}
        </div>
        <div className="tweet-message">
          {this.props.tweet.message}
        </div>
      </div>
    );
  }
}

export default Tweet