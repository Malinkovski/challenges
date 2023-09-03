import React from "react";
import Card from "./place";

interface PlaceData {
  id: number;
  place: string;
  desc: string;
  img: string;
}

class CardContainer extends React.Component {
  state = {
    places: [] as PlaceData[],
    loading: true,
  };

  componentDidMount() {
    fetch("http://localhost:5001/places")
      .then((res) => res.json())
      .then((data: PlaceData[]) => {
        this.setState({ places: data, loading: false });
      })
      .catch((error) => {
        console.error("fetching error", error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { places, loading } = this.state;

    if (loading) {
      return <div><h2>Loading...</h2></div>;
    }
    return (
      <section id="card-container">
        {places.map(({ id, place, desc, img }) => (
          <Card key={id} header={place} subHeader={desc} bgImg={img} />
        ))}
      </section>
    );
  }
}

export default CardContainer;
