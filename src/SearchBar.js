import React, { Component } from "react";
import { Input } from "antd";


const { Search } = Input;


export default class SearchBar extends Component {
  render() {
    return (
      <div >
        <Search
          placeholder="Google Search"
          onSearch={(value) =>
            window.open(`https://www.google.com/search?q=${value}`, "_blank")
          }
          style={{
            position: "absolute",
            left: "35%",
            width: "30%",
            marginTop: "3.5%",
            textAlign: "center",
          }}
          enterButton={true}
          autoFocus
        ></Search>
      </div>

    );
  }
}
