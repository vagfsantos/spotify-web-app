import React, { Component } from "react";
import {
  TextField,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  Button
} from "@material-ui/core";
import { SearchBox, Radios } from "./index.styles";

class Search extends Component {
  state = {
    query: "",
    searchOptions: [
      { label: "Artist", value: "artist", selected: true },
      { label: "Album", value: "album", selected: false },
      { label: "Track", value: "track", selected: false }
    ]
  };

  onChangeQuery = event => {
    const query = event.target.value;

    this.setState({ query });
  };

  onChangeType = event => {
    const value = event.target.value;

    this.setState(state => {
      return {
        searchOptions: state.searchOptions.map(item =>
          item.value === value
            ? { ...item, selected: true }
            : { ...item, selected: false }
        )
      };
    });
  };

  onSubmit = event => {
    event.preventDefault();

    const { query, searchOptions } = this.state;
    const type = searchOptions.find(o => o.selected).value;

    this.props.onSearch(query, type);
  };

  render() {
    const { query, searchOptions } = this.state;

    return (
      <form onSubmit={this.onSubmit} data-test="form">
        <SearchBox>
          <TextField
            name="query"
            variant="outlined"
            label="Search on spotfy"
            margin="normal"
            required
            onChange={this.onChangeQuery}
            value={query}
            data-test="query-input"
          />

          <FormControl component="fieldset">
            <FormLabel component="legend">I'm looking for</FormLabel>
            <Radios
              row
              name="type"
              value={searchOptions.find(s => s.selected).value}
              onChange={this.onChangeType}
              data-test="radios"
            >
              {searchOptions.map(option => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio required color="primary" />}
                  label={option.label}
                  labelPlacement="end"
                />
              ))}
            </Radios>
          </FormControl>

          <Button type="submit" variant="outlined" color="primary">
            GO!
          </Button>
        </SearchBox>
      </form>
    );
  }
}

export default Search;
