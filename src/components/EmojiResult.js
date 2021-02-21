import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';

import EmojiRow from "./EmojiRow";

export default class EmojiResult extends PureComponent {
  static propTypes = {
    emojiData: PropTypes.array
  };

  componentDidMount() {
    this.clipboard = new Clipboard(".copy-to-clipboard");
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    return (
      <div className="component-emoji-result">
        {this.props.emojiData.map(emojiData => (
          <EmojiRow
            key={emojiData.title}
            symbol={emojiData.symbol}
            title={emojiData.title}
          />
        ))}
      </div>
    );
  }
}