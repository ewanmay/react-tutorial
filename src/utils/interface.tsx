export interface profile {
  userInfo: userInfo;
  tweetList: tweet[];
}

export interface userInfo {
  name: string;
  age: number;
  interests: Array<string>;
}

export interface tweet {
  user: string;
  message: string;
  date: Date;
}