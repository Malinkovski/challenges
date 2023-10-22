import Button from "./Button";

const Cuisines = () => {
  const cuisines = [
    "Canteen",
    "Bukka",
    "Eatery",
    "Seafood",
    "Pizza",
    "Vegan",
    "Pasta",
    "American",
    "Japanese",
  ];

  return (
    <section>
      <h3>cuisines</h3>
      <nav className="cuisine-navbar">
        <ul>
          {cuisines.map((cuisine) => (
            <li key={cuisine}>
              <Button link={`/cuisines/${cuisine.toLowerCase()}`} title={cuisine} />
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Cuisines;
