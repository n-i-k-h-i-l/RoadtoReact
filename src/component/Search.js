import React from "react";
/*
class Search extends React.Component {
  render() {
    const { value, onChange, children } = this.props;
    return (
      <form>
        {children} <input type="text" value={value} onChange={onChange} />
      </form>
    );
  }
}

export default Search;*/

const Search = ({ value, onChange, children }) => {
  return (
    <form>
      {children} <input type="text" value={value} onChange={onChange} />
    </form>
  );
};

export default Search;
