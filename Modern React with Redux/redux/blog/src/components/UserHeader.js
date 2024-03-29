import React from "react";
import { connect } from "react-redux";
// import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  // componentDidMount() {
  //   this.props.fetchUser(this.props.userId);
  // }

  render() {

    if (!this.props.user) {
      return null;
    }

    return <div className="header">{this.props.user.name}</div>;
  }
}

//ownProps is a copy of components props
const mapStateToProps = (state, ownProps) => {
  const user = state.users.find((user) => user.id === ownProps.userId);
  return { user: user };
};

// export default connect(mapStateToProps, { fetchUser })(UserHeader);
export default connect(mapStateToProps)(UserHeader);
