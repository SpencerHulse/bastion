import styled from "styled-components";
const elementWidth = 300;

export const MenuContainer = styled.div`
  background-color: beige;
  text-align: center;
  max-width: 100%;
  height: 100vh;
  padding: 0 20px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  position: absolute;
  width: ${elementWidth}px;
  top: 30%;
  left: calc(50% - ${elementWidth / 2}px);
`;

export const Menu = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${elementWidth}px;
  top: 50%;
  left: calc(50% - ${elementWidth / 2}px);
  list-style: none;
  padding: 0px;
`;

export const MenuItem = styled.li`
  width: 200px;
  padding: 15px;
  margin: 5px auto;
  background-color: #e2e299;
  cursor: pointer;

  &:hover {
    background-color: #d8d89e;
  }
`;
