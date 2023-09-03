import React from "react";

interface CardProps {
  header: string;
  subHeader: string;
  bgImg?: string;
}

class Card extends React.Component<CardProps> {
  render() {
    const { header, subHeader, bgImg } = this.props;

    // Define the inline style
    const cardStyle: React.CSSProperties = {
      backgroundImage: `url(${bgImg})`
    };

    return (
      <div className="card" style={cardStyle}>
        <div className="inner-card">
          <h2>{header}</h2>
          <h4>{subHeader}</h4>
        </div>
      </div>
    );
  }
}

export default Card;