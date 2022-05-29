import { useDispatch } from "react-redux";
import { changeScreen } from "../../../redux/features/mainMenuSlice";

import {
  MenuContainer,
  Title,
  Menu,
  MenuItem,
} from "../../../components/styles/Menu.styled";

function MainMenu() {
  const dispatch = useDispatch();
  const menuButtons = ["Continue", "Start New Game", "Options"];

  return (
    <MenuContainer>
      <Title>Bastion</Title>
      <Menu>
        {menuButtons.map((button, i) => (
          <MenuItem
            key={`menuButton${i}`}
            onClick={() => dispatch(changeScreen({ newScreen: button }))}
          >
            {button}
          </MenuItem>
        ))}
      </Menu>
    </MenuContainer>
  );
}

export default MainMenu;
