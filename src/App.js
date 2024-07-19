import React from "react";
import { useDispatch } from "react-redux";

import { Container, ButtonGroup, Button } from "./components/StyledComponents";
import { addItem, removeItem } from "./features/list/listSlice";
import List from "./components/List";

const App = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    const newItem = {
      id: Date.now(),
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
    };
    dispatch(addItem(newItem));
  };

  const handleRemove = () => {
    dispatch(removeItem());
  };

  return (
    <Container>
      <ButtonGroup>
        <Button primary onClick={handleAdd}>
          Add
        </Button>
        <Button onClick={handleRemove}>Delete</Button>
      </ButtonGroup>
      <List />
    </Container>
  );
};

export default App;
