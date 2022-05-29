import {
  MenuContainer,
  Title,
  Menu,
  MenuItem,
} from "../components/styles/Menu.styled";

const Homepage = () => {
  return (
    <>
      <MenuContainer>
        <Title>Bastion</Title>
        <Menu>
          <MenuItem>Continue</MenuItem>
          <MenuItem>Start New Game</MenuItem>
          <MenuItem>Options</MenuItem>
        </Menu>
      </MenuContainer>
    </>
  );
};

export default Homepage;
