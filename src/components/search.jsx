import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "",
  };

  searchKino = (event) => {
    if (event.key === "Enter") {
      // console.log(this.state.search)
      this.props.searchMovie(this.state.search, this.state.type);
    }
  };

  whatSearch = (event) => {
    this.setState({ type: event.target.value });
  };
  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            id="search"
            type="search"
            className="validate"
            placeholder="Search fckin movie"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.searchKino}
          />
          <button
            className="btn btn-search"
            onClick={() =>
              this.props.searchMovie(this.state.search, this.state.type)
            }
          >
            Search
          </button>
        </div>

        <label>
          <input
            className="with-gap"
            name="group3"
            type="radio"
            defaultChecked
            onChange={this.whatSearch}
            value=""
          />
          <span>All</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="group3"
            type="radio"
            onChange={this.whatSearch}
            value="&type=movie"
          />
          <span>Movie</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="group3"
            type="radio"
            onChange={this.whatSearch}
            value="&type=series"
          />
          <span>Series</span>
        </label>
      </div>
    );
  }
}
//
export { Search };
