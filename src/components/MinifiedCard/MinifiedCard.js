import withStates from "../../hocs/withStates";

const MinifiedCard = ({ cities }) => {
  const slicedCities = cities.slice(Math.max(cities.length - 3, 0)).reverse();

  return (
    <div className="minified-card">
      {slicedCities.map((item, index) => (
        <div className="card-1 card" key={index}>
          <ul>
            <li>{item}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default withStates(MinifiedCard);
