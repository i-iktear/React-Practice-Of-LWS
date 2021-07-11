import React, { Component } from "react";

export default class Button extends Component {
  shouldComponentUpdate = (nextProps) => {
    const { change: currentChange, locale: currentLocale } = this.props;
    const { change: nextChange, locale: nextLocale } = nextProps;

    if (currentChange === nextChange && currentLocale === nextLocale) {
      return false;
    } else return true;
  };
  render() {
    const { change, locale, show } = this.props;
    console.log(locale);
    return (
      <div>
        <button type="button" onClick={() => change(locale)}>
          {locale === "bn-BD" ? "Change to Bangla" : "Change To English"}
        </button>
        {show && <p>Hello Bro!</p>}
      </div>
    );
  }
}
