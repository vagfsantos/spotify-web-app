import React, { Component } from "react";
import { connect } from "react-redux";
import { List } from "@material-ui/core";
import { getUserDataAsync } from "../../../state-manager/actions/user";
import { getTrackAsync } from "../../../state-manager/actions/track";
import Search from "../../components/Search";
import Track from "../../components/Track";
import { SearchResult } from "./index.styles";

class MySpot extends Component {
  state = {
    userIsLoggedIn: false
  };

  componentDidMount() {
    this.props.loadInititalData();
  }

  onSearch = (query, type) => {
    if (type === "track") {
      this.props.onSearchTrack(query);
    }
  };

  render() {
    const { searchedItems, userIsLoggedIn } = this.props;

    return userIsLoggedIn ? (
      <div>
        <Search onSearch={this.onSearch} />
        {searchedItems.length > 0 ? (
          <SearchResult>
            <List>
              {searchedItems.map(item => (
                <Track
                  key={item.id}
                  name={item.name}
                  image={item.album.images[0].url}
                  artists={item.artists}
                  album={item.album.name}
                  time={item.duration_ms}
                />
              ))}
            </List>
          </SearchResult>
        ) : null}
      </div>
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    userIsLoggedIn: !!state.user.id,
    searchedItems: state.search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadInititalData() {
      dispatch(getUserDataAsync());
    },

    onSearchTrack(query) {
      dispatch(getTrackAsync(query));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MySpot);
