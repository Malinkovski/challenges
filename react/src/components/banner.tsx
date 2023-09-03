import React from "react";
import Button from "./button";

interface BannerHeader{
    subHeader: string;
    header: string;
}

class Banner extends React.Component<BannerHeader>{
    render() {
        const { subHeader, header } = this.props;
        return(
            <div className="wrapper">
            <div className="heading">
              <h3>{subHeader}</h3>
              <h1>{header}</h1>
              <Button text="Read more" link="#" />
            </div>
          </div>
        )
    }
}

export default Banner;
