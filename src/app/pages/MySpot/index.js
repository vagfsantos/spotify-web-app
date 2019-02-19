import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserDataAsync } from "../../../state-manager/actions/user";

class MySpot extends Component {
  componentDidMount() {
    this.props.loadInititalData();
  }

  render() {
    return <p>Hello</p>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadInititalData() {
      dispatch(getUserDataAsync());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MySpot);
