import React from 'react';

class Profile extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
      return(
      <div>
      Welcome {this.props.location.state.user.name} !
      </div>);
  }
}
export default Profile;
