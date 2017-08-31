import * as React from 'react';
import './App.css';
import HomePage from './components/home-page';
import ProfilePage from './components/profile-page';
import { profiles } from './utils/fake-data'
import NavBar from './components/nav-bar'
import { RouteComponentProps, Switch, Route } from "react-router";
import { profile } from "./utils/interface";

class App extends React.Component {

  getCorrectProfile(user: string) {
    return profiles.find((profile: profile) => profile.userInfo.name === user) as profile
  }
  
  routeRequest = (props : RouteComponentProps<any>) => {
    if(props.match.path === "/home") {
      return <HomePage profiles={profiles}/> 
    }
    else if (props.match.params.userName) {
      return <ProfilePage profile={this.getCorrectProfile(props.match.params.userName)}/>
    }
    return null;
  }

  render() {
    return (
      <div> 
        {NavBar('Ewan May')}
        <Switch>
          <Route exact={true} path="/home" component={this.routeRequest} />
          <Route exact={true} path="/profile/:userName" component={this.routeRequest} />
        </Switch>
         </div>
    );
  }
}

export default App;
