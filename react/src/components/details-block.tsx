import React from "react";

interface CardProps {
  heading: string;
  description: string;
  descriptionSmall: string;
  img: string;
}

class DetailedCard extends React.Component<CardProps> {
  render() {
    const { heading, description, descriptionSmall, img } = this.props;
    return (
      <div className="wrapper">
        <div className="detailed-card">
          <div className="inner-content">
            <div className="details">
              <div>
                <h3>ABOUT</h3>
                <h2>{heading}</h2>
                <p>{description}</p>
                <p>{descriptionSmall}</p>
              </div>
            </div>
            <div className="card-img">
              <img src={img} alt={heading} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailedCard;
