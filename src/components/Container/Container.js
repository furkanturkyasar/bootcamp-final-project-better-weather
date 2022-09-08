import LeftCard from "../LeftCard";
import RightCard from "../RightCard";
import withStates from "../../hocs/withStates";

const Container = ({ weather }) => {
  return (
    <div className="main-container">
      <LeftCard />
      {weather && <RightCard />}
    </div>
  );
};

export default withStates(Container);
