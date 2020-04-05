import React, { Component } from "react";
import { Input } from "antd";


const { Search } = Input;


export default class SearchBar extends Component {
  render() {
    return (
      <div >
        <Search
          placeholder="Google Search"
          style={{ position: "absolute", left: "35%", width: "30%", marginTop: "2%" }}
          enterButton={true}
          onSearch={value => {
            window.open(`https://www.google.com/search?q=${value}`, "_blank");
          }}
        ></Search>
      </div>

    );
  }
}
