import React from "react";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

import { ListContainer, ListItem } from "./StyledComponents";

const List = () => {
  const items = useSelector((state) => state.list.items);

  return (
    <ListContainer>
      <AnimatePresence>
        {items.map((item) => (
          <ListItem
            key={item.id}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
            style={{ backgroundColor: item.color }}
          />
        ))}
      </AnimatePresence>
    </ListContainer>
  );
};

export default List;
