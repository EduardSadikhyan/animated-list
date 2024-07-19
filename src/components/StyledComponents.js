import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #f0f2f5;
  min-height: 100vh;
`;

export const ButtonGroup = styled.div`
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => (props.primary ? "#007bff" : "#dc3545")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.primary ? "#0056b3" : "#c82333")};
  }
`;

export const ListContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  width: 100%;
`;

export const ListItem = styled(motion.div)`
  width: 20%;
  height: 100px;
  margin: 10px;
  border-radius: 10px;
`;
