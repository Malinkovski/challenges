import "./css/main.scss";
import Button from "./components/button";
import DetailedCard from "./components/details-block";
import FooterNavigation from "./components/footer";
import Banner from "./components/banner";
import CardContainer from "./components/places-container";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* HEADER SECTION */}
      <section id="header">
        <Banner subHeader="summer vacation" header="Nomad nation" />
      </section>
      {/* MAIN CONTENT SECTION*/}
      <section id="main-section">
        <DetailedCard
          heading="Stories of Adventure"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            provident aspernatur veniam dolor, reprehenderit alias qui? Ducimus,
            alias! Accusamus quam quae non aperiam aliquam explicabo dolore qui
            laudantium."
          descriptionSmall=" Ea veniam mollitia nihil accusamus obcaecati porro. Quasi,
            tenetur ullam odio ipsa nesciunt nostrum atque quia iure ratione
            praesentium qui cupiditate cumque?"
          img="https://picsum.photos/seed/13/380/380"
        ></DetailedCard>
        {/*PLACES CONTAINER */}
        <CardContainer />
        <DetailedCard
          heading="Popular Adventure"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            provident aspernatur veniam dolor, reprehenderit alias qui? Ducimus,
            alias! Accusamus quam quae non aperiam aliquam explicabo dolore qui
            laudantium."
          descriptionSmall=" Ea veniam mollitia nihil accusamus obcaecati porro. Quasi,
            tenetur ullam odio ipsa nesciunt nostrum atque quia iure ratione
            praesentium qui cupiditate cumque?"
          img="https://picsum.photos/seed/160/380/380"
        ></DetailedCard>
      </section>
      {/* FOOTER SECTION */}
      <section id="footer">
        <FooterNavigation />
      </section>
    </div>
  );
};

export default App;
