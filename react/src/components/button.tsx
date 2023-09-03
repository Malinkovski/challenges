import React from "react";

interface ButtonProp {
  text: string;
  link: string;
}

class Button extends React.Component<ButtonProp> {
  render() {
    const { text, link } = this.props;
    return (
      <a href={link} className="button">
        <span>{text}</span>
      </a>
    );
  }
}

export default Button;
