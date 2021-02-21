import React, { PureComponent } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import EmojiResult from "./components/EmojiResult";
import filterEmoji from "./logic/filterEmoji";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResult emojiData={this.state.filteredEmoji} />
      </div>
    );
  }
}