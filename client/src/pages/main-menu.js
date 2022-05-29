import Continue from "../components/GameMenu/Continue";
import MainMenu from "../components/GameMenu/MainMenu";
import { useSelector } from "react-redux";

const Homepage = () => {
  const { screen } = useSelector((state) => state.mainMenu);

  switch (screen) {
    case "MainMenu":
      return <MainMenu />;
    case "Continue":
      return <Continue />;
    default:
      return <h1>Loading</h1>;
  }
};

export default Homepage;
