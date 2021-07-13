import React, { Component } from "react";

export default class Emoji extends Component {
  addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;
  render(overText) {
    let text = "This is Emoji Class Component";

    if (overText) {
      text = overText;
    }

    return <div> {text} </div>;
  }
}
